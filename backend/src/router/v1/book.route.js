import { Router } from "express";
import {validate} from '../../middlewares/validate.js'
import {bookValidatorRule} from '../../middlewares/validatorsRules/bookValidatorRules.js'
import {createBook} from '../../controllers/book.controller.js'

const router = Router();

// create a book
router
  .route("/create")
  .post(bookValidatorRule.createBook, validate, createBook);

export default router;
