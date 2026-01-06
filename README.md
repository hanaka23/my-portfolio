# my-portfolio

ポートフォリオサイト（Next.js + TypeScript + Tailwind CSS）

## 概要

このリポジトリは、私のポートフォリオサイトのソースコードです。Next.js（App Router）と TypeScript、Tailwind CSS を使って実装されています。作品一覧、各作品のページ、問い合わせ API などを含みます。

## 主な特徴

- Next.js（App Router） + TypeScript
- Tailwind CSS によるスタイリング
- 作品（works）一覧と詳細ページ
- 問い合わせ API エンドポイント（`/api/contact`）
- 画像・メディアは `public/images` に配置

## 技術スタック

- Node.js
- Next.js
- TypeScript
- Tailwind CSS

## 必要条件

- Node.js (推奨: 16 以上)
- npm (または pnpm/yarn)

## ローカルでの起動方法

1. リポジトリをクローン

   git clone <このリポジトリの URL>

2. 依存関係をインストール

   npm install

3. 開発サーバーを起動

   npm run dev

4. ブラウザで http://localhost:3000 を開く

## ビルド / 本番起動

- ビルド

  npm run build

- 本番サーバー起動（ローカル）

  npm run start


## フォルダ構成（主要）

- `app/` - Next.js App Router のルート（ページ、レイアウト、API）
  - `app/api/contact/route.ts` - 問い合わせ用の API エンドポイント
  - `app/works/[id]/` - 作品詳細のルーティング
- `components/` - 再利用コンポーネント
- `lib/` - 作品データなど（`lib/works.ts`）
- `public/` - 画像や静的ファイル
  - `public/images/works/` - 各作品の画像フォルダ
- `types/` - TypeScript の型定義
- `styles/` または `app/globals.css`, `reset.css` - グローバルなスタイル


## API（問い合わせ）

- POST `/api/contact` に問い合わせのデータを送信すると、サーバー側で処理します（`app/api/contact/route.ts` を参照）。


## ライセンス

### ソースコード
本プロジェクトのソースコードは MIT ライセンスのもとで公開されています。

### デザイン・コンテンツ
本サイトに含まれるデザイン、画像、文章などのコンテンツは © 2026 hirakawa hanaka に帰属します。
無断での使用・転載は禁止します。

