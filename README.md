# Remix SPA プロジェクト

このプロジェクトは [Remix SPA モード](https://remix.run/docs/en/main/guides/spa-mode) を活用して、すべてのデータロードとミューテーションに [Client Data](https://remix.run/docs/en/main/guides/client-data) を使用してシングルページアプリケーション (SPA) を構築します。

## セットアップ

以下のコマンドを実行してプロジェクトをセットアップします:

```shell
npm install
```

## 開発

通常の Remix アプリと同様に、以下のコマンドで開発を行います:

```shell
npm run dev
```

## 本番環境

本番環境用のビルドを行うには、以下のコマンドを実行します:

```shell
npm run build
```

### プレビュー

ビルドをローカルでプレビューするには、以下のコマンドを実行します:

```shell
npm run preview
```

## Amplify 設定

このプロジェクトでは AWS Amplify を使用してストレージと認証を管理しています。以下のファイルを参照してください:

- `amplify/storage/resource.ts`
- `app/routes/authenticated.tsx`

これらのファイルで Amplify のバックエンドの設定と使用方法が記載されています。
