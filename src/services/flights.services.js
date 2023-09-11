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

// async function getAllFlights() {
//   const allFlights = await flightsRepository.allFlights()
//   return allFlights;
// }

async function getFilteredFlights(queryParams) {
  const filteredFlights = flightsRepository.filterFlights(queryParams);
  return filteredFlights;
}


// function filterFlights(allFlights, queryParams) {
//   let filteredFlights = [...allFlights];

//   if (queryParams.origin) {
//     filteredFlights = filteredFlights.filter(flight => flight.origin === queryParams.origin);
//   }

//   if (queryParams.destination) {
//     filteredFlights = filteredFlights.filter(flight => flight.destination === queryParams.destination);
//   }
//   filteredFlights.sort((a, b) => new Date(a.date) - new Date(b.date));
//   console.log(filteredFlights)

//   return filteredFlights;
// }


export const flightsService = { create,  getFilteredFlights }