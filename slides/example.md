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

---

<!-- パターン11: 4カラムレイアウト -->

# 4カラムレイアウト

<div class="grid grid-cols-4 gap-3 mt-4 text-base">
  <div class="bg-gray-50 rounded-lg shadow p-4 text-center">
    <h2 class="text-em-xl font-bold text-gray-800">Phase 1</h2>
    <p class="text-em-lg mt-2 text-gray-700">基盤構築</p>
  </div>

  <div class="bg-gray-50 rounded-lg shadow p-4 text-center">
    <h2 class="text-em-xl font-bold text-gray-800">Phase 2</h2>
    <p class="text-em-lg mt-2 text-gray-700">スキル実装</p>
  </div>

  <div class="bg-gray-50 rounded-lg shadow p-4 text-center">
    <h2 class="text-em-xl font-bold text-gray-800">Phase 3</h2>
    <p class="text-em-lg mt-2 text-gray-700">外部連携</p>
  </div>

  <div class="bg-gray-50 rounded-lg shadow p-4 text-center">
    <h2 class="text-em-xl font-bold text-gray-800">Phase 4</h2>
    <p class="text-em-lg mt-2 text-gray-700">完成</p>
  </div>
</div>

---

<!-- パターン12: 2x2グリッド（4枚パネル） -->

# 2x2グリッドレイアウト

<div class="grid grid-cols-2 grid-rows-2 gap-4 mt-4 text-base">
  <div class="bg-gray-50 rounded-lg shadow-lg p-4">
    <h2 class="text-em-2xl font-bold mb-3 text-gray-800">開発速度</h2>
    <p class="text-em-lg text-gray-700">パターンを使うことで開発が効率化される</p>
  </div>

  <div class="bg-gray-50 rounded-lg shadow-lg p-4">
    <h2 class="text-em-2xl font-bold mb-3 text-gray-800">品質向上</h2>
    <p class="text-em-lg text-gray-700">スタイルガイド準拠で統一感が生まれる</p>
  </div>

  <div class="bg-gray-50 rounded-lg shadow-lg p-4">
    <h2 class="text-em-2xl font-bold mb-3 text-gray-800">保守性</h2>
    <p class="text-em-lg text-gray-700">一貫したコードで修正が容易になる</p>
  </div>

  <div class="bg-gray-50 rounded-lg shadow-lg p-4">
    <h2 class="text-em-2xl font-bold mb-3 text-gray-800">拡張性</h2>
    <p class="text-em-lg text-gray-700">新機能の追加もスムーズに進む</p>
  </div>
</div>

---

<!-- パターン13: 縦並びステップ（5ステップ以上） -->

# 詳細ステップ形式

<div class="grid grid-cols-1 gap-3 mt-4 text-base">
  <div class="bg-gray-50 rounded-lg shadow p-3 border-l-4 border-gray-300">
    <h2 class="text-em-xl font-bold text-gray-800">ステップ1 要件定義</h2>
  </div>

  <div class="bg-gray-50 rounded-lg shadow p-3 border-l-4 border-gray-400">
    <h2 class="text-em-xl font-bold text-gray-800">ステップ2 設計</h2>
  </div>

  <div class="bg-gray-50 rounded-lg shadow p-3 border-l-4 border-gray-500">
    <h2 class="text-em-xl font-bold text-gray-800">ステップ3 実装</h2>
  </div>

  <div class="bg-gray-50 rounded-lg shadow p-3 border-l-4 border-gray-600">
    <h2 class="text-em-xl font-bold text-gray-800">ステップ4 テスト</h2>
  </div>

  <div class="bg-gray-50 rounded-lg shadow p-3 border-l-4 border-gray-700">
    <h2 class="text-em-xl font-bold text-gray-800">ステップ5 デプロイ</h2>
  </div>
</div>

---

<!-- パターン14: タイムライン表示 -->

# タイムライン

