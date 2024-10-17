import { BookRepository } from "../repository/book-repository.js";

class BookService {
  constructor() {
    this.bookRepository = new BookRepository();
  }

  async create(data) {
    try {
      const response = await this.bookRepository.create(data);
      return response;
    } catch (error) {
      console.log("something wrong at services layer");
      console.log(error);
      throw { error };
    }
  }
}

export { BookService };
