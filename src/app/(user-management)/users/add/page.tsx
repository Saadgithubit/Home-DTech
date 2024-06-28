import CreateUser from "@/components/createUser";

export default function AddUser(){
    return(
        <div>
            <h1 className="text-3xl font-sans mt-2">Users</h1>
            <CreateUser/>
        </div>
    )
}