import ButtonComponent from '@/components/button'
import InnerHeader from '@/components/innerheader'
import NavContainer from '@/components/filtersection'
import { Box, Typography } from '@mui/material'
import FloorList from '@/components/pageLists/roomManagement/floor'

export default function Floors() {
    const floorList = [
        { status: '', actions: 'Active', name: 'Admin', },
        { status: '', actions: 'Active', name: 'User/Landlords', },
        { status: '', actions: 'Active', name: 'Supplier', },
        { status: '', actions: 'Active', name: 'Engineer', },
        { status: '', actions: 'Active', name: 'User/Region Manager', },
        { status: '', actions: 'Active', name: 'Owner Association', },
        { status: '', actions: 'Active', name: 'Tenants', },
        { status: '', actions: 'Active', name: 'Test Admin Role', },
        { status: '', actions: 'Active', name: 'Test Admin Role 02', },
        { status: '', actions: 'Active', name: 'Engineering Director', },
        { status: '', actions: 'Active', name: 'Operations', },
        { status: '', actions: 'Active', name: 'Accounts', },
        { status: '', actions: 'Active', name: 'Accounts', },
        { status: '', actions: 'Active', name: 'Accounts', },
        { status: '', actions: 'Active', name: 'Accounts', },
        { status: '', actions: 'Active', name: 'Accounts', },
        { status: '', actions: 'Active', name: 'Accounts', },
        { status: '', actions: 'Active', name: 'Accounts', },
    ]
    return (
        <div className="p-2">
            <span className="w-full inline-flex text-xl items-center justify-between">
                <h1>Floors</h1>
                <ButtonComponent title={'Add Floors'} />
            </span>
            <NavContainer />
            <InnerHeader title={'Floors List'} />
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2, }}
            >
                <FloorList floorList={floorList} />
            </Box>
        </div>
    )
}
