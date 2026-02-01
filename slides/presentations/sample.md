---
marp: true
theme: default
paginate: true
---

<style>
@import url('../theme/rector.css');

.text-em-3xl { font-size: 3em; }
.text-em-2xl { font-size: 2em; }
.text-em-xl { font-size: 1.5em; }
.text-em-lg { font-size: 1.25em; }
.text-em-base { font-size: 1em; }
</style>

<script src="../theme/js/tailwindcss-3.0.16.js"></script>
<script src="../theme/js/tailwind.config.js"></script>

<!-- タイトルスライド -->

# Marpスライド作成環境
## レクタースタイル準拠

AIエージェントと協働するプレゼンテーション作成

---

<!-- セクション開始 -->

<!--
_backgroundImage: "linear-gradient(to right, #1B4565, #3E9BA4)"
_color: #fff
-->

# セットアップ完了
Phase 1の実装

---

<!-- 2カラム比較 -->

# 従来の方法 vs Marpワークフロー

<div class="grid grid-cols-2 gap-6 mt-6 text-base">
  <div class="bg-gray-50 rounded-xl shadow-lg p-6 border-l-4 border-gray-400">
    <h1 class="text-em-2xl font-bold mb-4 text-gray-800">従来の方法</h1>
    <ul class="text-em-lg space-y-3 text-gray-700">
      <li>PowerPoint/Keynoteで作成</li>
      <li>デザインの統一が困難</li>
      <li>バージョン管理が難しい</li>
      <li>コピペで時間がかかる</li>
    </ul>
  </div>

  <div class="bg-gray-100 rounded-xl shadow-lg p-6 border-l-4 border-gray-500">
    <h1 class="text-em-2xl font-bold mb-4 text-gray-800">Marpワークフロー</h1>
    <ul class="text-em-lg space-y-3 text-gray-700">
      <li>Markdownで記述</li>
      <li>スタイルガイド準拠</li>
      <li>Git管理可能</li>
      <li>パターンから選択</li>
    </ul>
  </div>
</div>

---

<!-- 3カラムレイアウト -->

# 実装内容

<div class="grid grid-cols-3 gap-4 mt-4 text-base">
  <div class="bg-gray-50 rounded-lg shadow p-4">
    <h2 class="text-em-2xl font-bold mb-3 text-gray-800">基盤</h2>
    <ul class="text-em-lg space-y-2 text-gray-700">
      <li>Marp CLI</li>
      <li>Tailwind CSS</li>
      <li>Node.js環境</li>
    </ul>
  </div>

  <div class="bg-gray-50 rounded-lg shadow p-4">
    <h2 class="text-em-2xl font-bold mb-3 text-gray-800">設定</h2>
    <ul class="text-em-lg space-y-2 text-gray-700">
      <li>スタイルガイド</li>
      <li>10パターン</li>
      <li>テーマファイル</li>
    </ul>
  </div>

  <div class="bg-gray-50 rounded-lg shadow p-4">
    <h2 class="text-em-2xl font-bold mb-3 text-gray-800">コマンド</h2>
    <ul class="text-em-lg space-y-2 text-gray-700">
      <li>/marp-create</li>
      <li>/marp-build</li>
      <li>/marp-preview</li>
    </ul>
  </div>
</div>

---

<!-- 統計数値 -->

# プロジェクト統計

<div class="grid grid-cols-3 gap-4 mt-4 text-base">
  <div class="bg-gray-100 rounded-lg shadow p-4 text-center">
    <p class="text-em-3xl font-bold text-gray-600">218</p>
    <p class="text-em-lg mt-2">パッケージ</p>
    <p class="text-em-base text-gray-500 mt-1">Marp + Tailwind</p>
  </div>

  <div class="rounded-lg shadow p-4 text-center"
       style="background: linear-gradient(135deg, #1B4565 0%, #3E9BA4 100%);">
    <p class="text-em-3xl font-bold text-white">10</p>
    <p class="text-em-lg mt-2 text-white">パターン</p>
  </div>

  <div class="bg-gray-100 rounded-lg shadow p-4 text-center">
    <p class="text-em-3xl font-bold text-gray-600">3</p>
    <p class="text-em-lg mt-2">コマンド</p>
    <p class="text-em-base text-gray-500 mt-1">Claude Code統合</p>
  </div>
</div>

---

<!-- パネルデザイン -->

# スタイルガイドの特徴

<div class="mt-6 text-base">
  <div class="bg-gray-100 rounded-xl shadow-lg p-6 border-l-4 border-gray-600">
    <h2 class="text-em-2xl font-bold mb-4 text-gray-800">レクタースタイル</h2>
    <p class="text-em-lg text-gray-700">
      グレースケール基調に濃紺とティールのアクセントカラー。
      美麗でシンプル、可読性重視のデザイン。
    </p>
    <ul class="text-em-lg mt-4 space-y-2 text-gray-700">
      <li>カラーパレット統一（#1B4565, #3E9BA4）</li>
      <li>emベースのタイポグラフィ</li>
      <li>コロン・感嘆符・絵文字禁止</li>
      <li>一貫性のあるレイアウト</li>
    </ul>
  </div>
</div>

---

<!-- 中央配置 -->

<!--
_class: lead
-->

<div class="flex items-center justify-center h-full">
  <div class="text-center">
    <h1 class="text-em-3xl font-bold mb-6" style="color: #1B4565;">
      短時間で作成
    </h1>
    <p class="text-em-xl text-gray-700">
      パターンを使うことで<br>
      統一感のあるスライドを<br>
      効率的に作成できる
    </p>
  </div>
</div>

---

<!-- クロージング -->

<!--
_backgroundImage: "linear-gradient(to right, #1B4565, #3E9BA4)"
_color: #fff
-->

# ありがとうございました

## Marp Phase 1 完了

- ✅ Marp CLI + Tailwind CSS環境
- ✅ スタイルガイド + 10パターン
- ✅ Claude Codeコマンド統合

**次回: Phase 2でスキル実装を検討**
