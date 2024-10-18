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

  // NOTE: Adding the 2nd argument as an object to filter out unwanted fields
  async getAll() {
    try {
      const books = await Book.find({});
      return books;
    } catch (error) {
      console.log("something wrong with book repository layer");
      console.log(error);
      throw { error };
    }
  }

  async getById(id) {
    try {
      const book = await Book.findById(id);

      return book;
    } catch (error) {
      console.log("something wrong with book repository layer");
      console.log(error);
      throw { error };
    }
  }

  async updated(bookId, data) {
    try {
      const book = await Book.findByIdAndUpdate(bookId, data, {
        new: true,
        runValidators: true,
      });
      return book;
    } catch (error) {
      console.log({ error });
      throw { error };
    }
  }

  async deleted(bookId){
    try {
      const book = await Book.findByIdAndDelete(bookId);
      console.log(book);
      return book;
    } catch (error) {
      console.log({ error });
      throw { error };
    }
  }
}

export { BookRepository };
