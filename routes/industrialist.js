import express from 'express'
import { db } from '../lib/db.js'
import { industrialist } from '../drizzle/schema.js'
import { eq } from 'drizzle-orm'
import { insertIndustrialist } from '../drizzle/schema-zod.js'
const app = express()
export const _industrialist = express.Router()



_industrialist.get('/', async (req, res) => {
    let rs = await db.select().from(industrialist).all()
    res.send(rs)
})

_industrialist.post("/", async (req, res) => {
    const { name, password, address } = req.body
    try {

        insertIndustrialist.parse(req.body)
        console.log(req.headers)
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
        let ins = await db.insert(industrialist).values({
            name, password, address, premium: false
        })
        res.send(ins)
    } catch (e) {
        console.log(e)
        res.send(e)
    }
})

_industrialist.put('/', async (req, res) => {
    const { id, to } = req.body;
    // let updt = await db.update(industrialist).set({ assignedTo: to }).where(eq(farmWaste.id, id)).returning({ updatetion: farmWaste.assignedTo })
    res.send(updt)
})