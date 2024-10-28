const jwt = require("jsonwebtoken");

const accessTokenSecret = "youraccesstokensecret";
const refreshTokenSecret = "yourrefreshtokensecrethere";

// Middleware para verificar el token
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "token no es valido" });
      }
      
      res.locals.user = user;
      next();
    });
  } else {
    res.status(401).json({ message: "Acceso denegado" });
  }
};

module.exports = { 
    authenticateJWT, 
    accessTokenSecret, 
    refreshTokenSecret 
};
