import { ticketStatus } from 'contexts/TableFiltersContext/TableFilters.types'
import i18n from 'i18n'
import { ITicket } from 'interfaces/IData'
import { textPrimary, textWhite } from 'utils/theme'

export const getRealSortValue = (value: string) => {
  switch (value) {
    case i18n.t('TICKETS'):
      return 'title'
    case i18n.t('STATUS'):
      return 'status'
    case i18n.t('CREATED ON'):
      return 'created_time'
    case i18n.t('REPLIES'):
      return 'status'
    default:
      return value
  }
}

export const getTicketsOption = (tickets: ITicket[]) => {
  let all = 0
  let open = 0
  let resolved = 0
  let feedback = 0
  tickets.forEach((ticket) => {
    all++
    if (ticket.status === ticketStatus.OPEN) open++
    if (ticket.status === ticketStatus.RESOLVED) resolved++
    if (ticket.status === ticketStatus.FEEDBACK) feedback++
  })
  return [
    {
      text: 'TICKETS_FILTERS.ALL',
      count: all.toString(),
      color: textPrimary,
      bgColor: '#E6E6E6',
      value: ticketStatus.ALL,
    },
    {
      text: 'TICKETS_FILTERS.OPEN',
      count: open.toString(),
      color: textWhite,
      bgColor: 'var(--tertiary)',
      value: ticketStatus.OPEN,
    },
    {
      text: 'TICKETS_FILTERS.FEEDBACK',
      count: feedback.toString(),
      color: textWhite,
      bgColor: 'var(--chip-feedback)',
      value: ticketStatus.FEEDBACK,
    },
    {
      text: 'TICKETS_FILTERS.RESOLVED',
      count: resolved.toString(),
      color: textWhite,
      bgColor: 'var(--chip-resolved)',
      value: ticketStatus.RESOLVED,
    },
  ]
}
