import "dotenv/config.js";
import express from "express";
import routes from "./routes/index.js";
import models from "./models/index.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/", (req, res, next) => {
  req.context = {
    models: models,
    //user: models.users[1],
  };
  next();
});

app.use("/users", routes.users);
app.use("/city", routes.city);
app.use("/session", routes.session);
app.use("/product", routes.product);
app.use("/productoffer", routes.productoffer);

mongoose.connect(process.env.DATABASE_URL).then(async () => {
  app.listen(PORT, () => console.log(`app running at port ${PORT}`));
}).catch((err) => {
  console.log(err);
});
