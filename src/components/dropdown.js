import { buildComponent } from '../utils.js'

const data = {
  open: false,
}

const methods = {
  show() {
    this.open = true
  },
  hide() {
    this.open = false
  }
}

export default buildComponent(data, methods)
