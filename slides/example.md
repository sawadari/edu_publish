---
marp: true
theme: default
paginate: true
---

<style>
/* Tailwind emベースのフォントサイズ */
.text-em-3xl { font-size: 3em; }
.text-em-2xl { font-size: 2em; }
.text-em-xl { font-size: 1.5em; }
.text-em-lg { font-size: 1.25em; }
.text-em-base { font-size: 1em; }
</style>

<script src="theme/js/tailwindcss-3.0.16.js"></script>
<script src="theme/js/tailwind.config.js"></script>

<!-- パターン1: タイトルスライド -->

# レクタースライド
## 10のレイアウトパターン

サンプルとベストプラクティス

---

<!-- パターン2: セクション開始（グラデーション背景） -->

<!--
_backgroundImage: "linear-gradient(to right, #1B4565, #3E9BA4)"
_color: #fff
-->

# パターン集
基本的な10のレイアウト

---

<!-- パターン3: 2カラム比較（Before/After） -->

# 2カラム比較レイアウト

<div class="grid grid-cols-2 gap-6 mt-6 text-base">
  <div class="bg-gray-50 rounded-xl shadow-lg p-6 border-l-4 border-gray-400">
    <h1 class="text-em-2xl font-bold mb-4 text-gray-800">Before</h1>
    <ul class="text-em-lg space-y-3 text-gray-700">
      <li>手作業でスライド作成</li>
      <li>デザインが統一されない</li>
      <li>時間がかかる</li>
    </ul>
  </div>

  <div class="bg-gray-100 rounded-xl shadow-lg p-6 border-l-4 border-gray-500">
    <h1 class="text-em-2xl font-bold mb-4 text-gray-800">After</h1>
    <ul class="text-em-lg space-y-3 text-gray-700">
      <li>パターンから選択</li>
      <li>スタイルガイド準拠</li>
      <li>短時間で完成</li>
    </ul>
  </div>
</div>

---

<!-- パターン4: 3カラムレイアウト（等幅） -->

# 3カラムレイアウト

<div class="grid grid-cols-3 gap-4 mt-4 text-base">
  <div class="bg-gray-50 rounded-lg shadow p-4">
    <h2 class="text-em-2xl font-bold mb-3 text-gray-800">計画</h2>
    <ul class="text-em-lg space-y-2 text-gray-700">
      <li>要件定義</li>
      <li>設計</li>
      <li>見積もり</li>
    </ul>
  </div>

  <div class="bg-gray-50 rounded-lg shadow p-4">
    <h2 class="text-em-2xl font-bold mb-3 text-gray-800">実装</h2>
    <ul class="text-em-lg space-y-2 text-gray-700">
      <li>開発</li>
      <li>テスト</li>
      <li>レビュー</li>
    </ul>
  </div>

  <div class="bg-gray-50 rounded-lg shadow p-4">
    <h2 class="text-em-2xl font-bold mb-3 text-gray-800">運用</h2>
    <ul class="text-em-lg space-y-2 text-gray-700">
      <li>デプロイ</li>
      <li>監視</li>
      <li>改善</li>
    </ul>
  </div>
</div>

---

<!-- パターン5: 縦並びリスト（ステップ） -->

# ステップ形式のレイアウト

<div class="grid grid-cols-1 gap-3 mt-4 text-base">
  <div class="bg-gray-50 rounded-lg shadow-lg p-4 border-l-4 border-gray-400">
    <h2 class="text-em-2xl font-bold text-gray-800">ステップ1 準備</h2>
    <p class="text-em-lg mt-2 text-gray-700">環境構築とツールのセットアップ</p>
  </div>

  <div class="bg-gray-50 rounded-lg shadow-lg p-4 border-l-4 border-gray-500">
    <h2 class="text-em-2xl font-bold text-gray-800">ステップ2 実装</h2>
    <p class="text-em-lg mt-2 text-gray-700">コードを書いてテストを実行</p>
  </div>

  <div class="bg-gray-50 rounded-lg shadow-lg p-4 border-l-4 border-gray-600">
    <h2 class="text-em-2xl font-bold text-gray-800">ステップ3 デプロイ</h2>
    <p class="text-em-lg mt-2 text-gray-700">本番環境にリリース</p>
  </div>
</div>

---

<!-- パターン6: パネルデザイン（基本） -->

# 基本パネルデザイン

<div class="mt-6 text-base">
  <div class="bg-gray-50 rounded-xl shadow-lg p-6">
    <h2 class="text-em-2xl font-bold mb-4 text-gray-800">パネルタイトル</h2>
    <p class="text-em-lg text-gray-700">
      シンプルなパネルデザイン。gray-50の背景色に、
      rounded-xlの角丸、shadow-lgの影を適用。
    </p>
    <ul class="text-em-lg mt-4 space-y-2 text-gray-700">
      <li>クリーンな見た目</li>
      <li>読みやすさ重視</li>
      <li>汎用性が高い</li>
    </ul>
  </div>
</div>

---

<!-- パターン7: パネルデザイン（強調） -->

# 強調パネルデザイン

<div class="mt-6 text-base">
  <div class="bg-gray-100 rounded-xl shadow-lg p-6 border-l-4 border-gray-600">
    <h2 class="text-em-2xl font-bold mb-4 text-gray-800">重要なポイント</h2>
    <p class="text-em-lg text-gray-700">
      左側に太いボーダーを追加することで、
      視覚的に目立たせることができる。
    </p>
    <ul class="text-em-lg mt-4 space-y-2 text-gray-700">
      <li>border-l-4で左ボーダー</li>
      <li>border-gray-600で強調</li>
      <li>bg-gray-100でやや濃い背景</li>
    </ul>
  </div>
</div>

---

<!-- パターン8: 統計数値表示（3カラム） -->

# 統計数値の表示

<div class="grid grid-cols-3 gap-4 mt-4 text-base">
  <div class="bg-gray-100 rounded-lg shadow p-4 text-center">
    <p class="text-em-3xl font-bold text-gray-600">218</p>
    <p class="text-em-lg mt-2">パッケージ数</p>
    <p class="text-em-base text-gray-500 mt-1">npm install完了</p>
  </div>

  <div class="rounded-lg shadow p-4 text-center"
       style="background: linear-gradient(135deg, #1B4565 0%, #3E9BA4 100%);">
    <p class="text-em-3xl font-bold text-white">10</p>
    <p class="text-em-lg mt-2 text-white">レイアウトパターン</p>
  </div>

  <div class="bg-gray-100 rounded-lg shadow p-4 text-center">
    <p class="text-em-3xl font-bold text-gray-600">100%</p>
    <p class="text-em-lg mt-2">スタイルガイド準拠</p>
    <p class="text-em-base text-gray-500 mt-1">レクタースタイル</p>
  </div>
</div>

---

<!-- パターン9: 中央配置（キーメッセージ） -->

<!--
_class: lead
-->

<div class="flex items-center justify-center h-full">
  <div class="text-center">
    <h1 class="text-em-3xl font-bold mb-6" style="color: #1B4565;">
      一貫性のあるデザイン
    </h1>
    <p class="text-em-xl text-gray-700">
      パターンを使うことで<br>
      統一感のあるスライドを<br>
      短時間で作成できる
    </p>
  </div>
</div>

---

<!-- パターン10: クロージングスライド -->

<!--
_backgroundImage: "linear-gradient(to right, #1B4565, #3E9BA4)"
_color: #fff
-->

# ありがとうございました

## 10のレイアウトパターン

- スタイルガイド準拠
- 短時間で作成
- 一貫性のあるデザイン

**これらのパターンを組み合わせて使用してください**
