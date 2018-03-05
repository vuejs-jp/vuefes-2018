<template>
  <div class="welcome-page">
    <div>
      <picture>
        <source media="(max-width: 768px)" srcset="~/assets/images/head@2x.jpg">
        <source media="(min-width: 769px)" srcset="~/assets/images/head.jpg">
        <img class="head-image" src="~/assets/images/head.jpg" alt="head-image">
      </picture>
    </div>

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
import ConversionButton from '~/components/ConversionButton'
import HeadSection from '~/components/HeadSection'
import PageFooter from '~/components/PageFooter'
import SpeakerSection from '~/components/SpeakerSection'
import SponsorSection from '~/components/SponsorSection'
import TeamSection from '~/components/TeamSection'

export default {
  components: {
    CfpSection,
    ConversionButton,
    HeadSection,
    PageFooter,
    SpeakerSection,
    SponsorSection,
    TeamSection,
  },
}
</script>

<style lang="scss" scoped>
.welcome-page {
}

.head-image {
  display: block;
  max-width: 100%;
}
</style>
