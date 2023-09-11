import { Router } from "express"
import validateSchema from "../middlewares/schema.middleware.js"
import { flightsSchema } from "../schemas/driviagens.schema.js"
import { flightsController } from "../controllers/flights.controllers.js"
import validatePage from "../middlewares/validatePage.middleware.js"

const flightsRouter = Router()

flightsRouter.post("/flights", validateSchema(flightsSchema), flightsController.create)
flightsRouter.get("/flights", validatePage ,flightsController.allFlights)

export default flightsRouter

