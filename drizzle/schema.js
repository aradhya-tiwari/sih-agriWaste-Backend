import { relations, sql } from 'drizzle-orm';
import { index, integer, sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core';

export const farmWaste =  sqliteTable('farmWaste',{
    id:integer('id').primaryKey({autoIncrement:true}),
    farmName:text('name').notNull(),
    
});