import 'aos/dist/aos.css'; // Import CSS của AOS
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUsPage from './Pages/AboutUs';
import AdvicePage from './Pages/Advice';
import HomePage from './Pages/Home';
import ParallaxPage from './Pages/Parallax';
import ProductPage from './Pages/Product';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/parallax" element={<ParallaxPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about_us" element={<AboutUsPage />} />
        <Route path="/advice" element={<AdvicePage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
