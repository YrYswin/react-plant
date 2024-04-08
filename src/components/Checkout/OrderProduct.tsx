import React from 'react'

import plant from '../../assets/img/plant.png'

import './OrderProduct.scss'
import { CartItem } from '../../redux/cart/types'

export const OrderProduct: React.FC<CartItem> = ({ title, imageUrl, count, price, id }) => {
  return (
    <div className='orderProduct'>
      <div className="image">
        <img src={imageUrl ? imageUrl : plant} alt="plant" />
        <div>
          <h5>{title}</h5>
          <p>SKU: {id}</p>
        </div>
      </div>
      <div className="quantity">
        <p>(x {count})</p>
      </div>
      <div className="price">
        <p>$ {price * count}</p>
      </div>
    </div>
  )
}