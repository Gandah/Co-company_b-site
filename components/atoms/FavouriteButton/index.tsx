import Button from "@/components/ui/Button"
import Image from "next/image"

const FavouriteButton = () => {
  return (
    <Button className='flex-group rounded-full bg-lightGray p-4'>
      <Image 
        src="/assets/icons/heart.png"
        width={32}
        height={32}
       alt="heart icon" 
       />
    </Button>
  )
}

export default FavouriteButton