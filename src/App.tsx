import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'

import Layout from './Layout/Layout';
import Home from './pages/Home';

import './App.scss';

const Cart = React.lazy(() => import(/*webpackChunkName: "Cart" */'./pages/Cart'))

const FullPlant = React.lazy(() => import(/*webpackChunkName: "FullPlant" */'./pages/FullPlant'))
const MyAccount = React.lazy(() => import(/*webpackChunkName: "MyAccount" */'./pages/MyAccount'))
const Orders = React.lazy(() => import(/*webpackChunkName: "Orders"*/'./pages/Orders'))

const Shop = React.lazy(() => import(/* webpackChunkName: "Shop" */'./pages/Shop'))
const PlantCare = React.lazy(() => import(/* webpackChunkName: "PlantCare" */'./pages/PlantCare'))
const BlogsPage = React.lazy(() => import(/* webpackChunkName: "BlogsPage" */'./pages/BlogsPage'))

const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */'./pages/NotFound'))

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route path='' element={<Home />} />

        <Route path='cart' element={<Suspense fallback={<div>Loading...</div>}><Cart /></Suspense>} />
        <Route path='full-plant/:id' element={<Suspense fallback={<div>Loading...</div>}><FullPlant /></Suspense>} />
        <Route path='profile' element={<Suspense fallback={<div>Loading...</div>}><MyAccount /></Suspense>} />
        <Route path='orders' element={<Suspense fallback={<div>Loading...</div>}><Orders /></Suspense>} />

        <Route path='shop' element={<Suspense fallback={<div>Loading...</div>}><Shop /></Suspense>} />
        <Route path='plant-care' element={<Suspense fallback={<div>Loading...</div>}><PlantCare /></Suspense>} />
        <Route path='blogs' element={<Suspense fallback={<div>Loading...</div>}><BlogsPage /></Suspense>} />

        <Route path='*' element={<Suspense fallback={<div>Loading...</div>}><NotFound /></Suspense>} />

      </Route>
    </Routes>
  )
}

export default App;
