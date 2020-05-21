import express from 'express';

const router = express.Router();

router.get('/all', (req, res) => {
    console.log("view all product offers");
    req.context.models.ProductOffer.find({})
    .exec((err, productoffer) => {
        if(err) console.log(err);
        res.send(productoffer);
    });
});

router.post('/new', (req, res) => {
    var offer = new req.context.models.ProductOffer(req.body);

    offer.save((err) => {
        if (err) {
            console.log("error creating new product offer  " + err);
            res.send(err);
        } else {
            console.log("Succesfully created new product offer");
            res.send(offer._id);
        }
    })
});

export default router;