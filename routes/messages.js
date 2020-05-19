import {v4 as uuidv4} from 'uuid';
import express from 'express';

var router = express.Router();

router.get('/', (req, res) => {
    console.log('view all messages');
    return res.send(Object.values(req.context.models.messages));
});

router.get('/:messageId', (req, res) => {
    console.log(`view message ${req.params.messageId}`);
    return res.send(req.context.models.messages[req.params.messageId]);
});

router.post('/', (req, res) => {
    console.log('post request for messages');
    const id = uuidv4();
    const message = {
        id: id,
        text: req.body.text,
        userId: req.context.me.id
    }
    req.context.models.messages[id] = message;
    res.send(message[id]);
});

export default router;