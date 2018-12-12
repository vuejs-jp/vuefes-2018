<template>
  <div class="access-page">
    <TheMain theme="yellow">
      <template slot="page-title">
        ACCESS
      </template>

      <div id="map"></div>

      <script>
      function initMap () {
        const latlng = new google.maps.LatLng(35.700204, 139.772542);
        const map = new google.maps.Map(document.getElementById('map'), {
          center: latlng,
          zoom: 17,
        });
        const infowindow = new google.maps.InfoWindow({
          content: '秋葉原 UDX 4F / UDX ギャラリー',
          position: latlng
        });
        infowindow.open(map);
      }
      </script>

      <script :src="`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`" async defer></script>

      <p class="notice">
        <a href="http://maps.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%E5%A4%96%E7%A5%9E%E7%94%B04-14-1" target="_blank" rel="noopener">
          Google マップを開く
        </a>
      </p>

      <h2 class="heading">
        会場: 秋葉原 UDX 4F / UDX ギャラリー
      </h2>

      <div class="description">
        <p class="readable">
          <a href="http://www.udx-g.jp" target="_blank" rel="noopener">
            http://www.udx-g.jp/
          </a>
          <br />
          〒101-0021 東京都千代田区外神田4-14-1
        </p>

        <p class="readable">
          <span class="line">JR でお越しの方</span><br />
          秋葉原駅 電気街口より徒歩2分
        </p>

        <p class="readable">
          <span class="line">つくばエクスプレスでお越しの方</span><br />
          秋葉原駅 A3出口より徒歩3分
        </p>

        <p class="readable">
          <span class="line">東京メトロ日比谷線でお越しの方</span><br />
          秋葉原駅 2番出口より徒歩4分
        </p>

        <p class="readable">
          <span class="line">東京メトロ銀座線でお越しの方</span><br />
          末広町駅 1番または 3番出口より徒歩3分
        </p>
      </div>

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
  name: 'AccessPage',
  components: {
    LinkButton,
    TheMain,
  },
  data () {
    return {
      googleMapsApiKey: process.env.googleMapsApiKey,
    }
  },
  head () {
    return {
      title: 'ACCESS - Vue Fes Japan 2018',
      meta: [
        { hid: 'description', name: 'description', content: 'Vue Fes Japan 2018 の会場へのアクセスマップです。' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.access-page {
  max-width: $page-content-max-width;
  width: 100%;
}

#map {
  height: 400px;
}

.notice {
  margin: 0 0 10px;
  font-size: 12px;
  text-align: right;
}

.description {
  margin: 10px 0 30px;
  font-weight: lighter;

  p {
    margin-bottom: 32px;
  }

  a {
    color: $primary-color;
  }
}

.line {
  font-weight: bold;
}

.button-wrapper {
  margin-top: 40px;
  text-align: center;
}
</style>
