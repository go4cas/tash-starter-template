import { buildComponent } from '../utils.js'

const data = {
  count: 0,
}

const methods = {
  inc() {
    this.count++
  },
  dec() {        
    this.count--
  }
}

export default buildComponent(data, methods)
