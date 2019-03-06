<template>
  <div class="speaker-session" :class="`bg-${theme}`">
    <nuxt-link class="wrapper" :to="`/speakers/${id}/`">
      <div class="avatar">
        <img :srcset="`${avatar}, ${avatar2x} 2x`" :src="avatar2x" />
      </div>

      <div class="container">
        <div class="content">
          <div class="name">
            {{ name }}
          </div>

          <h3 class="session-title">
            {{ sessionTitle }}
          </h3>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'SpeakerSession',
  props: {
    id: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    avatar2x: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    sessionTitle: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.speaker-session {
  border: 1px solid $primary-color;

  &.bg-blue {
    background-color: $asagi;
  }

  &.bg-red {
    background-color: $sangosyu;
  }
}

.wrapper {
  display: flex;
  padding: 3.75%;
  text-decoration: none;
  color: $primary-text-color--is-bg-dark;
}

.avatar {
  // 幅 320px のウィンドウで 50px になるように指定
  min-width: 15.625vw;
  width: 15.625vw;

  img {
    vertical-align: middle;
  }
}

.container {
  margin-left: 3.75%;
}

.name {
  font-size: 3.75vw; // 幅 320px のウィンドウで 12px になるように指定
}

.session-title {
  margin: 0;
  font-size: 5.625vw; // 幅 320px のウィンドウで 18px になるように指定
  line-height: 1.1;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .wrapper {
    padding: 15px 20px;
  }

  .avatar {
    min-width: 60px;
    width: 60px;
  }

  .container {
    position: relative;
    width: 100%;
  }

  .content {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  .name {
    font-size: 12px;
  }

  .session-title {
    font-size: 20px;
    line-height: 1.2;
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) and (max-width: 1280px) {
  .session-title {
    font-size: 14px; // 2カラムになったときに内容がはみ出してしまうのを回避
  }
}
</style>
