'use client'

import React from 'react';
import { Delete as DeleteIcon, Create as CreateIcon } from '@mui/icons-material'
import { Box } from "@mui/material";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Pagination from '@/components/pagination';
import { ChangeEvent } from 'react';

interface RoleListProps {
    list: RoleList[];
    itemsPerPage?: number;
}

interface RoleList {
    id: number;
    name: string;
}

const RoleList: React.FC<RoleListProps> = ({ list, itemsPerPage = 6 }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams: any = useSearchParams();
    const currentPage = parseInt(searchParams.get('page')) || 1;

    const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
        router.push(`${pathname}?page=${value}`);
    };

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const displayedList = list.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(list.length / itemsPerPage);


    return (
        <div className='p-2'>
            <div className="pb-4">
                <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
            </div>
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
                <table className='w-full'>
                    <tr className='border-b-2 text-xs'>
                        <th className='py-4 px-4 text-left'>ID</th>
                        <th className='py-4 px-16 text-left'>Name</th>
                        <th className='text-left py-4'>Action</th>
                    </tr>
                    {displayedList.map((item, index) => {
                        const { id, name } = item
                        return (
                            <tr key={index} className="border-b-2 text-xs">
                                <td className='text-left px-4 py-2'>{id}</td>
                                <td className='text-left py-2 px-16'>{name}</td>
                                <td className='text-left py-2'>
                                    <span className='flex'>
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
                </table>
            </Box>
            <div className="pt-4">
                <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
            </div>
        </div>
    )
}

export default RoleList;