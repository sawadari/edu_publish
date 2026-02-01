# edu_publish - Claude Code Context

## プロジェクト概要

**edu_publish** - Miyabiフレームワークで構築された自律型開発プロジェクト

このプロジェクトは識学理論(Shikigaku Theory)とAI Agentsを組み合わせた自律型開発環境で運用されています。

## 🌸 Miyabi Framework

### 7つの自律エージェント

1. **CoordinatorAgent** - タスク統括・並列実行制御
   - DAG（Directed Acyclic Graph）ベースのタスク分解
   - Critical Path特定と並列実行最適化

2. **IssueAgent** - Issue分析・ラベル管理
   - 識学理論65ラベル体系による自動分類
   - タスク複雑度推定（小/中/大/特大）

3. **CodeGenAgent** - AI駆動コード生成
   - Claude Sonnet 4による高品質コード生成
   - TypeScript strict mode完全対応

4. **ReviewAgent** - コード品質判定
   - 静的解析・セキュリティスキャン
   - 品質スコアリング（100点満点、80点以上で合格）

5. **PRAgent** - Pull Request自動作成
   - Conventional Commits準拠
   - Draft PR自動生成

6. **DeploymentAgent** - CI/CDデプロイ自動化
   - 自動デプロイ・ヘルスチェック
   - 自動Rollback機能

7. **TestAgent** - テスト自動実行
   - テスト実行・カバレッジレポート
   - 80%+カバレッジ目標

## GitHub OS Integration

このプロジェクトは「GitHubをOSとして扱う」設計思想で構築されています:

### 自動化されたワークフロー

1. **Issue作成** → IssueAgentが自動ラベル分類
2. **CoordinatorAgent** → タスクをDAG分解、並列実行プラン作成
3. **CodeGenAgent** → コード実装、テスト生成
4. **ReviewAgent** → 品質チェック（80点以上で次へ）
5. **TestAgent** → テスト実行（カバレッジ確認）
6. **PRAgent** → Draft PR作成
7. **DeploymentAgent** → マージ後に自動デプロイ

**全工程が自律実行、人間の介入は最小限。**

## ラベル体系（識学理論準拠）

### 10カテゴリー、53ラベル

- **type:** bug, feature, refactor, docs, test, chore, security
- **priority:** P0-Critical, P1-High, P2-Medium, P3-Low
- **state:** pending, analyzing, implementing, reviewing, testing, deploying, done
- **agent:** codegen, review, deployment, test, coordinator, issue, pr
- **complexity:** small, medium, large, xlarge
- **phase:** planning, design, implementation, testing, deployment
- **impact:** breaking, major, minor, patch
- **category:** frontend, backend, infra, dx, security
- **effort:** 1h, 4h, 1d, 3d, 1w, 2w
- **blocked:** waiting-review, waiting-deployment, waiting-feedback

## 開発ガイドライン

### TypeScript設定

```json
{
  "compilerOptions": {
    "strict": true,
    "module": "ESNext",
    "target": "ES2022"
  }
}
```

### セキュリティ

- **機密情報は環境変数で管理**: `GITHUB_TOKEN`, `ANTHROPIC_API_KEY`
- **.env を .gitignore に含める**
- **Webhook検証**: HMAC-SHA256署名検証

### テスト

```bash
npm test                    # 全テスト実行
npm run test:watch          # Watch mode
npm run test:coverage       # カバレッジレポート
```

目標: 80%+ カバレッジ

## 使用方法

### Issue作成（Claude Code推奨）

```bash
# Claude Code から直接実行
gh issue create --title "機能追加: ユーザー認証" --body "JWT認証を実装"
```

または Claude Code のスラッシュコマンド:

```
/create-issue
```

### 状態確認

```bash
npx miyabi status          # 現在の状態
npx miyabi status --watch  # リアルタイム監視
```

### Agent実行

```bash
/agent-run                 # Claude Code から実行
```

## プロジェクト構造

