import { flightsService } from "../services/flights.services.js"
import httpStatus from "http-status"

async function create(req, res) {
        const { origin, destination, date} = req.body
      
        await flightsService.create(origin, destination, date)
        res.sendStatus(httpStatus.CREATED)
      }



async function allFlights() {

}

export const flightsController = { allFlights, create}