<template>
  <div class="sponsors-page">
    <TheHeadImage />

    <div class="content-wrapper">
      <div class="content">
        <h1 class="page-title">
          Sponsors
        </h1>

        <div class="sponsor-group-list">
          <SponsorGroup group="platinum" :sponsors="$store.state.platinumSponsors" v-if="$store.state.platinumSponsors.length > 0" />
          <SponsorGroup group="gold" :sponsors="$store.state.goldSponsors" v-if="$store.state.goldSponsors.length > 0" />
          <SponsorGroup group="silver" :sponsors="$store.state.silverSponsors" v-if="$store.state.silverSponsors.length > 0" />
          <SponsorGroup group="bronze" :sponsors="$store.state.bronzeSponsors" v-if="$store.state.bronzeSponsors.length > 0" />
          <SponsorGroup group="lunch" :sponsors="$store.state.lunchSponsors" v-if="$store.state.lunchSponsors.length > 0" />
          <SponsorGroup group="beer" :sponsors="$store.state.beerSponsors" v-if="$store.state.beerSponsors.length > 0" />
          <SponsorGroup group="drink" :sponsors="$store.state.drinkSponsors" v-if="$store.state.drinkSponsors.length > 0" />
        </div>

        <div class="button-wrapper">
          <LinkButton>
            <nuxt-link to="/">
              トップに戻る
            </nuxt-link>
          </LinkButton>
        </div>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script>
import LinkButton from '~/components/LinkButton'
import SponsorGroup from '~/components/SponsorGroup'
import TheFooter from '~/components/TheFooter'
import TheHeadImage from '~/components/TheHeadImage'

export default {
  name: 'SponsorsPage',
  components: {
    LinkButton,
    SponsorGroup,
    TheFooter,
    TheHeadImage,
  },
  head () {
    return {
      title: 'Vue Fes Japan 2018 のスポンサー一覧',
      meta: [
        { hid: 'description', name: 'description', content: 'Vue Fes Japan 2018 にご協賛いただいているスポンサーの一覧です。' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.content-wrapper {
  padding: 60px 5%;
}

.page-title {
  margin-top: 0;
  margin-bottom: 24px;
  text-align: center;
  font-size: 14vw;
  line-height: 1.3;
  color: $primary-color;

  // font-size の最大値を 48px にする
  @media screen and (min-width: 600px) {
    font-size: 48px;
  }
}

.button-wrapper {
  margin-top: 56px;
  text-align: center;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .content-wrapper {
    padding: 80px 40px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .content {
    max-width: 1160px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
