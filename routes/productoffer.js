import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

router.get('/all', (req, res) => {
    console.log("view all product offers");
    req.context.models.ProductOffer.find({})
    .populate([{path: 'producer', select: 'name'}, {path: 'product', select: 'name'}])
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
            res.status(422).json({erro: err});
        } else {
            console.log("Succesfully created new product offer");
            res.send(offer._id);
        }
    })
});

router.delete('/delete', (req, res) => {
    req.context.models.Order.deleteMany({
        "products.productOffer": mongoose.Schema.Types.ObjectId(req.body._id)
    }, (err) => {
        if(err) {
            console.log("error removing orders associated with offer");
             res.status(422).json({error: err});
        }
    });
    req.context.models.ProductOffer.deleteOne({
        _id: req.body._id
    }, (err) => {
        if(err) {
            console.log("error removing offer");
            res.status(422).json({error: err});
        }
    })
})

export default router;