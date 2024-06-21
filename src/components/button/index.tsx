import { Box, Button } from "@mui/material";

interface ButtonComponentProps {
    title: string;
}

export default function ButtonComponent({ title }: ButtonComponentProps) {
    return (
        <Box sx={{ '& button': { p: 1, fontSize: 12, fontWeight: 'bold' } }}>
            <Button size="small" variant={'contained'} color="primary">
                {title}
            </Button>
        </Box>
    );
}
