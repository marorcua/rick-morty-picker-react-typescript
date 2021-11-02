import React, { lazy, Suspense, useContext } from "react"
import { toggleAction } from "./Actions"
import { Store } from "./Store"

const EpisodesList = lazy<any>(() => import("./EpisodesList"))

function FavPage() {
  const { state, dispatch } = useContext(Store)

  const props = {
    episodes: state.favourites,
    toggleAction,
    favourites: state.favourites,
    store: { state, dispatch },
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="episode-layout">
        <EpisodesList {...props} />
      </div>
    </Suspense>
  )
}

export default FavPage
