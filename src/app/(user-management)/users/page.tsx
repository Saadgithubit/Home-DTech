import React from 'react';
import { Box } from "@mui/material";

import ButtonComponent from "@/components/button";
import InnerHeader from "@/components/innerheader";
import NavContainer from "@/components/navcontainer";
import { UserList } from '@/components/pagelists';

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
        <div>
            <span className="flex py-2 text-xl items-center justify-between">
                <h1>Users</h1>
                <ButtonComponent title={'Add User'} />
            </span>
            <NavContainer />
            <InnerHeader title={'Users List'} />
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2 }}>
                <UserList list={list} />
            </Box>
        </div>
    )
}
