export default function validatePage(req, res, next) {
    const page = parseInt(req.query.page);
  
    if (isNaN(page) || page <= 0) {
      return res.status(400).json({ error: 'Invalid page value' });
    }
  
    res.locals.page = page;
    next(); 
  }
  