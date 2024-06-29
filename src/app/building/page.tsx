import ButtonComponent from "@/components/button";
import InnerHeader from "@/components/innerheader";
import NavContainer from "@/components/filtersection";
import { Box } from "@mui/material";
import BuildingList from "@/components/pageLists/buildingLists";


export default function Building() {
    const list = [
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', user: 'Damion Lock', name: 'House 2 of Damion', type: 'Villa', city: 'Dubai', address: 'Villa 269, Primrose, Akoya, Damac Hills 2', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', user: 'Damion Lock', name: 'House 2 of Damion', type: 'Villa', city: 'Dubai', address: 'Villa 269, Primrose, Akoya, Damac Hills 2', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', user: 'Damion Lock', name: 'House 2 of Damion', type: 'Villa', city: 'Dubai', address: 'Villa 269, Primrose, Akoya, Damac Hills 2', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', user: 'Damion Lock', name: 'House 2 of Damion', type: 'Villa', city: 'Dubai', address: 'Villa 269, Primrose, Akoya, Damac Hills 2', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', user: 'Damion Lock', name: 'House 2 of Damion', type: 'Villa', city: 'Dubai', address: 'Villa 269, Primrose, Akoya, Damac Hills 2', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', user: 'Damion Lock', name: 'House 2 of Damion', type: 'Villa', city: 'Dubai', address: 'Villa 269, Primrose, Akoya, Damac Hills 2', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', user: 'Damion Lock', name: 'House 2 of Damion', type: 'Villa', city: 'Dubai', address: 'Villa 269, Primrose, Akoya, Damac Hills 2', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', user: 'Damion Lock', name: 'House 2 of Damion', type: 'Villa', city: 'Dubai', address: 'Villa 269, Primrose, Akoya, Damac Hills 2', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', user: 'Damion Lock', name: 'House 2 of Damion', type: 'Villa', city: 'Dubai', address: 'Villa 269, Primrose, Akoya, Damac Hills 2', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', user: 'Damion Lock', name: 'House 2 of Damion', type: 'Villa', city: 'Dubai', address: 'Villa 269, Primrose, Akoya, Damac Hills 2', width: 12, length: 25, height: 12, area: 0, },
    ]
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