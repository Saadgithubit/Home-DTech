import { Box, Button } from "@mui/material"
export default function ButtonComponent(props: any) {
    const { variant, color, title } = props

    return (
        <Box sx={{ '& button': { p: 1 , fontSize: 12 , textTransform: "capitalize" } }}>
            <Button size="small" variant={variant ? variant : 'contained'} color={color}>{title}</Button>
        </Box>
    )
}