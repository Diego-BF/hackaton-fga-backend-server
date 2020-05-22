import mongoose from "mongoose";
import CryptoJS from "crypto-js";

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
    auth: {
      hash: {
        type: String,
        required: true,
      },
      salt: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

export const createUser = async (userData) => {
  let salt = CryptoJS.lib.WordArray.random(128 / 8);
  let hash = CryptoJS.PBKDF2("vaidarbom", salt.toString(), {
    keySize: 256 / 32,
  });

  var newUser = {
    name: userData.name,
    email: userData.email,
    address: {
      street: userData.street,
      city: userData.city,
    },
    zip: userData.zip,
    isConsumer: userData.isConsumer,
    producerId: null,
    auth: {
      salt: salt,
      hash: hash,
    },
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
