import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    console.log('view all existing users');
    return res.send(req.context.models.users);
});

router.get('/:userId', (req, res) => {
    console.log(`view user #${req.params.userId}`);
    return res.send(req.context.models.users[req.params.userId]);
});

export default router;