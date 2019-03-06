<template>
  <BaseSection class="the-access-section" theme="yellow">
    <template slot="heading">
      ACCESS
    </template>

    <div v-lazy-container="{ selector: 'img' }" class="akihabara-udx-image">
      <img
        :data-srcset="
          `${require('~/assets/images/akihabara-udx.jpg')}, ${require('~/assets/images/akihabara-udx@2x.jpg')} 2x`
        "
        :data-src="require('~/assets/images/akihabara-udx@2x.jpg')"
        :data-loading="require('~/assets/images/akihabara-udx-placeholder.png')"
      />
    </div>

    <div class="description">
      <p class="readable">
        秋葉原 UDX 4F / UDX ギャラリー<br />
        住所: 〒101-0021 東京都千代田区外神田4-14-1
      </p>
    </div>

    <div class="button-wrapper">
      <link-button>
        <nuxt-link to="/access/">
          詳細を見る
        </nuxt-link>
      </link-button>
    </div>
  </BaseSection>
</template>

<script>
import BaseSection from '~/components/BaseSection'
import LinkButton from '~/components/LinkButton'

export default {
  name: 'TheAccessSection',
  components: {
    BaseSection,
    LinkButton
  }
}
</script>

<style lang="scss" scoped>
.akihabara-udx-image {
  text-align: left;

  img {
    display: block;
  }
}

.readable {
  margin-top: 10px;
}

.button-wrapper {
  margin-top: 24px;
  text-align: center;
}
</style>
