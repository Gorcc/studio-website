import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default App;
