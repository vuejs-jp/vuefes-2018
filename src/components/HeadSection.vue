<template>
  <page-section class="head-section" theme="green">
    <h1 class="heading">
      Vue.js をもっと楽しむための祭典
    </h1>

    <div class="description">
      <p class="readable">
        Vue.js は、近年非常に人気を集めている JavaScript フレームワークの 1つです。世界中ではもちろん、日本国内でもニュース、EC、広告など、幾多の分野に渡って数十社以上の現場で採用事例があり、今後も大きく伸びていくことが予想されています。
      </p>
      <p class="readable">
        この盛り上がりを受け、2018年秋に日本最大級の Vue.js カンファレンス「Vue Fes Japan 2018」を開催することが決定しました。国内外の著名スピーカーによるセッションの他、ユーザー同士が気軽に話し合える場も設ける予定です。ぜひ、一緒に Vue.js を楽しみ、盛り上げていきましょう！
      </p>
    </div>

    <div class="signature">
      <p>
        <span class="team">Vue Fes Japan 2018 実行委員会</span><br /><span class="label">代表</span>川口 和也（@kazupon）
      </p>
    </div>

    <email-registration-form class="email-registration-form" />

    <div class="follow-us">
      <img class="twitter-icon" src="~/assets/images/twitter-icon.svg">
      <a href="#">
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
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin-top: 48px;
  margin-bottom: 48px;
  font-size: 48px;
  line-height: 1.3;
  text-align: left;
  color: $primary-color;
}

.description {
  margin: 20px 0 48px;

  p + p {
    margin-top: 32px;
  }
}

.signature {
  text-align: right;
  margin-bottom: 48px;

  .team {
    margin-right: 12px;
  }

  .label {
    margin-right: 16px;
  }
}

.email-registration-form {
  margin-bottom: 48px;
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
</style>
