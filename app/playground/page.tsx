"use client";
import { toast } from "sonner"
 
 
import React from 'react'

const page = () => {
  return (
    <div className="flex justify-center items-center">
        <button
        onClick={() =>
            toast.info("Event has been created",
            //  {
            // description: "Sunday, December 03, 2023 at 9:00 AM",
            // action: {
            //     label: "Show",
            //     onClick: () => console.log("Undo"),
            // },
            // }
            { duration: 6000 }
          )
        }

        className="p-2 border-1 rounded-xl bg-slate-500"
        >
        Show Toast
        </button>
    </div>
  )
}

export default page