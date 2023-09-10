import { db } from "../database/database.connection.js"

//tipo post

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


// Não é permitido adicionar cidades com nomes repetidos, caso isso aconteça, emita o erro 409 (Conflict).
export const citiesRepository = { create, exists }