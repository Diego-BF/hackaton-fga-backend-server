import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var UserSchema = new Schema ({
    _id: Schema.Types.ObjectId,
    email: String
    },
    { timestamps: true }    // data e horario
);

export default mongoose.model('User', UserSchema); // Aqui vai o foregin key