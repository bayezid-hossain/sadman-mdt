'use client';
import React from 'react';
import Button from './Button';

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between h-screen flex-1 w-full background mr-6 ml-2 my-4 rounded-lg">
      <div className="flex flex-col justify-start items-center my-12 gap-8">
        <Button routeLink="/dashboard" text="Dashboard" />
        <Button routeLink="/dashboard/profiles" text="Profiles" />
        <Button routeLink="/dashboard/incidents" text="Incidents" />
        <Button routeLink="/dashboard/reports" text="Reports" />
      </div>
      <div className="flex flex-col justify-end items-center my-12 gap-6">
        <Button routeLink="/dashboard/logs" text="Staff Logs" />
        <Button routeLink="/exit" text="Exit" />
      </div>
    </div>
  );
};

export default Sidebar;
