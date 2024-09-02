import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SpecializationPage from './pages/SpecializationPage';
import TherapistDetailPage from './pages/TherapistDetails';
import AboutUs from './pages/AboutUsPage';
import AboutUsMobile from './pages/AboutUsMobile';
import OverAllInfo from './pages/OverAllInfo';
import FoundersPage from './pages/FoundersPage';
import PanelOfDoctorsPage from './pages/PanelOfDoctors';
import BoardOfAdvisorsPage from './pages/BoardOfAdvisors';  
import useWindowDimensions from './Hooks/useWindowDimensions';


import FaqPage from './pages/FAQPage';
import ContactUs from './pages/ContactUsPage';
import Events from './pages/EventsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BookingComponent from './pages/BookingPage';
import AdminPage from './pages/AdminPage';
import HOCPage from './pages/HOCPage'; 
import ZehenPage from './pages/ZehenPage';
import ServicesPage from './pages/ServicesPage';

import Navbar from './components/MagicNavbar';
import MobileNavbar from './components/MobileNavBar';
import './App.css';
import { AuthProvider, AuthContext } from './context/AuthContext';


const OAuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get('token');
    if (token) {
      localStorage.setItem('token', token);
      navigate('/');
    }
  }, [navigate]);

  return null;
};

const AdminRoute = ({ element }) => {
  const { isAdmin } = useContext(AuthContext);
  return isAdmin ? element : <Navigate to="/" />;
};

const App = () => {
  const { width } = useWindowDimensions();

  return (
    <AuthProvider>
      <Router>
        {width > 768 ? <Navbar /> : <MobileNavbar />} 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/specializations" element={<SpecializationPage />} />
          <Route path="/therapist/:id" element={<TherapistDetailPage />} />
          <Route
          path="/about-us"
          element={width <= 768 ? <AboutUsMobile /> : <AboutUs />}
        />
        <Route path="/overall-information" element={<OverAllInfo />} />
        <Route path="/founder" element={<FoundersPage />} />
        <Route path="/panel-of-doctors-and-therapists" element={<PanelOfDoctorsPage />} />
        <Route path="/board-of-advisors" element={<BoardOfAdvisorsPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/booking/:therapistId" element={<BookingComponent />} />
          <Route path="/hoc" element={<HOCPage />} />
          <Route path="/zehen" element={<ZehenPage />} /> {/* Ensure ZehenPage route is here */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/oauth/callback" element={<OAuthCallback />} />
          <Route path="/admin" element={<AdminRoute element={<AdminPage />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
