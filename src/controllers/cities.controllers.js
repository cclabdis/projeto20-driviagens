import { citiesService } from "../services/cities.services.js"
import httpStatus from "http-status"

async function create(req, res) {
  const { name } = req.body
  console.log(name)

  await citiesService.create(name)
  res.sendStatus(httpStatus.CREATED)
}

  export const citiesControllers = { create }