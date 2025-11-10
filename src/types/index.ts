export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin' | 'contributor';
  createdAt: string;
  updatedAt: string;
}

export interface Culture {
  id: string;
  title: string;
  description: string;
  category: 'tradition' | 'art' | 'music' | 'dance' | 'food' | 'craft' | 'language';
  location: Location;
  images: string[];
  videos?: string[];
  tags: string[];
  author: User;
  createdAt: string;
  updatedAt: string;
}

export interface Location {
  id: string;
  name: string;
  province: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: Location;
  images: string[];
  organizer: string;
  ticketUrl?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: User;
  category: string;
  tags: string[];
  readTime: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface Community {
  id: string;
  name: string;
  description: string;
  avatar?: string;
  members: User[];
  posts: CommunityPost[];
  createdAt: string;
  updatedAt: string;
}

export interface CommunityPost {
  id: string;
  title: string;
  content: string;
  author: User;
  images?: string[];
  likes: number;
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: string;
  updatedAt: string;
}