import i18n from 'i18next'
import LngDetector from 'i18next-browser-languagedetector'
import en from '../assets/locales/en.json'

const resources = {
  en: {
    translation: en,
  },
}

i18n.use(LngDetector).init({
  resources,
  fallbackLng: 'en',
  debug: false,
  supportedLngs: ['en'],
  load: 'languageOnly',
  returnEmptyString: false,
})

export default i18n
