import React from 'react'
import { ITicketOption } from 'components/Filters/Filters.types'
import { ticketStatus } from './TableFilters.types'

export const TableFiltersContext = React.createContext({
  search: '',
  handleSearch: (search: string) => {},
  sort: true,
  handleSort: (sort: boolean) => {},
  sortBy: '',
  handleSortBy: (sortBy: string) => {},
  filter: {
    text: 'TICKETS_FILTERS.ALL',
    count: '9',
    color: '#000',
    bgColor: '#E6E6E6',
    value: ticketStatus.ALL,
  },
  handleFilter: (filter: ITicketOption) => {},
  page: 1,
  handlePage: (page: number) => {},
})

export function useTableFiltersContext() {
  const contextValues = React.useContext(TableFiltersContext)
  return contextValues
}
