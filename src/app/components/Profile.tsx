import Image from 'next/image';
import React, { useState, ChangeEvent } from 'react';
import ProfilePic from '../assets/profile.png';
const Profile = () => {
  const [title, setTitle] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [biometric, setBiometric] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Use the name attribute to determine which state to update
    switch (name) {
      case 'biometric':
        setBiometric(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        // Handle other input fields if needed
        break;
    }
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
    <div className="">
      <div className="flex flex-col justify-start items-start w-full h-auto m-4 gap-4">
        <div className="flex w-full gap-4">
          <div className="w-[50%]">
            <Image
              src={ProfilePic}
              alt="img/profile"
              width={50}
              height={50}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex flex-col w-[50%] justify-between items-start gap-2">
            <input
              type="text"
              id="type"
              name="type"
              value={type}
              onChange={handleInputChange}
              placeholder="Enter Type"
              className="info-field placeholder-white"
            />
            <input
              type="text"
              id="type"
              name="type"
              value={type}
              onChange={handleInputChange}
              placeholder="Enter Type"
              className="info-field placeholder-white"
            />
            <input
              type="text"
              id="type"
              name="type"
              value={type}
              onChange={handleInputChange}
              placeholder="Enter Type"
              className="info-field placeholder-white"
            />
            <input
              type="text"
              id="type"
              name="type"
              value={type}
              onChange={handleInputChange}
              placeholder="Enter Type"
              className="info-field placeholder-white"
            />
            <input
              type="text"
              id="type"
              name="type"
              value={type}
              onChange={handleInputChange}
              placeholder="Enter Type"
              className="info-field placeholder-white"
            />
            <input
              type="text"
              id="type"
              name="type"
              value={type}
              onChange={handleInputChange}
              placeholder="Enter Type"
              className="info-field placeholder-white"
            />
          </div>
        </div>
        <textarea
          id="biometric"
          name="biometric"
          value={biometric}
          onChange={handleContentChange}
          placeholder="Biometric Information"
          className="large-info-field w-[93%] whitespace-normal overflow-hidden flex flex-col justify-start items-start text-start h-[28vh] text-white placeholder-white"
        ></textarea>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={handleContentChange}
          placeholder="Citizen Description"
          className="large-info-field whitespace-normal overflow-hidden flex flex-col justify-start items-start text-start h-[28vh] w-[93%] text-white  placeholder-white"
        ></textarea>
      </div>
    </div>
  );
};

export default Profile;
