import User from './user.js';
import Producer from './producer.js';
import City from './city.js';
import Product from './product.js';
import Order from './order.js';
import ProductOffer from './productoffer.js';
// importar o messages so pra debugar e treinar
import mongoose from 'mongoose';

const connectDb = (url) => {
    console.log('Database connected at ' + url);
    return mongoose.connect(url);
}

const models = {
    User,
    Producer,
    City,
    Product,
    Order,
    ProductOffer,
};

export { connectDb };
export default models;
