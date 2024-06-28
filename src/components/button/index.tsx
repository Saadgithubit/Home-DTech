import { Box, Button } from "@mui/material";

interface ButtonComponentProps {
    title: string;
    bgColor: string;
}

export default function ButtonComponent({ title , bgColor }: ButtonComponentProps) {
    const color = bgColor === 'white'? 'black':'white'
    return (
        <Box sx={{ '& button': { p: 1, fontSize: 12, fontWeight: 'bold' , background: bgColor? bgColor : 'primary',color: color} }}>
            <Button size="small" variant={'contained'}>
                {title}
            </Button>
        </Box>
    );
}
