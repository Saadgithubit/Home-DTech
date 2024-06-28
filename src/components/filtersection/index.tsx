import ButtonComponent from "../button";

export default function FilterSection() {
    return (
        <div className="flex justify-between bg-[#F8F9FA] rounded-md pt-4 px-2 my-2 border-2 flex-wrap">
            <span className="inline-flex flex-col space-y-2 w-1/3">
                <p className="text-xs font-semibold ml-1">Users:</p>
                <select className="border-2 text-xs w-[90%] p-2">
                    <option>Select</option>
                </select>
            </span>
            <span className="inline-flex flex-col space-y-2 w-1/3">
                <p className="text-xs font-semibold ml-1">Name:</p>
                <input placeholder="Name" className="border-2 text-xs w-[90%] p-2" />
            </span>
            <span className="inline-flex flex-col space-y-2 w-1/3">
                <p className="text-xs font-semibold ml-1">Address:</p>
                <input placeholder="Address" className="border-2 text-xs w-[90%] p-2" />
            </span>
            <span className="w-full justify-end inline-flex pr-9 p-2 my-2 space-x-2">
                <ButtonComponent title={'Reset'} />
            </span>
        </div>
    )
}