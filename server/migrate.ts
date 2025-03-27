import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db, client } from "./db";
import { log } from "./vite";

// Export migration function for use in other modules
export default async function runMigration() {
  try {
    log("Starting database migration...", "database");
    
    // Run migrations
    await migrate(db, { migrationsFolder: "./drizzle" });
    
    log("Database migration completed successfully", "database");
  } catch (error) {
    log(`Migration failed: ${error}`, "database");
    console.error("Migration error:", error);
  } finally {
    // Close the database connection
    await client.end();
  }
}

// Run as standalone script
// This import.meta approach is used for ES modules
// The URL constructor will throw if import.meta.url is undefined
try {
  const url = new URL(import.meta.url);
  // This is a heuristic: if this file is the entry point, url.pathname should end with this filename
  if (url.pathname.endsWith('/migrate.ts') || url.pathname.endsWith('/migrate.js')) {
    runMigration().catch(console.error);
  }
} catch (e) {
  // If import.meta.url is undefined, we're not in a module context
  // or if the URL constructor throws
  console.error("Error checking if this is the main module:", e);
}