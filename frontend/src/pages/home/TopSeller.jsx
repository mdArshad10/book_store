import React, { useEffect, useState } from 'react'
import BookCard from '../../components/BookCard.jsx'
import {getImageUrl} from '../../utils/getImgURL.js'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const categories = ["Choose a genre", "Business","Fiction", "Horror", "Adventure"]

const TopSeller = () => {
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");
    

    useEffect(()=>{
        fetch('book.json')
        .then((resp)=>resp.json())
        .then(data=>setBooks(data))
    })
    
    const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book=> book.category === selectedCategory.toLocaleLowerCase())

  return (
    <div className='py-10'>
        <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
        <div className='mb-8 flex items-center'>
            {/* categories filter */}
            <select name="category" id="category" className='border bg-[#e8e8e8] border-gray-300 rounded-md py-2 px-4 focus:outline-none'>
                {categories.map((item, index)=>(
                    <option key={index} value={item}>{item}</option>
                ))} 
            </select>
        </div>
        <Swiper
        slidesPerView={1}
        spaceBetween={15}
        navigation={true}
        
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {filteredBooks.length > 0 && filteredBooks.map((book, index)=>(
            <SwiperSlide
            key={book._id}
            >
                <BookCard
                id={book._id}
                title={book.title}
                description={book.description}
                price={book.newPrice}
                comparePrice={book.oldPrice}
                image={getImageUrl(book.coverImage)}
                />
            </SwiperSlide>
            
        )) }
        
      </Swiper>
    </div>
  )
}

export default TopSeller;