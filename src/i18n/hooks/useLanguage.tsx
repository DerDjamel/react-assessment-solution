import i18nInstance from '../index'

const useLanguage = () => {
  return (
    i18nInstance.language ||
    (typeof window !== 'undefined' && window.localStorage.i18nextLng) ||
    'en'
  )
}

export default useLanguage
