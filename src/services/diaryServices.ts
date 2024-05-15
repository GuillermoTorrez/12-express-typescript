import diaryData from './diaries.json'
import {
  DiaryEntry,
  type NewDiaryEntry,
  type NonSensitiveInfoDiaryEntryOmit
} from '../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (
  id: number
): NonSensitiveInfoDiaryEntryOmit | undefined => {
  const entry = diaries.find((d) => d.id === id)
  console.log(entry)
  if (entry !== undefined) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDiaryEntryOmit[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
      return {
        id,
        date,
        weather,
        visibility
      }
    })
  }

export const addDiary = (
  newDiaryEntry: NewDiaryEntry
): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)
  return newDiary
}
