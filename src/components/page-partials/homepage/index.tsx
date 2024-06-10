import Footer from "@/components/ui-components/footer";
import Homebar from "@/components/ui-components/homebar/index";
import Sidebar from "@/components/ui-components/sidebar/index";


export default function Homepage(){
    return(
        <main className="bg-[#F4F6F9] h-screen">
        <Sidebar/>
        <Homebar/>
        <Footer/>
        </main>
    )
}