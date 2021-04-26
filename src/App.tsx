import React from 'react'
import { Store } from './Store'

const App = (): JSX.Element => {
  const store = React.useContext(Store)
  return (
    <>
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episode!</p>
      {store.episodes}
    </>
  )
}

export default App
