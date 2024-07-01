import ButtonComponent from '@/components/button'
import InnerHeader from '@/components/innerheader'
import NavContainer from '@/components/filtersection'
import { Box, Typography } from '@mui/material'
import React from 'react'
import RoomsTypeList from '@/components/pageLists/roomManagement/roomType'

export default function RoomTypes() {
    const roomsNameList = [
        { name: 'Admin', },
        { name: 'User/Landlords', },
        { name: 'Supplier', },
        { name: 'Engineer', },
        { name: 'User/Region Manager', },
        { name: 'Owner Association', },
        { name: 'Tenants', },
        { name: 'Test Admin Role', },
        { name: 'Test Admin Role 02', },
    ]
    return (
        <div className="p-2">
            <span className="w-full inline-flex text-xl items-center justify-between">
                <h1>Rooms Type</h1>
                <ButtonComponent title={'Add Room Type'} />
            </span>
            <NavContainer />
            <InnerHeader title={'Rooms Type List'} />
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2, my: 4, borderRadius: '10px' }}
            >
                <RoomsTypeList RoomsTypeList={roomsNameList} />
            </Box>
        </div>
    )
}
