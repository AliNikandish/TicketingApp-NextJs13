import Form from '@/app/(components)/Form'
import React from 'react'

const getTicket = async (id:string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const edit = async({params}:any) => {
  const ticket = await getTicket(params.id);
  const ticketData = ticket.ticket;
  if(ticketData){
    return (
      <div>
            <Form editMode={true} {...ticketData}/>
      </div>
    )
  }
}

export default edit