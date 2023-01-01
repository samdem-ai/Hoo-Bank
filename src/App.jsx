import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Features></Features>
      <Testimonials></Testimonials>
      <GetStarted></GetStarted>
      <Footer></Footer>
    </div>
  )
}

export default App
