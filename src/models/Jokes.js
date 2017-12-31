import { types, destroy } from "mobx-state-tree"

export const Joke = types
  .model({
    icon_url: types.string,
    id: types.string,
    url: types.string,
    value: types.string
  })
  .actions(self => ({
    addPistol() {
      self.value += "🔫"
    }
  }))
  .views(self => ({
    get shouted() {
      return self.value.toUpperCase()
    }
  }))

export const Jokes = types
  .model({
    list: types.optional(types.array(Joke), [
      {
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        id: "4MQVZpMKRXiN9yMMIuGBNA",
        url: "http://api.chucknorris.io/jokes/4MQVZpMKRXiN9yMMIuGBNA",
        value: "Pound for pound, Chuck Norris is the biggest badass ever."
      },
      {
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        id: "zY34_rcIQ3ikA7LjLST9zw",
        url: "http://api.chucknorris.io/jokes/zY34_rcIQ3ikA7LjLST9zw",
        value: "Chuck Norris drinks Mexican water by the gallon."
      }
    ])
  })
  .actions(self => ({
    add(joke) {
      self.list.push(joke)
    },
    remove(joke) {
      destroy(joke)
    }
  }))
