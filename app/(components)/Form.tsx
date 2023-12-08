"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


const Form = ({
  editMode,
  _id,
  title,
  description,
  category,
  priority,
  progress,
  status,
}:FormProps) => {
    
  const startingTicketData = {
    title: "",
    description: "",
    category: "بک اند",
    priority: 1,
    progress: 10,
    status: "باز",
  };

  if (editMode&&title&&description&&priority&&progress&&status&&category) {
    startingTicketData["title"] = title;
    startingTicketData["description"] = description;
    startingTicketData["priority"] = priority;
    startingTicketData["progress"] = progress;
    startingTicketData["status"] = status;
    startingTicketData["category"] = category;
  }

  const [formData, setFormData] = useState(startingTicketData);
  const router = useRouter();

  const changeHandler = (event:any) => {
    const name = event.target.name;
    const value =
      name === "priority" || name === "progress"
        ? Number(event.target.value)
        : event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (evnet:any) => {
    evnet.preventDefault();
    if (editMode) {

      const res = await fetch(`/api/tickets/${_id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          formData
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to update ticket");
      }
      router.refresh();
      router.push('/');

    } else {
      const res = await fetch("/api/tickets", {
        method: "POST",
        body: JSON.stringify({
          formData
        }),
        headers: {
            "Content-type": "application/json",
          },
      });
      if (!res.ok) {
        throw new Error("Failed to create ticket");
      }

      router.refresh();
      router.push("/");
    }
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-gray-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
      <h1 className="text-xl font-bold text-white capitalize dark:text-white">
        {editMode ? "ویرایش تیکت" : "اضافه کردن تیکت"}
      </h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2"> */}
        <div className="mt-4">
          <label className="text-white dark:text-gray-200" htmlFor="username">
            عنوان تیکت
          </label>
          <input
            value={formData.title}
            name="title"
            onChange={(event) => changeHandler(event)}
            id="title"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div className="mt-4">
          <label className="text-white dark:text-gray-200" htmlFor="textarea">
            متن
          </label>
          <textarea
            value={formData.description}
            onChange={(event) => changeHandler(event)}
            name="description"
            id="textarea"
            // type="textarea"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          ></textarea>
        </div>

        <div className="mt-4">
          <label className="text-white dark:text-gray-200" htmlFor="category">
            موضوع
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={(event) => changeHandler(event)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          >
            <option>بک اند</option>
            <option>فرانت اند</option>
            <option>دیگر</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="text-white dark:text-gray-200" htmlFor="priority">
            الویت
          </label>
          <select
            name="priority"
            value={formData.priority}
            onChange={(event) => changeHandler(event)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="text-white dark:text-gray-200" htmlFor="priority">
            وضعیت
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={(event) => changeHandler(event)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          >
            <option>باز</option>
            <option>بسته</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="text-white dark:text-gray-200" htmlFor="range">
            میزان پیشرفت
          </label>
          <input
            value={formData.progress}
            name="progress"
            onChange={(event) => changeHandler(event)}
            id="range"
            type="range"
            className="block w-full py-2 mt-2 text-gray-700 accent-red-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
          />
        </div>
        {/* </div> */}

        <div className="flex justify-end mt-6">
          <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
            {editMode ? 'ویرایش' : 'ایجاد'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