```
edu_publish/
├── .claude/               # Claude Code設定
│   ├── agents/           # Agent定義
│   ├── commands/         # カスタムコマンド
│   └── settings.json     # Claude設定
├── .github/
│   └── workflows/        # 26+ GitHub Actions
├── src/                  # ソースコード
├── tests/                # テストコード
├── CLAUDE.md             # このファイル
└── package.json
```

## カスタムスラッシュコマンド

Claude Code で以下のコマンドが使用可能:

- `/test` - プロジェクト全体のテストを実行
- `/generate-docs` - コードからドキュメント自動生成
- `/create-issue` - Agent実行用Issueを対話的に作成
- `/deploy` - デプロイ実行
- `/verify` - システム動作確認（環境・コンパイル・テスト）
- `/security-scan` - セキュリティ脆弱性スキャン実行
- `/agent-run` - Autonomous Agent実行（Issue自動処理パイプライン）

### Marpスライドコマンド

- `/marp-create` - 新規スライド作成
- `/marp-build` - スライドをHTMLにビルド
- `/marp-preview` - プレビューサーバー起動

## 識学理論（Shikigaku Theory）5原則

1. **責任の明確化** - 各AgentがIssueに対する責任を負う
2. **権限の委譲** - Agentは自律的に判断・実行可能
3. **階層の設計** - CoordinatorAgent → 各専門Agent
4. **結果の評価** - 品質スコア、カバレッジ、実行時間で評価
5. **曖昧性の排除** - DAGによる依存関係明示、状態ラベルで進捗可視化

## 環境変数

```bash
# GitHub Personal Access Token（必須）
GITHUB_TOKEN=ghp_xxxxx

# Anthropic API Key（必須 - Agent実行時）
ANTHROPIC_API_KEY=sk-ant-xxxxx
```

## Marpスライド作成

### スタイルガイド

- **参照**: `docs/slide-style-guide.md`
- **パターン**: `slides/example.md` (10パターン)
- **テーマ**: レクタースタイル（Rector Style）

### カラーパレット

- **濃紺** (Navy): `#1B4565`
- **ティール** (Teal): `#3E9BA4`
- **ルビーピンク** (Ruby): `#c70067` (対比・強調のみ)
- **グレースケール**: gray-50/100/600/700/800

ルール: 1スライドあたりアクセントカラーは1-2色まで

### タイポグラフィ

- `text-em-3xl`: 数値強調、インパクトのあるキーワード
- `text-em-2xl`: パネル見出し、セクションタイトル
- `text-em-xl`: サブ見出し
- `text-em-lg`: 本文、リスト項目
- `text-em-base`: 補足説明

### 文体ルール

#### ❌ 使用禁止

**コロン（：）を使用しない**
- ❌ 悪い例: `原則❶：自律性の最大化`
- ✅ 良い例: `原則❶ 自律性の最大化`

**感嘆符（！）や疑問符（？）を避ける**
- ❌ 悪い例: `AIで開発が10倍速に！`
- ✅ 良い例: `AIで開発が10倍速に`

**装飾的な絵文字を避ける**
- ❌ 悪い例: `🧩 問題領域の複雑さ`
- ✅ 良い例: `問題領域の複雑さ`

**色による強調は控えめに**
- red-600、green-600などは避け、gray-600/gray-700を使用

### スライド作成ワークフロー

1. `/marp-create [ファイル名] [タイトル]` で新規作成
2. `slides/example.md` のパターンから選択
3. `docs/slide-style-guide.md` のルールに準拠
4. `/marp-preview` でプレビュー確認
5. `/marp-build` でHTML生成

### npm スクリプト

```bash
npm run marp:build    # HTMLビルド
npm run marp:watch    # 監視モード
npm run marp:server   # プレビューサーバー
```

---

## サポート

- **Framework**: [Miyabi](https://github.com/ShunsukeHayashi/Autonomous-Operations)
- **Documentation**: README.md
- **Issues**: GitHub Issues で管理

---

🌸 **Miyabi** - Beauty in Autonomous Development

*このファイルは Claude Code が自動的に参照します。プロジェクトの変更に応じて更新してください。*
