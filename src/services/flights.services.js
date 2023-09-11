import { errors } from "../errors/errors.js"
import { flightsRepository } from "../repositories/flights.repositories.js"

async function create(origin, destination, date) {
  const currentDate = new Date();
      
  if (date <= currentDate)  throw errors.unprocessableEntity()

  if (origin === destination) throw errors.conflict()

  const cityOrigin = await flightsRepository.exists(origin, 'id');
  const cityDestination = await flightsRepository.exists(destination, 'id');


  if (!cityDestination)  throw errors.notFound("Cidade de destino")
  if(!cityOrigin) throw errors.notFound("Cidade de origem")

  await flightsRepository.create(origin, destination, convertDate(date, {decode: false}))
}

function convertDate(inputDate, {decode = false}) {
  const parts = inputDate.split('-');

  if (parts.length === 3) {
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];

    if(decode) 
      return `${day}-${month}-${year}`;
 
    return `${year}-${month}-${day}`;

  } else {
    return null;
  }
}

async function getFlights(origin, destination, smallerDate, biggerDate, page) {
  

  if ((!smallerDate && biggerDate) || (smallerDate && !biggerDate)) {
    throw errors.unprocessableEntity("Data inválida")
  }
  if (smallerDate && biggerDate && smallerDate > biggerDate) {
    throw errors.badRequest();
  }

  const resp = await flightsRepository.filterFlights(origin ? origin.trim() : null, destination ? destination.trim() : null, page);

  return resp.rows
    .filter((flight) => 
      (!smallerDate || convertDate(flight.date, {decode: true}) >= smallerDate) &&
      (!biggerDate || convertDate(flight.date, {decode: true}) <= biggerDate)
    ).map((flight) => ({
      id: flight.id,
      origin: flight.origin,
      destination: flight.destination,
      date: convertDate(flight.date, {decode: true})
    }));
}


export const flightsService = { create, getFlights }