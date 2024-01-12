import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './components/Intro';
import Resume from './components/Resume';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <Router>
    <div className="App">
       <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/contactme' element={<ContactMe />} />
        <Route path='/aboutme' element={<AboutMe />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
