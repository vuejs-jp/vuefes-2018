export const state = () => ({
  isGlobalNavigationShown: false
})

export const getters = {
  isGlobalNavigationShown: state => state.isGlobalNavigationShown
}

export const actions = {
  showGlobalNavigation({ commit }) {
    document.body.classList.add('header-fixed')
    document.body.classList.add('is-global-navigation-shown')
    commit('setIsGlobalNavigationShown', true)
  },

  hideGlobalNavigation({ commit }) {
    document.body.classList.remove('is-global-navigation-shown')
    commit('setIsGlobalNavigationShown', false)

    setTimeout(() => {
      document.body.classList.remove('header-fixed')
    }, 500) // .global-navigation のスライドが終わるまで待つ
  }
}

export const mutations = {
  setIsGlobalNavigationShown(state, isGlobalNavigationShown) {
    state.isGlobalNavigationShown = isGlobalNavigationShown
  }
}
