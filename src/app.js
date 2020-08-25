import { registerComponents } from './utils.js'
import './store.js'

const components = [...document.querySelectorAll("[x-data$='()']")].map(component => {
  return component.getAttribute('x-data').slice(0,-2)
})

;(async () => {
  /*
  await registerComponents({
    toggle: './components/toggle.js'
  })
  */
  await registerComponents(components)

  await import('https://cdn.jsdelivr.net/gh/kevinbatdorf/alpine-magic-helpers@0.3.x/dist/index.js')
  await import('https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js')  
})()
