
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForDb = global as unknown as { db: PrismaClient };

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

export const db =
  globalForDb.db ||
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") globalForDb.db = db;

