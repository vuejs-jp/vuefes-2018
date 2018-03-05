<template>
  <page-section class="team-section">
    <template slot="heading">
      About us
    </template>
    <div>
      <p>Vue Fes Japan 2018 は、Vue Fes Japan 2018 実行委員会によって企画・運営されています。同会は、代表と有志のスタッフで組織されており、その全員が無償で協力しています。人件費、交通費など、あらゆる名目での対価を受け取っていません。</p>
    </div>
    <div>
      TODO: スタッフの画像
    </div>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'

export default {
  name: 'team',
  components: {
    PageSection,
  },
}
</script>

<style lang="scss" scoped>
// TODO: Not yet implemented
</style>
