import React, { useState } from 'react'

import { OrderMenu, OrderProduct } from '..'

import './Checkout.scss'
import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/cart/selectors'

export const Checkout: React.FC = () => {
  const [orderActive, setOrderActive] = useState(false)
  const { items, totalPrice } = useSelector(selectCart)

  function changeActive() {
    setOrderActive(!orderActive)
  }

  return (
    <div className='checkoutPage'>
      <div className="dataPerson">
        <h1>Billing Address</h1>

        <div className="dataInputs">
          <div className="input">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name='firstName' />
          </div>

          <div className="input">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name='lastName' />
          </div>

          <div className="input">
            <label htmlFor="region">Country / Region</label>
            <input type="text" name='region' placeholder=' Select a country / region' />
          </div>

          <div className="input">
            <label htmlFor="city">Town / City</label>
            <input type="text" name='city' />
          </div>

          <div className="input">
            <label htmlFor="street">Street Address</label>
            <input type="text" name='street' placeholder='House number and street name' />
          </div>

          <div className="input">
            <label htmlFor="address"></label>
            <input type="text" name='address' placeholder='Appartment, suite, unit, etc. (optional)' />
          </div>

          <div className="input">
            <label htmlFor="state">State</label>
            <input type="text" name='state' placeholder='Select a state' />
          </div>

          <div className="input">
            <label htmlFor="zip">Zip</label>
            <input type="text" name='zip' />
          </div>

          <div className="input">
            <label htmlFor="email">Email Address</label>
            <input type="text" name='email' />
          </div>

          <div className="option">
            <select name="codeNumber" id="codeNumber">
              <option value="kgs">+996</option>
              <option value="kgs">+996</option>
              <option value="kgs">+996</option>
            </select>
          </div>

        </div>

        <div className="orderNotes">
          <div className="otherAddress">
            <input type="checkbox" />
            <p>Ship to a different address?</p>
          </div>

          <h5>Order Notes (optional)</h5>

          <input type="text" className='note' />
        </div>

      </div>

      <div className="order">
        <h1>Your Order</h1>
        <div className="orderProducts">
          <div className="naming">
            <h5>Products</h5>
            <h5>Subtotal</h5>
          </div>

          <div className="orderList">
            {items.map((item) => (
              <OrderProduct key={item.id} {...item} />
            ))}

          </div>
          <p>Have a coupon code? <a href='/'> Click here</a></p>

          <div className="placeOrder">

            <div className="totalCounter">
              <div><p>Subtotal</p><span>${totalPrice}.00$</span></div>
              <div><p>Coupon Discount</p><span>(-)0.00</span></div>
              <div><p>Shiping</p><span>$19</span></div>
              <p>View shiping charge</p>
              <div><p>Total</p><span className='total'>$2,190.00$</span></div>
            </div>

            <div className="paymentMethod">
              <div className="method">
                <input type="checkbox" />
                Paypal Visa MasterCard
              </div>
              <div className="method">
                <input type="checkbox" />
                Paypal Visa MasterCard
              </div>
              <div className="method">
                <input type="checkbox" />
                Paypal Visa MasterCard
              </div>
            </div>

            <div className="orderBtn">
              <button onClick={changeActive}>Place Order</button>
            </div>

          </div>

        </div>

      </div>

      {
        orderActive && <OrderMenu changeActive={changeActive} />
      }

    </div>
  )
}