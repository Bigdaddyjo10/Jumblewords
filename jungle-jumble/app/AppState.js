import { Jumble } from "./models/Jumble.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  jumbles = [
    new Jumble({
      name: '🫎 Jumble',
      body: 'this is easy',
    }),
    new Jumble({
      name: '🐜 Jumble',
      body: 'this is moderate',
    }),
    new Jumble({
      name: '🦈 Jumble',
      body: 'this is extremely difficult',
    }),
  ]


  /**
    * @type {Jumble} */
  activeJumble = null
}
export const AppState = createObservableProxy(new ObservableAppState())