// Room Types
export interface Room {
  id: number;
  name: string;
  description: string;
  image: string;
  created_at: string;
  updated_at: string;
  tags: TagItem[];
}

export interface TagItem {
  id: number;
  tag: string;
  room: number;
}

// Filter Types
export interface FilterOptions {
  tags: string[];
  searchTerm: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface RoomsResponse {
  results: Room[];
  count: number;
  next: string | null;
  previous: string | null;
}

// Component Prop Types
export interface RoomCardProps {
  room: Room;
  onTagClick?: (tag: string) => void;
}

export interface FilterSectionProps {
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export interface SpacesAvailableProps {
  selectedTags: string[];
  rooms: Room[];
  searchTerm: string;
}