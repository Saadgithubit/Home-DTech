export default function InnerHeader({ title }: { title: string }) {

    return (
        <div className="border-2 bg-[#17A2B8] text-white p-3 mb-2 rounded-lg">
            <h1>{title}</h1>
        </div>
    )
}