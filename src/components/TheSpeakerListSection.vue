<template>
  <BaseSection class="the-speaker-list-section">
    <template slot="heading">
      Speakers
    </template>

    <div class="speaker-list">
      <Speaker
        v-for="(speaker, index) in speakers"
        :key="index"
        v-bind="speaker"
      />
    </div>

    <div class="more">
      他スピーカーは決定次第、更新予定です。
    </div>
  </BaseSection>
</template>

<script>
import BaseSection from '~/components/BaseSection'
import Speaker from '~/components/Speaker'

// TODO: ピクセル密度によって画像を出し分ける記述をイイ感じにする。何か npm 探すとか、なければ作るとか
const AVATAR_EVAN = require('~/assets/images/speakers/evan.jpg')
const AVATAR_EVAN_2X = require('~/assets/images/speakers/evan@2x.jpg')
const AVATAR_SARAH = require('~/assets/images/speakers/sarah.jpg')
const AVATAR_SARAH_2X = require('~/assets/images/speakers/sarah@2x.jpg')
const AVATAR_CHOPIN = require('~/assets/images/speakers/chopin.jpg')
const AVATAR_CHOPIN_2X = require('~/assets/images/speakers/chopin@2x.jpg')
const AVATAR_EDD = require('~/assets/images/speakers/edd.jpg')
const AVATAR_EDD_2X = require('~/assets/images/speakers/edd@2x.jpg')
const AVATAR_RAHUL = require('~/assets/images/speakers/rahul.jpg')
const AVATAR_RAHUL_2X = require('~/assets/images/speakers/rahul@2x.jpg')

export default {
  name: 'TheSpeakerListSection',
  components: {
    BaseSection,
    Speaker,
  },
  data () {
    return {
      speakers: [{
        name: 'Evan You',
        title: 'Vue.js クリエーター',
        avatar: AVATAR_EVAN,
        avatar2x: AVATAR_EVAN_2X,
        twitter: 'https://twitter.com/youyuxi',
        github: 'https://github.com/yyx990803',
        descriptions: [
          'Evan は開発者、デザイナー、そしてクリエイティブコーダーです。彼は、リアクティブなコンポーネントでモダンな Web インターフェイスを構築するための JavaScript フレームワーク、Vue.js の作者です。',
          'かつて、GitHub で最もスターを集めたフルスタック JavaScript フレームワークであった Meteor の開発グループでも働いていました。Google Creative Lab で、さまざまな Google プロダクト向けの実験的な UI プロトタイプに、2年間取り組んでいた経験もあります。',
        ],
      }, {
        name: 'Sarah Drasner',
        title: 'Microsoft シニアデベロッパーアドボケイト',
        avatar: AVATAR_SARAH,
        avatar2x: AVATAR_SARAH_2X,
        twitter: 'https://twitter.com/sarah_edo',
        github: 'https://github.com/sdras',
        descriptions: [
          'Sarah Drasner は受賞歴を持つスピーカー、Microsoft のシニアデベロッパーアドボケイト、CSS-Tricks のスタッフライターです。Val Head と共に Web Animation Workshops を設立しました。SVG Animations（O\'Reilly）の著者で、Vue.js の Frontend Masters workshops を行っています。',
          '以前は Trulia (Zillow) で UX デザインとエンジニアリングのマネージャーをしていました。',
        ],
      }, {
        name: 'Sébastien Chopin',
        title: 'Nuxt.js 共同クリエーター',
        avatar: AVATAR_CHOPIN,
        avatar2x: AVATAR_CHOPIN_2X,
        twitter: 'https://twitter.com/Atinux',
        github: 'https://github.com/Atinux',
        descriptions: [
          'Sébastien は、猛烈な速さで Vue.js アプリケーションを作成するための JavaScript フレームワーク、Nuxt.js の共同クリエーターです。',
          '現在 Orion.sh に勤務しており、CMTY によるオープンソースコミュニティ、そして新しいオープンソースプロジェクトを築いています。',
        ],
      }, {
        name: 'Edd Yerburgh',
        title: 'Vue Test Utils メインクリエーター',
        avatar: AVATAR_EDD,
        avatar2x: AVATAR_EDD_2X,
        twitter: 'https://twitter.com/EddYerburgh',
        github: 'https://github.com/eddyerburgh',
        descriptions: [
          'Edd Yerburgh は Vue Test Utils のメインの作者で、Vue コアチームメンバー、BBC のソフトウェアエンジニアです。',
        ],
      }, {
        name: 'Rahul Kadyan',
        title: 'オープンソース・エンスージアスト',
        avatar: AVATAR_RAHUL,
        avatar2x: AVATAR_RAHUL_2X,
        twitter: 'https://twitter.com/znck0',
        github: 'https://github.com/znck',
        descriptions: [
          'Rahul は開発者でオープンソース・エンスージアストです。彼は Vue エコシステム向けにツール上で動作するコンパイラユーティリティを作っています。',
          '彼は、Myntra (Flipkart Group) でシニアエンジニアとして働いています。',
        ],
      }],
    }
  },
}
</script>

<style lang="scss" scoped>
.speaker-list {
  margin-top: 60px;
}

.more {
  text-align: center;
}
</style>
