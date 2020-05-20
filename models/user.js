import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      zip: {
        type: String,
        required: true,
      },
      isConsumer: {
        type: Boolean,
        required: true,
        default: true,
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
<<<<<<< HEAD
=======
=======
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var UserSchema = new Schema ({
    _id: Schema.Types.ObjectId,
    email: String
    },
    { timestamps: true }    // data e horario
);

export default mongoose.model('User', UserSchema); // Aqui vai o foregin key
>>>>>>> 9b73bb627595250d1bbdb81ce80f2235ce6e8cdf
>>>>>>> 2ac0a297547516361ba85d742f20957a2d5ec5e9
