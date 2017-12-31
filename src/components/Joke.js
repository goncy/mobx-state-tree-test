import React from "react"
import { observer } from "mobx-react"

const Joke = ({ joke, remove }) => (
  <li>
    {joke.value} <span onClick={remove}>x</span>
  </li>
)

export default observer(Joke)
