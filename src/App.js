import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import FamiliarTechnologies from './components/FamiliarTechnologies';
import Education from './components/Education';
import LetsConnect from './components/Connect';
import About from './pages/About'; 
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-darkBlueGray text-white scroll-smooth'>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <FamiliarTechnologies />
                <WorkExperience />
                <Projects/>
                <Education />
                <LetsConnect />
                
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
