import React, { useState } from 'react';
import { Play, Heart, MoreVertical } from 'lucide-react';

const PlaylistCard = ({ playlist, onClick, onToggleFavorite, isFavorite, onContextMenu }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onContextMenu={(e) => {
        e.preventDefault();
        onContextMenu && onContextMenu(e, playlist);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex-shrink-0 w-44 cursor-pointer transition-all duration-300 hover:-translate-y-2"
    >
      {/* Card Container with Glassmorphism */}
      <div className="relative rounded-lg overflow-hidden border-2 border-amber-700/50 bg-black/30 backdrop-blur-md hover:border-amber-500/80 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20">
        {/* Image */}
        <div className="aspect-[3/4] overflow-hidden relative">
          <img
            src={playlist.image}
            alt={playlist.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
          
          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite && onToggleFavorite(playlist.id);
            }}
            className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              isFavorite
                ? 'bg-amber-600 text-white scale-100'
                : 'bg-black/60 text-gray-400 scale-0 group-hover:scale-100'
            } backdrop-blur-sm border border-amber-700/50`}
          >
            <Heart className="w-4 h-4" fill={isFavorite ? 'white' : 'none'} />
          </button>
          
          {/* Play Button Overlay */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-500 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-amber-500/50">
              <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
            </div>
          </div>
        </div>
      </div>

      {/* Title with Glow Effect */}
      <div className="mt-3 px-1">
        <h3 className="text-amber-400 font-medium text-sm leading-tight group-hover:text-amber-300 transition-colors">
          {playlist.title}
        </h3>
        <p className="text-gray-500 text-xs mt-1">{playlist.description}</p>
      </div>
    </div>
  );
};

export default PlaylistCard;