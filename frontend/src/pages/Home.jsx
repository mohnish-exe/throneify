import React, { useState, useEffect } from 'react';
import PlaylistCard from '../components/PlaylistCard';
import { playlists } from '../data/mockData';
import { getFavorites, toggleFavorite, getRecentlyPlayed, addToRecentlyPlayed } from '../utils/storage';
import { useToast } from '../hooks/use-toast';

const Home = ({ onPlaylistClick }) => {
  const [favorites, setFavorites] = useState([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const { toast } = useToast();
  const trendingPlaylists = playlists.slice(0, 6);

  useEffect(() => {
    setFavorites(getFavorites());
    setRecentlyPlayed(getRecentlyPlayed());
  }, []);

  const handleToggleFavorite = (playlistId) => {
    const result = toggleFavorite(playlistId);
    setFavorites(result.favorites);
    
    toast({
      title: result.isFavorite ? 'Added to Favorites' : 'Removed from Favorites',
      description: result.isFavorite ? 'Playlist saved to your favorites' : 'Playlist removed from favorites',
      duration: 2000
    });
  };

  const handlePlaylistClick = (playlist) => {
    const updated = addToRecentlyPlayed(playlist);
    setRecentlyPlayed(updated);
    onPlaylistClick(playlist);
  };

  return (
    <div className="flex-1 overflow-y-auto pb-64">
      {/* Header */}
      <div className="text-center py-16">
        <h1 className="text-5xl md:text-6xl font-serif text-amber-400 tracking-wider mb-2 drop-shadow-[0_0_20px_rgba(217,119,6,0.5)]">
          MUSIC BEY<span className="inline-block">O</span>ND THE WALL
        </h1>
      </div>

      {/* Recently Played Section */}
      {recentlyPlayed.length > 0 && (
        <div className="px-8 mb-12">
          <h2 className="text-2xl font-serif text-amber-400 mb-6">Recently Played</h2>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {recentlyPlayed.slice(0, 5).map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                playlist={playlist}
                onClick={() => handlePlaylistClick(playlist)}
                onToggleFavorite={handleToggleFavorite}
                isFavorite={favorites.includes(playlist.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Trending Section */}
      <div className="px-8 mb-12">
        <h2 className="text-2xl font-serif text-amber-400 mb-6">Trending House Playlists</h2>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {trendingPlaylists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              playlist={playlist}
              onClick={() => handlePlaylistClick(playlist)}
              onToggleFavorite={handleToggleFavorite}
              isFavorite={favorites.includes(playlist.id)}
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

export default Home;