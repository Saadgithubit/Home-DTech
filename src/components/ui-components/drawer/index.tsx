import { styled, Theme, CSSObject } from '@mui/material/styles';
import { Drawer as MuiDrawer, } from '@mui/material';

import {
    faTicket, faFolderOpen, faDesktop, faUsers, faCity, faCalendarDays, faSnowflake, faHouseLaptop,
    faHandHoldingDroplet, faPersonShelter
} from '@fortawesome/free-solid-svg-icons';

const drawerWidth = 240;


export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

export const drawerStyling = {
    backgroundColor: '#343A40',
    color: 'white',
};

export const drawerData = [
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