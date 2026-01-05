# 技術記事 Web公開

このディレクトリには、tech-blog-seriesの内容をWebページとして公開するためのファイルが含まれています。

## 構成

- `index.html` - メインページ
- `styles.css` - スタイルシート
- `script.js` - 記事読み込み・スクロール連動機能

## 特徴

### 2カラムレイアウト
- **左カラム**: 全記事の目次（固定表示）
- **右カラム**: 記事本文（スクロール可能）

### スクロール連動機能
- 記事をスクロールすると、該当する箇所の目次がハイライト
- 目次の詳細（サブセクション）が自動展開
- 目次をクリックすると該当記事にスムーススクロール

## GitHub Pages公開URL

https://sawadari.github.io/edu_publish/

## ローカルでの確認

```bash
# Simple HTTP server (Python)
cd docs
python -m http.server 8000

# または
npx http-server docs -p 8000
```

その後、ブラウザで `http://localhost:8000` を開く
