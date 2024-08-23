import React, { useEffect, useState } from 'react'
import { useRecipeFilters } from '../hooks/useRecipeFilters'
import { useDebounce } from '../hooks/useDebounce'
import { useFetchRecipes } from '../hooks/useFetchRecipes'

export default function SearchNameCard() {
  // const { q, page, setFilters } = useRecipeFilters()
  const { q, setFilters } = useFetchRecipes()

  const [localQ, setLocalQ] = useState(q)
  const debouncedQ = useDebounce(localQ)

  useEffect(() => {
    setFilters({ q: debouncedQ, page: 1 })
  }, [debouncedQ])

  return (
    <div className='flex flex-row gap-2 pt-8'>
      <input
        type='text'
        value={localQ}
        onChange={(e) => setLocalQ(e.target.value)}
        placeholder='Search by recipe title...'
        className='border border-gray-400 rounded-md p-1 w-[240px]'
      />
      <button
        className='btn '
        onClick={() => {
          setLocalQ('')
          setFilters({ q: '' })
        }}
      >
        Clear
      </button>
    </div>
  )
}
