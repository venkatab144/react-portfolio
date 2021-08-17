import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import ProfessionalExperience from './components/ProfessionalExperience/ProfessionalExperience';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <ProfessionalExperience />
    </div>
  );
}

export default App;
