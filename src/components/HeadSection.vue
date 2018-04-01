<template>
  <page-section class="head-section" theme="green">
    <h1 class="heading">
      日本で初めて開催する<br>Vue.js カンファレンス
    </h1>

    <div class="description">
      <p class="readable">
        Vue.js は、近年非常に人気を集めている JavaScript フレームワークの 1つです。作者 Evan You 氏の個人プロジェクトとしてスタートし、コアチームによる開発体制、ユーザーコミュニティとエコシステムの形成によって、Web フロントエンドの開発を支えるオープンソースソフトウェアとして発展してきました。
      </p>
      <p class="readable">
        昨年、ポーランドにおいて世界初の Vue.js 公式カンファレンスが開催され、今年も世界各地でいくつかのカンファレンスが予定されています。世界中ではもちろん、日本国内でもニュース、EC、広告など、幾多の分野に渡って数十社以上の現場で Vue.js の採用事例があり、今後も大きく伸びていくことが予想されています。
      </p>
      <p class="readable">
        この盛り上がりを受け、2018年秋に日本最大級の Vue.js カンファレンス「Vue Fes Japan 2018」を開催することを決定しました。国内外の著名スピーカーによるセッションの他、ユーザー同士が気軽に話し合える場も設ける予定です。ぜひ、一緒に Vue.js を楽しみ、盛り上げていきましょう！
      </p>
    </div>

    <div class="signature">
      <p><span class="team">Vue Fes Japan 2018 実行委員会</span><br /><span class="label">代表</span>川口 和也（<a href="https://github.com/kazupon" target="_blank" rel="noopener">@kazupon</a>）</p>
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
.head-section {
  .heading {
    font-size: 8vw;

    // font-size の最大値を 48px にする
    @media screen and (min-width: 600px) {
      font-size: 48px;
    }
  }
}

.description {
  margin-top: 40px;

  p + p {
    margin-top: 32px;
  }
}

.signature {
  text-align: right;
  margin-bottom: 40px;

  .team {
    margin-right: 12px;
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
  .description {
    margin: 60px 0 30px;
  }

  .signature {
    margin-bottom: 60px;

    br {
      display: none;
    }
  }

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
