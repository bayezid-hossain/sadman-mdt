'use client';

import Incident from '@/app/components/Incident';
import SearchComponent from '@/app/components/SearchComponent';
import React, { useEffect, useState } from 'react';

// Define the IncidentData interface to match the expected data structure
interface IncidentData {
  id: string; // Replace with the actual type of 'id'
  data: {
    title: string;
    typeOfIncident: string;
    details: string;
    civilians: []; // You should replace 'any[]' with the actual type for civilians
    tags: []; // You should replace 'any[]' with the actual type for tags
    images: string[]; // Assuming images are an array of strings (file paths)
    officers: []; // You should replace 'any[]' with the actual type for officers
  };
}

const IncidentPage = () => {
  // Define states for search term and filtered Incidents
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredIncidents, setFilteredIncidents] = useState<IncidentData[]>(
    []
  );

  // Dummy data for incidents (replace with your actual data)
  const incidents: IncidentData[] = [
    // Sample incidents here
  ];

  useEffect(() => {
    // Filter incidents based on the search term
    const filtered = incidents.filter((incident: IncidentData) =>
      incident?.data?.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredIncidents(filtered);
  }, [searchTerm]);

  const handleIncidentSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };
  const handleIncidentClick = (incident: IncidentData) => {
    // Set the selected profile when clicked
    // setSelectedProfile(profile);
  };

  return (
    <div className="flex flex-row w-full h-screen min-h-min justify-evenly items-start gap-6 mr-6">
      <div className="round-component">
        <div className="flex justify-center items-center gap-4">
          <h1 className="heading bg-white text-black ml-6 text-base">
            Incidents
          </h1>
          <SearchComponent
            onTextChange={handleIncidentSearch}
            onSearch={handleIncidentSearch}
          />
        </div>
        <div className="flex flex-col gap-4 overflow-auto h-[90%]">
          {filteredIncidents?.map((incident) => (
            <div
              key={incident.id}
              className="mx-4 bg-white w-[90%] flex justify-start h-20 gap-4 cursor-pointer"
              onClick={() => handleIncidentClick(incident)}
            >
              {/* You can replace this with your actual incident data */}
              <div className="flex flex-col gap-2 flex-1 justify-center items-start">
                <p className="">{incident?.data?.title}</p>
                <p className="">Type: {incident.data?.typeOfIncident}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col round-component overflow-auto h-screen">
        <div className="flex justify-evenly items-start gap-4">
          <h1 className="heading ml-8">Manage Incident</h1>
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
        {/* Pass selectedIncidentData to your Incident component */}
        {/* <Incident passedIncidentData={selectedIncidentData} /> */}
      </div>

      {/* Other components and sections here */}
    </div>
  );
};

export default IncidentPage;
