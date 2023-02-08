import Navbar from './component/UI/Navbar';
import Home from './component/Home';
import './App.css';
import About from './component/About';
import Skills from './component/Skills';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import Footer from './component/Footer';

const App = (props) => {
  
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About />
      <Skills/>
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
