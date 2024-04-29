import React from 'react'
import Redirect from '@/components/atoms/Redirect'

const DetailCard = () => {
  return (
    <div className='flex justify-between w-full h-[10rem] bg-night rounded-lg text-neutral-200 px-2 md:px-4 xl:px-8 py-4'>
        <div className='flex flex-col justify-between'>
            <p className='text-xl sm:text-2xl font-bold xl:text-3xl'>GHS 500,000</p> 
            <div className='text-xs lg:text-sm xl:text-base max-[360px]:ml-10'>
                <p>31 Gordon Street</p>
                <p>Achimota, Accra</p>
            </div>
        </div>

        <div className='flex flex-col justify-between'>
            <div className='flex justify-end'>
                <Redirect />
            </div>

            <div className='hidden min-[360px]:flex divide-x text-xs lg:text-sm xl:text-base'>
                <div className='flex-group flex-col px-3'>
                    <p>2087</p>
                    <p>Sq.ft.</p>
                </div>
                <div className='flex-group flex-col px-3'>
                    <p>4</p>
                    <p>Beds</p>
                </div>
                <div className='flex-group flex-col pl-3'>
                    <p>3</p>
                    <p>Baths</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailCard