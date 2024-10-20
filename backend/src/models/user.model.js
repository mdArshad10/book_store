import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      validate: {
        validator: function (v) {
          return validator.isEmail(v.toString());
        },
        message: (props) => `${props.value} is not a valid email`,
      },
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return validator.isStrongPassword(v.toString());
        },
        message: (props) => `${props.value} is must a strong password`,
      },
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
      required: true,
      validate: {
        validator: function (v) {
          return validator.isIn(["admin", "user"]);
        },
        message: (props) => `${props.value} is not validate`,
      },
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export const User = mongoose.model("User", userSchema);
