import { IEpisode } from "./Intefaces/interfaces"

export default function EpisodesList(props: any): JSX.Element[] {
  const { episodes, toggleAction, favourites, store } = props
  const { state, dispatch } = store
  return episodes.map((elm: IEpisode) => {
    return (
      <section key={elm.id} className="episode-box">
        <img src={elm.image.medium} alt={`Rick and Morty ${elm.name}`} />
        <h2>{elm.name} </h2>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            Season: {elm.season}
            Number: {elm.number}
          </div>
          <button
            type="button"
            onClick={() => toggleAction(state, dispatch, elm)}
          >
            {favourites.find((fav: IEpisode) => fav.id === elm.id)
              ? "Remove"
              : "Fav"}
          </button>
        </section>
      </section>
    )
  })
}
