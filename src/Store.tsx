import React from 'react'
import { IAction, IEpisode, IState } from './types'

const initialState: IState = {
  episodes: [],
  favourites: [],
}

export const Store = React.createContext<IState | any>(initialState)

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload as IEpisode[] }
    case 'ADD_FAVOURITE':
      return {
        ...state,
        favourites: [...state.favourites, action.payload as IEpisode],
      }
    case 'REMOVE_FAV':
      return { ...state, favourites: action.payload as IEpisode[] }
    default:
      return state
  }
}

export const StoreProvider = ({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}
