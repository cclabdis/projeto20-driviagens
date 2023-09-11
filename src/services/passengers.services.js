import { passengersRepository } from "../repositories/passengers.repositories.js";

async function create(firstName, lastName) {
    await passengersRepository.create(firstName, lastName)
}

async function getPassengersTravels(name) {
    return await passengersRepository.getPassengersTravels(name);;
}

export const passengersService = { create, getPassengersTravels }
