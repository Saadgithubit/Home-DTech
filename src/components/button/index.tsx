import { Box, Button } from "@mui/material";

interface ButtonComponentProps {
    title: string;
}

export default function ButtonComponent({ title }: ButtonComponentProps) {

    return (
        <Box sx={{ '& button': { p: 1, fontSize: 12, fontWeight: 'bold', background: 'primary' } }}>
            <Button size="small" variant={'contained'}>
                {title}
            </Button>
        </Box>
    );
}
