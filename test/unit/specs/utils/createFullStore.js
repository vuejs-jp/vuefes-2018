import { state, getters } from '~/store/'
import * as speakers from '~/store/speakers'

speakers.namespaced = true

export default Vuex => {
  return new Vuex.Store({
    state,
    getters,
    modules: {
      speakers
    }
  })
}
