import { Box, TextField } from "@mui/material";
import ButtonComponent from "../button";

export default function FilterSection() {
    return (
        <div className="flex flex-col bg-white rounded-md p-3 my-2 border-2">
            <Box
                component="form"
                sx={{ '& > :not(style)': { mb: 1, width: '100%' }, display: 'flex', flexDirection: 'row' }}
                noValidate autoComplete="off"
            >
                <TextField fullWidth label="Name" id="name-input" variant="outlined" color="primary" />
                <TextField fullWidth label="Email" id="email-input" variant="outlined" className="mx-3" />
                <TextField fullWidth label="Address" id="address-input" variant="outlined" />
            </Box>
            <div className="w-full justify-end inline-flex">
                <ButtonComponent title={'Reset'} />
            </div>
        </div>
    )
}