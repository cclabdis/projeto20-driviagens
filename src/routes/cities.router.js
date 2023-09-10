import { Router } from "express"
import validateSchema from "../middlewares/schema.middleware.js"
import { citiesSchema } from "../schemas/driviagens.schema.js"
import { citiesControllers } from "../controllers/cities.controllers.js"


const citiesRouter = Router()

citiesRouter.post("/cities", validateSchema(citiesSchema), citiesControllers.create)

export default citiesRouter