<div class="grid grid-cols-1 gap-4 mt-4 text-base">
  <div class="flex items-start">
    <div class="flex-shrink-0 w-24 text-em-lg font-bold text-gray-600">2024/01</div>
    <div class="flex-1 bg-gray-50 rounded-lg shadow p-4">
      <h2 class="text-em-xl font-bold text-gray-800">プロジェクト開始</h2>
      <p class="text-em-lg mt-2 text-gray-700">基盤構築フェーズ</p>
    </div>
  </div>

  <div class="flex items-start">
    <div class="flex-shrink-0 w-24 text-em-lg font-bold text-gray-600">2024/04</div>
    <div class="flex-1 bg-gray-50 rounded-lg shadow p-4">
      <h2 class="text-em-xl font-bold text-gray-800">Phase 2完了</h2>
      <p class="text-em-lg mt-2 text-gray-700">スキル実装完了</p>
    </div>
  </div>

  <div class="flex items-start">
    <div class="flex-shrink-0 w-24 text-em-lg font-bold text-gray-600">2024/08</div>
    <div class="flex-1 bg-gray-50 rounded-lg shadow p-4">
      <h2 class="text-em-xl font-bold text-gray-800">リリース</h2>
      <p class="text-em-lg mt-2 text-gray-700">本番環境稼働開始</p>
    </div>
  </div>
</div>

---

<!-- パターン15: 比較表（3列以上） -->

# 機能比較表

<div class="mt-4 text-base">
  <table class="w-full">
    <thead>
      <tr class="bg-gray-100">
        <th class="text-em-lg font-bold text-gray-800 p-3 text-left">機能</th>
        <th class="text-em-lg font-bold text-gray-800 p-3 text-center">Basic</th>
        <th class="text-em-lg font-bold text-gray-800 p-3 text-center">Pro</th>
        <th class="text-em-lg font-bold text-gray-800 p-3 text-center">Enterprise</th>
      </tr>
    </thead>
    <tbody class="text-em-lg text-gray-700">
      <tr class="border-b border-gray-200">
        <td class="p-3">スタイルガイド</td>
        <td class="p-3 text-center">✓</td>
        <td class="p-3 text-center">✓</td>
        <td class="p-3 text-center">✓</td>
      </tr>
      <tr class="border-b border-gray-200">
        <td class="p-3">40パターン</td>
        <td class="p-3 text-center">-</td>
        <td class="p-3 text-center">✓</td>
        <td class="p-3 text-center">✓</td>
      </tr>
      <tr>
        <td class="p-3">外部ツール統合</td>
        <td class="p-3 text-center">-</td>
        <td class="p-3 text-center">-</td>
        <td class="p-3 text-center">✓</td>
      </tr>
    </tbody>
  </table>
</div>

---

<!-- パターン16: 引用パネル -->

# 引用パネル

<div class="mt-6 text-base">
  <div class="bg-gray-50 rounded-xl shadow-lg p-6 border-l-4 border-gray-600">
    <p class="text-em-xl text-gray-700 italic">
      「美麗でシンプル、可読性重視のデザイン」
    </p>
    <p class="text-em-lg mt-4 text-gray-600 text-right">
      — レクタースタイルガイドより
    </p>
  </div>
</div>

---

<!-- パターン17: コードブロック表示 -->

# コード例の表示

<div class="mt-4 text-base">
  <div class="bg-gray-50 rounded-lg p-6">
    <p class="text-em-lg mb-3 text-gray-700">npm scriptsの例</p>
    <pre class="bg-gray-800 rounded p-4 text-gray-100 text-em-lg overflow-x-auto"><code>npm run marp:build
npm run marp:preview
npm run feedback:serve</code></pre>
  </div>
</div>

---

<!-- パターン18: 画像 + 説明（左右配置） -->

# 画像と説明（横並び）

<div class="grid grid-cols-2 gap-6 mt-6 text-base">
  <div class="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
    <p class="text-em-2xl text-gray-600">[画像エリア]</p>
  </div>

  <div class="flex items-center">
    <div>
      <h2 class="text-em-2xl font-bold mb-4 text-gray-800">機能の概要</h2>
      <p class="text-em-lg text-gray-700">
        左側に画像やスクリーンショットを配置し、
        右側に説明テキストを配置するレイアウト
      </p>
    </div>
  </div>
