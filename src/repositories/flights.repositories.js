import { db } from "../database/database.connection.js"


async function create(origin, destination, date) {
    await db.query(
        `INSERT INTO flights (origin, destination, date) VALUES($1, $2, $3);`,
        [origin, destination, date]
    )
}

async function exists(value, id) {
    const result = await db.query(
        `SELECT COUNT(*) FROM cities WHERE ${id} = $1;`,
        [value]
    );
    console.log(result)
    return result.rows[0].count > 0;
}



// async function allFlights() {
//     const { rows } = await db.query(
//         `SELECT * FROM flights;`
//     )
//     return rows
// }


async function filterFlights(queryParams) {
    const { origin, destination, smallerDate, biggerDate } = queryParams;

    const result = await db.query(
        `SELECT id, origin, destination, date
       FROM flights
       WHERE
         (:origin IS NULL OR origin = :origin) AND
         (:destination IS NULL OR destination = :destination)
       ORDER BY date;`
    );
    console.log(result.rows)
    return result.rows;
}

export const flightsRepository = { filterFlights, create, exists }
// export const flightsRepository = { allFlights, create, exists}