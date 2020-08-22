import { registerComponents } from './utils.js'
import './store.js'

;(() => {
  registerComponents({
    dropdown: './components/dropdown.js',
    counter: './components/counter.js',
  })
  
  import('https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js')
  import('https://cdn.jsdelivr.net/gh/kevinbatdorf/alpine-magic-helpers@0.2.x/dist/index.js')
})()
