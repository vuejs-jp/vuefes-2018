<template>
  <page-section class="sponsor-section" theme="yellow">
    <template slot="heading">
      Be a Sponsor
    </template>

    <div class="description">
      <p class="readable">
        Vue.js に関わる人々が集まる「Vue Fes Japan 2018」をよりよいイベントにするため、ぜひご協力いただきたいと考えております。詳しい資料は、次のボタンからご覧いただけます。
      </p>
    </div>

    <div class="button-wrapper">
      <conversion-button>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe7-dcNzJ-hLdGEDjgaLvoMMiPX-G2vy7V9azn5DQByxtdgzg/viewform" target="_blank" rel="noopener">
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

  @media screen and (max-width: $layout-breakpoint--is-small) {
    margin: 20px 0 40px;
  }
}

.button-wrapper {
  text-align: center;
}
</style>
