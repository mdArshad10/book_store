import React, { useEffect, useState } from 'react'
import {getImageUrl} from '../../utils/getImgURL.js'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BookCard from '../../components/BookCard.jsx';

const categories = ["Choose a genre", "Business","Fiction", "Horror", "Adventure"]

const Recommened = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('book.json')
        .then((resp)=>resp.json())
        .then(data=>setBooks(data))
    })
    
  return (
    <div>
         <h2 className='text-3xl font-semibold mb-6'>Recommened for you</h2>
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
        {books.length > 0 && books.slice(3,10).map((book, index)=>(
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

export default Recommened;