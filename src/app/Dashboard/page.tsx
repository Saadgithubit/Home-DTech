export default function Dashboard() {

    return (
        <main className="flex justify-end p-2">
            <div className="lg:w-[82.5%]">
            <h1>Dashboard</h1>
            <span className="w-full border-b-2 flex space-x-4 my-8 text-xs">
                <p style={{ color: '#0083FF' }} className="border-b-4 w-24 text-center border-[#0083FF] pb-1">RESIDENTIAL</p>
                <p style={{ color: '#0083FF' }} className="border-b-4 w-24 text-center border-[#0083FF] pb-1">COMMERCIAL</p>
            </span>
            </div>
        </main>
    )
}