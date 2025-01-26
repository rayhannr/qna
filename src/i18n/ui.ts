import en from './en.json'
import id from './id.json'

export const languages = {
  en: 'English',
  id: 'Indonesian'
}

export const defaultLang = 'en'

export const ui = { en, id } as const
export type UI = keyof typeof ui
