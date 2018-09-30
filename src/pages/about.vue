<template>
  <div class="about-page">
    <TheMain>
      <template slot="page-title">
        ABOUT
      </template>

      <h2 class="heading">
        日本で初めて開催する Vue.js カンファレンス
      </h2>

      <div class="description">
        <p class="readable">
          Vue.js は、近年非常に人気を集めている JavaScript フレームワークの 1つです。作者 Evan You 氏の個人プロジェクトとしてスタートし、コアチームによる開発体制、ユーザーコミュニティとエコシステムの形成によって、Web フロントエンドの開発を支えるオープンソースソフトウェアとして発展してきました。
        </p>
        <p class="readable">
          昨年、ポーランドにおいて世界初の Vue.js 公式カンファレンスが開催され、今年も世界各地でいくつかのカンファレンスが予定されています。世界中ではもちろん、日本国内でもニュース、EC、広告など、幾多の分野に渡って数十社以上の現場で Vue.js の採用事例があり、今後も大きく伸びていくことが予想されています。
        </p>
        <p class="readable">
          この盛り上がりを受け、2018年秋に日本最大級の Vue.js カンファレンス「Vue Fes Japan 2018」を開催することを決定しました。国内外の著名スピーカーによるセッションの他、ユーザー同士が気軽に話し合える場も設ける予定です。ぜひ、一緒に Vue.js を楽しみ、盛り上げていきましょう！
        </p>
      </div>

      <div class="signature">
        <p><span class="team">Vue Fes Japan 2018 実行委員会</span><br /><span class="label">代表</span>川口 和也（<a href="https://github.com/kazupon" target="_blank" rel="noopener">@kazupon</a>）</p>
      </div>

      <h2 class="heading">
        Vue Fes Japan 2018 実行委員会について
      </h2>

      <div class="description">
        <p class="readable">
          Vue Fes Japan 2018 は、<a href="https://github.com/vuejs-jp/home" target="_blank" rel="noopener">Vue.js 日本ユーザーグループ</a>のスタッフが中心となって結成された、Vue Fes Japan 2018 実行委員会によって企画・運営されています。同委員会は、全員が無償で協力しており、人件費、交通費など、あらゆる名目での対価を受け取っていません。
        </p>
      </div>

      <HeadingWithBar>
        LEADER
      </HeadingWithBar>

      <ul class="leaders">
        <li class="leader" v-for="leader in leaders" :key="leader.twitterId">
          <a :href="`https://twitter.com/${leader.twitterId}`" target="_blank" rel="noopener">
            <div v-lazy-container="{ selector: 'img' }">
              <img class="avatar"
                :data-src="require(`~/assets/images/staffs/${leader.avatar}`)"
                :data-loading="require('~/assets/images/staffs/placeholder.png')"
              >
            </div>
          </a>
          <a class="link-to-twitter" :href="`https://twitter.com/${leader.twitterId}`" target="_blank" rel="noopener">
            @{{ leader.twitterId }}
          </a>
        </li>
      </ul>

      <HeadingWithBar>
        CORE STAFF
      </HeadingWithBar>

      <ul class="staff-list">
        <li class="staff" v-for="staff in staffs" :key="staff.twitterId">
          <a :href="`https://twitter.com/${staff.twitterId}`" target="_blank" rel="noopener">
            <div v-lazy-container="{ selector: 'img' }">
              <img class="avatar"
                :data-src="require(`~/assets/images/staffs/${staff.avatar}`)"
                :data-loading="require('~/assets/images/staffs/placeholder.png')"
              >
            </div>
          </a>

          <a class="link-to-twitter" :href="`https://twitter.com/${staff.twitterId}`" target="_blank" rel="noopener">
            @{{ staff.twitterId }}
          </a>
        </li>
      </ul>

      <div class="button-wrapper">
        <LinkButton>
          <nuxt-link to="/">
            トップに戻る
          </nuxt-link>
        </LinkButton>
      </div>
    </TheMain>
  </div>
</template>

<script>
import HeadingWithBar from '~/components/HeadingWithBar'
import LinkButton from '~/components/LinkButton'
import TheMain from '~/components/TheMain'

export default {
  name: 'AboutPage',
  components: {
    HeadingWithBar,
    LinkButton,
    TheMain,
  },
  computed: {
    leaders () {
      return [
        { twitterId: 'kazu_pon', avatar: 'kazu_pon@2x.jpg' },
      ]
    },
    staffs () {
      return [
        { twitterId: '448jp', avatar: '448jp@2x.jpg' },
        { twitterId: 'andoshin11', avatar: 'andoshin11@2x.jpg' },
        { twitterId: 'c5meru', avatar: 'c5meru@2x.jpg' },
        { twitterId: 'hashedrock', avatar: 'hashedrock@2x.jpg' },
        { twitterId: 'hypermkt', avatar: 'hypermkt@2x.jpg' },
        { twitterId: 'inouetakuya', avatar: 'inouetakuya@2x.jpg' },
        { twitterId: 'kawakami0717', avatar: 'kawakami0717@2x.jpg' },
        { twitterId: 'kazuyukimiyake', avatar: 'kazuyukimiyake@2x.jpg' },
        { twitterId: 'kotamats', avatar: 'kotamats@2x.jpg' },
        { twitterId: 'masaakikunsan', avatar: 'masaakikunsan@2x.jpg' },
        { twitterId: 'positiveflat', avatar: 'positiveflat@2x.jpg' },
        { twitterId: 'potato4d', avatar: 'potato4d@2x.jpg' },
        { twitterId: 'shika358', avatar: 'shika358@2x.jpg' },
        { twitterId: 'yakiniku040220', avatar: 'yakiniku040220@2x.jpg' },
      ].sort((a, b) => {
        if (a.twitterId < b.twitterId) {
          return -1
        }
        if (a.twitterId > b.twitterId) {
          return 1
        }
        return 0
      })
    },
  },
  head () {
    return {
      title: 'ABOUT - Vue Fes Japan 2018',
      meta: [
        { hid: 'description', name: 'description', content: 'Vue Fes Japan 2018 についての概要です。' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.description {
  margin: 10px 0 30px;
  font-weight: lighter;

  p {
    margin-bottom: 32px;
  }
}

.signature {
  text-align: right;
  margin-bottom: 40px;

  .team {
    margin-right: 12px;
  }

  .label {
    margin-right: 16px;
  }
}

.heading-with-bar {
  margin-bottom: 8px;
}

.leaders {
  display: flex;
  margin: 0 0 30px;
}

.staff-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 0 30px;
}

.leader,
.staff {
  margin: 0 20px 20px 0;
}

.avatar {
  display: block;
  margin-bottom: 4px;
  width: 100px;
}

.link-to-twitter {
  display: block;
  font-size: 12px;
  font-weight: lighter;
  line-height: 1;
  color: $black;
  text-decoration: none;
}

.button-wrapper {
  margin-top: 40px;
  text-align: center;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .signature {
    margin-bottom: 60px;

    br {
      display: none;
    }
  }

  .staff-list {
    margin-bottom: 50px;
  }
}
</style>
