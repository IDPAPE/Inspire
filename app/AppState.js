import { Image } from './models/Image.js'
import { Quote } from './models/Quote.js'
import { Todo } from './models/Todo.js'
import { Weather } from './models/Weather.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {Image} */
  image = null

  /**@type {Quote} */
  quote = null

  /**@type {Weather} */
  weather = null

  /**@type {Todo} */
  newTodo = null

  /**@type {Todo[]} */
  todos = []

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  uncompleteCount = 0
}

export const AppState = createObservableProxy(new ObservableAppState())