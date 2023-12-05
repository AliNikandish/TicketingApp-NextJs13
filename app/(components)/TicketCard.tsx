import React from "react";
import Link from "next/link";
import Priority from "./Priority";
import Progress from "./Progress";

type TicketCardProps={
    _id:string,
    title:string,
    description:string,
    progress:number,
    priority:number,
    category:string,
    createdAt:string
}
const TicketCard = ({
  _id,
  title,
  description,
  progress,
  priority,
  category,
  createdAt
}:TicketCardProps) => {    
  return (
    <div className="p-4 max-w-sm h-[360px] ">
      <div className="bg-slate-50 p-10 rounded-lg shadow-md">
        <h1 className="text-xl font-bold">عنوان : {title}</h1>
        <div className="flex gap-x-0.5 items-center mt-1">
          <p>اولویت:</p>
          <Priority priority={priority}/>
        </div>
        <div className="flex gap-x-1 items-center text-gray-600">
          <p className="">موضوع : {category}</p>
        </div>
        <Progress progress={progress}/>
        <h2 className="tracking-wide line-clamp-1">{description}</h2>
        <p className="text-gray-400 text-xs mt-1">تاریخ ایجاد :{createdAt}</p>
        <div className="mt-4">
          <Link
            href={`/${_id}`}
            className="bg-red-400 py-3 px-8 rounded text-sm font-semibold hover:bg-opacity-75"
          >
            مشاهده جزئیات
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;