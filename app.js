<<<<<<< HEAD
import 'dotenv/config.js';
import express from 'express';
import routes from './routes/index.js';
import models from './models/index.js';
import mongoose from 'mongoose';
=======
import "dotenv/config.js";
import express from "express";
import routes from "./routes";
import models from "./models";
>>>>>>> 454f658abaf3fd7b9af3ddb18a9ad3b3d6010076

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/", (req, res, next) => {
  req.context = {
    models: models,
    user: models.users[1],
  };
  next();
});

app.use("/users", routes.users);
app.use("/messages", routes.messages);
app.use("/session", routes.session);

var db = 'mongodb://localhost:27017/simpledb';
mongoose.connect(db).then(async () => {
  app.listen(PORT, () => console.log(`app running at port ${PORT}`));
}).catch((err) => {
  console.log(err);
});
