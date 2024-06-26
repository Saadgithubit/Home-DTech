'use client'
import React from 'react';

interface BookingListProps {
    list: ListItem[]
}

interface ListItem {
    name: string
}
const BookingList: React.FC<BookingListProps> = ({ list }) => {
    return (
        <div>Building List</div>
    )
}

export default BookingList;