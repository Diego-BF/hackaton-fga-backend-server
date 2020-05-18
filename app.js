import 'dotenv/config.js';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello world, how are you?'));
app.listen(PORT, () => console.log(`app running at port ${PORT}`));
