<template>
  <transition name="modal">
    <div class="modal-overlay">
      <div class="modal-wrapper" @click.self="$emit('closeModal')">
        <div class="modal-container">
          <div class="close-button-container">
            <a class="close-button" href="#" v-on:click.stop.prevent="$emit('closeModal')">
              <span></span>
              <span></span>
            </a>
          </div>

          <div class="modal-content">
            <div class="avatar">
              <img
                :srcset="`${avatar}, ${avatar2x} 2x`"
                :src="avatar2x"
              >
            </div>

            <div class="title">{{ title }}</div>

            <h3 class="name">{{ name }}</h3>

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

            <p
              class="description"
              v-for="(paragraph, index) in description"
              :key="index"
            >{{ paragraph }}</p>

            <HeadingWithBar>
              SESSION
            </HeadingWithBar>

            <h3 class="session-title">
              {{ sessionTitle }}
            </h3>

            <p
              class="session-overview"
              v-for="(paragraph, index) in sessionOverview"
              :key="index"
              v-html="paragraph"
            ></p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import HeadingWithBar from '~/components/HeadingWithBar'

export default {
  name: 'SpeakerModal',
  components: {
    HeadingWithBar,
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
      type: String,
      required: true,
    },
    sessionTitle: {
      type: String,
      required: true,
    },
    sessionOverview: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  z-index: 1000;
  display: table;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9) url('../assets/images/modal-bg.svg') no-repeat center -340px;
  background-size: 1920px auto;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  padding: 5vh 5%;
}

.modal-container {
  position: relative;
  margin: 0 auto;
  max-width: calc(#{$layout-max-width} - 10%);
  height: 100%;
  overflow-y: auto;
  padding-top: 42px;
}

.close-button-container {
  position: absolute;
  top: 0;
  right: 0;
}

.close-button {
  position: relative;
  display: inline-block;
  transition: all 0.4s;
  width: 30px;
  height: 30px;

  span {
    position: absolute;
    display: inline-block;
    width: 28px;
    height: 3px;
    background-color: $primary-text-color--is-bg-dark;
    border-radius: 4px;
  }

  span:nth-of-type(1) {
    top: 16px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  span:nth-of-type(2) {
    top: 16px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}

.modal-content {
  max-height: 100%;
  overflow-y: auto;
  background-color: $white;
  padding: 24px 30px;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.avatar img {
  width: 256px;
}

.title {
  font-size: 12px;
  font-weight: lighter;
}

.name {
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 28px;
  font-weight: lighter;
  line-height: 1.5;
}

.heading-with-bar {
  margin-top: 32px;
}

.session-title {
  margin-top: 8px;
  margin-bottom: 4px;
  font-size: 24px;
  font-weight: lighter;
  line-height: 1.2;
}

.social img {
  width: 24px;
  height: 24px;
}

.social .github {
  margin-left: 12px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
