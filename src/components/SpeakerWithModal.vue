<template>
  <div class="speaker-with-modal">
    <div
      class="wrapper"
      @click="openModal"
    >
      <div class="avatar">
        <img
          :srcset="`${avatar}, ${avatar2x} 2x`"
          :src="avatar2x"
        >
      </div>

      <div class="title">
        {{ title }}
      </div>

      <h3 class="name">
        {{ name }}
      </h3>
    </div>

    <div class="social">
      <a
        class="twitter"
        :href="twitter"
        target="_blank"
        rel="noopener"
      >
        <img src="~/assets/images/icon_twitter.svg">
      </a>
      <a
        class="github"
        :href="github"
        target="_blank"
        rel="noopener"
      >
        <img src="~/assets/images/icon_github.svg">
      </a>
    </div>

    <SpeakerModal
      v-if="isModalOpened"
      @closeModal="closeModal"
      :name="name"
      :title="title"
      :avatar="avatar"
      :avatar2x="avatar2x"
      :twitter="twitter"
      :github="github"
      :description="description"
      :sessionTitle="sessionTitle"
      :sessionOverview="sessionOverview"
    />
  </div>
</template>

<script>
import SpeakerModal from '~/components/SpeakerModal'

export default {
  name: 'SpeakerWithModal',
  components: {
    SpeakerModal,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    avatar2x: {
      type: String,
      required: true,
    },
    twitter: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    description: {
      type: Array,
      required: true,
    },
    sessionTitle: {
      type: String,
      required: true,
    },
    sessionOverview: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      isModalOpened: false,
      currentScrollY: 0,
    }
  },
  methods: {
    openModal () {
      this.currentScrollY = window.scrollY
      this.isModalOpened = true
      const layout = document.getElementById('js-layout-wrapper')
      layout.style.top = `${-1 * this.currentScrollY}px`
      layout.style.position = 'fixed'
    },
    closeModal () {
      const layout = document.getElementById('js-layout-wrapper')
      layout.style.position = null
      layout.style.top = null
      window.scroll(0, this.currentScrollY)
      this.isModalOpened = false
    },
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  margin-bottom: 6px;

  img {
    display: block;
    width: 100%;
  }
}

.title {
  font-size: 10px;
  font-weight: lighter;
}

.name {
  margin-top: -2px;
  margin-bottom: 0;
  font-size: 24px;
  font-weight: lighter;
}

.social img {
  width: 24px;
  height: 24px;
}

.social .github {
  margin-left: 12px;
}

@media screen and (max-width: $layout-breakpoint--is-small) {
  .speaker-with-modal {
    margin-bottom: 20px;
  }

  .avatar {
    margin-bottom: 10px;
    width: 75%;
    max-width: 256px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .wrapper {
    cursor: pointer;
  }

  .speaker-with-modal {
    width: 180px;
    margin-right: 40px;
    margin-bottom: 15px;
  }

  .speaker-with-modal:last-child {
    margin-right: 0;
  }
}
</style>
