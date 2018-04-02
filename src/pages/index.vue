<template>
  <div class="welcome-page">
    <the-head-image />

    <head-section />

    <speaker-section />

    <sponsor-section />

    <cfp-section />

    <team-section />

    <page-footer />
  </div>
</template>

<script>
import CfpSection from '~/components/CfpSection'
import AppButton from '~/components/AppButton'
import HeadSection from '~/components/HeadSection'
import PageFooter from '~/components/PageFooter'
import SpeakerSection from '~/components/SpeakerSection'
import SponsorSection from '~/components/SponsorSection'
import TeamSection from '~/components/TeamSection'
import TheHeadImage from '~/components/TheHeadImage'

export default {
  name: 'index',
  components: {
    CfpSection,
    AppButton,
    HeadSection,
    PageFooter,
    SpeakerSection,
    SponsorSection,
    TeamSection,
    TheHeadImage,
  },
}
</script>

<style lang="scss" scoped>
.welcome-page {
}
</style>
