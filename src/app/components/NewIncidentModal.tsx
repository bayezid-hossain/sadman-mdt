import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { createincident } from '../redux/IncidentSlice';
import { AppDispatch } from '../redux/Store';

// Define the incidentData interface to match the expected data structure
interface incidentData {
  title: string;
  typeOfIncident: string;
  details: string;
  civilians: []; // You should replace 'any[]' with the actual type for civilians
  tags: []; // You should replace 'any[]' with the actual type for tags
  images: []; // Assuming images are an array of strings (file paths)
  officers: []; // You should replace 'any[]' with the actual type for officers
}

interface NewincidentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewincidentModal: React.FC<NewincidentModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Define initialincidentData to match the incidentData interface
  const initialincidentData: incidentData = {
    title: '',
    typeOfIncident: '',
    details: '',
    civilians: [],
    tags: [],
    images: [],
    officers: [],
  };

  const dispatch = useDispatch<AppDispatch>();

  // Use useState to manage the incidentData
  const [newincidentData, setNewincidentData] =
    useState<incidentData>(initialincidentData);

  // Define a handleChange function to update the incidentData
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewincidentData({
      ...newincidentData,
      [name]: value,
    });
  };

  const handleCreate = () => {
    // Dispatch the createincident action with the new incidentData
    dispatch(createincident(newincidentData));

    // Clear the incidentData and close the modal
    setNewincidentData(initialincidentData);
    onClose();
  };

  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 flex items-center justify-center`}
    >
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-2xl font-semibold mb-4">Create New incident</h2>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={newincidentData.title}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </label>
        <label>
          Type of Incident:
          <input
            type="text"
            name="typeOfIncident"
            value={newincidentData.typeOfIncident}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </label>
        <label>
          Details:
          <textarea
            name="details"
            value={newincidentData.details}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </label>
        <label>
          Civilians (Separate with commas):
          <input
            type="text"
            name="civilians"
            value={newincidentData.civilians.join(', ')}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </label>
        <label>
          Tags (Separate with commas):
          <input
            type="text"
            name="tags"
            value={newincidentData.tags.join(', ')}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </label>
        <label>
          Images (Separate with commas):
          <input
            type="text"
            name="images"
            value={newincidentData.images.join(', ')}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </label>
        <label>
          Officers (Separate with commas):
          <input
            type="text"
            name="officers"
            value={newincidentData.officers.join(', ')}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </label>
        {/* Add other input fields or modify as needed */}
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

export default NewincidentModal;
