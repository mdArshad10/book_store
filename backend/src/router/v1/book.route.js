import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import { bookValidatorRule } from "../../middlewares/validatorsRules/bookValidatorRules.js";
import {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
} from "../../controllers/book.controller.js";

const router = Router();

// create a book
router
  .route("/create")
  .post(bookValidatorRule.createBook, validate, createBook);

// get a particular book
router
  .route("/:id")
  .get(bookValidatorRule.getBook, validate, getBook)
  // delete a particular book
  .delete(bookValidatorRule.deleteBook, validate, deleteBook);

// get all book
router.route("/").get(bookValidatorRule.getAllBooks, validate, getAllBooks);

// update the book
router
  .route("/edit/:id")
  .put(bookValidatorRule.updateBook, validate, updateBook);

export default router;
