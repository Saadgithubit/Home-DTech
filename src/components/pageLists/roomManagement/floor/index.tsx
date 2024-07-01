import { Delete as DeleteIcon, Create as CreateIcon } from '@mui/icons-material'
import { Box } from "@mui/material";

interface FloorListProps {
    floorList: List[];
    itemsPerPage?: number;
}

interface List {
    name: string;
    status: string;
    actions: string
}

const FloorList: React.FC<FloorListProps> = ({ floorList }) => {
    return (
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }} className='rounded-md'>
            <table className='w-full'>
                <tbody>
                    <tr className='border-b-2 text-xs'>
                        <th className='p-4 text-left'>Name</th>
                        <th className='p-4 text-left'>Status</th>
                        <th className='text-left p-4'>Action</th>
                    </tr>
                    {floorList.map((item, index) => {
                        const { name, status, actions } = item
                        return (
                            <tr key={index} className="border-b-2 text-xs">
                                <td className='text-left p-4'>{name}</td>
                                <td className='text-left p-4'>{status}</td>
                                <td className='text-left p-4'>{actions}</td>
                                <td className='text-left py-2'>
                                    <span className='flex'>
                                        <button className="p-2 rounded-s rounded-e text-white bg-[#0069D9]">
                                            <CreateIcon />
                                        </button>
                                        <div className='pl-1' />
                                        <button className="p-2 rounded-s rounded-e text-white bg-[#C82333]">
                                            <DeleteIcon />
                                        </button>
                                    </span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Box>
    )
}

export default FloorList