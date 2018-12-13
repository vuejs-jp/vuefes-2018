Vue Fes Japan 2018
==================

[![CircleCI](https://circleci.com/gh/kazupon/vuefes-2018/tree/master.svg?style=svg&circle-token=b8870106eee9ce82c717583cf27116263b7831f6)](https://circleci.com/gh/kazupon/vuefes-2018/tree/master)

このリポジトリは [Vue Fes Japan 2018](https://vuefes.jp/) の Web サイトのソースコードです。ナレッジ共有のために公開しています。

このリポジトリ https://github.com/vuejs-jp/vuefes.jp では、プルリクエストを受けて付けておりません。 

## Setup

```
yarn install
```

## Development

開発環境を動かすには `.env` 経由で環境変数をセットする必要があります。

```
copy .env.example .env
```

`.env` 内のパラメーターを埋めてください。

下記コマンドを実行すると Web サーバーがホットリロードで起動して `http://localhost:3000` で確認できます。

```
yarn dev
```

### 画像の最適化

画像ファイルを追加または変更した場合には、コミット時に imagemin により自動で最適化されます。

ただし Windows を使っている場合にエラーが発生するという報告を受けています。画像の最適化をスキップする場合はコミット時に `--no-verify` オプションを使ってください。

```
git commit --no-verify
``` 

## Testing

```
yarn test
```

## Generate

下記コマンドを実行すると、静的ファイルを `dist/` 配下に生成できます。

```
yarn generate
```
