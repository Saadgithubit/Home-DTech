'use client'
import { Box, Checkbox, TextField } from "@mui/material";
import { useState } from "react";

export default function AddRoles() {
    const [checked, setChecked] = useState(true);

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
                </div>
            </Box>
        </div>
    )
}