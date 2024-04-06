import React from 'react'

import { useAppDispatch } from '../../redux/store'

import { Orders, UserDetails, Reports, Download, Address, Wishlist, Support } from '..'

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

type ProfileParamsState = { title: string, iconSvg: string }

const MyAccount: React.FC = () => {
  const dispatch = useAppDispatch()
  const [active, setActive] = React.useState('Account Details')

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

  const profileParams: ProfileParamsState[] = [
    { title: 'Account Details', iconSvg: account },
    { title: 'Address', iconSvg: address },
    { title: 'Orders', iconSvg: orders },
    { title: 'Wishlist', iconSvg: wishlist },
    { title: 'Reports', iconSvg: reports },
    { title: 'Downloads', iconSvg: download },
    { title: 'Support', iconSvg: support },
  ]

  return (
    <div className='myAccount'>
      <div className="accountMenu">
        <h1>My Account</h1>
        <ul>

          {profileParams.map((params, i) => (
            <li
              key={i}
              onClick={() => handleMenuItemClick(params.title)}
              className={active === params.title ? 'activeClass' : ''}
            >
              <img src={params.iconSvg} alt={`${params.title}`} />
              <p>{params.title}</p>
            </li>
          ))}

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

        {active === 'Account Details' && <UserDetails />}
        {active === 'Address' && <Address />}
        {active === 'Orders' && <Orders />}
        {active === 'Wishlist' && <Wishlist />}
        {active === 'Reports' && <Reports />}
        {active === 'Downloads' && <Download />}
        {active === 'Support' && <Support />}

      </div>
    </div>
  )
}

export default MyAccount