</div>

---

<!-- パターン19: 画像 + 説明（上下配置） -->

# 画像と説明（縦並び）

<div class="mt-4 text-base">
  <div class="bg-gray-100 rounded-lg p-8 mb-4 text-center">
    <p class="text-em-2xl text-gray-600">[画像エリア]</p>
  </div>

  <div class="text-center">
    <h2 class="text-em-2xl font-bold mb-3 text-gray-800">スクリーンショット</h2>
    <p class="text-em-lg text-gray-700">
      画像を上部に配置し、下部に説明を記載するレイアウト
    </p>
  </div>
</div>

---

<!-- パターン20: アイコン + 説明（3列） -->

# アイコンと説明

<div class="grid grid-cols-3 gap-4 mt-4 text-base">
  <div class="text-center">
    <div class="bg-gray-100 rounded-full w-20 h-20 mx-auto mb-3 flex items-center justify-center">
      <p class="text-em-2xl text-gray-600">📊</p>
    </div>
    <h2 class="text-em-xl font-bold text-gray-800">分析</h2>
    <p class="text-em-lg mt-2 text-gray-700">データを可視化</p>
  </div>

  <div class="text-center">
    <div class="bg-gray-100 rounded-full w-20 h-20 mx-auto mb-3 flex items-center justify-center">
      <p class="text-em-2xl text-gray-600">🚀</p>
    </div>
    <h2 class="text-em-xl font-bold text-gray-800">デプロイ</h2>
    <p class="text-em-lg mt-2 text-gray-700">自動デプロイ</p>
  </div>

  <div class="text-center">
    <div class="bg-gray-100 rounded-full w-20 h-20 mx-auto mb-3 flex items-center justify-center">
      <p class="text-em-2xl text-gray-600">✓</p>
    </div>
    <h2 class="text-em-xl font-bold text-gray-800">品質</h2>
    <p class="text-em-lg mt-2 text-gray-700">テスト自動化</p>
  </div>
</div>

---

<!-- パターン21: 統計数値（4カラム） -->

# 統計数値（4カラム）

<div class="grid grid-cols-4 gap-3 mt-4 text-base">
  <div class="bg-gray-100 rounded-lg shadow p-4 text-center">
    <p class="text-em-3xl font-bold text-gray-600">40</p>
    <p class="text-em-lg mt-2">パターン</p>
  </div>

  <div class="bg-gray-100 rounded-lg shadow p-4 text-center">
    <p class="text-em-3xl font-bold text-gray-600">7</p>
    <p class="text-em-lg mt-2">エージェント</p>
  </div>

  <div class="bg-gray-100 rounded-lg shadow p-4 text-center">
    <p class="text-em-3xl font-bold text-gray-600">12</p>
    <p class="text-em-lg mt-2">コマンド</p>
  </div>

  <div class="bg-gray-100 rounded-lg shadow p-4 text-center">
    <p class="text-em-3xl font-bold text-gray-600">100%</p>
    <p class="text-em-lg mt-2">準拠率</p>
  </div>
</div>

---

<!-- パターン22: 統計数値（グラデーション強調） -->

# 統計数値（強調版）

