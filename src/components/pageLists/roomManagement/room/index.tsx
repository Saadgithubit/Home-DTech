'use client'
import { Box } from '@mui/material';
import React from 'react';
import { Delete as DeleteIcon, Create as CreateIcon } from '@mui/icons-material'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';
import PaginationComponent from '@/components/pagination';


interface RoomsListProps {
    roomsList: roomsItem[];
    itemsPerPage?: number;
}

interface roomsItem {
    image: string;
    building: string;
    name: string;
    occupant: string;
    width: number;
    length: number;
    height: number;
    area: number;
}

const RoomsList: React.FC<RoomsListProps> = ({ roomsList, itemsPerPage = 3 }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams: any = useSearchParams();
    const currentPage = parseInt(searchParams.get('page')) || 1;

    const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
        router.push(`${pathname}?page=${value}`);
    };

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const displayedList = roomsList.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(roomsList.length / itemsPerPage);

    return (
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }} className='rounded-md'>
            <div className="pb-4">
                <PaginationComponent count={totalPages} page={currentPage} onChange={handlePageChange} />
            </div>
            <table className='w-full'>
                <tbody>
                    <tr className='border-b-2 text-xs'>
                        <th className='text-left py-2'>Image</th>
                        <th className='text-left py-2'>Building</th>
                        <th className='text-left py-2'>Name</th>
                        <th className='text-left py-2'>Width</th>
                        <th className='text-left py-2'>Length</th>
                        <th className='text-left py-2'>Height</th>
                        <th className='text-left py-2'>Area</th>
                        <th className='text-center py-2'>Action</th>
                    </tr>
                    {displayedList.map((item, index) => {
                        const { image, building, name, width, length, height, area } = item
                        return (
                            <tr key={index} className='border-b-2 text-xs'>
                                <td className='py-2'><img className='mt-2' width={100} height={100} src={image} /></td>
                                <td className='text-left py-2'>{building}</td>
                                <td className='text-left py-2'>{name}</td>
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

export default RoomsList;
