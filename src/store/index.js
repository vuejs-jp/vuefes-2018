import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    platinumSponsors: [
      {
        name: '株式会社プレイド',
        url: 'https://plaid.co.jp/',
        banner: 'plaid.png',
        descriptions: [
          '「プレイド」では「あらゆるサイトのユーザーをデータベース化する」ことを技術ミッションとし、「CX（顧客体験）プラットフォーム KARTE」を主に開発しています。Web サイトやネイティブアプリ上でのユーザー行動を秒間 3,000イベント以上解析しています。',
          'プレイドでは Vue.js が生まれた 2014年から、管理画面の開発で Vue.js を使っています。「Vue.js Tokyo v-meetup #1」はプレイドのオフィスで開催され、作者の Evan You さんと Skype 中継でリアルタイム Q&A を行いました。',
          'KARTE のフロントエンド開発では、Vue Component 数が 650 を超えるような比較的規模の大きいコードベースを運用しています。また、バックエンドでは Node.js（Express）を使っており、JavaScript のエコシステムを活用した開発をしています。',
          'エンジニアの文化として、既存のコードに囚われない発想で「全員で壊しながら進む」こと、ルールや役職をなるべく作らず「カオスと問題を楽しむ」ことなどを掲げて開発しています。このような文化に共感していただけるエンジニアを募集しています！',
        ],
      },
    ],
    goldSponsors: [
      {
        name: '転職ドラフト',
        url: 'https://job-draft.jp/',
        banner: 'job-draft.png',
        descriptions: [
          '「エンジニアの価値は世界が決める」。',
          'IT エンジニア向け競争入札型転職サイト、転職ドラフト。',
          'プロ野球のドラフト会議のような形式で、開催期間中企業はあなたがレジュメに記載したプロジェクト経験や、',
          'スキルを見て年収付きで指名が入る公開競争入札型となっています。',
          '企業は一斉指名などが出来ないため、あなたへの個別の指名内容（指名理由・任せたい仕事含む）が明記されます。',
          'また、各社が「誰をいくらで指名した」かを閲覧することが出来るため、エンジニア市場全体の相場観も把握することが出来ます。',
          '査定サイトではわからない、リアルな市場価値を知りたい方はぜひお試しください！',
        ],
      },
      {
        name: '合同会社ほしのかけら',
        url: 'https://starfragments.one/vuefesjapan2018/',
        banner: 'starfragments.png',
        descriptions: [
          '合同会社ほしのかけらは「世の中を面白くする IT系スタートアップを支援する」をミッションに、IT系スタートアップに携わる人たちを、エンジニアの視点から様々な支援している個人会社です。',
          '代表の竹内は、SPEEDA, NewsPicks, entrepedia, FORCAS, UB Ventures を運営する、株式会社ユーザベース (東証マザーズ: 3966) に創業期から住み着いているエンジニアです。',
          '主に、株式会社ユーザベースにて、遊撃的にサービス開発・社内システム整備を行っていますが、合同会社ほしのかけらと株式会社 UB Ventures を通じて、投資&アクセラレート、OSS のスポンサー、創業期スタートアップとエンジニアを繋げたりもしています。',
          'Vue.js 好きで、今回スポンサーに入らせていただきました。Vue Fes Japan 2018 の開催を楽しみにしています。',
        ],
      },
      {
        name: '株式会社オープンロジ',
        url: 'https://openlogi.com',
        banner: 'openlogi.png',
        descriptions: [
          '「物流をもっと簡単、シンプルに」というコンセプトで、2014年10月にサービスを開始。急成長する EC市場の多くを占める中小規模の事業者の出荷・在庫管理ニーズを、倉庫の空きスペースを活用して実現するクラウドサービスは、口コミのみで成長し、すでに 3000社に導入されています。また、2017年7月には、国内でのサービス拡大とグローバル展開を視野に入れ、累計資金調達が 10億円を超えました。',
          '自分の技術で世の中にインパクトを与えたいという仲間が集まっています。',
          '物流はこれから、テクノロジーがより浸透し、これまでアナログだった物の流れがデジタルになり、高効率化されていきます。',
          'モノをつくる人とそれを必要とする人を結ぶ機能が全てネットワークでつながり、需要と供給が最適化される。新たな価値経済圏をつくる「物流の未来を動かす」会社へと進化していきます。',
        ],
      },
      {
        name: 'クリニカル・プラットフォーム株式会社',
        url: 'https://clinical-platform.com/',
        banner: 'clinical-platform.png',
        descriptions: [
          '弊社ではブラウザで操作できるクラウド型電子カルテサービス「Clipla（クリプラ）」の開発・運営を行っており、サービス開発当初からフロントエンドに Vue を利用しています。開発開始当時に 0.11.1 を採用して以来、着実にアップグレードを続け、現在も最新のバージョンに追随しています。現在はサービス全体の SPA 化を目指し、TypeScript や単一ファイルコンポーネントを採用し、より使いやすい電子カルテサービスの開発に注力しています。',
        ],
      },
      {
        name: 'LINE株式会社',
        url: 'https://engineering.linecorp.com/ja/',
        banner: 'line.png',
        descriptions: [
          'LINE株式会社は、コミュニケーションアプリ「LINE」を機軸として、コミュニケーション・コンテンツ・エンターテイメントなどモバイルに特化した各種サービスの開発・運営および、広告事業を展開しています。ミッションに「CLOSING THE DISTANCE」を掲げ、世界中の人と人、人と情報・サービスとの距離を縮めることを目指しています。私たちは多くの機能や関連サービスを Web の技術によって実現していますが、LINE のフロントエンド開発において Vue.js は最も愛されているフレームワークです。私たちはこれからもこの素晴らしいコミュニティと共に成長し、より一層サービスを発展させていきたいと考えています。',
        ],
      },
      {
        name: '株式会社オロ',
        url: 'https://www.oro.com/ja/',
        banner: 'oro.png',
        descriptions: [
          'オロは「テクノロジー × クリエイティブ」をテーマに、クラウド ERP の開発・販売や、デジタルマーケティング支援によって企業の課題解決を行っています。デジタルマーケティング支援のプロジェクトは、Web に限らず SNS コンテンツ、デジタルサイネージ、スマホアプリなど多岐にわたり、近頃は Vue.js の採用件数が増えるなど、最新技術を取り入れながら開発しています。エンジニアメンバーは、アーキテクトに強い人・アニメーションに命をかけている人・デザイナー出身の人・OSS 活動が大好きな人など多彩なカラーを持っており、この「多様性」がオロの高い技術力を支えています。また、エンジニアメンバーは社内外問わず様々な勉強会に参加しており、時には登壇したり、その様子を公開したりします。（<a href="https://dev.oro.com/" target="_blank" rel="noopener">https://dev.oro.com/</a>）少しでもピンと来たあなた、ぜひオロで行っている勉強会へお越しくださいませ。',
        ],
      },
      {
        name: 'ヘイ株式会社',
        url: 'https://hey.jp/',
        banner: 'hey.png',
        descriptions: [
          '最短2分で、驚くほど簡単にオンラインストアがつくれるサービス STORES.jp の開発・運営をしています。現在、サービスで利用している JavaScript フレームワークを Vue.js に刷新するプロジェクトを進めており、これからも Vue.js および Vue.js コミュニティの発展に貢献していきたいと考えています。',
          'STORES.jp を提供するストアーズ・ドット・ジェーピー株式会社は、2018年2月1日付で事業者向けの決済サービス Coiney を提供するコイニー社と経営統合し、持株会社として hey を設立しました。グループとして「Just for Fun」というミッションを掲げ、個人、または小さなチームが「楽しみ」によって駆動される経済発展の支援を目指しています。',
        ],
      },
    ],
    silverSponsors: [
      {
        name: '株式会社ピクセルグリッド',
        url: 'https://www.pxgrid.com/',
        banner: 'pxgrid.png',
        descriptions: [
          '株式会社ピクセルグリッドは JavaScript の会社です。JavaScript・HTML・CSS といったフロントエンド技術に特化し、Single Page Application のフロントエンド設計や実装、大規模 Web サイトの設計およびテンプレート制作を得意としています。',
          'スタッフの多くは技術書の著作があり、Web 制作に関わる方向けの講演も手がけています。',
          '2012年には、フロントエンド技術情報メディア「CodeGrid」を立ち上げ、現在までに 900本以上の記事を配信。業務での知見に基づいた技術情報や、会社経営についての記事は、多くのエンジニアから地に足のついたメディアとして支持されています。',
        ],
      },
      {
        name: '株式会社まぼろし',
        url: 'https://maboroshi.biz/',
        banner: 'maboroshi.png',
        descriptions: [
          'ウェブサイトの新規構築やリニューアル、フロントエンド実装、ウェブマーケティングなどを行っている、東京都豊島区南池袋のウェブ制作会社です。',
          'Vue.js、React、Angular などを利用した Web アプリなどの実装案件でこそ力を発揮出来るぞという方からの採用応募をお待ちしております。',
          '<a href="https://www.wantedly.com/projects/207383" target="_blank" rel="noopener">フロントエンドエンジニア募集</a>',
          'また、Vue.js、React、Angularなどを利用したWebアプリ開発で外部パートナーをお探しの方は是非弊社までご相談ください。',
          '<a href="https://maboroshi.biz/contact/" target="_blank" rel="noopener">お問い合わせ | 株式会社まぼろし</a>',
        ],
      },
      {
        name: '株式会社HAMWORKS',
        url: 'https://ham.works/',
        banner: 'hamworks.png',
        descriptions: [
          'HAMWORKS（ハムワークス）は北海道札幌市を拠点に、全国からの制作に対応している会社です。',
          'デザイン制作から効率的なコーディング、Vue.js などの JavaScript のフレームワーク利用、Movable Type、WordPress、a-blog cms など各種 CMS の設計・構築、に対応し、制作の力になります',
          '(´ ºムº `)',
        ],
      },
      {
        name: '株式会社フォアキャスト・コミュニケーションズ',
        url: 'https://www.4cast.co.jp',
        banner: '4cast.png',
        descriptions: [
          '当社は、日本テレビグループのデジタルコンテンツの戦略会社です。',
          '「Hulu」や、日本テレビを始めとした番組公式サイト、キャンペーンサイトなどを制作しています。',
          '活用する技術は、エンジニア同士でコミュニケーションをとりながら選んでいます。',
          '現在は新規開発だけではなく、既存サービスの改修にも Vue.js を活用しています。',
          '私たちはそんな技術的チャレンジを一緒にできる仲間を募集しています。',
        ],
      },
      {
        name: 'Japan Digital Design株式会社',
        url: 'https://www.japan-d2.com',
        banner: 'japan-d2.png',
        descriptions: [
          'Japan Digital Design は、社会的課題に対し、具体的なプロトタイプ開発と多様なコミュニティでの実証実験を通じて模索し、次世代の新たな金融 UX を創造・提案するために、これまで銀行内の組織であったイノベーション・ラボをスピン・オフさせ、2017年10月に誕生しました。',
          '今後、急拡大していく音声やモーションセンサーなど IoT デバイスや AI を活用した新たなユーザーインターフェイスを開発し、より快適で Frictionless なユーザー体験を大企業や Startup、地域金融機関とともに創造し、これまでにない顧客価値を、MUFG のネットワークを通じて、世界中に発信していくことを目指します。',
        ],
      },
      {
        name: 'エムスリー株式会社',
        url: 'https://jobs.m3.com/engineer/',
        banner: 'm3.png',
        descriptions: [
          'エムスリーではテクノロジーを活用し医療業界にイノベーションを起こすことを目指しています。',
          '日本の医師の約27万人以上、世界で400万人の医師が集まるプラットフォームを生かし最新技術を駆使して医療現場・患者さんの問題解決に取り組んでいきます。',
          '我々のミッションは「インターネットを活用し健康で楽しく長生きする人を1人でも増やし、不必要な医療コストを1円でも減らす」ことです。',
          'その達成に重要なキーがテクノロジーです。',
          'エムスリーは Kotlin、Elixir、Ruby など現場のエンジニアが必要と考えたものを導入できる環境です。なかでも Vue.js は様々なサービスのフロントエンドを支える存在になっています。',
        ],
      },
    ],
    bronzeSponsors: [],
    lunchSponsors: [
      {
        name: 'LINE株式会社',
        url: 'https://engineering.linecorp.com/ja/',
        banner: 'line.png',
        descriptions: [
          'LINE株式会社は、コミュニケーションアプリ「LINE」を機軸として、コミュニケーション・コンテンツ・エンターテイメントなどモバイルに特化した各種サービスの開発・運営および、広告事業を展開しています。ミッションに「CLOSING THE DISTANCE」を掲げ、世界中の人と人、人と情報・サービスとの距離を縮めることを目指しています。私たちは多くの機能や関連サービスを Web の技術によって実現していますが、LINE のフロントエンド開発において Vue.js は最も愛されているフレームワークです。私たちはこれからもこの素晴らしいコミュニティと共に成長し、より一層サービスを発展させていきたいと考えています。',
        ],
      },
      {
        name: '株式会社SCOUTER',
        url: 'https://corp.scouter.co.jp',
        banner: 'scouter.png',
        descriptions: [
          'toC の日本初のソーシャルヘッドハンティングサービス「SCOUTER」（<a href="https://service.scouter.co.jp" target="_blank" rel="noopener">https://service.scouter.co.jp</a>）や、その仕組みを転職エージェント向けにも提供している「SARDINE」（<a href="https://sardine-system.com" target="_blank" rel="noopener">https://sardine-system.com</a>）を運営。2016年に Vue.js に乗り換えて以降すべてのアプリケーションで Vue.js と PHP フレームワークの Laravel を使用し、最近のアプリケーションでは Nuxt.js を使用。NuxtMeetup（<a href="https://nuxt-meetup.connpass.com" target="_blank" rel="noopener">https://nuxt-meetup.connpass.com</a>）や Laravue 勉強会（<a href="https://laravue.connpass.com" target="_blank" rel="noopener">https://laravue.connpass.com</a>）を主催している。',
        ],
      },
      {
        name: 'Repro株式会社',
        url: 'https://repro.io',
        banner: 'repro.png',
        descriptions: [
          'Repro（<a href="https://repro.io" target="_blank" rel="noopener">https://repro.io</a>）は世界にある 5,000 以上のアプリに導入されているマーケティングオートメーションサービスです。',
          'Repro を使うことで、マーケター・ディレクターはエンジニアの支援無く素早くアプリの改善 PDCA を回すことができ、エンジニアは時間を投資しなければ改善できないことや将来につながるリファクタリングに集中することができます。',
          'そんな世界の実現に興味がありましたら、一度オフィスに遊びに来ませんか？',
        ],
      },
    ],
    beerSponsors: [
      {
        name: 'エムスリー株式会社',
        url: 'https://jobs.m3.com/engineer/',
        banner: 'm3.png',
        descriptions: [
          'エムスリーではテクノロジーを活用し医療業界にイノベーションを起こすことを目指しています。',
          '日本の医師の約27万人以上、世界で400万人の医師が集まるプラットフォームを生かし最新技術を駆使して医療現場・患者さんの問題解決に取り組んでいきます。',
          '我々のミッションは「インターネットを活用し健康で楽しく長生きする人を1人でも増やし、不必要な医療コストを1円でも減らす」ことです。',
          'その達成に重要なキーがテクノロジーです。',
          'エムスリーは Kotlin、Elixir、Ruby など現場のエンジニアが必要と考えたものを導入できる環境です。なかでも Vue.js は様々なサービスのフロントエンドを支える存在になっています。',
        ],
      },
    ],
    drinkSponsors: [],
    mediaSponsors: [
      {
        name: 'Best of JavaScript',
        url: 'https://bestofjs.org/',
        banner: 'bestofjs.png',
        descriptions: [],
      },
      {
        name: '株式会社シーアンドアール研究所',
        url: 'http://www.c-r.com/',
        banner: 'c-r.png',
        descriptions: [],
      },
    ],
  },
})

export default store
