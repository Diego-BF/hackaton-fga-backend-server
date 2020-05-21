import express from 'express';

const router = express.Router();

router.get('/all', (req, res) => {
    console.log('view all existing users');
    req.context.models.User.find({})
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
    req.context.models.User.findOne({
        _id: req.params.userId
    })
    .exec((err, _user) => {
        if(err) {
            console.log('error fetching user');
            res.send(err);
        } else {
            console.log(`fetched user ${_user}`);
            res.send(JSON.stringify(_user));
        }
    })
});

router.post('/', async function (req, res) { // Criar um novo usuario a partir do corpo do JSON recebido
    var _user = new req.context.models.User(req.body);

    const userSave = await _user.save((err) => {
        if (err) {
            console.log("error creating user" + err);
            res.send(err);
        } else {
            console.log("user created succesfully");
            res.write(JSON.stringify(_user.id));
        }
    });

    if(_user.isConsumer == false) {
        var _producer = new req.context.models.Producer({
                user: _user._id,
        });

        const producerSave = await _producer.save((err) => {
            if(err) {
                console.log("error adding to producers");
                res.end(err);
            } else {
                console.log("producer added succesfully");
                res.end(JSON.stringify(_producer.id));
            }
        })
    } else {
        res.end();
    }
})

export default router;