<div class="grid grid-cols-3 gap-4 mt-4 text-base">
  <div class="rounded-lg shadow-lg p-6 text-center"
       style="background: linear-gradient(135deg, #1B4565 0%, #3E9BA4 100%);">
    <p class="text-em-3xl font-bold text-white">218</p>
    <p class="text-em-lg mt-2 text-white">パッケージ</p>
    <p class="text-em-base mt-1 text-gray-100">npm install完了</p>
  </div>

  <div class="rounded-lg shadow-lg p-6 text-center"
       style="background: linear-gradient(135deg, #3E9BA4 0%, #1B4565 100%);">
    <p class="text-em-3xl font-bold text-white">40</p>
    <p class="text-em-lg mt-2 text-white">パターン</p>
    <p class="text-em-base mt-1 text-gray-100">レイアウト完備</p>
  </div>

  <div class="rounded-lg shadow-lg p-6 text-center"
       style="background: linear-gradient(135deg, #1B4565 0%, #3E9BA4 100%);">
    <p class="text-em-3xl font-bold text-white">100%</p>
    <p class="text-em-lg mt-2 text-white">スタイル準拠</p>
    <p class="text-em-base mt-1 text-gray-100">レクター完全準拠</p>
  </div>
</div>

---

<!-- パターン23: プロセスフロー（横） -->

# プロセスフロー（横）

<div class="flex items-center gap-3 mt-6 text-base">
  <div class="flex-1 bg-gray-50 rounded-lg shadow p-4 text-center">
    <h2 class="text-em-xl font-bold text-gray-800">入力</h2>
  </div>

  <div class="text-em-2xl text-gray-600">→</div>

  <div class="flex-1 bg-gray-50 rounded-lg shadow p-4 text-center">
    <h2 class="text-em-xl font-bold text-gray-800">処理</h2>
  </div>

  <div class="text-em-2xl text-gray-600">→</div>

  <div class="flex-1 bg-gray-50 rounded-lg shadow p-4 text-center">
    <h2 class="text-em-xl font-bold text-gray-800">出力</h2>
  </div>
</div>

---

<!-- パターン24: プロセスフロー（縦） -->

# プロセスフロー（縦）

<div class="flex flex-col items-center gap-3 mt-4 text-base">
  <div class="w-full max-w-md bg-gray-50 rounded-lg shadow p-4 text-center">
    <h2 class="text-em-xl font-bold text-gray-800">要件分析</h2>
  </div>

  <div class="text-em-2xl text-gray-600">↓</div>

  <div class="w-full max-w-md bg-gray-50 rounded-lg shadow p-4 text-center">
    <h2 class="text-em-xl font-bold text-gray-800">設計</h2>
  </div>

  <div class="text-em-2xl text-gray-600">↓</div>

  <div class="w-full max-w-md bg-gray-50 rounded-lg shadow p-4 text-center">
    <h2 class="text-em-xl font-bold text-gray-800">実装</h2>
  </div>
</div>

---

<!-- パターン25: ビフォーアフター（画像付き） -->

# ビフォーアフター比較

<div class="grid grid-cols-2 gap-6 mt-6 text-base">
  <div>
    <div class="bg-gray-100 rounded-lg p-8 mb-3 text-center">
      <p class="text-em-2xl text-gray-600">[Before画像]</p>
    </div>
    <h2 class="text-em-xl font-bold text-gray-800 text-center">導入前</h2>
    <p class="text-em-lg text-gray-700 text-center mt-2">手作業で時間がかかる</p>
  </div>

  <div>
    <div class="bg-gray-100 rounded-lg p-8 mb-3 text-center">
      <p class="text-em-2xl text-gray-600">[After画像]</p>
    </div>
    <h2 class="text-em-xl font-bold text-gray-800 text-center">導入後</h2>
    <p class="text-em-lg text-gray-700 text-center mt-2">自動化で効率化</p>
  </div>
</div>

---

<!-- パターン26: メリット・デメリット比較 -->

# メリット・デメリット

<div class="grid grid-cols-2 gap-6 mt-6 text-base">
  <div class="bg-gray-50 rounded-xl shadow-lg p-6 border-l-4 border-gray-500">
    <h1 class="text-em-2xl font-bold mb-4 text-gray-800">メリット</h1>
    <ul class="text-em-lg space-y-3 text-gray-700">
      <li>開発速度が向上</li>
      <li>品質が安定</li>
      <li>保守性が高い</li>
    </ul>
  </div>

  <div class="bg-gray-50 rounded-xl shadow-lg p-6 border-l-4 border-gray-400">
    <h1 class="text-em-2xl font-bold mb-4 text-gray-800">留意点</h1>
    <ul class="text-em-lg space-y-3 text-gray-700">
      <li>学習コストが必要</li>
      <li>初期セットアップに時間</li>
      <li>柔軟性とのトレードオフ</li>
    </ul>
  </div>
