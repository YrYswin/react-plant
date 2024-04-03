import React from 'react'

import logo from '../../assets/svg/logo.svg'
import Ellipse from '../../assets/footerImg/Ellipse.svg'
import frame1 from '../../assets/footerImg/Frame1.svg'
import group1 from '../../assets/footerImg/Group1.svg'
import frame2 from '../../assets/footerImg/Frame2.svg'
import group2 from '../../assets/footerImg/Group2.svg'
import frame3 from '../../assets/footerImg/Frame3.svg'
import group3 from '../../assets/footerImg/Group3.svg'
import location from '../../assets/footerImg/Location.svg'
import message from '../../assets/footerImg/Message.svg'
import calling from '../../assets/footerImg/Calling.svg'
import facebook from '../../assets/footerImg/Facebook.svg'
import union from '../../assets/footerImg/Union.svg'
import twiter from '../../assets/footerImg/Twitter.svg'
import instagram from '../../assets/footerImg/Instagram.svg'
import linkedin from '../../assets/footerImg/Linkedin.svg'
import visa from '../../assets/footerImg/visa.svg'
import paypal from '../../assets/footerImg/paypal.svg'
import mastercard from '../../assets/footerImg/mastercard.svg'
import jcb from '../../assets/footerImg/jcb.svg'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.listOne}>
        <div className={styles.plant}>
          <div>
            <div className={styles.image}>
              <img src={Ellipse} alt="" />
              <img className={styles.img11} src={frame1} alt="" />
              <img className={styles.img12} src={group1} alt="" />
            </div>
            <h2>Garden Care</h2>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>

          <div className={styles.border}>
            <div className={styles.image}>
              <img src={Ellipse} alt="" />
              <img className={styles.img21} src={frame2} alt="" />
              <img className={styles.img22} src={group2} alt="" />
            </div>
            <h2>Plant Renovation</h2>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>

          <div>
            <div className={styles.image}>
              <img src={Ellipse} alt="" />
              <img className={styles.img31} src={frame3} alt="" />
              <img className={styles.img32} src={group3} alt="" />
            </div>
            <h2>Watering Graden</h2>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
        </div>

        <div className={styles.joinContainer}>
          <h1>Would you like to join newsletters?</h1>
          <div className={styles.joinus}>
            <input name='email' type="text" autoComplete='email' placeholder='enter your email address...' />
            <button>Join</button>
          </div>
          <p>We usually post offers and challenges in newsletter. We're your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green) house to yours!</p>
        </div>
      </div>

      <div className={styles.listTwo}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <div className={styles.title}>
            <h1>Green Days</h1>
            <p>"My life, my rules"</p>
          </div>
        </div>

        <div className={styles.link}>
          <div>
            <img src={location} alt="location" />
            <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
          </div>

          <div>
            <img src={message} alt="message" />
            <p>contact@greendays.com</p>
          </div>

          <div>
            <img src={calling} alt="calling" />
            <p>+996 700 111 201</p>
          </div>
        </div>
      </div>

      <div className={styles.listThree}>
        <div className={styles.other}>
          <div>
            <h2>My account</h2>
            <p>My accaount</p>
            <p>Our stores</p>
            <p>Contact us</p>
            <p>Career</p>
            <p>Specials</p>
          </div>

          <div>
            <h2>Help & Guide</h2>
            <p>Help Center</p>
            <p>How to Buy</p>
            <p>Shipping & Delivery</p>
            <p>Product Policy</p>
            <p>How to Return</p>
          </div>

          <div>
            <h2>Categories</h2>
            <p>House Plants</p>
            <p>Potter Plants</p>
            <p>Seeds</p>
            <p>Small Plants</p>
            <p>Accessories</p>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <div className={styles.social}>
            <h1>Social Media</h1>
            <div>
              <div><img src={facebook} alt="" /></div>
              <div><img src={instagram} alt="" /></div>
              <div><img src={twiter} alt="" /></div>
              <div><img src={linkedin} alt="" /></div>
              <div><img src={union} alt="" /></div>
            </div>
          </div>

          <div className={styles.paymentMethod}>
            <h1>We accept</h1>
            <div className={styles.wallet}>
              <img src={paypal} alt="" />
              <img src={visa} alt="" />
              <img src={mastercard} alt="" />
              <img src={jcb} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.listFour}>
        <span>©2024 GreenDays. All Rights Reserved.</span>
      </div>

    </div>
  )
}

export default Footer