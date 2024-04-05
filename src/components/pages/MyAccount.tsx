import React from 'react'

import { useAppDispatch } from '../../redux/store'

import account from '../../assets/svg/accountSvg/account.svg'
import address from '../../assets/svg/accountSvg/Location.svg'
import download from '../../assets/svg/accountSvg/Download.svg'
import logoutIcon from '../../assets/svg/accountSvg/Logout.svg'
import orders from '../../assets/svg/accountSvg/Order.svg'
import reports from '../../assets/svg/accountSvg/Reports.svg'
import support from '../../assets/svg/accountSvg/Support.svg'
import wishlist from '../../assets/svg/accountSvg/Wishlist.svg'
import { logoutAsync } from '../../redux/auth/slice'
import { logout } from '../../redux/user/slice'

export const MyAccount: React.FC = () => {
  const dispatch = useAppDispatch()
  const [active, setActive] = React.useState('AccountDetails')

  function onClickLogout() {
    if (window.confirm('Вы действительно хотите выйти?')) {
      dispatch(logoutAsync())
      dispatch(logout())
    }
    window.localStorage.removeItem('token')
  }

  const handleMenuItemClick = (page: string) => {
    setActive(page);
  };

  return (
    <div className='myAccount'>
      <div className="accountMenu">
        <h1>My Account</h1>
        <ul>
          <li
            onClick={() => handleMenuItemClick('AccountDetails')}
            className={active === 'AccountDetails' ? 'activeClass' : ''}
          >
            <img src={account} alt="#" />
            <p>Account Details</p>
          </li>

          <li
            onClick={() => handleMenuItemClick('Address')}
            className={active === 'Address' ? 'activeClass' : ''}
          >
            <img src={address} alt="#" />
            <p>Address</p>
          </li>

          <li
            onClick={() => handleMenuItemClick('Orders')}
            className={active === 'Orders' ? 'activeClass' : ''}
          >
            <img src={orders} alt="#" />
            <p>Orders</p>
          </li>

          <li
            onClick={() => handleMenuItemClick('Wishlist')}
            className={active === 'Wishlist' ? 'activeClass' : ''}
          >
            <img src={wishlist} alt="#" />
            <p>Wishlist</p>
          </li>

          <li
            onClick={() => handleMenuItemClick('Reports')}
            className={active === 'Reports' ? 'activeClass' : ''}
          >
            <img src={reports} alt="#" />
            <p>Reports</p>
          </li>

          <li
            onClick={() => handleMenuItemClick('Downloads')}
            className={active === 'Downloads' ? 'activeClass' : ''}
          >
            <img src={download} alt="#" />
            <p>Downloads</p>
          </li>

          <li
            onClick={() => handleMenuItemClick('Support')}
            className={active === 'Support' ? 'activeClass' : ''}
          >
            <img src={support} alt="#" />
            <p>Support</p>
          </li>


          <li
            className='logout'
            onClick={() => onClickLogout()}
          >
            <img src={logoutIcon} alt="logout" />
            <p>Logout</p>
          </li>
        </ul>
      </div>

      <div className="activePage">
        {active === 'AccountDetails' && <div>123</div>}
        {active === 'Address' && <div>1222223</div>}
        {active === 'Orders' && <div>1233333</div>}
        {active === 'Wishlist' && <div>1235555</div>}
        {active === 'Reports' && <div>1244443</div>}
        {active === 'Downloads' && <div>1777723</div>}
        {active === 'Support' && <div>1299993</div>}
      </div>
    </div>
  )
}

export default MyAccount
