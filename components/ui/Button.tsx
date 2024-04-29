"use client"

import { PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren


const Button = ({ className, children,...props }: ButtonProps) => {
  return (
    <button className={cn("inline-flex items-center justify-center", className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button