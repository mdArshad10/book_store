import {Router} from 'express'
import { validate } from "../../middlewares/validate.js";
import { orderValidatorRules } from "../../middlewares/validatorsRules/orderValidatorRules.js";
import {
  orderCreate
} from "../../controllers/order.controller.js";

const router = Router();

// create the order
router.route("/").post(orderValidatorRules.createOrder, validate, orderCreate)

export default router;