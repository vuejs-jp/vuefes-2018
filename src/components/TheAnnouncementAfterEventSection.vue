<template>
  <BaseSection class="the-announcement-after-event-section" theme="blue">
    <template slot="heading">
      THANK YOU!
    </template>

    <div class="description">
      <p class="readable">
        Vue Fes Japan 2018にご参加いただいたみなさん、ありがとうございました。
      </p>
      <p class="readable">
        当日撮影された写真を CC0 ライセンスにて公開しますので、ブログや SNS
        などにご自由にお使いください。
      </p>
    </div>

    <div class="button-wrapper">
      <LinkButton>
        <a
          href="https://photos.app.goo.gl/B8VgBuBcgwxaCC45A"
          rel="noopener"
          target="_blank"
        >
          Google Photo
        </a>
      </LinkButton>
    </div>

    <div class="description">
      <p class="readable">
        各セッションで使われたスライドや動画は、各スピーカーの詳細ページにアップしました。
      </p>
    </div>

    <div class="button-wrapper">
      <LinkButton>
        <nuxt-link to="/speakers/">
          スピーカー一覧
        </nuxt-link>
      </LinkButton>
    </div>
  </BaseSection>
</template>

<script>
import BaseSection from '~/components/BaseSection'
import LinkButton from '~/components/LinkButton'

export default {
  name: 'TheAnnouncementAfterEventSection',
  components: {
    BaseSection,
    LinkButton
  }
}
</script>

<style lang="scss" scoped>
.button-wrapper {
  margin: 36px auto;
  text-align: center;
}
</style>
