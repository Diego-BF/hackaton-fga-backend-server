import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    req.context.models.ProductOffer.find((err, productoffer) => {
        if(err) console.log(err);
        res.send(productoffer);
    });
});

router.post('/', (req, res) => {
    var offer = new req.context.models.ProductOffer();
    console.log(req.body);
    offer.available = req.body.available;
    offer.qty = req.body.qty;

    offer.save((err) => {
        if (err) {
            console.log("error storing in database");
            console.log(err);
            res.send('Error storing in database');
        } else {
            res.send(JSON.stringify(req.body));
        }
    })
});

export default router;