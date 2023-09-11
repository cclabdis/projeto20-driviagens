import { errors } from "../errors/errors.js";


export default function validatePage(req, res, next) {

  let page = req.query.page;

  page = page ? parseInt(page) : 1;

  if (!/^\d+$/.test(page) || parseInt(page) <= 0)   throw errors.badRequest("Item") 

  res.locals.page = page;
  next();
}
