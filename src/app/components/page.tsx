import ButtonComponent from "@/components/button";
import InnerHeader from "@/components/innerheader";
import NavContainer from "@/components/filtersection";
import { Box, Typography } from "@mui/material";
import ComponentList from "@/components/pageLists/componentLists";

export default function Components() {
    const list = [{ name: 'abc' }]

    return (
        <div className="p-2">
            <span className="w-full inline-flex text-xl items-center justify-between">
                <h1>Components</h1>
                <ButtonComponent title={'Add Product Component'} />
            </span>
            <NavContainer />
            <InnerHeader title={'Product Component List'} />
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2, }}
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
                <ComponentList list={list} />
            </Box>
        </div>
    )
}