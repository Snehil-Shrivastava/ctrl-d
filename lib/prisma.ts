// import { PrismaClient } from "../app/generated/prisma/client";
// import { PrismaPg } from "@prisma/adapter-pg";

// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL,
// });
// const globalForPrisma = global as unknown as {
//   prisma: PrismaClient;
// };
// const prisma =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//     adapter,
//   });
// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
// export default prisma;

// --------------------------- NEW TEST -----------------------------------

import { PrismaClient } from "../app/generated/prisma/client"; // based on your schema output path
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

// Initialize the pg Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Pass the pool to the Prisma PG adapter
const adapter = new PrismaPg(pool);

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
