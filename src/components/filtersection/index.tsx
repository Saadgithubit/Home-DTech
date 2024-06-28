import ButtonComponent from "../button";

export default function FilterSection() {
    return (
        <div className="flex justify-between bg-[#F8F9FA] rounded-md pt-4 px-2 my-2 border-2 flex-wrap">
            <span className="inline-flex flex-col space-y-2 w-1/3">
                <label htmlFor="user" className="text-xs font-semibold ml-1">Users:</label>
                <select name="select" id="user" className="border-2 text-xs w-[90%] p-2 shadow-sm border-slate-300 placeholder-slate-400 rounded-md focus:outline-none focus:border-sky-300 focus:ring-sky-300">
                    <option value={'Select'}>Select</option>
                    <option value={'First Option'}>First Option</option>
                    <option value={'Second Option'}>Second Option</option>
                </select>
            </span>
            <span className="inline-flex flex-col space-y-2 w-1/3">
                <p className="text-xs font-semibold ml-1">Name:</p>
                <input placeholder="Name" className="border-2 text-xs w-[90%] p-2 shadow-sm border-slate-300 placeholder-slate-400 rounded-md focus:outline-none focus:border-sky-300 focus:ring-sky-300" />
            </span>
            <span className="inline-flex flex-col space-y-2 w-1/3">
                <p className="text-xs font-semibold ml-1">Address:</p>
                <input placeholder="Address" className="border-2 text-xs w-[90%] p-2 shadow-sm border-slate-300 placeholder-slate-400 rounded-md focus:outline-none focus:border-sky-300 focus:ring-sky-300" />
            </span>
            <span className="w-full justify-end inline-flex pr-9 p-2 my-2 space-x-2">
                <ButtonComponent title={'Reset'} bgColor={'white'} />
                <ButtonComponent title={'Filter'} bgColor={'#5A6268'} />
            </span>
        </div>
    )
}