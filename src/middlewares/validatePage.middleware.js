import { errors } from "../errors/errors.js";


export default function validatePage(req, res, next) {
  const page = parseInt(req.query.page);

  if (isNaN(page) || page <= 0)  throw errors.badRequest("Item") 

  res.locals.page = page;
  next();
}
