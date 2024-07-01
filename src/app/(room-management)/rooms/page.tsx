import ButtonComponent from '@/components/button'
import InnerHeader from '@/components/innerheader'
import NavContainer from '@/components/filtersection'
import { Box } from '@mui/material'
import RoomsList from '@/components/pageLists/roomManagement/room'

export default function Rooms() {
    const roomsList = [
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
        { image: 'https://www.shutterstock.com/image-photo/driveway-view-stone-facade-house-600nw-2207752337.jpg', building: 'Damion Lock', name: 'House 2 of Damion', occupant: 'House 2 of Damion', width: 12, length: 25, height: 12, area: 0, },
    ]
    return (
        <div className="p-2">
            <span className="w-full inline-flex text-xl items-center justify-between">
                <h1>Rooms</h1>
                <ButtonComponent title={'Add Rooms'} />
            </span>
            <NavContainer />
            <InnerHeader title={'Rooms List'} />
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2 }}
            >
                <RoomsList roomsList={roomsList} />
            </Box>
        </div>
    )
}
