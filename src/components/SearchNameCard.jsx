import React, { useEffect, useState } from 'react'
import { useRecipeFilters } from '../hooks/useRecipeFilters'
import { useDebounce } from '../hooks/useDebounce'

export default function SearchNameCard() {
  const { q, page, setFilters } = useRecipeFilters()

  const [localQ, setLocalQ] = useState(q)
  const debouncedQ = useDebounce(localQ)

  useEffect(() => {
    setFilters({ q: debouncedQ })
  }, [debouncedQ])

  return (
    <div className='flex flex-row gap-2 px-1 md:px-8'>
      <input
        type='text'
        value={localQ}
        onChange={(e) => setLocalQ(e.target.value)}
        placeholder='Search recipes...'
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
