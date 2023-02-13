import { useCallback } from 'react'
import { useTranslation as _useTranslation } from 'react-i18next'
import i18nInstance from '../index'

function useTranslation() {
  const { t } = _useTranslation('translation', { i18n: i18nInstance })
  return useCallback(
    (key: string | string[], options?: any) => {
      return t(key, options)
    },
    [t]
  )
}

export default useTranslation
