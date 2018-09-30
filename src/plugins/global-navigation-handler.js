export default ({ app, store }) => {
  app.router.beforeEach((to, from, next) => {
    store.dispatch('hideGlobalNavigation')
    next()
  })
}
