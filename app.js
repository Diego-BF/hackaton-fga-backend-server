import 'dotenv/config.js';
import express from 'express';
import routes from './routes/index.js';
import models from './models/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/', (req, res, next) => {
  req.context = {
    models: models,
    me: models.users[1]
  }
  next();
});

app.use('/users', routes.users);
app.use('/messages', routes.messages);
app.use('/session', routes.session);




app.put('/users/:userId', (req, res) => {
  return res.send(`PUT method in user with id ${req.params.userId}`);
});
app.delete('/users/:userId', (req, res) => {
  return res.send(`DELETE method in user with id ${req.params.userId}`);
});

app.listen(PORT, () => console.log(`app running at port ${PORT}`));
