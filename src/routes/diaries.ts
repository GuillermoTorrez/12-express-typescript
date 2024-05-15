import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntries())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  res.send(diary)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.json(addedDDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
