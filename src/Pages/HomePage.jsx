import React from 'react'
import Header from '../Components/Layouts/Header/Header'
import HeroSection from '../Components/HeroSection/HeroSection'
import IconBoxes from '../Components/IconBoxes'
import About from '../Components/About'
import Developers from '../Components/Developers/Developers'
import Languages from '../Components/Languages'
import Podcasts from '../Components/Podcasts/Podcasts'
import Footer from '../Components/Layouts/Footer/Footer'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <IconBoxes />
      <About />
      <Developers />
      <Languages />
      <Podcasts />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home
