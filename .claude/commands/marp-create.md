---
name: marp-create
description: Marpスライドを新規作成する
---

# /marp-create

新しいMarpスライドを作成します。

## 使用方法

```
/marp-create [ファイル名] [タイトル]
```

## 実行内容

1. `slides/presentations/[ファイル名].md`を作成
2. レクタースタイルのテンプレートを適用
3. `slides/example.md`のパターンを参照可能
4. `docs/slide-style-guide.md`のルールに準拠

## テンプレート構成

新規作成されるスライドには以下が含まれます:

- **Marpヘッダー設定** (marp: true, theme: default, paginate: true)
- **Tailwind CSS読み込み** (CDN版 + config)
- **レクターテーマ適用** (rector.css)
- **emベースのフォントサイズスタイル**
- **サンプルスライド** (3枚: タイトル・内容・クロージング)

## スタイルガイド準拠

作成されるスライドは自動的に以下に準拠します:

- カラーパレット: 濃紺(#1B4565) + ティール(#3E9BA4)
- タイポグラフィ: text-em-*クラス使用
- 文体ルール: コロン・感嘆符・絵文字禁止
- パネルデザイン: rounded-xl + shadow-lg

## 参照ファイル

- **スタイルガイド**: `docs/slide-style-guide.md`
- **レイアウトパターン**: `slides/example.md` (10パターン)
- **テーマファイル**: `slides/theme/rector.css`

## 使用例

```
/marp-create my-presentation "システム開発の生産性向上"
```

→ `slides/presentations/my-presentation.md` が作成されます
