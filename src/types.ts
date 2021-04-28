import React from 'react'

export type Dispatch = React.Dispatch<IAction>

export interface IState {
  episodes: IEpisode[]
  favourites: IEpisode[]
}

export interface IAction {
  type: string
  payload: IEpisode | IEpisode[]
}

export interface IEpisode {
  airdate: string
  airstamp: string
  airtime: string
  id: number
  image: {
    medium: string
    original: string
  }
  name: string
  number: number
  runtime: number
  season: number
  summary: string
  type: string
  url: string
}

export interface IEpisodeProps extends IState {
  toggleFavAction: (episode: IEpisode) => IAction
}
