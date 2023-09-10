import { db } from "../database/database.connection.js"


//tipo post
async function create(origin, destination, date) {
    await db.query(
        `INSERT INTO flights (origin, destination, date) VALUES($1, $2, $3);`,
        [origin, destination, date]
    )
}

// - [ ]  A cidades de origem e destino devem ser ids de cidades que existem na tabela `cities`. Caso não sejam, emita o erro `404 (Not Found)`.
// - [ ]  Origem e destino devem ser diferentes. Caso não seja, emita o erro `409 (Conflict)`.
// - [ ]  A data do voo deve ser maior do que a data atual, caso não seja, emita o erro `422 (Unprocessable Entity)`

async function exists(cities) {
    await db.query(
        'SELECT COUNT(*) FROM cities WHERE id = $1;',
        [cities]
    )
}


//tipo get
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