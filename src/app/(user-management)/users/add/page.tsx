import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export default function AddUser() {
    return (
        <div>
            <h1 className="text-3xl font-sans mt-2">Users</h1>
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2, display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                <TextField sx={{ width: '24%' }} required id="outlined-required" label="Name" type="text" size="small" />
                <TextField sx={{ width: '24%' }} required id="outlined-required" label="UserName" type="text" size="small" />
                <TextField sx={{ width: '24%' }} required id="outlined-required" label="Phone" type="number" size="small" />
                <TextField sx={{ width: '24%' }} required id="outlined-required" label="Email" type="email" size="small" />
                <FormControl sx={{width: '24%'}}>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Status"
                        size="small"
                    >
                        <MenuItem value='Select'>Select</MenuItem>
                        <MenuItem value='Active'>Active</MenuItem>
                        <MenuItem value='Inactive'>Inactive</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    )
}