import { Router } from "express"
import validatePage from "../middlewares/validatePage.middleware.js"
import { getTravels, postPassenger } from "../controllers/passengers.controllers.js"


const passengerRouter = Router()

passengerRouter.post("/passengers", postPassenger)
passengerRouter.get("/passengers/travels", validatePage, getTravels)

export default passengerRouter