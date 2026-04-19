export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  cover_image: string | null;
  content: string;
  category: string | null;
  author: string | null;
  published_at: string | null;
  is_published: boolean;
  created_at: string;
}

export interface Match {
  id: string;
  date: string;
  category: string;
  opponent: string;
  location: string | null;
  home_away: "home" | "away" | null;
  result: string | null;
  notes: string | null;
  created_at: string;
}

export interface Registration {
  id: string;
  player_name: string;
  birth_date: string | null;
  category: string;
  parent_name: string;
  parent_email: string;
  parent_phone: string;
  school: string | null;
  medical_notes: string | null;
  accepted_terms: boolean;
  status: "pending" | "approved" | "rejected";
  created_at: string;
}

export interface RegistrationInput {
  player_name: string;
  birth_date?: string;
  category: string;
  parent_name: string;
  parent_email: string;
  parent_phone: string;
  school?: string;
  medical_notes?: string;
  accepted_terms: boolean;
}
