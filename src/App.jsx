import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import AllTours from './pages/AllPlaces';
import PlaceDetails from './pages/PlaceDetails';
import MyBookings from './pages/MyBookings';
import PlaceReg from './components/PlaceReg';
import Layout from './pages/admin/Layout';
import Dashbord from './pages/admin/Dashbord';
import { Toaster } from 'react-hot-toast';
import { useAppContext } from './context/AppContext';
import AddTour from './pages/admin/AddTour';
import ListTour from './pages/admin/ListTour';

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.includes("owner");
  const {showPlaceReg} = useAppContext();

  return (
    <>
      
      <Toaster />
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}></Navbar>}
      {showPlaceReg && <PlaceReg/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/tours' element={<AllTours/>}/>
          <Route path='/tours/:id' element={<PlaceDetails/>}/>
          <Route path='/my-bookings' element={<MyBookings/>}/>
          <Route path='/owner' element={<Layout/>}>
                <Route index element={<Dashbord></Dashbord>}/>
                <Route path="add-tour" element={<AddTour/>}/>
                <Route path="list-tour" element={<ListTour/>}/>
                <Route path="list-tour" element={<ListTour/>}/>
                <Route path="list-tour" element={<ListTour/>}/>
                <Route path="list-tour" element={<ListTour/>}/>
          </Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;