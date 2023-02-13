import { TableFiltersManager } from 'contexts/TableFiltersContext'
import tickets from 'utils/mockedData'
import MyTickets from 'components/MyTickets'
import SupportForums from 'components/SupportForums'
import './Home.styles.css'

function Home() {
  return (
    <div className="homeContainer">
      <SupportForums />
      <TableFiltersManager>
        <MyTickets tickets={tickets} />
      </TableFiltersManager>
    </div>
  )
}

export default Home
