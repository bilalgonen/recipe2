import useFetch from './hooks/useFetch'
import SearchNameCard from './components/SearchNameCard'
import Recipes from './components/Recipes'
import Pagination from './Pagination'
import { useRecipeFilters } from './hooks/useRecipeFilters'
import Tags from './components/Tags'
import { useFetchRecipes } from './hooks/useFetchRecipes'

export default function Home() {
  // const { q, page } = useRecipeFilters()
  const { url, limit } = useFetchRecipes()
  console.log('Home url:', url)
  // const itemsPerPage = 6
  const { items, loading, Error } = useFetch(url)
  // const { items, loading, Error } = useFetch(q, page, itemsPerPage)

  return (
    <main>
      {/* <Tags /> */}
      <SearchNameCard />
      {loading && <div>Loading...</div>}
      {items && (
        <>
          <Pagination totalItems={items.total} itemsPerPage={limit} />
          <Recipes items={items} />
        </>
      )}
      {Error && <div>Error</div>}
    </main>
  )
}
