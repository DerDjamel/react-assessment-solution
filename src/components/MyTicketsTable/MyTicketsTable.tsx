import React from 'react'
import TableHeader from 'components/TableHeader'
import TableRow from 'components/TableRow'
import './MyTicketsTable.styles.css'
import { IMyTicketsProps } from 'components/MyTickets/MyTickets.types'

function MyTicketsTable({ tickets }: IMyTicketsProps) {
  return (
    <div className="fullWidth table">
      <TableHeader />
      {tickets.map((ticket, idx) => (
        //* didn't use ticket ID cause I have mocked data
        <React.Fragment key={idx}>
          <TableRow ticket={ticket} />
        </React.Fragment>
      ))}
    </div>
  )
}

export default MyTicketsTable
