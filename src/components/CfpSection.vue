<template>
  <page-section class="cfp-section" theme="red">
    <template slot="heading">
      Call for papers
    </template>

    <div class="description">
      <p class="readable">
        本カンファレンスにおいて講演を広く一般に募集いたします。講演をご希望の方は、以下の募集要項をお読みいただき、講演概要と共に必要事項を Vue Fes Japan 2018 実行委員会までご送付ください。
      </p>

      <p class="readable">
        皆さまのご応募をお待ちしております。
      </p>
    </div>

    <div class="button-wrapper">
      <conversion-button>
        <a href="#">
          講演を希望する
        </a>
      </conversion-button>
    </div>
  </page-section>
</template>

<script>
import ConversionButton from '~/components/ConversionButton'
import PageSection from '~/components/PageSection'

export default {
  name: 'cfp-section',
  components: {
    ConversionButton,
    PageSection,
  },
}
</script>

<style lang="scss" scoped>
.description {
  margin-bottom: 48px;

  p + p {
    margin-top: 32px;
  }
}

.button-wrapper {
  text-align: center;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .description {
    margin: 40px 0 60px;
  }
}
</style>
