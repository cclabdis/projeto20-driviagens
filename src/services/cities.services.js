import { citiesRepository } from "../repositories/cities.repositories.js"
import { errors } from "../errors/errors.js"

async function create(name) {
  const result = await citiesRepository.exists(name)
  console.log(result)
  if (result === false) throw errors.conflict()
  await citiesRepository.create(name)
}

export const citiesService = { create }