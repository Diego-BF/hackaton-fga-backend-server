import "dotenv/config.js";
import express from "express";
import session from "express-session";

import routes from "./routes/index.js";
import models, { connectDb } from "./models/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: process.env.SESSION_SECRET,
  })
);
// Session-persisted message middleware
app.use(function (req, res, next) {
  var err = req.session.error;
  var msg = req.session.success;
  delete req.session.error;
  delete req.session.success;
  res.locals.message = "";
  if (err) res.locals.message = '<p class="msg error">' + err + "</p>";
  if (msg) res.locals.message = '<p class="msg success">' + msg + "</p>";
  next();
});

app.use("/", (req, res, next) => {
  req.context = {
    models: models,
  };
  next();
});

app.use("/users", routes.users);
app.use("/producers", routes.producers);
app.use("/city", routes.city);
app.use("/session", routes.session);
app.use("/product", routes.product);
app.use("/productoffer", routes.productoffer);
app.use("/order", routes.order);
app.use("/login", routes.login);

connectDb()
  .then(async () => {
    app.listen(PORT, () => console.log(`app running at port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
