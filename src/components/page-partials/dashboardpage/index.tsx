'use client'

import { useState } from "react"

export default function Dashboardpage() {
    const [textColor, settextColor] = useState('#0083FF')
    return (
        <main className="w-[80%] ml-64">
            <h1>Dashboard</h1>
            <span className="w-full border-b-2 flex space-x-4 my-8 text-xs">
                <p style={{ color: textColor }} className="border-b-4 w-24 text-center border-[#0083FF] pb-1">RESIDENTIAL</p>
                <p style={{ color: textColor }} className="border-b-4 w-24 text-center border-[#0083FF] pb-1">COMMERCIAL</p>
            </span>
        </main>
    )
}