// extras 是注册该组件需要注册的额外组件 
// 比如 button 需要注册 button-group
export const withInstall = function(comp,extras?){
  comp.install = (app):void => {
    app.component(comp.name,comp)
    if(extras){
      for(let c of extras){
        app.component(c.name,c) 
      } 
    }
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