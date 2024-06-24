'use client'
import React from 'react'
import { Delete as DeleteIcon, Create as CreateIcon } from '@mui/icons-material'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Pagination from '@/components/pagination';
import { ChangeEvent } from 'react';

interface RoleListProps {
    list: RoleList[];
    itemsPerPage?: number;
}

interface RoleList {
    id: number,
    name: string,
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
        <div>
            <div className="pb-4">
                <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
            </div>
            <ul className="flex border-b-2 py-4 px-2 text-xs font-semibold justify-around">
                <li className='w-28'>ID</li>
                <li className='w-28'>Name</li>
                <li className='w-28 pl-9'>Action</li>
            </ul>
            {displayedList.map((item , index)=>{
                const { id , name } = item
                return(
                    <ul key={index} className="flex border-b-2 py-4 px-2 text-xs justify-around items-center">
                        <li className='w-28'>{id}</li>
                        <li className='w-28 mr-6'>{name}</li>
                        <li className='flex'>
                            <button className="p-2 rounded-s rounded-e text-white bg-[#0069D9]">
                                <CreateIcon />
                            </button>
                            <div className='pl-1' />
                            <button className="p-2 rounded-s rounded-e text-white bg-[#C82333]">
                                <DeleteIcon />
                            </button>
                        </li>
                    </ul>
                )
            })}
            <div className="pt-4">
                <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
            </div>
        </div>
    )
}

export default RoleList;