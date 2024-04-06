import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectCart } from '../../redux/cart/selectors'
import { RootState } from '../../redux/store'

import logo from '../../assets/svg/logo.svg'
import loginIcon from '../../assets/svg/loginIcon.svg'

import styles from './Header.module.scss'
import { Authorization } from '..'

const Header = () => {
  const [visible, setVisible] = React.useState(false)
  const location = useLocation()
  const isMounted = React.useRef(false);
  const { items } = useSelector(selectCart)
  const data = useSelector((state: RootState) => state.profile.data)

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0)

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items)
      localStorage.setItem('plantCart', json)
    }
    isMounted.current = true
  }, [items])

  const closePopup = () => {
    setVisible(false)
  }
  const opepPopup = () => {
    setVisible(true)
  }

  return (
    <>
      <div className={styles.header}>
        <div>
          <img src={logo} alt="login" />
          <h1>GREANSHOP</h1>
        </div>

        <ul>
          <li className={location.pathname === '' ? styles.active : ''}><Link to=''>Home</Link></li>
          <li className={location.pathname === `shop` ? styles.active : ''}><Link to='shop'>Shop</Link></li>
          <li className={location.pathname === 'plant-care' ? styles.active : ''}><Link to='plant-care'>Plant Care</Link></li>
          <li className={location.pathname === 'blogs' ? styles.active : ''}><Link to='blogs'>Blogs</Link></li>
        </ul>

        <div className={styles.search}>
          <div className={styles.inputHTML}>
            <input type="text" placeholder='search' id='search' />
            <svg width="21.000000" height="20.000000" viewBox="0 0 21 20" fill="none" >
              <path id="Vector" d="M14.57 16C10.57 19.18 4.98 18.3 2.02 14.65C-0.83 11.12 -0.65 6.04 2.44 2.82C5.65 -0.51 10.68 -0.95 14.33 1.78C15.64 2.76 16.61 4 17.25 5.5C17.89 7.02 18.08 8.59 17.86 10.22C17.64 11.83 17 13.27 15.94 14.62C16.03 14.67 16.12 14.71 16.19 14.78C17.34 15.93 18.49 17.08 19.64 18.23C19.92 18.5 20.05 18.82 19.97 19.2C19.81 19.96 18.91 20.25 18.32 19.73C18.05 19.49 17.8 19.22 17.54 18.96C16.6 18.01 15.65 17.06 14.7 16.12C14.66 16.08 14.62 16.05 14.57 16ZM15.96 8.98C15.97 5.12 12.85 2 8.98 2C5.12 1.99 2 5.09 1.99 8.94C1.97 12.81 5.08 15.94 8.96 15.96C12.81 15.98 15.95 12.85 15.96 8.98Z" fill="#3D3D3D" fillOpacity="1.000000" fillRule="nonzero" />
            </svg>
          </div>

          <Link to='/cart' className={styles.cart}>
            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z" /><circle cx="7" cy="22" r="2" /><circle cx="17" cy="22" r="2" /></svg>
            {totalCount !== 0 && <span><p>{totalCount}</p></span>}
          </Link>

          {data ? (
            <Link to={'/profile'} className={styles.avatar__image}>
              <img src={data ? data?.avatar : logo} alt='user' />
            </Link>
          ) : (
            <button type='button' onClick={opepPopup}>
              <img src={loginIcon} alt="login" />
              <h5>Login</h5>
            </button>
          )}

        </div>
      </div>
      {visible && <Authorization closePopup={closePopup} />}
    </>
  )
}

export default Header