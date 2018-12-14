<template>
  <div class="welcome-page">
    <TheHeadSection />

    <TheAnnouncementAfterEventSection />

    <TheSpeakerListSection />

    <TheAccessSection />

    <TheSponsorBannerListSection />

    <TheFooter />
  </div>
</template>

<script>
import TheAccessSection from '~/components/TheAccessSection'
import TheAnnouncementAfterEventSection from '~/components/TheAnnouncementAfterEventSection'
import TheFooter from '~/components/TheFooter'
import TheHeadSection from '~/components/TheHeadSection'
import TheSpeakerListSection from '~/components/TheSpeakerListSection'
import TheSponsorBannerListSection from '~/components/TheSponsorBannerListSection'

export default {
  name: 'WelcomePage',
  layout: 'simple',
  components: {
    TheAccessSection,
    TheAnnouncementAfterEventSection,
    TheFooter,
    TheHeadSection,
    TheSpeakerListSection,
    TheSponsorBannerListSection,
  },
}
</script>

<style lang="scss" scoped>
.welcome-page {
  margin: 0 auto;
  max-width: $layout-max-width;
}
</style>
