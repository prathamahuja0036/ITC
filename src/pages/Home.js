import React, { useState } from 'react'
import Hero from '../components/Hero'
import Service_card from '../components/Service_cards'
import Our_products from '../components/Our_products'
import Component5 from '../components/Component5'
import Component6 from '../components/Component6'
import Store from '../components/Store'
import Products from '../components/Bestseller'
import Review from '../components/Review'
import Testimonial from '../components/Testimonial'
import { heroData } from '../components/data/HeroData'
import Subscription from '../components/Subscription'
import AboutUs from '../components/AboutUs'
import Whyitc from '../components/Whyitc'



export const Home = () => {

  return (
    <div>
        <Hero data={heroData}/>
        <Subscription />
        <Service_card />
         {/* <Our_products /> */}
        {/* <Component5 /> */}
        <Component6 />
        {/* <Store /> */}
        {/* <Products /> */}
          <Review />
        {/* <Testimonial />  */}
        {/* <AboutUs/> */}
        <Whyitc />
    </div>
  )
}
