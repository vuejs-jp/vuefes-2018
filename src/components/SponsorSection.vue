<template>
  <page-section class="sponsor-section" theme="yellow">
    <template slot="heading">
      Be a sponsor
    </template>

    <div class="description">
      <p class="readable">
        Vue.js に関わる人々が集まり「Vue Fes Japan 2018」をよりよいイベントにするため、ぜひ、ご協力いただきたいと考えております。次項に紹介する「協賛（4種）」メニューのいずれかで「Vue Fes Japan 2018」の活動をサポートいただければ幸いです。
      </p>
    </div>

    <div class="button-wrapper">
      <conversion-button>
        <a href="#">
          スポンサーになる
        </a>
      </conversion-button>
    </div>
  </page-section>
</template>

<script>
import ConversionButton from '~/components/ConversionButton'
import PageSection from '~/components/PageSection'

export default {
  name: 'sponsor-section',
  components: {
    ConversionButton,
    PageSection,
  },
}
</script>

<style lang="scss" scoped>
.description {
  margin-bottom: 48px;
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
