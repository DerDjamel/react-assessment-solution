import React, { useState } from 'react'
import ArrowDownIcon from 'assets/icons/ArrowDownIcon'
import ArrowUpIcon from 'assets/icons/ArrowUpIcon'
import ClickAwayListener from '../ClickAway'
import { SelectProps } from './Select.types'
import './Select.styles.css'

function Select<T>({
  options,
  classes,
  renderItem,
  value,
  onChange,
  getOptionSelected,
}: SelectProps<T>) {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const handleShowMenu = () => {
    setShowMenu(true)
  }

  const handleHideMenu = () => {
    setShowMenu(false)
  }

  const handleChange = (e: any, item: T) => {
    handleHideMenu()
    onChange(e, item)
  }

  return (
    <ClickAwayListener onClickAway={handleHideMenu}>
      <div className={classes?.container ?? ''}>
        <div
          onClick={handleShowMenu}
          role="button"
          className={`button select-button flexRow ${classes?.input ?? ''}`}
        >
          <span className="select-input">{renderItem(value)}</span>
          {showMenu ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </div>
        <ul
          className={`select-menu ${showMenu ? 'active flexColumn' : ''} ${
            classes?.menu ?? ''
          }`}
        >
          {options.map((item, index) => {
            const isSelected = getOptionSelected(item, value)
            return (
              <li
                key={index}
                className={`menu-item ${isSelected ? 'selected' : ''}`}
                onClick={(e) => handleChange(e, item)}
              >
                {renderItem(item)}
              </li>
            )
          })}
        </ul>
      </div>
    </ClickAwayListener>
  )
}

export default Select
