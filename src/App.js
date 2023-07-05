import './App.css';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div>
      <NavBar/>
      <Intro/>
      <AboutMe/>
      <Projects/>
      <Resume/>
    </div>
  );
}

export default App;
