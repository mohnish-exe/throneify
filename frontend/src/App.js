import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';
import PlaylistDetail from './components/PlaylistDetail';
import SnowEffect from './components/SnowEffect';
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';
import { locations, characters } from './data/mockData';
import { Menu } from 'lucide-react';
import { Toaster } from './components/ui/toaster';
import { toggleFavorite, getFavorites } from './utils/storage';

function App() {
  const [currentLocation, setCurrentLocation] = useState(locations[0]);
  const [currentCharacter, setCurrentCharacter] = useState(characters[0]);
  const [currentSong, setCurrentSong] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [favorites, setFavorites] = useState(getFavorites());

  const handlePlaylistClick = (playlist) => {
    setSelectedPlaylist(playlist);
    setCurrentSong({
      title: playlist.title,
      artist: 'Various Artists',
      album: playlist.house
    });
  };

  const handleToggleFavorite = (playlistId) => {
    const result = toggleFavorite(playlistId);
    setFavorites(result.favorites);
  };

  return (
    <BrowserRouter>
      <div className="h-screen w-screen overflow-hidden animated-bg">
        {/* Snow Effect */}
        <SnowEffect />

        {/* Map Background Effect */}
        <div className="map-background" />

        {/* Main Container */}
        <div className="relative h-full flex">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="fixed top-4 left-4 z-50 lg:hidden bg-black/60 backdrop-blur-sm p-2 rounded-lg border border-amber-900/30 hover:bg-black/80 transition-colors"
          >
            <Menu className="w-6 h-6 text-amber-500" />
          </button>

          {/* Sidebar */}
          <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative z-40 transition-transform duration-300`}>
            <Sidebar
              location={currentLocation}
              character={currentCharacter}
              locations={locations}
              characters={characters}
              onLocationChange={setCurrentLocation}
              onCharacterChange={setCurrentCharacter}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Top Header with Glassmorphism */}
            <header className="bg-black/30 backdrop-blur-xl border-b border-amber-900/40 px-8 py-4 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-serif text-amber-400 tracking-wider drop-shadow-[0_0_10px_rgba(217,119,6,0.5)]">THRONEIFY</h1>
              </div>
              <div className="hidden md:block text-amber-500 text-sm uppercase tracking-wider">
                YOUR THRONES PLAYLISTS
              </div>
              <div className="flex items-center gap-4">
                <button className="text-gray-400 hover:text-amber-500 transition-colors transform hover:scale-110">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-amber-500 transition-colors transform hover:scale-110">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </header>

            {/* Page Content */}
            <Routes>
              <Route path="/" element={<Home onPlaylistClick={handlePlaylistClick} />} />
              <Route path="/search" element={<Search onPlaylistClick={handlePlaylistClick} />} />
              <Route path="/library" element={<Library onPlaylistClick={handlePlaylistClick} />} />
              <Route path="/thrones-mix" element={<Home onPlaylistClick={handlePlaylistClick} />} />
            </Routes>
          </div>
        </div>

        {/* Music Player */}
        <MusicPlayer currentSong={currentSong} />

        {/* Playlist Detail Modal */}
        {selectedPlaylist && (
          <PlaylistDetail
            playlist={selectedPlaylist}
            onClose={() => setSelectedPlaylist(null)}
            onToggleFavorite={handleToggleFavorite}
            isFavorite={favorites.includes(selectedPlaylist.id)}
          />
        )}

        {/* Toast Notifications */}
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;