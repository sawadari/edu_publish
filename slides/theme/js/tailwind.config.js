// Tailwind CSS設定 for Marp
// preflightを無効化してMarpのデフォルトスタイルを保持

tailwind.config = {
  theme: {
    extend: {
      colors: {
        // レクタースタイルカスタムカラー
        'rector-navy': '#1B4565',
        'rector-teal': '#3E9BA4',
        'rector-ruby': '#c70067'
      },
      fontSize: {
        // emベースのフォントサイズ
        'em-3xl': '3em',
        'em-2xl': '2em',
        'em-xl': '1.5em',
        'em-lg': '1.25em',
        'em-base': '1em'
      }
    }
  },
  corePlugins: {
    // Marpのデフォルトスタイルを上書きしない
    preflight: false
  }
}
