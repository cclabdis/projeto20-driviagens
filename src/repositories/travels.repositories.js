import { db } from "../database/database.connection.js"

async function create(passengerId, flightId) {
    await db.query(
        `INSERT INTO travels (passengerId, flightId) VALUES ($1, $2); `,
        [passengerId, flightId]
    )

}

async function passengerExists(value, id) {
    const result = await db.query(
        `SELECT COUNT(*) FROM passengers WHERE ${id} = $1;`,
        [value]
    );
    return result.rows[0].count > 0;
}

async function flightsExists(value, id) {
    const result = await db.query(
        `SELECT COUNT(*) FROM flights WHERE ${id} = $1;`,
        [value]
    );
    return result.rows[0].count > 0;
}


export const travelsRepository = { create, passengerExists, flightsExists }