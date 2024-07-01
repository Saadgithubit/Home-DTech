import TabsComponent from "@/components/TabsComponent";

export default function Dashboard() {
    const tabs = [
        { label: 'Residential', content: <div>Content for Residential</div>, badgeContent: 4 },
        { label: 'Commercial', content: <div>Content for Commercial</div>, badgeContent: 5 },
    ];

    return (
        <div className="p-2">
            <span className="w-full inline-flex text-xl items-center justify-between">
                <h1>Dashboard</h1>
                <div></div>
            </span>
            <span className="w-full border-b-2 flex space-x-4 my-8 text-xs">
                <TabsComponent tabs={tabs} />
            </span>
        </div>
    )
}