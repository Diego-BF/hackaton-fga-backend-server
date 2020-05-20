import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    req.context.models.City.find((err, cities) => {
        if(err) console.log(err);
        res.send(cities);
    });
});

router.post('/', (req, res) => {
    var _city = new req.context.models.City({
        name: req.body.name,
        image: req.body.image,
        synonyms: req.body.synonyms
    });

    _city.save((err) => {
        if (err) {
            console.log("error storing in database");
            console.log(err);
            res.send('Error storing in database');
        } else {
            res.send(JSON.stringify(req.body));
        }
    })
})

export default router;