import React from 'react'
import { useRecipeFilters } from './hooks/useRecipeFilters'
import { useFetchRecipes } from './hooks/useFetchRecipes'

const Pagination = ({ totalItems, itemsPerPage }) => {
  // const { q, page, setFilters } = useRecipeFilters()
  const { q, page, setFilters } = useFetchRecipes()

  let pages = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i)
  }

  return (
    <div className='flex flex-row gap-1 mx-auto  justify-center my-4'>
      {pages.map((pg, index) => {
        return (
          <button
            key={index}
            onClick={() => setFilters({ page: pg, q: q })}
            className={`text-blue-600 font-medium border rounded-md size-8 p-1 cursor-pointer hover:bg-opacity-70 disabled:cursor-not-allowed ${
              pg == page ? 'bg-yellow-500' : 'bg-yellow-200'
            }`}
            disabled={pg == page}
          >
            {pg}
          </button>
        )
      })}
    </div>
  )
}

export default Pagination
