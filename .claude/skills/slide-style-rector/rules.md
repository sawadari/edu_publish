# slide-style-rector 整形ルール詳細

このファイルはslide-style-rectorスキルで使用される整形ルールの詳細を定義します。

## 文体ルール

### ルール1: コロン（：）の削除

**対象箇所**
- Markdownの見出し（# ## ###）
- パネル内のタイトル（h1 h2 h3）
- リスト項目の先頭

**変換例**
```markdown
# 変換前
## 原則❶：自律性の最大化

# 変換後
## 原則❶ 自律性の最大化
```

**正規表現パターン**
```
/([^:：]+)[：:]\s*/g → "$1 "
```

### ルール2: 感嘆符・疑問符の削除

**対象箇所**
- 見出し
- リスト項目
- パネル内テキスト

**変換例**
```markdown
# 変換前
- AIで開発が10倍速に！
- 本当に必要なのか？

# 変換後
- AIで開発が10倍速に
- 本当に必要なのか
```

**正規表現パターン**
```
/[！!？?]+$/gm → ""
```

**例外**
- コードブロック内は変換しない
- URL内は変換しない

### ルール3: 装飾絵文字の削除

**対象絵文字**
- 🧩 🎯 🚀 💡 ⚡ 🔥 ✨ 🌟 ⭐ 💯
- 📊 📈 📉 🎨 🖼️ 🏆 👍 ❤️ 🙌 🎉

**変換例**
```markdown
# 変換前
- 🧩 問題領域の複雑さ
- 🚀 高速な開発プロセス

# 変換後
- 問題領域の複雑さ
- 高速な開発プロセス
```

**正規表現パターン**
```
/[\u{1F300}-\u{1F9FF}]\s*/gu → ""
```

**例外**
- ✅ ❌ のような記号的絵文字は許可（チェックリスト用途）

---

## スタイルルール

### ルール4: カラーコードの統一

**許可されるカラーコード**
```
#1B4565  // 濃紺（Navy）
#3E9BA4  // ティール（Teal）
#c70067  // ルビーピンク（Ruby、限定的使用）
#f9fafb  // gray-50
#f3f4f6  // gray-100
#4b5563  // gray-600
#374151  // gray-700
#1f2937  // gray-800
#fff     // white（背景色用）
```

