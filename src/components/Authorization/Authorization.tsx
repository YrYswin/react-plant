import React, { useState } from 'react'

import { Register, Login } from '..'

import google from '../../assets/svg/google.svg'
import facebook from '../../assets/svg/facebook.svg'
import exite from '../../assets/svg/X.svg'

import './Authorization.scss'

type AuthorizationProps = {
  closePopup: () => void,
}

export const Authorization: React.FC<AuthorizationProps> = ({ closePopup }) => {
  const [active, setActive] = useState(true)

  function changeMenu(messange: boolean) {
    setActive(messange)
  }

  return (
    <div className='popup'>
      <div className="registerMenu">
        <button className='closePopup' onClick={closePopup}>
          <img src={exite} alt="exite" />
        </button>
        <div className="titlePopup">
          <button className={!active ? 'active' : ''} onClick={() => changeMenu(false)}>Sign Up</button>
          <div className='borders'></div>
          <button className={active ? 'active' : ''} onClick={() => changeMenu(true)}>Register</button>
        </div>

        {
          active ? <Register /> : <Login closePopup={closePopup} />
        }

        <div className="registerWith">
          <button>
            <img src={google} alt="google" />
            <p>Continue with Google</p>
          </button>
          <button>
            <img src={facebook} alt="facebook" />
            <p>Continue with Facebook</p>
          </button>
        </div>
      </div>
    </div>
  )
}