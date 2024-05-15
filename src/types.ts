export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor',
}
export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export interface SpecialDiaryEntry extends DiaryEntry {
  flightNumber: number
}

// Don't do it this interface
export interface NonSensitiveInfoDiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
}

// you can do this with
export type NonSensitiveInfoDiaryEntryPick = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility' >

export type NonSensitiveInfoDiaryEntryOmit = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
