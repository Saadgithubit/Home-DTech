import ButtonComponent from "@/components/button";
import InnerHeader from "@/components/innerheader";
import NavContainer from "@/components/navcontainer";

export default function Building() {
    return (
        <div className="flex justify-end p-2">
            <div className="w-[85%]">
            <span className="w-full inline-flex p-2 text-xl items-center justify-between">
                <h1>Buildings</h1>
                <ButtonComponent title={'Add Building'} />
            </span>
            <NavContainer/>
            <InnerHeader title={'Building List'}/>
            </div>
        </div>
    )
}