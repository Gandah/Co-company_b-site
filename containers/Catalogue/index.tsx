import CatalogueGrid from '@/components/cards/CatalogueGrid'


const Catalogue = () => {
  return (
    <div className="flex-group flex-col gap-4 w-full">
      <div className="flex-group flex-col gap-8">
        <h2 className="text-perennialGreen font-bold text-center">
          Discover Your Ideal living Space
        </h2>
        <p className="mx-0 w-full text-center lg:w-[80%]">
        Find the perfect property for your needs and budget in our extensive catalogue. Browse our selection of homes, apartments, and commercial properties today.
        </p>
      </div>

      <CatalogueGrid />
  </div>
  )
}

export default Catalogue