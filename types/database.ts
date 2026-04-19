export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.5";
  };
  public: {
    Tables: {
      matches: {
        Row: {
          category: string;
          created_at: string | null;
          date: string;
          home_away: string | null;
          id: string;
          location: string | null;
          notes: string | null;
          opponent: string;
          result: string | null;
        };
        Insert: {
          category: string;
          created_at?: string | null;
          date: string;
          home_away?: string | null;
          id?: string;
          location?: string | null;
          notes?: string | null;
          opponent: string;
          result?: string | null;
        };
        Update: {
          category?: string;
          created_at?: string | null;
          date?: string;
          home_away?: string | null;
          id?: string;
          location?: string | null;
          notes?: string | null;
          opponent?: string;
          result?: string | null;
        };
        Relationships: [];
      };
      posts: {
        Row: {
          author: string | null;
          category: string | null;
          content: string;
          cover_image: string | null;
          created_at: string | null;
          excerpt: string | null;
          id: string;
          is_published: boolean | null;
          published_at: string | null;
          slug: string;
          title: string;
        };
        Insert: {
          author?: string | null;
          category?: string | null;
          content: string;
          cover_image?: string | null;
          created_at?: string | null;
          excerpt?: string | null;
          id?: string;
          is_published?: boolean | null;
          published_at?: string | null;
          slug: string;
          title: string;
        };
        Update: {
          author?: string | null;
          category?: string | null;
          content?: string;
          cover_image?: string | null;
          created_at?: string | null;
          excerpt?: string | null;
          id?: string;
          is_published?: boolean | null;
          published_at?: string | null;
          slug?: string;
          title?: string;
        };
        Relationships: [];
      };
      registrations: {
        Row: {
          accepted_terms: boolean;
          birth_date: string | null;
          category: string;
          created_at: string | null;
          id: string;
          medical_notes: string | null;
          parent_email: string;
          parent_name: string;
          parent_phone: string;
          player_name: string;
          school: string | null;
          status: string | null;
        };
        Insert: {
          accepted_terms?: boolean;
          birth_date?: string | null;
          category: string;
          created_at?: string | null;
          id?: string;
          medical_notes?: string | null;
          parent_email: string;
          parent_name: string;
          parent_phone: string;
          player_name: string;
          school?: string | null;
          status?: string | null;
        };
        Update: {
          accepted_terms?: boolean;
          birth_date?: string | null;
          category?: string;
          created_at?: string | null;
          id?: string;
          medical_notes?: string | null;
          parent_email?: string;
          parent_name?: string;
          parent_phone?: string;
          player_name?: string;
          school?: string | null;
          status?: string | null;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
