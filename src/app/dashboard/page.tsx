'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserState } from '../redux/AuthSlice';

import { useRouter } from 'next/navigation';
const page = () => {
  const user = useSelector(selectUserState);
  const { push } = useRouter();
  if (!user.loggedIn) {
    push('/');
  } else {
    return (
      <div className="flex flex-row justify-center items-center h-screen w-full mr-6 gap-6">
        <div className="flex flex-col h-screen w-full items-center gap-4">
          <div className="flex flex-col  flex-1 w-full rounded-md background  justify-start items-center ">
            <h1 className="heading p-1">Warrants</h1>
          </div>
          <div className="flex flex-col flex-1  w-full rounded-md background justify-start items-center">
            <h1 className="heading">BOLO</h1>
          </div>
        </div>
        <div className="flex flex-col h-screen w-full rounded-md background">
          <div className="flex justify-evenly items-center">
            <h1 className="heading ml-12 text-center p-1 ">Bulletin Board</h1>
            <button
              type="button"
              className="text-white text-2xl light-bg m-4 w-12"
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default page;
