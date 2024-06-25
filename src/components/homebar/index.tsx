'use client'

import { DrawerContext } from "@/contextApi"
import { useContext } from "react"

export default function Homebar(){
    let { isOpen } = useContext(DrawerContext)
    // console.log(open);
    
    return(
            <div>
            <h1 className="text-2xl my-4">Home</h1>
            <span className="shadow-lg inline-block p-3 w-full bg-[#FFFFFF]">Welcome to Home DTech</span>
            </div>
    )
}