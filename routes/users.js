import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    console.log('view all existing users');
    req.context.models.Users.find({})
    .exec((err, _users) => {
        if(err) {
            res.send('error' + err);
            console.log(err);
        } else {
            console.log(_users);
            res.send(_users);
        }
    })
});

router.get('/:userId', (req, res) => {
    console.log(`view user #${req.params.userId}`);
    req.context.models.Users.findOne({
        _id: req.params.userId
    });
    return res.send(req.context.models.users[req.params.userId]);
});

export default router;