import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';

export default function AppBar() {
    return (
        <MuiAppBar position="fixed" sx={{ width: 'calc(100% - 240px)', backgroundColor: '#FFFFFF', color: 'black' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Typography variant="h6" noWrap component="div">
                    Areeb Vohra
                </Typography>
            </Toolbar>
        </MuiAppBar>
    )
}