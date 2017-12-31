import React, { Component } from "react"
import { inject } from "mobx-react"

import Jokes from "./components/Jokes"

import "./App.css"

class App extends Component {
  addJoke = async () => {
    const req = await fetch("https://api.chucknorris.io/jokes/random")
    const joke = await req.json()

    this.props.jokes.add(joke)
  }

  render() {
    const { jokes } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Chuck Norris jokes</h1>
        </header>
        <div className="App-intro">
          <Jokes jokes={jokes} />
        </div>
        <button onClick={this.addJoke}>Add Joke</button>
      </div>
    )
  }
}

export default inject("jokes")(App)
