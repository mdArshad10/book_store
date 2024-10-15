import React, { useEffect, useState } from 'react'

const categories = ["Choose a genre", "Business","Fiction", "Horror", "Adventure"]

const TopSeller = () => {
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");
    

    useEffect(()=>{
        fetch('book.json')
        .then((resp)=>resp.json())
        .then(data=>setBooks(data))
    })
    console.log(books);
    
    
    const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book=> book.category === selectedCategory.toLocaleLowerCase())


  return (
    <div className='py-10'>
        <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
        <div className='mb-8 flex items-center'>
            {/* categoires filter */}
            <select name="category" id="category" className='border bg-[#e8e8e8] border-gray-300 rounded-md py-2 px-4 focus:outline-none'>
                {categories.map((item, index)=>(
                    <option key={index} value={item}>{item}</option>
                ))}
                
            </select>
        </div>
    </div>
  )
}

export default TopSeller;