import React from 'react'
import { IContainerProps } from './Container.types'
import './Container.styles.css'

function Container({
  children,
  withHeader = true,
  title,
  actions,
  classes,
}: IContainerProps) {
  return (
    <div className={`reusableContainer ${classes ?? ''}`}>
      {withHeader && (
        <div className="containerHeader">
          <h4>{title}</h4>
          <span>{actions}</span>
        </div>
      )}
      <div className="containerContent">{children}</div>
    </div>
  )
}

export default Container
