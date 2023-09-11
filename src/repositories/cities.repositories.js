import { db } from "../database/database.connection.js"

async function create(name) {
    await db.query(
        `INSERT INTO cities (name) VALUES($1);`,
        [name]
    )
}


async function exists(name) {
    const result = await db.query(
      `SELECT * FROM cities WHERE name = $1;`,
      [name]
    )
    return result.rows.length > 0;
  }



export const citiesRepository = { create, exists }