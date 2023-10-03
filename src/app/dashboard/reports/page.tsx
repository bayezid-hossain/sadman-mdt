'use client';

import Report from '@/app/components/Report';
import SearchComponent from '@/app/components/SearchComponent';
import React from 'react';

const page = () => {
  const handleReportSearch = (searchTerm: string) => {
    // Perform search logic with the search term
    console.log(`Searching for: ${searchTerm}`);
    // You can implement your search logic here
  };
  return (
    <div className="flex flex-row w-full h-screen min-h-min justify-evenly items-start gap-6 mr-6">
      <div className="round-component ">
        <div className="flex justify-center items-center gap-4">
          <h1 className="heading bg-white text-black ml-6 text-base">
            Reports
          </h1>
          <SearchComponent onSearch={handleReportSearch} />
        </div>
      </div>

      <div className="flex flex-col round-component overflow-auto h-screen">
        <div className=" flex justify-evenly items-start gap-4">
          <h1 className="heading ml-8">Manage Report</h1>
          <button
            type="button"
            className="bg-green-500 text-white font-semibold text-base light-bg m-4 px-3"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-red-500 text-base  font-semibold light-bg my-4 mr-4 px-3"
          >
            New
          </button>
        </div>
        <Report />
      </div>

      <div className="w-full h-full flex justify-evenly flex-col items-center gap-6">
        <div className="round-component flex flex-col justify-start items-center">
          <div className="flex justify-evenly w-[90%]">
            <h1 className="heading">Tags</h1>
            <button
              type="button"
              className="text-white text-2xl light-bg m-4 w-12"
            >
              +
            </button>
          </div>
        </div>
        <div className="round-component flex flex-col justify-start items-center">
          <div className="flex justify-evenly w-[90%]">
            <h1 className="heading">Gallery</h1>
            <button
              type="button"
              className="text-white text-2xl light-bg m-4 w-12"
            >
              +
            </button>
          </div>
        </div>
        <div className="round-component flex flex-col justify-start items-center">
          <div className="flex justify-evenly w-[90%]">
            <h1 className="heading">Officers Involved</h1>
            <button
              type="button"
              className="text-white text-2xl light-bg m-4 w-12"
            >
              +
            </button>
          </div>
        </div>
        <div className="round-component flex flex-col justify-start items-center">
          <div className="flex justify-evenly w-[90%]">
            <h1 className="heading">Civilians Involved</h1>
            <button
              type="button"
              className="text-white text-2xl light-bg m-4 w-12"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
