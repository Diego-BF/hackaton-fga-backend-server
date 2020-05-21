import express from "express";

import User, { createUser } from "../models/user.js";

const router = express.Router();

router.post("/", async (req, res) => {
  if (req.body) {
    await createUser(req.body)
      .then(() => {
        res.send();
      })
      .catch((err) => {
        if (err.name === "MongoError" && err.code === 11000) {
          res.status(422).json({ error: "Email must be unique" });
        } else {
          res.status(422).json({ error: err.message });
        }
      });
  } else {
    res.statusCode(400);
  }
});

router.get("/", (req, res) => {
  if (!req.body.userId) {
    res.status(422).json({ error: "Inform the userId key" });
  }

  User.findById(req.body.userId, (err, doc) => {
    if (err) {
      res.status(422).json({ error: err.message });
    } else {
      res.json(doc);
    }
  });
});

router.get("/all", (req, res) => {
  User.find({})
  .exec((err, _users) => {
    if(err) {
      res.status(500).json({ error: err });
    } else {
      res.json(_users);
    }
  });
})

export default router;
