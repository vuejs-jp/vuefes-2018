<template>
  <BaseSection class="the-speaker-list-section" theme="red">
    <template slot="heading">
      SPEAKERS
    </template>

    <div class="speaker-group">
      <div class="speaker-list">
        <Speaker
          v-for="(speaker, index) in randomizedKeynoteSpeakers"
          :key="`keynote-${speaker.name}`"
          v-bind="speaker"
          :index="index"
          type="KEYNOTE"
        />

        <Speaker
          v-for="(speaker, index) in randomizedSessionSpeakers"
          :key="`session-${speaker.name}`"
          v-bind="speaker"
          :index="index"
          type="SESSION"
        />
      </div>
    </div>

    <div class="button-wrapper">
      <link-button>
        <nuxt-link class="link-to-speakers" to="/speakers/">
          全スピーカーを見る
        </nuxt-link>
      </link-button>
    </div>
  </BaseSection>
</template>

<script>
import { mapGetters } from 'vuex'
import shuffle from 'lodash.shuffle'
import BaseSection from '~/components/BaseSection'
import LinkButton from '~/components/LinkButton'
import Speaker from '~/components/Speaker'

export default {
  name: 'TheSpeakerListSection',
  components: {
    BaseSection,
    LinkButton,
    Speaker
  },
  computed: {
    randomizedKeynoteSpeakers() {
      return shuffle(this.keynoteSpeakers)
    },
    randomizedSessionSpeakers() {
      return shuffle(this.sessionSpeakers).slice(0, 4)
    },
    ...mapGetters('speakers', ['keynoteSpeakers', 'sessionSpeakers'])
  }
}
</script>

<style lang="scss" scoped>
.speaker-group + .speaker-group {
  margin-top: 48px;
}

.speaker-list {
  margin-bottom: -10px;
}

.button-wrapper {
  margin-top: 24px;
  text-align: center;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .speaker-list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
