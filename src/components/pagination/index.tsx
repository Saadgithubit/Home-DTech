import React, { ChangeEvent } from 'react';
import { Box, Pagination } from '@mui/material';

interface PaginationProps {
    count: number;
    page: number;
    onChange: (event: ChangeEvent<unknown>, value: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({ count, page, onChange }) => {
    return (
        <Box display="flex">
            <Pagination
                variant="outlined" color="primary"
                count={count} page={page} onChange={onChange}
                sx={{
                    '.MuiPaginationItem-root': { margin: 0, marginLeft: '-1px', borderRadius: 0, backgroundColor: 'white', color: '#007bff', paddingX: '.5rem', paddingY: '1.2rem' },
                    '.MuiPaginationItem-root:hover': { backgroundColor: '#e9ecef' },
                    '.Mui-selected': { backgroundColor: '#007bff !important', color: 'white !important' },
                    '.Mui-selected:hover': { backgroundColor: '#1565c0 !important', },
                    '.MuiPagination-ul > li:first-child > button': { borderRadius: '.25rem 0 0 .25rem' },
                    '.MuiPagination-ul > li:last-child > button': { borderRadius: '0 .25rem .25rem 0' },
                }}
            />
        </Box>
    );
};

export default PaginationComponent;
