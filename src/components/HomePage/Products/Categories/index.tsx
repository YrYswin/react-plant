import React from 'react'
import { useAppDispatch } from '../../../../redux/store'
import { selectFilter } from '../../../../redux/filter/selectors'
import { useSelector } from 'react-redux'

import './Categories.scss'
import { setCategoryType } from '../../../../redux/filter/slice'

type categoriesArrayType = {
  category: string,
  value: string,
}

export const Categories: React.FC = () => {
  const dispatch = useAppDispatch()
  const { categoryType } = useSelector(selectFilter)

  const categoriesArray: categoriesArrayType[] = [
    { category: 'All Categories', value: '' },
    { category: 'House Plants', value: 'house-plant' },
    { category: 'Potter Plants', value: 'potter-plant' },
    { category: 'Seeds', value: 'seed' },
    { category: 'Small Plants ', value: 'small-plant' },
    { category: 'Big Plants ', value: 'big-plant' },
    { category: 'Succelents ', value: 'succelents' },
    { category: 'Terrariums ', value: 'terrarium' },
    { category: 'Gardening ', value: 'gardening' },
    { category: 'Accesories ', value: 'accesories' },
  ]

  const handleCategory = (value: string) => {
    dispatch(setCategoryType(value))
  }

  const sizesArray = ['Small', 'Mediun', 'Large']

  return (
    <div className="categories">

      <h1>Categories</h1>
      <ul>

        {categoriesArray.map((categories, i) => (
          <li
            className={categoryType === categories.value ? 'active-category' : ''}
            key={i}
            onClick={() => handleCategory(categories.value)}
          >
            <p>{categories.category}</p>
            <span>(10)</span>
          </li>
        ))}

      </ul>

      <h1>Price Range</h1>
      <div className="priceRange">
        <div className="price">
          <input type="range" name="" id="" />
          <p>Price: <span>$39-$1230</span></p>
        </div>
        <button type='button'>Filter</button>
      </div>


      <h1>Size</h1>
      <ul>
        {sizesArray.map((size, i) => (
          <li key={i}>
            <p>{size}</p>
            <span>(119)</span>
          </li>
        ))}
      </ul>

      <div className="sale">
        {/* <img src={plant} alt="" /> */}
      </div>
    </div>
  )
}