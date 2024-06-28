import { Box, Button } from "@mui/material";

interface ButtonComponentProps {
    title: string;
    bgColor: string;
}

export default function ButtonComponent({ title , bgColor }: ButtonComponentProps) {
    const color = '#5A6268'
    return (
        <Box sx={{ '& button': { p: 1, fontSize: 12, fontWeight: 'bold' , background: bgColor? bgColor : 'primary'} }}>
            <Button size="small" variant={'contained'}>
                {title}
            </Button>
        </Box>
    );
}
