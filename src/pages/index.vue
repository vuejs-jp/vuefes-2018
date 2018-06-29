<template>
  <div class="welcome-page">
    <TheHeadImage />

    <TheHeadSection />

    <TheSpeakerSection />

    <TheSponsorSection />

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
import TheSpeakerSection from '~/components/TheSpeakerSection'
import TheSponsorSection from '~/components/TheSponsorSection'
import TheTeamSection from '~/components/TheTeamSection'

export default {
  name: 'WelcomePage',
  components: {
    TheCfpSection,
    TheFooter,
    TheHeadImage,
    TheHeadSection,
    TheSpeakerSection,
    TheSponsorSection,
    TheTeamSection,
  },
}
</script>

<style lang="scss" scoped>
.welcome-page {
}
</style>
