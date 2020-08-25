export const buildComponent = (data, methods = {}, init = () => {}) => {
  return () => { return { init, ...data, ...methods } }
}

export const registerComponents = components => {
  return Promise.all(
    Object.entries(components).filter(function ([component]) {
      return document.querySelector(`[x-data="${component}()"]`)
    }).map(function ([component, handler]) {
      return import(handler).then(module => window[component] = module.default)
    })
  )
}
