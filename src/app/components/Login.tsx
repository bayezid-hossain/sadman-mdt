'use client';

import React, { useState, FormEvent } from 'react';
import Image from 'next/image';
import dmp from '../assets/dmp.png';
import nouka from '../assets/nouka.png';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [batchNo, setBatchNo] = useState('');
  const [password, setPassword] = useState('');
  const { push } = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform login logic with email, batchNo, and password
    console.log('Email:', email);
    console.log('Batch No:', batchNo);
    console.log('Password:', password);

    push('/dashboard');
    // You can send this data to an API or perform any other necessary action here
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
              value={batchNo}
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
