import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
// import { farmWaste } from './drizzle/schema';

const client = createClient({ url: "file:./drizzle/dev.sqlite", authToken: "" });
export const db = drizzle(client);
// console.log(db)