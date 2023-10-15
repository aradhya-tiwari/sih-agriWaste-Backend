import express from 'express'
import { db } from '../lib/db.js'
import { farmWaste, industrialist } from '../drizzle/schema.js'
import { eq } from 'drizzle-orm'
import { insertFarmWaste } from '../drizzle/schema-zod.js'
const app = express()
export const _farmWaste = express.Router()



_farmWaste.get('/', async (req, res) => {
    let rs = await db.select().from(farmWaste).leftJoin(industrialist, eq(farmWaste.assignedTo, industrialist.id)).all()
    res.send(rs)
})

_farmWaste.post("/", async (req, res) => {
    const { farmName, latitude, longitude } = req.body
    try {

        insertFarmWaste.parse(req.body)
        console.log(req.body)
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
        let ins = await db.insert(farmWaste).values({
            farmName, latitude, longitude
        })
        res.send(ins)
    } catch (e) {
        console.log(e)
        res.send(e)
    }
})

_farmWaste.post('/assign', async (req, res) => {
    // to means industrials
    // and id is of farm
    const { id, to } = req.body;
    console.log(id, to)

    try {
        let updt = await db.update(farmWaste).set({ assignedTo: to }).where(eq(farmWaste.id, id)).returning({ updatetion: farmWaste.assignedTo })
        res.send(updt)
        console.log("Got assign request")
    } catch (e) { console.log("error aa rha hai :-.("); res.send(e) }
})