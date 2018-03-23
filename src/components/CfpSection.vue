<template>
  <page-section class="cfp-section" theme="red">
    <template slot="heading">
      Call for Papers
    </template>

    <div class="description">
      <p class="readable">
        本カンファレンスにおいて、講演を広く一般に募集します。詳しい情報については後日公開予定です。
      </p>
      <p class="readable">メールアドレスをご登録いただくと、最新情報をお届けします。</p>
    </div>

    <email-registration-form class="email-registration-form" />
  </page-section>
</template>

<script>
import ConversionButton from '~/components/ConversionButton'
import PageSection from '~/components/PageSection'
import EmailRegistrationForm from '~/components/EmailRegistrationForm'

export default {
  name: 'cfp-section',
  components: {
    ConversionButton,
    PageSection,
    EmailRegistrationForm,
  },
  methods: {
    showComingSoon (event) {
      event.preventDefault()
      alert('講演を希望していただいてありがとうございます！（期待しています！）でもごめんなさい、ただいま準備中ですのでもうしばらくお待ちください！')
    },
  },
}
</script>

<style lang="scss" scoped>
.description {
  margin: 40px 0 60px;

  @media screen and (max-width: $layout-breakpoint--is-small-up) {
    margin: 20px 0 40px;
  }

  p + p {
    margin-top: 32px;
  }
}

.button-wrapper {
  text-align: center;
}
</style>
