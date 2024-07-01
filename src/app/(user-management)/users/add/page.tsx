'use client'
import ButtonComponent from "@/components/button";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import { useState } from "react";

export default function AddUser() {
    const [showPassword, setShowPassword] = useState(false);
    const [confshowPassword, setconfShowPassword] = useState(false);
    const [roles, setroles] = useState<string>()
    const [status, setstatus] = useState<string>()

    return (
        <div className="p-4">
            <h1 className="text-3xl my-4 font-sans mt-2">Users</h1>
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2, display: 'flex', flexWrap: 'wrap', gap: '15px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                <FormControl sx={{ width: '24%', gap: '10px' }}>
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-bold text-slate-700">
                        Name:
                    </span>
                    <OutlinedInput size="small" type="text" placeholder="Name" />
                </FormControl>
                <FormControl sx={{ width: '24%', gap: '10px' }}>
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-bold text-slate-700">
                        UserName:
                    </span>
                    <OutlinedInput size="small" defaultValue='areeb.vohra' type="text" placeholder="Name" />
                </FormControl>
                <FormControl sx={{ width: '24%', gap: '10px' }}>
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-bold text-slate-700">
                        Phone:
                    </span>
                    <OutlinedInput size="small" type="number" placeholder="Phone" />
                </FormControl>
                <FormControl sx={{ width: '24%', gap: '10px' }}>
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-bold text-slate-700">
                        Email:
                    </span>
                    <OutlinedInput size="small" type="email" placeholder="Email" />
                </FormControl>
                <FormControl sx={{ width: '24%', gap: '10px' }}>
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-bold text-slate-700">
                        Roles:
                    </span>
                    <Select size='small' value={roles} onChange={(e) => setroles(e.target.value)}>
                        <OutlinedInput size="small" type="search" sx={{ width: '100%' }} />
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ width: '24%', gap: '10px' }}>
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-bold text-slate-700">
                        Status:
                    </span>
                    <Select size='small' value={status} onChange={(e) => setstatus(e.target.value)}>
                        <MenuItem value={10}>Select</MenuItem>
                        <MenuItem value={20}>Active</MenuItem>
                        <MenuItem value={30}>Inactive</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ width: '24%', gap: '10px' }}>
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-bold text-slate-700">
                        Password:
                    </span>
                    <OutlinedInput
                        defaultValue='qwerty1234'
                        size="small"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }

                    />
                </FormControl>
                <FormControl sx={{ width: '24%', gap: '10px' }}>
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-bold text-slate-700">
                        Confirm Password:
                    </span>
                    <OutlinedInput
                        size="small"
                        type={confshowPassword ? 'text' : 'password'}
                        placeholder="Confirm Password"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setconfShowPassword(!confshowPassword)}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }

                    />
                </FormControl>
            </Box>
            <span className="flex shadow-lg rounded-bl-lg rounded-br-lg space-x-2 p-4">
                <ButtonComponent title={'Create'} />
                <Box sx={{ '& button': { px: 2.5, py: 1, fontSize: 12, fontWeight: 'bold', background: '#5A6268' }, '& button:hover': { background: '#343A40' } }}>
                    <Button size="small" variant={'contained'}>
                        Cancel
                    </Button>
                </Box>
            </span>
        </div>
    )
}