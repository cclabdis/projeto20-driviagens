import { citiesRepository } from "../repositories/cities.repositories.js"

async function create(name) {
  const result = await citiesRepository.exists(name)
  if (result > 0) return res.status(409).send("conflict")
  await citiesRepository.create(name)
}

export const citiesService = { create }