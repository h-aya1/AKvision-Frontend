import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout/Layout';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Solutions from './pages/Solutions/Solutions';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Support from './pages/Support/Support';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Legal from './pages/Legal/Legal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="support" element={<Support />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="legal" element={<Legal />} />
          {/* Add other routes as they are created */}
          <Route path="*" element={<div className="container mx-auto px-4 py-8 text-center"><h1 className="text-2xl">Page Not Found</h1></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
