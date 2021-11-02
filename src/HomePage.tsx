import React, { lazy, useContext, useEffect } from "react"
import { fetchDataAction, toggleAction } from "./Actions"
import { IEpisodeProps } from "./Intefaces/interfaces"
import { Store } from "./Store"

const EpisodesList = lazy<any>(() => import("./EpisodesList"))

export default function HomePage() {
  const { state, dispatch } = useContext(Store)

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch)
  })

  const props: IEpisodeProps = {
    episodes: state.episodes,
    favourites: state.favourites,
    toggleAction,
    store: { state, dispatch },
  }

  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
    </>
  )
}
