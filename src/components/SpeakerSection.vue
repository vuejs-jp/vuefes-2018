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
          Vue.js クリエーター
        </div>

        <h3 class="speaker-name">
          Evan You
        </h3>

        <div class="description">
          <p class="readable">
            Evan は開発者、デザイナー、そしてクリエイティブコーダーです。彼は、リアクティブなコンポーネントでモダンな Web インターフェイスを構築するための JavaScript フレームワーク、Vue.js の作者です。
          </p>
          <p class="readable">
            かつて、GitHub で最もスターを集めたフルスタック JavaScript フレームワークであった Meteor の開発グループでも働いていました。Google Creative Lab で、さまざまな Google プロダクト向けの実験的な UI プロトタイプに、2年間取り組んでいた経験もあります。
          </p>
        </div>
      </div>
    </div>

    <div class="more">
      他スピーカーは決定次第、更新予定です。
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
.speaker {
  display: flex;
  margin: 60px 0 10px;

  @media screen and (max-width: $layout-breakpoint--is-small) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
}

.icon {
  width: 256px;
  margin-right: 40px;
  line-height: 0;

  @media screen and (max-width: $layout-breakpoint--is-small) {
    width: 100%;
    margin: 0 0 10px;
  }
}

.speaker-name {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 32px;
  line-height: 1;
}

.description {
  margin-bottom: 48px;
}

.more {
  text-align: center;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .description-wrapper {
    width: calc(100% - (256px + 40px));
  }
}
</style>
