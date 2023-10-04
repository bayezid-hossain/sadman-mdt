'use client';

import { MagnifyingGlassCircleIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';

interface SearchComponentProps {
  onSearch: (searchTerm: string) => void; // Callback function to handle search
  onTextChange: (text: string) => void; // Callback function to handle text input changes
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  onSearch,
  onTextChange,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = () => {
    // Call the onSearch callback with the search term
    onSearch(searchTerm);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchTerm(text);

    // Call the onTextChange callback with the current text
    onTextChange(text);
  };

  return (
    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
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
