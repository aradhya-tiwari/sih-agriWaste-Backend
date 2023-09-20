
export default {
    schema: './drizzle/schema.js',
    out: './drizzle/migrations',
    driver: 'turso',
    dbCredentials: {
      url: "file:./drizzle/dev.db"
    }
  }