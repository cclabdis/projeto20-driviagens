import { Router } from "express"
import citiesRouter from "./cities.router.js"
import flightsRouter from "./flights.router.js"
import passengerRouter from "./passengers.router.js"


const router = Router()

router.use(citiesRouter) 
router.use(flightsRouter)
router.use(passengerRouter)

export default router