module.exports = errorHandler;

function errorHandler(err, req, res, next) {
  // Application error
  if (typeof (err) == "string") {
    return res.status(400).json({ message: err });
  }
  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });
  }
  // // JWT authentication error
  // if (err.name === "UnauthorizedError") {
  //   return res.status(401).json({ message: "Invalid Token" });
  // }
  // Default error
  return res.status(500).json({ message: err.message })
}