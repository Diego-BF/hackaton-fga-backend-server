import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var ProductSchema = new Schema ({
    _id: Schema.Types.ObjectId,
    },
    { timestamps: true }    // data e horario
);

export default mongoose.model('Product', ProductSchema); // Aqui vai o foregin key