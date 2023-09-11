import { passengersRepository } from "../repositories/passengers.repositories.js";

async function create(firstName, lastName) {
     await passengersRepository.create(firstName, lastName)
     
}




async function getTravels() {
    const page = res.locals.page;

}
export const passengersService = {create, getTravels}