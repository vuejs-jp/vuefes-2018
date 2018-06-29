<template>
  <BaseSection class="the-cfp-section" theme="red">
    <template slot="heading">
      Call for Papers
    </template>

    <div class="description">
      <p class="readable">
        本カンファレンスにおいて、講演を広く一般に募集します。 日本最大級の Vue.js カンファレンスで登壇する絶好の機会ですので、ぜひお申し込みください。次のボタンから申し込みいただけます。
      </p>
    </div>

    <div class="button-wrapper">
      <LinkButton>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdSVbD3FZKM89UyDdH118Dv5KsMt8jnOFHrYKwr82R5Rwhn3Q/viewform" target="_blank" rel="noopener">
          講演に応募する
        </a>
      </LinkButton>
    </div>
  </BaseSection>
</template>

<script>
import BaseSection from '~/components/BaseSection'
import LinkButton from '~/components/LinkButton'

export default {
  name: 'TheCfpSection',
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

  p + p {
    margin-top: 32px;
  }
}

.button-wrapper {
  text-align: center;
}
</style>
