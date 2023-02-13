import React from 'react'
import useTranslation from 'i18n/hooks/useTranslation'
import { IAvatarWithNameProps } from './AvatarWithName.types'
import './AvatarWithName.styles.css'

function AvatarWithName({ label, avatarUrl }: IAvatarWithNameProps) {
  const t = useTranslation()
  return (
    <div className="flexRow gap">
      <img className="roundedImg" src={avatarUrl} alt={label} />
      <p className="avatarLabel">{`${t('LAST_BY')} ${label}`}</p>
    </div>
  )
}

export default AvatarWithName
