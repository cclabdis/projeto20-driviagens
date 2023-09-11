import { db } from "../database/database.connection.js"

//tipo post
async function create(firstName, lastName) {
    await db.query(
        `INSERT INTO passengers (firstName, lastName) VALUES($1, $2);`,
        [firstName, lastName]
    )

}


//TIPO GET
async function getTravels() {
    await db.query(
        `INSERT INTO `
    )
}

// - [ ]  Deve retornar a relação de todos os passageiros com suas respectivas quantidades de viagens:

//     ```sql
//     [
//     	{ passenger: "Full Name", travels: 10 },
//     	{ passenger: "Full Name 2", travels: 5 },
//     	// ...
//     ]
//     ```

// - [ ]  O resultado sempre deve vir ordenado por viagens, do maior para para o menor.
// - [ ]  O máximo de resultados que podem ser obtidos em uma requisição são `10`. Caso a quantidade ultrapasse, o sistema deve retornar erro com status code `500` `Internal Server Error` e a mensagem `Too many results`.
// - [ ]  A rota deve aceitar a query `name` para filtrar a busca (`/passengers/travels?name=Diego`)
//     - [ ]  A busca deve ser feita com `ILIKE %NOME%`.  Exemplo: `/passengers/travels?name=Teste` :
export const passengersRepository = { create, getTravels }