**禁止カラーコードと代替**
| 禁止 | 代替 | 用途 |
|------|------|------|
| red-600 (#dc2626) | gray-700 (#374151) | 強調テキスト |
| green-600 (#16a34a) | gray-700 (#374151) | 成功表示 |
| yellow-500 (#eab308) | gray-600 (#4b5563) | 警告表示 |
| blue-600 (#2563eb) | #1B4565（Navy） | プライマリ |

**変換例**
```html
<!-- 変換前 -->
<p class="text-red-600 font-bold">重要</p>

<!-- 変換後 -->
<p class="text-gray-700 font-bold">重要</p>
```

### ルール5: Tailwindクラス名の統一

**フォントサイズ**
```
text-3xl  → text-em-3xl
text-2xl  → text-em-2xl
text-xl   → text-em-xl
text-lg   → text-em-lg
text-base → text-em-base
```

**グリッドgap**
```
gap-3  → gap-4
gap-5  → gap-6
gap-7  → gap-6
gap-8  → gap-6
```

**パディング**
```
p-4  → p-6（パネル内）
p-5  → p-6
p-8  → p-6
```

**角丸**
```
rounded-md  → rounded-lg
rounded-2xl → rounded-xl
```

---

## レイアウトルール

### ルール6: アクセントカラー制限

**制限**
- 1スライドあたりアクセントカラーは1-2色まで
- グラデーション背景は1色としてカウント

**検出方法**
```javascript
// スライドごとに以下のカラーを検出
const accentColors = [
  '#1B4565',  // Navy
  '#3E9BA4',  // Teal
  '#c70067'   // Ruby
];

// 3色以上使われている場合は警告
if (usedColors.length > 2) {
  warn('アクセントカラーが3色以上使われています');
}
```

### ルール7: グリッドシステムの統一

**推奨グリッド設定**
```html
<!-- 2カラム -->
<div class="grid grid-cols-2 gap-6">

<!-- 3カラム -->
<div class="grid grid-cols-3 gap-4">

<!-- 4カラム -->
<div class="grid grid-cols-4 gap-3">
```

**非推奨**
```html
<!-- gap値が不統一 -->
<div class="grid grid-cols-2 gap-5">  <!-- gap-6推奨 -->

<!-- 奇数カラム（5列など） -->
<div class="grid grid-cols-5">  <!-- 視認性が悪い -->
```

### ルール8: パネルデザインの統一

**基本パネル**
```html
<div class="bg-gray-50 rounded-xl shadow-lg p-6">
  <!-- コンテンツ -->
</div>
```

**強調パネル**
```html
<div class="bg-gray-100 rounded-xl shadow-lg p-6 border-l-4 border-gray-500">
  <!-- コンテンツ -->
</div>
```

**グラデーションパネル**
```html
<div class="rounded-xl shadow-lg p-6"
     style="background: linear-gradient(135deg, #1B4565 0%, #3E9BA4 100%);">
  <p class="text-white"><!-- コンテンツ --></p>
</div>
```

**非推奨パターン**
```html
<!-- shadow-2xl（過度な影） -->
<div class="bg-gray-50 rounded-xl shadow-2xl p-6">

<!-- border-8（太すぎる枠線） -->
<div class="bg-gray-50 rounded-xl border-8 border-gray-500">

<!-- p-2（パディング不足） -->
<div class="bg-gray-50 rounded-xl p-2">
```

---

## パターンマッチングルール

### パターン分類

スライドの構造を分析し、以下のパターンに分類します。

#### 1. タイトルスライド
**検出条件**
- スライドに`# `見出しが1つのみ
- `## `サブ見出しが1つ
- リストやパネルなし

**推奨パターン**: `slides/example.md:L20-25`

#### 2. セクション開始
**検出条件**
- `_backgroundImage`または`_color`のMarp directive
- グラデーション背景

**推奨パターン**: `slides/example.md:L28-37`

#### 3. 2カラム比較
**検出条件**
- `grid-cols-2`クラス
- 左右に対照的なコンテンツ（Before/After等）

**推奨パターン**: `slides/example.md:L40-62`

#### 4. 3カラムレイアウト
**検出条件**
- `grid-cols-3`クラス
- 等幅の3つのパネル

**推奨パターン**: `slides/example.md:L66-97`

#### 5. 統計数値表示
**検出条件**
- `text-em-3xl`の数値
- `grid-cols-3`または`grid-cols-4`
- 中央揃え（text-center）

**推奨パターン**: `slides/example.md:L104-126`

---

## 実装ガイドライン

### チェックの優先順位

1. **文体ルール**（自動修正）
   - コロン削除
   - 感嘆符・疑問符削除
   - 絵文字削除

2. **カラーコード統一**（自動修正）
   - red-600 → gray-700
   - green-600 → gray-700

3. **クラス名統一**（自動修正）
   - text-3xl → text-em-3xl
   - gap値の統一

4. **パターン提案**（手動対応）
   - 現在のレイアウトを分析
   - 最適なパターンを推薦

### 修正の実行順序

```javascript
// 1. 文体ルール適用
applyTextRules(content);

// 2. スタイルルール適用
applyStyleRules(content);

// 3. レイアウト分析
const patterns = analyzeLayout(content);

// 4. レポート生成
generateReport(modifications, patterns);
```

---

## 除外ルール

以下の箇所は整形対象外とします。

### 1. コードブロック
```markdown
\`\`\`javascript
// この中は整形しない
console.log("Hello World!");
\`\`\`
```

### 2. インラインコード
```markdown
`npm install`コマンドを実行  // バッククォート内は除外
```

### 3. URL
```markdown
[リンク](https://example.com?param=value!)  // URL内の記号は除外
```

### 4. HTMLコメント
```html
<!-- この中は整形しない -->
```

---

このルールセットはPhase 2で定義され、slide-style-rectorスキルの実装に使用されます。
