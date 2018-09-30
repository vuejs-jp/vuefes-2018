<template>
  <div :id="`${type}-${index}`" class="sponsor" :class="[type, `index-${index}`, { 'has-heading': hasHeading }]">
    <HeadingWithBar v-if="hasHeading">
      {{ type | toUpperCase }}
    </HeadingWithBar>

    <a :href="url" target="_blank" rel="noopener">
      <img class="banner" :src="require(`~/assets/images/sponsors/${type}/${banner}`)">
    </a>

    <h4 class="name">
      {{ name }}
    </h4>

    <a class="url" :href="url" target="_blank" rel="noopener">
      {{ url }}
    </a>

    <p
      class="description"
      v-for="(paragraph, index) in description"
      :key="index"
      v-html="paragraph"
    ></p>
  </div>
</template>

<script>
import HeadingWithBar from '~/components/HeadingWithBar'

export default {
  name: 'Sponsor',
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
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
    description: {
      type: Array,
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
.sponsor {
  word-break: break-word;
}

.banner {
  display: block;
}

.name {
  margin-top: 10px;
  margin-bottom: -6px;
  font-size: 16px;
  font-weight: lighter;
  color: $primary-color;
}

.url {
  font-size: 12px;
  font-weight: lighter;
  color: $primary-color;
}

.description {
  font-size: 14px;
  font-weight: lighter;
  line-height: 1.75;
}

@media screen and (max-width: $layout-breakpoint--is-small) {
  .sponsor + .sponsor {
    margin-top: 40px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .sponsor {
    margin-top: 25px;
    margin-right: 30px;
    margin-bottom: 4px;
    width: 280px;

    &.has-heading {
      margin-top: 0;
    }
  }

  .platinum {
    &.sponsor {
      width: 360px;
    }
  }

  .sticker {
    &.sponsor.has-heading {
      margin-top: 25px; // やむを得ず特別対応しているが、もっと良い方法を求む
    }
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .platinum {
    &.sponsor {
      width: 480px;
    }
  }

  .sticker {
    &.sponsor.has-heading {
      margin-top: 0;
    }
  }
}
</style>
