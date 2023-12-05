import Link from "next/link";
import InfoCard from "../(components)/InfoCard";
import DeleteButton from "../(components)/DeleteButton";

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


const page = async ({ params }:any) => {
  const id=params.id
  const ticket = await getTicket(id);  
  const ticketData = ticket?.ticket;
  return (
    <div className="max-w-2xl p-6 mx-auto">
      <div className="">
        <InfoCard {...ticketData} />
      </div>
      <div className="mt-4 flex gap-x-8 justify-center">
        <DeleteButton id={id}/>
        <Link href={`${id}/edit`} className="bg-gray-700 text-white py-1 px-4 rounded shadow">ویرایش</Link>
      </div>
    </div>
  );
};

export default page;
