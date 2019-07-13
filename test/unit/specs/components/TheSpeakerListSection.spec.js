import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import createFullStore from '../utils/createFullStore'
import TheSpeakerListSection from '~/components/TheSpeakerListSection'
import { getters as speakersGetters } from '~/store/speakers'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = () => createFullStore(Vuex)

describe('TheSpeakerListSection', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TheSpeakerListSection, {
      localVue,
      store,
      stubs: {
        NuxtLink: RouterLinkStub,
        'no-ssr': '<div></div>'
      }
    })
  })

  test('レンダリングできる', () => {
    expect(wrapper.text()).toContain('SPEAKERS')
  })

  describe('randomizedSessionSpeakers', () => {
    test('ランダムで 4名のセッションスピーカーを取得できる', () => {
      // console.log(wrapper.vm.randomizedSessionSpeakers)
      expect(wrapper.vm.randomizedSessionSpeakers).toHaveLength(4)
    })

    test('データを受け取ったときに、ランダムで並び替えられる', () => {
      const AVATAR_SARAH = require('~/assets/images/speakers/sarah.jpg')
      const AVATAR_SARAH_2X = require('~/assets/images/speakers/sarah@2x.jpg')
      const AVATAR_CHOPIN = require('~/assets/images/speakers/chopin.jpg')
      const AVATAR_CHOPIN_2X = require('~/assets/images/speakers/chopin@2x.jpg')

      const sarah = {
        name: 'Sarah Drasner',
        title: 'Microsoft シニアデベロッパーアドボケイト',
        avatar: AVATAR_SARAH,
        avatar2x: AVATAR_SARAH_2X,
        twitter: 'https://twitter.com/sarah_edo',
        github: 'https://github.com/sdras',
        description: [
          "Sarah Drasner は受賞歴を持つスピーカー、Microsoft のシニアデベロッパーアドボケイト、CSS-Tricks のスタッフライターです。Val Head と共に Web Animation Workshops を設立しました。SVG Animations（O'Reilly）の著者で、Vue.js の Frontend Masters workshops を行っています。",
          '以前は Trulia (Zillow) で UX デザインとエンジニアリングのマネージャーをしていました。'
        ],
        sessionTitle: 'Next-level Vue Animations',
        sessionOverview: [
          "As superfluous as something like animation may initially seem, you can tell a lot about framework by the way that it handles the concept of time. Idiosyncrasies and race conditions in rendering reveal themselves, pauses in DOM and virtual DOM diffing can be exposed. This is one of the ways Vue shows itself to be uniquely capable and elegant. In this session, we'll cover the basics of working with Vue, how to use the <transition> component and some of its offerings to create fluid effects in the browser. We'll move on to watchers, the reactivity system, and transitioning state. Finally, we'll talk about lifecycle methods, SVG, and pushing our animations to the next level."
        ]
      }

      const chopin = {
        name: 'Sébastien Chopin',
        title: 'Nuxt.js 共同クリエーター',
        avatar: AVATAR_CHOPIN,
        avatar2x: AVATAR_CHOPIN_2X,
        twitter: 'https://twitter.com/Atinux',
        github: 'https://github.com/Atinux',
        description: [
          'Sébastien は、猛烈な速さで Vue.js アプリケーションを作成するための JavaScript フレームワーク、Nuxt.js の共同クリエーターです。',
          '現在 Orion.sh に勤務しており、CMTY によるオープンソースコミュニティ、そして新しいオープンソースプロジェクトを築いています。'
        ],
        sessionTitle: 'Nuxt.js 2.0',
        sessionOverview: [
          'Webpack 4, hooks, modules, ESM, we will look at how Nuxt.js has improved and see how fast we can create Vue.js application (Universal, SPA, PWA...). We will also look at server-side rendering caveats and the best practice to keep in mind.'
        ]
      }

      const _state = {
        keynoteSpeakers: [],
        sessionSpeakers: [sarah, chopin]
      }

      const _store = () =>
        new Vuex.Store({
          modules: {
            speakers: {
              namespaced: true,
              state: _state,
              getters: speakersGetters
            }
          }
        })

      const _wrapper = mount(TheSpeakerListSection, {
        localVue,
        store: _store,
        stubs: {
          NuxtLink: RouterLinkStub,
          'no-ssr': '<div></div>'
        }
      })

      expect(_wrapper.vm.randomizedSessionSpeakers).toHaveLength(2)
      expect(_wrapper.vm.randomizedSessionSpeakers).toContain(sarah)
      expect(_wrapper.vm.randomizedSessionSpeakers).toContain(chopin)
    })
  })
})
