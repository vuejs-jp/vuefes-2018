<template>
  <header class="the-header">
    <div class="header-content">
      <div class="global-navigation-trigger-container">
        <a
          class="global-navigation-trigger"
          href="#"
          @click.stop.prevent="toggleGlobalNavigation"
        >
          <span />
          <span />
          <span />
        </a>
      </div>

      <div class="logo-wrapper">
        <nuxt-link to="/">
          <img
            class="logo"
            src="~/assets/images/vue-fes-japan-logo-white.svg"
          />
        </nuxt-link>
      </div>
    </div>

    <div class="global-navigation-contentainer">
      <transition name="slide">
        <GlobalNavigationContent v-show="isGlobalNavigationShown" />
      </transition>
    </div>
  </header>
</template>

<script>
import GlobalNavigationContent from '~/components/GlobalNavigationContent'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TheHeader',
  components: {
    GlobalNavigationContent
  },
  computed: {
    ...mapGetters(['isGlobalNavigationShown'])
  },
  methods: {
    toggleGlobalNavigation(event) {
      if (this.isGlobalNavigationShown) {
        this.hideGlobalNavigation()
      } else {
        this.showGlobalNavigation()
      }
    },
    ...mapActions(['hideGlobalNavigation', 'showGlobalNavigation'])
  }
}
</script>

<style lang="scss" scoped>
.header-content {
  position: relative;
  display: flex;
  background-color: $primary-color;
  width: 100%;
  height: $header-height;
}

.header-fixed {
  .header-content {
    position: fixed;
    top: 0;
    z-index: 100;
  }
}

.logo-wrapper {
  padding: 12px 16px;
}

.logo {
  width: 156px;
}

.global-navigation-trigger-container {
  width: $side-area-width--is-small;
  text-align: center;
}

.global-navigation-trigger {
  position: relative;
  display: inline-block;
  transition: all 0.4s;
  width: $header-height;
  height: $header-height;

  span {
    position: absolute;
    left: 10px;
    display: inline-block;
    width: calc(100% - 20px);
    height: 3px;
    background-color: $primary-text-color--is-bg-dark;
    border-radius: 4px;
    transition: all 0.4s;
  }

  span:nth-of-type(1) {
    top: 16px;
  }

  span:nth-of-type(2) {
    top: 24px;
  }

  span:nth-of-type(3) {
    top: 32px;
  }

  &:hover {
    opacity: 1;
  }
}

.is-global-navigation-shown {
  .global-navigation-trigger {
    span:nth-of-type(1) {
      -webkit-transform: translateY(8px) rotate(-45deg);
      transform: translateY(8px) rotate(-45deg);
    }

    span:nth-of-type(2) {
      opacity: 0;
    }

    span:nth-of-type(3) {
      -webkit-transform: translateY(-8px) rotate(45deg);
      transform: translateY(-8px) rotate(45deg);
    }
  }
}

.global-navigation-contentainer {
  position: relative;
}

.global-navigation-content {
  position: fixed;
  top: $header-height;
  bottom: 0;
  z-index: 100;
  width: $side-area-width--is-small-up;
  min-width: $side-area-width--is-small-up;
  padding: 20px;
  transition: all 0.4s;
}

.slide-enter-active,
.slide-leave-active {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}

.slide-enter,
.slide-leave-to {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}
</style>
