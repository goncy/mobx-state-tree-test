import { Joke, Jokes } from "./Jokes"

const INITIAL_JOKE = {
  icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  id: "4MQVZpMKRXiN9yMMIuGBNA",
  url: "http://api.chucknorris.io/jokes/4MQVZpMKRXiN9yMMIuGBNA",
  value: "Pound for pound, Chuck Norris is the biggest badass ever."
}

describe("Joke model", () => {
  let joke

  beforeEach(() => {
    joke = Joke.create(INITIAL_JOKE)
  })

  it("can create a joke", () => {
    expect(joke.value).toBe(INITIAL_JOKE.value)
  })

  it("can create a joke", () => {
    joke.addPistol()

    expect(joke.value).toBe(INITIAL_JOKE.value + "🔫")
  })

  it("can shout a joke", () => {
    expect(joke.shouted).toBe(INITIAL_JOKE.value.toUpperCase())
  })
})

describe("Jokes model", () => {
  let joke
  let jokes

  beforeEach(() => {
    joke = Joke.create(INITIAL_JOKE)
    jokes = Jokes.create({ list: [] })
  })

  it("can create a jokes list", () => {
    expect(jokes.list.length).toBe(0)
  })

  it("can add jokes to a jokes list", () => {
    jokes.add(joke)
    expect(jokes.list.length).toBe(1)
  })

  it("can remove jokes from a jokes list", () => {
    jokes.add(joke)
    expect(jokes.list.length).toBe(1)
    jokes.remove(joke)
    expect(jokes.list.length).toBe(0)
  })
})
