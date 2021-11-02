import React, { useContext } from "react"
import { IEpisode } from "./Intefaces/interfaces"
import { Store } from "./Store"
import { Link } from "@reach/router"

export default function App(props: any): JSX.Element {
  const { state } = useContext(Store)

  return (
    <>
      {console.log(state)}
      <header className="header">
        <div>
          <h1>Rick and Morty selector</h1>
          <p>Pick your favourite episode!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves">Favourites: {state.favourites.length}</Link>
          {state.favourites.map((elm: IEpisode, ind: number) => (
            <p>{elm.name}</p>
          ))}
        </div>
      </header>
      {props.children}
    </>
  )
}
