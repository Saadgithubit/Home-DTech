'use client'

import React, { ChangeEvent } from 'react';
import { Delete as DeleteIcon, Create as CreateIcon } from '@mui/icons-material'
import { Box, ListItem } from "@mui/material";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import ButtonComponent from "@/components/button";
import InnerHeader from "@/components/innerheader";
import NavContainer from "@/components/navcontainer";
import Pagination from '@/components/pagination';

export default function Users() {
    const list = [
        { name: "Anil Kumar", userName: "Anil Kuman", email: "accounts@leakdtech.com", role: "Accounts" },
        { name: "Antoinette Caruana", userName: "Antoinette	", email: "antoinette@leakdtech.com	", role: "Operations" },
        { name: "Jonathan Wileman", userName: "jon", email: "jon@leakdtech.com", role: "Engineering Director" },
        { name: "Jesmi Latheef", userName: "jasmi.latheef", email: "jasmi@leakdtech.com", role: "Operations" },
        { name: "Jesmi Latheef", userName: "jasmi.latheef", email: "jasmi@leakdtech.com", role: "Operations" },
        { name: "Luke Neale", userName: "Lukeneale.1", email: "Lukeneale.1@gmail.com", role: "User/Landlords" },
        { name: "Antoinette Caruana", userName: "Antoinette	", email: "antoinette@leakdtech.com	", role: "Operations" },
        { name: "Luke Neale", userName: "Lukeneale.1", email: "Lukeneale.1@gmail.com", role: "User/Landlords" },
        { name: "Anil Kumar", userName: "Anil Kuman", email: "accounts@leakdtech.com", role: "Accounts" },
        { name: "Jonathan Wileman", userName: "jon", email: "jon@leakdtech.com", role: "Engineering Director" },
    ]

    return (
        <div>
            <span className="flex p-2 text-xl items-center justify-between">
                <h1>Users</h1>
                <ButtonComponent title={'Add User'} />
            </span>
            {/* <NavContainer /> */}
            <InnerHeader title={'Users List'} />
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2 }}>
                <UserList list={list} />
            </Box>
        </div>
    )
}

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
        <div>
            <div className="pb-4">
                <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
            </div>
            <ul className="flex border-b-2 py-4 px-2 text-sm font-semibold space-x-16">
                <li className='w-28'>Name</li>
                <li className='w-28'>User Name</li>
                <li className='w-44'>Email</li>
                <li className='w-28'>Role</li>
                <li className='w-36'>Account ID</li>
                <li className='w-28'>Status</li>
                <li>Actions</li>
            </ul>
            {displayedList.map((item, index) => {
                const { name, userName, email, role } = item
                return (
                    <ul key={index} className="flex border-b-2 py-4 px-2 text-xs space-x-16 items-center">
                        <li className='w-28'>{name}</li>
                        <li className='w-28'>{userName}</li>
                        <li className='w-44'>{email}</li>
                        <li className='w-28'>{role}</li>
                        <li className='w-36'></li>
                        <li className='w-28 px-3'><span className="inline-block w-3 h-3 rounded-full bg-[#28A745]"></span></li>
                        <li className='flex'>
                            <button className="p-2 rounded-md text-white bg-[#0069D9] border-2">
                                <CreateIcon />
                            </button>
                            <button className="p-2 rounded-md text-white bg-[#C82333] border-2">
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
    );
}
