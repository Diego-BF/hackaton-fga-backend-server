import mongoose from "mongoose";
import Producer from "./producer.js";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: [true, "Email já cadastrado"],
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
    producerId: { type: mongoose.Schema.Types.ObjectId, ref: "Producer" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

export const createUser = async (userData) => {
  const newUser = {
    name: userData.name,
    email: userData.email,
    password: userData.password,
    address: {
      street: userData.street,
      city: userData.city,
    },
    zip: userData.zip,
    isConsumer: userData.isConsumer,
    producerId: undefined,
  };

  if (!userData.isConsumer) {
    let consumer = new Producer({});
    await consumer.save();
    console.log("new Producer created", consumer);
    newUser.producerId = consumer._id;
  }

  let user = new User(newUser);
  console.log("new User created", user);

  return user.save();
};
