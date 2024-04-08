import React from 'react'
import { useSelector } from 'react-redux'

import { selectPlantData } from '../../../redux/plant/selectors'
import { useAppDispatch } from '../../../redux/store'
import { fetchPlant } from '../../../redux/plant/asyncActions'

import { Categories, Filter, Pagination, PlantBlock, Skeleton } from '../..'

import './Products.scss'
import { selectFilter } from '../../../redux/filter/selectors'
import { setCurrentPage } from '../../../redux/filter/slice'

export const Products: React.FC = () => {
  const dispatch = useAppDispatch()
  const { items, status } = useSelector(selectPlantData)
  const { currentPage, categoryType, sortBy, sortRevers } = useSelector(selectFilter)

  React.useEffect(() => {
    async function getPlants() {
      try {
        dispatch(fetchPlant({ currentPage, categoryType, sortBy, sortRevers }))
      } catch (error) {
        console.log(error)
      }
    }
    getPlants()
  }, [currentPage, categoryType, sortBy, sortRevers])

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  const skeletons = [... new Array(12)].map((obj, i) => (<Skeleton key={i} />))
  const plants = items.map((item: any) => (<PlantBlock key={item.id} {...item} />))

  return (
    <div className='products'>
      <Categories />

      <div className='container'>
        <Filter />

        <div className="products-list">

          {status === 'loading' ? skeletons : plants}

        </div>

        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </div>
  )
}