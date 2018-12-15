<template>
  <div class="sponsors-page">
    <TheMain>
      <template slot="page-title">
        SPONSORS
      </template>

      <div class="sponsor-group">
        <Sponsor
          v-for="(sponsor, index) in platinumSponsors"
          :key="`platinum-${index}`"
          :index="index"
          type="platinum"
          v-bind="sponsor"
        />
      </div>

      <div class="sponsor-group">
        <Sponsor
          v-for="(sponsor, index) in goldSponsors"
          :key="`gold-${index}`"
          :index="index"
          type="gold"
          v-bind="sponsor"
        />
      </div>

      <div class="sponsor-group">
        <Sponsor
          v-for="(sponsor, index) in silverSponsors"
          :key="`silver-${index}`"
          :index="index"
          type="silver"
          v-bind="sponsor"
        />
      </div>

      <div class="sponsor-group">
        <Sponsor
          v-for="(sponsor, index) in bronzeSponsors"
          :key="`bronze-${index}`"
          :index="index"
          type="bronze"
          v-bind="sponsor"
        />
      </div>

      <div class="sponsor-group">
        <Sponsor
          v-for="(sponsor, index) in specialSponsors"
          :key="`special-${index}`"
          :index="index"
          type="special"
          v-bind="sponsor"
        />
      </div>

      <div class="sponsor-group">
        <Sponsor
          v-for="(sponsor, index) in networkSponsors"
          :key="`network-${index}`"
          :index="index"
          type="network"
          v-bind="sponsor"
        />

        <Sponsor
          v-for="(sponsor, index) in lunchSponsors"
          :key="`lunch-${index}`"
          :index="index"
          type="lunch"
          v-bind="sponsor"
        />

        <Sponsor
          v-for="(sponsor, index) in beerSponsors"
          :key="`beer-${index}`"
          :index="index"
          type="beer"
          v-bind="sponsor"
        />

        <Sponsor
          v-for="(sponsor, index) in drinkSponsors"
          :key="`drink-${index}`"
          :index="index"
          type="drink"
          v-bind="sponsor"
        />

        <Sponsor
          v-for="(sponsor, index) in toolSponsors"
          :key="`tool-${index}`"
          :index="index"
          type="tool"
          v-bind="sponsor"
        />

        <Sponsor
          v-for="(sponsor, index) in videoSponsors"
          :key="`video-${index}`"
          :index="index"
          type="video"
          v-bind="sponsor"
        />

        <Sponsor
          v-for="(sponsor, index) in mediaSponsors"
          :key="`media-${index}`"
          :index="index"
          type="media"
          v-bind="sponsor"
        />

        <Sponsor
          v-for="(sponsor, index) in stickerSponsors"
          :key="`sticker-${index}`"
          :index="index"
          type="sticker"
          v-bind="sponsor"
        />
      </div>

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
import LinkButton from '~/components/LinkButton'
import Sponsor from '~/components/Sponsor'
import TheMain from '~/components/TheMain'
import { mapGetters } from 'vuex'

export default {
  name: 'SponsorsPage',
  components: {
    LinkButton,
    Sponsor,
    TheMain,
  },
  head () {
    const url = `https://vuefes.jp${this.path}`
    const title = 'スポンサー一覧 - Vue Fes Japan 2018'
    const description = 'Vue Fes Japan 2018 にご協賛いただいているスポンサーの一覧です。'

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:url', name: 'og:url', content: url },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', content: description },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
      ],
    }
  },
  asyncData ({ route }) {
    return {
      path: route.path,
    }
  },
  mounted () {
    // TODO: layout をまたいでもアンカーリンクが効くようになったら、VueRouter の scrollBehavior を使うようにする
    if (this.$router.currentRoute.hash) {
      const element = document.querySelector(this.$router.currentRoute.hash)

      if (element) {
        const rect = element.getBoundingClientRect()
        window.scrollTo({ top: rect.top - 30 })
      }
    }
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
.sponsor-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.sponsor-group + .sponsor-group {
  margin-top: 40px;
}

.button-wrapper {
  margin-top: 40px;
  text-align: center;
}
</style>
