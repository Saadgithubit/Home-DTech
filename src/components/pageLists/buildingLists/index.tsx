'use client'
import { Box } from '@mui/material';
import React from 'react';
import Image from 'next/image';

interface BuildingListProps {
    list: ListItem[]
}

interface ListItem {
    image: string,
    User: string,
    Name: string,
    Type: string,
    City: string,
    Address: string,
    Width: number,
    Length: number,
    Height: number,
    Area: number,
}
const BuildingList: React.FC<BuildingListProps> = ({ list }) => {
    return (
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
            <table className='w-full'>
                <tbody>
                    <tr className='border-b-2 text-xs'>
                        <th className='text-left py-2'>Image</th>
                        <th className='text-left py-2'>User</th>
                        <th className='text-left py-2'>Name</th>
                        <th className='text-left py-2'>Type</th>
                        <th className='text-left py-2'>City</th>
                        <th className='text-left py-2'>Address</th>
                        <th className='text-left py-2'>Width</th>
                        <th className='text-left py-2'>Length</th>
                        <th className='text-left py-2'>Height</th>
                        <th className='text-left py-2'>Area</th>
                    </tr>
                    {list.map((item, index) => {
                        const { image, User, Name, Type, City, Address, Width, Length, Height, Area } = item
                        return (
                            <tr key={index} className='border-b-2 text-xs'>
                                <td className='py-2'><img className='mt-2' width={100} height={100} src={image}/></td>
                                <td className='text-left py-2'>{User}</td>
                                <td className='text-left py-2'>{Name}</td>
                                <td className='text-left py-2'>{Type}</td>
                                <td className='text-left py-2'>{City}</td>
                                <td className='text-left py-2'>{Address}</td>
                                <td className='text-left py-2'>{Width}</td>
                                <td className='text-left py-2'>{Length}</td>
                                <td className='text-left py-2'>{Height}</td>
                                <td className='text-left py-2'>{Area}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Box>
    )
}

export default BuildingList;