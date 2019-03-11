import { state, getters, actions, mutations } from '~/store/'
import * as speakers from '~/store/speakers'
import * as sponsors from '~/store/sponsors'

speakers.namespaced = true
sponsors.namespaced = true

export default Vuex => {
  return new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
      speakers,
      sponsors
    }
  })
}
