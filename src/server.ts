import express, { application } from "express"
import cors from 'cors'
import { routes } from "./routes"

const app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE')

  app.use(cors())
  next()
})

app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
  console.log("HTTPS server running")
})