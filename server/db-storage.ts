import { db } from "./db";
import { IStorage } from "./storage";
import { 
  users, 
  sessions, 
  type User, 
  type InsertUser, 
  type Session, 
  type InsertSession 
} from "@shared/schema";
import { eq } from "drizzle-orm";

export class DbStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const results = await db.select().from(users).where(eq(users.id, id));
    return results.length > 0 ? results[0] : undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const results = await db.select().from(users).where(eq(users.username, username));
    return results.length > 0 ? results[0] : undefined;
  }

  async createUser(user: InsertUser): Promise<User> {
    const results = await db.insert(users).values(user).returning();
    return results[0];
  }

  async createSession(session: InsertSession): Promise<Session> {
    // Ensure all required fields have values
    const sessionToInsert: InsertSession = {
      id: session.id,
      userPhone: session.userPhone,
      targetType: session.targetType || "individual",
      messageDelay: session.messageDelay || 1000,
      enableRetry: session.enableRetry || false,
      maxRetries: session.maxRetries || 3,
      enableContinuous: session.enableContinuous || false,
      delaySeconds: session.delaySeconds || 5,
      status: session.status || "active",
      createdAt: session.createdAt || new Date()
    };
    
    const results = await db.insert(sessions).values(sessionToInsert).returning();
    return results[0];
  }

  async getSession(id: string): Promise<Session | undefined> {
    const results = await db.select().from(sessions).where(eq(sessions.id, id));
    return results.length > 0 ? results[0] : undefined;
  }

  async getActiveSessions(): Promise<Session[]> {
    return await db.select().from(sessions).where(eq(sessions.status, "active"));
  }

  async updateSessionStatus(
    id: string, 
    status: "active" | "stopped" | "completed" | "failed"
  ): Promise<Session | undefined> {
    const results = await db
      .update(sessions)
      .set({ status })
      .where(eq(sessions.id, id))
      .returning();
    
    return results.length > 0 ? results[0] : undefined;
  }
}