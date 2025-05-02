import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatButton from './components/ChatButton';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import BlogDetails from './pages/BlogDetails';
import EmiCalculator from './pages/EmiCalculator';
import WriteTestimonial from './pages/WriteTestimonial';
import Form1 from './pages/Form1';
import Form2 from './pages/Form2';
import Form3 from './pages/Form3';
import Form4 from './pages/Form4';
import Form5 from './pages/Form5';
import Form6 from './pages/Form6';



function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingBottom: '100px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/emi-calculator" element={<EmiCalculator />} />
          <Route path="/write-testimonial" element={<WriteTestimonial />} />
          <Route path="/form1" element={<Form1 />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/form3" element={<Form3 />} />
          <Route path="/form4" element={<Form4 />} />
          <Route path="/form5" element={<Form5 />} />
          <Route path="/form6" element={<Form6 />} />

        </Routes>
      </div>
      <Footer />
      <ChatButton />
    </Router>
  );
}

export default App;
