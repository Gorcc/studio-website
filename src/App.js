import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';
import FloatingWidgets from './components/FloatingWidgets';
import './App.css';

// Add this import at the top with your other imports
import EquipmentPage from './pages/EquipmentPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            // Then add this route to your Routes component
            <Route path="/equipment" element={<EquipmentPage />} />
          </Routes>
          <Footer />
          <FloatingWidgets />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
