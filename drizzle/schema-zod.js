import * as sch from './schema.js'
import { z } from 'zod'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const insertFarmWaste = createInsertSchema(sch.farmWaste)
export const insertIndustrialist = createInsertSchema(sch.industrialist
)