import { body, query, params } from "express-validator";

export const userValidatorRules = {
  registerUser: [
    body("username")
      .trim()
      .notEmpty()
      .withMessage("Username is required")
      .isLength({ min: 3, max: 20 })
      .withMessage("Username must be between 3 and 20 characters long")
      .trim()
      .escape(),

    body("email")
      .trim()
      .notEmpty()
      .withMessage("email is required")
      .isEmail()
      .withMessage("Invalid email address")
      .escape(),

    body("role")
      .optional()
      .isIn(["admin", "user"])
      .withMessage("Invalid role")
      .escape(),
  ],
  loginUser:[

  ]
};
