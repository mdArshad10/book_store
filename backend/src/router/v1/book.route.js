import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import { bookValidatorRule } from "../../middlewares/validatorsRules/bookValidatorRules.js";
import {
  createBook,
  getAllBooks,
  getBook,
} from "../../controllers/book.controller.js";

const router = Router();

// create a book
router
  .route("/create")
  .post(bookValidatorRule.createBook, validate, createBook);

// get a particular book
router.route("/:id").get(bookValidatorRule.getBook, validate, getBook);

// get all book
router.route("/").get(bookValidatorRule.getAllBooks, validate, getAllBooks);

export default router;
