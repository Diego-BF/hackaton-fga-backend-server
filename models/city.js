import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var CitySchema = new Schema ({
    _id: Schema.Types.ObjectId,
    },
    { timestamps: true }    // data e horario
);

export default mongoose.model('City', CitySchema); // Aqui vai o foregin key