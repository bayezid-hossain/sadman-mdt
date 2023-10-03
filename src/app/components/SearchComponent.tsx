'use client';

import { MagnifyingGlassCircleIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';

interface SearchComponentProps {
  onSearch: (searchTerm: string) => void; // Callback function to handle search
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = () => {
    // Call the onSearch callback with the search term
    onSearch(searchTerm);
  };

  return (
    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="text-center"
      />
      <button
        onClick={handleSearch}
        className="flex justify-center items-center mr-4"
      >
        <MagnifyingGlassCircleIcon className="h-[20xp] w-[20px] text-white " />
      </button>
    </div>
  );
};

export default SearchComponent;
