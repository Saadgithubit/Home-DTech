import Link from 'next/link';
import { ListItemButton, ListItemIcon, List, Collapse, ListItemText } from '@mui/material';

import { faTicket, faFolderOpen, faDesktop, faUsers, faCity, faCalendarDays, faSnowflake, faHouseLaptop, faHandHoldingDroplet, faPersonShelter, faCircle } from '@fortawesome/free-solid-svg-icons';

import { ExpandMore, ChevronLeft } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const drawerData = [
    {
        name: 'Dashboard', font: faDesktop, nested: false
    },
    {
        name: 'User Management', font: faUsers, nested: true,
        nestedItems: ['Users', 'Roles'],
    },
    {
        name: 'Building', font: faCity, nested: false
    },
    {
        name: 'Room Management', font: faPersonShelter, nested: true,
        nestedItems: ['Rooms', 'Room Names', 'Room Types', 'Floors'],
    },
    {
        name: 'Components', font: faSnowflake, nested: false
    },
    {
        name: 'Booking', font: faCalendarDays, nested: false
    },
    {
        name: 'Engineers Data Entry', font: faHouseLaptop, nested: true,
        nestedItems: ['Manual Test Sheet', 'Test Sheet', 'Service Record', 'Snages', 'Safety Notice', 'Post Inspection']
    },
    {
        name: 'Master Product', font: faHandHoldingDroplet, nested: true,
        nestedItems: ['Master Product List', 'Product Category', 'Product Type', 'Product Material', 'Product Brand', 'Product Model', 'Product Custom', 'Product Version', 'Product Color'],
    },
    {
        name: 'Ticket Management', font: faTicket, nested: true,
        nestedItems: ['Tickets', 'Ticket Types',]
    },
    {
        name: 'File Manager', font: faFolderOpen, nested: false
    },
];

interface DrawerListProps {
    collapseIndex: number | null;
    handleCollapse: (index: number) => void;
    isExpanded: boolean;
}

function DrawerList({ collapseIndex, handleCollapse, isExpanded }: DrawerListProps) {
    return (
        <List>
            {drawerData.map((item1, index1) => {
                const { name, font, nested, nestedItems } = item1;
                return (
                    <ListItemIcon key={index1} sx={{ display: 'block' }}>
                        {nested
                            ? (<ListItemButton onClick={() => handleCollapse(index1)} sx={{ minHeight: 48, display: 'flex', padding: '0 15px' }}>
                                <ListItemIcon sx={{ minWidth: 45, textAlign: 'center', justifyContent: 'center' }}>
                                    {font && <FontAwesomeIcon className="text-[#C2C7D0] text-lg" icon={font} />}
                                </ListItemIcon>
                                <ListItemText primary={name} sx={{ opacity: 1, color: '#C2C7D0' }} primaryTypographyProps={{ fontSize: '13px', fontWeight: 'bold' }} />
                                {!isExpanded
                                    ? <span>
                                        <ChevronLeft sx={{ opacity: 1, color: 'white' }} />
                                    </span>
                                    : <span>
                                        {nestedItems && (
                                            <span>
                                                {collapseIndex === index1 ? (
                                                    <ExpandMore sx={{ color: 'white' }} />
                                                ) : (
                                                    <ChevronLeft sx={{ opacity: 1, color: 'white' }} />
                                                )}
                                            </span>
                                        )}
                                    </span>
                                }
                            </ListItemButton>)
                            : (<Link href={`/${name.replace(/\s/g, '-').toLowerCase()}`}>
                                <ListItemButton sx={{ minHeight: 48, display: 'flex', padding: '0 15px' }}>
                                    <ListItemIcon sx={{ minWidth: 45, textAlign: 'center', justifyContent: 'center' }}>
                                        {font && <FontAwesomeIcon className="text-[#C2C7D0] text-lg" icon={font} />}
                                    </ListItemIcon>
                                    <ListItemText primary={name} sx={{ opacity: 1, color: '#C2C7D0' }} primaryTypographyProps={{ fontSize: '13px', fontWeight: 'bold' }} />
                                </ListItemButton>
                            </Link>)}
                        {nestedItems && <Collapse in={collapseIndex === index1} timeout="auto" unmountOnExit>
                            {nestedItems.map((item2, index2) => (
                                <Link key={index2} href={`/${item2.replace(/\s/g, '-').toLocaleLowerCase()}`}>
                                    <ListItemButton sx={{ minHeight: 30, justifyContent: 'initial', px: 4, }}>
                                        <ListItemIcon sx={{ minWidth: 45, textAlign: 'center', justifyContent: 'center' }}>
                                            <FontAwesomeIcon className="text-[#9499A1] text-xs" icon={faCircle} />
                                        </ListItemIcon>
                                        <ListItemText primary={item2} sx={{ opacity: 1, color: '#C2C7D0' }} primaryTypographyProps={{ fontSize: '13px', fontWeight: 'bold' }} />
                                    </ListItemButton>
                                </Link>
                            ))}
                        </Collapse>}
                    </ListItemIcon>
                );
            })}
        </List>
    );
}

export default DrawerList;