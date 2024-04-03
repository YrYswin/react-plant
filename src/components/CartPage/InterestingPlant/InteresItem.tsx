import React from 'react'

import { Plant } from '../../../redux/plant/types';

import plant from '../../../assets/img/plant.png';

import styles from './InterestingPlant.module.scss'

const InteresItem: React.FC<Plant> = ({ id, title, imageUrl, price }) => {
  return (
    <div className={styles.interes__item}>

      <div className={styles.interes__item_image}>
        <img src={imageUrl ? imageUrl : plant} alt="plant" />
      </div>

      <h5>{title}</h5>
      <span>$ {price}</span>
    </div>
  )
}

export default InteresItem 