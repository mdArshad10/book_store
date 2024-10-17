import { StatusCodes } from "http-status-codes";
import { BookService } from "../services/book-service.js";

const bookService = new BookService();

// @DESCRIPTION: Create a new book
// @METHOD: [POST]   /api/v1/books/create
// @ACCESS: Private/Admin
const createBook = async (req, res, next) => {
  try {
    const book = await bookService.create(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "book added successfully",
      data: book,
      err: null,
    });
  } catch (error) {
    console.log("some thing wrong with controller layer");
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "some thing worng with booking creation",
      data: null,
      err: error,
    });
  }
};

// @DESCRIPTION: get all books
// @METHOD: [GET]   /api/v1/books/
// @ACCESS: public
const getAllBooks = async (req, res, next) => {
  try {
    const books = await bookService.getAll();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "You get all books",
      data: books,
      err: null,
    });
  } catch (error) {
    console.log("something wrong with control layer");

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "something wrong to get all books",
      data: null,
      err: error,
    });
  }
};

export { createBook, getAllBooks };
