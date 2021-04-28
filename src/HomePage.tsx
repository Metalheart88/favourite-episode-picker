import React from 'react'
import { Store } from './Store'
import { fetchDataAction, toggleFavAction } from './actions'
import { IEpisode } from './types'

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'))

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store)

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch)
  })

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <section className='episode-layout'>
        <EpisodesList
          episodes={state.episodes}
          toggleFavAction={(episode: IEpisode) =>
            toggleFavAction(state, dispatch, episode)
          }
          favourites={state.favourites}
        />
      </section>
    </React.Suspense>
  )
}
