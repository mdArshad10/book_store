import React from 'react'
import BannerImage from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse  items-center justify-between gap-12'>
        <div className='md:w-1/2 w-full flex md:justify-end items-center'>
          <img src={BannerImage} alt="bannerImage" />
        </div>
        
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>New Releases This Week</h1>
            <p className='mb-10'>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>

            <button className='btn-primary'>Subscribe</button>        
        </div>
        
    </div>
  )
}

export default Banner;