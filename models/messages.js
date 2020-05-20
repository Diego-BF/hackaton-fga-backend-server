import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var MessageSchema = new Schema (
    {
        _id: Schema.Types.ObjectId,
        message: String,
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'Users'
        }
    },
    {timestamps: true}
);

export default mongoose.model('Message', MessageSchema);