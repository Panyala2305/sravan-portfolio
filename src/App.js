import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkExperience from './components/WorkExperience'
import './App.css';
import FamiliarTechnologies from './components/FamiliarTechnologies';
import Education from './components/Education';
import LetsConnect from './components/Connect';

function App() {
  return (
    <div className='min-h-screen bg-darkBlueGray text-white scroll-smooth'>
      <Navbar />
      
      <Hero />
      <FamiliarTechnologies/>
      <WorkExperience/>
      <Education/>
      <LetsConnect/>
      
    </div>
  )
}

export default App