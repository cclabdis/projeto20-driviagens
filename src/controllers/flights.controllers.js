import { flightsService } from "../services/flights.services.js"
import httpStatus from "http-status"

async function create(req, res) {
        const { origin, destination, date} = req.body
      
        await flightsService.create(origin, destination, date)
        res.sendStatus(httpStatus.CREATED)
      }

async function allFlights(req, res) {
  const queryParams = req.query;

  // const allFlights = await flightsService.getAllFlights();
  // console.log(allFlights)
  //   console.log(queryParams)
  const filteredFlights = flightsService.getFilteredFlights(queryParams);

  res.status(httpStatus.OK).send(filteredFlights);

}

export const flightsController = { allFlights, create}