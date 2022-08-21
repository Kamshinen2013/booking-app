import React from 'react';
import FeaturedCities from '../../components/featuredcities/FeaturedCities';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import PropertyList from '../../components/propertList/PropertyList';
import MailList from '../../mailList/MailList';
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Header />
      <div className="homeContainer">
          <FeaturedCities />
          <h1 className="homeTitle">Browse by Property type</h1>
          <PropertyList /> 
          <h1 className="homeTitle">Home guests Love</h1>
          <FeaturedProperties />
          <MailList />
          <Footer />
      </div>
    </div>
  )
}

export default Home