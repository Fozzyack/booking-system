// API Constants
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
export const API_ENDPOINTS = {
  rooms: '/rooms/',
  tags: '/tags/',
} as const;

// UI Constants
export const ROOMS_PER_PAGE = 12;
export const MAX_TAGS_DISPLAY = 3;

// Filter Constants
export const AVAILABLE_TAGS = [
  'High-Speed Wifi',
  'Meeting Rooms',
  'Quiet Zones', 
  'Pet Friendly',
  'Dual Monitors',
  'Whiteboard'
] as const;

// Image Constants
export const DEFAULT_ROOM_IMAGE = '/placeholder-room.jpg';
export const IMAGE_FALLBACK = '/image-fallback.svg';

// Date/Time Constants
export const DATE_FORMAT = 'MMM dd, yyyy';
export const TIME_FORMAT = 'h:mm a';

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Unable to connect to server',
  NOT_FOUND: 'Room not found',
  SERVER_ERROR: 'Server error occurred',
  VALIDATION_ERROR: 'Please check your input',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  ROOM_CREATED: 'Room created successfully',
  ROOM_UPDATED: 'Room updated successfully',
  ROOM_DELETED: 'Room deleted successfully',
} as const;

// Loading States
export const LOADING_MESSAGES = {
  FETCHING_ROOMS: 'Loading rooms...',
  CREATING_ROOM: 'Creating room...',
  UPDATING_ROOM: 'Updating room...',
  DELETING_ROOM: 'Deleting room...',
} as const;