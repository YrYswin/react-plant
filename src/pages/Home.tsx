import React, { Suspense } from 'react'

import { Products, Banner } from '../components'


const Blogs = React.lazy(() => import(/* webpackChunkName: "Blogs" */ '../components/HomePage/OtherComponents/Blogs'));
const FindMore = React.lazy(() => import(/* webpackChunkName: "FindMore" */ '../components/HomePage/OtherComponents/FindMore'));

const Home: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Banner />
        <Products />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Blogs />
        <FindMore />
      </Suspense>
    </div>
  )
}
export default Home