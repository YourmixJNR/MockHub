import React from 'react'
import Header from '../Components/Layouts/Header/Header'
import HeroSection from '../Components/HeroSection/HeroSection'
import IconBoxes from '../Components/IconBoxes'
import About from '../Components/About'
import Developers from '../Components/Developers/Developers'
import Languages from '../Components/Languages'

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <IconBoxes />
      <About />
      <Developers />
      <Languages />
    </>
  )
}

export default Home
