'use client'

import { Delete as DeleteIcon, Create as CreateIcon } from '@mui/icons-material'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Pagination from '@/components/pagination';
import { ChangeEvent } from 'react';
import { Box } from '@mui/material';


interface UserListProps {
    list: ListItem[];
    itemsPerPage?: number;
}

interface ListItem {
    name: string;
    userName: string;
    email: string;
    role: string;
}

const UserList: React.FC<UserListProps> = ({ list, itemsPerPage = 5 }) => {
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
        <div className='py-2'>
            <div className="pb-4">
                <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
            </div>
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }} className='rounded-md'>
                <table className='w-full'>
                    <tbody>
                        <tr className="border-b-2 text-xs font-semibold">
                            <th className='text-left p-4'>Name</th>
                            <th className='text-left py-4'>User Name</th>
                            <th className='text-left py-4'>Email</th>
                            <th className='text-left py-4'>Role</th>
                            <th className='text-left py-4'>Account ID</th>
                            <th className='text-left py-4'>Status</th>
                            <th>Actions</th>
                        </tr>
                        {displayedList.map((item, index) => {
                            const { name, userName, email, role } = item
                            return (
                                <tr key={index} className="border-b-2 text-xs">
                                    <td className='p-4'>{name}</td>
                                    <td className='py-4'>{userName}</td>
                                    <td className='py-4'>{email}</td>
                                    <td className='py-4'>{role}</td>
                                    <td className='py-4'></td>
                                    <td className='p-4'><span className="inline-block w-3 h-3 rounded-full bg-[#28A745]"></span></td>
                                    <td className='text-center py-4'>
                                        <span className='inline-flex'>
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
            <div className="pt-4">
                <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
            </div>
        </div>
    );
}

export default UserList;