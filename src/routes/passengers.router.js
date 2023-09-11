import { Router } from "express"
// import validatePage from "../middlewares/validatePage.middleware.js"
import validateSchema from "../middlewares/schema.middleware.js"
import { passengersSchema } from "../schemas/driviagens.schema.js"
import { passengersController } from "../controllers/passengers.controllers.js"


const passengerRouter = Router()

passengerRouter.post("/passengers", validateSchema(passengersSchema), passengersController.create)
passengerRouter.get("/passengers/travels", passengersController.getTravels)

export default passengerRouter