import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../header/Header'
import Brand from '../../components/brand/Brand'
import WhyChooseUs from '../whatMEHFOOZ/WhyChooseUs'
import Features from '../features/Features'
import Footer from '../footer/Footer'
import Category from '../../components/category-card/Category'
const Home = () => {
  return (
    <div className="App background" >
      <div className="gradient__bg">
        <Navbar />
        <div className=" section__margin">
          <Header />
        </div>

        <div className="bg-white">
          <div className="section__margin">
            <Brand />
          </div>
        </div>
        <WhyChooseUs />
        <Category />
        <div className="bg-basic ">
          <div className="section__margin">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home