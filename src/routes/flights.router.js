import { Router } from "express"
import validatePage from "../middlewares/validatePage.middleware.js"
import { getFlights, postFlight } from "../controllers/flights.controllers.js"


const flightsRouter = Router()

flightsRouter.post("/flights", postFlight)
flightsRouter.get("/flights", validatePage, getFlights)

export default flightsRouter

