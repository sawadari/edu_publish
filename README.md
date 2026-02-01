# edu_publish

技術記事・スライド・文書の公開プロジェクト

## 概要

このリポジトリは、システム開発・要求工学・ソフトウェアエンジニアリングに関する技術記事、スライド、ドキュメントを公開するためのプロジェクトです。

## 公開コンテンツ

### 📚 技術記事シリーズ

#### システム開発を成功させる要求分析・要件定義（全13回）

実務で本当に使える要求分析・要件定義の実践的なアプローチを解説するシリーズです。

**対象読者**: 現場のエンジニア、技術リーダー、プロジェクトマネージャー

**Webサイト**: [https://sawadari.github.io/edu_publish/](https://sawadari.github.io/edu_publish/)

**記事一覧**:
1. なぜ要求分析は面倒なのか - エンジニアが直面する5つの壁
2. ニーズ分析の実践テクニック
3. 要求定義の落とし穴
4. ヘタな要求あるある
5. テストできる要求の書き方
6. 要求配分の実務
7. システムアーキテクチャ設計の勘所
8. 検証と妥当性確認の実務
9. 要求管理の現実解
10. チーム全体で回す要求プロセス
11. 派生開発という現実
12. メーカー視点の要求管理
13. サプライヤー視点の要求管理

**参照元**:
- INCOSE Needs and Requirements Manual (NRM)
- NASA Systems Engineering Handbook Rev 2
- INCOSE Guide to Writing Requirements (GtWR)

## プロジェクト構成

```
edu_publish/
├── tech-blog-series/        # 技術記事（Markdown形式）
│   ├── 00_INDEX.md          # シリーズ概要
│   ├── 01_*.md              # 第1回記事
│   └── ...
├── docs/                    # GitHub Pages用Webサイト
│   ├── index.html          # メインページ
│   ├── styles.css          # スタイルシート
│   └── script.js           # スクロール連動機能
├── .claude/                 # Claude Code設定
│   ├── agents/             # Miyabi AI Agents定義
│   └── commands/           # カスタムコマンド
└── README.md               # このファイル
```

## Webサイトの特徴

### 2カラムレイアウト
- **左カラム**: 全記事の目次（固定表示、スクロール可能）
- **右カラム**: 記事本文（13記事を連続表示）

### スクロール連動機能
- 記事をスクロールすると、該当する箇所の目次が自動的にハイライト
- 目次の詳細（サブセクション）が記事に合わせて自動展開
- 目次をクリックすると該当記事へスムーススクロール

### レスポンシブデザイン
- モバイル・タブレットでも快適に閲覧可能

## 開発環境

このプロジェクトは **Miyabi Framework** を使用した自律型開発環境で運用されています。

### Miyabi Framework - 7つの自律エージェント

1. **CoordinatorAgent** - タスク統括・並列実行制御
2. **IssueAgent** - Issue分析・ラベル管理（識学理論65ラベル体系）
3. **CodeGenAgent** - AI駆動コード生成（Claude Sonnet 4）
4. **ReviewAgent** - コード品質判定・セキュリティスキャン
5. **PRAgent** - Pull Request自動作成
6. **DeploymentAgent** - CI/CDデプロイ自動化
7. **TestAgent** - テスト自動実行

詳細は [CLAUDE.md](CLAUDE.md) を参照してください。

## ローカルでの確認

### Webサイトをローカルで表示

```bash
# Python
cd docs
python -m http.server 8000

# または Node.js
npx http-server docs -p 8000
```

その後、ブラウザで `http://localhost:8000` を開く

### Miyabiコマンド

```bash
# プロジェクト状態確認
npx miyabi status

# Agent一覧表示
npx miyabi agent list

# ドキュメント生成
npx miyabi docs -y

# TODOコメント検出・Issue化
npx miyabi todos -y
```

## Marpスライド作成環境

このプロジェクトには、Marpを使用したプレゼンテーションスライド作成環境が統合されています。

### 特徴

- **レクタースタイル**: グレースケール基調 + 濃紺・ティールのアクセント
- **10パターン**: よく使うレイアウトパターンを定義済み
- **Tailwind CSS統合**: 柔軟なデザインカスタマイズ
- **Claude Code連携**: `/marp-create`、`/marp-build`、`/marp-preview`コマンド

### クイックスタート

```bash
# プレビューサーバー起動
npm run marp:server

# スライドをビルド
npm run marp:build

# 監視モード
npm run marp:watch
```

### スライドの作成

```
/marp-create my-presentation "プレゼンテーションタイトル"
```

新規スライドが`slides/presentations/my-presentation.md`に作成されます。

### 参照

- **スタイルガイド**: [docs/slide-style-guide.md](docs/slide-style-guide.md)
- **パターン集**: [slides/example.md](slides/example.md)
- **サンプル**: [slides/presentations/sample.md](slides/presentations/sample.md)

---

## 今後の予定

- [x] Marpスライド作成環境（Phase 1完了）
- [ ] スライドスキル実装（Phase 2）
- [ ] サンプルコード・テンプレートの公開
- [ ] ワークショップ資料の追加
- [ ] 動画コンテンツへのリンク
- [ ] 多言語対応（英語版）

## ライセンス

このプロジェクトのコンテンツは、特に明記されていない限り、教育目的での利用を想定しています。

## お問い合わせ

技術記事の内容に関するフィードバックや質問は、[Issues](https://github.com/sawadari/edu_publish/issues)でお願いします。

---

🤖 このプロジェクトは [Miyabi Framework](https://github.com/ShunsukeHayashi/Autonomous-Operations) と [Claude Code](https://claude.com/claude-code) で開発されています。
