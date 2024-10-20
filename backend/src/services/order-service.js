import { OrderRepository } from "../repository/order-repository.js";

class OrderService {
  constructor() {
    this.OrderRepository = new OrderRepository();
  }

  async create(data) {
    try {
      const order = await this.OrderRepository.create(data);
      return order;
    } catch (error) {
      console.log("something wrong with services layer");
      console.log({ error });
      throw { error };
    }
  }
}

export { OrderRepository };
