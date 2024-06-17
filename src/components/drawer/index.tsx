import Link from 'next/link';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import { Drawer as MuiDrawer, ListItemButton, ListItemIcon, List, Collapse, ListItemText } from '@mui/material';

import { faTicket, faFolderOpen, faDesktop, faUsers, faCity, faCalendarDays, faSnowflake, faHouseLaptop, faHandHoldingDroplet, faPersonShelter, faCircle } from '@fortawesome/free-solid-svg-icons';

import { ExpandMore, ChevronLeft } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const drawerWidth = 240;

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

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
    open: boolean;
    collapseIndex: number | null;
    handleCollapse: (index: number) => void;
    isExpanded: boolean;
}

export function DrawerList({ open, collapseIndex, handleCollapse, isExpanded, }: DrawerListProps) {
    return (
        <List>
            {drawerData.map((list, index) => {
                const { name, font, nested, nestedItems } = list;
                return (
                    <ListItemIcon key={index} sx={{ display: 'block' }}>
                        {nested
                            ? (<ListItemButton onClick={() => handleCollapse(index)} sx={{ minHeight: 48, display: 'flex' }}>
                                <ListItemIcon sx={{ minWidth: 0, mr: open ? 1 : 'auto', textAlign: 'center', justifyContent: 'center' }}>
                                    {font && <FontAwesomeIcon className="text-gray-500" icon={font} />}
                                </ListItemIcon>
                                <ListItemText primary={name} sx={{ opacity: open ? 1 : 0, color: '#C2C7D0' }} primaryTypographyProps={{ fontSize: '13px' }} />
                                {!isExpanded
                                    ? <span>
                                        <ChevronLeft sx={{ opacity: open ? 1 : 0, color: 'white' }} />
                                    </span>
                                    : <span>
                                        {nestedItems && <Collapse in={collapseIndex === index} timeout="auto" unmountOnExit>
                                            <ExpandMore sx={{ color: 'white' }} />
                                        </Collapse>}
                                    </span>
                                }
                            </ListItemButton>)
                            : (<ListItemButton sx={{ minHeight: 48, display: 'flex' }}>
                                <ListItemIcon sx={{ minWidth: 0, mr: open ? 1 : 'auto', textAlign: 'center', justifyContent: 'center' }}>
                                    {font && <FontAwesomeIcon className="text-gray-500 text-lg" icon={font} />}
                                </ListItemIcon>
                                <Link href={name.replace(/\s/g, '-').toLowerCase()}>
                                    <ListItemText primary={name} sx={{ opacity: open ? 1 : 0, color: '#C2C7D0' }} primaryTypographyProps={{ fontSize: '13px' }} />
                                </Link>
                            </ListItemButton>)}
                        {nestedItems && <Collapse in={collapseIndex === index} timeout="auto" unmountOnExit>
                            {nestedItems.map((items) => (
                                <Link href={`/${items.replace(/\s/g, '-').toLocaleLowerCase()}`}>
                                    <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
                                        <ListItemIcon sx={{ minWidth: 0, mr: open ? 1 : 'auto', textAlign: 'center', justifyContent: 'center' }}>
                                            <FontAwesomeIcon className="text-gray-500 text-xs" icon={faCircle} />
                                        </ListItemIcon>
                                        <ListItemText primary={items} sx={{ opacity: open ? 1 : 0, color: '#C2C7D0' }} primaryTypographyProps={{ fontSize: '13px' }} />
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