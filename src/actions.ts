import { IAction, IEpisode, IState } from './types'

export const fetchDataAction = async (dispatch: any): Promise<IAction> => {
  const URL =
    'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
  const data = await fetch(URL)
  const dataJSON = await data.json()
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes,
  })
}

export const toggleFavAction = (
  state: IState,
  dispatch: any,
  episode: IEpisode
): IAction => {
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
