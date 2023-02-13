import { DateTime } from 'luxon'
import i18n from 'i18n'
import { ticketStatus } from 'interfaces/IData'
import { chipFeedback, chipResolved, tertiary } from 'utils/theme'

export const getStatusChipColor = (status: string) => {
  switch (status) {
    case ticketStatus.OPEN:
      return tertiary
    case ticketStatus.RESOLVED:
      return chipResolved
    case ticketStatus.FEEDBACK:
      return chipFeedback
    default:
      return ''
  }
}

export const formatTime = (date: string) => {
  const dateInstance = DateTime.fromFormat(
    date,
    'yyyy-MM-dd HH:mm:ss'
  ).setLocale(i18n.language)
  const diff = (dateInstance.diffNow('day') as any).values.days
  if (diff > -1) {
    if (dateInstance.hasSame(DateTime.now(), 'day'))
      return `${i18n.t('DATE_TODAY')} @ `.concat(
        dateInstance.toLocaleString(DateTime.TIME_SIMPLE)
      )
    return `${i18n.t('DATE_YESTERDAY')} @ `.concat(
      dateInstance.toLocaleString(DateTime.TIME_SIMPLE)
    )
  }
  return dateInstance.toFormat('MMMM dd @ hh:mm a')
}
