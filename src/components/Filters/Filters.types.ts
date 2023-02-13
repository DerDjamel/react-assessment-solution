import { ticketStatus } from 'contexts/TableFiltersContext/TableFilters.types'

export interface ITicketOption {
  text: string
  count: string
  color: string
  bgColor: string
  value: ticketStatus
}

export interface IFilters {
  ticketsOptions: ITicketOption[]
}
