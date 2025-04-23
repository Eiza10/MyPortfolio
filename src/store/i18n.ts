import { reactive, readonly } from 'vue'
import en from '../locales/en'
import es from '../locales/es'
import eu from '../locales/eu'

type Language = 'en' | 'es' | 'eu'
type Translations = Record<string, Record<string, string>>

// Define the translation records
const translations: Translations = {
  en,
  es,
  eu
}

// Get stored language or use browser language or default to English
const getBrowserLanguage = (): Language => {
  const browserLang = navigator.language.split('-')[0]
  return (browserLang === 'es' || browserLang === 'eu') ? browserLang as Language : 'en'
}

// Create reactive state
const state = reactive({
  currentLanguage: localStorage.getItem('language') as Language || getBrowserLanguage()
})

// Getters
const getters = {
  currentLanguage: (): Language => state.currentLanguage,
  t: (key: string): string => {
    const translation = translations[state.currentLanguage]?.[key]
    return translation || translations['en'][key] || key
  }
}

// Actions
const actions = {
  setLanguage(language: Language): void {
    state.currentLanguage = language
    localStorage.setItem('language', language)
    document.documentElement.setAttribute('lang', language)
  }
}

// Initialize language on load
document.documentElement.setAttribute('lang', state.currentLanguage);

export default {
  state: readonly(state),
  ...getters,
  ...actions
}
