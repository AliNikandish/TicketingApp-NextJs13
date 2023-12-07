import React from "react";
import { FaFire } from "react-icons/fa";
import Priority from "./Priority";


const InfoCard = ({
  _id,
  title,
  description,
  progress,
  priority,
  category,
  createdAt,
  updatedAt,
}:InfoCardProps) => {
  return (
    <div className="bg-gray-800 max-w-2xl shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-100">
          عنوان تیکت: {title}
        </h3>
      </div>
      <div className="bg-gray-700">
        <dl>
          <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-300">الویت</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <Priority priority={priority}/>
            </dd>
          </div>
          <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-300">تاریخ ایجاد</dt>
            <dd className="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
              {createdAt}
            </dd>
          </div>
          <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-300">تاریخ آپدیت</dt>
            <dd className="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
              {updatedAt}
            </dd>
          </div>
          <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-300">موضوع</dt>
            <dd className="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
              {category}
            </dd>
          </div>
          <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-300">درصد پیشرفت</dt>
            <dd className="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
              <div className="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                <div
                  style={{ width: `${progress}%` }}
                  className={`bg-red-500 h-full rounded-lg shadow-md`}
                ></div>
              </div>
            </dd>
          </div>
          <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-300">متن</dt>
            <dd className="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">
              {description}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default InfoCard;
