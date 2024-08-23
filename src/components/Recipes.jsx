import Card from '../Card'

export default function Recipes({ items }) {
  return (
    <div className='grid justify-items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 py-12 '>
      {items.recipes.map((item, index) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  )
}
