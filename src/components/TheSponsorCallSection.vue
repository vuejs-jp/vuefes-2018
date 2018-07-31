<template>
  <BaseSection class="the-sponsor-call-section" theme="yellow">
    <template slot="heading">
      Be a Sponsor
    </template>

    <div class="description">
      <p class="readable">
        Vue.js に関わる人々が集まる「Vue Fes Japan 2018」をよりよいイベントにするため、ぜひご協力いただきたいと考えております。詳しい資料は、次のボタンからご覧いただけます。
      </p>
    </div>

    <div class="button-wrapper">
      <LinkButton>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfzON2QZww1v53Unb3RZQPqZ1upIm4CjVAduCYNDyiaLbiwUA/viewform" target="_blank" rel="noopener">
          スポンサーになる
        </a>
      </LinkButton>
    </div>
  </BaseSection>
</template>

<script>
import BaseSection from '~/components/BaseSection'
import LinkButton from '~/components/LinkButton'

export default {
  name: 'TheSponsorCallSection',
  components: {
    BaseSection,
    LinkButton,
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
