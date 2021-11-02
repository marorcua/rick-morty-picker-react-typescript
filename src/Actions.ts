import { Dispatch, IAction, IEpisode, IState } from "./Intefaces/interfaces"

export const fetchDataAction = async (dispatch:Dispatch) => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick+and+morty&embed=episodes"
    const data = await fetch(URL)
    const dataJSON = await data.json()
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    })
  }
export const toggleAction = (state:IState, dispatch:any, episode: IEpisode |any): IAction => {
    const episodeInFav = state.favourites.includes(episode)
    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode,
    }
    if (episodeInFav) {
      const favWithoutEpisode = state.favourites.filter(
        (fav: IEpisode) => fav.id !== episode.id
      )
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favWithoutEpisode,
      }
    }
    return dispatch(dispatchObj)
  }

