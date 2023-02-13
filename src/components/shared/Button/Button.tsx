import React from 'react'
import { IButtonProps } from './Button.types'
import './Button.styles.css'

function Button({ children, onClick, icon, ...props }: IButtonProps) {
  return (
    <div className="buttonContainer">
      {icon && icon}
      <button type="button" className="button" {...props}>
        {children}
      </button>
    </div>
  )
}

export default Button
