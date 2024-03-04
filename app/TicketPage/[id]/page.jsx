import TicketForm from "@/app/(components)/TicketForm";
import { getAllpostsAPI } from "@/app/(urls)/allRoutes";


const getTicketByid = async (id) => {
  const res = await fetch(`${getAllpostsAPI}/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get ticket");
  }

  return res.json();
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  let updateTicketData = {};
  if (EDITMODE) {
    updateTicketData = await getTicketByid(params.id);
    updateTicketData = updateTicketData.ticket
  }else{
    updateTicketData = {_id : "new"}
  }

  return <TicketForm Ticket = {updateTicketData}/>;
};

export default TicketPage;
