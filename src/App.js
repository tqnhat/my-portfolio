import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <main>
      <Navbar />
      <Home />
      {/* <About />
      <Projects />
      <Skills />
      <Testimonials /> */}
    </main>
  );
}

export default App;
