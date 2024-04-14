"use client"

import Link from "next/link"
import { MagnifyingGlassIcon, HomeIcon, ChevronDownIcon } from "@radix-ui/react-icons"
import { Selector } from "@/containers/Hero/Selector"

const SearchBar = () => {
  return (
    <div className="hidden lg:block">
      {/* Buttons */}
      <div className="flex justify-start relative overflow-hidden">
        <div className="peer z-10 relative bg-perennialGreen text-Ivory p-2 rounded-t-xl w-20 text-center transition-all duration-300 
                      hover:rounded-tr-none hover:translate-x-0.5 hover:z-0
                      peer-hover:scale-110 peer-hover:z-0">
          <Link href="#" className="w-full">Sale</Link>
        </div>
        <div className="peer z-20 relative bg-paleSage text-Ivory p-2 rounded-t-xl w-20 text-center transition-all duration-300 
                      hover:rounded-tl-none hover:translate-x-[-0.5rem] hover:z-0
                      peer-hover:scale-110 peer-hover:z-0">
          <Link href="#" className="w-full">Buy</Link>
        </div>
      </div>

      {/* Search bar */}
      <div className="flex justify-center items-center gap-2 min-w-[44rem] h-auto bg-Ivory p-4 rounded-b-xl rounded-tr-xl">
        <div className="flex justify-center items-center gap-2">
          <HomeIcon width={24} height={24} />
          <Selector />
        </div>
        <div className="w-[0.3px] h-8 bg-night opacity-20"/>
        <div className="flex justify-center items-center gap-2 ml-2">
          <MagnifyingGlassIcon width={24} height={24}/>
          <input type="text" 
          placeholder="Search by location" 
          className=" bg-transparent text-night p-2 focus:outline-none"
          />
        </div>
        <button type="submit" className="bg-perennialGreen py-2 px-8 rounded-lg text-Ivory ml-16">Search</button>
      </div>
       
       {/* Search Buttons */}
      <div className="flex justify-center items-center text-Ivory gap-4 mt-4">
        <div>
          <p>Popular Search: </p>
        </div>
        <div className="flex justify-center items-center gap-4 font-medium text-base">
          <button type="submit" className="px-6 py-2 bg-transparent text-Ivory border-[0.5px] rounded-lg">Resident House</button>
          <button type="submit" className="px-6 py-2 bg-transparent text-Ivory border-[0.5px] rounded-lg">Studio Apartment</button>
          <button type="submit" className="px-6 py-2 bg-transparent text-Ivory border-[0.5px] rounded-lg">Countryside</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar