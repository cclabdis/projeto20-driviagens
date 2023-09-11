import { errors } from "../errors/errors.js";
import { passengersRepository } from "../repositories/passengers.repositories.js";

async function create(firstName, lastName) {
    await passengersRepository.create(firstName, lastName)
}

async function getPassengersTravels(name, page) {
    const result = await passengersRepository.getPassengersTravels(name, page)
    if (result.length > 10 ) throw errors.internalServerError()
    return result
}

export const passengersService = { create, getPassengersTravels }
