import jwt from "jsonwebtoken";

const SECRET = "8208ab9da864cadbbd3be1455c81c295";

const generateToken = (userId) => {
  const token = jwt.sign({ id: userId }, SECRET, {
    expiresIn: 86400,
  });
  return token;
};

// middleware
const checkToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).send({ error: "No token provided" });

  const parts = authHeader.split(" ");
  if (!parts.length === 2)
    return res.status(401).send({ error: "Token error" });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: "Token malformatted" });

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err)
      return res.status(401).send({ error: "Token invalid" });

    req.userId = decoded.id;
    return next();
  })
}

export { generateToken, checkToken };
