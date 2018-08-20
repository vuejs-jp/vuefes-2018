<template>
  <BaseSection class="the-sponsor-banner-list-section">
    <template slot="heading">
      Sponsors
    </template>

    <div class="sponsor-banner-group-list">
      <SponsorBannerGroup group="platinum" :sponsors="$store.state.platinumSponsors" v-if="$store.state.platinumSponsors.length > 0" />
      <SponsorBannerGroup group="gold" :sponsors="$store.state.goldSponsors" v-if="$store.state.goldSponsors.length > 0" />
      <SponsorBannerGroup group="silver" :sponsors="$store.state.silverSponsors" v-if="$store.state.silverSponsors.length > 0" />
      <SponsorBannerGroup group="bronze" :sponsors="$store.state.bronzeSponsors" v-if="$store.state.bronzeSponsors.length > 0" />
      <SponsorBannerGroup group="special" :sponsors="$store.state.specialSponsors" v-if="$store.state.specialSponsors.length > 0" />
      <SponsorBannerGroup group="lunch" :sponsors="$store.state.lunchSponsors" v-if="$store.state.lunchSponsors.length > 0" />
      <SponsorBannerGroup group="beer" :sponsors="$store.state.beerSponsors" v-if="$store.state.beerSponsors.length > 0" />
      <SponsorBannerGroup group="drink" :sponsors="$store.state.drinkSponsors" v-if="$store.state.drinkSponsors.length > 0" />
      <SponsorBannerGroup group="tool" :sponsors="$store.state.toolSponsors" v-if="$store.state.toolSponsors.length > 0" />
      <SponsorBannerGroup group="video" :sponsors="$store.state.videoSponsors" v-if="$store.state.videoSponsors.length > 0" />
      <SponsorBannerGroup group="media" :sponsors="$store.state.mediaSponsors" v-if="$store.state.mediaSponsors.length > 0" />
      <SponsorBannerGroup group="sticker" :sponsors="$store.state.stickerSponsors" v-if="$store.state.stickerSponsors.length > 0" />
    </div>

    <div class="button-wrapper">
      <link-button>
        <nuxt-link class="link-to-sponsors" to="/sponsors/">
          詳細
        </nuxt-link>
      </link-button>
    </div>
  </BaseSection>
</template>

<script>
import BaseSection from '~/components/BaseSection'
import LinkButton from '~/components/LinkButton'
import SponsorBannerGroup from '~/components/SponsorBannerGroup'

export default {
  name: 'TheSponsorBannerListSection',
  components: {
    BaseSection,
    LinkButton,
    SponsorBannerGroup,
  },
}
</script>

<style lang="scss" scoped>
.sponsor-banner-group + .sponsor-banner-group {
  margin-top: 40px;
}

.button-wrapper {
  margin-top: 56px;
  text-align: center;
}
</style>

<style lang="scss">
@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .the-sponsor-banner-list-section {
    .content {
      max-width: 1160px;
    }
  }
}
</style>
