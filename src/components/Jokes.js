import React from "react"
import { observer } from "mobx-react"

import Joke from "./Joke"

const Jokes = ({ jokes }) => (
  <ul>
    {jokes.list.map(joke => (
      <Joke key={joke.id} remove={() => jokes.remove(joke)} joke={joke} />
    ))}
  </ul>
)

export default observer(Jokes)
