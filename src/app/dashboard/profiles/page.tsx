'use client';

import Profile from '@/app/components/Profile';
import SearchComponent from '@/app/components/SearchComponent';
import { selectUserState } from '@/app/redux/AuthSlice';
import { fetchProfiles, selectProfiles } from '@/app/redux/ProfileSlice';
import { AppDispatch } from '@/app/redux/Store';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfilePic from '../../assets/profile.png';
import NewProfileModal from '@/app/components/NewProfileModal';
interface ProfileData {
  id: string; // Replace with the actual type of 'id'
  data: {
    citizen_id: string;
    firstName: string;
    lastName: string;
    contactNumber: string;
    biometric: string;
    details: string;
    dob: string;
    profession: string;
    tags: []; // Reference the Tags model
    licenses: []; // Reference the Licenses model
    knownConvictions: []; // Reference the KnownConviction
    // Add other fields as needed
  };
}
const page = () => {
  const profiles = useSelector(selectProfiles);
  const [selectedProfile, setSelectedProfile] = useState<ProfileData>(
    profiles[0]
  );
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProfiles, setFilteredProfiles] =
    useState<ProfileData[]>(profiles);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // Filter profiles based on the search term
    const filtered = profiles.filter((profile: ProfileData) =>
      profile?.data?.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProfiles(filtered);
  }, [searchTerm, profiles]);

  const handleProfileSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const handleProfileClick = (profile: ProfileData) => {
    // Set the selected profile when clicked
    setSelectedProfile(profile);
  };
  const handleCreateProfile = (newProfileData: ProfileData) => {
    // Add the new profile data to your profiles state
    // You can dispatch an action to update the profiles in Redux here
    // For example: dispatch(addProfile(newProfileData));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-row w-full h-screen min-h-min justify-evenly items-start gap-6 mr-6 scroll-smooth scroll-hidden">
      <div className="round-component">
        <div className="flex justify-center items-center gap-4">
          <h1 className="heading bg-white text-black ml-6 text-base">
            Profiles
          </h1>
          <SearchComponent
            onTextChange={setSearchTerm}
            onSearch={handleProfileSearch}
          />
        </div>
        <div className="flex flex-col gap-4 overflow-auto scroll-smooth sroll-hidden h-[90%]">
          {filteredProfiles?.map((profile) => (
            <div
              key={profile.id}
              className="mx-4 bg-white w-[90%] flex justify-start h-20 gap-4 cursor-pointer"
              onClick={() => handleProfileClick(profile)}
            >
              <Image
                src={ProfilePic}
                alt="img/profile"
                width={1000}
                height={1000}
                className="object-fit h-full w-auto"
                onClick={() => handleProfileClick(profile)}
              />
              <div className="flex flex-col gap-2 flex-1 justify-center items-start">
                <p className="">
                  {profile?.data?.firstName} {profile.data?.lastName}
                </p>
                <p className="">Contact: {profile.data?.contactNumber}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col round-component overflow-scroll scroll-smooth scroll-hidden h-screen overflow-x-hidden">
        <div className=" flex justify-evenly items-start gap-4">
          <h1 className="heading ml-8">Manage Profile</h1>
          <button
            type="button"
            className="bg-green-500 text-white font-semibold text-base light-bg m-4 px-3"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-red-500 text-base  font-semibold light-bg my-4 mr-4 px-3"
            onClick={openModal}
          >
            New
          </button>
        </div>{' '}
        <Profile passedProfile={selectedProfile?.data} />
      </div>
      <div className="w-full h-full flex justify-evenly flex-col items-center gap-6">
        <div className="round-component flex flex-col justify-start items-center w">
          <h1 className="heading">Licenses</h1>
        </div>
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
          <h1 className="heading">Known Convictions</h1>
        </div>
      </div>{' '}
      {isModalOpen && (
        <NewProfileModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
};

export default page;
