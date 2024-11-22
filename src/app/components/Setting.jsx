"use client"

import React, { useState } from 'react';
import { FaLanguage, FaCog, FaFont, FaPalette } from 'react-icons/fa';

const Settings = () => {
  const [selectedSetting, setSelectedSetting] = useState('Appearance Settings');
  const [nightMode, setNightMode] = useState(false);

  return (
    <div className="w-[330px] p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <div className="space-y-2">
        <button
          className={`w-full flex items-center text-left p-2 rounded ${selectedSetting === 'Language Settings' ? 'bg-gray-200' : ''}`}
          onClick={() => setSelectedSetting('Language Settings')}
        >
          <FaLanguage className="h-5 w-5 mr-2" />
          Language Settings
        </button>
        <button
          className={`w-full flex items-center text-left p-2 rounded ${selectedSetting === 'General Settings' ? 'bg-gray-200' : ''}`}
          onClick={() => setSelectedSetting('General Settings')}
        >
          <FaCog className="h-5 w-5 mr-2" />
          General Settings
        </button>
        <button
          className={`w-full flex items-center text-left p-2 rounded ${selectedSetting === 'Font Settings' ? 'bg-gray-200' : ''}`}
          onClick={() => setSelectedSetting('Font Settings')}
        >
          <FaFont className="h-5 w-5 mr-2" />
          Font Settings
        </button>
        <button
          className={`w-full flex items-center text-left p-2 rounded ${selectedSetting === 'Appearance Settings' ? 'bg-gray-200' : ''}`}
          onClick={() => setSelectedSetting('Appearance Settings')}
        >
          <FaPalette className="h-5 w-5 mr-2" />
          Appearance Settings
        </button>
      </div>
      {selectedSetting === 'Appearance Settings' && (
        <div className="mt-4">
          <label className="flex items-center">
            <span className="mr-2">Night Mode</span>
            <input
              type="checkbox"
              checked={nightMode}
              onChange={() => setNightMode(!nightMode)}
              className="toggle-checkbox"
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default Settings;
