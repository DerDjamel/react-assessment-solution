import { ITicket } from 'interfaces/IData'

const mockedData: ITicket[] = [
  {
    id: 1,
    title: 'Domain mapped site shows cors policy error',
    created_time: '2022-04-20 21:52:39',
    created_time_utc: '2022-04-20 21:52:39',
    forum: {
      id: 1,
      title: 'General WordPress',
      url: 'https://example.com/',
    },
    author: {
      id: 1,
      display_name: 'John doe',
      avatar_url: 'https://mui.com/static/images/avatar/1.jpg',
      is_staff: true,
    },
    latest_post_author: {
      id: 2,
      display_name: 'Leon',
      avatar_url: 'https://mui.com/static/images/avatar/1.jpg',
      is_staff: true,
    },
    num_replies: 1,
    status: 'open',
    url: 'https://example.com/',
  },
  {
    id: 2,
    title: 'After enabling cdn image sizes are big',
    created_time: '2022-04-20 21:52:39',
    created_time_utc: '2022-04-20 21:52:39',
    forum: {
      id: 2,
      title: 'The Hub',
      url: 'https://example.com/',
    },
    author: {
      id: 2,
      display_name: 'John doe',
      avatar_url: 'https://mui.com/static/images/avatar/2.jpg',
      is_staff: false,
    },
    latest_post_author: {
      id: 2,
      display_name: 'Ramy',
      avatar_url: 'https://mui.com/static/images/avatar/2.jpg',
      is_staff: false,
    },
    num_replies: 3,
    status: 'open',
    url: 'https://example.com/',
  },
  {
    id: 3,
    title: 'Google suggests to properly size images',
    created_time: '2022-04-20 21:52:39',
    created_time_utc: '2022-04-20 21:52:39',
    forum: {
      id: 3,
      title: 'Plugins & Themes - {plugin_name}',
      url: 'https://example.com/',
    },
    author: {
      id: 3,
      display_name: 'John doe',
      avatar_url: 'https://mui.com/static/images/avatar/3.jpg',
      is_staff: false,
    },
    latest_post_author: {
      id: 3,
      display_name: 'Mohamed',
      avatar_url: 'https://mui.com/static/images/avatar/3.jpg',
      is_staff: false,
    },
    num_replies: 1,
    status: 'resolved',
    url: 'https://example.com/',
  },
  {
    id: 4,
    title: 'serve cached pages from the cdn',
    created_time: '2022-04-20 21:52:39',
    created_time_utc: '2022-04-20 21:52:39',
    forum: {
      id: 4,
      title: 'Features & Feedback - {plugin_name}',
      url: 'https://example.com/',
    },
    author: {
      id: 4,
      display_name: 'John doe',
      avatar_url: '	https://mui.com/static/images/avatar/5.jpg',
      is_staff: true,
    },
    latest_post_author: {
      id: 4,
      display_name: 'Ziad',
      avatar_url: '	https://mui.com/static/images/avatar/5.jpg',
      is_staff: true,
    },
    num_replies: 4,
    status: 'feedback',
    url: 'https://example.com/',
  },
]

const tickets = [
  ...mockedData,
  ...mockedData,
  ...mockedData,
  ...mockedData,
  ...mockedData,
  ...mockedData,
  ...mockedData,
  ...mockedData,
]

export default tickets
