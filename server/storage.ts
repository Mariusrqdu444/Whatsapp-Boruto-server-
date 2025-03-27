import { 
  sessions, 
  users, 
  type Session, 
  type InsertSession,
  type User, 
  type InsertUser 
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Session management for WhatsApp
  createSession(session: InsertSession): Promise<Session>;
  getSession(id: string): Promise<Session | undefined>;
  getActiveSessions(): Promise<Session[]>;
  updateSessionStatus(id: string, status: "active" | "stopped" | "completed" | "failed"): Promise<Session | undefined>;
}

// Import database implementation
import { DbStorage } from "./db-storage";

// Use database storage for production
export const storage = new DbStorage();
