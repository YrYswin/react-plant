import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from '../components/wrapper/Header'
import Footer from '../components/wrapper/Footer'

const Layout = () => {
  return (
    <div>
      <Header />

      <div className='content'>
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default Layout