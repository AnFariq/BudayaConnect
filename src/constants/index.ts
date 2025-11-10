export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export const APP_CONFIG = {
  name: 'BudayaConnect',
  description: 'Platform budaya Indonesia yang menghubungkan warisan budaya dengan generasi masa kini',
  version: '1.0.0',
} as const;

export const ROUTES = {
  HOME: '/',
  CULTURE_DIRECTORY: '/budaya',
  MAP: '/peta',
  EVENTS: '/acara',
  COMMUNITY: '/komunitas',
  PROFILE: '/profil',
  LOGIN: '/masuk',
  REGISTER: '/daftar',
} as const;

export const CULTURE_CATEGORIES = [
  { value: 'tradition', label: 'Tradisi' },
  { value: 'art', label: 'Seni' },
  { value: 'music', label: 'Musik' },
  { value: 'dance', label: 'Tari' },
  { value: 'food', label: 'Kuliner' },
  { value: 'craft', label: 'Kerajinan' },
  { value: 'language', label: 'Bahasa' },
] as const;

export const PROVINCES = [
  'Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Riau', 'Kepulauan Riau', 
  'Jambi', 'Bengkulu', 'Sumatera Selatan', 'Lampung', 'Bangka Belitung',
  'DKI Jakarta', 'Jawa Barat', 'Banten', 'Jawa Tengah', 'DI Yogyakarta',
  'Jawa Timur', 'Bali', 'Nusa Tenggara Barat', 'Nusa Tenggara Timur',
  'Kalimantan Barat', 'Kalimantan Tengah', 'Kalimantan Selatan', 'Kalimantan Timur',
  'Kalimantan Utara', 'Sulawesi Utara', 'Gorontalo', 'Sulawesi Tengah',
  'Sulawesi Barat', 'Sulawesi Selatan', 'Sulawesi Tenggara', 'Maluku',
  'Maluku Utara', 'Papua Barat', 'Papua'
] as const;