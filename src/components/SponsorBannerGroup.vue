<template>
  <div class="sponsor-banner-group" :class="group">
    <h3 class="heading">
      {{ heading }}
    </h3>

    <div class="banner-list-wrapper">
      <ul class="banner-list">
        <li class="banner" v-for="(sponsor, index) in sponsors" :key="index">
          <nuxt-link class="link-to-sponsor" :to="`/sponsors/#${group}-${sponsor.name}`">
            <img :src="require(`~/assets/images/sponsors/${group}/${sponsor.banner}`)">
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SponsorBannerGroup',
  props: {
    group: {
      type: String,
      required: true,
    },
    sponsors: {
      type: Array,
      required: true,
    },
  },
  computed: {
    heading () {
      return this.group.charAt(0).toUpperCase() + this.group.slice(1)
    },
  },
}
</script>

<style lang="scss" scoped>
.heading {
  margin-bottom: 4px;
  text-align: center;
  font-size: 8vw;
  font-weight: lighter;
  color: $primary-color;

  // font-size の最大値を 36px にする
  @media screen and (min-width: 450px) {
    font-size: 36px;
  }
}

.banner-list-wrapper {
  display: flex;
  justify-content: center;
}

.banner-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  // 2列や3列表示にしたい箇所でも、スポンサーが 2つ、3つもない場合があるため
  width: 100%;
}

.banner {
  img {
    vertical-align: middle;
  }
}

@media screen and (max-width: $layout-breakpoint--is-small) {
  .gold {
    .banner + .banner {
      margin-top: 20px;
    }
  }

  .silver, .bronze, .lunch, .beer, .drink, .tool, .video, .media {
    .banner {
      width: calc((100% - (8px * 1)) / 2);
    }

    .banner + .banner {
      margin-left: 8px;
    }

    .banner:nth-of-type(2n+1) {
      margin-left: 0;
    }

    .banner:nth-child(n+3) {
      margin-top: 8px;
    }
  }

  .silver {
    .banner {
      max-width: 240px;
    }
  }

  .bronze, .lunch, .beer, .drink, .tool, .video, .media {
    .banner-list {
      max-width: 328px;
    }

    .banner {
      max-width: 160px;
    }
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) and (max-width: $layout-breakpoint--is-medium) {
  .gold, .silver, .bronze, .lunch, .beer, .drink, .tool, .video, .media {
    .banner {
      width: calc((100% - (40px * 1)) / 2);
    }

    .banner + .banner {
      margin-left: 40px;
    }

    .banner:nth-of-type(2n+1) {
      margin-left: 0;
    }

    .banner:nth-child(n+3) {
      margin-top: 40px;
    }
  }

  .gold {
    .banner-list {
      max-width: 760px;
    }

    .banner {
      max-width: 360px;
    }
  }

  .silver {
    .banner-list {
      max-width: 520px;
    }

    .banner {
      max-width: 240px;
    }
  }

  .bronze, .lunch, .beer, .drink, .tool, .video, .media {
    .banner-list {
      max-width: 360px;
    }

    .banner {
      max-width: 160px;
    }
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .gold, .silver, .bronze, .lunch, .beer, .drink, .tool, .video, .media {
    .banner {
      width: calc((100% - (40px * 2)) / 3);
    }

    .banner + .banner {
      margin-left: 40px;
    }

    .banner:nth-of-type(3n+1) {
      margin-left: 0;
    }

    .banner:nth-child(n+4) {
      margin-top: 40px;
    }
  }

  .gold {
    .banner-list {
      max-width: 1160px;
    }

    .banner {
      max-width: 360px;
    }
  }

  .silver {
    .banner-list {
      max-width: 800px;
    }

    .banner {
      max-width: 240px;
    }
  }

  .bronze, .lunch, .beer, .drink, .tool, .video, .media {
    .banner-list {
      max-width: 560px;
    }

    .banner {
      max-width: 160px;
    }
  }
}
</style>
