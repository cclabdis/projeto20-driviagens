import { db } from "../database/database.connection.js"

async function create(firstName, lastName) {
    await db.query(
        `INSERT INTO passengers (firstName, lastName) VALUES($1, $2);`,
        [firstName, lastName]
    )

}

async function getPassengersTravels(name) {
   const allPassengers =  await db.query(
        `SELECT
            CONCAT(p.firstname, ' ', p.lastname) AS passenger,
            COUNT(t.flightid) AS travels
        FROM
            passengers p
            JOIN travels t ON p.id = t.passengerid
        WHERE
            ($1::VARCHAR IS NULL OR (CONCAT(p.firstname, ' ', p.lastname) ILIKE $1))
        GROUP BY
            passenger
        ORDER BY
            travels DESC
        LIMIT
            10;`,
        [name]
    )
    return allPassengers.rows
}
export const passengersRepository = { create, getPassengersTravels }