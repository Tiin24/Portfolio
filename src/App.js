import './App.css';
import About from './components/About';import BackTopBtn from './components/BackToTop';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
function App() {
  return (
    <div className='bg-white relative'>
      <Header />
      <Hero/>
      <Skills />
      <About />
      <Portfolio/>
      <Contact/>
      <BackTopBtn/>
      <Footer/>
    </div>
  );
}

export default App;
