"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "../ui/Button"
import { HamburgerMenuIcon, MagnifyingGlassIcon, Cross1Icon } from '@radix-ui/react-icons'

import { navLinks } from "@/constants"

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    
  return (
    <header className="padding-r padding-l pb-8 z-10 w-full">
        <nav className="flex justify-between max-container" role="navigation">
            <Link href="/">
                <Image src="/Co.svg" width={64} height={64} alt="logo"/>
            </Link>
            <ul className="flex-1 flex justify-end items-center gap-8 max-lg:hidden ">
                {navLinks.map((item, i) => (
                    <li key={`${item.label}-${i}`} className="relative">
                        <Link href={item.href} className="leading-normal text-sm text-citadel hover:opacity-70 focus-visible:opacity">
                            <p>{item.label}</p>
                        </Link>
                    </li>
                ))}
                <Button className={`whitespace-nowrap 
                rounded-2xl text-sm text-Ivory font-medium  px-4 py-1 animate-shimmer
                 bg-[linear-gradient(110deg,#436850,45%,#3D735E,55%,#436850)] bg-[length:200%_100%]
                  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400
                   focus:ring-offset-2 focus:ring-offset-slate-50`}>Contact Us</Button>
            </ul>



         {/* Mobile Menu */}
         <div  className="flex justify-center items-center gap-8 z-[99999] ">
            <div className="hidden max-lg:block cursor-pointer">
                <MagnifyingGlassIcon width={24} height={24} />
            </div>
          <div
            onClick={() => {setToggle(!toggle)}} 
           className="hidden max-lg:block cursor-pointer">
              <HamburgerMenuIcon width={24} height={24} />
          </div>

          {/* Side Drawer */}
          <div className={toggle? "fixed z-[9999] top-0 right-0 w-[300px] h-screen bg-ashGray transition-all duration-300 ease-in-out": "fixed z-[9999] top-0 right-[-200vw] w-[300px] h-screen bg-ashGray transition-all duration-300 ease-in-out"}>
            <Cross1Icon onClick={() => {setToggle(!toggle)}} 
              className="absolute top-8 right-8 cursor-pointer mt-4"
              width={24} 
              height={24} 
              />
          <ul className="mt-10 p-8 flex-1 flex flex-col justify-center items-start gap-16 h-full">
              {navLinks.map((item) => (
                  <div key={item.label}
                    className="relative">
                      <Link href={item.href}
                        className="leading-normal text-lg text-citadel hover:opacity-60 focus-visible:opacity">
                          {item.label}
                      </Link>
                  </div>
              ))}
            </ul>
          </div>

        </div>
        </nav>

    </header>
  )
}

export default NavBar
