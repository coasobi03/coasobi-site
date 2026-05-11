# こあそび〈coasobi〉公式サイト

千葉県市川市 本八幡駅周辺で活動する、子育て支援活動「こあそび〈coasobi〉」の静的サイトです。

このサイトは HTML / CSS / JavaScript のみで作成しています。npm、React、Next.js、サーバー、DBは使いません。GitHub Pagesで無料公開でき、ランニングコストはゼロです。

## GitHub Pagesで公開する方法

1. GitHubでこのリポジトリを開きます。
2. `Settings` → `Pages` を開きます。
3. `Build and deployment` の `Source` を `Deploy from a branch` にします。
4. `Branch` を `main`、フォルダを `/ (root)` にして保存します。
5. 数分後、GitHub PagesのURLが表示されます。

## ローカルで開く方法

このサイトはビルド不要です。`index.html` をブラウザで開くと確認できます。

## URLの差し替え方法

リンク類は `data/site-config.js` にまとめています。公開前に以下を正式URLへ差し替えてください。

- `lineUrl`: 公式LINE URL
- `googleFormUrl`: Googleフォーム URL
- `googleCalendarEmbedUrl`: Googleカレンダー埋め込みURL
- `instagramUrl`: Instagram URL

### 公式LINE URL

`data/site-config.js` の `lineUrl` を正式な公式LINE URLに変更します。

### Googleフォーム URL

`data/site-config.js` の `googleFormUrl` を予約・問い合わせ用フォームのURLに変更します。

### Googleカレンダー埋め込みURL

Googleカレンダーの「設定と共有」から埋め込み用URLを取得し、`data/site-config.js` の `googleCalendarEmbedUrl` に貼り付けます。

仮URLのままの場合、サイト上では「カレンダー準備中」と表示されます。

### Instagram URL

`data/site-config.js` の `instagramUrl` を正式なInstagramアカウントURLに変更します。

## 更新運用

普段の予定更新や問い合わせ対応は、Googleカレンダー、公式LINE、Googleフォームで行う想定です。通常運用ではHTMLを直接編集する必要はありません。

## publicリポジトリでの注意

このリポジトリはpublic公開を想定しています。個人情報、問い合わせ内容、お子さまの名前・年齢・住所・連絡先・相談内容などは絶対に書き込まないでください。

## 公開前に確認するTODO

`data/site-config.js` の `todos` に、現サイト内で表記ゆれがある項目を残しています。

- 対象年齢
- オンライン相談の料金表記
- 支払い方法
- イベント開催曜日
- 認可外保育施設としての申請状況・表記内容
