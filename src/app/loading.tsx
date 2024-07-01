import { Box, LinearProgress } from "@mui/material";

export default function Loading() {
    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgress sx={{
                backgroundColor: 'white',
                '& .MuiLinearProgress-bar': {
                    backgroundColor: '#1976d294'
                }
            }} />
        </Box>
    )
}