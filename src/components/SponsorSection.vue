<template>
  <page-section class="sponsor-section" theme="yellow">
    <template slot="heading">
      Be a Sponsor
    </template>

    <div class="description">
      <p class="readable">
        Vue.jsに関わる人々が集まる「Vue Fes Japan 2018」をよりよいイベントにするため、ぜひご協力いただきたいと考えております。詳しい資料は、次のボタンからご覧いただけます。
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
  margin: 40px 0 60px;

  @media screen and (max-width: $layout-breakpoint--is-small-up) {
    margin: 20px 0 40px;
  }
}

.button-wrapper {
  text-align: center;
}
</style>
