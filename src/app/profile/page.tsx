import { Box, TextField } from "@mui/material";

export default function Profile() {
    return (
        <div>
                <h1>My Profile</h1>
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2 }}>
                <span>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </span>
            </Box>
        </div>
    )
}