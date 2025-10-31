// Browser storage utilities for playlists

const STORAGE_KEY = 'throneify_playlists';
const FAVORITES_KEY = 'throneify_favorites';
const RECENT_KEY = 'throneify_recent';

export const getStoredPlaylists = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return [];
  }
};

export const savePlaylist = (playlist) => {
  try {
    const playlists = getStoredPlaylists();
    const exists = playlists.find(p => p.id === playlist.id);
    
    if (exists) {
      const updated = playlists.map(p => p.id === playlist.id ? playlist : p);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    } else {
      const updated = [...playlists, playlist];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    }
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return getStoredPlaylists();
  }
};

export const deletePlaylist = (playlistId) => {
  try {
    const playlists = getStoredPlaylists();
    const filtered = playlists.filter(p => p.id !== playlistId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return filtered;
  } catch (error) {
    console.error('Error deleting from localStorage:', error);
    return getStoredPlaylists();
  }
};

export const clearAllPlaylists = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return [];
  } catch (error) {
    console.error('Error clearing localStorage:', error);
    return getStoredPlaylists();
  }
};

// Favorites Management
export const getFavorites = () => {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading favorites:', error);
    return [];
  }
};

export const toggleFavorite = (playlistId) => {
  try {
    const favorites = getFavorites();
    const exists = favorites.includes(playlistId);
    
    if (exists) {
      const updated = favorites.filter(id => id !== playlistId);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
      return { favorites: updated, isFavorite: false };
    } else {
      const updated = [...favorites, playlistId];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
      return { favorites: updated, isFavorite: true };
    }
  } catch (error) {
    console.error('Error toggling favorite:', error);
    return { favorites: getFavorites(), isFavorite: false };
  }
};

// Recently Played Management
export const getRecentlyPlayed = () => {
  try {
    const stored = localStorage.getItem(RECENT_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading recently played:', error);
    return [];
  }
};

export const addToRecentlyPlayed = (playlist) => {
  try {
    const recent = getRecentlyPlayed();
    const filtered = recent.filter(p => p.id !== playlist.id);
    const updated = [playlist, ...filtered].slice(0, 10); // Keep only 10 recent
    localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
    return updated;
  } catch (error) {
    console.error('Error adding to recently played:', error);
    return getRecentlyPlayed();
  }
};