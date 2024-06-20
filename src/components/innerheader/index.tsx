export default function InnerHeader(props: any){
    const { title } = props
    return(
        <div className="border-2 bg-[#17A2B8] text-white p-3 rounded-lg">
            <h1>{title}</h1>
        </div>
    )
}