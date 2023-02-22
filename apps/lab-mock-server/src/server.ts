import "reflect-metadata"
import express, {Express, Request, Response } from 'express'
import { startGraphQLServer } from './libs/graph-ql'

const app: Express = express()

const port = process.env.PORT || 8081

app.get('/graph-ql', () => {

})

app.get('/', (req: Request, res: Response) => {
  return res.json({ title: 'hello' })
});

(async () => {
  console.log(`Starting at port ${port}`)
  await startGraphQLServer(port)
})()

export {}