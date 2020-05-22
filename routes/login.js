import express from "express";

import { authenticate } from "../auth.js";

const router = express.Router();

router.post("/", function (req, res) {
  authenticate(req.body.username, req.body.password, function (err, user) {
    if (err) {
      req.session.error =
        "Authentication failed, please check your " + " username and password.";
      res.status(401).json({ error: err.message });
    } else {
      // Regenerate session when signing in
      // to prevent fixation
      req.session.regenerate(function () {
        // Store the user's primary key
        // in the session store to be retrieved,
        // or in this case the entire user object
        req.session.user = user;
        req.session.success = "Authenticated as " + user.name;
      });
      res.json({ message: `Authenticated as ${user.name}` });
    }
  });
});

export default router;
