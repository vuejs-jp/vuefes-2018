<template>
  <BaseSection class="the-ticket-section" theme="blue">
    <template slot="heading">
      Ticket
    </template>

    <div class="description">
      <p class="readable">
        チケットはこちらで購入できます。
      </p>
      <p class="readable">
        販売期間: 2018/9/10（月）12:00 ～ 2018/10/19（金）10:30
      </p>
    </div>

    <div class="button-wrapper">
      <LinkButton>
        <a href="https://passmarket.yahoo.co.jp/event/show/detail/01m3r3zshw89.html" target="_blank" rel="noopener">
          チケット購入ページ
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
