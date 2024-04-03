import React from 'react'


import './Other.scss'
import { BlogItem } from '../..'

export const Blogs: React.FC = () => {
  return (
    <div className='ourBlog'>
      <div className='blogTitle'>
        <h1>Our Blog Posts</h1>
        <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
      </div>

      <div className='ourBlogList'>

        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />

      </div>
    </div>
  )
}