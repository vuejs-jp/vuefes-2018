<template>
  <page-section class="speaker-section">
    <template slot="heading">
      Speaker
    </template>

    <div class="speaker">
      <div class="icon">
        <img src="~/assets/images/speakers/evan.jpg">
      </div>

      <div class="description-wrapper">
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

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .speaker {
    display: flex;
    margin: 56px 0 60px;
  }

  .icon {
    width: 256px;
    margin-right: 40px;
  }

  .description-wrapper {
    width: calc(100% - (256px + 40px));
  }
}
</style>
