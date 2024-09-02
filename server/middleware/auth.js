const jwt = require('jsonwebtoken');
const adminEmails = ["admin1@example.com", "admin2@example.com"]; // List of admin emails

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = decoded;
    next();
  });
};

const isAdmin = (req, res, next) => {
  if (req.user && adminEmails.includes(req.user.email)) {
    next();
  } else {
    res.status(403).json({ message: 'Access denied' });
  }
};

module.exports = { authMiddleware, isAdmin };
