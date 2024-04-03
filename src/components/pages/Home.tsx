import React from 'react'

import { Banner, Blogs, FindMore, Products } from '..'

export const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <Products />
      <FindMore />
      <Blogs />
    </div>
  )
}