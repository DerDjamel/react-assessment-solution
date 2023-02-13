import React from 'react'
import PreviousIcon from 'assets/icons/PreviousIcon'
import NextIcon from 'assets/icons/NextIcon'
import { IPaginationProps } from './Pagination.types'
import './Pagination.styles.css'

function Pagination({
  currentPage,
  length,
  perPage,
  totalPages,
  onPageChange,
}: IPaginationProps) {
  const fromItem = (currentPage - 1) * perPage + 1
  const toItem = currentPage * perPage

  const navigateToNextPage = () => {
    onPageChange(currentPage + 1)
  }

  const navigateToPreviousPage = () => {
    onPageChange(currentPage - 1)
  }

  return (
    <div className="pagination flexRow">
      <div className="flexRow gap">
        {[...Array(totalPages).keys()].map((page) => {
          const pageNumber = page + 1
          return (
            <button
              key={pageNumber}
              className={`pageNumber ${
                pageNumber === currentPage ? 'activePage' : ''
              }`}
              type="button"
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        })}
      </div>
      <div className="flexRow gap">
        <p className="paginationInfo">
          {fromItem} - {toItem} of {length}
        </p>
        <div className="flexRow gapSmall">
          <button
            type="button"
            className={currentPage === 1 ? '' : 'activeButton'}
            onClick={navigateToPreviousPage}
            disabled={currentPage === 1}
          >
            {PreviousIcon}
          </button>
          <button
            type="button"
            className={currentPage === totalPages ? '' : 'activeButton'}
            onClick={navigateToNextPage}
            disabled={currentPage === totalPages}
          >
            {NextIcon}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pagination
