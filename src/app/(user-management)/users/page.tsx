import ButtonComponent from "@/components/button";
import InnerHeader from "@/components/innerheader";
import NavContainer from "@/components/navcontainer";
import ListProducts from "@/components/productlists";
import ToggleButtons from "@/components/togglebutton";
import { Box, ListItem, Typography } from "@mui/material";

export default function Users() {
    const list = [
        { name: "Anil Kumar", userName: "Anil Kuman", email: "accounts@leakdtech.com", role: "Accounts" },
        { name: "Antoinette Caruana", userName: "Antoinette	", email: "antoinette@leakdtech.com	", role: "Operations" },
        { name: "Jonathan Wileman", userName: "jon", email: "jon@leakdtech.com", role: "Engineering Director" },
        { name: "Jesmi Latheef", userName: "jasmi.latheef", email: "jasmi@leakdtech.com", role: "Operations" },
        { name: "Luke Neale", userName: "Lukeneale.1", email: "Lukeneale.1@gmail.com", role: "User/Landlords" },
    ]
    return (
        <div>
            <span className="flex p-2 text-xl items-center justify-between">
                <h1>Users</h1>
                <ButtonComponent title={'Add User'} />
            </span>
            <NavContainer />
            <InnerHeader title={'Users List'} />
            <div className="pb-4 pt-2">
            <ToggleButtons/>
            </div>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2,  }}
            >
                <ListProducts list={list}/>
            </Box>
        </div>
    )
}