import joiBase from "joi"
import joiDate from "@joi/date"
const joi = joiBase.extend(joiDate)

export const passengersSchema = joi.object({
   firstName: joi.string().min(2).max(100).required().messages({
        'string.base': `"firstName" é um campo do tipo texto.`,
        'string.min': `"firstName" deve ter no mínimo 2 caracteres.`,
        'string.max': `"firstName" deve ter no máximo 100 caracteres.`,
        'any.required': `O campo "firstName" é obrigatório.`
    }),
    lastName: joi.string().min(2).max(100).required().messages({
        'string.base': `"lastName" é um campo do tipo texto.`,
        'string.min': `"lastName" deve ter no mínimo 2 caracteres.`,
        'string.max': `"lastName" deve ter no máximo 100 caracteres.`,
        'any.required': `O campo "lastName" é obrigatório.`
    })
})


export const citiesSchema = joi.object({
    name: joi.string().min(2).max(50).required().messages({
         'string.base': `"Name" é um campo do tipo texto.`,
         'string.min': `"Name" deve ter no mínimo 2 caracteres.`,
         'string.max': `"Name" deve ter no máximo 50 caracteres.`,
         'any.required': `O campo "name" é obrigatório.`
     })
})

//na descricao do projeto no post cities nao descreve se é obrigatório

 export const flightsSchema = joi.object({
    origin: joi.number().required().messages({
        'number.base': `"destination" é um campo do tipo número referente a uma cidade.`,
        'any.required': `O campo "nome" é obrigatório.`
    }),
    destination: joi.number().required().messages({
         'number.base': `"destination" é um campo do tipo número referente a uma cidade.`,
         'any.required': `O campo "nome" é obrigatório.`
     }),
     date: joi.date().format("DD-MM-YYYY").required().messages({
         'date.base': `"Lançamento" é um campo do tipo data.`,
         'date.format': `O formato da data de lançamento deve ser: DD-MM-YYYY.`,
         'any.required': `O campo "lançamento" é obrigatório.`
     })
 })

 export const travelsSchema = joi.object({
    passengerId: joi.number().required().messages({
         'number.base': `"passengerId" é um campo do tipo número referente ao código do passageiro.`,
         'any.required': `O campo "nome" é obrigatório.`
     }),
     flightId: joi.number().required().messages({
        'number.base': `"flightId" é um campo do tipo número referente ao numero de um voo.`,
        'any.required': `O campo "nome" é obrigatório.`
    })
 })