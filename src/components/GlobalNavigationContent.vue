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
  </nav>
</template>

<script>
export default {
  name: 'GlobalNavigationContent',
}
</script>

<style lang="scss" scoped>
.global-navigation-content {
  color: $primary-text-color--is-bg-dark;
  background-color: $primary-color;

  a {
    color: $primary-text-color--is-bg-dark;
    text-decoration: none;
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
