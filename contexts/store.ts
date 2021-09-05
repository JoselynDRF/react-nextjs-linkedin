import { createContext } from 'react'

const AppContext = createContext({
  user: {
    name: '',
    headline: '',
    photo: '',
    views: 0,
    connections: 0
  } as UserProps
})

export { AppContext }
