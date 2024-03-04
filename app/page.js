"use client"

import { useEffect, useState } from "react";
import TickerCard from "./(components)/TickerCard";
import { getAllpostsAPI } from "./(urls)/allRoutes";

const getTickets = async () => {
  try {
    const res = await fetch(getAllpostsAPI, {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log("Failed to get Tickets");
  }
};

const Dashboard = () => {

  // const { tickets } = await getTickets();

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { tickets } = await getTickets();
      setTickets(tickets);
    };

    fetchData();
  }, []);

  // console.log(tickets);

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  // console.log(uniqueCategories);

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TickerCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
