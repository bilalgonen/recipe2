import useFetch from './hooks/useFetch'
import SearchNameCard from './components/SearchNameCard'
import Recipes from './components/Recipes'
import Pagination from './Pagination'
import { useRecipeFilters } from './hooks/useRecipeFilters'
import Tags from './components/Tags'

export default function Home() {
  const { q, page } = useRecipeFilters()
  const itemsPerPage = 6
  const { items, loading, Error } = useFetch(q, page, itemsPerPage)

  return (
    <main>
      <Tags />
      <SearchNameCard />
      {loading && <div>Loading...</div>}
      {items && (
        <>
          <Recipes items={items} />
          <Pagination totalItems={items.total} itemsPerPage={itemsPerPage} />
        </>
      )}
      {Error && <div>Error</div>}
    </main>
  )
}
