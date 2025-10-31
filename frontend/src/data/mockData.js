// Mock data for Throneify music streaming platform

export const houses = [
  { id: 'stark', name: 'House Stark', region: 'The North', words: 'Winter Is Coming' },
  { id: 'targaryen', name: 'House Targaryen', region: 'Dragonstone', words: 'Fire and Blood' },
  { id: 'lannister', name: 'House Lannister', region: 'The Westerlands', words: 'Hear Me Roar' },
  { id: 'baratheon', name: 'House Baratheon', region: 'The Stormlands', words: 'Ours is the Fury' },
  { id: 'arryn', name: 'House Arryn', region: 'The Vale', words: 'As High as Honor' },
  { id: 'nightswatch', name: "The Night's Watch", region: 'The Wall', words: 'I Am the Sword in the Darkness' }
];

export const playlists = [
  {
    id: 'stark-winter',
    title: 'House Stark - Winter Lo-Fi',
    house: 'stark',
    description: 'Chill beats from the North',
    image: 'https://images.unsplash.com/photo-1588167056547-c183313da47c?w=400',
    songs: 15,
    duration: '1h 23m'
  },
  {
    id: 'targaryen-fire',
    title: 'House Targaryen - Fire Beats',
    house: 'targaryen',
    description: 'Dragon fire and epic orchestral',
    image: 'https://images.unsplash.com/photo-1610926597998-fc7f2c1b89b0?w=400',
    songs: 20,
    duration: '1h 45m'
  },
  {
    id: 'nightswatch-chill',
    title: "The Night's Watch - Oathbound Chill",
    house: 'nightswatch',
    description: 'Dark ambient soundscapes',
    image: 'https://images.unsplash.com/photo-1650735962825-eb102c69e89b?w=400',
    songs: 18,
    duration: '1h 56m'
  },
  {
    id: 'arryn-soaring',
    title: 'House Arryn - Soaring Melodies',
    house: 'arryn',
    description: 'Uplifting orchestral themes',
    image: 'https://images.unsplash.com/photo-1567520000794-9d4f7e1b89d1?w=400',
    songs: 12,
    duration: '52m'
  },
  {
    id: 'lannister-gold',
    title: "Lannister's Gold - Fire Ballads",
    house: 'lannister',
    description: 'Rich and powerful melodies',
    image: 'https://images.unsplash.com/photo-1710071576368-fe25575cc5dd?w=400',
    songs: 16,
    duration: '1h 12m'
  },
  {
    id: 'winters-embrace',
    title: "Winter's Embrace - Winter Lo-Fi",
    house: 'stark',
    description: 'Peaceful northern soundscapes',
    image: 'https://images.unsplash.com/photo-1691433790054-5b3821080f4f?w=400',
    songs: 22,
    duration: '2h 05m'
  },
  {
    id: 'whispers-love',
    title: 'Whispers Love - Did Beats',
    house: 'nightswatch',
    description: 'Mysterious dark beats',
    image: 'https://images.unsplash.com/photo-1684829352131-66d7617e392d?w=400',
    songs: 14,
    duration: '58m'
  },
  {
    id: 'fire-blood',
    title: 'Fire & Blood Tunes',
    house: 'targaryen',
    description: 'Epic dragon battle themes',
    image: 'https://images.unsplash.com/photo-1760030427721-38c1bac5ac30?w=400',
    songs: 19,
    duration: '1h 38m'
  }
];

export const realmCategories = [
  {
    id: 'battle',
    title: 'Battle Anthems',
    description: 'Epic war drums and heroic themes',
    image: 'https://images.unsplash.com/photo-1661096251466-1923c20c9549?w=400',
    songs: 45
  },
  {
    id: 'courtly',
    title: 'Courtly Love - Love Songs',
    description: 'Romantic ballads and gentle melodies',
    image: 'https://images.unsplash.com/photo-1626872296296-a1a2053c1cee?w=400',
    songs: 32
  },
  {
    id: 'whispers',
    title: 'Whispers - Un Iclouns',
    description: 'Mysterious and haunting sounds',
    image: 'https://images.unsplash.com/photo-1684829352131-66d7617e392d?w=400',
    songs: 28
  },
  {
    id: 'feast',
    title: "Feast 'Iceo - Feast Music",
    description: 'Celebratory tunes and drinking songs',
    image: 'https://images.unsplash.com/photo-1695453933208-7145817812e7?w=400',
    songs: 38
  },
  {
    id: 'sunset',
    title: 'Sunset - Melodies',
    description: 'Peaceful evening soundscapes',
    image: 'https://images.unsplash.com/photo-1713457153905-6edeac568738?w=400',
    songs: 25
  }
];

export const songs = [
  {
    id: 'song-1',
    title: 'Game of Thrones Theme',
    artist: 'Ramin Djawadi',
    album: 'Game of Thrones: Season 1',
    duration: '1:46',
    playlistId: 'stark-winter'
  },
  {
    id: 'song-2',
    title: 'The Rains of Castamere',
    artist: 'The National',
    album: 'Game of Thrones: Season 2',
    duration: '2:26',
    playlistId: 'lannister-gold'
  },
  {
    id: 'song-3',
    title: 'Light of the Seven',
    artist: 'Ramin Djawadi',
    album: 'Game of Thrones: Season 6',
    duration: '9:59',
    playlistId: 'targaryen-fire'
  },
  {
    id: 'song-4',
    title: 'The Night King',
    artist: 'Ramin Djawadi',
    album: 'Game of Thrones: Season 8',
    duration: '3:16',
    playlistId: 'nightswatch-chill'
  },
  {
    id: 'song-5',
    title: 'Mhysa',
    artist: 'Ramin Djawadi',
    album: 'Game of Thrones: Season 3',
    duration: '7:40',
    playlistId: 'targaryen-fire'
  }
];

export const locations = [
  { id: 'winterfell', name: 'WINTERFELL', region: "KING'S LANDING" },
  { id: 'kings-landing', name: "KING'S LANDING", region: 'WINTERFELL' }
];

export const characters = [
  { id: 'emarion', name: 'EMARION', time: '04:30' },
  { id: 'jon-snow', name: 'JON SNOW', time: '23:45' },
  { id: 'daenerys', name: 'DAENERYS', time: '18:20' },
  { id: 'tyrion', name: 'TYRION', time: '12:15' }
];

export const filterTabs = [
  { id: 'playlists', label: 'Playlists' },
  { id: 'bards', label: 'Bards' },
  { id: 'tomes', label: 'Tomes' },
  { id: 'oaths', label: 'Oaths' }
];