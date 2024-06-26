import ButtonComponent from "@/components/button";
import InnerHeader from "@/components/innerheader";
import NavContainer from "@/components/filtersection";
import { Box, Typography } from "@mui/material";
import BuildingList from "@/components/pageLists/buildingLists";


export default function Building() {
    const list = [{ name: 'abc' }]
    return (
        <div>
            <span className="flex p-2 text-xl items-center justify-between">
                <h1>Buildings</h1>
                <ButtonComponent title={'Add Building'} />
            </span>
            <NavContainer />
            <InnerHeader title={'Building List'} />
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2, }}
            >
                <BuildingList list={list} />
            </Box>
        </div>
    )
}