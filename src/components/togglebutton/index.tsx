'use client'
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons() {
    const [alignment, setAlignment] = React.useState<string | null>('left');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
        >
            <ToggleButton value="left" aria-label="left aligned">
                <KeyboardArrowLeftIcon />
            </ToggleButton>
            <ToggleButton value="left" aria-label="left aligned">
                <span className='p-1'>1</span>
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
            <span className='p-1'>2</span>
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
            <span className='p-1'>3</span>
            </ToggleButton>
            <ToggleButton value="justify" aria-label="justified">
            <span className='p-1'>4</span>
            </ToggleButton>
            <ToggleButton value="left" aria-label="right aligned">
                <KeyboardArrowRightIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
