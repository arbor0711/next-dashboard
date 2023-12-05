// External dependencies
import { ObjectId } from "mongodb";
// Class Implementation

import mongoose, { Schema } from "mongoose";

interface IUser {
  id?: ObjectId;
  username: string;
  email: string;
  password: string;
  img?: string;
  isAdmin: boolean;
  isActive: boolean;
  phone: number;
  address: string;
}

interface IProduct {
  id?: ObjectId;
  title: string;
  description: string;
  price: number;
  stock: number;
  img: string;
  color: string;
  size: string;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      min: 11,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 30,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: Number,
      min: 8,
      max: 30,
    },
    address: {
      type: String,
      max: 100,
    },
  },
  {
    timestamps: true, // to add addDate to data automatically
  }
);

const productSchema = new mongoose.Schema<IProduct>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },

    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  {
    timestamps: true, // to add addDate to data automatically
  }
);

// Now I want to export them and use inside my app
// What if this is on the database already? => I use || to check the models and if the User exist use it, otherwise create new one
export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
