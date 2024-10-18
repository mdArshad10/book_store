import { body, param, query } from "express-validator";

const bookValidatorRule = {
  createBook: [
    body("title")
      .isString()
      .isLength({ min: 3, max: 30 })
      .withMessage("Title must be between 3 and 30 characters")
      .notEmpty()
      .withMessage("Title is required")
      .escape(),
    body("description")
      .isString()
      .isLength({ min: 10, max: 100 })
      .withMessage("Description must be between 10 and 100 characters")
      .notEmpty()
      .withMessage("description is required")
      .escape(),
    body("trending")
      .isBoolean()
      .withMessage("Trending must be a boolean value")
      .toBoolean(),
    body("coverImage").isString().escape(),
    body("oldPrice")
      .isFloat({ min: 0 })
      .withMessage("oldPrice is must be greater than zero")
      .escape()
      .toFloat(),
    body("newPrice")
      .isFloat({ min: 0 })
      .withMessage("newPrice is must be greater than zero")
      .escape()
      .toFloat(),
  ],
  getAllBooks: [],
  getBook: [
    param("id")
      .isMongoId()
      .withMessage("Invalid book ID")
      .notEmpty()
      .withMessage("book is required")
      .escape(),
  ],
  updateBook: [
    param("id")
      .isMongoId()
      .withMessage("Invalid book ID")
      .notEmpty()
      .withMessage("book is required")
      .escape(),
  ],
};

export { bookValidatorRule };
