'use client'
import ButtonComponent from "@/components/button";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import { useState } from "react";

export default function AddUser() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <h1 className="text-3xl font-sans mt-2">Users</h1>
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2, display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
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
                    <OutlinedInput size="small" type="text" placeholder="Name" />
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
                    <Select size='small' value='Select'>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ width: '24%', gap: '10px' }}>
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-bold text-slate-700">
                        Status:
                    </span>
                    <Select size='small' value='Select'>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ width: '24%', gap: '10px' }}>
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-bold text-slate-700">
                        Password:
                    </span>
                    <OutlinedInput
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
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Confirm Password"
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
            </Box>
        </div>
    )
}