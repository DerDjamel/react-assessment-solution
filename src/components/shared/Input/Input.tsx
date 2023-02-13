import React from 'react'
import { IInputProps } from './Input.types'
import './Input.styles.css'

function Input({ icon, ...props }: IInputProps) {
  return (
    <div className="textInput">
      {icon && icon}
      <input type="text" {...props} />
    </div>
  )
}

export default Input
