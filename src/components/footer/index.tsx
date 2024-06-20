'use client'

import { DrawerContext } from "@/contextApi"
import { useContext } from "react"

export default function Footer (){
  let { isOpen } = useContext(DrawerContext)

    return(
        <main className="w-full absolute bottom-1 right-1 flex justify-end">
            <div className="p-4 bg-[#FFFFFF] text-[#869099] text-sm lg:w-[82.5%]">
                <span className="font-semibold">Copyright © 2024</span> All rights reserved.
                </div>
        </main>
    )
}