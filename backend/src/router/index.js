import { Router } from "express";
import v1BookRoute from "./v1/book.route.js";
import v1OrderRoute from "./v1/order.route.js";

const router = Router();

router.use("/v1/books", v1BookRoute);
router.use("/v1/orders", v1OrderRoute);

export default router;
