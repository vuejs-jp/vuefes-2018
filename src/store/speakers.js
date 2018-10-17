// TODO: ピクセル密度によって画像を出し分ける記述をイイ感じにする。何か npm 探すとか、なければ作るとか
const AVATAR_EVAN = require('~/assets/images/speakers/evan.jpg')
const AVATAR_EVAN_2X = require('~/assets/images/speakers/evan@2x.jpg')
const AVATAR_SARAH = require('~/assets/images/speakers/sarah.jpg')
const AVATAR_SARAH_2X = require('~/assets/images/speakers/sarah@2x.jpg')
const AVATAR_CHOPIN = require('~/assets/images/speakers/chopin.jpg')
const AVATAR_CHOPIN_2X = require('~/assets/images/speakers/chopin@2x.jpg')
const AVATAR_EDD = require('~/assets/images/speakers/edd.jpg')
const AVATAR_EDD_2X = require('~/assets/images/speakers/edd@2x.jpg')
const AVATAR_RAHUL = require('~/assets/images/speakers/rahul.jpg')
const AVATAR_RAHUL_2X = require('~/assets/images/speakers/rahul@2x.jpg')
const AVATAR_GUILLAUME = require('~/assets/images/speakers/guillaume.jpg')
const AVATAR_GUILLAUME_2X = require('~/assets/images/speakers/guillaume@2x.jpg')
const AVATAR_KATASHIN = require('~/assets/images/speakers/katashin.jpg')
const AVATAR_KATASHIN_2X = require('~/assets/images/speakers/katashin@2x.jpg')
const AVATAR_KAZUYOSHI_TSUCHIYA = require('~/assets/images/speakers/kazuyoshi-tsuchiya.jpg')
const AVATAR_KAZUYOSHI_TSUCHIYA_2X = require('~/assets/images/speakers/kazuyoshi-tsuchiya@2x.jpg')
const AVATAR_TAKANORI_OKI = require('~/assets/images/speakers/takanori-oki.jpg')
const AVATAR_TAKANORI_OKI_2X = require('~/assets/images/speakers/takanori-oki@2x.jpg')
const AVATAR_RETSU_FUKUI = require('~/assets/images/speakers/retsu-fukui.jpg')
const AVATAR_RETSU_FUKUI_2X = require('~/assets/images/speakers/retsu-fukui@2x.jpg')
const AVATAR_TAKANORI_SUGAWARA = require('~/assets/images/speakers/takanori-sugawara.jpg')
const AVATAR_TAKANORI_SUGAWARA_2X = require('~/assets/images/speakers/takanori-sugawara@2x.jpg')

