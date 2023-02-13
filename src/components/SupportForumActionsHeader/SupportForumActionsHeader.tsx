import React from 'react'
import useTranslation from 'i18n/hooks/useTranslation'
import Button from 'components/shared/Button'
import SupportWidget from 'assets/icons/SupportWidget'
import './SupportForumActionsHeader.styles.css'

function SupportForumActionsHeader() {
  const t = useTranslation()
  return (
    <div className="actionHeaderContainer">
      <p className="actionHeaderText">{t('NEED_HELP')}</p>
      <Button icon={SupportWidget}>{t('GET_SUPPORT')}</Button>
    </div>
  )
}

export default SupportForumActionsHeader
