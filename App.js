import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import Booking from './Components/Booking/Booking';
import Footer from './Components/Foter/Footer';

function App() {
  return (
    // <div style={{backgroundColor:"#EEE", height:'100vh'}}>
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Booking />} />
      <Route path="*" element={<Booking />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
