import TicketCard from './(components)/TicketCard'

type ticket={
  _id:string,
    title:string,
    description:string,
    progress:number,
    priority:number,
    category:string,
    createdAt:string
}
const getAllTickets=async()=>{
  try {
    const res=await fetch("http://localhost:3000/api/Tickets",{
      cache:"no-store",
    })
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
    
  } catch (error) {
    console.log("Error loading topics: ", error);
  }

}

export default async function Home() {
  const allTickets = await getAllTickets();
  const allTicketsData=allTickets.allTickets
  return (
    <div className="flex flex-wrap justify-center gap-5 mt-10">
      {allTicketsData.map((ticket:ticket)=>{
        return <TicketCard {...ticket}/>
      })}
</div>

  )
}