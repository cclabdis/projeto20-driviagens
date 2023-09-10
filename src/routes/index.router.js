import { Router } from "express"
import citiesRouter from "./cities.router.js"
import flightsRouter from "./flights.router.js"
import passengerRouter from "./passengers.router.js"
import travelsRouter from "./travels.routes.js"


const router = Router()

router.use(citiesRouter) 
router.use(flightsRouter)
router.use(passengerRouter)
router.use(travelsRouter)

export default router