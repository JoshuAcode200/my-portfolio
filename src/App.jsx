import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar.jsx';
import Contact from './Components/contact.jsx';
import About from './Components/about.jsx';
import Experience from './Components/experience.jsx';
import Footer from './Components/footer.jsx';
import Hero from './Components/hero.jsx';
import Projects from './Components/projects.jsx';
import Home from './Components/home.jsx';
import Skills from './Components/skill.jsx';
import Background from './Components/background.jsx';


function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/experience' element={<Experience />} />
        <Route exact path='/skill' element={<Skills />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      <Footer />

  </div>
  );
}

export default App;
