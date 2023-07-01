import React, { useState } from 'react';

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const setOpen = () => setSidebarOpen(true);
  const setClose = () => setSidebarOpen(false);

  return (
    <div className='grid grid-cols-12 min-h-screen w-screen'>
      <div
        className={`relative bg-white duration-500 transition-all border-r-[1px] border-r-gray-50  ${
          sidebarOpen
            ? 'hidden md:block md:col-span-3 lg:col-span-2'
            : 'hidden md:block md:col-span-1'
        } `}
      >
        <button
          aria-label='Sidebar toggle Button'
          onClick={() => {
            sidebarOpen ? setClose() : setOpen();
          }}
          className='z-20 p-2 absolute -right-4 top-16 bg-white duration-500 border-[1px] border-gray-50 rounded-md'
        >
          {sidebarOpen ? (
            <MdOutlineKeyboardArrowLeft />
          ) : (
            <MdOutlineKeyboardArrowRight />
          )}
        </button>
        <Sidebar isOpen={sidebarOpen} setOpen={setOpen} setClose={setClose} />
      </div>
      <div
        className={`duration-500 bg-white ${
          sidebarOpen
            ? 'col-span-12 md:col-span-9 lg:col-span-10'
            : 'col-span-12 md:col-span-11'
        }`}
      >
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
