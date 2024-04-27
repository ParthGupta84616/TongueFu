import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ReadAloudPage from './pages/ReadAloudPage';
import Contact from './pages/Contact';
import Resources from './pages/Resouces';
import TongueTwister from './pages/TongueTwister';
import FAQPage from './pages/FAQPage';
import AboutPage from './pages/AboutPage';
import LiveChat from './features/Live Chat/LiveChat';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import QuizPage from './pages/QuizPage';
import Breathing from './pages/Breathing';
import { AuthProvider } from './components/AuthContext';



function App() {
  return (
    <Router>
    <AuthProvider> 
      <LiveChat />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/readaloud" element={<ReadAloudPage />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/tonguetwister" element={<TongueTwister />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/breathing" element={<Breathing />} />
        {/* <Route path="/readaloud" element={<ReadAloud />} /> */}
      </Routes>
      <Footer />
    </AuthProvider> 
    </Router>
  );
}

export default App;
