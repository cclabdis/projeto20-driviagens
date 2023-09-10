import { db } from "../database/database.connection.js"

//tipo post

async function create(passengerId, flightId) {
    await db.query(
        `INSERT INTO travels (passengerId, flightId) VALUES ($1, $2); `,
        [passengerId, flightId]
    )

}


// O id do passageiro e do voo devem ser ids existentes. Caso não sejam, emita o erro 404 (Not Found).

export const travelsRepository = { create }