export const state = () => ({
  keynoteSpeakers: [
    {
      id: 'yyx990803',
      name: 'Evan You',
      title: 'Vue.js クリエーター',
      avatar: AVATAR_EVAN,
      avatar2x: AVATAR_EVAN_2X,
      twitter: 'https://twitter.com/youyuxi',
      github: 'https://github.com/yyx990803',
      description: [
        'Evan は開発者、デザイナー、そしてクリエイティブコーダーです。彼は、リアクティブなコンポーネントでモダンな Web インターフェイスを構築するための JavaScript フレームワーク、Vue.js の作者です。',
        'かつて、GitHub で最もスターを集めたフルスタック JavaScript フレームワークであった Meteor の開発グループでも働いていました。Google Creative Lab で、さまざまな Google プロダクト向けの実験的な UI プロトタイプに、2年間取り組んでいた経験もあります。',
      ],
      sessionType: 'keynote',
      venue: null,
      sessionTitle: 'TBD',
      sessionOverview: [
      ],
    },
  ],
  sessionSpeakers: [
    {
      id: 'sdras',
      name: 'Sarah Drasner',
      title: 'Microsoft シニアデベロッパーアドボケイト',
      avatar: AVATAR_SARAH,
      avatar2x: AVATAR_SARAH_2X,
      twitter: 'https://twitter.com/sarah_edo',
      github: 'https://github.com/sdras',
      description: [
        'Sarah Drasner は受賞歴を持つスピーカー、Microsoft のシニアデベロッパーアドボケイト、CSS-Tricks のスタッフライターです。Val Head と共に Web Animation Workshops を設立しました。SVG Animations（O\'Reilly）の著者で、Vue.js の Frontend Masters workshops を行っています。',
        '以前は Trulia (Zillow) で UX デザインとエンジニアリングのマネージャーをしていました。',
      ],
      sessionType: 'session',
      venue: '会場A',
      sessionTitle: 'Next-level Vue Animations',
      sessionOverview: [
        'As superfluous as something like animation may initially seem, you can tell a lot about framework by the way that it handles the concept of time. Idiosyncrasies and race conditions in rendering reveal themselves, pauses in DOM and virtual DOM diffing can be exposed. This is one of the ways Vue shows itself to be uniquely capable and elegant. In this session, we\'ll cover the basics of working with Vue, how to use the <transition> component and some of its offerings to create fluid effects in the browser. We\'ll move on to watchers, the reactivity system, and transitioning state. Finally, we\'ll talk about lifecycle methods, SVG, and pushing our animations to the next level.',
      ],
    },
    {
      id: 'Atinux',
      name: 'Sébastien Chopin',
      title: 'Nuxt.js 共同クリエーター',
      avatar: AVATAR_CHOPIN,
      avatar2x: AVATAR_CHOPIN_2X,
      twitter: 'https://twitter.com/Atinux',
      github: 'https://github.com/Atinux',
      description: [
        'Sébastien は、猛烈な速さで Vue.js アプリケーションを作成するための JavaScript フレームワーク、Nuxt.js の共同クリエーターです。',
        '現在 Orion.sh に勤務しており、CMTY によるオープンソースコミュニティ、そして新しいオープンソースプロジェクトを築いています。',
      ],
      sessionType: 'session',
      venue: '会場B',
      sessionTitle: 'Nuxt.js 2.0',
      sessionOverview: [
        'Webpack 4, hooks, modules, ESM, we will look at how Nuxt.js has improved and see how fast we can create Vue.js application (Universal, SPA, PWA...). We will also look at server-side rendering caveats and the best practice to keep in mind.',
      ],
    },
    {
      id: 'eddyerburgh',
      name: 'Edd Yerburgh',
      title: 'Vue Test Utils メインクリエーター',
      avatar: AVATAR_EDD,
      avatar2x: AVATAR_EDD_2X,
      twitter: 'https://twitter.com/EddYerburgh',
      github: 'https://github.com/eddyerburgh',
      description: [
        'Edd Yerburgh は Vue Test Utils のメインの作者で、Vue コアチームメンバー、BBC のソフトウェアエンジニアです。',
      ],
      sessionType: 'session',
      venue: '会場B',
      sessionTitle: 'Unit testing a Vuex store',
      sessionOverview: [
        'How to unit test a Vuex store. Two different approaches',
      ],
    },
    {
      id: 'znck',
      name: 'Rahul Kadyan',
      title: 'オープンソース・エンスージアスト',
      avatar: AVATAR_RAHUL,
      avatar2x: AVATAR_RAHUL_2X,
      twitter: 'https://twitter.com/znck0',
      github: 'https://github.com/znck',
      description: [
        'Rahul は開発者でオープンソース・エンスージアストです。彼は Vue エコシステム向けにツール上で動作するコンパイラユーティリティを作っています。',
        '彼は、Myntra (Flipkart Group) でシニアエンジニアとして働いています。',
      ],
      sessionType: 'session',
      venue: '会場A',
      sessionTitle: 'A deep dive in SFC compilation',
      sessionOverview: [
        'Vue single file components empowers developers with ability to write declarative render functions using plain HTML-like syntax. The so called SFCs also provide features like collocation and scoped styles. We tend to use these SFCs effortlessly as any other JavaScript file but to reach that level of ease, Vue does the heavy lifting of transpilation. This talk takes a deep dive in the compilation process of Vue components and explains how to write a custom block processor. It also discovers some less known facts about SFCs.',
      ],
    },
    {
      id: 'Akryum',
      name: 'Guillaume Chau',
      title: 'Vue CLI UI クリエーター',
      avatar: AVATAR_GUILLAUME,
      avatar2x: AVATAR_GUILLAUME_2X,
      twitter: 'https://twitter.com/Akryum',
      github: 'https://github.com/Akryum',
      description: [
        'Guillaume は、Vue CLI、Vue DevTools、そして Vue Curated を担当する Vue.js コアチームメンバーです。',
        '彼はまた、Apollo GraphQL (vue-apollo) と Meteor (vue-meteor)のインテグレーションを作成し、開発者が、高度なインタラクティブで、リアルタイムな Vue アプリケーションを作成でき、vue-virtual-scroller や v-tooltip のようなツールによってエコシステムに貢献しています。',
      ],
      sessionType: 'session',
      venue: '会場A',
      sessionTitle: 'Vue CLI 3 and its Graphical User Interface',
      sessionOverview: [
        'The Vue community has a new official and standard build tool to create Vue apps with ease! It much more powerful and also feature an entire Graphical User Interface to create or manage projects!',
      ],
    },
    {
      id: 'ktsn',
      name: 'katashin',
      title: 'ClassDo Inc.',
      avatar: AVATAR_KATASHIN,
      avatar2x: AVATAR_KATASHIN_2X,
      twitter: 'https://twitter.com/ktsn',
      github: 'https://github.com/ktsn',
      description: [
        'katashin は Vue.js コアチームメンバー、フロントエンドテックリードです。静的型付き言語を好み、Vue.js 本体と周辺ライブラリの TypeScript サポートに貢献しています。最近は開発体験（DX）の向上に興味を持っており、Vue Designer を始めとした各種 OSS ツールを作成、メンテナンスしています。フロントエンドの開発をリードした経験を持ち、大小様々に存在するプロジェクトの HTML や CSS を含むフロントエンド全般の技術選定、設計を行い、破綻しない土台作りに取り組んでいました。',
      ],
      sessionType: 'session',
      venue: '会場A',
      sessionTitle: ' Vue Designer: デザインと実装の統合',
      sessionOverview: [
        '従来の Web サイト制作ではデザイナーがデザインから HTML、CSS の実装までを行っていました。しかし、現在 Web の UI は複雑になり、ロジックを持つアプリケーションも作られるようになっています。デザイナーがすべてを制作するのは難しくなり、デザイナーと開発者の分業が一般的になっています。',
        'デザイナーと開発者のコミュニケーションが課題です。デザインは静的なモックアップで作られ、それをコードで再現することは二度手間です。デザインが静的なので、ウィンドウ幅や入力データの変化などの動的な要因をデザイン段階で十分に考慮することが困難です。運用を続けているうちにデザインデータと実装との乖離が発生することもあります。',
        '本セッションではこの課題を解決するため開発中の Vue Designer をご紹介します。Vue Designer はコンポーネントのコードからグラフィカルなプレビューを表示し、デザイナーはそれを直接編集できます。デザインは即座に実装に反映され、実装の変更もデザインに反映されます。ビューポートのサイズやコンポーネントの入力などの動的な値を変更してプレビューもできます。',
      ],
    },
    {
      id: 'fukuiretu',
      name: '福井 烈',
      title: '株式会社ピースオブケイク / エンジニア',
      avatar: AVATAR_RETSU_FUKUI,
      avatar2x: AVATAR_RETSU_FUKUI_2X,
      twitter: 'https://twitter.com/fukuiretu',
      github: 'https://github.com/fukuiretu',
      description: [
        '青森県弘前市生まれの Web 系エンジニア。2児の父。',
        '2015年3月より株式会社ピースオブケイクに在籍。2015年6月より神奈川県から青森県に住まいを移し、リモートワーカーとして自社サービスである cakes と note の開発・運用に携わり主に Rails や AWS 周りを見ている。',
        'これまで主に Web サービスの開発・運用、モバイルネイティヴゲームアプリの API の開発・運用の他、データ分析基盤の構築、インフラ・デプロイの自動化等を経験。',
        '最近は PWA や WebAssembly に高い関心をもっている。',
        'また、業務の傍ら、妻が開業したアイシングクッキー専門店 en の Web/経理を担当している。',
      ],
      sessionType: 'session',
      venue: '会場B',
      sessionTitle: 'note のフロントエンドを Nuxt.js で再構築した話',
      sessionOverview: [
        '弊社サービス note（<a href="https://note.mu/" target="_blank" rel="noopener">https://note.mu/</a>）は、Ruby on Rails と Angular.js 1系で構築された CSR のみで動作している SPA ですが、特に低スペックなスマートフォンや PC での初期表示が遅いことが大きな課題点の 1つでした。',
        'note が構築された 5年前に比べフロントエンドの技術は進化しており、現状の技術スタックをベースとした解決フローよりも評価を得たフロントエンドの技術で再構築することがベストと判断し、note 開発チームは現行の前段に BFF を構え、BFF を Nuxt.js（Vue.js）で構築することを決めました。',
        '現在は一部のページを Nuxt.js ベースのシステムとして一般向けに公開（<a href="https://bit.ly/2LP8wP0" target="_blank" rel="noopener">https://bit.ly/2LP8wP0</a>）しており、以降優先度の高いページから順々に段階的リリースをしていきます。',
        'セッションでは、',
        '・なぜ Nuxt.js（Vue.js）を採用したのか<br>' +
        '・既存システムとの共存と移行プロセスについて<br>' +
        '・Atomic Design を採用したコンポーネント設計へのシフト<br>' +
        '・デザイナーチームとの協業<br>' +
        '・今後の課題',
        'を中心にお話したいと思っています。',
      ],
    },
    {
      id: 'takanorip',
      name: 'Takanori Oki',
      title: 'フロントエンドエンジニア',
      avatar: AVATAR_TAKANORI_OKI,
      avatar2x: AVATAR_TAKANORI_OKI_2X,
      twitter: 'https://twitter.com/takanoripe',
      github: 'https://github.com/takanorip',
      description: [
        'フロントエンドエンジニア。Vue.js、Polymer、React などを用いたウェブアプリケーション・ウェブサイト開発に従事している。ウェブフォントが好き。Polymer Japan Translation チーム所属。「誰でもわかるウェブフォント実践マニュアル」著。',
      ],
      sessionType: 'session',
      venue: '会場B',
      sessionTitle: 'Vue.js と Web Components のこれから',
      sessionOverview: [
        'この発表のテーマは、Vue.js と Web Components の関係を整理し、両者がこれからどのように関わっていくべきなのかを考えることです。',
        'Web Components はブラウザ実装や議論が進み、これから一気に普及してくるでしょう。',
        'そうなったとき、Vue.js の役割は何か、どうやって責任を分担していくのか、などについて考えることがより重要になってくると考えます。',
        'Polymer Japan の運営メンバーとして日本での Web Components 普及活動に携わりながら Vue.js と Web Components の両方でアプリケーションの開発に取り組んだ経験から、Web Components との共存方法や今後の展開などについて話します。',
      ],
    },
    {
      id: 'ts020',
      name: '菅原 孝則',
      title: '株式会社ファームノート',
      avatar: AVATAR_TAKANORI_SUGAWARA,
      avatar2x: AVATAR_TAKANORI_SUGAWARA_2X,
      twitter: 'https://twitter.com/oligin020',
      github: 'https://github.com/ts020/',
      description: [
        '農業 IT の会社で UI デザインと実装を担当していて、現在は Web サービスとアプリのデザインと実装とデザインシステム（デザインガイドライン・パターンライブラリ・コンポーネント実装等）を開発しています。',
        '19歳でフリーランスで flash を始めてから 17年デザインとエンジニアリングを行ったり来たりしています。',
        'Vue.js は0系から使ってます。',
        'https://oligin020.studio.design/',
      ],
      sessionType: 'session',
      venue: '会場A',
      sessionTitle: 'Atomic Design のデザインと実装の狭間',
      sessionOverview: [
        '昨今 AtomicDesign ばやりの今日この頃ですがみなさん如何開発ライフをエンジョイされているでしょうか？',
        '僕が知っている現場では、AtomicDesign の定義がふんわりしているが故に様々な解釈が飛び交っていて大いに議論が進んでいるようです。',
        'デザイナーが考える粒度設計とエンジニアが考える粒度設計を比較しながら',
        'それぞれが、なぜこのような設計をするのかと言うのを整理してみたいなと思います。',
        '結論は特に用意するつもりはありません、みなさんと議論を深めていければ良いなと思っています。',
      ],
    },
    {
      id: 'tsuchikazu',
      name: '土屋 和良',
      title: 'GMOペパボ',
      avatar: AVATAR_KAZUYOSHI_TSUCHIYA,
      avatar2x: AVATAR_KAZUYOSHI_TSUCHIYA_2X,
      twitter: 'https://twitter.com/tsuchikazu',
      github: 'https://github.com/tsuchikazu',
      description: [
        'SIer でのプログラマーを経て、2012年から GMOペパボに入社。サーバサイド開発を経て、フロントエンドへ注力。',
        '昨年リリースした「カラーミーリピート」という新サービスの立ち上げに携わり、フロントエンドエンジニアとしてサービスを支えています。「カラーミーリピート」には Vue.js を採用し、Vue Test Utils を beta の頃から使い始め、毎日テストも書いています。',
      ],
      sessionType: 'session',
      venue: '会場B',
      sessionTitle: '1年間単体テストを書き続けた現場から送る Vue Component のテスト',
      sessionOverview: [
        'Vue Test Utils により Vue Component の単体テスト導入の敷居は非常に低くなりました。しかし、それを活用したテスト方針は自分たちで選定しなければいけません。',
        '本発表では、まずは前提知識として Vue Component の様々なテスト方法を整理し、実プロジェクトで採用していたテスト方針、その中で良かった点や失敗した点、それを経て行き着いた最終的なテスト方針を紹介をします。',
        'テストをまだ書いていない方へは第一歩目への、テストを書いている方へは見直しの手助けになるはずです。',
        '予定している発表内容は以下のとおりです。',
        '- どこをテストするか<br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;- 表示のテスト<br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;- Form binding/validation<br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;- Componentから Vuex の commit/dispatch<br>' +
        '- どのように表示をテストするか<br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;- 単純な assertion<br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;- Snapshot Testing<br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;- Visual Testing<br>' +
        '- テストを書いてみた結果、どのテストがメンテナンスのコストが低く、効果が高かったか考察<br>' +
        '- テスト方針の見直し結果とその効果',
      ],
    },
  ],
})

export const getters = {
  keynoteSpeakers: (state) => state.keynoteSpeakers || [],
  sessionSpeakers: (state) => state.sessionSpeakers || [],
  keynoteSpeakerById: (state) => (id) => {
    return state.keynoteSpeakers.find(speaker => speaker.id === id)
  },
  sessionSpeakerById: (state) => (id) => {
    return state.sessionSpeakers.find(speaker => speaker.id === id)
  },
  speakerIds: (state) => {
    const ids = state.keynoteSpeakers.map(speaker => speaker.id)
    return ids.concat(state.sessionSpeakers.map(speaker => speaker.id))
  },
}
