export type Database = {
  public: {
    Tables: {
      posts: {
        Row: {
          id: number;
          author: string;
          title: string;
          content: string;
          twitter: string | null;
          tab: "info" | "notes" | "courses" | "paths";
          likes: number;
          pathway:
            | "frontend-web"
            | "backend-web"
            | "frontend-app"
            | "basics"
            | "ui-ux"
            | null;
          links: string[] | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          author: string;
          title: string;
          content: string;
          twitter?: string | null;
          tab: "info" | "notes" | "courses" | "paths";
          likes?: number;
          pathway?:
            | "frontend-web"
            | "backend-web"
            | "frontend-app"
            | "basics"
            | "ui-ux"
            | null;
          links?: string[] | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          author?: string;
          title?: string;
          content?: string;
          twitter?: string | null;
          tab?: "info" | "notes" | "courses" | "paths";
          likes?: number;
          pathway?:
            | "frontend-web"
            | "backend-web"
            | "frontend-app"
            | "basics"
            | "ui-ux"
            | null;
          links?: string[] | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};
