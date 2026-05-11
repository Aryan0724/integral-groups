export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      departments: {
        Row: {
          id: string
          name: string
          slug: string
          mission: string | null
          color_theme: string | null
          metadata: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          mission?: string | null
          color_theme?: string | null
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          mission?: string | null
          color_theme?: string | null
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      intelligence_articles: {
        Row: {
          id: string
          title: string
          slug: string
          summary: string | null
          content: string | null
          clearance_level: string
          category: string
          author_id: string | null
          department_id: string | null
          metadata: Json | null
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          summary?: string | null
          content?: string | null
          clearance_level?: string
          category: string
          author_id?: string | null
          department_id?: string | null
          metadata?: Json | null
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          summary?: string | null
          content?: string | null
          clearance_level?: string
          category?: string
          author_id?: string | null
          department_id?: string | null
          metadata?: Json | null
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      collaborators: {
        Row: {
          id: string
          name: string
          email: string
          skills: string[] | null
          domain: string | null
          status: string
          projects: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          skills?: string[] | null
          domain?: string | null
          status?: string
          projects?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          skills?: string[] | null
          domain?: string | null
          status?: string
          projects?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
      media_assets: {
        Row: {
          id: string
          filename: string
          url: string
          type: string
          department_id: string | null
          metadata: Json | null
          created_at: string
        }
        Insert: {
          id?: string
          filename: string
          url: string
          type: string
          department_id?: string | null
          metadata?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          filename?: string
          url?: string
          type?: string
          department_id?: string | null
          metadata?: Json | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
