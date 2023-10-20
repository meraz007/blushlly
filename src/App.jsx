import './App.css'
import Navbar from '../src/components/Navbar'
import Subscribe from './components/Subscribe'
import { useState } from 'react'
import adOne from '../src/assets/img/AdOne.png'
import adTwo from '../src/assets/img/AdTwo.png'
import Testimonial from './components/Testimonial'
import RandomPost from './components/RandomPost'
import LatestPost from './components/LatestPost'
import PopularPost from './components/PopularPost'
import InstagramFeed from './components/InstagramFeed'
import Footer from './components/Footer'
import SliderSection from './components/SliderSection'
import Categories from './components/Categoris'

function App() {

  return (
    <>
      <div className=''>
        <div className='max-w-6xl mx-auto container'>
          <Navbar />
          {/* <SliderSection /> */}
          <Categories />
          <LatestPost />
          <img className='mt-40 w-full' src={adOne} alt="" />
          <PopularPost />
        </div>
        <Testimonial />
        <div className='max-w-6xl mx-auto container py-12'>
            <img className='w-full' src={adTwo} alt="" />
            <RandomPost />
            <InstagramFeed />
        </div>

        <Subscribe />
        <div className='bg-[#1D1A1A] '>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
