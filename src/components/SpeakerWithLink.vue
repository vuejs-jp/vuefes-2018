<template>
  <div class="speaker-with-link">
    <nuxt-link class="wrapper" :to="`/speakers/${id}/`">
      <div class="avatar">
        <img :srcset="`${avatar}, ${avatar2x} 2x`" :src="avatar2x" />
      </div>

      <div class="title">
        {{ title }}
      </div>

      <h3 class="name">
        {{ name }}
      </h3>
    </nuxt-link>

    <div class="social">
      <a class="twitter" :href="twitter" target="_blank" rel="noopener">
        <img src="~/assets/images/icon_twitter.svg" />
      </a>
      <a class="github" :href="github" target="_blank" rel="noopener">
        <img src="~/assets/images/icon_github.svg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpeakerWithLink',
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    avatar2x: {
      type: String,
      required: true
    },
    twitter: {
      type: String,
      required: true
    },
    github: {
      type: String,
      required: true
    },
    description: {
      type: Array,
      required: true
    },
    sessionTitle: {
      type: String,
      required: true
    },
    sessionOverview: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  text-decoration: none;
}

.avatar {
  margin-bottom: 6px;

  img {
    display: block;
    width: 100%;
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
  .speaker-with-link {
    margin-bottom: 24px;
  }

  .avatar {
    margin-bottom: 10px;
    width: 75%;
    max-width: 256px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .wrapper {
    cursor: pointer;
  }

  .speaker-with-link {
    width: 180px;
    margin-right: 30px;
    margin-bottom: 20px;
  }

  .speaker-with-link:last-child {
    margin-right: 0;
  }
}
</style>
