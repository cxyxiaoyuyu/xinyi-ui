export const withInstall = function(comp){
  comp.install = (app):void => {
    app.component(comp.name,comp)
  }
  return comp
}

export const makeInstaller = function(components){
  return {
    install(app){
      components.forEach((c) => app.use(c))
    } 
  }
}