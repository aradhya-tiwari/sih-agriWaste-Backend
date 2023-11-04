import express from 'express'
import { db } from '../lib/db.js'
import { industrialist } from '../drizzle/schema.js'
import { eq } from 'drizzle-orm'
import { insertIndustrialist } from '../drizzle/schema-zod.js'
import { getAll, addIndustrialist } from '../controller/industrialistController.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
export const _industrialist = express.Router()



_industrialist.get('/', async (req, res) => {
    console.log(req.cookies)
    // if (!req.cookies)
    // res.cookie("DEmo", Date.now(), { maxAge: 15000 })

    // if (process.env.BRANCH == "DEVELOPMENT")
    //     console.log(process.env.BRANCH)

    let rs = await getAll()
    res.send(rs)
})

_industrialist.post("/", async (req, res) => {
    const { name, password, address } = req.body
    insertIndustrialist.parse(req.body)

    console.log(req.headers)
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')

    try {

        let resp = await addIndustrialist(name, password, address)
        console.log(resp)
        res.send({
            added: true
        })
    } catch (e) {

        console.log(e)
        res.send(e)
    }
})

_industrialist.post('/assign', async (req, res) => {
    const { id, to } = req.body;
    let updt = await db.update(industrialist).set({ assignedTo: to }).where(eq(farmWaste.id, id)).returning({ updatetion: farmWaste.assignedTo })
    res.send(updt)
})