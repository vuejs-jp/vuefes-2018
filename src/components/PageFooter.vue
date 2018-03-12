<template>
  <footer class="page-footer">
    <div>
      <div class="logo">
        <img src="~/assets/images/vue-fes-japan-logo-white.svg">
      </div>

      <div class="link-list">
        <a href="https://jp.vuejs.org/" target="_blank" rel="noopener">Vue.js</a> | <a href="https://github.com/vuejs-jp/home" target="_blank">Vue.js 日本ユーザーグループ</a>
      </div>
    </div>

    <div class="licence">
      <p>
        © 2018 Vue Fes Japan 2018 Executive Committee<br />
        Vue.js artworks by <a href="#" target="_blank" rel="noopener">Evan you</a> is licensed under a <a href="#" target="_blank">Creative Commons Attribution 4.0 International License</a>.
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
    font-size: 10px;
  }
}
</style>
