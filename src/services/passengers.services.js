import { passengersRepository } from "../repositories/passengers.repositories.js";
import { errors } from "../errors/errors.js"

async function create(firstName, lastName) {
    await passengersRepository.create(firstName, lastName)

}

function splitName(name) {  
    if (!name) 
        return {firstName: null, lastName: null};
    
    const parts = name.split(' ');
    return {firstName: parts[0], lastName: parts[1]}
}

async function getPassengersTravels(name){
    const {firstName, lastName} = splitName(name);
    
    const passengers = await passengersRepository.getPassengersTravels(firstName, lastName);
    console.log(passengers)
    
    return passengers;
}
export const passengersService = { create, getPassengersTravels }