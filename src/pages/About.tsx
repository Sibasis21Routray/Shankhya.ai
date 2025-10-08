
import HeroSection from '../components/about/HeroSection'
import MainComponent from '../components/about/MainComponent'
import Tech from '../components/about/Tech'

function About() {
  return (
    <div className='overflow-x-hidden'>
      <HeroSection />
      <MainComponent />
      <Tech/>
    </div>
  )
}

export default About