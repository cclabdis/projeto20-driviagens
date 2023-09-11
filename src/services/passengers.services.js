import { passengersRepository } from "../repositories/passengers.repositories.js";
import { errors } from "../errors/errors.js"

async function create(firstName, lastName) {
    await passengersRepository.create(firstName, lastName)

}


async function getTravelsgetPassengersTravels(name){
    const passengers = await passengersRepository.getPassengersTravels(name);
    // Implemente aqui a lógica para ordenar os passageiros por viagens (decrescente)
    // e limitar o número de resultados a 10, conforme especificado.
    return passengers;

}
export const passengersService = { create, getTravelsgetPassengersTravels }