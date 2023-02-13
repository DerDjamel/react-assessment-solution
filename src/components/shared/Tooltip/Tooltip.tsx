import React from 'react'
import { ITooltipProps } from './Tooltip.types'
import './Tooltip.styles.css'

function Tooltip({ label }: ITooltipProps) {
  return <span className="tooltip">{label}</span>
}

export default Tooltip
