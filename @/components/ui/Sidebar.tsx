// components/Sidebar.tsx
import React from 'react';
import { Link } from '@remix-run/react';

const Sidebar = () => {
  return (
    <div className="sidebar bg-gray-800 text-white w-64 h-full">
      <div className="sidebar-header p-4">
        <h2>Sidebar</h2>
      </div>
      <ul className="sidebar-menu p-4">
        <li className="sidebar-item">
          <Link to="/home" className="sidebar-link">Home</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/about" className="sidebar-link">About</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/contact" className="sidebar-link">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;