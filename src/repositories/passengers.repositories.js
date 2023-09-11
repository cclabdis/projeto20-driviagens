import { db } from "../database/database.connection.js"

//tipo post
async function create(firstName, lastName) {
    await db.query(
        `INSERT INTO passengers (firstName, lastName) VALUES($1, $2);`,
        [firstName, lastName]
    )

}


//TIPO GET
async function getPassengersTravels(firstName, lastName) {
   const allPassengers =  await db.query(
        `SELECT
            CONCAT(p.firstname, ' ', p.lastname) AS passenger,
            COUNT(t.flightid) AS travels
        FROM
            passengers p
            JOIN travels t ON p.id = t.passengerid
        WHERE
            ($1::VARCHAR IS NULL OR (p.firstname ILIKE $1 AND p.lastname ILIKE $2))
        GROUP BY
            passenger
        ORDER BY
            travels DESC
        LIMIT
            10;`,
        [firstName, lastName]
    )
    return allPassengers.rows
}
export const passengersRepository = { create, getPassengersTravels }