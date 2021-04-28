import React from 'react'
import { Store } from './Store'
import { IAction, IEpisode } from './types'

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'))

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store)

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction()
  })

  const fetchDataAction = async (): Promise<IAction> => {
    const URL =
      'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const data = await fetch(URL)
    const dataJSON = await data.json()
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes,
    })
  }

  const toggleFavAction = (episode: IEpisode): IAction => {
    if (state.favourites.includes(episode)) {
      const favWithoutEpisode: IEpisode[] = state.favourites.filter(
        (favEpisode: IEpisode) => favEpisode.id !== episode.id
      )
      return dispatch({
        type: 'REMOVE_FAV',
        payload: favWithoutEpisode,
      })
    }

    return dispatch({
      type: 'ADD_FAVOURITE',
      payload: episode,
    })
  }

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <section className='episode-layout'>
        <EpisodesList
          episodes={state.episodes}
          toggleFavAction={toggleFavAction}
          favourites={state.favourites}
        />
      </section>
    </React.Suspense>
  )
}
