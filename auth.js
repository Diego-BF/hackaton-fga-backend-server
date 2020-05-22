import CryptoJS from "crypto-js";

import User from "./models/user.js";

const authenticate = (name, pass, fn) => {
  User.findOne({ email: name }, (err, user) => {
    if (err) return fn(err, null);
    // query the db for the given username
    if (!user) return fn(new Error("cannot find user"));
    // apply the same algorithm to the POSTed password, applying
    // the hash against the pass / salt, if there is a match we
    // found the user
    let hash = CryptoJS.PBKDF2(pass, user.auth.salt, {
      keySize: 256 / 32,
    });
    if (hash == user.auth.hash) {
      return fn(null, user);
    }
    fn(new Error("invalid password"));
  });
};

const restrict = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    req.session.error = "Access denied!";
    res.status(403).json({ error: "Access denied" });
    // res.redirect("/login");
  }
};

export { authenticate, restrict };
