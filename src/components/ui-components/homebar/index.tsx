'use client'

import { DrawerContext } from "@/contextApi"
import { useContext } from "react"

export default function Homebar(){
    let { isOpen } = useContext(DrawerContext)
    console.log(open);
    
    
    return(
        <div className="ml-16 flex justify-end space-y-4">
            <div style={{width: isOpen === 'close'? '97%' : '85%'}}>
            <h1 className="text-2xl m-4">Home</h1>
            <span className="shadow-lg inline-block p-3 w-full bg-[#FFFFFF]">Welcome to Home DTech</span>
            </div>
        </div>
    )
}