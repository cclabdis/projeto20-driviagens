import { errors } from "../errors/errors.js"
import { flightsRepository } from "../repositories/flights.repositories.js"

async function create(origin, destination, date) {
  
  if (origin === destination) throw errors.conflict()

  const cityOrigin = await flightsRepository.exists(origin, 'id');
  const cityDestination = await flightsRepository.exists(destination, 'id');
  

  if (!cityDestination || !cityOrigin) throw errors.notFound()

  await flightsRepository.create(origin, destination, convertDate(date))
}

function convertDate(inputDate) {
  const parts = inputDate.split('-');
  
  if (parts.length === 3) {
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    
    const newDate = `${year}-${month}-${day}`;
    
    return newDate;
  } else {
    return null;
  }
}

async function allFlights() {
  const flights = await flightsRepository.allFlights()
  res.send(flights)

}

export const flightsService = { allFlights, create }