</div>

---

<!-- パターン27: チェックリスト -->

# チェックリスト

<div class="mt-6 text-base">
  <div class="bg-gray-50 rounded-xl shadow-lg p-6">
    <h2 class="text-em-2xl font-bold mb-4 text-gray-800">実装前の確認事項</h2>
    <ul class="text-em-lg space-y-3 text-gray-700">
      <li>✅ Node.js環境が整っているか</li>
      <li>✅ Marp CLIがインストール済みか</li>
      <li>✅ スタイルガイドを確認したか</li>
      <li>✅ example.mdのパターンを把握したか</li>
      <li>☐ 動作確認が完了したか</li>
    </ul>
  </div>
</div>

---

<!-- パターン28: FAQ形式 -->

# よくある質問

<div class="grid grid-cols-1 gap-4 mt-4 text-base">
  <div class="bg-gray-50 rounded-lg shadow p-4">
    <h2 class="text-em-xl font-bold text-gray-800 mb-2">カラーパレットは変更できますか</h2>
    <p class="text-em-lg text-gray-700">レクタースタイルでは#1B4565と#3E9BA4を基調としています。変更する場合はslides/theme/rector.cssを編集してください</p>
  </div>

  <div class="bg-gray-50 rounded-lg shadow p-4">
    <h2 class="text-em-xl font-bold text-gray-800 mb-2">パターンを組み合わせて使えますか</h2>
    <p class="text-em-lg text-gray-700">はい。40パターンを自由に組み合わせることができます</p>
  </div>

  <div class="bg-gray-50 rounded-lg shadow p-4">
    <h2 class="text-em-xl font-bold text-gray-800 mb-2">独自パターンを追加できますか</h2>
    <p class="text-em-lg text-gray-700">可能ですが、スタイルガイドに準拠することを推奨します</p>
  </div>
</div>

---

<!-- パターン29: ケーススタディ -->

# ケーススタディ

<div class="mt-6 text-base">
  <div class="bg-gray-50 rounded-xl shadow-lg p-6 border-l-4 border-gray-600">
    <h2 class="text-em-2xl font-bold mb-4 text-gray-800">事例 edu_publishプロジェクト</h2>

    <div class="mb-4">
      <h3 class="text-em-xl font-bold text-gray-800">課題</h3>
      <p class="text-em-lg text-gray-700">スライド作成に時間がかかり、デザインが統一されない</p>
    </div>

    <div class="mb-4">
      <h3 class="text-em-xl font-bold text-gray-800">解決策</h3>
      <p class="text-em-lg text-gray-700">Marp + 40パターン + スタイルガイド導入</p>
    </div>

    <div>
      <h3 class="text-em-xl font-bold text-gray-800">結果</h3>
      <p class="text-em-lg text-gray-700">作成時間が50%削減、デザイン品質が向上</p>
    </div>
  </div>
</div>

---

<!-- パターン30: 問題提起スライド -->

# 問題提起

<div class="mt-6 text-base">
  <div class="bg-gray-100 rounded-xl shadow-lg p-6">
    <h2 class="text-em-2xl font-bold mb-6 text-gray-800 text-center">
      なぜスライド作成に時間がかかるのか
    </h2>

    <ul class="text-em-lg space-y-4 text-gray-700">
      <li>デザインを毎回考える必要がある</li>
      <li>色やフォントの統一が難しい</li>
      <li>レイアウトの微調整に時間を取られる</li>
      <li>過去のスライドが再利用しにくい</li>
    </ul>
  </div>
</div>

---

<!-- パターン31: 解決策提示スライド -->

# 解決策

