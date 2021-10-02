const profileMenu = [
  {
    id: 'accounts',
    title: 'Accounts',
    options: [
      {
        id: 'settings',
        title: 'Settings & Privacy',
        path: 'settings'
      },
      {
        id: 'help',
        title: 'Help',
        path: '#'
      },
      {
        id: 'language',
        title: 'Language',
        path: 'settings/select-language'
      }
    ]
  },
  {
    id: 'manage',
    title: 'Manage',
    options: [
      {
        id: 'activity',
        title: 'Posts & Activity',
        path: 'detail/recent-activity'
      },
      {
        id: 'job-posting',
        title: 'Job Posting Account',
        path: '#'
      }
    ]
  }
]

export { profileMenu }
