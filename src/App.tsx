import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'

import Layout from './Layout/Layout';
import { Home, Cart, FullPlant, Shop, PlantCare, BlogsPage, MyAccount } from './components';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route path='' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/full-plant/:id' element={<FullPlant />} />

        <Route path='/shop' element={<Shop />} />
        <Route path='/plant-care' element={<PlantCare />} />
        <Route path='/blogs' element={<BlogsPage />} />

        <Route path='/profile' element={<MyAccount />} />

      </Route>
    </Routes>
  )
}

export default App;
