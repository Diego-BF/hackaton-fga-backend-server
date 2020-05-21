import express from 'express';

var router = express.Router();

router.get('/', (req, res) => {
    req.context.models.Producer.find({})
    .exec((err, _producer) => {
        if(err) {
            console.log('error fetching producer');
            res.send(err);
        } else {
            console.log('fetched all producers');
            res.send(JSON.stringify(_producer));
        }
    })
});


router.get('/:producerId', (req, res) => {
    req.context.models.Producer.findOne({
        _id: req.params.producerId
    })
    .exec((err, _producer) => {
        if(err) {
            console.log('error fetching producer');
            res.send(err);
        } else {
            console.log(`fetched producer ${_producer}`);
            res.send(JSON.stringify(_producer));
        }
    })
});

export default router;