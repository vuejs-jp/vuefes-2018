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
    TheMain,
  },
  head () {
    return {
      title: 'SPEAKERS - Vue Fes Japan 2018',
      meta: [
        { hid: 'description', name: 'description', content: 'Vue Fes Japan 2018 についてのスピーカー情報です。' },
      ],
    }
  },
  computed: {
    ...mapGetters('speakers', ['keynoteSpeakers', 'sessionSpeakers']),
  },
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
