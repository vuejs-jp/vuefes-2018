<template>
  <div class="welcome-page">
    <TheHeadSection />

    <TheTicketSection />

    <TheSpeakerListSection />

    <TheAccessSection />

    <TheSponsorBannerListSection />

    <TheFooter />
  </div>
</template>

<script>
import TheAccessSection from '~/components/TheAccessSection'
import TheFooter from '~/components/TheFooter'
import TheHeadSection from '~/components/TheHeadSection'
import TheSpeakerListSection from '~/components/TheSpeakerListSection'
import TheSponsorBannerListSection from '~/components/TheSponsorBannerListSection'
import TheTicketSection from '~/components/TheTicketSection'

export default {
  name: 'WelcomePage',
  layout: 'simple',
  components: {
    TheAccessSection,
    TheFooter,
    TheHeadSection,
    TheSpeakerListSection,
    TheSponsorBannerListSection,
    TheTicketSection,
  },
}
</script>

<style lang="scss" scoped>
.welcome-page {
  margin: 0 auto;
  max-width: $layout-max-width;
}
</style>
