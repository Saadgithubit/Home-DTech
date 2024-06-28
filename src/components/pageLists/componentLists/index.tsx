'use client'
import React from 'react';

interface ComponentListProps {
    list: ListItem[]
}

interface ListItem {
    name: string
}
const ComponentList: React.FC<ComponentListProps> = ({ list}) => {
return(
    <div>Building List</div>
)
}

export default ComponentList;