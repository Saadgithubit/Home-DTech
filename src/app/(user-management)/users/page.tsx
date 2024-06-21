import ButtonComponent from "@/components/button";
import InnerHeader from "@/components/innerheader";
import NavContainer from "@/components/navcontainer";

export default function Users() {
    return (
        <div className="w-full mt-14 p-4">
            <span className="w-full inline-flex p-2 text-xl items-center justify-between">
                <h1>Users</h1>
                <ButtonComponent variant={'contained'} color={'primary'} title={'Add User'} />
            </span>
            <NavContainer/>
            <InnerHeader title={'Users List'}/>
        </div>
    )
}