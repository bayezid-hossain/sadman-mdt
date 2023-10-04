'use client';

import React, { useState, FormEvent, useEffect } from 'react';
import Image from 'next/image';
import dmp from '../assets/dmp.png';
import nouka from '../assets/nouka.png';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUserState } from '../redux/AuthSlice';
import toast from 'react-hot-toast';
import { fetchProfiles } from '../redux/ProfileSlice';
import { AppDispatch } from '../redux/Store';

const Login = () => {
  const [email, setEmail] = useState('');
  const [batch, setBatchNo] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  const { push } = useRouter();
  const user = useSelector(selectUserState);
  if (user.token && user.loggedIn) {
    dispatch(fetchProfiles());

    push('/dashboard');
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Construct the login data
    const loginData = {
      email,
      batch,
      password,
    };

    try {
      // Make a POST request to your login API endpoint
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        // Successful login, redirect to the dashboard
        const responseData = await response.json();
        const token = responseData.token;

        // Dispatch the login action with the retrieved token
        dispatch(login({ token }));
        console.log(response.json());

        push('/dashboard');
      } else {
        // Handle authentication error (e.g., incorrect email or password)
        console.error('Login failed');
        toast('Invalid login credentials');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Login error:', error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center bg-slate-500 h-full w-full">
      <div className="flex justify-evenly items-center w-full h-full py-12">
        <Image
          src={nouka}
          width={1000}
          height={1000}
          alt="dmp/image"
          className="object-cover h-[120px] w-[120px] my-2"
        />
        <h1 className="font-semibold text-4xl xsm:text-sm sm:text-xl">
          {' '}
          Bangladesh Police MDT
        </h1>
        <Image
          src={dmp}
          width={1000}
          height={1000}
          alt="dmp/image"
          className="object-cover h-[120px] w-[120px] my-2"
        />
      </div>
      <div className="w-[50%] sm:w-[80%] border border-solid border-slate-800">
        <form onSubmit={handleSubmit} className="p-16 sm:p-0">
          <div className="mb-4 ">
            <label
              className="block text-gray-900 text-lg font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow text-center appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-900 text-lg font-bold mb-2"
              htmlFor="batchNo"
            >
              Batch No
            </label>
            <input
              className="shadow text-center appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="batchNo"
              type="text"
              placeholder="Batch No"
              value={batch}
              onChange={(e) => setBatchNo(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-900 text-lg font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow text-center appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-slate-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
