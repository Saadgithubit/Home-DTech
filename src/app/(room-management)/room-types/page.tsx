import ButtonComponent from '@/components/button'
import InnerHeader from '@/components/innerheader'
import NavContainer from '@/components/navcontainer'
import { Box, Typography } from '@mui/material'
import React from 'react'

export default function RoomTypes() {
    return (
        <div>
        <span className="w-full inline-flex p-2 text-xl items-center justify-between">
            <h1>Rooms Type</h1>
            <ButtonComponent title={'Add Room Type'} />
        </span>
        <NavContainer/>
        <InnerHeader title={'Rooms Type List'}/>
        <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2,  }}
            >
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
            </Box>
        </div>
    )
}
