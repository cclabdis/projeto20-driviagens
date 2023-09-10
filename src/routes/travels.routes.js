import { Router } from "express"
import validateSchema from "../middlewares/schema.middleware.js"
import { travelsSchema } from "../schemas/driviagens.schema.js"
import { travelsControllers } from "../controllers/travels.controllers.js"


const travelsRouter = Router()

travelsRouter.post("/travels", validateSchema(travelsSchema), travelsControllers.create)

export default travelsRouter