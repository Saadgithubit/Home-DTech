import ButtonComponent from '@/components/button'
import InnerHeader from '@/components/innerheader'
import NavContainer from '@/components/filtersection'
import { Box, Typography } from '@mui/material'
import RoomsNameList from '@/components/pageLists/roomManagement/roomNames'

export default function RoomNames() {
    const roomsNameList = [
        { status: 'Active', name: 'Admin', },
        { status: 'Active', name: 'User/Landlords', },
        { status: 'Active', name: 'Supplier', },
        { status: 'Active', name: 'Engineer', },
        { status: 'Active', name: 'User/Region Manager', },
        { status: 'Active', name: 'Owner Association', },
        { status: 'Active', name: 'Tenants', },
        { status: 'Active', name: 'Test Admin Role', },
        { status: 'Active', name: 'Test Admin Role 02', },
        { status: 'Active', name: 'Engineering Director', },
        { status: 'Active', name: 'Operations', },
        { status: 'Active', name: 'Accounts', },
        { status: 'Active', name: 'Accounts', },
        { status: 'Active', name: 'Accounts', },
        { status: 'Active', name: 'Accounts', },
        { status: 'Active', name: 'Accounts', },
        { status: 'Active', name: 'Accounts', },
        { status: 'Active', name: 'Accounts', },
    ]
    return (
        <div className="p-2">
            <span className="w-full inline-flex text-xl items-center justify-between">
                <h1>Rooms Name</h1>
                <ButtonComponent title={'Add Rooms'} />
            </span>
            <NavContainer />
            <InnerHeader title={'Rooms Name List'} />
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2, my: 4, borderRadius: '10px' }}
            >
                <RoomsNameList roomsNamesList={roomsNameList} />
            </Box>
        </div>
    )
}
