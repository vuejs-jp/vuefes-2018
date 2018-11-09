<template>
  <BaseSection class="the-ticket-section" theme="blue">
    <template slot="heading">
      THANK YOU!
    </template>

    <div class="description">
      <p class="readable">
        Vue Fes Japan 2018にご参加いただいたみなさん、ありがとうございました。
      </p>
      <p class="readable">
        当日撮影された写真を CC0 ライセンスにて公開しますので、ブログや SNS などにご自由にお使いください。
      </p>
      <p class="readable">
        各セッションで使われたスライドや動画などは追って更新予定です。
      </p>
    </div>

    <div class="button-wrapper">
      <LinkButton>
        <a href="https://photos.app.goo.gl/B8VgBuBcgwxaCC45A" rel="noopener" target="_blank">
          Google Photo
        </a>
      </LinkButton>
    </div>
  </BaseSection>
</template>

<script>
import BaseSection from '~/components/BaseSection'
import LinkButton from '~/components/LinkButton'

export default {
  name: 'TheTicketSection',
  components: {
    BaseSection,
    LinkButton,
  },
}
</script>

<style lang="scss" scoped>
.button-wrapper {
  margin-top: 36px;
  text-align: center;
}
</style>
