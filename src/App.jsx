import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import AllPlaces from './pages/AllPlaces';
import PlaceDetails from './pages/PlaceDetails';
import MyBookings from './pages/MyBookings';

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerPath && <Navbar></Navbar>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<AllPlaces/>}/>
          <Route path='/rooms/:id' element={<PlaceDetails/>}/>
          <Route path='/my-bookings' element={<MyBookings/>}/>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;