import { Book } from "./models/book.model.js";
import { books } from "./data/books.js";
import { argv } from "node:process";
import mongoose from 'mongoose'

const insertAllBooks = async () => {
  try {
    await dbConnect();
    await Book.deleteMany({});
    await Book.insertMany(books);
    console.log("book insert successfully");
  } catch (error) {
    console.log("some thing went wrong in book insert");
    console.log(error);
  } finally {
    await mongoose.connection.close();
    process.exit(1);
  }
};

const deleteBooks = async () => {
  try {
    await dbConnect();
    await Book.deleteMany({});
    console.log("book delete successfully");
  } catch (error) {
    console.log("some thing went wrong in book insert");
    console.log(error);
  } finally {
    await mongoose.connection.close();
    process.exit(1);
  }
};

if (argv[3] === "--insert") {
  insertAllBooks();
} else {
  deleteBooks();
}
