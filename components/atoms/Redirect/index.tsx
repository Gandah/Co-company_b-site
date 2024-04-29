"use client";
import React from 'react'
import Image from 'next/image';
import Button from '@/components/ui/Button';

const Redirect = () => {
  return (
    <Button className='flex-group rounded-full bg-sunny p-2'>
        <Image src="/assets/icons/arrow-top-right.svg" 
        width={32} height={32} alt="arrow top right icon"/>      
    </Button>
  )
}

export default Redirect