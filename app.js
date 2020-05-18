import 'dotenv/config.js';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello world, how are you?'));
app.put('/users/:userId', (req, res) => {
  return res.send(`PUT method in user with id ${req.params.userId}`);
});
app.delete('/users/:userId', (req, res) => {
  return res.send(`DELETE method in user with id ${req.params.userId}`);
});

app.listen(PORT, () => console.log(`app running at port ${PORT}`));
