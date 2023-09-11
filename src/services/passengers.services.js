import { passengersRepository } from "../repositories/passengers.repositories.js";

async function create(firstName, lastName) {
    await passengersRepository.create(firstName, lastName)
}

async function getPassengersTravels(name, page) {
    
    return await passengersRepository.getPassengersTravels(name, page);;
}

export const passengersService = { create, getPassengersTravels }
