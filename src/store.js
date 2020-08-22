import Spruce from 'https://cdn.jsdelivr.net/gh/ryangjchandler/spruce@0.x.x/dist/spruce.module.js'

Spruce.config({
  globalStoreVariable: true
})

Spruce.store('counter', {
  count: 0
})

export default Spruce
