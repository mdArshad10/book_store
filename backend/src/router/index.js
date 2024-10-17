import { Router } from "express";
import v1BookRoute from "./v1/book.route.js";

const router = Router();

router.use("/v1/books", v1BookRoute);

export default router;
