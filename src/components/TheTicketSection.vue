<template>
  <BaseSection class="the-ticket-section" theme="blue">
    <template slot="heading">
      TIME TABLE
    </template>

    <div class="description">
      <p class="readable">
        タイムテーブルは以下から閲覧可能です。
      </p>
    </div>

    <div class="button-wrapper">
      <LinkButton>
        <nuxt-link to="/time-table">
          タイムテーブルへ
        </nuxt-link>
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
