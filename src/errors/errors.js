function joi(message) {
    return {
        type: "joiError",
        message
    }
}

function notFound(resource = "Item") {
    return {
        type: "notFound",
        message: `${resource} não foi encontrado!`
    }
}


function conflict(resource = "Item") {
    return {
        type: "conflict",
        message: `${resource} já existe e não pode ser duplicado!`
    }
}

export const errors = { joi, notFound, conflict };