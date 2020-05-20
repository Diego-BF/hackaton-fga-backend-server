import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var ProductSchema = new Schema ({
    _id: Schema.Types.ObjectId,
        name: {
            type: String,
            unique: true,
            required: true
        },
        image: {
            type: String,
            unique: true,
            required: false
        },
        synonyms: {
            type: [String],
            unique: true,
            required: false
        }
    },
    { timestamps: true }    // data e horario
);

export default mongoose.model('Product', ProductSchema); // Aqui vai o foregin key