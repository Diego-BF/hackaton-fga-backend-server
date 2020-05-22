import { Router } from "express";
import bcrypt from "bcryptjs";

import User from "../models/user.js";
import { generateToken, checkToken } from "../auth.js";

const router = new Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ email: username }).select("+password");

  if (!user)
    return res.status(400).send({ error: "User not found" });

  if (!await bcrypt.compare(password, user.password))
    return res.status(400).send({ error: "Invalid password" });

  user.password = undefined;
  const token = generateToken(user.id);
  res.send({ user, token });
});


router.get("/test", checkToken, (req, res) => {
  res.send({ ok: true, user: req.userId });
})

export default router;
