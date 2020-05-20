import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var ProducerSchema = new Schema ({
    _id: Schema.Types.ObjectId,
    },
    { timestamps: true }    // data e horario
);

export default mongoose.model('Producer', ProducerSchema); // Aqui vai o foregin key