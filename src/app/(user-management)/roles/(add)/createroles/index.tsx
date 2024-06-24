'use client'
import { Box, Checkbox, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";

export default function AddRoles() {
    const roleList = [
        {
            name: 'Amc-Quotation',
            nestedRoleList: ['Amc-Quotation-List', 'Amc-Quotation-Create', 'Amc-Quotation-Edit', 'Amc-Quotation-Delete']
        },
        {
            name: 'Booking',
            nestedRoleList: ['Booking-List', 'Booking-Create', 'Booking-Edit', 'Booking-Delete']
        },
        {
            name: 'Building',
            nestedRoleList: ['Building-List', 'Building-Create', 'Building-Edit', 'Building-Delete']
        },
        {
            name: 'Component',
            nestedRoleList: ['Component-List', 'Component-Create', 'Component-Edit', 'Component-Delete']
        },
        {
            name: 'Dashboard',
            nestedRoleList: ['Dashboard-List', 'Dashboard-Create', 'Dashboard-Edit', 'Dashboard-Delete']
        },
        {
            name: 'Drawing',
            nestedRoleList: ['Drawing-List', 'Drawing-Create', 'Drawing-Edit', 'Drawing-Delete']
        },
        {
            name: 'File-Manager',
            nestedRoleList: ['File-Manager-List', 'File-Manager-Create', 'File-Manager-Edit', 'File-Manager-Delete']
        },
        {
            name: 'Floor',
            nestedRoleList: ['Floor-List', 'Floor-Create', 'Floor-Edit', 'Floor-Delete']
        },
        {
            name: 'Invoice',
            nestedRoleList: ['Invoice-List', 'Invoice-Create', 'Invoice-Edit', 'Invoice-Delete']
        },
        {
            name: 'Maintainance-Quotation',
            nestedRoleList: ['Maintainance-Quotation-List', 'Maintainance-Quotation-Create', 'Maintainance-Quotation-Edit', 'Maintainance-Quotation-Delete']
        },
        {
            name: 'Manual-Test-Sheet',
            nestedRoleList: ['Manual-Test-Sheet-List', 'Manual-Test-Sheet-Create', 'Manual-Test-Sheet-Edit', 'Manual-Test-Sheet-Delete']
        },
        {
            name: 'Other-Files',
            nestedRoleList: ['Other-Files-List', 'Other-Files-Create', 'Other-Files-Edit', 'Other-Files-Delete']
        },
        {
            name: 'Post-Inspection',
            nestedRoleList: ['Post-Inspection-List', 'Post-Inspection-Create', 'Post-Inspection-Edit', 'Post-Inspection-Delete']
        },
        {
            name: 'Product',
            nestedRoleList: ['Product-List', 'Product-Create', 'Product-Edit', 'Product-Delete']
        },
        {
            name: 'Product-Brand',
            nestedRoleList: ['Product-Brand-List', 'Product-Brand-Create', 'Product-Brand-Edit', 'Product-Brand-Delete']
        },
        {
            name: 'Product-Category',
            nestedRoleList: ['Product-Category-List', 'Product-Category-Create', 'Product-Category-Edit', 'Product-Category-Delete']
        },
        {
            name: 'Product-Color',
            nestedRoleList: ['Product-Color-List', 'Product-Color-Create', 'Product-Color-Edit', 'Product-Color-Delete']
        },
        {
            name: 'Product-Custom',
            nestedRoleList: ['Product-Custom-List', 'Product-Custom-Create', 'Product-Custom-Edit', 'Product-Custom-Delete']
        },
        {
            name: 'Product-Material',
            nestedRoleList: ['Product-Material-List', 'Product-Material-Create', 'Product-Material-Edit', 'Product-Material-Delete']
        },
        {
            name: 'Product-Model',
            nestedRoleList: ['Product-Model-List', 'Product-Model-Create', 'Product-Model-Edit', 'Product-Model-Delete']
        },
        {
            name: 'Product-Type',
            nestedRoleList: ['Product-Type-List', 'Product-Type-Create', 'Product-Type-Edit', 'Product-Type-Delete']
        },
        {
            name: 'Product-Version',
            nestedRoleList: ['Product-Version-List', 'Product-Version-Create', 'Product-Version-Edit', 'Product-Version-Delete']
        },
        {
            name: 'Role',
            nestedRoleList: ['Role-List', 'Role-Create', 'Role-Edit', 'Role-Delete']
        },
        {
            name: 'Room',
            nestedRoleList: ['Room-List', 'Room-Create', 'Room-Edit', 'Room-Delete']
        },
        {
            name: 'Room-Name',
            nestedRoleList: ['Room-Name-List', 'Room-Name-Create', 'Room-Name-Edit', 'Room-Name-Delete']
        },
        {
            name: 'Room-Type',
            nestedRoleList: ['Room-Type-List', 'Room-Type-Create', 'Room-Type-Edit', 'Room-Type-Delete']
        },
        {
            name: 'Safety-Notice',
            nestedRoleList: ['Safety-Notice-List', 'Safety-Notice-Create', 'Safety-Notice-Edit', 'Safety-Notice-Delete']
        },
        {
            name: 'Service-Record',
            nestedRoleList: ['Service-Record-List', 'Service-Record-Create', 'Service-Record-Edit', 'Service-Record-Delete']
        },
        {
            name: 'Snags',
            nestedRoleList: ['Snags-List', 'Snags-Create', 'Snags-Edit', 'Snags-Delete']
        },
        {
            name: 'Test-Sheet',
            nestedRoleList: ['Test-Sheet-List', 'Test-Sheet-Create', 'Test-Sheet-Edit', 'Test-Sheet-Delete']
        },
        {
            name: 'Ticket-Type',
            nestedRoleList: ['Ticket-Type-List', 'Ticket-Type-Create', 'Ticket-Type-Edit', 'Ticket-Type-Delete']
        },
        {
            name: 'Tickets',
            nestedRoleList: ['Tickets-List', 'Tickets-Create', 'Tickets-Edit', 'Tickets-Delete']
        },
        {
            name: 'User',
            nestedRoleList: ['User-List', 'User-Create', 'User-Edit', 'User-Delete']
        },
    ]
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <div>
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2, }}>
                <div className="flex-col space-y-2">
                    <p>Name</p>
                    <TextField sx={{ width: '100%', padding: 0 }} id="outlined-basic" label="Name" variant="outlined" size="small" />
                    <div className="flex items-center">
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }} />
                        <p>Check All</p>
                    </div>
                    <p className="text-2xl font-semibold">Permissons:</p>
                    <div className="flex flex-wrap justify-between">
                    {roleList.map(( item , index ) => {
                        const { name } = item
                        return(
                            <div key={index} className="flex items-center w-[30%]">
                            <Checkbox
                                sx={{ border: '1px solid black', borderRadius: '1px', width: '20px', height: '22px' }}
                                icon={<AddIcon />}
                                checkedIcon={<RemoveIcon />}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <span className="flex items-center">
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }} />
                                <p className="text-sm font-semibold">{name}</p>
                            </span>
                        </div>
                        )
                    })}
                  </div>
                </div>
            </Box>
        </div>
    )
}