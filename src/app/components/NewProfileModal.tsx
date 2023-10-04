import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { createProfile } from '../redux/ProfileSlice';
import { AppDispatch } from '../redux/Store';

interface ProfileData {
  citizen_id: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
  biometric: string;
  details: string;
  dob: string;
  profession: string;
  tags: []; // Replace with the actual type
  licenses: []; // Replace with the actual type
  knownConvictions: []; // Replace with the actual type
}

interface NewProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewProfileModal: React.FC<NewProfileModalProps> = ({
  isOpen,
  onClose,
}) => {
  const initialProfileData: ProfileData = {
    citizen_id: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    biometric: '',
    details: '',
    dob: '',
    profession: '',
    tags: [],
    licenses: [],
    knownConvictions: [],
  };
  const dispatch = useDispatch<AppDispatch>();
  const [newProfileData, setNewProfileData] = useState<ProfileData>();
  const [citizenId, setCitizenId] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [contactNumber, setContactNumber] = useState<string>();
  const [biometric, setBiometric] = useState<string>();
  const [details, setDetails] = useState<string>();
  const [dob, setDob] = useState<string>();
  const [profession, setProfession] = useState<string>();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
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

  const handleCreate = () => {
    const newProfileData: ProfileData = {
      citizen_id: citizenId,
      firstName: firstName,
      lastName: lastName,
      contactNumber: contactNumber || '', // You might want to handle this differently if it can be null
      biometric: biometric || '',
      details: details || '',
      dob: dob || '',
      profession: profession || '',
      tags: [], // Add logic to handle tags
      licenses: [], // Add logic to handle licenses
      knownConvictions: [], // Add logic to handle knownConvictions
    };

    // Dispatch the createProfile action with the new profile data
    dispatch(createProfile(newProfileData));

    setNewProfileData(initialProfileData);
    onClose();
  };

  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 flex items-center justify-center`}
    >
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-2xl font-semibold mb-4">Create New Profile</h2>
        <label>
          Citizen ID:
          <input
            type="text"
            name="citizen_id"
            value={citizenId}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </label>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </label>
        <label>
          Contact Number:
          <input
            type="text"
            name="contactNumber"
            value={contactNumber}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </label>
        <label>
          Biometric:
          <input
            type="text"
            name="biometric"
            value={biometric}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </label>
        <label>
          Details:
          <input
            type="text"
            name="data.details"
            value={details}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </label>
        <label>
          Date of Birth (DOB):
          <input
            type="text"
            name="dob"
            value={dob}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </label>
        <label>
          Profession:
          <input
            type="text"
            name="profession"
            value={profession}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </label>
        {/* Add other input fields for tags, licenses, knownConvictions */}
        <div className="modal-buttons">
          <button
            onClick={handleCreate}
            className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          >
            Create
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProfileModal;
