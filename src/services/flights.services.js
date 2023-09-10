import { flightsRepository } from "../repositories/flights.repositories"

async function create(origin, destination, date) {

    if (origin === destination) {
        return res.status(409).send("Conflict");
      }

    const cityOrigin = await flightsRepository.exists(origin)
    const cityDestination = await flightsRepository.exists(destination)

    if (!cityDestination || !cityOrigin) {
        return res.status(404).send("notFound");
      }
  
    await flightsRepository.create(origin, destination, date)
}

async function allFlights() {
    const flights = await flightsRepository.allFlights()
    res.send(flights)

}

const flightsService = { allFlights, create}