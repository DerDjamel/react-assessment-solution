import React from 'react'
import StaffIcon from 'assets/icons/StaffIcon'
import AvatarWithName from 'components/shared/AvatarWithName'
import Chip from 'components/shared/Chip'
import Tooltip from 'components/shared/Tooltip'
import { white } from 'utils/theme'
import { ITableRowProps } from './TableRow.types'
import './TableRow.styles.css'
import { formatTime, getStatusChipColor } from './TableRow.helpers'

function TableRow({ ticket }: ITableRowProps) {
  const {
    title,
    created_time,
    forum: { title: titleForum },
    latest_post_author: { display_name, avatar_url, is_staff },
    num_replies,
    status,
    url,
  } = ticket
  return (
    <div className="ticketsTable tableBorderBottom rowContainer">
      <a href={url} className="flexColumn ">
        <p className="TicketTitle">{title}</p>
        <p className="TicketDesc">{titleForum}</p>
      </a>
      <Chip
        label={status}
        backgroundColor={getStatusChipColor(status)}
        color={white}
      />
      <p className="createdOn">{formatTime(created_time)}</p>
      <div className="repliesContainer ">
        <AvatarWithName label={display_name} avatarUrl={avatar_url} />
        <Tooltip label={num_replies} />
        {is_staff && <Chip label="staff" icon={StaffIcon} />}
      </div>
    </div>
  )
}

export default TableRow
