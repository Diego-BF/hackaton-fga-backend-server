import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var OrderSchema = new Schema ({
    _id: Schema.Types.ObjectId,
    },
    { timestamps: true }    // data e horario
);

export default mongoose.model('Order', OrderSchema);