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

// @DESCRIPTION: get a book through book id
// @METHOD: [GET]   /api/v1/books/:id
// @ACCESS: public
const getBook = async(req,res,next)=>{
  try {
    const {id} = req.params; 
    
    const books = await bookService.get(id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "You get book",
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
}

// @DESCRIPTION: update book details through book id
// @METHOD: [PUT]   /api/v1/books/edit/:id
// @ACCESS: private/Admin
const updateBook = async(req,res,next)=> {
try {
  const { id } = req.params;

  const book = await bookService.update(id);
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "book updated successfully",
    data: book,
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

// @DESCRIPTION: delete the book through book id
// @METHOD: [DELETE]   /api/v1/books/:id
// @ACCESS: private/Admin
const deleteBook = async(req,res,next)=> {
  try {
    const {id} = req.params;
     await bookService.delete(id);
     return res.status(StatusCodes.OK).json({
       success: true,
       message: "book delete successfully",
       data: null,
       err: null,
     });
  } catch (error) {
     console.log(error);
     return res.status(StatusCodes.BAD_REQUEST).json({
       success: false,
       message: "something wrong with delete book",
       data: null,
       err: error,
     });
  }
}

export { createBook, getAllBooks, getBook, updateBook, deleteBook };
