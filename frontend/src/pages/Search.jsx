import React, { useState, useEffect } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import PlaylistCard from '../components/PlaylistCard';
import { realmCategories, playlists } from '../data/mockData';
import { getFavorites, toggleFavorite, addToRecentlyPlayed } from '../utils/storage';
import { useToast } from '../hooks/use-toast';

const Search = ({ onPlaylistClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setIsSearching(query.length > 0);

    if (query.trim()) {
      const filtered = playlists.filter(
        (playlist) =>
          playlist.title.toLowerCase().includes(query.toLowerCase()) ||
          playlist.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults([]);
    }
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

  return (
    <div className="flex-1 overflow-y-auto pb-64">
      {/* Header */}
      <div className="px-8 py-8">
        <h1 className="text-3xl font-serif text-amber-400 tracking-wider mb-8 drop-shadow-[0_0_20px_rgba(217,119,6,0.5)]">SEARCH</h1>

        {/* Search Input with Glassmorphism */}
        <div className="relative max-w-3xl">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search for bards, songs, or lore..."
            className="w-full bg-black/30 backdrop-blur-md border-2 border-amber-700/50 rounded-lg px-12 py-4 text-amber-400 placeholder-amber-900/50 focus:outline-none focus:border-amber-500 focus:shadow-lg focus:shadow-amber-500/20 transition-all font-serif"
          />
        </div>
      </div>

      {/* Search Results or Browse by Realm */}
      {isSearching ? (
        <div className="px-8">
          <h2 className="text-xl font-serif text-amber-400 mb-6">
            {filteredResults.length > 0
              ? `Found ${filteredResults.length} result${filteredResults.length !== 1 ? 's' : ''}`
              : 'No results found'}
          </h2>
          {filteredResults.length > 0 && (
            <div className="flex gap-6 flex-wrap">
              {filteredResults.map((playlist) => (
                <PlaylistCard
                  key={playlist.id}
                  playlist={playlist}
                  onClick={() => handlePlaylistClick(playlist)}
                  onToggleFavorite={handleToggleFavorite}
                  isFavorite={favorites.includes(playlist.id)}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="px-8">
          <h2 className="text-2xl font-serif text-amber-400 mb-6">BROWSE BY REALM</h2>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {realmCategories.map((category) => (
              <div
                key={category.id}
                className="group relative flex-shrink-0 w-44 cursor-pointer transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative rounded-lg overflow-hidden border-2 border-amber-700/50 bg-black/30 backdrop-blur-md hover:border-amber-500/80 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20">
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                  </div>
                </div>
                <div className="mt-3 px-1">
                  <h3 className="text-amber-400 font-medium text-sm leading-tight">{category.title}</h3>
                  <p className="text-gray-500 text-xs mt-1">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quote */}
      <div className="text-center py-16">
        <p className="text-amber-500/60 text-sm italic tracking-wide">
          "WHEN YOU PLAY THE GAME OF TONES,
        </p>
        <p className="text-amber-500/60 text-sm italic tracking-wide">
          YOU WIN OR YOU SKIP"
        </p>
      </div>
    </div>
  );
};

export default Search;