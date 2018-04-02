<template>
  <footer class="page-footer">
    <div class="logo-wrapper">
      <div class="logo">
        <img src="~/assets/images/vue-fes-japan-logo-white.svg">
      </div>

      <div class="link-list">
        <a href="https://jp.vuejs.org/" target="_blank" rel="noopener">Vue.js</a> | <a href="https://github.com/vuejs-jp/home" target="_blank" rel="noopener">Vue.js 日本ユーザーグループ</a> | <nuxt-link to="/code-of-conduct">行動規範</nuxt-link>
      </div>
    </div>

    <div class="licence">
      <p>
      © 2018 Vue Fes Japan 2018 Executive Committee. Contact <a href="mailto:info@vuefes.jp">info@vuefes.jp</a><br />
        Vue.js artworks by <a href="https://github.com/yyx990803" target="_blank" rel="noopener">Evan you</a> is licensed under a <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja" target="_blank" rel="noopener">Creative Commons Attribution 4.0 International License</a>.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'page-footer',
}
</script>

<style lang="scss" scoped>
.page-footer {
  padding: 30px 16px 24px;
  text-align: center;
  background-color: $primary-color;
  color: $primary-text-color--is-bg-dark;

  a {
    color: $primary-text-color--is-bg-dark;
  }
}

.logo {
  margin-bottom: 16px;
  text-align: center;

  img {
    max-width: 240px;
  }
}

.link-list {
  margin-bottom: 24px;
  font-size: 12px;
}

.licence {
  text-align: left;

  p {
    font-size: 12px;
    font-weight: 300;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    width: 235px;
    margin-right: 42px;
    margin-bottom: 4px;
  }

  .link-list {
    margin-bottom: 12px;

    a {
      margin-left: 8px;
      margin-right: 8px;
    }

    a:first-child {
      margin-left: 0;
    }

    a:last-child {
      margin-right: 0;
    }
  }

  .licence {
    display: flex;
    justify-content: center;
  }
}
</style>
