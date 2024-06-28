import ButtonComponent from "@/components/button";
import InnerHeader from "@/components/innerheader";
import NavContainer from "@/components/filtersection";
import { Box, Typography } from "@mui/material";
import BuildingList from "@/components/pageLists/buildingLists";


export default function Building() {
    const list = [
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg',User: 'Damion Lock',Name: 'House 2 of Damion',Type: 'Villa',City: 'Dubai',Address: 'Villa 269, Primrose, Akoya, Damac Hills 2	',Width: 12,Length: 25,Height: 12,Area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg',User: 'Damion Lock',Name: 'House 2 of Damion',Type: 'Villa',City: 'Dubai',Address: 'Villa 269, Primrose, Akoya, Damac Hills 2	',Width: 12,Length: 25,Height: 12,Area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg',User: 'Damion Lock',Name: 'House 2 of Damion',Type: 'Villa',City: 'Dubai',Address: 'Villa 269, Primrose, Akoya, Damac Hills 2	',Width: 12,Length: 25,Height: 12,Area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg',User: 'Damion Lock',Name: 'House 2 of Damion',Type: 'Villa',City: 'Dubai',Address: 'Villa 269, Primrose, Akoya, Damac Hills 2	',Width: 12,Length: 25,Height: 12,Area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg',User: 'Damion Lock',Name: 'House 2 of Damion',Type: 'Villa',City: 'Dubai',Address: 'Villa 269, Primrose, Akoya, Damac Hills 2	',Width: 12,Length: 25,Height: 12,Area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg',User: 'Damion Lock',Name: 'House 2 of Damion',Type: 'Villa',City: 'Dubai',Address: 'Villa 269, Primrose, Akoya, Damac Hills 2	',Width: 12,Length: 25,Height: 12,Area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg',User: 'Damion Lock',Name: 'House 2 of Damion',Type: 'Villa',City: 'Dubai',Address: 'Villa 269, Primrose, Akoya, Damac Hills 2	',Width: 12,Length: 25,Height: 12,Area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg',User: 'Damion Lock',Name: 'House 2 of Damion',Type: 'Villa',City: 'Dubai',Address: 'Villa 269, Primrose, Akoya, Damac Hills 2	',Width: 12,Length: 25,Height: 12,Area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg',User: 'Damion Lock',Name: 'House 2 of Damion',Type: 'Villa',City: 'Dubai',Address: 'Villa 269, Primrose, Akoya, Damac Hills 2	',Width: 12,Length: 25,Height: 12,Area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg',User: 'Damion Lock',Name: 'House 2 of Damion',Type: 'Villa',City: 'Dubai',Address: 'Villa 269, Primrose, Akoya, Damac Hills 2	',Width: 12,Length: 25,Height: 12,Area: 0, },
    ]
    return (
        <div>
            <span className="flex p-2 text-xl items-center justify-between">
                <h1>Buildings</h1>
                <ButtonComponent title={'Add Building'} bgColor="primary"/>
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