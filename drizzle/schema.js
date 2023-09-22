import { relations, sql } from 'drizzle-orm';
import { index, integer, blob, real, sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core';

export const farmWaste = sqliteTable('farmWaste', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    farmName: text('farmName').notNull(),
    farmSize: integer('farmSize'),
    latitude: real('latitude'),
    longitude: real("longitude"),
    image: blob('image'),
    assignedTo: integer('assignedTo').default(null)

});

export const farmIndustrialRelation = relations(farmWaste, ({ one }) => ({
    industrialist: one(industrialist, {
        fields: [industrialist.id],
        references: [farmWaste.assignedTo],
    }),
}));


export const industrialist = sqliteTable('industrialist', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    password: text("password").notNull(),
    address: text("address"),
    premium: integer('premium', { mode: 'boolean' }).default(0)
})

export const farmerRecord = sqliteTable('farmerRecord', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    password: text('password').notNull()
});
