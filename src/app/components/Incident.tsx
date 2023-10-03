import Image from 'next/image';
import React, { useState, ChangeEvent } from 'react';
import ProfilePic from '../assets/profile.png';
const Incident = () => {
  const [title, setTitle] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Use the name attribute to determine which state to update
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'type':
        setType(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        // Handle other input fields if needed
        break;
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-4 w-full">
        <div className="flex info-field gap-4 m-4 p-0 w-[90%]">
          <label htmlFor="title" className="mx-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleInputChange}
            placeholder="Enter Title"
            className="bg-transparent"
          />
        </div>
        <div className="flex info-field gap-4 m-4 p-0 w-[90%]">
          <label htmlFor="title" className="mx-2">
            Type:
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={type}
            onChange={handleInputChange}
            placeholder="Enter Type"
            className="bg-transparent"
          />
        </div>{' '}
        <div className="flex flex-col info-field p-0 w-[95%] h-[77vh] ml-3">
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleContentChange}
            placeholder="Enter description"
            className="large-info-field whitespace-normal overflow-hidden flex flex-col justify-start items-start text-start w-full h-screen max-h-screen text-white  placeholder-white"
          />
        </div>
      </form>
    </div>
  );
};

export default Incident;
