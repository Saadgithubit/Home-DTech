'use client'
import { Box, TextField } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from "react";
import ButtonComponent from "@/components/button";

export default function ProfileData() {
    const [name, setname] = useState('Areeb Vohra')
    const [email, setemail] = useState('areebvohra@gmail.com')
    const [password, setpassword] = useState('')
    const [confpass, setconfpass] = useState('')
    return (
        <div className="w-[60%] rounded-lg shadow-lg">
            <Box component="main"
                sx={{
                    flexGrow: 1, bgcolor: 'background.default', p: 2,
                    display: 'flex', flexDirection: 'column', gap: '15px'
                }}>
                <div className="flex">
                    <TextField
                        sx={{ width: '88%', padding: 0 }}
                        id="outlined-basic"
                        label="Name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        size="small"
                        variant="outlined" />
                    <span className="border-2 border-gray-300 inline-flex bg-[#E9ECEF] w-10 h-10 justify-center items-center rounded-e-lg">
                        <PersonIcon sx={{ fontSize: '25px', color: '#495057' }} />
                    </span>
                </div>
                <div className="flex">
                    <TextField
                        sx={{ width: '88%', padding: 0 }}
                        id="outlined-basic"
                        label="Email"
                        value={email}
                        size="small"
                        onChange={(e) => setemail(e.target.value)}
                        variant="outlined" />
                    <span className="border-2 border-gray-300 inline-flex bg-[#E9ECEF] w-10 h-10 justify-center items-center rounded-e-lg">
                        <EmailIcon sx={{ fontSize: '25px', color: '#495057' }} />
                    </span>
                </div>
                <div className="flex">
                    <TextField
                        sx={{ width: '88%', padding: 0 }}
                        id="outlined-basic"
                        label="New Password"
                        size="small"
                        onChange={(e) => setpassword(e.target.value)}
                        variant="outlined" />
                    <span className="border-2 border-gray-300 inline-flex bg-[#E9ECEF] w-10 h-10 justify-center items-center rounded-e-lg">
                        <LockIcon sx={{ fontSize: '25px', color: '#495057' }} />
                    </span>
                </div>
                <div className="flex">
                    <TextField
                        sx={{ width: '88%', padding: 0}}
                        id="outlined-basic"
                        label="New Password Confirmation"
                        size="small"
                        onChange={(e) => setconfpass(e.target.value)}
                        variant="outlined" />
                    <span className="border-2 border-gray-300 inline-flex bg-[#E9ECEF] w-10 h-10 justify-center items-center rounded-e-lg">
                        <LockIcon sx={{ fontSize: '25px', color: '#495057' }} />
                    </span>
                </div>
            </Box>
            <div className="p-4">
                <ButtonComponent title={'Submit'} />
            </div>
        </div>
    )
}