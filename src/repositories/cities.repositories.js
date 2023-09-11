import { db } from "../database/database.connection.js"

async function create(name) {
    await db.query(
        `INSERT INTO cities (name) VALUES($1);`,
        [name]
    )
}

async function exists(name) {
    await db.query(
        'SELECT COUNT(*) FROM cities WHERE name = $1;',
        [name]
    )
}

export const citiesRepository = { create, exists }