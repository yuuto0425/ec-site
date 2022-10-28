import React from 'react'
import Announcement from '../compornens/Announcement';
import Categories from '../compornens/Categories';
import Footer from '../compornens/Footer';
import Navbar from '../compornens/Navbar';
import Newsletter from '../compornens/Newsletter';
import Products from '../compornens/Products';
import Slider from '../compornens/Slider';

const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home