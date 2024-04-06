import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'
import Loadable from 'react-loadable';

import { Shop, PlantCare, BlogsPage, NotFound } from './components';
import Layout from './Layout/Layout';
import Home from './components/pages/Home';

import './App.scss';

const Cart = Loadable({
  loader: () => import(/*webpackChunkName: "Cart" */'./components/pages/Cart'),
  loading: () => <div>Loading...</div>,
})
const FullPlant = Loadable({
  loader: () => import(/*webpackChunkName: "FullPlant" */'./components/pages/FullPlant'),
  loading: () => <div>Loading...</div>,
})
const MyAccount = Loadable({
  loader: () => import(/*webpackChunkName: "Profile" */'./components/pages/MyAccount'),
  loading: () => <div>Loading...</div>,
})

// const Cart = React.lazy(() => import(/*webpackChunkName: "Cart" */'./components/pages/Cart'))
// const FullPlant = React.lazy(() => import(/*webpackChunkName: "FullPlant" */'./components/pages/FullPlant'))
// const MyAccount = React.lazy(() => import(/*webpackChunkName: "MyProfile" */'./components/pages/MyAccount'))

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route path='' element={<Home />} />

        {/* <Route path='cart' element={<Cart />} />
        <Route path='full-plant/:id' element={<FullPlant />} />
        <Route path='profile' element={<MyAccount />} /> */}

        <Route path='cart' element={
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>}
        />
        <Route path='full-plant/:id' element={
          <Suspense fallback={<div>Loading...</div>}>
            <FullPlant />
          </Suspense>
        } />
        <Route path='profile' element={
          <Suspense fallback={<div>Loading...</div>}>
            <MyAccount />
          </Suspense>
        } />

        <Route path='shop' element={<Shop />} />
        <Route path='plant-care' element={<PlantCare />} />
        <Route path='blogs' element={<BlogsPage />} />

        <Route path='*' element={<NotFound />} />

      </Route>
    </Routes>
  )
}

export default App;
