import mongoose from "mongoose";
import validator from "validator";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    description: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 100,
    },
    trending: {
      type: Boolean,
      required: true,
      validate: {
        validator: function (v) {
          return validator.isBoolean(v.toString());
        },
        message: (props) => `${props.value} is must a boolean`,
      },
    },
    coverImage: {
      type: String,
      required: true,
    },
    oldPrice: {
      type: Number,
      required: true,
      validate: {
        validator: function (v) {
          return validator.isFloat(v.toString(), { min: 0 });
        },
        message: (props) =>
          `${props.value} is not a valid number. It must be a positive number.`,
      },
    },
    newPrice: {
      type: Number,
      required: true,
      validate: {
        validator: function (v) {
          return validator.isFloat(v.toString(), { min: 0 });
        },
        message: (props) =>
          `${props.value} is not a valid number. It must be a positive number.`,
      },
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);
