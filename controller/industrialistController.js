import { db } from '../lib/db.js'
import { farmWaste, industrialist } from '../drizzle/schema.js'
import { eq } from 'drizzle-orm'
import { insertFarmWaste } from '../drizzle/schema-zod.js'

export async function getAll() {
    return await db.select().from(industrialist).all()
}

export async function addIndustrialist(name, password, address) {

    let ins = await db.insert(industrialist).values({
        name, password, address, premium: false
    })
    return ins
}