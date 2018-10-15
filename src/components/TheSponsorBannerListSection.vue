<template>
  <BaseSection class="the-sponsor-banner-list-section" theme="green">
    <template slot="heading">
      SPONSORS
    </template>

    <div class="sponsor-banner-group">
      <SponsorBanner
        v-for="(sponsor, index) in platinumSponsors"
        :key="`platinum-${index}`"
        :index="index"
        type="platinum"
        :name="sponsor.name"
        :banner="sponsor.banner"
      />
    </div>

    <div class="sponsor-banner-group">
      <SponsorBanner
        v-for="(sponsor, index) in goldSponsors"
        :key="`gold-${index}`"
        :index="index"
        type="gold"
        :name="sponsor.name"
        :banner="sponsor.banner"
      />
    </div>

    <div class="sponsor-banner-group">
      <SponsorBanner
        v-for="(sponsor, index) in silverSponsors"
        :key="`silver-${index}`"
        :index="index"
        type="silver"
        :name="sponsor.name"
        :banner="sponsor.banner"
      />
    </div>

    <div class="sponsor-banner-group">
      <SponsorBanner
        v-for="(sponsor, index) in bronzeSponsors"
        :key="`bronze-${index}`"
        :index="index"
        type="bronze"
        :name="sponsor.name"
        :banner="sponsor.banner"
      />
    </div>

    <div class="sponsor-banner-group">
      <SponsorBanner
        v-for="(sponsor, index) in specialSponsors"
        :key="`special-${index}`"
        :index="index"
        type="special"
        :name="sponsor.name"
        :banner="sponsor.banner"
      />
    </div>

    <div class="sponsor-banner-group">
      <SponsorBanner
        v-for="(sponsor, index) in networkSponsors"
        :key="`network-${index}`"
        :index="index"
        type="network"
        :name="sponsor.name"
        :banner="sponsor.banner"
      />

      <SponsorBanner
        v-for="(sponsor, index) in lunchSponsors"
        :key="`lunch-${index}`"
        :index="index"
        type="lunch"
        :name="sponsor.name"
        :banner="sponsor.banner"
      />

      <SponsorBanner
        v-for="(sponsor, index) in beerSponsors"
        :key="`beer-${index}`"
        :index="index"
        type="beer"
        :name="sponsor.name"
        :banner="sponsor.banner"
      />

      <SponsorBanner
        v-for="(sponsor, index) in drinkSponsors"
        :key="`drink-${index}`"
        :index="index"
        type="drink"
        :name="sponsor.name"
        :banner="sponsor.banner"
      />

      <SponsorBanner
        v-for="(sponsor, index) in toolSponsors"
        :key="`tool-${index}`"
        :index="index"
        type="tool"
        :name="sponsor.name"
        :banner="sponsor.banner"
      />

      <SponsorBanner
        v-for="(sponsor, index) in videoSponsors"
        :key="`video-${index}`"
        :index="index"
        type="video"
        :name="sponsor.name"
        :banner="sponsor.banner"
      />

      <SponsorBanner
        v-for="(sponsor, index) in mediaSponsors"
        :key="`media-${index}`"
        :index="index"
        type="media"
        :name="sponsor.name"
        :banner="sponsor.banner"
      />

      <SponsorBanner
        v-for="(sponsor, index) in stickerSponsors"
        :key="`sticker-${index}`"
        :index="index"
        type="sticker"
        :name="sponsor.name"
        :banner="sponsor.banner"
      />
    </div>

    <div class="button-wrapper">
      <link-button>
        <nuxt-link class="link-to-sponsors" to="/sponsors/">
          詳細を見る
        </nuxt-link>
      </link-button>
    </div>

    <div class="description">
      <p class="readable">
        スポンサーの募集は 9/12 に締め切りました。たくさんのご応募、ありがとうございました。
      </p>
    </div>
  </BaseSection>
</template>

<script>
import BaseSection from '~/components/BaseSection'
import LinkButton from '~/components/LinkButton'
import SponsorBanner from '~/components/SponsorBanner'
import { mapGetters } from 'vuex'

export default {
  name: 'TheSponsorBannerListSection',
  components: {
    BaseSection,
    LinkButton,
    SponsorBanner,
  },
  computed: {
    ...mapGetters(
      [
        'platinumSponsors',
        'goldSponsors',
        'specialSponsors',
        'silverSponsors',
        'bronzeSponsors',
        'networkSponsors',
        'lunchSponsors',
        'beerSponsors',
        'drinkSponsors',
        'toolSponsors',
        'videoSponsors',
        'mediaSponsors',
        'stickerSponsors',
      ]
    ),
  },
}
</script>

<style lang="scss" scoped>
.sponsor-banner-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.sponsor-banner-group + .sponsor-banner-group {
  margin-top: 40px;
}

.button-wrapper {
  margin-top: 40px;
  margin-bottom: 60px;
  text-align: center;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .sponsor-banner-group {
    justify-content: flex-start;
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .the-sponsor-banner-list-section {
    .content {
      max-width: 1160px;
    }
  }
}
</style>
