import { citiesRepository } from "../repositories/cities.repositories.js"
import { errors } from "../errors/errors.js"

async function create(name) {
  const result = await citiesRepository.exists(name)
  if (result > 0) throw errors.conflict()
  await citiesRepository.create(name)
}

export const citiesService = { create }