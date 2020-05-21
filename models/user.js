import mongoose from "mongoose";
import assert from "assert";

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
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

export const createUser = (userData) => {
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
  };
  let user = new User(newUser);
  console.log("preparando para salvar usuário...");

  return user.save();
};
