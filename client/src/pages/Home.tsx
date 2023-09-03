import React from 'react';
import Header from '../components/Header/Header';
import ContentWrapper  from '../components/СontentWrapper/ContentWrapper';
import Navbar from '../components/Navbar/Navbar';
import Offer from '../components/Offer/Offer';
import Products from '../components/Products/Products';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div>
        <Header />
        <ContentWrapper className='container'>
          <Navbar />
          <Offer />
          <Products />
        </ContentWrapper>
        <Footer />
    </div>
  )
}
