import useBuildColorMap from '../hooks/useBuildColorMap'
import Card from '../Card'

export default function Recipes({ items }) {
  const colorMap = useBuildColorMap()
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6  py-12   px-1 sm:px-4'>
        {items.recipes.map((item, index) => (
          <Card key={item.id} item={item} colorMap={colorMap} />
        ))}
      </div>
    </div>
  )
}
