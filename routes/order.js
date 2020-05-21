import express from 'express';

const router = new express.Router();

router.get('/all', (req, res) => {
    req.context.models.Order.find({})
    .populate([
        {path: 'products', select: 'productOffer'},
        {path: 'buyer', select: 'name'},
        {path: 'order_location', select: 'name'}
    ])
    .exec((err, orders) => {
        if(err) {
            console.log("error displaying all orders");
            return res.send(err);
        } 
        console.log("displaying all orders");
        res.send(orders);
    });
});

router.post('/new', (req, res) => {
    var order = new req.context.models.Order(req.body);

    order.save((err) => {
        if(err) {
            console.log("error creating order" + err);
            return res.send("Error creating order   " + err);
        }
        console.log("Succesfully created new order");
        return res.send(order);
    })
})

router.post('/modify', (req, res) => { // Modificar dados do pedido, a partir do _id
    req.context.models.Order.update({ _id: req.body._id}, req.body, (err, matched) => {
        if(err) {
            console.log("Error when updating order" + err);
            res.send(err);
        } else {
            console.log(matched.n + " order(s) updated succesfully");
            res.send(matched.n + " order(s) updated succesfully");
        }
    });
});
export default router;