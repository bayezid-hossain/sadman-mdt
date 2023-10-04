// authSlice.js
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface userState {
  token: string;
  loggedIn: boolean;
}

let userData;
if (typeof window !== 'undefined') {
  userData = localStorage.getItem('user');
}
const initialState: userState = {
  token: userData ? JSON.parse(userData).token : '',
  loggedIn: userData ? JSON.parse(userData).loggedIn : false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.loggedIn = true; // Set the authenticated user
      try {
        localStorage.setItem('user', JSON.stringify(state));
      } catch (e) {
        console.error('Error saving user data to localStorage:', e);
      }
    },
    logout: (state) => {
      state.token = '';
      state.loggedIn = false; // Clear the authenticated user
      try {
        localStorage.removeItem('user'); // Remove user data from localStorage on logout
      } catch (e) {
        console.error('Error removing user data from localStorage:', e);
      }
    },
  },
});

export const selectUserState = (state: { auth: userState }) => state.auth;
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
