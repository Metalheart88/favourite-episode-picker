import React from 'react'

interface IState {
  episodes: string[]
  favourites: string[]
}
const initialState: IState = {
  episodes: [],
  favourites: [],
}

export const Store = React.createContext<IState>(initialState)

const reducer = () => {}

export const StoreProvider = (props: any): JSX.Element => {
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>
}
