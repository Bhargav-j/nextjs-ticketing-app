"use client"

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { getAllpostsAPI } from "@/app/(urls)/allRoutes";

const DeleteBlock = ({ ticketid }) => {
  const router = useRouter();

  const deleteTicket = async () => {
    const res = await fetch(`${getAllpostsAPI}/${ticketid}`, {
      method: "DELETE",
    });

    if (res.ok) {
      router.refresh();
      router.push("/")
    }
  };

  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;
