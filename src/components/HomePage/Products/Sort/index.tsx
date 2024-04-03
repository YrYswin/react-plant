import React from 'react'
import { useAppDispatch } from '../../../../redux/store'

import { setSortBy, setSortRevers } from '../../../../redux/filter/slice'

import './Filter.scss'

export const Filter: React.FC = () => {
  const dispatch = useAppDispatch()
  const [sortState, setSortState] = React.useState('desc')

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(event.target.value))
  }

  const handleSortRevers = () => {
    setSortState(sortState === 'asc' ? 'desc' : 'asc')
    dispatch(setSortRevers(sortState))
  }

  return (
    <div className='filter'>
      <ul>
        <li>All Plant</li>
        <li>New Arrivals</li>
        <li>Sale</li>
      </ul>

      <div className="sortBy">
        <div className="svg-container">
        </div>
        <span>Sort By: </span>
        <select name="sortBy" id="sortBy" onChange={handleSelect}>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="title">Alphabetically</option>
        </select>

        <svg onClick={handleSortRevers} fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1"
          viewBox="0 0 490 490" >
          <g>
            <polygon points="85.877,154.014 85.877,428.309 131.706,428.309 131.706,154.014 180.497,221.213 217.584,194.27 108.792,44.46 0,194.27 37.087,221.213 	" />
            <polygon points="404.13,335.988 404.13,61.691 358.301,61.691 358.301,335.99 309.503,268.787 272.416,295.73 381.216,445.54 490,295.715 452.913,268.802 	" />
          </g>
        </svg>
      </div>
    </div>
  )
}
