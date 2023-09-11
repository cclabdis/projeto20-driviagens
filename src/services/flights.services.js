import { errors } from "../errors/errors.js"
import { flightsRepository } from "../repositories/flights.repositories.js"

async function create(origin, destination, date) {
  console.log(origin, destination, date)

    if (origin === destination)  throw errors.conflict()
    //aqui [e conflito]

    const cityOrigin = await flightsRepository.exists(origin)
    const cityDestination = await flightsRepository.exists(destination)

    if (!cityDestination || !cityOrigin)  throw errors.notFound()
  
    await flightsRepository.create(origin, destination, date)
}

async function allFlights() {
    const flights = await flightsRepository.allFlights()
    res.send(flights)

}

export const flightsService = { allFlights, create}