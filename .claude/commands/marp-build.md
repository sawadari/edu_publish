---
name: marp-build
description: Marpスライドをビルド
---

# /marp-build

Marpスライドを HTMLに変換します。

## 使用方法

```
/marp-build [ファイル名]
```

ファイル名を指定しない場合、`slides/presentations/`内のすべてのMarkdownファイルをビルドします。

## 実行内容

1. `npm run marp:build`を実行
2. `slides/output/`に HTML生成
3. ビルドエラーがあれば報告
4. 生成されたHTMLファイルのパスを表示

## ビルドオプション

Marpビルドは以下のオプションで実行されます:

- `--html`: HTML内のインラインタグを許可
- `--allow-local-files`: ローカルファイル（Tailwind CSS等）の読み込みを許可

## 出力先

```
slides/output/
├── [ファイル名].html
├── [ファイル名].pdf (オプション)
└── assets/ (画像等)
```

## 確認方法

生成されたHTMLファイルをブラウザで開いて確認できます:

```bash
# Windowsの場合
start slides/output/[ファイル名].html

# macOS/Linuxの場合
open slides/output/[ファイル名].html
```

## トラブルシューティング

### ビルドエラーが発生する場合

1. **Tailwind CSSが読み込めない**
   - `slides/theme/js/tailwindcss-3.0.16.js`が存在するか確認
   - `--allow-local-files`オプションが有効か確認

2. **画像が表示されない**
   - 画像パスが相対パスになっているか確認
   - `--allow-local-files`オプションが有効か確認

3. **スタイルが適用されない**
   - `rector.css`が正しく読み込まれているか確認
   - Tailwind config.jsで`preflight: false`が設定されているか確認

## 使用例

```
# 特定ファイルをビルド
/marp-build my-presentation

# 全ファイルをビルド
/marp-build
```
