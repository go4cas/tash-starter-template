import { registerComponents } from './utils.js'
import './store.js'

;(() => {
  registerComponents({
  })
  
  setTimeout(async () => {x
    await import('https://cdn.jsdelivr.net/gh/kevinbatdorf/alpine-magic-helpers@0.3.x/dist/index.js')
    await import('https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js')  
  }, 1000)  
})()
