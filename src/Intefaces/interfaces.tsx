/**
 * All interfaces
 */

import React from "react"

export type Dispatch = React.Dispatch<IAction>

export interface IState {
  episodes: IEpisode[]
  favourites: IEpisode[]
}

export interface IAction {
  type: string
  payload: IEpisode[] | any
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
  rating: { average: number }
  runtime: number
  season: number
  summary: string
  type: string
  url: string
}

export interface IEpisodeProps {
  episodes: IEpisode[]
  toggleAction: (
    state: IState,
    dispatch: Dispatch,
    episode: IEpisode
  ) => IAction
  favourites: IEpisode[]
  store: { state: IState; dispatch: Dispatch }
}
