'use client'

import { Box, Checkbox, TextField, IconButton } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState , useEffect } from "react";
import ParentCheckbox from "@/components/checkbox";

export default function AddRoles() {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])
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

    const [checkedAll, setCheckedAll] = useState(false);
    const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);
    const [checkedRoles, setCheckedRoles] = useState<{ [key: string]: boolean }>({});

    const handleChangeAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        setCheckedAll(isChecked);
        const newCheckedRoles: { [key: string]: boolean } = {};
        roleList.forEach(role => {
            newCheckedRoles[role.name] = isChecked;
            role.nestedRoleList.forEach(nestedRole => {
                newCheckedRoles[nestedRole] = isChecked;
            });
        });
        setCheckedRoles(newCheckedRoles);
    };

    const handleRoleChange = (role: string, nestedRoles: string[]) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        setCheckedRoles(prevState => {
            const newCheckedRoles = { ...prevState, [role]: isChecked };
            nestedRoles.forEach(nestedRole => {
                newCheckedRoles[nestedRole] = isChecked;
            });
            return newCheckedRoles;
        });
    };

    const handleNestedRoleChange = (nestedRole: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        setCheckedRoles(prevState => ({
            ...prevState,
            [nestedRole]: isChecked
        }));
    };

    const handleToggle = (index: number) => {
        if (expandedIndexes.includes(index)) {
            setExpandedIndexes(expandedIndexes.filter(i => i !== index));
        } else {
            setExpandedIndexes([...expandedIndexes, index]);
        }
    };

    return (
        <div className="p-2 ">
            <h1 className="text-2xl my-4">Roles</h1>
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2, }}>
                <div className="flex-col space-y-2">
                    <p>Name</p>
                    <TextField sx={{ width: '100%', padding: 0 }} id="outlined-basic" label="Name" variant="outlined" size="small" />
                    <div className="flex items-center">
                        <Checkbox
                            checked={checkedAll}
                            onChange={handleChangeAll}
                            inputProps={{ 'aria-label': 'controlled' }} />
                        <p>Check All</p>
                    </div>
                    <p className="text-2xl font-semibold">Permissions:</p>
                    <div className="flex flex-wrap justify-between">
                        {roleList.map((item, index) => {
                            const { name, nestedRoleList } = item;
                            const isExpanded = expandedIndexes.includes(index);
                            const isRoleChecked = !!checkedRoles[name];

                            return (
                                <div key={index} className="w-[30%]">
                                    <div className="flex items-center w-full">
                                        <IconButton 
                                        sx={{border: '1px solid black', width: '20px', height: '20px',borderRadius: 0}} 
                                        onClick={() => handleToggle(index)}>
                                            {isExpanded ? <RemoveIcon /> : <AddIcon />}
                                        </IconButton>
                                        <span className="flex items-center">
                                            <Checkbox
                                                checked={isRoleChecked}
                                                onChange={handleRoleChange(name, nestedRoleList)}
                                                inputProps={{ 'aria-label': 'controlled' }} />
                                            <p className="text-sm font-semibold">{name}</p>
                                        </span>
                                        {/* <ParentCheckbox/> */}
                                    </div>
                                    {isExpanded && nestedRoleList.map((nestedItem, nestedIndex) => {
                                        const isNestedRoleChecked = !!checkedRoles[nestedItem];
                                        return (
                                            <div key={nestedIndex} data-aos="fade-right" className="flex flex-col p-2">
                                                <span className="inline-flex space-x-2 pl-16 items-center">
                                                    <Checkbox
                                                        sx={{ width: '20px', height: '22px' }}
                                                        checked={isNestedRoleChecked}
                                                        onChange={handleNestedRoleChange(nestedItem)}
                                                        inputProps={{ 'aria-label': 'controlled' }} />
                                                    <p className="text-sm font-semibold">{nestedItem}</p>
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Box>
        </div>
    );
}
