<template>
  <div class="sponsor-banner" :class="[type, `index-${index}`, { 'has-heading': hasHeading }]">
    <HeadingWithBar v-if="hasHeading">
      {{ type | toUpperCase }}
    </HeadingWithBar>

    <nuxt-link class="link-to-sponsor" :to="`/sponsors/#${type}-${index}`">
      <div v-lazy-container="{ selector: 'img' }">
        <img
          :data-src="require(`~/assets/images/sponsors/${type}/${banner}`)"
          :data-loading="require('~/assets/images/sponsors/placeholder.png')"
        >
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import HeadingWithBar from '~/components/HeadingWithBar'

export default {
  name: 'SponsorBanner',
  components: {
    HeadingWithBar,
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
  },
  filters: {
    toUpperCase (value) {
      return value.toUpperCase()
    },
  },
  computed: {
    hasHeading () {
      return this.index === 0
    },
  },
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: $layout-breakpoint--is-small) {
  .gold, .special {
    &.sponsor-banner {
      margin-top: 12px;

      &.has-heading {
        margin-top: 0;
      }
    }
  }

  .silver, .bronze, .network, .lunch, .beer, .drink, .tool, .video, .media, .sticker {
    &.sponsor-banner {
      margin-top: 12px;
      flex: 0 0 48%;

      &.has-heading {
        margin-top: 8px;
      }

      &:nth-of-type(even).index-1 {
        margin-top: 33px;
      }
    }
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .sponsor-banner {
    margin-top: 25px;
    margin-right: 20px;
    margin-bottom: 4px;

    &.has-heading {
      margin-top: 0;
    }
  }

  .platinum {
    &.sponsor-banner {
      width: 480px;
    }
  }

  .gold, .special {
    &.sponsor-banner {
      width: 280px;
    }
  }

  .silver {
    &.sponsor-banner {
      width: 180px;
    }
  }

  .bronze, .network, .lunch, .beer, .drink, .tool, .video, .media, .sticker {
    &.sponsor-banner {
      width: 160px;
    }
  }
}
</style>
