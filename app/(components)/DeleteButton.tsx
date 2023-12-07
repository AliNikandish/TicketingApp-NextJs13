"use client";
import { useRouter } from "next/navigation";


const DeleteButton = ({id}:DeleteButton) => {
  const router = useRouter();
 
  return (
    <button
      type="button"
      className="bg-red-500 text-white py-1 px-4 rounded shadow"
    >
      حذف
    </button>
  );
};

export default DeleteButton;
