import React from 'react'
import Banner from './Banner';
import TopSeller from './TopSeller';
import Recommened from './Recommened';
import News from './News';

const HomePage = () => {
  return (
    <>
        <Banner/>
        <TopSeller/>
        <Recommened/>
        <News/>
    </>
  )
}

export default HomePage;