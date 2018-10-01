<template>
  <div
    class="speaker"
    :style="speakerStyle"
  >
    <HeadingWithBar v-if="hasHeading">
      {{ type }}
    </HeadingWithBar>

    <div class="avatar">
      <no-ssr>
        <div
          class="image-placeholder"
          slot="placeholder">
        </div>
        <img
          :srcset="`${avatar}, ${avatar2x} 2x`"
          :src="avatar2x"
        >
      </no-ssr>
    </div>

    <div class="title">
      {{ title }}
    </div>

    <h3 class="name">
      {{ name }}
    </h3>

    <div class="social">
      <no-ssr>
        <a
          class="twitter"
          :href="twitter"
          target="_blank"
          rel="noopener"
        >
          <img src="~/assets/images/icon_twitter.svg">
        </a>
      </no-ssr>
      <no-ssr>
        <a
          class="github"
          :href="github"
          target="_blank"
          rel="noopener"
        >
          <img src="~/assets/images/icon_github.svg">
        </a>
      </no-ssr>
    </div>
  </div>
</template>

<script>
import HeadingWithBar from '~/components/HeadingWithBar'

export default {
  name: 'Speaker',
  components: {
    HeadingWithBar,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    avatar2x: {
      type: String,
      required: true,
    },
    twitter: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
  },
  computed: {
    hasHeading () {
      return this.index === 0
    },
    speakerStyle () {
      if (this.hasHeading) {
        return
      }

      return { 'margin-top': '25px' }
    },
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  margin-bottom: 6px;

  img {
    display: block;
    width: 100%;
  }

  .image-placeholder {
    width: 100%;
    background-color: #d8d8d8;
  }
}

.title {
  font-size: 10px;
  font-weight: lighter;
}

.name {
  margin-top: -2px;
  margin-bottom: 0;
  font-size: 24px;
  font-weight: lighter;
}

.social img {
  width: 24px;
  height: 24px;
}

.social .github {
  margin-left: 12px;
}

@media screen and (max-width: $layout-breakpoint--is-small) {
  .speaker {
    margin-bottom: 20px;
  }

  .avatar {
    margin-bottom: 10px;
    width: 75%;
    max-width: 256px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .speaker {
    width: 180px;
    margin-right: 40px;
    margin-bottom: 15px;

    .image-placeholder {
      width: 180px;
      height: 180px;
    }
  }

  .speaker:last-child {
    margin-right: 0;
  }
}
</style>
