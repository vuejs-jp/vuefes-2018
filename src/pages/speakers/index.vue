<template>
  <div class="speakers-page">
    <TheMain theme="red">
      <template slot="page-title">
        SPEAKERS
      </template>

      <div class="speaker-group">
        <HeadingWithBar>
          KEYNOTE
        </HeadingWithBar>

        <div class="speaker-list">
          <SpeakerWithLink
            v-for="(speaker, index) in keynoteSpeakers"
            :key="index"
            v-bind="speaker"
          />
        </div>
      </div>

      <div class="speaker-group">
        <HeadingWithBar>
          SESSION
        </HeadingWithBar>

        <div class="speaker-list">
          <SpeakerWithLink
            v-for="(speaker, index) in sessionSpeakers"
            :key="index"
            v-bind="speaker"
          />
        </div>
      </div>

      <div class="button-wrapper">
        <LinkButton>
          <nuxt-link to="/">
            トップに戻る
          </nuxt-link>
        </LinkButton>
      </div>
    </TheMain>
  </div>
</template>

<script>
import HeadingWithBar from '~/components/HeadingWithBar'
import LinkButton from '~/components/LinkButton'
import SpeakerWithLink from '~/components/SpeakerWithLink'
import TheMain from '~/components/TheMain'
import { mapGetters } from 'vuex'

export default {
  name: 'SpeakersPage',
  components: {
    HeadingWithBar,
    LinkButton,
    SpeakerWithLink,
    TheMain
  },
  head() {
    const url = `https://vuefes.jp/2018${this.path}`
    const title = 'スピーカー一覧 - Vue Fes Japan 2018'
    const description = 'Vue Fes Japan 2018 についてのスピーカー情報です。'

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:url', name: 'og:url', content: url },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', content: description },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        }
      ]
    }
  },
  computed: {
    ...mapGetters('speakers', ['keynoteSpeakers', 'sessionSpeakers'])
  },
  asyncData({ route }) {
    return {
      path: route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.speaker-group + .speaker-group {
  margin-top: 30px;
}

.heading-with-bar {
  margin-bottom: 8px;
}

.button-wrapper {
  margin-top: 40px;
  text-align: center;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .speaker-group + .speaker-group {
    margin-top: 20px;
  }

  .speaker-list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
