<template>
  <page-section class="team-section">
    <template slot="heading">
      About us
    </template>

    <div class="description">
      <p class="readable">Vue Fes Japan 2018 は、<a href="https://github.com/vuejs-jp/home" target="_blank">Vue.js 日本ユーザーグループ</a> のスタッフが中心となって結成された、Vue Fes Japan 2018 実行委員会によって企画・運営されています。同会は、代表と有志のスタッフで組織されており、その全員が無償で協力しています。人件費、交通費など、あらゆる名目での対価を受け取っていません。</p>
    </div>

    <ul class="staffs">
      <li class="staff" v-for="staff in staffs" :key="staff.twitterId">
        <a :href="`https://twitter.com/${staff.twitterId}`" target="_blank" rel="noopener">
          <img class="icon" :src="require(`~/assets/images/staffs/${staff.icon}`)">
        </a>
        <a class="link-to-twitter" :href="`https://twitter.com/${staff.twitterId}`" target="_blank" rel="noopener">
          {{ staff.twitterId }}
        </a>
      </li>
    </ul>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'

export default {
  name: 'team',
  components: {
    PageSection,
  },
  computed: {
    staffs () {
      return [
        { twitterId: '@448jp', icon: '448jp.png' },
        { twitterId: '@kazu_pon', icon: 'kazu_pon.png' },
        { twitterId: '@kawakami0717', icon: 'kawakami0717.jpg' },
        { twitterId: '@kazuyukimiyake', icon: 'kazuyukimiyake.jpg' },
        { twitterId: '@masaakikunsan', icon: 'masaakikunsan.jpg' },
        { twitterId: '@inouetakuya', icon: 'inouetakuya.jpg' },
        { twitterId: '@c5meru', icon: 'c5meru.jpg' },
        { twitterId: '@hashedrock', icon: 'hashedrock.jpg' },
        { twitterId: '@shika358', icon: 'shika358.jpg' },
        { twitterId: '@potato4d', icon: 'potato4d.jpg' },
        { twitterId: '@positiveflat', icon: 'positiveflat.png' },
        { twitterId: '@hypermkt', icon: 'hypermkt.png' },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.team-section {
  padding-bottom: 40px;
}

.description {
  margin-bottom: 20px;
}

.staffs {
  display: flex;
  flex-wrap: wrap;
}

.staff {
  width: calc((100% - (6px * 2)) / 3);
  margin-top: 15px;
}

.staff:nth-of-type(3n-1),
.staff:nth-of-type(3n) {
  margin-left: 6px;
}

.icon {
  display: block;
  margin-bottom: 4px;
}

.link-to-twitter {
  display: block;
  text-align: center;
  font-size: 12px;
  color: $black;
  text-decoration: none;
}
</style>
