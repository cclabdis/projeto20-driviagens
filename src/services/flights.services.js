import { errors } from "../errors/errors.js"
import { flightsRepository } from "../repositories/flights.repositories.js"
import dayjs from "dayjs"

async function create(origin, destination, date) {

  if (origin === destination) throw errors.conflict()

  const cityOrigin = await flightsRepository.exists(origin, 'id');
  const cityDestination = await flightsRepository.exists(destination, 'id');


  if (!cityDestination || !cityOrigin) throw errors.notFound()

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

async function getFlights(origin, destination, smallerDate, biggerDate) {

  if ((!smallerDate && biggerDate) || (smallerDate && !biggerDate)) {
    throw { type: "unprocessableEntity", message: "Data inválida" };
  }
  if (smallerDate && biggerDate && smallerDate > biggerDate) {
    throw { type: "badRequest", message: "Data inválida" };
  }

  const resp = await flightsRepository.filterFlights(origin ? origin.trim() : null, destination ? destination.trim() : null);

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