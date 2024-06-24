import ButtonComponent from "@/components/button";
import InnerHeader from "@/components/innerheader";
import NavContainer from "@/components/navcontainer";
import { RoleList } from "@/components/pagelists";
import { Box, Typography } from "@mui/material";

export default function Roles() {
    const list = [
        {id: 1,name: 'Admin',},
        {id: 2,name: 'User/Landlords',},
        {id: 3,name: 'Supplier',},
        {id: 4,name: 'Engineer',},
        {id: 5,name: 'User/Region Manager',},
        {id: 6,name: 'Owner Association',},
        {id: 7,name: 'Tenants',},
        {id: 8,name: 'Test Admin Role',},
        {id: 9,name: 'Test Admin Role 02',},
        {id: 10,name: 'Engineering Director',},
        {id: 11,name: 'Operations',},
        {id: 12,name: 'Accounts',},
    ]
    return (
            <div>
            <span className="w-full inline-flex p-2 text-xl items-center justify-between">
                <h1>Role Management</h1>
                <ButtonComponent title={'Add Role'} />
            </span>
            <NavContainer/>
            <InnerHeader title={'Roles List'}/>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2,  }}
            >
            <RoleList list={list}/>
            </Box>
            </div>
    )
}