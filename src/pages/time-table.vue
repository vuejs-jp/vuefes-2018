<template>
  <div class="time-table-page">
    <TheMain>
      <template slot="page-title">
        TIME TABLE
      </template>

      <table class="table">
        <tr>
          <th class="time">9:30 - 10:20</th>
          <td class="event">開場・受付</td>
        </tr>

        <tr>
          <th class="time">10:20 - 10:30</th>
          <td class="event">オープニング</td>
        </tr>

        <tr>
          <th class="time">10:30 - 11:20</th>
          <td class="event">
            <nuxt-link to="/speakers/yyx990803/">
              <img src="~/assets/images/speakers/evan.jpg" alt="">
              キーノート
            </nuxt-link>
          </td>
        </tr>

        <tr>
          <th class="time">11:20 - 11:30</th>
          <td class="event">Platinum スポンサーセッション</td>
        </tr>

        <tr>
          <th class="time">11:30 - 13:00</th>
          <td class="event">
            ランチブレーク
            <p class="notice">
              ※ランチ付きチケットをお持ちの方は、会場内でランチを召し上がりながら Lunch スポンサーセッション（7分 x 3本）にご参加いただけます。
            </p>
          </td>
        </tr>

        <tr>
          <th class="time time--has-tag">13:00 - 13:40</th>
          <td class="event-ab event-ab--has-tag">
            <div class="tag tag--a">会場A</div>
            <SpeakerSession class="event--a" v-bind="sessionSpeakerById('sdras')" theme="blue" />
            <div class="tag tag--b">会場B</div>
            <SpeakerSession v-bind="sessionSpeakerById('takanorip')" theme="red" />
          </td>
        </tr>

        <tr>
          <th class="time">13:50 - 14:30</th>
          <td class="event-ab">
            <div class="tag tag--a tag--sp">会場A</div>
            <SpeakerSession class="event--a" v-bind="sessionSpeakerById('ktsn')" theme="blue" />
            <div class="tag tag--b tag--sp">会場B</div>
            <SpeakerSession v-bind="sessionSpeakerById('eddyerburgh')" theme="red" />
          </td>
        </tr>

        <tr>
          <th class="time">14:40 - 15:20</th>
          <td class="event-ab">
            <div class="tag tag--a tag--sp">会場A</div>
            <SpeakerSession class="event--a" v-bind="sessionSpeakerById('ts020')" theme="blue" />
            <div class="tag tag--b tag--sp">会場B</div>
            <SpeakerSession v-bind="sessionSpeakerById('Atinux')" theme="red" />
          </td>
        </tr>

        <tr>
          <th class="time">15:30 - 16:10</th>
          <td class="event-ab">
            <div class="tag tag--a tag--sp">会場A</div>
            <SpeakerSession class="event--a" v-bind="sessionSpeakerById('znck')" theme="blue" />
            <div class="tag tag--b tag--sp">会場B</div>
            <SpeakerSession v-bind="sessionSpeakerById('fukuiretu')" theme="red" />
          </td>
        </tr>

        <tr>
          <th class="time">16:20 - 17:00</th>
          <td class="event-ab">
            <div class="tag tag--a tag--sp">会場A</div>
            <SpeakerSession class="event--a" v-bind="sessionSpeakerById('Akryum')" theme="blue" />
            <div class="tag tag--b tag--sp">会場B</div>
            <SpeakerSession v-bind="sessionSpeakerById('tsuchikazu')" theme="red" />
          </td>
        </tr>

        <tr>
          <th class="time">17:00 - 18:00</th>
          <td class="event">会場転換のため一時閉場</td>
        </tr>

        <tr>
          <th class="time">18:00 - 20:00</th>
          <td class="event">アフターパーティー</td>
        </tr>
      </table>

      <div class="button-wrapper">
        <LinkButton>
          <nuxt-link to="/">
            トップに戻る
          </nuxt-link>
        </LinkButton>
      </div>
    </TheMain>
  </div>
</template>

<script>
import LinkButton from '~/components/LinkButton'
import SpeakerSession from '~/components/SpeakerSession'
import TheMain from '~/components/TheMain'
import { mapGetters } from 'vuex'

export default {
  name: 'TimeTablePage',
  components: {
    LinkButton,
    SpeakerSession,
    TheMain,
  },
  head () {
    return {
      title: 'TIME TABLE - Vue Fes Japan 2018',
      meta: [
        { hid: 'description', name: 'description', content: 'Vue Fes Japan 2018 のタイムテーブルです。' },
      ],
    }
  },
  computed: {
    ...mapGetters('speakers', ['keynoteSpeakerById', 'sessionSpeakerById']),
  },
}
</script>

<style lang="scss" scoped>
.time-table-page {
  max-width: $page-content-max-width;
  width: 100%;
}

.table {
  margin-top: -20px;
  border-collapse: separate;
  border-spacing: 0 20px;
  width: 100%;
}

.time {
  display: block;
  width: 100%;
  color: $primary-color;
  font-size: 5vw; // 幅 320px のウィンドウで 16px になるように指定
  font-weight: bold;
  text-align: left;
}

.event {
  display: block;
  box-sizing: border-box;
  border: 1px solid $primary-color;
  padding: 3.75%;
  width: 100%;
  color: $primary-color;
  font-size: 5.625vw; // 幅 320px のウィンドウで 18px になるように指定

  img {
    width: 15.625vw; // 幅 320px のウィンドウで 50px になるように指定
    vertical-align: middle;
  }

  a {
    text-decoration: none;
  }
}

.event-ab {
  position: relative;
  display: block;
  width: 100%;

  .event--a {
    margin-bottom: 10px;
  }

  .notice {
    margin-top: 10px;
  }
}

.tag {
  border-top: 2px solid $primary-color;
  width: 60px;
  color: $primary-color;
  font-size: 10px;

  &--a {
    border-color: $asagi;
    color: $asagi;
  }

  &--b {
    border-color: $sangosyu;
    color: $sangosyu;
  }
}

.notice {
  margin: 0;
  font-size: 3.75vw; // 幅 320px のウィンドウで 12px になるように指定
}

.button-wrapper {
  margin-top: 40px;
  text-align: center;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .time {
    font-size: 24px;
  }

  .event {
    padding: 15px 20px;
    width: auto;
    font-size: 24px;

    img {
      width: 60px;
    }
  }

  .notice {
    font-size: 12px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .time {
    display: table-cell;
    padding: 0 20px 0 0;
    width: 134px;
    text-align: right;
    word-wrap: normal;
  }

  .tag {
    position: absolute;
    top: 0;

    &--a {
      margin-top: 0;
    }

    &--b {
      left: calc(50% + 10px);
    }

    &--sp {
      display: none;
    }
  }

  .event-ab {
    display: flex;
    margin-left: -1px; // border の位置を合わせる

    &--has-tag {
      padding-top: 27px;
    }

    .speaker-session {
      width: calc((100% - 20px) / 2);

      &:last-of-type {
        margin-left: 20px;
      }
    }

    .event--a {
      margin-bottom: 0;
    }
  }
}
</style>
