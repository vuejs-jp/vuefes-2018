<template>
  <footer class="the-footer">
    <div class="content">
      <div class="logo-wrapper">
        <div class="logo">
          <img src="~/assets/images/vue-fes-japan-logo-white.svg" />
        </div>

        <div class="social-wrapper">
          <div class="social-button" @click="openTwitterForm">
            <img src="~/assets/images/logo_twitter.svg" alt="Twitter" />
          </div>
          <div class="social-button" @click="openFacebookForm">
            <img src="~/assets/images/logo_facebook.svg" alt="Facebook" />
          </div>
          <div class="social-button" @click="openHatenaBookmarkForm">
            <img
              src="~/assets/images/logo_hatena-bookmark.svg"
              alt="はてなブックマーク"
            />
          </div>
        </div>
      </div>

      <div class="link-list">
        <a href="https://jp.vuejs.org/" target="_blank" rel="noopener">
          Vue.js
        </a>
        |
        <a
          href="https://github.com/vuejs-jp/home"
          target="_blank"
          rel="noopener"
        >
          Vue.js 日本ユーザーグループ
        </a>
        |
        <nuxt-link to="/code-of-conduct/">
          行動規範
        </nuxt-link>
        |
        <nuxt-link to="/privacy/">
          プライバシーポリシー
        </nuxt-link>
      </div>

      <div class="licence">
        <p>
          © 2018 Vue Fes Japan 2018 Executive Committee. Contact
          <a href="mailto:info@vuefes.jp">info@vuefes.jp</a><br />
          Vue.js artworks by
          <a href="https://github.com/yyx990803" target="_blank" rel="noopener">
            Evan you
          </a>
          is licensed under a
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja"
            target="_blank"
            rel="noopener"
          >
            Creative Commons Attribution 4.0 International License
          </a>
          .
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  computed: {
    encodedUri() {
      return encodeURIComponent(location.href)
    },
    hostAndPath() {
      return location.host + location.pathname
    }
  },
  methods: {
    /**
     * Twitter ボタンをクリックしたときに実行されます。
     */
    openTwitterForm() {
      window.open(
        `https://twitter.com/share?url=${
          this.encodedUri
        }&hashtags=vuefes,vuejs&text=${encodeURIComponent(
          '日本で初めて開催する大規模 Vue.js カンファレンス「Vue Fes Japan 2018」'
        )}`,
        'tweet',
        'width=650, height=470'
      )
    },
    /**
     * Facebook ボタンをクリックしたときに実行されます。
     */
    openFacebookForm() {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${this.encodedUri}&src=sdkpreparse`,
        'share',
        'width=670, height=328'
      )
    },
    /**
     * はてなブックマークボタンをクリックしたときに実行されます。
     */
    openHatenaBookmarkForm() {
      window.open(
        `http://b.hatena.ne.jp/entry/s/${this.hostAndPath}`,
        'bookmark'
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.the-footer {
  padding: 30px;
  background-color: $primary-color;
  color: $primary-text-color--is-bg-dark;

  a {
    color: $primary-text-color--is-bg-dark;
  }
}

.content {
  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    margin: 0 auto;
    width: 530px;
  }
}

.logo {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  img {
    display: block;
    max-width: 240px;
  }
}

.social-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    justify-content: flex-start;
    margin-bottom: 0;
  }
}

.social-button {
  width: 13.75%;
  max-width: 56px;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    width: 44px;
    height: 44px;
    cursor: pointer;
  }

  & + & {
    margin-left: 13.75%;

    @media screen and (min-width: $layout-breakpoint--is-small-up) {
      margin-left: 22px;
    }
  }

  img {
    display: block;
  }
}

.link-list {
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
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
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
  }

  .logo {
    display: block;
    width: 235px;
    margin: 0 auto 0 0;
  }

  .link-list {
    margin-bottom: 16px;
    text-align: left;
    line-height: 25px;

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

    p {
      margin: 0;
    }
  }
}
</style>
