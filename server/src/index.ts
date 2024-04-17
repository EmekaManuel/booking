import express, { Request, Response } from "express"
import cors from "cors"
import 'dotenv/config'
import mongoose from "mongoose"
import routes from './routes'
// import "dotenv/config"

mongoose.connect(process.env.MONGO_URI as string)

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/api/v0.1', routes)


app.get("/api/test", async(_req:Request, res:Response) => {
    res.json({message: "Hello manuel"})
})

app.listen(3000, () => {
    console.log("server is running on localhost:3000")
})