<div class="mt-6 text-base">
  <div class="rounded-xl shadow-lg p-6"
       style="background: linear-gradient(135deg, #1B4565 0%, #3E9BA4 100%);">
    <h2 class="text-em-2xl font-bold mb-6 text-white text-center">
      40パターンで解決
    </h2>

    <ul class="text-em-lg space-y-4 text-white">
      <li>パターンから選ぶだけで完成</li>
      <li>スタイルガイド準拠で統一感</li>
      <li>レイアウト調整不要</li>
      <li>再利用が容易</li>
    </ul>
  </div>
</div>

---

<!-- パターン32: サマリースライド -->

# まとめ

<div class="mt-6 text-base">
  <div class="bg-gray-50 rounded-xl shadow-lg p-6">
    <h2 class="text-em-2xl font-bold mb-4 text-gray-800">40パターンの特徴</h2>

    <div class="grid grid-cols-2 gap-4 mt-4">
      <div>
        <h3 class="text-em-xl font-bold text-gray-800 mb-2">効率性</h3>
        <p class="text-em-lg text-gray-700">短時間でプロフェッショナルなスライドを作成</p>
      </div>

      <div>
        <h3 class="text-em-xl font-bold text-gray-800 mb-2">一貫性</h3>
        <p class="text-em-lg text-gray-700">レクタースタイル準拠で統一感</p>
      </div>

      <div>
        <h3 class="text-em-xl font-bold text-gray-800 mb-2">拡張性</h3>
        <p class="text-em-lg text-gray-700">パターンの組み合わせで無限の可能性</p>
      </div>

      <div>
        <h3 class="text-em-xl font-bold text-gray-800 mb-2">保守性</h3>
        <p class="text-em-lg text-gray-700">スタイル変更が容易</p>
      </div>
    </div>
  </div>
</div>

---

<!-- パターン33: ロードマップ -->

# ロードマップ

<div class="mt-4 text-base">
  <div class="bg-gray-50 rounded-lg shadow p-4 mb-3">
    <div class="flex items-center justify-between">
      <h2 class="text-em-xl font-bold text-gray-800">Q1 2024</h2>
      <span class="text-em-lg text-gray-700">Phase 1 基盤構築</span>
    </div>
  </div>

  <div class="bg-gray-50 rounded-lg shadow p-4 mb-3">
    <div class="flex items-center justify-between">
      <h2 class="text-em-xl font-bold text-gray-800">Q2 2024</h2>
      <span class="text-em-lg text-gray-700">Phase 2 スキル実装</span>
    </div>
  </div>

  <div class="bg-gray-50 rounded-lg shadow p-4 mb-3">
    <div class="flex items-center justify-between">
      <h2 class="text-em-xl font-bold text-gray-800">Q3 2024</h2>
      <span class="text-em-lg text-gray-700">Phase 3 外部ツール統合</span>
    </div>
  </div>

  <div class="bg-gray-100 rounded-lg shadow p-4 border-l-4 border-gray-600">
    <div class="flex items-center justify-between">
      <h2 class="text-em-xl font-bold text-gray-800">Q4 2024</h2>
      <span class="text-em-lg text-gray-700">Phase 4 完全版リリース</span>
    </div>
  </div>
</div>

---

<!-- パターン34: チーム紹介 -->

# チーム紹介

<div class="grid grid-cols-3 gap-4 mt-4 text-base">
  <div class="bg-gray-50 rounded-lg shadow p-4 text-center">
    <div class="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-3"></div>
    <h2 class="text-em-xl font-bold text-gray-800">開発チーム</h2>
    <p class="text-em-lg mt-2 text-gray-700">フロントエンド・バックエンド</p>
  </div>

  <div class="bg-gray-50 rounded-lg shadow p-4 text-center">
    <div class="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-3"></div>
    <h2 class="text-em-xl font-bold text-gray-800">デザインチーム</h2>
    <p class="text-em-lg mt-2 text-gray-700">UIUXデザイン</p>
  </div>

  <div class="bg-gray-50 rounded-lg shadow p-4 text-center">
    <div class="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-3"></div>
    <h2 class="text-em-xl font-bold text-gray-800">運用チーム</h2>
    <p class="text-em-lg mt-2 text-gray-700">インフラ・監視</p>
  </div>
