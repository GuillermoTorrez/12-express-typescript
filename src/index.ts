import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()

app.use(express.json()) // middleware that transform la req.body to json format

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('some pinged here!!', new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`)
})
