import { Book } from "../models/book.model.js";

class BookRepository {
  async create(data) {
    try {
      const book = new Book(data);
      await book.save();
      return book;
    } catch (error) {
      console.log("something wrong with book repository layer");
      console.log(error);
      throw { error };
    }
  }

  async getAll(){
    try {
      const books = await Book.find({});
      return books;
    } catch (error) {
      console.log("something wrong with book repository layer");
      console.log(error);
      throw { error };
    }
  }
}

export { BookRepository };
