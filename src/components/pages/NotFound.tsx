import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound: React.FC = () => {
  return (
    <div className='notFound'>
      <h1>К сажелению не удалось найти данную страницу 🤔</h1>
      <button type='button'>
        <Link to={'/'}>
          Вернуться на Главную
        </Link>
      </button>
    </div>
  )
}
