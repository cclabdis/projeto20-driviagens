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



async function allFlights() {
    const result = await db.query(
        `SELECT * FROM flights
        ORDER BY date DESC;`
    )

    return result

}


// { id: 2, origin: "Salvador", destination: "Fortaleza", date: "27-07-2023"},
// O resultado sempre deve vir ordenado por datas, da mais próxima para a mais distante.
export const flightsRepository = { allFlights, create, exists }