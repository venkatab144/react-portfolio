import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import AcademicExperience from './components/AcademicExperience/AcademicExperience';
import Header from './components/Header/Header';
import ProfessionalExperience from './components/ProfessionalExperience/ProfessionalExperience';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
  return (
    <div className="App">
      <div className="site-container">
        <Navbar />
        <Header />
        <AboutMe />
        <ProfessionalExperience />
        <AcademicExperience />
        <Projects />
        <ContactMe />
        {/*Contact
        Footer */}
      </div>
    </div>
  );
}

export default App;
