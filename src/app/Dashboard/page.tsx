import Dashboardpage from "@/components/page-partials/dashboardpage";
import Footer from "@/components/ui-components/footer";
import Sidebar from "@/components/ui-components/sidebar";

export default function Dashboard() {
    return (
        <main className="bg-[#F4F6F9] h-screen">
            <Sidebar />
            <Dashboardpage />
            <Footer/>
        </main>
    )
}