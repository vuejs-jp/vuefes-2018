<template>
  <div class="code-of-conduct-page">
    <TheMain>
      <template slot="page-title">
        行動規範
      </template>

      <p class="readable">
        すべての参加者、スピーカー、スポンサーとボランティアは以下の行動規範（ポリシー）に同意していただく必要があります。Vue
        Fes Japan
        実行委員会はカンファレンスの期間中、この規範の実施を尊守します。誰にとっても安全な環境を守るために、すべての参加者からの協力をお願いいたします。
      </p>

      <h2 class="heading">
        何かお困りですか？
      </h2>

      <p class="readable">
        Vue Fes Japan
        実行委員会へのお問合わせは、メールにてご連絡ください。また、Vue Fes
        Japan 会場内でお困りの場合はお近くのスタッフにお尋ねください。
      </p>

      <h2 class="heading">
        簡単にいうと
      </h2>

      <p class="readable">
        Vue Fes Japan
        では、性別、性別の表現、性的指向、障害の有無、外見、身体の大きさ、人種、民族、宗教、技術選択にかかわりなく、すべての参加者がハラスメント行為なく
        Vue Fes Japan に参加できる環境の提供に最善を尽くします。Vue Fes Japan
        実行委員会は参加者によるハラスメント行為を一切容認しません。性的な言葉や画像は会話、ワークショップ、懇親会、パーティ、Twitter
        などのオンラインメディアやソーシャル・ネットワーク・サービスなどにおける発言など
        Vue Fes Japan
        に関連するあらゆる場面、場所に不適切であり、これらの規則に規則に違反している参加者は
        Vue Fes Japan 実行委員会の判断により Vue Fes Japan
        内での行動を制限、または 参加費の払い戻しなく Vue Fes Japan
        からの退席をしていただく場合があります。
      </p>

      <h2 class="heading">
        詳細
      </h2>

      <p class="readable">
        ハラスメント行為には、性別、性同一性、性別の表現、性的指向による差別、障害の有無による差別、外見、身体の大きさによる差別、人種、民族、宗教による差別、技術選択による差別、公共空間での性的な映像表現、意図的な脅迫、ストーカー行為、つきまとい、写真撮影や録音などによる嫌がらせ、トークやその他のイベントなどに対して繰り返して意図的に中断させる行為、不適切な身体接触、そして望まれない性的な注意を引きつける行為を含みます。
      </p>

      <p class="readable">
        参加者は、これらのハラスメント行為を止めるように求められた場合、すみやかに従わなければなりません。
      </p>

      <p class="readable">
        スポンサーもまた、ハラスメント防止ポリシーの対象です。特に、スポンサーは性的な関心を引き起こすような映像表現、活動、資料、あるいはその他の物品を使用すべきではありません。ボランティアを含め、ブースのスタッフは、性的な関心を引き起こすような服装
        / 制服 /
        コスチュームを使用すべきではありませんし、その他の手段で性的な関心を引き起こす様な環境を作るべきではありません。
      </p>

      <p class="readable">
        参加者がハラスメント行為を行っている場合、Vue Fes Japan
        実行委員は当該行為を行っている者に対して我々が適切と判断した範囲で、警告や参加費の払い戻しなく退席していただくなどの措置を講じることがあります。
      </p>

      <p class="readable">
        もしあなたがハラスメント行為を受けている場合や、誰かがハラスメント行為を受けていることに気づいた場合、またはその懸念がある場合は、すぐにお近くの
        Vue Fes Japan 実行委員スタッフに連絡してください。
      </p>

      <p class="readable">
        Vue Fes Japan
        実行委員スタッフは、ハラスメント行為を受けた人に安全な環境を守るためにホテル・会場の警備や警察に連絡すること、付き添い人の提供、およびその他のあらゆる支援を行います。私達にとってあなたの参加が何もよりも大切なことであり、常に私たちはハラスメント行為を受けた人の味方でありつづけます。
      </p>

      <p class="readable">
        私たちは、すべての参加者が会場やワークショップ、Vue Fes Japan
        に関連するソーシャルイベントにて、これらのルールに従うことを期待しています。
      </p>

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
  name: 'CodeOfConductPage',
  components: {
    LinkButton,
    TheMain
  },
  head() {
    const url = `https://vuefes.jp/2018${this.path}`
    const title = '行動規範 - Vue Fes Japan 2018'
    const description =
      'すべての参加者、スピーカー、スポンサーとボランティアは行動規範（ポリシー）に同意していただく必要があります。誰にとっても安全な環境を守るために、ご協力をお願いいたします。'

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:url', name: 'og:url', content: url },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', content: description },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        }
      ]
    }
  },
  data() {
    return {
      googleMapsApiKey: process.env.googleMapsApiKey
    }
  },
  asyncData({ route }) {
    return {
      path: route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.heading {
  margin-top: 40px;
}

.button-wrapper {
  margin-top: 40px;
  text-align: center;
}
</style>
