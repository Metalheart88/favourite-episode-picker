import React from 'react'
import { Store } from './Store'
import { toggleFavAction } from './actions'
import { IEpisode } from './types'

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'))

export default function FavPage(): JSX.Element {
  const { state, dispatch } = React.useContext(Store)

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className='episode-layout'>
        <EpisodesList
          episodes={state.favourites}
          toggleFavAction={(episode: IEpisode) =>
            toggleFavAction(state, dispatch, episode)
          }
          favourites={state.favourites}
        />
      </div>
    </React.Suspense>
  )
}
