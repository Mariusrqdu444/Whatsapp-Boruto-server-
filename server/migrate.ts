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
if (require.main === module) {
  runMigration().catch(console.error);
}