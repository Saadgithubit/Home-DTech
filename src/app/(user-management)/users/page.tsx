import { Inter } from 'next/font/google'

import ButtonComponent from "@/components/button";
import InnerHeader from "@/components/innerheader";
import FilterSection from '@/components/filtersection';
import UserList from '@/components/pageLists/userList';

const inter = Inter({ subsets: ['latin'] })

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
        { name: "Jonathan Wileman", userName: "jon", email: "jon@leakdtech.com", role: "Engineering Director" },
        { name: "Jesmi Latheef", userName: "jasmi.latheef", email: "jasmi@leakdtech.com", role: "Operations" },
        { name: "Jesmi Latheef", userName: "jasmi.latheef", email: "jasmi@leakdtech.com", role: "Operations" },
        { name: "Luke Neale", userName: "Lukeneale.1", email: "Lukeneale.1@gmail.com", role: "User/Landlords" },
    ]

    return (
        <div className={inter.className}>
            <span className="flex py-2 text-xl items-center justify-between">
                <h1 className='font-medium'>Users</h1>
                <ButtonComponent title={'Add User'} />
            </span>
            <FilterSection />
            <InnerHeader title={'Users List'} />
                <UserList list={list} />
        </div>
    )
}
