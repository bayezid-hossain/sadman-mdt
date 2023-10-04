import Image from 'next/image';
import React, { useState, ChangeEvent, useEffect } from 'react';
import ProfilePic from '../assets/profile.png';

interface SingleProfile {
  citizen_id: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
  biometric: string;
  details: string;
  dob: string;
  profession: string;
  tags: any[]; // Replace 'any' with the actual type
  licenses: any[]; // Replace 'any' with the actual type
  knownConvictions: any[]; // Replace 'any' with the actual type
}

interface SelectedProfileProps {
  passedProfile: SingleProfile;
}

const Profile: React.FC<SelectedProfileProps> = ({ passedProfile }) => {
  useEffect(() => {
    console.log(passedProfile.citizen_id);
  });
  const [citizenId, setCitizenId] = useState<string>(passedProfile.citizen_id);
  const [firstName, setFirstName] = useState<string>(passedProfile.firstName);
  const [lastName, setLastName] = useState<string>(passedProfile.lastName);
  const [contactNumber, setContactNumber] = useState<string>(
    passedProfile.contactNumber
  );
  const [biometric, setBiometric] = useState<string>(passedProfile.biometric);
  const [details, setDetails] = useState<string>(passedProfile.details);
  const [dob, setDob] = useState<string>(passedProfile.dob);
  const [profession, setProfession] = useState<string>(
    passedProfile.profession
  );
  useEffect(() => {
    // Update the component's state when passedProfile changes
    setCitizenId(passedProfile.citizen_id);
    setFirstName(passedProfile.firstName);
    setLastName(passedProfile.lastName);
    setContactNumber(passedProfile.contactNumber);
    setBiometric(passedProfile.biometric);
    setDetails(passedProfile.details);
    setDob(passedProfile.dob);
    setProfession(passedProfile.profession);
  }, [passedProfile]);

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Use the name attribute to determine which state to update
    switch (name) {
      case 'biometric':
        setBiometric(value);
        break;
      case 'details':
        setDetails(value);
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
      case 'citizen_id':
        setCitizenId(value);
        break;
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'contactNumber':
        setContactNumber(value);
        break;
      case 'biometric':
        setBiometric(value);
        break;
      case 'details':
        setDetails(value);
        break;
      case 'dob':
        setDob(value);
        break;
      case 'profession':
        setProfession(value);
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
              width={1000}
              height={1000}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex flex-col w-[50%] justify-between items-start gap-2 text-xs">
            <input
              type="text"
              id="citizen_id"
              name="citizen_id"
              value={citizenId}
              onChange={handleInputChange}
              placeholder="Enter Citizen ID"
              className="info-field placeholder-white"
            />
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
              placeholder="FirstName"
              className="info-field placeholder-white"
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
              placeholder="LAST NAME"
              className="info-field placeholder-white"
            />
            <input
              type="text"
              id="dob"
              name="dob"
              value={dob}
              onChange={handleInputChange}
              placeholder="DOB"
              className="info-field placeholder-white"
            />
            <input
              type="text"
              id="profession"
              name="profession"
              value={profession}
              onChange={handleInputChange}
              placeholder="Enter Type"
              className="info-field placeholder-white"
            />
            <input
              type="text"
              id="contact"
              name="contact"
              value={contactNumber}
              onChange={handleInputChange}
              placeholder="Enter Type"
              className="info-field placeholder-white"
            />
            {/* Other input fields */}
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
          id="details"
          name="details"
          value={details}
          onChange={handleContentChange}
          placeholder="Citizen Description"
          className="large-info-field whitespace-normal overflow-hidden flex flex-col justify-start items-start text-start h-[28vh] w-[93%] text-white  placeholder-white"
        ></textarea>
      </div>
    </div>
  );
};

export default Profile;
