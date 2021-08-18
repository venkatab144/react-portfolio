import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import AcademicExperience from './components/AcademicExperience/AcademicExperience';
import Header from './components/Header/Header';
import ProfessionalExperience from './components/ProfessionalExperience/ProfessionalExperience';
import Projects from './components/Projects/Projects';
import Fade from 'react-reveal/Fade';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className="site-container">
        <Navbar />
        <Header />
        <AboutMe /> {/*Maybe put Resume here*/}
        <ProfessionalExperience />
        <AcademicExperience />
        <Projects />
        {/*Contact
        Footer */}
      </div>
    </div>
  );
}

export default App;
