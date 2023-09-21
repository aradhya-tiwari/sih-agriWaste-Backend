import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { eq } from 'drizzle-orm';
import express from 'express';
import cors from 'cors'
import { farmWaste, industrialist } from './drizzle/schema.js';
import { db } from './lib/db.js';
import fs from 'fs'
import { _farmWaste } from './routes/farmWaste.js';


const app = express()
app.use(express.json());

app.use("/farm-waste", _farmWaste)
app.get('/', async (req, res) => {
    let ress = await db.select().from(farmWaste).fullJoin(industrialist, eq(farmWaste.assignedTo, industrialist.id))
    console.log(ress)
})


app.listen(3000)