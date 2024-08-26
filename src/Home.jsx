import useFetch from './hooks/useFetch'
import SearchNameCard from './components/SearchNameCard'
import Recipes from './components/Recipes'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Pagination from './Pagination'
import { useRecipeFilters } from './hooks/useRecipeFilters'
import { useTagContext } from './context/tag-context'

export default function Home() {
  console.log('Home rendered')
  const { tags } = useTagContext()
  console.log('Home tags:', tags)

  // const { q, page } = useRecipeFilters()
  // const itemsPerPage = 6
  // const { items, loading, Error } = useFetch(q, page, itemsPerPage)

  return (
    <div>
      <h1 className='text-2xl font-bold'>Home</h1>
      {/* <SearchNameCard /> */}
      {/* {loading && <div>Loading...</div>}
      {items && (
        <>
          <Recipes items={items} />
          <Pagination totalItems={items.total} itemsPerPage={itemsPerPage} />
        </>
      )}
      {Error && <div>Error</div>} */}
    </div>
  )
}
