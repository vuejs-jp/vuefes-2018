<template>
  <div class="welcome-page">
    <TheHeadImage />

    <TheHeadSection />

    <TheTicketSection />

    <TheSpeakerListSection />

    <TheSponsorCallSection />

    <TheSponsorBannerListSection />

    <TheCfpSection />

    <TheTeamSection />

    <TheFooter />
  </div>
</template>

<script>

import TheCfpSection from '~/components/TheCfpSection'
import TheFooter from '~/components/TheFooter'
import TheHeadImage from '~/components/TheHeadImage'
import TheHeadSection from '~/components/TheHeadSection'
import TheSpeakerListSection from '~/components/TheSpeakerListSection'
import TheSponsorBannerListSection from '~/components/TheSponsorBannerListSection'
import TheSponsorCallSection from '~/components/TheSponsorCallSection'
import TheTeamSection from '~/components/TheTeamSection'
import TheTicketSection from '~/components/TheTicketSection'

export default {
  name: 'WelcomePage',
  components: {
    TheCfpSection,
    TheFooter,
    TheHeadImage,
    TheHeadSection,
    TheSpeakerListSection,
    TheSponsorBannerListSection,
    TheSponsorCallSection,
    TheTeamSection,
    TheTicketSection,
  },
}
</script>

<style lang="scss" scoped>
.welcome-page {
}
</style>
