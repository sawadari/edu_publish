// Marpスライドレビューシステム - JavaScript

// 現在選択中のスライド
let currentSlide = null;

// コメントデータ（ローカルストレージに保存）
let comments = [];

// 初期化
document.addEventListener('DOMContentLoaded', () => {
  loadComments();
  loadSlideList();
  displayComments();
});

// スライド一覧を読み込み
async function loadSlideList() {
  const slideList = document.getElementById('slide-list');
  slideList.innerHTML = '<li class="loading">読み込み中...</li>';

  try {
    // スライド出力ディレクトリからファイル一覧を取得
    // 本来はバックエンドAPIで取得するが、簡易版では手動リストを使用
    const slides = [
      { name: 'sample.html', title: 'サンプルスライド' },
      { name: '01_requirements-analysis.html', title: '要求分析' }
    ];

    slideList.innerHTML = '';

    slides.forEach(slide => {
      const li = document.createElement('li');
      li.textContent = slide.title;
      li.dataset.file = slide.name;
      li.onclick = () => selectSlide(slide);
      slideList.appendChild(li);
    });

    // 最初のスライドを自動選択
    if (slides.length > 0) {
      selectSlide(slides[0]);
    }
  } catch (error) {
    slideList.innerHTML = '<li class="error">エラー: スライドが見つかりません</li>';
    console.error('Failed to load slides:', error);
  }
}

// スライドを選択
function selectSlide(slide) {
  currentSlide = slide;

  // リストの選択状態を更新
  document.querySelectorAll('#slide-list li').forEach(li => {
    li.classList.remove('active');
    if (li.dataset.file === slide.name) {
      li.classList.add('active');
    }
  });

  // プレビューを更新
  const preview = document.getElementById('slide-preview');
  preview.src = `../slides/output/${slide.name}`;

  // 情報を更新
  const info = document.getElementById('current-slide-info');
  info.textContent = `表示中: ${slide.title} (${slide.name})`;

  // コメントを更新
  displayComments();
}

// スタイル修正を実行
function runStyleRector() {
  if (!currentSlide) {
    alert('スライドを選択してください');
    return;
  }

  const filename = currentSlide.name.replace('.html', '.md');
  alert(`Claude Codeで以下を実行してください:\n\n/slide-style-rector ${filename}`);
}

// リビルドを実行
function rebuild() {
  if (!currentSlide) {
    alert('スライドを選択してください');
    return;
  }

  alert('ターミナルで以下を実行してください:\n\nnpm run marp:build\n\n完了後、ブラウザをリロードしてください');
}

// ブラウザで開く
function openInBrowser() {
  if (!currentSlide) {
    alert('スライドを選択してください');
    return;
  }

  const url = `../slides/output/${currentSlide.name}`;
  window.open(url, '_blank');
}

// コメントを追加
function addComment() {
  const textarea = document.getElementById('new-comment');
  const slideNumber = document.getElementById('comment-slide-number');
  const text = textarea.value.trim();

  if (!text) {
    alert('コメントを入力してください');
    return;
  }

  if (!currentSlide) {
    alert('スライドを選択してください');
    return;
  }

  const comment = {
    id: Date.now(),
    slide: currentSlide.name,
    slideNumber: parseInt(slideNumber.value) || 1,
    text: text,
    timestamp: new Date().toISOString()
  };

  comments.push(comment);
  saveComments();
  displayComments();

  // フォームをリセット
  textarea.value = '';
  slideNumber.value = 1;
}

// コメントを削除
function deleteComment(id) {
  if (!confirm('このコメントを削除しますか？')) {
    return;
  }

  comments = comments.filter(c => c.id !== id);
  saveComments();
  displayComments();
}

// コメントを表示
function displayComments() {
  const commentList = document.getElementById('comment-list');

  if (!currentSlide) {
    commentList.innerHTML = '<p class="no-comments">スライドを選択してください</p>';
    return;
  }

  // 現在のスライドのコメントのみフィルタリング
  const slideComments = comments.filter(c => c.slide === currentSlide.name);

  if (slideComments.length === 0) {
    commentList.innerHTML = '<p class="no-comments">コメントはありません</p>';
    return;
  }

  // スライド番号順にソート
  slideComments.sort((a, b) => a.slideNumber - b.slideNumber);

  commentList.innerHTML = slideComments.map(comment => `
    <div class="comment-item">
      <div class="comment-header">
        <span class="slide-number">スライド ${comment.slideNumber}</span>
        <span class="timestamp">${formatTimestamp(comment.timestamp)}</span>
      </div>
      <div class="comment-text">${escapeHtml(comment.text)}</div>
      <button class="delete-btn" onclick="deleteComment(${comment.id})">削除</button>
    </div>
  `).join('');
}

// タイムスタンプをフォーマット
function formatTimestamp(isoString) {
  const date = new Date(isoString);
  const now = new Date();
  const diff = now - date;

  // 1分未満
  if (diff < 60 * 1000) {
    return 'たった今';
  }

  // 1時間未満
  if (diff < 60 * 60 * 1000) {
    const minutes = Math.floor(diff / (60 * 1000));
    return `${minutes}分前`;
  }

  // 1日未満
  if (diff < 24 * 60 * 60 * 1000) {
    const hours = Math.floor(diff / (60 * 60 * 1000));
    return `${hours}時間前`;
  }

  // それ以降は日付表示
  return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
}

// HTMLエスケープ
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// コメントをローカルストレージに保存
function saveComments() {
  localStorage.setItem('marp-review-comments', JSON.stringify(comments));
}

// コメントをローカルストレージから読み込み
function loadComments() {
  const saved = localStorage.getItem('marp-review-comments');
  if (saved) {
    try {
      comments = JSON.parse(saved);
    } catch (error) {
      console.error('Failed to load comments:', error);
      comments = [];
    }
  }
}

// Enterキーでコメント送信
document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('new-comment');
  if (textarea) {
    textarea.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        addComment();
      }
    });
  }
});
