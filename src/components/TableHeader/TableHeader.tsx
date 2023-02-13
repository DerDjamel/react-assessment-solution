import React from 'react'
import ArrowDown from 'assets/icons/ArrowDown'
import { useTableFiltersContext } from 'contexts/TableFiltersContext'
import ArrowUp from 'assets/icons/ArrowUp'
import headerOptions from './TableHeader.helpers'

function TableHeader() {
  const { handleSortBy, handleSort, sort, sortBy } = useTableFiltersContext()
  const onSortBy = (sortByVal: string) => {
    handleSortBy(sortByVal)
    handleSort(!sort)
  }

  return (
    <div className="ticketsTable tableBorderBottom">
      {headerOptions.map((option, idx) => (
        <h5
          key={idx}
          className="flexRow alignCenter gap button"
          onClick={() => onSortBy(option)}
        >
          {option}{' '}
          {sortBy === option && sort
            ? ArrowDown
            : sortBy === option && !sort
            ? ArrowUp
            : ''}
        </h5>
      ))}
    </div>
  )
}

export default TableHeader
