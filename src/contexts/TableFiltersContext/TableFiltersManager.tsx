import React, { useMemo } from 'react'
import { ITicketOption } from 'components/Filters/Filters.types'
import { ticketStatus } from './TableFilters.types'
import { TableFiltersContext } from './TableFiltersContext'

export function createTableFiltersManager({ useState = React.useState } = {}) {
  function TableFiltersManager({ children }: { children: React.ReactNode }) {
    const [search, setSearch] = useState<string>('')
    const [sort, setSort] = useState<boolean>(true)
    const [sortBy, setSortBy] = useState<string>('')
    const [filter, setFilter] = useState<ITicketOption>({
      text: 'TICKETS_FILTERS.ALL',
      count: '9',
      color: '#000',
      bgColor: '#E6E6E6',
      value: ticketStatus.ALL,
    })
    const [page, setPage] = useState<number>(1)

    const handleSearch = (searchVal: string) => {
      setSearch(searchVal)
    }

    const handleSort = (sortVal: boolean) => {
      setSort(sortVal)
    }

    const handleSortBy = (sortByVal: string) => {
      setSortBy(sortByVal)
    }

    const handleFilter = (filterVal: ITicketOption) => {
      setFilter(filterVal)
    }

    const handlePage = (pageVal: number) => {
      setPage(pageVal)
    }

    const contextValues = useMemo(
      () => ({
        search,
        handleSearch,
        sort,
        handleSort,
        sortBy,
        handleSortBy,
        filter,
        handleFilter,
        page,
        handlePage,
      }),
      [search, sort, filter, page, sortBy]
    )

    return (
      <TableFiltersContext.Provider value={contextValues}>
        {children}
      </TableFiltersContext.Provider>
    )
  }

  return TableFiltersManager
}

export const TableFiltersManager = createTableFiltersManager()
