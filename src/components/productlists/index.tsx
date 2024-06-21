import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { ListProps } from '@mui/material';

interface ListProductsProps {
    list: [];
}

export default function ListProducts({ list }: ListProductsProps) {
    return (
        <div>
            <ul className="flex border-b-2 py-4 px-2 text-sm font-semibold space-x-16">
                <li className='w-28'>Name</li>
                <li className='w-28'>User Name</li>
                <li className='w-44'>Email</li>
                <li className='w-28'>Role</li>
                <li className='w-36'>Account ID</li>
                <li className='w-28'>Status</li>
                <li>Actions</li>
            </ul>
            {list.map((item, index) => {
                const { name, userName, email, role } = item
                return (
                    <ul key={index} className="flex border-b-2 py-4 px-2 text-xs space-x-16 items-center">
                        <li className='w-28'>{name}</li>
                        <li className='w-28'>{userName}</li>
                        <li className='w-44'>{email}</li>
                        <li className='w-28'>{role}</li>
                        <li className='w-36'></li>
                        <li className='w-28 px-3'><span className="inline-block w-3 h-3 rounded-full bg-[#28A745]"></span></li>
                        <li className='flex'>
                            <button className="p-2 rounded-md text-white bg-[#0069D9] border-2">
                                <CreateIcon />
                            </button>
                            <button className="p-2 rounded-md text-white bg-[#C82333] border-2">
                                <DeleteIcon />
                            </button>
                        </li>
                    </ul>
                )
            })}
        </div>
    )
}