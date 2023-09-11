import httpStatus from "http-status"
import { passengersService } from "../services/passengers.services.js";


async function create(req, res) {
    const { firstName, lastName } = req.body

    await passengersService.create(firstName, lastName)
    res.sendStatus(httpStatus.CREATED)
}


async function getTravels() {
    const page = res.locals.page;

}




export const passengersController = { create, getTravels }