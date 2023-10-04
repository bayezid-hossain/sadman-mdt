// profileSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
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
interface ProfileState {
  profiles: Array<any>; // Replace 'any' with the actual type of your profile data
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
// Define an initial state for profiles
let profileData;
if (typeof window !== 'undefined') {
  profileData = localStorage.getItem('profiles');
}

const initialState: ProfileState = {
  profiles: profileData ? JSON.parse(profileData) : [],
  status: 'idle',
  error: null || '', // 'null' should be null without quotes
};
export const fetchProfiles = createAsyncThunk<Array<any>, void>(
  'profiles/fetchProfiles', // The first type parameter is the payload type (return data)
  async () => {
    try {
      const response = await fetch('http://localhost:3000/api/bigchaindb/all');
      if (!response.ok) {
        throw new Error('Failed to fetch profiles');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const createProfile = createAsyncThunk(
  'profiles/createProfile',
  async (profileData: ProfileData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'http://localhost:3000/api/bigchaindb/person',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(profileData),
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

// Create a profile slice with actions and reducers
const profileSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProfile.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profiles.push(action.payload); // Add the created profile to the state
        toast('profile created');
        try {
          localStorage.setItem('profiles', JSON.stringify(state.profiles));
        } catch (e) {
          console.error('Error saving user data to localStorage:', e);
        }
      })
      .addCase(createProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = 'Failed to create a new profile';
      })
      .addCase(fetchProfiles.pending, (state) => {
        state.status = 'loading';
        state.error = null; // 'null' should be null without quotes
      })
      .addCase(fetchProfiles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profiles = action.payload;
        try {
          localStorage.setItem('profiles', JSON.stringify(state.profiles));
        } catch (e) {
          console.error('Error saving user data to localStorage:', e);
        }
      })
      .addCase(fetchProfiles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || '';
      });
  },
});
// Export the reducer
export default profileSlice.reducer;
export const selectProfiles = (state: { profile: ProfileState }) =>
  state.profile?.profiles;
