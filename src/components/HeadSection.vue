<template>
  <page-section class="head-section" theme="green">
    <h1 class="heading">
      日本で初めて開催する<br>Vue.jsカンファレンス
    </h1>

    <div class="description">
      <p class="readable">Vue.jsは、近年非常に人気を集めているJavaScriptフレームワークの1つです。作者Evan You氏の個人プロジェクトとしてスタートし、コアチームによる開発体制、ユーザーコミュニティとエコシステムの形成によって、Webフロントエンドの開発を支えるオープンソースソフトウェアとして発展してきました。</p>
      <p class="readable">昨年、ポーランドにおいて世界初のVue.js公式カンファレンスが開催され、今年も世界各地でいくつかのカンファレンスが予定されています。世界中ではもちろん、日本国内でもニュース、EC、広告など、幾多の分野に渡って数十社以上の現場でVue.jsの採用事例があり、今後も大きく伸びていくことが予想されています。</p>
      <p class="readable">この盛り上がりを受け、2018年秋に日本最大級のVue.jsカンファレンス「Vue Fes Japan 2018」を開催することを決定しました。国内外の著名スピーカーによるセッションの他、ユーザー同士が気軽に話し合える場も設ける予定です。ぜひ、一緒にVue.jsを楽しみ、盛り上げていきましょう！</p>
    </div>

    <div class="signature">
      <p><span class="team">Vue Fes Japan 2018実行委員会</span><br /><span class="label">代表</span>川口 和也（<a href="https://github.com/kazupon" target="_blank" rel="noopener">@kazupon</a>）</p>
    </div>

    <email-registration-form class="email-registration-form" />

    <div class="follow-us">
      <img class="twitter-icon" src="~/assets/images/twitter-icon.svg">
      <a href="https://twitter.com/vuefes" target="_blank" rel="noopener">
        Follow @vuefes on Twitter!
      </a>
    </div>
  </page-section>
</template>

<script>
import EmailRegistrationForm from '~/components/EmailRegistrationForm'
import PageSection from '~/components/PageSection'

export default {
  name: 'head-section',
  components: {
    EmailRegistrationForm,
    PageSection,
  },
}
</script>

<style lang="scss" scoped>
.heading {
  font-size: 48px !important;

  @media screen and (max-width: $layout-breakpoint--is-small-up) {
    font-size: 8vw !important;
  }
}

.description {
  margin: 60px 0 30px;

  @media screen and (max-width: $layout-breakpoint--is-small-up) {
    margin-top: 40px;
  }

  p + p {
    margin-top: 32px;
  }
}

.signature {
  text-align: right;
  margin-bottom: 60px;

  @media screen and (max-width: $layout-breakpoint--is-small-up) {
    margin-bottom: 40px;
  }

  .team {
    margin-right: 12px;
  }

  br {
    display: none;

    @media screen and (max-width: $layout-breakpoint--is-small-up) {
      display: block;
    }
  }

  .label {
    margin-right: 16px;
  }
}

.email-registration-form {
  margin-bottom: 40px;
}

.follow-us {
  display: flex;
  justify-content: center;
  align-items: center;

  .twitter-icon {
    width: 40px;
    margin-right: 16px;
  }

  a {
    font-size: 18px;
    color: $white;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .follow-us {
    .twitter-icon {
      width: 60px;
      margin-right: 20px;
    }

    a {
      font-size: 24px;
    }
  }
}
</style>
