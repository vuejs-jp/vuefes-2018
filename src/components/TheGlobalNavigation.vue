<template>
  <div class="the-global-navigation">
    <nuxt-link to="/">
      <img src="~/assets/images/vue-fes-japan-logo-white.svg">
    </nuxt-link>

    <GlobalNavigationContent />
  </div>
</template>

<script>
import GlobalNavigationContent from '~/components/GlobalNavigationContent'

export default {
  name: 'TheGlobalNavigation',
  components: {
    GlobalNavigationContent,
  },
}
</script>

<style lang="scss" scoped>
.the-global-navigation {
  position: relative;
  padding: 20px;
  background-color: $primary-color;
}
</style>
