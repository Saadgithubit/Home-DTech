import Link from 'next/link';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import { Drawer as MuiDrawer, ListItemButton, ListItemIcon, List, Collapse, ListItemText } from '@mui/material';

import { faTicket, faFolderOpen, faDesktop, faUsers, faCity, faCalendarDays, faSnowflake, faHouseLaptop, faHandHoldingDroplet, faPersonShelter } from '@fortawesome/free-solid-svg-icons';

import { ExpandMore, ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
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
    { name: 'Dashboard', font: faDesktop, alt: 'dashboardIcon', leftIcon: false },
    { name: 'UserManagement', font: faUsers, alt: 'userIcon', leftIcon: true },
    { name: 'Building', font: faCity, alt: 'buildingIcon', leftIcon: false },
    { name: 'Rooms', font: faPersonShelter, alt: 'roomIcon', leftIcon: true },
    { name: 'Components', font: faSnowflake, alt: 'componentIcon', leftIcon: false },
    { name: 'Booking', font: faCalendarDays, alt: 'bookingIcon', leftIcon: false },
    { name: 'Engineer`s Data Entry', font: faHouseLaptop, alt: 'dkDataEngineerIcon', leftIcon: true },
    { name: 'Master Product', font: faHandHoldingDroplet, alt: 'dkProductIcon', leftIcon: true },
    { name: 'Tickets', font: faTicket, alt: 'faTicket', leftIcon: true },
    { name: 'File Manager', font: faFolderOpen, alt: 'faFolderOpen', leftIcon: false },
];

interface DrawerListProps {
    open: boolean;
    collapseIndex: number | null;
    handleCollapse: (index: number) => void;
    isExpanded: boolean;
}

export function DrawerList({ open, collapseIndex, handleCollapse, isExpanded }: DrawerListProps) {
    return (
        <List>
            {drawerData.map((data, index) => {
                const { name, alt, font, leftIcon } = data;
                return (
                    <ListItemIcon key={index} sx={{ display: 'block' }}>
                        {!leftIcon ? (
                            <ListItemButton sx={{ minHeight: 48, display: 'flex' }}>
                                <ListItemIcon sx={{ minWidth: 0, mr: open ? 1 : 'auto', textAlign: 'center', justifyContent: 'center' }}>
                                    {font && <FontAwesomeIcon className="text-gray-500 text-lg" icon={font} />}
                                </ListItemIcon>
                                <Link href={name.toLowerCase()}>
                                    <ListItemText primary={name} sx={{ opacity: open ? 1 : 0, color: 'white' }} primaryTypographyProps={{ fontSize: '13px' }} />
                                </Link>
                            </ListItemButton>
                        ) : (
                            <ListItemButton onClick={() => handleCollapse(index)} sx={{ minHeight: 48, display: 'flex' }}>
                                <ListItemIcon sx={{ minWidth: 0, mr: open ? 1 : 'auto', textAlign: 'center', justifyContent: 'center' }}>
                                    {font && <FontAwesomeIcon className="text-gray-500" icon={font} />}
                                </ListItemIcon>
                                <ListItemText primary={name} sx={{ opacity: open ? 1 : 0, color: 'white' }} primaryTypographyProps={{ fontSize: '13px' }} />
                                <span>{!isExpanded ? <ChevronLeftIcon sx={{ opacity: open ? 1 : 0, color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />}</span>
                            </ListItemButton>
                        )}
                        <Collapse in={collapseIndex === index} timeout="auto" unmountOnExit>
                            {['All mail', 'Trash', 'Spam'].map((text) => (
                                <ListItemIcon key={text} sx={{ display: 'block' }}>
                                    <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
                                        <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }} />
                                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: 'white' }} primaryTypographyProps={{ fontSize: '13px' }} />
                                    </ListItemButton>
                                </ListItemIcon>
                            ))}
                        </Collapse>
                    </ListItemIcon>
                );
            })}
        </List>
    );
}