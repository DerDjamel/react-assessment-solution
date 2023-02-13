import React from 'react'
import { IChipProps } from './Chip.types'
import './Chip.styles.css'

function Chip({ icon, backgroundColor, color, label }: IChipProps) {
  return (
    <div className="chip flexRow smallGap" style={{ backgroundColor, color }}>
      {icon} {label}
    </div>
  )
}

export default Chip
