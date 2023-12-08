"use client";
import { useRouter } from "next/navigation";


const DeleteButton = ({id}:DeleteButton) => {
  const router = useRouter();
 
  const deleteTicket = async ()=>{
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`,{
      method:"DELETE",
    });
    if(res.ok){
      router.push('/')
      router.refresh()
    }
  }
  return (
    <button
    onClick={deleteTicket}
      type="button"
      className="bg-red-500 text-white py-1 px-4 rounded shadow"
    >
      حذف
    </button>
  );
};

export default DeleteButton;
