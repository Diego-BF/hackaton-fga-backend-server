import User from "./user.js";
import Producer from "./producer.js";
import City from "./city.js";
import Product from "./product.js";
import Order from "./order.js";
import ProductOffer from "./productoffer.js";
// importar o messages so pra debugar e treinar
import mongoose from "mongoose";

const dbUrl = process.env.DATABASE_URL;

const connectDb = () => {
  console.log("Database connected at " + dbUrl);
  return mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

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
