<template>
  <div class="speaker-page">
    <div class="content">
      <HeadingWithBar>
        SPEAKER
      </HeadingWithBar>

      <div class="speaker-container">
        <div class="avatar">
          <img
            :srcset="`${speaker.avatar}, ${speaker.avatar2x} 2x`"
            :src="speaker.avatar2x"
          >
        </div>

        <div class="speaker-content">
          <div class="title">{{ speaker.title }}</div>

          <h3 class="name">{{ speaker.name }}</h3>

          <div class="social">
            <a
              class="twitter"
              :href="speaker.twitter"
              target="_blank"
              rel="noopener"
            >
              <img src="~/assets/images/icon_twitter.svg">
            </a>
            <a
              class="github"
              :href="speaker.github"
              target="_blank"
              rel="noopener"
            >
              <img src="~/assets/images/icon_github.svg">
            </a>
          </div>

          <p
            class="description"
            v-for="(paragraph, index) in speaker.description"
            :key="index"
          >{{ paragraph }}</p>
        </div>
      </div>

      <div class="session-container">
        <HeadingWithBar class="session-tag">
          {{ speaker.sessionType.toUpperCase() }}
        </HeadingWithBar>

        <HeadingWithBar v-if="speaker.venue" class="session-tag" :theme="headingWithBarTheme">
          {{ speaker.venue }}
        </HeadingWithBar>

        <h3 class="session-title">
          {{ speaker.sessionTitle }}
        </h3>

        <p
          class="session-overview"
          v-for="(paragraph, index) in speaker.sessionOverview"
          :key="index"
          v-html="paragraph"
        ></p>
      </div>

      <div class="button-wrapper">
        <LinkButton>
          <nuxt-link to="/speakers/">
            スピーカー一覧
          </nuxt-link>
        </LinkButton>
      </div>

      <div class="button-wrapper">
        <LinkButton>
          <nuxt-link to="/time-table/">
            タイムテーブル
          </nuxt-link>
        </LinkButton>
      </div>
    </div>
  </div>
</template>

<script>
import LinkButton from '~/components/LinkButton'
import HeadingWithBar from '~/components/HeadingWithBar'
import { mapGetters } from 'vuex'

export default {
  name: 'SpeakerPage',
  layout: 'simple',
  components: {
    HeadingWithBar,
    LinkButton,
  },
  head () {
    const title = `${this.speaker.sessionTitle}（${this.speaker.name}）- Vue Fes Japan 2018`
    const description = `Vue Fes Japan 2018 のセッション情報です。登壇者は ${this.speaker.name} で、${this.speaker.sessionTitle} というテーマで発表します。`
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { name: 'og:image', content: `https://vuefes.jp/speaker-opengraph/${this.speaker.card}` },
        { name: 'og:image:secure_url', content: `https://vuefes.jp/speaker-opengraph/${this.speaker.card}` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:description', content: description },
        { name: 'twitter:creator', content: '@vuefes' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:image', content: `https://vuefes.jp/speaker-opengraph/${this.speaker.card}` },
      ],
    }
  },
  asyncData ({ params }) {
    return {
      id: params.id,
    }
  },
  computed: {
    speaker () {
      return this.keynoteSpeakerById(this.id) || this.sessionSpeakerById(this.id)
    },
    headingWithBarTheme () {
      if (this.speaker.venue === '会場A') {
        return 'blue'
      } else if (this.speaker.venue === '会場B') {
        return 'red'
      }
    },
    ...mapGetters('speakers', ['keynoteSpeakerById', 'sessionSpeakerById']),
  },
}
</script>

<style lang="scss" scoped>
.speaker-page {
  min-height: 100vh;
  background: rgba(0, 0, 0, 1) url('../../assets/images/modal-bg.svg') no-repeat center -340px;
  background-size: 1920px auto;
  padding: 5vh 4%;
}

.content {
  margin: 0 auto;
  max-width: 1024px;
  background-color: $white;
  padding: 24px 4%;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.avatar img {
  width: 180px;
}

.title {
  font-size: 12px;
  font-weight: lighter;
}

.name {
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 24px;
  font-weight: lighter;
  line-height: 1.5;
}

.description,
.session-overview {
  font-size: 14px;
  line-height: 1.8;
}

.session-container {
  margin-top: 24px;
}

.session-tag {
  display: inline-block;

  & + & {
    margin-left: 10px;
  }
}

.session-title {
  margin: -4px 0 4px;
  font-size: 24px;
  font-weight: lighter;
  line-height: 1.2;
}

.social img {
  width: 24px;
  height: 24px;
}

.social .github {
  margin-left: 12px;
}

.button-wrapper {
  margin-top: 32px;
  text-align: center;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .speaker-page {
    padding: 60px 4%;
  }

  .content {
    padding: 24px 30px;
  }

  .speaker-container {
    display: flex;
  }

  .avatar {
    width: 180px;
    min-width: 180px;
  }

  .speaker-content {
    margin-left: 30px;
  }

  .name {
    font-size: 36px;
  }

  .description,
  .session-overview {
    font-size: 16px;
  }

  .session-container {
    margin-top: 12px;
  }

  .session-title {
    font-size: 36px;
  }
}
</style>
