import { travelsRepository } from "../repositories/travels.repositories.js";
import { errors } from "../errors/errors.js"

async function create(passengerId, flightId) {

    const passengerExists = await travelsRepository.passengerExists(passengerId, 'id');
    const flightExists = await travelsRepository.flightsExists(flightId, 'id');

    if (!passengerExists) {
        throw errors.notFound("passengerId");
    }

    if (!flightExists) {
        throw errors.notFound("flightId");
    }

    await travelsRepository.create(passengerId, flightId)

}

export const travelsService = { create }