import httpStatus from "http-status"

export function errorHandler(error, req, res, next) {
    
    if (error.code === '23505' && error.constraint === 'games_name_key') {
        return res.status(httpStatus.CONFLICT).send("Este jogo já foi adicionado!")
    }

    if (error.type === "joiError") {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
    }

    if (error.type === "notFound") {
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }
    if (error.type === "conflict") {
        return res.status(httpStatus.CONFLICT).send(error.message)
    }
    if (error.type === "badRequest") {
        return res.status(httpStatus.BAD_REQUEST).send(error.message)
    }
    if (error.type === "unprocessableEntity") {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message)

  
}