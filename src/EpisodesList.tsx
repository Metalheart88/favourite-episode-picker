import React from 'react'
import { IEpisode, IEpisodeProps } from './types'

const EpisodesList = (props: IEpisodeProps): JSX.Element[] => {
  const { episodes, toggleFavAction, favourites } = props
  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className='episode-box'>
        <img
          src={episode.image?.medium}
          alt={`Rick and Morty ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            Season: {episode.season} Episode: {episode.number}
          </div>
          <button type='button' onClick={() => toggleFavAction(episode)}>
            {favourites.includes(episode) ? 'Remove from Fav' : 'Add to Fav'}
          </button>
        </section>
      </section>
    )
  })
}

export default EpisodesList
