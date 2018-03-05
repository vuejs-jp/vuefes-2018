<template>
  <page-section class="speaker-section">
    <template slot="heading">
      Speaker
    </template>

    <div>
      <img src="~/assets/images/speakers/evan.jpg">
    </div>

    <div>
      <div class="label">
        Vue.js プロジェクトリーダー
      </div>

      <h3 class="speaker-name">
        Evan You
      </h3>

      <div class="description">
        <p class="readable">
          Vue Technology LLC ファウンダー。オープンソースの JavaScript フレームワークである Vue.js でフルタイムで働いています。デザイン、コーディング、そして、時々アートを作ることを夢見ています。
        </p>
      </div>
    </div>

    <div class="more">
      and more...
    </div>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'

export default {
  name: 'speaker-section',
  components: {
    PageSection,
  },
}
</script>

<style lang="scss" scoped>
.speaker-name {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 32px;
}

.description {
  margin-bottom: 48px;
}

.more {
  text-align: center;
}
</style>
