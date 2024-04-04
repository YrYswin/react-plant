import React from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import plantImg from '../../assets/img/plant.png'

import styles from './FullPlantPage.module.scss'

import { Plant } from '../../redux/plant/types'

export const FullPlantPage: React.FC = () => {
  const navigate = useNavigate()
  const [item, setItem] = React.useState<Plant>()
  const { id } = useParams()

  const getOneItem = async () => {
    try {
      const { data } = await axios.get(`https://660bc28eccda4cbc75dda413.mockapi.io/plants/${id}`)
      setItem(data)
    } catch (error) {
      console.log(error)
      alert('К сажелению это растение не нашлось в продаже')
      navigate('/')
    }
  }

  React.useEffect(() => {
    getOneItem()
  }, [])

  if (!item) {
    return <>Loading</>
  }

  return (
    <div className={styles.shopItem}>
      <div className={styles.imageItems}>
        <div className={styles.itemImages}>

          {item.imagesUrl.map((img, i) => (
            <div key={i} className={styles.imagesContainer}>
              <img src={img} alt='miniPicures' />
            </div>
          ))}
        </div>
        <div className={styles.itemImage}>
          <img src={item.imageUrl} alt="itemImage" />
        </div>
        <div className={styles.searchItemshop}>
          <img src='' alt="search" />
        </div>
      </div>

      <div className={styles.overviewItem}>
        <div className={styles.itemTitle}>
          <h1>{item.title}</h1>
          <div className={styles.itemPrices}>
            <span className={styles.price}>$ {item.price}</span>
            <div className={styles.starts}>
              <p>19 Customer Review</p>
            </div>
          </div>
        </div>

        <div className={styles.descriptionItem}>
          <h5>Short Description:</h5>
          <p>{item.shortDescription} </p>
        </div>

        <div className={styles.sizeItem}>
          <h5>Size:</h5>
          <div className={styles.sizeOption}>

            {item.size.map((siz, i) => (
              <div key={i}>{siz}</div>
            ))}

          </div>
        </div>

        <div className={styles.counterItem}>
          <div className={styles.countItem}>
            <div>-</div>
            <div>0</div>
            <div>+</div>
          </div>
          <div className={styles.addCartBtn}>
            <button className={styles.buyItem}>BUY NOW</button>
            {/* <button onClick={() => addCart(item)} className='addCart'>ADD CART</button> */}
          </div>
          <div className={styles.addToWishlist}>
            <img src='' alt="wish" />
          </div>
        </div>

        <div className={styles.information}>
          <p>SKU: {item.id}</p>
          <p>CATEGORIES: Potter Plants</p>
          <p>Tegs: Home, Garden, Plants</p>
          <p>Share this product: In  Tw In Ms</p>
        </div>
      </div>
    </div>
  )
}