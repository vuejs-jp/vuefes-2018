<template>
  <nav class="global-navigation-content">
    <p class="date-and-place">
      2018.11.3 (Sat.)<br>
      秋葉原 UDX 4F / UDX ギャラリー
    </p>

    <ul class="nav-list">
      <li class="nav-item">
        <nuxt-link to="/">
          TICKET
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/about/">
          ABOUT
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/time-table/">
          TIME TABLE
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/speakers/">
          SPEAKERS
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/access/">
          ACCESS
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/sponsors/">
          SPONSORS
        </nuxt-link>
      </li>
    </ul>

    <TranslationSwitch class="translation-switch" v-if="mode !== 'header'" />
  </nav>
</template>

<script>
import TranslationSwitch from '~/components/TranslationSwitch'

export default {
  name: 'GlobalNavigationContent',
  props: {
    mode: String,
  },
  components: {
    TranslationSwitch,
  },
}
</script>

<style lang="scss" scoped>
.global-navigation-content {
  height: calc(100vh - 50px);
  color: $primary-text-color--is-bg-dark;
  background-color: $primary-color;
  box-sizing: border-box;

  a {
    color: $primary-text-color--is-bg-dark;
    text-decoration: none;
  }

  .translation-switch {
    position: absolute;
    left: 20px;
    bottom: 20px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .global-navigation-content {
    height: auto;
  }
}

.date-and-place {
  margin-top: 0;
  font-size: 12px;
}

.nav-item {
  line-height: 2.4;

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
}
</style>
