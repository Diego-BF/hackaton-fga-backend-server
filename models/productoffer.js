import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var ProductOfferSchema = new Schema ({
    _id: Schema.Types.ObjectId,
    },
    { timestamps: true }    // data e horario
);

export default mongoose.model('ProductOffer', ProductOfferSchema); // Aqui vai o foregin key