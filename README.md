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
- `googleFormUrl`: お問い合わせURL（Googleフォーム）
- `googleCalendarEmbedUrl`: Googleカレンダー埋め込みURL
- `instagramUrl`: Instagram URL
- `threadsUrl`: Threads URL

### 公式LINE URL

`data/site-config.js` の `lineUrl` を正式な公式LINE URLに変更します。

### お問い合わせURL

`data/site-config.js` の `googleFormUrl` をお問い合わせ用GoogleフォームのURLに変更します。

### Googleカレンダー埋め込みURL

Googleカレンダーの「設定と共有」から埋め込み用URLを取得し、`data/site-config.js` の `googleCalendarEmbedUrl` に貼り付けます。

イベント日時、一時預かりの空き状況、予約済み予定をカレンダーでお知らせする想定です。仮URLのままの場合、サイト上では「予定カレンダー準備中」と表示されます。

### Instagram URL

`data/site-config.js` の `instagramUrl` を正式なInstagramアカウントURLに変更します。

### Threads URL

`data/site-config.js` の `threadsUrl` を正式なThreadsアカウントURLに変更します。

## 更新運用

普段の予定更新や問い合わせ対応は、Googleカレンダー、公式LINE、お問い合わせ、Instagram、Threadsで行う想定です。通常運用ではHTMLを直接編集する必要はありません。

## publicリポジトリでの注意

個人情報、問い合わせ内容、お子さまの名前・年齢・住所・連絡先・相談内容などは公開せず、厳重に管理します。サイトのファイルには個別の相談内容や個人情報を書き込まないでください。

## 主な掲載情報

- 一時預かり: 1時間1,000円
- 別日の事前面談: オンラインZoomで30分500円
- オンラインカウンセリング: 1時間1,000円
- イベント: 1組100円程度（場所代実費）
- 支払い方法: 利用者さまの希望に合わせて、現金、イチコ、ことら送金、振り込み（オンラインカウンセリングと別日の事前面談は現金を除く）
- 一時預かりとイベントの予定は、Googleカレンダー、Instagram、Threadsでお知らせします。
