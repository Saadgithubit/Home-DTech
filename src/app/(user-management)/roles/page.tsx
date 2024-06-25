import ButtonComponent from "@/components/button";
import InnerHeader from "@/components/innerheader";
import FilterSection from "@/components/filtersection";
import { RoleList } from "@/components/pagelists";
import Link from "next/link";

export default function Roles() {
    const list = [
        { id: 1, name: 'Admin', },
        { id: 2, name: 'User/Landlords', },
        { id: 3, name: 'Supplier', },
        { id: 4, name: 'Engineer', },
        { id: 5, name: 'User/Region Manager', },
        { id: 6, name: 'Owner Association', },
        { id: 7, name: 'Tenants', },
        { id: 8, name: 'Test Admin Role', },
        { id: 9, name: 'Test Admin Role 02', },
        { id: 10, name: 'Engineering Director', },
        { id: 11, name: 'Operations', },
        { id: 12, name: 'Accounts', },
    ]
    return (
        <div>
            <span className="w-full inline-flex py-2 text-xl items-center justify-between">
                <h1 className="font-san">Role Management</h1>
                <Link href={'roles/add'}>
                    <ButtonComponent title={'Add Role'} />
                </Link>
            </span>
            {/* <FilterSection /> */}
            <InnerHeader title={'Role List'} />
            <RoleList list={list} />
        </div>
    )
}