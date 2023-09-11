import { Router } from "express"
// import validatePage from "../middlewares/validatePage.middleware.js"
import validateSchema from "../middlewares/schema.middleware.js"
import { flightsSchema } from "../schemas/driviagens.schema.js"
import { flightsController } from "../controllers/flights.controllers.js"

const flightsRouter = Router()

flightsRouter.post("/flights", validateSchema(flightsSchema), flightsController.create)
flightsRouter.get("/flights",  flightsController.allFlights)

export default flightsRouter

