import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    req.context.models.Product.find((err, product) => {
        if(err) console.log(err);
        res.send(product);
    });
});

router.post('/', (req, res) => {
    var prod = new req.context.models.Product({
        name: req.body.name,
        image: req.body.image,
        synonyms: req.body.synonyms
    });

    prod.save((err) => {
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