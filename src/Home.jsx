import useFetch from './hooks/useFetch'
import SearchNameCard from './components/SearchNameCard'
import Recipes from './components/Recipes'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Pagination from './Pagination'
import { useRecipeFilters } from './hooks/useRecipeFilters'

export default function Home() {
  const { q, page } = useRecipeFilters()
  const { items, loading, Error } = useFetch(q, page)
  const postsPerPage = 3

  return (
    <div>
      <SearchNameCard />
      {loading && <div>Loading...</div>}
      {items && (
        <>
          <Recipes items={items} />
          <Pagination totalPosts={items.total} postsPerPage={postsPerPage} />
        </>
      )}
      {Error && <div>Error</div>}
    </div>
  )
}
