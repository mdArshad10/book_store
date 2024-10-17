import { Router } from "express";
import {validate} from '../../middlewares/validate.js'
import {bookValidatorRule} from '../../middlewares/validatorsRules/bookValidatorRules.js'
import {createBook, getAllBooks} from '../../controllers/book.controller.js'

const router = Router();

// create a book
router
  .route("/create")
  .post(bookValidatorRule.createBook, validate, createBook);

// get all book
router.route("/").get(bookValidatorRule.getAllBooks, validate, getAllBooks)

// get a particular book
router.route("/:id").get()

export default router;
