import express from "express"
import "express-async-errors"
import cors from "cors"
import router from "./routes/index.router.js"

import {errorHandler} from "./middlewares/errorHandler.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)
app.use(errorHandler)

const PORT = 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))