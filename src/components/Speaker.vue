<template>
  <div class="speaker">
    <div class="avatar">
      <picture>
        <source media="(max-width: 768px)" :srcset="avatar2x">
        <source media="(min-width: 769px)" :srcset="`${avatar}, ${avatar2x} 2x`">
        <img :src="avatar2x">
      </picture>
    </div>

    <div class="speaker-wrapper">
      <div class="title">{{ title }}</div>

      <h3 class="name">{{ name }}</h3>

      <div class="social">
        <a
          class="twitter"
          :href="twitter"
          target="_blank"
          rel="noopener"
        >
          <img src="~/assets/images/icon_twitter.svg">
        </a>
        <a
          class="github"
          :href="github"
          target="_blank"
          rel="noopener"
        >
          <img src="~/assets/images/icon_github.svg">
        </a>
      </div>

      <div class="description">
        <p
          class="readable"
          v-for="(description, index) in descriptions"
          :key="index"
        >{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Speaker',
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
    descriptions: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  max-width: 400px;
}

.name {
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 32px;
  line-height: 1;
}

.social img {
  width: 24px;
  height: 24px;
}

.social .github {
  margin-left: 12px;
}

.description {
  margin-bottom: 48px;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .speaker {
    display: flex;
    margin-bottom: 24px;
  }

  .avatar {
    width: 256px;
    margin-right: 40px;
    margin-bottom: 0;
  }

  .speaker-wrapper {
    width: calc(100% - (256px + 40px));
  }
}
</style>
