import { sessions, type Session, type InsertSession } from "@shared/schema";

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

import { users, type User, type InsertUser } from "@shared/schema";

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private sessions: Map<string, Session>;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.sessions = new Map();
    this.currentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createSession(insertSession: InsertSession): Promise<Session> {
    const session: Session = { ...insertSession };
    this.sessions.set(session.id, session);
    return session;
  }

  async getSession(id: string): Promise<Session | undefined> {
    return this.sessions.get(id);
  }

  async getActiveSessions(): Promise<Session[]> {
    return Array.from(this.sessions.values()).filter(
      (session) => session.status === "active"
    );
  }

  async updateSessionStatus(id: string, status: "active" | "stopped" | "completed" | "failed"): Promise<Session | undefined> {
    const session = this.sessions.get(id);
    if (session) {
      const updatedSession = { ...session, status };
      this.sessions.set(id, updatedSession);
      return updatedSession;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
