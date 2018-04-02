<template>
  <div class="code-of-conduct-page">
    <the-head-image />

    <div class="content">
      <h1 class="page-title">
        Vue Fes Japan 2018 の<br />行動規範
      </h1>

      <p class="readable">
        すべての参加者、スピーカー、スポンサーとボランティアは以下の行動規範（ポリシー）に同意していただく必要があります。Vue Fes Japan 実行委員会はカンファレンスの期間中、この規範の実施を尊守します。誰にとっても安全な環境を守るために、すべての参加者からの協力をお願いいたします。
      </p>

      <h2 class="heading">
        何かお困りですか？
      </h2>

      <p class="readable">
        Vue Fes Japan 実行委員会へのお問合わせは、メールにてご連絡ください。また、Vue Fes Japan 会場内でお困りの場合はお近くのスタッフにお尋ねください。
      </p>

      <h2 class="heading">
        簡単にいうと
      </h2>

      <p class="readable">
        Vue Fes Japan では、性別、性別の表現、性的指向、障害の有無、外見、身体の大きさ、人種、民族、宗教、使用している技術にかかわりなく、すべての参加者がハラスメント行為なく Vue Fes Japan に参加できる環境の提供に最善を尽くします。Vue Fes Japan 実行委員会は参加者によるハラスメント行為を一切容認しません。性的な言葉や画像は会話、ワークショップ、懇親会、パーティ、Twitter などのオンラインメディアやソーシャル・ネットワーク・サービスなどにおける発言など Vue Fes Japan に関連するあらゆる場面、場所に不適切であり、これらの規則に規則に違反している参加者は Vue Fes Japan 実行委員会の判断により Vue Fes Japan 内での行動を制限、または 参加費の払い戻しなく Vue Fes Japan からの退席をしていただく場合があります。
      </p>

      <h2 class="heading">
        詳細
      </h2>

      <p class="readable">
        ハラスメント行為には、性別、性同一性、性別の表現、性的指向、障害の有無、外見、身体の大きさ、人種、民族、宗教、技術選択、公共空間での性的な映像表現、意図的な脅迫、ストーカー行為、つきまとい、写真撮影や録音などによる嫌がらせ、トークやその他のイベントなどに対して繰り返して意図的に中断させる行為、不適切な身体接触、そして望まれない性的な注意を引きつける行為を含みます。
      </p>

      <p class="readable">
        参加者は、これらのハラスメント行為を止めるように求められた場合、すみやかに従わなければなりません。
      </p>

      <p class="readable">
        スポンサーもまた、ハラスメント防止ポリシーの対象です。特に、スポンサーは性的な関心を引き起こすような映像表現、活動、資料、あるいはその他の物品を使用すべきではありません。ボランティアを含め、ブースのスタッフは、性的な関心を引き起こすような服装 / 制服 / コスチュームを使用すべきではありませんし、その他の手段で性的な関心を引き起こす様な環境を作るべきではありません。
      </p>

      <p class="readable">
        参加者がハラスメント行為を行っている場合、Vue Fes Japan 実行委員は当該行為を行っている者に対して我々が適切と判断した範囲で、警告や参加費の払い戻しなく退席していただくなどの措置を講じることがあります。
      </p>

      <p class="readable">
        もしあなたがハラスメント行為を受けている場合や、誰かがハラスメント行為を受けていることに気づいた場合、またはその懸念がある場合は、すぐにお近くの Vue Fes Japan 実行委員スタッフに連絡してください。
      </p>

      <p class="readable">
        Vue Fes Japan 実行委員スタッフは、ハラスメント行為を受けた人に安全な環境を守るためにホテル・会場の警備や警察に連絡すること、付き添い人の提供、およびその他のあらゆる支援を行います。私達にとってあなたの参加が何もよりも大切なことであり、常に私たちはハラスメント行為を受けた人の味方でありつづけます。
      </p>

      <p class="readable">
        私たちは、すべての参加者が会場やワークショップ、Vue Fes Japan に関連するソーシャルイベントにて、これらのルールに従うことを期待しています。
      </p>

      <div class="button-wrapper">
        <app-button>
          <nuxt-link to="/">
            トップに戻る
          </nuxt-link>
        </app-button>
      </div>
    </div>

    <page-footer />
  </div>
</template>

<script>
import AppButton from '~/components/AppButton'
import PageFooter from '~/components/PageFooter'
import TheHeadImage from '~/components/TheHeadImage'

export default {
  name: 'code-of-conduct',
  components: {
    AppButton,
    PageFooter,
    TheHeadImage,
  },
  head () {
    return {
      title: 'Vue Fes Japan 2018 の行動規範',
      meta: [
        { hid: 'description', name: 'description', content: 'すべての参加者、スピーカー、スポンサーとボランティアは行動規範（ポリシー）に同意していただく必要があります。誰にとっても安全な環境を守るために、ご協力をお願いいたします。' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  padding: 60px 5%;

  p + p {
    margin-top: 32px;
  }
}

.page-title {
  margin-top: 0;
  margin-bottom: 24px;
  text-align: center;
  font-size: 8vw;
  line-height: 1.3;
  color: $primary-color;

  // font-size の最大値を 48px にする
  @media screen and (min-width: 600px) {
    font-size: 48px;
  }
}

.heading {
  margin: 40px 0 20px;
  font-size: 8vw;
  color: $primary-color;

  // font-size の最大値を 36px にする
  @media screen and (min-width: 450px) {
    font-size: 36px;
  }
}

.button-wrapper {
  margin-top: 40px;
  text-align: center;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .content {
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
    padding: 80px 5%;
  }

  .page-title {
    margin-bottom: 60px;

    br {
      display: none;
    }
  }

  .heading {
    margin-top: 80px;
  }

  .button-wrapper {
    margin-top: 60px;
  }
}
</style>
