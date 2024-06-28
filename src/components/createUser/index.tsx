'use client'
import { Box } from "@mui/material";


export default function CreateUser() {
    return (
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2, }}>
            <div className="flex justify-between flex-wrap">
                <div className="w-[25%] flex-col space-y-2">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Name:
                    </span>
                    <input placeholder="Name" type='text' className="border-2 text-xs w-[90%] p-2 shadow-sm border-slate-300 placeholder-slate-400 rounded-md focus:outline-none focus:border-sky-300 focus:ring-sky-300" />
                </div>
                <div className="w-[25%] flex-col space-y-2">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        UserName:
                    </span>
                    <input placeholder="UserName" type='text'  className="border-2 text-xs w-[90%] p-2 shadow-sm border-slate-300 placeholder-slate-400 rounded-md focus:outline-none focus:border-sky-300 focus:ring-sky-300" />
                </div>
                <div className="w-[25%] flex-col space-y-2">
                    <span className="block text-xs font-bold text-slate-700">
                        Phone:
                    </span>
                    <input placeholder="Phone" type='number'  className="border-2 text-xs w-[90%] p-2 shadow-sm border-slate-300 placeholder-slate-400 rounded-md focus:outline-none focus:border-sky-300 focus:ring-sky-300" />
                </div>
                <div className="w-[25%] flex-col space-y-2">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Email:
                    </span>
                    <input placeholder="Email" type='email' className="border-2 text-xs w-[90%] p-2 shadow-sm border-slate-300 placeholder-slate-400 rounded-md focus:outline-none focus:border-sky-300 focus:ring-sky-300" />
                </div>
            </div>
        </Box>
    )
}