import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import AllPlaces from './pages/AllPlaces';
import PlaceDetails from './pages/PlaceDetails';
import MyBookings from './pages/MyBookings';
import PlaceReg from './components/PlaceReg';
import Layout from './pages/admin/Layout';
import Dashbord from './pages/admin/Dashbord';
import AddPlace from './pages/admin/AddPlace';
import ListPlace from './pages/admin/ListPlace';

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerPath && <Navbar></Navbar>}
      {false && <PlaceReg></PlaceReg>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<AllPlaces/>}/>
          <Route path='/rooms/:id' element={<PlaceDetails/>}/>
          <Route path='/my-bookings' element={<MyBookings/>}/>
          <Route path='/owner' element={<Layout/>}>
                <Route index element={<Dashbord></Dashbord>}/>
                <Route path="add-room" element={<AddPlace/>}/>
                <Route path="list-room" element={<ListPlace/>}/>
          </Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;