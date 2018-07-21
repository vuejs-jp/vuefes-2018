<template>
  <BaseSection class="the-team-section">
    <template slot="heading">
      About us
    </template>

    <div class="description">
      <p class="readable">
        Vue Fes Japan 2018 は、<a href="https://github.com/vuejs-jp/home" target="_blank" rel="noopener">Vue.js 日本ユーザーグループ</a>のスタッフが中心となって結成された、Vue Fes Japan 2018 実行委員会によって企画・運営されています。同委員会は、全員が無償で協力しており、人件費、交通費など、あらゆる名目での対価を受け取っていません。
      </p>
    </div>

    <ul class="leaders">
      <li class="leader" v-for="leader in leaders" :key="leader.twitterId">
        <a :href="`https://twitter.com/${leader.twitterId}`" target="_blank" rel="noopener">
          <img class="avatar" :src="require(`~/assets/images/staffs/${leader.avatar}`)">
        </a>
        <a class="link-to-twitter" :href="`https://twitter.com/${leader.twitterId}`" target="_blank" rel="noopener">
          @{{ leader.twitterId }}
        </a>
      </li>
    </ul>

    <ul class="staffs">
      <li class="staff" v-for="staff in staffs" :key="staff.twitterId">
        <a :href="`https://twitter.com/${staff.twitterId}`" target="_blank" rel="noopener">
          <img class="avatar" :src="require(`~/assets/images/staffs/${staff.avatar}`)">
        </a>
        <a class="link-to-twitter" :href="`https://twitter.com/${staff.twitterId}`" target="_blank" rel="noopener">
          @{{ staff.twitterId }}
        </a>
      </li>
    </ul>
  </BaseSection>
</template>

<script>
import BaseSection from '~/components/BaseSection'

export default {
  name: 'TheTeamSection',
  components: {
    BaseSection,
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
        { twitterId: 'kawakami0717', avatar: 'kawakami0717@2x.jpg' },
        { twitterId: 'kazuyukimiyake', avatar: 'kazuyukimiyake@2x.jpg' },
        { twitterId: 'masaakikunsan', avatar: 'masaakikunsan@2x.jpg' },
        { twitterId: 'inouetakuya', avatar: 'inouetakuya@2x.jpg' },
        { twitterId: 'c5meru', avatar: 'c5meru@2x.jpg' },
        { twitterId: 'hashedrock', avatar: 'hashedrock@2x.jpg' },
        { twitterId: 'shika358', avatar: 'shika358@2x.jpg' },
        { twitterId: 'potato4d', avatar: 'potato4d@2x.jpg' },
        { twitterId: 'positiveflat', avatar: 'positiveflat@2x.jpg' },
        { twitterId: 'hypermkt', avatar: 'hypermkt@2x.jpg' },
        { twitterId: 'andoshin11', avatar: 'andoshin11@2x.jpg' },
        { twitterId: 'kotamats', avatar: 'kotamats@2x.jpg' },
        { twitterId: 'yakiniku040220', avatar: 'yakiniku040220@2x.jpg' },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.the-team-section {
  padding-bottom: 40px;
}

.description {
  margin-bottom: 20px;
}

.leaders {
  display: flex;
  justify-content: center;
}

.staffs {
  display: flex;
  flex-wrap: wrap;
}

.leader,
.staff {
  width: calc((100% - (6px * 2)) / 3);
  margin-top: 15px;
}

.staff + .staff {
  margin-left: 6px;
}

.staff:nth-of-type(3n+1) {
  margin-left: 0;
}

.avatar {
  display: block;
  margin-bottom: 4px;
}

.link-to-twitter {
  display: block;
  text-align: center;
  font-size: 3.75vw;
  line-height: 1;
  color: $black;
  text-decoration: none;

  @media screen and (min-width: $layout-breakpoint--is-small-up) {
    font-size: 12px;
  }

  @media screen and (min-width: $layout-breakpoint--is-medium-up) {
    font-size: 16px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .description {
    margin: 40px 0 24px;
  }

  .staffs {
    margin-bottom: 40px;
    padding: 0 16px;
  }

  .leader,
  .staff {
    width: calc((100% - (20px * 5)) / 6);
  }

  .staff + .staff {
    margin-left: 20px;
  }

  .staff:nth-of-type(6n+1) {
    margin-left: 0;
  }

  .staff:nth-child(n+7) {
    margin-top: 40px;
  }
}
</style>
