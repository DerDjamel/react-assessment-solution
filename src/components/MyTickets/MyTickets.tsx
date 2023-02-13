import useTranslation from 'i18n/hooks/useTranslation'
import useTableFilters from 'hooks/useTableFilters'
import AddTicketIcon from 'assets/icons/AddTicketIcon'
import TelescopeIcon from 'assets/icons/Telescope'
import { useTableFiltersContext } from 'contexts/TableFiltersContext'
import Container from 'components/shared/Container'
import MyTicketsTable from 'components/MyTicketsTable'
import Pagination from 'components/Pagination'
import Filters from 'components/Filters'
import Spinner from 'components/shared/Spinner'
import { IMyTicketsProps } from './MyTickets.types'
import './MyTickets.style.css'

function MyTickets({ tickets }: IMyTicketsProps) {
  const t = useTranslation()
  const { filtredTickets, totalSize, ticketsOptions, loading } =
    useTableFilters(tickets)
  const { page, handlePage, search } = useTableFiltersContext()

  const perPage = 10 //! hardcoded value
  const totalPages = Math.ceil(totalSize / perPage)
  const handlePageChange = (newPage: number) => {
    handlePage(newPage)
  }

  return (
    <>
      <Container
        title={t('MY_TICKETS')}
        actions={<Filters ticketsOptions={ticketsOptions} />}
        classes=""
      >
        {loading ? (
          <Spinner />
        ) : !tickets ? (
          <>
            {AddTicketIcon} <h3>{t('NO_TICKETS')}</h3>
            <p className="descText">{t('MY_TICKETS_DESC')}</p>{' '}
          </>
        ) : filtredTickets.length > 0 ? (
          <div className="table-container">
            <MyTicketsTable tickets={filtredTickets} />
          </div>
        ) : (
          <div className="no-results flexColumn">
            <TelescopeIcon />
            <h3>{t('NO_TICKETS_SEARCH.TEXT1', { keyword: search })}</h3>
            <h5>{t('NO_TICKETS_SEARCH.TEXT2')}</h5>
          </div>
        )}
      </Container>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        perPage={perPage}
        length={filtredTickets.length}
        onPageChange={handlePageChange}
      />
    </>
  )
}

export default MyTickets
