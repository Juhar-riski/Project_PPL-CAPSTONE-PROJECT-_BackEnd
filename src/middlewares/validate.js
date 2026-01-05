const validate = (schema) => (req, res, next) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (err) {
      return res.status(400).json({
        status: "failed",
        message: err.issues.map(e => e.message),
      });
    }
  };
  
  export default validate;
  