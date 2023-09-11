import { db } from "../database/database.connection.js"

async function create(firstName, lastName) {
    await db.query(
        `INSERT INTO passengers (firstName, lastName) VALUES($1, $2);`,
        [firstName, lastName]
    )

}

async function getPassengersTravels(name, page) {
    const pageSize = 10
    const offset = (page - 1) * pageSize

    const allPassengers = await db.query(
        `SELECT
            CONCAT(p.firstname, ' ', p.lastname) AS passenger,
            COUNT(t.flightid) AS travels
        FROM
            passengers p
            JOIN travels t ON p.id = t.passengerid
        WHERE
            ($1::VARCHAR IS NULL OR p.firstname ILIKE '%' || $1 || '%'
            OR p.lastname ILIKE '%' || $1 || '%')
        GROUP BY
            passenger
        ORDER BY
            travels DESC
        LIMIT
            $2
        OFFSET
            $3;`,
        [name, pageSize, offset]
    )
    return allPassengers.rows
}
export const passengersRepository = { create, getPassengersTravels }