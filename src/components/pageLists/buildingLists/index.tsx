import { Box } from '@mui/material';
import React from 'react';
import { Delete as DeleteIcon, Create as CreateIcon } from '@mui/icons-material'
import Image from 'next/image';

interface BuildingListProps {
    list: ListItem[]
}

interface ListItem {
    image: string;
    user: string;
    name: string;
    type: string;
    city: string;
    address: string;
    width: number;
    length: number;
    height: number;
    area: number;
}
const BuildingList: React.FC<BuildingListProps> = ({ list }) => {
    return (
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }} className='rounded-md'>
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
                        <th className='text-center py-2'>Action</th>
                    </tr>
                    {list.map((item, index) => {
                        const { image, user, name, type, city, address, width, length, height, area } = item
                        return (
                            <tr key={index} className='border-b-2 text-xs'>
                                <td className='py-2'><img className='mt-2' width={100} height={100} src={image} /></td>
                                <td className='text-left py-2'>{user}</td>
                                <td className='text-left py-2'>{name}</td>
                                <td className='text-left py-2'>{type}</td>
                                <td className='text-left py-2'>{city}</td>
                                <td className='text-left py-2'>{address}</td>
                                <td className='text-left p-2'>{width}</td>
                                <td className='text-left p-2'>{length}</td>
                                <td className='text-left p-2'>{height}</td>
                                <td className='text-left p-2'>{area}</td>
                                <td className='text-center py-4'>
                                    <span className='inline-flex border-2'>
                                        <button className="p-2 rounded-s rounded-e text-white bg-[#0069D9]">
                                            <CreateIcon />
                                        </button>
                                        <div className='pl-1' />
                                        <button className="p-2 rounded-s rounded-e text-white bg-[#C82333]">
                                            <DeleteIcon />
                                        </button>
                                    </span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Box>
    )
}

export default BuildingList;