export interface Forum {
  id: number
  title: string
  url: string
}

export interface Author {
  id: number
  display_name: string
  avatar_url: string
  is_staff: boolean
}

export interface LatestPostAuthor {
  id: number
  display_name: string
  avatar_url: string
  is_staff: boolean
}

export enum ticketStatus {
  OPEN = 'open',
  RESOLVED = 'resolved',
  FEEDBACK = 'feedback',
}

export type status = 'open' | 'resolved' | 'feedback'

export type TTicket = ITicket

export interface ITicket {
  id: number
  title: string
  created_time: string
  created_time_utc: string
  forum: Forum
  author: Author
  latest_post_author: LatestPostAuthor
  num_replies: number
  status: status
  url: string
}
