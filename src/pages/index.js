import React, {useState} from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {homeObjOne, homeObjTwo, homeObjThree} from "../components/InfoSection/Data";
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {

   

    return (
        <>
          <HeroSection/> 
          <InfoSection {...homeObjOne}/>
          <InfoSection {...homeObjTwo}/>
          <Services/>
          <InfoSection {...homeObjThree}/>
          <Footer/>
        </>
    )
}

export default Home
