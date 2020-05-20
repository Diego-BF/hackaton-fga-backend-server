import "dotenv/config.js";
import express from "express";
import routes from "./routes";
import models from "./models";

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

app.listen(PORT, () => console.log(`app running at port ${PORT}`));
