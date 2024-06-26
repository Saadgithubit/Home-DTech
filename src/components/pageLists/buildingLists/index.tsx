'use client'
import React from 'react';

interface BuildingListProps {
    list: ListItem[]
}

interface ListItem {
    name: string
}
const BuildingList: React.FC<BuildingListProps> = ({ list }) => {
    return (
        <div>Building List</div>
    )
}

export default BuildingList;