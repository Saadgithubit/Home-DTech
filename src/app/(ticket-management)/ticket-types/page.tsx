import ButtonComponent from "@/components/button";
import InnerHeader from "@/components/innerheader";
import NavContainer from "@/components/navcontainer";

export default function TicketTypes () {
  return (
    <div className="flex justify-end p-2">
    <div className="w-[85%]">
    <span className="w-full inline-flex p-2 text-xl items-center justify-between">
        <h1>Ticket Type</h1>
        <ButtonComponent variant={'contained'} color={'primary'} title={'Add Ticket Type'} />
    </span>
    <NavContainer/>
    <InnerHeader title={'Ticket Type List'}/>
    </div>
</div>
  )
}
