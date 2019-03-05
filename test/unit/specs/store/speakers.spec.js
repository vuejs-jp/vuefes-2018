import { state, getters } from '~/store/speakers'

describe('getters', () => {
  describe('keynoteSpeakerById', () => {
    test('keynoteSpeaker を id をもとに取得できる', () => {
      const speaker = getters.keynoteSpeakerById(state())('yyx990803')
      expect(speaker.id).toEqual('yyx990803')
    })
  })

  describe('sessionSpeakerById', () => {
    test('sessionSpeaker を id をもとに取得できる', () => {
      const speaker = getters.sessionSpeakerById(state())('ktsn')
      expect(speaker.id).toEqual('ktsn')
    })
  })
})
