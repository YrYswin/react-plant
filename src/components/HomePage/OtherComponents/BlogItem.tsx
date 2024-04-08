import React from 'react'

import plant from '../../../assets/img/plant.png'

import './Other.scss'

export const BlogItem: React.FC = () => {
  return (
    <div className='blogs'>
      <img src={plant} alt="title" />
      <div className="titleBlog">
        <h5>Septembers 12 | Read an 6 minuts</h5>
        <h2>Cactus & Succelent Care Tips</h2>
        <p>Cactus succelents are easy care plants for any home or patio.</p>
        <span>Read More {`>`}</span>
      </div>
    </div>
  )
}