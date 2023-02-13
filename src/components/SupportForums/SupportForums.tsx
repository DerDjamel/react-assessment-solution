import React from 'react'
import SupportForumsIcon from 'assets/icons/SupportForumsIcon'
import useTranslation from 'i18n/hooks/useTranslation'
import RightArrowIcon from 'assets/icons/RightArrowIcon'
import Input from 'components/shared/Input'
import Container from 'components/shared/Container'
import SupportForumActionsHeader from 'components/SupportForumActionsHeader'
import searchIcon from 'assets/icons/searchIcon'
import './SupportForums.styles.css'

function SupportForums() {
  const t = useTranslation()
  return (
    <Container
      title={t('SUPPORT_RESOURCES')}
      actions={<SupportForumActionsHeader />}
    >
      {SupportForumsIcon} <h3>{t('SUPPORT_FORUMS')}</h3>
      <p className="descText">{t('SUPPORT_FORUMS_DESC')}</p>
      <span className="inlineDisplay">
        <p className="linkText">{t('SUPPORT_FORUMS_LINK')}</p> {RightArrowIcon}
      </span>
      <Input icon={searchIcon} placeholder={t('SEARCH_SUPPORT')} />
    </Container>
  )
}

export default SupportForums
