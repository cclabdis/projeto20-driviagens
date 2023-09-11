import { flightsService } from "../services/flights.services.js"
import httpStatus from "http-status"

async function create(req, res) {
        const { origin, destination, date} = req.body
      
        await flightsService.create(origin, destination, date)
        res.sendStatus(httpStatus.CREATED)
      }

async function allFlights(req, res) {
  const { origin, destination, "smaller-date": smallerDate, "bigger-date": biggerDate} = req.query;
  const { page } = res.locals

  const flights = await flightsService.getFlights( origin, destination, smallerDate, biggerDate, page );
  res.status(httpStatus.OK).send(flights);

}

export const flightsController = { allFlights, create}