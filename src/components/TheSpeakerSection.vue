<template>
  <BaseSection class="the-speaker-section">
    <template slot="heading">
      Speaker
    </template>

    <div class="speakers">
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
const AVATAR_EVAN = require('~/assets/images/speakers/evan.jpg')
const AVATAR_SARAH = require('~/assets/images/speakers/sarah.jpg')
const AVATAR_CHOPIN = require('~/assets/images/speakers/chopin.jpg')

export default {
  name: 'TheSpeakerSection',
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
        twitter: 'https://twitter.com/Atinux',
        github: 'https://github.com/Atinux',
        descriptions: [
          'Sébastien は、猛烈な速さで Vue.js アプリケーションを作成するための JavaScript フレームワーク、Nuxt.js の共同クリエーターです。',
          '現在 Orion.sh に勤務しており、CMTY によるオープンソースコミュニティ、そして新しいオープンソースプロジェクトを築いています。',
        ],
      }],
    }
  },
}
</script>

<style lang="scss" scoped>
.speakers {
  margin-top: 60px;
}

.more {
  text-align: center;
}
</style>
