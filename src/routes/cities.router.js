import { Router } from "express"
import { postCity } from "../controllers/cities.controllers.js"


const citiesRouter = Router()

citiesRouter.post("/cities", postCity)

export default citiesRouter