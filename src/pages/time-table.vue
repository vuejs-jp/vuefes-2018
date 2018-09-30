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
          <th class="time">10:30 - 11:45</th>
          <td class="event">
            <img src="~/assets/images/speakers/evan.jpg" alt="">
            キーノート
          </td>
        </tr>

        <tr>
          <th class="time">11:45 - 11:55</th>
          <td class="event">Platinum スポンサーセッション</td>
        </tr>

        <tr>
          <th class="time">11:55 - 13:00</th>
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
            <div class="event event--a">セッション</div>
            <div class="tag tag--b">会場B</div>
            <div class="event event--b">セッション</div>
          </td>
        </tr>

        <tr>
          <th class="time">13:50 - 14:30</th>
          <td class="event-ab">
            <div class="tag tag--a tag--sp">会場A</div>
            <div class="event event--a">セッション</div>
            <div class="tag tag--b tag--sp">会場B</div>
            <div class="event event--b">セッション</div>
          </td>
        </tr>

        <tr>
          <th class="time">14:40 - 15:20</th>
          <td class="event-ab">
            <div class="tag tag--a tag--sp">会場A</div>
            <div class="event event--a">セッション</div>
            <div class="tag tag--b tag--sp">会場B</div>
            <div class="event event--b">セッション</div>
          </td>
        </tr>

        <tr>
          <th class="time">15:30 - 16:10</th>
          <td class="event-ab">
            <div class="tag tag--a tag--sp">会場A</div>
            <div class="event event--a">セッション</div>
            <div class="tag tag--b tag--sp">会場B</div>
            <div class="event event--b">セッション</div>
          </td>
        </tr>

        <tr>
          <th class="time time--has-notice">16:20 - 17:00</th>
          <td class="event-ab event-ab--has-notice">
            <div class="tag tag--a tag--sp">会場A</div>
            <div class="event event--a">セッション</div>
            <div class="tag tag--b tag--sp">会場B</div>
            <div class="event event--b">セッション</div>
            <p class="notice">※セッション順と会場の割り振りは、決定次第更新します。</p>
          </td>
        </tr>

        <tr>
          <th class="time">17:00 - 17:10</th>
          <td class="event">クロージング</td>
        </tr>

        <tr>
          <th class="time">17:10 - 18:00</th>
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
import TheMain from '~/components/TheMain'

export default {
  name: 'TimeTablePage',
  components: {
    LinkButton,
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
}
</script>

<style lang="scss" scoped>
.time-table-page {
  max-width: 1120px;
  width: 100%;
}

.table {
  margin-top: -30px;
  border-collapse: separate;
  border-spacing: 0 30px;
  width: 100%;
}

$has-tag-padding: 27px;
$has-notice-padding: 22px;

.time {
  display: block;
  padding-left: 3.75%;
  width: 100%;
  color: $primary-color;
  font-size: 6.25vw;
  font-weight: bold;
  text-align: left;
}

.event-ab {
  position: relative;
  display: block;
  width: 100%;

  .event {
    width: 100%;
  }

  .notice {
    margin-top: 10px;
  }
}

.event {
  display: block;
  box-sizing: border-box;
  border: 1px solid $primary-color;
  padding: 3.75%;
  width: 100%;
  color: $primary-color;
  font-size: 6.25vw;

  &--a {
    background-color: $asagi;
    margin-bottom: 10px;
    color: $white;
  }

  &--b {
    background-color: $sangosyu;
    color: $white;
  }

  img {
    width: 60px;
    vertical-align: middle;
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
  font-size: 3.75vw;
}

.button-wrapper {
  margin-top: 40px;
  text-align: center;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .time {
    display: table-cell;
    padding: 0 20px 0 0;
    width: 134px;
    font-size: 24px;
    text-align: right;
    word-wrap: normal;

    &--has-tag {
      padding-top: $has-tag-padding;
    }

    &--has-notice {
      padding-bottom: $has-notice-padding;
    }
  }

  .event-ab {
    display: flex;
    margin-left: -1px; // border の位置を合わせる

    &--has-tag {
      padding-top: $has-tag-padding;
    }

    &--has-notice {
      padding-bottom: $has-notice-padding;
    }

    .event {
      margin: 0;

      &:last-of-type {
        margin-left: 20px;
      }
    }

    .notice {
      position: absolute;
      bottom: 0;
      margin-top: 0;
    }
  }

  .event {
    display: table-cell;
    padding: 25px 20px;
    width: auto;
    font-size: 24px;

    img {
      width: 80px;
    }
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

  .notice {
    font-size: 12px;
  }
}
</style>
