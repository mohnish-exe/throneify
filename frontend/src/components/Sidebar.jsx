import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Library, Settings } from 'lucide-react';

const Sidebar = ({ location, character, onLocationChange, onCharacterChange, locations, characters }) => {
  const currentPath = useLocation().pathname;

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/search', icon: Search, label: 'Search' },
    { path: '/library', icon: Library, label: 'Library' },
    { path: '/thrones-mix', icon: Settings, label: 'Thrones Mix' }
  ];

  return (
    <div className="w-64 bg-black/40 backdrop-blur-sm border-r border-amber-900/30 flex flex-col">
      {/* Location Header */}
      <div className="p-6 border-b border-amber-900/30">
        <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
          <div className="w-4 h-4">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </svg>
          </div>
          <span className="uppercase tracking-wider">WINTERFELL / KING'S LANDING</span>
        </div>
      </div>

      {/* Character Selector */}
      <div className="p-6 border-b border-amber-900/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">{character.name.charAt(0)}</span>
          </div>
          <div className="flex-1">
            <div className="text-gray-400 text-xs uppercase tracking-wider">{character.name}</div>
            <div className="text-amber-500 text-sm">{character.time}</div>
          </div>
          <div className="w-8 h-5 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full relative cursor-pointer">
            <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPath === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all duration-200 ${
                isActive
                  ? 'bg-amber-900/30 text-amber-500 border-l-4 border-amber-500'
                  : 'text-gray-400 hover:text-amber-500 hover:bg-amber-900/10'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;