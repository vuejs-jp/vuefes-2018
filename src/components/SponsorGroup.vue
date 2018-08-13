<template>
  <div class="sponsor-group" :class="group">
    <h3 class="heading">
      {{ heading }}
    </h3>

    <div class="sponsor-list-wrapper">
      <ul class="sponsor-list">
        <li :id="`${group}-${sponsor.name}`" class="sponsor" v-for="(sponsor, index) in sponsors" :key="index">
          <a :href="sponsor.url" target="_blank" rel="noopener">
            <img class="banner" :src="require(`~/assets/images/sponsors/${group}/${sponsor.banner}`)">
          </a>

          <h4 class="name">
            {{ sponsor.name }}
          </h4>

          <a class="url" :href="sponsor.url" target="_blank" rel="noopener">
            {{ sponsor.url }}
          </a>

          <p
            class="description"
            v-for="(description, index) in sponsor.descriptions"
            :key="index"
            v-html="description"
          ></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sponsor-group',
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
  margin-bottom: 20px;
  text-align: center;
  font-size: 10vw;
  font-weight: lighter;
  color: $primary-color;

  // font-size の最大値を 48px にする
  @media screen and (min-width: 600px) {
    font-size: 48px;
  }
}

.sponsor-list-wrapper {
  display: flex;
  justify-content: center;
}

.sponsor-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  // 2列や3列表示にしたい箇所でも、スポンサーが 2つ、3つもない場合があるため
  width: 100%;
}

.banner {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.name {
  margin-top: 8px;
  margin-bottom: 0;
  font-size: 20px;
  font-weight: lighter;
  color: $primary-color;
}

.url {
  color: $primary-color;
}

.description {
  font-size: 14px;
  line-height: 1.75;
}

@media screen and (max-width: $layout-breakpoint--is-small) {
  .sponsor + .sponsor {
    margin-top: 40px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) and (max-width: $layout-breakpoint--is-medium) {
  .platinum {
    .sponsor {
      max-width: 480px;
    }
  }

  .gold, .silver, .bronze, .lunch, .beer, .drink, .tool, .video, .media, .sticker {
    .sponsor {
      width: calc((100% - (40px * 1)) / 2);
      max-width: 360px;
    }

    .sponsor + .sponsor {
      margin-left: 40px;
    }

    .sponsor:nth-of-type(2n+1) {
      margin-left: 0;
    }

    .sponsor:nth-child(n+3) {
      margin-top: 40px;
    }
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .platinum {
    .sponsor {
      max-width: 480px;
    }
  }

  .gold, .silver, .bronze, .lunch, .beer, .drink, .tool, .video, .media, .sticker {
    .sponsor {
      width: calc((100% - (40px * 2)) / 3);
      max-width: 360px;
    }

    .sponsor + .sponsor {
      margin-left: 40px;
    }

    .sponsor:nth-of-type(3n+1) {
      margin-left: 0;
    }

    .sponsor:nth-child(n+4) {
      margin-top: 40px;
    }
  }
}
</style>

<style lang="scss">
.sponsor .readable a {
  color: $primary-color;
}
</style>
