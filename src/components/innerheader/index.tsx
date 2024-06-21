export default function InnerHeader({ title }: { title: string }) {

    return (
        <div className="bg-[#17A2B8] text-white py-3 px-5 mb-2 rounded-s rounded-e">
            <h1>{title}</h1>
        </div>
    )
}