import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@shared/schema";

// Initialize connection
const connectionString = process.env.DATABASE_URL || "";
const client = postgres(connectionString);
export const db = drizzle(client, { schema });

// Export the connection to be used in other parts of the application
export { client };