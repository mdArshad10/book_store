import { OrderRepository } from "../services/order-service.js";
import { StatusCodes } from "http-status-codes";

const orderRepository = new OrderRepository();

// @DESCRIPTION: give a order
// @METHOD: [POST]   /api/v1/orders/create
// @ACCESS: Private/
const orderCreate = async (req, res, next) => {
  try {
    const order = await orderRepository.create(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "order created successfully",
      data: order,
      err: null,
    });
  } catch (error) {
    console.log("something wrong at controller level");
    console.log({ error });
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "order is not created",
      data: null,
      err: error,
    });
  }
};

export { orderCreate };
