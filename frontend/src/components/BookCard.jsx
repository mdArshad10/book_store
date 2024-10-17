import React from 'react'
import {Link} from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi';
import {useDispatch} from "react-redux"


const BookCard = ({id, title="book Title", description="Book Description", price=80, image, comparePrice=100}) => {

  const dispatch = useDispatch();

  const addToCartHandler = (product) =>{
    console.log('add to the cart');
  }

  return (
    <div className=" rounded-lg transition-shadow duration-300">
  <div
    className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4"
  >
    <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
      <Link to={`/books/${id}`}>
        <img
          src={image.pathname}
          alt={title}
          className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
        />
      </Link>
    </div>

    <div>
      <Link to={`/books/${id}`}
        ><h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
          {title}
        </h3></Link>
      <p className="text-gray-600 mb-5">{description.length > 60 ? `${description.slice(0,60)}...`: description}</p>
      <p className="font-medium mb-5">
        ${price} <span className="line-through font-normal ml-2">${comparePrice}</span>
      </p>
      <button className="btn-primary px-6 space-x-1 flex items-center gap-1 " onClick={addToCartHandler}>
        <FiShoppingCart className="" />
        <span>Add to Cart</span>
      </button>
    </div>
  </div>

  
    </div>
  )
}

export default BookCard;