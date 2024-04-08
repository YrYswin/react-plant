import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectCart } from '../../redux/cart/selectors'

import { CartItemBlock } from '..'
import styles from './CartPage.module.scss'

export const CartPage: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart)

  return (
    <div className={styles.products}>
      <div className={styles.productsCart}>
        <ul className={styles.cartTitle}>
          <li>Products</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Total</li>
        </ul>
        <div className={styles.itemsCart}>

          {items.map((item: any) => (
            <CartItemBlock key={item.id} {...item} />
          ))}

        </div>
      </div>

      <div className={styles.productsCounter}>
        <div className={styles.titleCounter}>
          <h4>Carts Total</h4>
        </div>

        <div className={styles.couponItem}>
          <p>Coupon Apply</p>
          <div className={styles.couponInput}>
            <input type="text" placeholder='Enter coupon code here' id='coupon' />
            <button type='button'>Apply</button>
          </div>
        </div>

        <div className={styles.totalCounter}>
          <div><p>Subtotal</p><span>$ {totalPrice}</span></div>
          <div><p>Coupon Discount</p><span>20%</span></div>
          <div><p>Shiping</p><span>$ 10</span></div>
          <p>View shiping charge</p>
          <div><p>Total</p><span>$ {totalPrice * 0.80 + 10}</span></div>
        </div>

        <div className={styles.checkout}>
          <Link to={'/orders'} >
            <button type='button' className={styles.proceed}>Proceed To Checkout</button>
          </Link>
          <Link to={'/'} >
            <button type='button' className={styles.shopping}>Continue Shopping</button>
          </Link>
        </div>
      </div>
    </div>
  )
}