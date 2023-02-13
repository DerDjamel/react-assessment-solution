import React, { useEffect } from 'react'
import { useTableFiltersContext } from 'contexts/TableFiltersContext'
import { ITicket } from 'interfaces/IData'
import { ticketStatus } from 'contexts/TableFiltersContext/TableFilters.types'
import { getRealSortValue, getTicketsOption } from './useTableFilters.helpers'

const useTableFilters = (data: ITicket[]) => {
  const { search, sort, filter, page, sortBy } = useTableFiltersContext()

  const [filtredTickets, setFiltredTickets] = React.useState<ITicket[]>(data)
  const [totalSize, setTotalSize] = React.useState<number>(data.length)
  const [loading, setLoading] = React.useState<boolean>(false)

  const getFiltredTickets = (tickets: ITicket[]) => {
    let newTickets = [...tickets]

    if (search) {
      newTickets = newTickets.filter((ticket) =>
        ticket.title.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (filter && filter.value !== ticketStatus.ALL) {
      newTickets = newTickets.filter((ticket) => ticket.status === filter.value)
    }

    if (sortBy) {
      const realSortValue = getRealSortValue(sortBy)
      if (sort) {
        newTickets = newTickets.sort((a, b) =>
          a[realSortValue as string].localeCompare(b[realSortValue as string])
        )
      } else {
        newTickets = newTickets.sort((a, b) =>
          b[realSortValue].localeCompare(a[realSortValue])
        )
      }
    }

    const filtredTicketSize = newTickets.length
    if (page) {
      const start = (page - 1) * 10
      const end = start + 10
      newTickets = [...newTickets].slice(start, end)
    }

    return { newTickets, filtredTicketSize }
  }

  useEffect(() => {
    setLoading(true)
    const { newTickets, filtredTicketSize } = getFiltredTickets(data)
    setTimeout(() => {
      setFiltredTickets(newTickets)
      setTotalSize(filtredTicketSize)
      setLoading(false)
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, sort, filter, data, page, sortBy])

  const ticketsOptions = getTicketsOption(data)

  return { filtredTickets, totalSize, ticketsOptions, loading }
}

export default useTableFilters
