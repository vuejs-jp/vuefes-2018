import { state, getters } from '~/store/speakers'

describe('getters', () => {
  describe('keynoteSpeakerById', () => {
    it('keynoteSpeaker を id をもとに取得できる', () => {
      const speaker = getters.keynoteSpeakerById(state())('yyx990803')
      expect(speaker.id).to.equal('yyx990803')
    })
  })

  describe('sessionSpeakerById', () => {
    it('sessionSpeaker を id をもとに取得できる', () => {
      const speaker = getters.sessionSpeakerById(state())('ktsn')
      expect(speaker.id).to.equal('ktsn')
    })
  })
})