</div>

---

<!-- パターン35: お問い合わせ情報 -->

# お問い合わせ

<div class="mt-6 text-base">
  <div class="bg-gray-50 rounded-xl shadow-lg p-6">
    <h2 class="text-em-2xl font-bold mb-6 text-gray-800 text-center">Contact</h2>

    <div class="space-y-4 text-em-lg text-gray-700">
      <div class="flex items-center">
        <div class="w-32 font-bold">Email</div>
        <div>contact@example.com</div>
      </div>

      <div class="flex items-center">
        <div class="w-32 font-bold">GitHub</div>
        <div>github.com/example</div>
      </div>

      <div class="flex items-center">
        <div class="w-32 font-bold">Website</div>
        <div>example.com</div>
      </div>
    </div>
  </div>
</div>

---

<!-- パターン36: 参考文献リスト -->

# 参考文献

<div class="mt-6 text-base">
  <div class="bg-gray-50 rounded-xl shadow-lg p-6">
    <ul class="text-em-lg space-y-3 text-gray-700">
      <li>[1] AIエージェントと協働してmarpでスライドを作る2026</li>
      <li>[2] Marp公式ドキュメント - https://marp.app</li>
      <li>[3] Tailwind CSS公式ドキュメント - https://tailwindcss.com</li>
      <li>[4] Rector Style Guide - 本プロジェクト内</li>
    </ul>
  </div>
</div>

---

<!-- パターン37: QRコード表示 -->

# QRコード

<div class="flex items-center gap-6 mt-6 text-base">
  <div class="flex-1">
    <h2 class="text-em-2xl font-bold mb-4 text-gray-800">プロジェクトURL</h2>
    <p class="text-em-lg text-gray-700 mb-4">
      スマートフォンで以下のQRコードを読み取ってアクセスしてください
    </p>
    <p class="text-em-lg text-gray-600">https://github.com/example/edu_publish</p>
  </div>

  <div class="bg-gray-100 rounded-lg p-8 w-64 h-64 flex items-center justify-center">
    <p class="text-em-2xl text-gray-600">[QRコード]</p>
  </div>
</div>

---

<!-- パターン38: 全画面画像 + テキストオーバーレイ -->

<!--
_backgroundImage: "linear-gradient(to right, #1B4565, #3E9BA4)"
_color: #fff
-->

# 大きな見出し

## サブ見出しテキスト

画像やグラデーション背景の上にテキストを重ねる
印象的なスライドを作成できる

---

<!-- パターン39: 分割画面（2画像比較） -->

# 画面分割比較

<div class="grid grid-cols-2 gap-2 mt-4 text-base">
  <div class="bg-gray-100 rounded-lg p-16 flex items-center justify-center">
    <p class="text-em-2xl text-gray-600">[画像A]</p>
  </div>

  <div class="bg-gray-100 rounded-lg p-16 flex items-center justify-center">
    <p class="text-em-2xl text-gray-600">[画像B]</p>
  </div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-base">
  <div class="text-center">
    <p class="text-em-lg text-gray-700">従来の方法</p>
  </div>

  <div class="text-center">
    <p class="text-em-lg text-gray-700">新しい方法</p>
  </div>
</div>

---

<!-- パターン40: サンクススライド（バリエーション） -->

<!--
_backgroundImage: "linear-gradient(135deg, #1B4565 0%, #3E9BA4 100%)"
_color: #fff
-->

<div class="flex items-center justify-center h-full">
  <div class="text-center">
    <h1 class="text-em-3xl font-bold mb-6">ありがとうございました</h1>
    <p class="text-em-xl mb-6">40パターン完全版</p>
    <p class="text-em-lg">
      github.com/example/edu_publish<br>
      Phase 2実装完了
    </p>
  </div>
</div>
