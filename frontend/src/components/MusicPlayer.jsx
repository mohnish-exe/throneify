import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, List, Maximize2, Volume2, VolumeX, Repeat, Shuffle } from 'lucide-react';

const MusicPlayer = ({ currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [waveformHeights, setWaveformHeights] = useState([]);

  const defaultSong = {
    title: 'Game of Thrones Theme',
    artist: 'Ramin Djawadi',
    album: 'Game of Thrones: Season 1'
  };

  const song = currentSong || defaultSong;

  // Generate animated waveform
  useEffect(() => {
    const heights = Array.from({ length: 100 }, () => Math.random() * 60 + 20);
    setWaveformHeights(heights);

    if (isPlaying) {
      const interval = setInterval(() => {
        setWaveformHeights(prev => prev.map(() => Math.random() * 60 + 20));
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  // Simulate progress
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => (prev >= 100 ? 0 : prev + 0.5));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-16 left-0 right-0 bg-black/70 backdrop-blur-xl border-t border-amber-900/40 shadow-2xl z-30">
      {/* Waveform Progress Bar */}
      <div className="relative h-24 overflow-hidden">
        {/* Waveform Background */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="w-full h-full flex items-end justify-center gap-0.5">
            {waveformHeights.map((height, i) => {
              const isActive = (i / 100) * 100 < progress;
              return (
                <div
                  key={i}
                  className={`w-1 transition-all duration-200 ${
                    isActive ? 'bg-gradient-to-t from-orange-500 via-amber-500 to-amber-300' : 'bg-gray-700/50'
                  }`}
                  style={{ 
                    height: `${height}%`,
                    boxShadow: isActive ? '0 0 8px rgba(251, 191, 36, 0.6)' : 'none'
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Song Title Overlay */}
        <div className="absolute left-8 bottom-4 flex items-center gap-3 z-10">
          <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-800 rounded flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </svg>
          </div>
          <div>
            <div className="text-amber-400 text-sm font-medium">{song.title}</div>
            <div className="text-gray-400 text-xs">{song.artist}</div>
          </div>
        </div>

        {/* Home Label */}
        <div className="absolute left-8 top-4 text-amber-500 font-serif text-lg">/Home</div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between px-8 py-4 bg-black/90">
        <div className="flex items-center gap-3 flex-1">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </svg>
          </div>
          <div className="max-w-xs">
            <div className="text-white text-sm font-medium truncate">{song.artist} - {song.title}</div>
          </div>
        </div>

        {/* Center Controls */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsShuffle(!isShuffle)}
              className={`transition-colors ${
                isShuffle ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
              }`}
            >
              <Shuffle className="w-4 h-4" />
            </button>
            <button className="text-gray-400 hover:text-amber-500 transition-colors transform hover:scale-110">
              <SkipBack className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-lg hover:shadow-amber-500/50"
            >
              {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white ml-0.5" />}
            </button>
            <button className="text-gray-400 hover:text-amber-500 transition-colors transform hover:scale-110">
              <SkipForward className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsRepeat(!isRepeat)}
              className={`transition-colors ${
                isRepeat ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
              }`}
            >
              <Repeat className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>1:23</span>
            <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span>3:45</span>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <button className="text-gray-400 hover:text-amber-500 transition-colors">
            <List className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="text-gray-400 hover:text-amber-500 transition-colors"
            >
              {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                setVolume(Number(e.target.value));
                if (Number(e.target.value) > 0) setIsMuted(false);
              }}
              className="w-24 h-1 bg-gray-700 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, rgb(217, 119, 6) 0%, rgb(217, 119, 6) ${isMuted ? 0 : volume}%, rgb(55, 65, 81) ${isMuted ? 0 : volume}%, rgb(55, 65, 81) 100%)`
              }}
            />
          </div>
          <button className="text-gray-400 hover:text-amber-500 transition-colors">
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;