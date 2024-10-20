import { Order } from "../models/order.model.js";

class OrderRepository {
  async create(data) {
    try {
      const response = await Order.create(data);
      return response;
    } catch (error) {
      console.log("some thing wrong at repository level");
      console.log(error);
      throw { error };
    }
  }
}

export { OrderRepository };
