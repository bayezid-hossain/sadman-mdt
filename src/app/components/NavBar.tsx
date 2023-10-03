import React from 'react';
import dmp from '../assets/dmp.png';
import Image from 'next/image';
const NavBar = () => {
  return (
    <div className="w-full">
      <div className="flex justify-evenly items-center w-full shadow-md background text-white ">
        <div className="flex gap-4 justify-center items-center">
          <Image
            src={dmp}
            width={1000}
            height={1000}
            alt="dmp/image"
            className="object-cover h-[60px] w-[60px] my-2"
          />
          <h1 className="text-lg font-semibold">Dhaka Metropoliton Police</h1>
        </div>
        <div className="font-semibold flex flex-col justify-center items-center">
          <p>15/09/2022</p>
          <p>7:00 PM</p>
        </div>
        <div className="font-semibold">Welcome to Mobile Database Terminal</div>
      </div>
    </div>
  );
};

export default NavBar;
