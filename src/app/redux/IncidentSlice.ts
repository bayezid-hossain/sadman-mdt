// incidentSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
interface incidentData {
  title: String;
  typeOfIncident: String;
  details: String;
  civilians: [];
  tags: []; // Reference the Tags model // Reference the Licenses model
  images: [];
  officers: [];
}
interface incidentState {
  incidents: Array<any>; // Replace 'any' with the actual type of your incident data
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
// Define an initial state for incidents
let incidentData;
if (typeof window !== 'undefined') {
  incidentData = localStorage.getItem('incidents');
}

const initialState: incidentState = {
  incidents: incidentData ? JSON.parse(incidentData) : [],
  status: 'idle',
  error: null || '', // 'null' should be null without quotes
};
export const fetchincidents = createAsyncThunk<Array<any>, void>(
  'incidents/fetchincidents', // The first type parameter is the payload type (return data)
  async () => {
    try {
      const response = await fetch('http://localhost:3000/api/incident/all');
      if (!response.ok) {
        throw new Error('Failed to fetch incidents');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const createincident = createAsyncThunk(
  'incidents/createincident',
  async (incidentData: incidentData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'http://localhost:3000/api/incident/create',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(incidentData),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
      const data = await response.json();
      console.log(data);
      return data[0];
    } catch (error) {
      return error;
    }
  }
);

// Create a incident slice with actions and reducers
const incidentSlice = createSlice({
  name: 'incidents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createincident.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createincident.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.incidents.push(action.payload); // Add the created incident to the state
        toast('incident created');
        try {
          localStorage.setItem('incidents', JSON.stringify(state.incidents));
        } catch (e) {
          console.error('Error saving user data to localStorage:', e);
        }
      })
      .addCase(createincident.rejected, (state, action) => {
        state.status = 'failed';
        state.error = 'Failed to create a new incident';
      })
      .addCase(fetchincidents.pending, (state) => {
        state.status = 'loading';
        state.error = null; // 'null' should be null without quotes
      })
      .addCase(fetchincidents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.incidents = action.payload;
        try {
          localStorage.setItem('incidents', JSON.stringify(state.incidents));
        } catch (e) {
          console.error('Error saving user data to localStorage:', e);
        }
      })
      .addCase(fetchincidents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || '';
      });
  },
});
// Export the reducer
export default incidentSlice.reducer;
export const selectincidents = (state: { incident: incidentState }) =>
  state.incident?.incidents;
