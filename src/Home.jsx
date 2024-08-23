import useFetch from './hooks/useFetch'
import SearchNameCard from './components/SearchNameCard'
import Recipes from './components/Recipes'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Pagination from './Pagination'
import { useRecipeFilters } from './hooks/useRecipeFilters'

export default function Home() {
  const { q, page } = useRecipeFilters()
  const itemsPerPage = 6
  const { items, loading, Error } = useFetch(q, page, itemsPerPage)

  return (
    <div>
      <SearchNameCard />
      {loading && <div>Loading...</div>}
      {items && (
        <>
          <Recipes items={items} />
          <Pagination totalItems={items.total} itemsPerPage={itemsPerPage} />
        </>
      )}
      {Error && <div>Error</div>}
    </div>
  )
}
