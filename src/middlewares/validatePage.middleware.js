import { errors } from "../errors/errors.js";


export default function validatePage(req, res, next) {

  const page = req.query.page;

  if (!/^\d+$/.test(page) || parseInt(page) <= 0)   throw errors.badRequest("Item") 

  res.locals.page = page;
  next();
}
