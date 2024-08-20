import useFetch from '../hooks/useFetch'
import useBuildColorMap from '../hooks/useBuildColorMap'
import Card from '../Card'

export default function Recipes() {
  const colorMap = useBuildColorMap()

  const BASE_URL = 'https://dummyjson.com/recipes'

  const { items, loading, Error } = useFetch(BASE_URL)
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6  py-12   px-1 sm:px-4'>
        {loading && <div>Loading...</div>}
        {items &&
          items.recipes.map((item, index) => (
            <Card key={item.id} item={item} colorMap={colorMap} />
          ))}
        {Error && <div>Error</div>}
      </div>
    </div>
  )
}
