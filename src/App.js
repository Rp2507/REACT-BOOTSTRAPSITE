import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/Header';
import Hero from './Hero';
import About from './About';
import Services from './components/Services';
import Works from './Works';
import Teams from './Teams';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <header id='header'>
        <Header />
      </header>
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <Teams />
        <Testimonials />
        <Pricing />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
