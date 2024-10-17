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

  async getAll(){
    try {
      const books = await this.bookRepository.getAll();
      return books
    } catch (error) {
      console.log("something wrong at services layer");
      console.log(error);
      throw { error };
    }
  }

  async get(bookId){
    try {
      console.log(bookId);
      const book = await this.bookRepository.getById(bookId);
      if (!book) {
        throw new Error("Book not found with id: " + id);
      }
      
      return book;
    } catch (error) {
      console.log("something wrong at services layer");
      console.log(error);
      throw { error };
    }
  }
}

export { BookService };
