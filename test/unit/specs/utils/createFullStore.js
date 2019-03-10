import { state, getters, actions, mutations } from '~/store/'
import * as speakers from '~/store/speakers'

speakers.namespaced = true

export default Vuex => {
  return new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
      speakers
    }
  })
}
