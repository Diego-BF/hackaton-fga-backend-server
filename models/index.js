import Users from './users.js';
import Messages from './messages.js';
import mongoose from 'mongoose';

const connectDb = (url) => {
    console.log('Database connected at ' + url);
    return mongoose.connect(url);
}

const models = {
    Users,
    Messages
};

export { connectDb };
export default models;
