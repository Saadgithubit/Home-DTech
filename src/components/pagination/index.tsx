'use client';

import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Box, Pagination } from '@mui/material';

const PaginationComponent = ({ count }: { count: number }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams: any = useSearchParams();
    const currentPage = parseInt(searchParams.get('page')) || 1;

    const handlePageChange = (event: any, value: number) => {
        router.push(`${pathname}?page=${value}`);
    };

    return (
        <Box display="flex">
            <Pagination
                variant="outlined"
                color="primary"
                count={count}
                page={currentPage}
                onChange={handlePageChange}
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
