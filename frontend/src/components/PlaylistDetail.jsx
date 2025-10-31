import React from 'react';
import { X, Play, Heart, MoreVertical, Clock } from 'lucide-react';
import { Button } from './ui/button';

const PlaylistDetail = ({ playlist, onClose, onToggleFavorite, isFavorite }) => {
  const mockSongs = [
    { id: 1, title: 'Game of Thrones Theme', artist: 'Ramin Djawadi', duration: '1:46' },
    { id: 2, title: 'The Rains of Castamere', artist: 'The National', duration: '2:26' },
    { id: 3, title: 'Light of the Seven', artist: 'Ramin Djawadi', duration: '9:59' },
    { id: 4, title: 'The Night King', artist: 'Ramin Djawadi', duration: '3:16' },
    { id: 5, title: 'Mhysa', artist: 'Ramin Djawadi', duration: '7:40' },
    { id: 6, title: 'Winter Has Come', artist: 'Ramin Djawadi', duration: '4:12' },
    { id: 7, title: 'A Lannister Always Pays His Debts', artist: 'Ramin Djawadi', duration: '3:45' },
    { id: 8, title: 'The Winds of Winter', artist: 'Ramin Djawadi', duration: '5:23' }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl border-2 border-amber-700/50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header with Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={playlist.image}
            alt={playlist.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-colors border border-amber-700/50"
          >
            <X className="w-5 h-5 text-amber-500" />
          </button>

          {/* Playlist Info */}
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-4xl font-serif text-amber-400 mb-2">{playlist.title}</h2>
            <p className="text-gray-400 mb-4">{playlist.description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{playlist.songs} songs</span>
              <span>•</span>
              <span>{playlist.duration}</span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="px-6 py-4 flex items-center gap-4 border-b border-amber-900/30">
          <Button className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-6 text-lg">
            <Play className="w-5 h-5 mr-2" fill="white" />
            Play All
          </Button>
          <button
            onClick={onToggleFavorite}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              isFavorite
                ? 'bg-amber-600 text-white'
                : 'bg-black/40 text-gray-400 hover:text-amber-500 border border-amber-700/50'
            }`}
          >
            <Heart className="w-5 h-5" fill={isFavorite ? 'white' : 'none'} />
          </button>
        </div>

        {/* Song List */}
        <div className="overflow-y-auto max-h-96">
          <div className="px-6 py-2 grid grid-cols-12 gap-4 text-xs text-gray-500 uppercase tracking-wider border-b border-amber-900/20">
            <div className="col-span-1">#</div>
            <div className="col-span-6">Title</div>
            <div className="col-span-4">Artist</div>
            <div className="col-span-1 text-right">
              <Clock className="w-4 h-4 inline" />
            </div>
          </div>
          {mockSongs.map((song, index) => (
            <div
              key={song.id}
              className="px-6 py-3 grid grid-cols-12 gap-4 items-center hover:bg-amber-900/10 transition-colors group cursor-pointer"
            >
              <div className="col-span-1 text-gray-500 group-hover:text-amber-500">{index + 1}</div>
              <div className="col-span-6">
                <div className="text-amber-400 font-medium">{song.title}</div>
              </div>
              <div className="col-span-4 text-gray-400 text-sm">{song.artist}</div>
              <div className="col-span-1 text-right">
                <span className="text-gray-500 text-sm">{song.duration}</span>
                <button className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreVertical className="w-4 h-4 text-gray-400 hover:text-amber-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetail;