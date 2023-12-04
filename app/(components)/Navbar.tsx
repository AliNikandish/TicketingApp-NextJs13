import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import Link from 'next/link'
const Navbar = () => {
  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02 mb-2">
      <h1 className="w-3/12">
        <Link href="/" className="text-red-500">
          <FaHome size={30}/>
        </Link>
      </h1>

      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="flex justify-center items-center gap-x-1 p-4 border-b-2 border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200 cursor-pointer active">
            <IoMdAddCircle />
            <Link href="/add-ticket">ایجاد تیکت جدید</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
