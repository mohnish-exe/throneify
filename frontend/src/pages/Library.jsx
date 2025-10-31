import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2 } from 'lucide-react';
import PlaylistCard from '../components/PlaylistCard';
import { playlists } from '../data/mockData';
import { getStoredPlaylists, savePlaylist, deletePlaylist, getFavorites, toggleFavorite, addToRecentlyPlayed } from '../utils/storage';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';

const Library = ({ onPlaylistClick }) => {
  const [activeTab, setActiveTab] = useState('playlists');
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const { toast } = useToast();

  const tabs = [
    { id: 'playlists', label: 'Playlists' },
    { id: 'bards', label: 'Bards' },
    { id: 'tomes', label: 'Tomes' },
    { id: 'oaths', label: 'Oaths' }
  ];

  useEffect(() => {
    const stored = getStoredPlaylists();
    setUserPlaylists(stored);
    setFavorites(getFavorites());
  }, []);

  const handleCreatePlaylist = () => {
    const newPlaylist = {
      id: `custom-${Date.now()}`,
      title: 'New Playlist',
      description: 'Custom playlist',
      image: 'https://images.unsplash.com/photo-1588260275829-5abb6945c6be?w=400',
      songs: 0,
      duration: '0m',
      house: 'custom'
    };
    const updated = savePlaylist(newPlaylist);
    setUserPlaylists(updated);
    
    toast({
      title: 'Playlist Created',
      description: 'New playlist has been created',
      duration: 2000
    });
  };

  const handleDeletePlaylist = (playlistId) => {
    const updated = deletePlaylist(playlistId);
    setUserPlaylists(updated);
    
    toast({
      title: 'Playlist Deleted',
      description: 'Playlist has been removed',
      duration: 2000
    });
  };

  const handleToggleFavorite = (playlistId) => {
    const result = toggleFavorite(playlistId);
    setFavorites(result.favorites);
    
    toast({
      title: result.isFavorite ? 'Added to Favorites' : 'Removed from Favorites',
      duration: 2000
    });
  };

  const handlePlaylistClick = (playlist) => {
    addToRecentlyPlayed(playlist);
    onPlaylistClick(playlist);
  };

  const handleContextMenu = (e, playlist) => {
    if (playlist.house === 'custom') {
      const confirmed = window.confirm('Delete this playlist?');
      if (confirmed) {
        handleDeletePlaylist(playlist.id);
      }
    }
  };

  const displayPlaylists = activeTab === 'playlists' ? [...playlists, ...userPlaylists] : playlists.slice(0, 8);
  const favoritePlaylists = displayPlaylists.filter(p => favorites.includes(p.id));

  return (
    <div className="flex-1 overflow-y-auto pb-64">
      {/* Header */}
      <div className="text-center py-16">
        <h1 className="text-5xl md:text-6xl font-serif text-amber-400 tracking-wider mb-2 drop-shadow-[0_0_20px_rgba(217,119,6,0.5)]">
          MUSIC BEY<span className="inline-block">O</span>NDS PLAYLISTS
        </h1>
      </div>

      {/* Filter Tabs */}
      <div className="px-8 mb-8">
        <div className="flex gap-4 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg shadow-amber-500/30'
                  : 'bg-black/30 backdrop-blur-md text-amber-700 border border-amber-700/50 hover:border-amber-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Favorites Section */}
      {favoritePlaylists.length > 0 && activeTab === 'playlists' && (
        <div className="px-8 mb-12">
          <h2 className="text-xl font-serif text-amber-400 mb-4">Your Favorites</h2>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {favoritePlaylists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                playlist={playlist}
                onClick={() => handlePlaylistClick(playlist)}
                onToggleFavorite={handleToggleFavorite}
                isFavorite={true}
                onContextMenu={handleContextMenu}
              />
            ))}
          </div>
        </div>
      )}

      {/* Playlists Grid */}
      <div className="px-8 mb-12">
        <h2 className="text-xl font-serif text-amber-400 mb-4">All Playlists</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {/* Create New Playlist Card */}
          {activeTab === 'playlists' && (
            <div
              onClick={handleCreatePlaylist}
              className="group relative cursor-pointer transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative rounded-lg overflow-hidden border-2 border-amber-700/50 bg-black/30 backdrop-blur-md hover:border-amber-500/80 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20">
                <div className="aspect-[3/4] flex items-center justify-center bg-gradient-to-br from-amber-900/20 to-black">
                  <Plus className="w-16 h-16 text-amber-600 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="mt-3 px-1">
                <h3 className="text-amber-400 font-medium text-sm text-center">Create New Playlist</h3>
              </div>
            </div>
          )}

          {displayPlaylists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              playlist={playlist}
              onClick={() => handlePlaylistClick(playlist)}
              onToggleFavorite={handleToggleFavorite}
              isFavorite={favorites.includes(playlist.id)}
              onContextMenu={handleContextMenu}
            />
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="text-center py-16">
        <p className="text-amber-500/60 text-sm italic tracking-wide">
          "WHEN YOU PLAY THE GAME OF TONES,
        </p>
        <p className="text-amber-500/60 text-sm italic tracking-wide">
          YOU WIN OR YOU SKIP"
        </p>
        <p className="text-gray-600 text-xs mt-2">- MELN∆NIEHT</p>
      </div>
    </div>
  );
};

export default Library;