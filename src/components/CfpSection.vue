<template>
  <page-section class="cfp-section" theme="red">
    <template slot="heading">
      Call for Papers
    </template>

    <div class="description">
      <p class="readable">
        本カンファレンスにおいて、講演を広く一般に募集します。 日本最大級の Vue.js カンファレンスで登壇する絶好の機会ですので、ぜひお申し込みください。次のボタンから申し込みいただけます。
      </p>
    </div>

    <div class="button-wrapper">
      <link-button>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdSVbD3FZKM89UyDdH118Dv5KsMt8jnOFHrYKwr82R5Rwhn3Q/viewform" target="_blank" rel="noopener">
          講演に応募する
        </a>
      </link-button>
    </div>
  </page-section>
</template>

<script>
import AppButton from '~/components/AppButton'
import LinkButton from '~/components/LinkButton'
import PageSection from '~/components/PageSection'
import EmailRegistrationForm from '~/components/EmailRegistrationForm'

export default {
  name: 'cfp-section',
  components: {
    AppButton,
    LinkButton,
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

  @media screen and (max-width: $layout-breakpoint--is-small) {
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
