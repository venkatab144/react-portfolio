import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import AcademicExperience from './components/AcademicExperience/AcademicExperience';
import Header from './components/Header/Header';
import ProfessionalExperience from './components/ProfessionalExperience/ProfessionalExperience';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Header />
      <AboutMe /> {/*Maybe put Resume here*/}
      <ProfessionalExperience />
      <AcademicExperience />
      {/*Projects
      Contact
      Footer */}
    </div>
  );
}

export default App;
