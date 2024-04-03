import React from 'react'

import plant from '../../../assets/img/plant.png'

import './Other.scss'

export const FindMoreItem: React.FC = () => {
  return (
    <div className="picture">
      <img src={plant} alt="title" />
      <div className="overview">
        <h3>SUMMER CACTUS & SUCCULENTS</h3>
        <p>We are online plant shop offering a wide range of cheap and trendy plants</p>
        <button type='button'>Find more</button>
      </div>
    </div>
  )
}
