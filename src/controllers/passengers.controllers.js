import httpStatus from "http-status"
import { passengersService } from "../services/passengers.services.js";


async function create(req, res) {
    const { firstName, lastName } = req.body
    await passengersService.create(firstName, lastName)
    res.sendStatus(httpStatus.CREATED)
}

async function getTravels(req, res) {
    const { name } = req.query
    const passengers = await passengersService.getPassengersTravels(name)
    res.status(httpStatus.OK).send(passengers)
}

export const passengersController = { create, getTravels }
