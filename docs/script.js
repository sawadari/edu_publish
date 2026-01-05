// Configuration
const ARTICLES = [
    { id: '00', title: 'シリーズ概要', file: '00_INDEX.md' },
    { id: '01', title: '第1回: なぜ要求分析は面倒なのか', file: '01_なぜ要求分析は面倒なのか.md' },
    { id: '02', title: '第2回: ニーズ分析の実践テクニック', file: '02_ニーズ分析の実践テクニック.md' },
    { id: '03', title: '第3回: 要求定義の落とし穴', file: '03_要求定義の落とし穴.md' },
    { id: '04', title: '第4回: ヘタな要求あるある', file: '04_ヘタな要求あるある.md' },
    { id: '05', title: '第5回: テストできる要求の書き方', file: '05_テストできる要求の書き方.md' },
    { id: '06', title: '第6回: 要求配分の実務', file: '06_要求配分の実務.md' },
    { id: '07', title: '第7回: システムアーキテクチャ設計の勘所', file: '07_システムアーキテクチャ設計の勘所.md' },
    { id: '08', title: '第8回: 検証と妥当性確認の実務', file: '08_検証と妥当性確認の実務.md' },
    { id: '09', title: '第9回: 要求管理の現実解', file: '09_要求管理の現実解.md' },
    { id: '10', title: '第10回: チーム全体で回す要求プロセス', file: '10_チーム全体で回す要求プロセス.md' },
    { id: '11', title: '第11回: 派生開発という現実', file: '11_派生開発という現実.md' },
    { id: '12', title: '第12回: メーカー視点の要求管理', file: '12_メーカー視点の要求管理.md' },
    { id: '13', title: '第13回: サプライヤー視点の要求管理', file: '13_サプライヤー視点の要求管理.md' }
];

// State
let allContent = [];
let tocStructure = [];

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    await loadAllArticles();
    generateTOC();
    renderContent();
    setupScrollSpy();
});

// Load all markdown articles
async function loadAllArticles() {
    const baseUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? '../tech-blog-series/'
        : 'https://raw.githubusercontent.com/sawadari/edu_publish/master/tech-blog-series/';

    for (const article of ARTICLES) {
        try {
            const response = await fetch(baseUrl + article.file);
            const markdown = await response.text();
            allContent.push({
                id: article.id,
                title: article.title,
                markdown: markdown,
                html: marked.parse(markdown)
            });
        } catch (error) {
            console.error(`Failed to load ${article.file}:`, error);
            allContent.push({
                id: article.id,
                title: article.title,
                markdown: `# ${article.title}\n\n記事を読み込めませんでした。`,
                html: `<h1>${article.title}</h1><p>記事を読み込めませんでした。</p>`
            });
        }
    }
}

// Generate Table of Contents
function generateTOC() {
    const tocElement = document.getElementById('toc');
    tocElement.innerHTML = '';

    allContent.forEach((article, index) => {
        // Extract headers from HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = article.html;
        const headers = tempDiv.querySelectorAll('h1, h2, h3');

        // Create main article entry
        const mainItem = document.createElement('div');
        mainItem.className = 'toc-item';

        const mainLink = document.createElement('a');
        mainLink.href = `#article-${article.id}`;
        mainLink.className = 'toc-link';
        mainLink.textContent = article.title;
        mainLink.dataset.articleId = article.id;
        mainItem.appendChild(mainLink);

        // Create subsection list
        const subsectionList = document.createElement('ul');
        subsectionList.className = 'toc-subsection';
        subsectionList.id = `subsection-${article.id}`;

        let subsectionCount = 0;
        headers.forEach((header, hIndex) => {
            if (header.tagName === 'H1') return; // Skip H1 (main title)

            const subItem = document.createElement('li');
            subItem.className = 'toc-item';

            const subLink = document.createElement('a');
            const headerId = `article-${article.id}-h${subsectionCount}`;
            subLink.href = `#${headerId}`;
            subLink.className = 'toc-link';
            subLink.textContent = header.textContent;
            subLink.dataset.headerId = headerId;

            // Add ID to actual header for scrolling
            header.id = headerId;

            subItem.appendChild(subLink);
            subsectionList.appendChild(subItem);
            subsectionCount++;
        });

        mainItem.appendChild(subsectionList);
        tocElement.appendChild(mainItem);

        // Store TOC structure
        tocStructure.push({
            id: article.id,
            element: mainLink,
            subsections: Array.from(subsectionList.querySelectorAll('.toc-link'))
        });
    });

    // Add click handlers for TOC links
    document.querySelectorAll('.toc-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Render all content
function renderContent() {
    const contentElement = document.getElementById('content');
    contentElement.innerHTML = '';

    allContent.forEach((article, index) => {
        const articleSection = document.createElement('section');
        articleSection.id = `article-${article.id}`;
        articleSection.className = index > 0 ? 'article-separator' : '';
        articleSection.innerHTML = article.html;
        contentElement.appendChild(articleSection);
    });
}

// Setup scroll spy
function setupScrollSpy() {
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;

                // Remove all active classes
                document.querySelectorAll('.toc-link').forEach(link => {
                    link.classList.remove('active');
                });

                // Add active class to current section
                const activeLink = document.querySelector(`.toc-link[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');

                    // Expand subsections if it's a main article
                    if (id.startsWith('article-') && !id.includes('-h')) {
                        const articleId = id.replace('article-', '');
                        const subsectionList = document.getElementById(`subsection-${articleId}`);
                        if (subsectionList) {
                            // Collapse all subsections first
                            document.querySelectorAll('.toc-subsection').forEach(sub => {
                                sub.classList.remove('expanded');
                            });
                            // Expand current
                            subsectionList.classList.add('expanded');
                        }
                    }

                    // Scroll TOC to make active item visible
                    activeLink.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }
        });
    }, observerOptions);

    // Observe all sections and headers
    document.querySelectorAll('[id^="article-"]').forEach(section => {
        observer.observe(section);
    });
}
