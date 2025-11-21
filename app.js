// 目的：根据视口宽度动态设置根字号，让 rem 随屏幕按比例缩放
// 原理：CSS px 是逻辑像素，真实渲染受 devicePixelRatio 影响；通过设置 html 的 font-size，
// 夹紧：将根字号限制在 12–14px，避免超小/超大设备导致文字过小/过大，提升可读性与可访问性。
(function () {
  const docEl = document.documentElement;
  function setRem() {
    const vw = docEl.clientWidth; // 当前视口宽度
    let base = vw / 10;           // 约定：1rem = 视口宽度的 1/10（流体比例）
    if (base < 12) base = 12;
    if (base > 14) base = 14;
    docEl.style.fontSize = base + 'px'; // 设置根字号，页面使用 rem 的元素将随之缩放
    document.getElementById('vw').textContent = `vw: ${Math.round(vw)}px`; // 显示当前视口便于观察
    const header = document.querySelector('.app-header');
    if (header) {
      docEl.style.setProperty('--header-h', header.offsetHeight + 'px'); // 计算并注入头部高度供 tabs 粘性定位使用
    }
  }
  window.addEventListener('resize', setRem);           // 视口变化时重算
  window.addEventListener('orientationchange', setRem); // 旋转屏幕时重算
  setRem();                                             // 首次进入页面即应用设置
})();

// Show DPR info (CSS px vs 设备像素)
(function () {
  const dpr = window.devicePixelRatio || 1; // 读取设备像素比，帮助理解 CSS px 与物理像素的关系
  document.getElementById('dpr').textContent = `DPR: ${dpr}`; // 在页面顶部显示
})();

// Simple state
const state = {
  cat: 'top',
};

// Mock data (可替换为真实API)
const DATA = {
  top: [
    { id: 1, title: '移动端适配：1px为何变2px？', meta: '深度解析 · 3分钟前', img: 'https://picsum.photos/seed/news1/800/600' },
    { id: 2, title: 'Web性能优化的5个实战技巧', meta: '专题 · 10分钟前', img: 'https://picsum.photos/seed/news2/800/600' },
    { id: 3, title: 'AI新闻：大模型新突破', meta: '快讯 · 15分钟前', img: 'https://picsum.photos/seed/news3/800/600' },
    { id: 4, title: '移动端屏幕适配指南', meta: '特稿 · 25分钟前', img: 'https://picsum.photos/seed/news4/800/600' },
    { id: 5, title: 'CSS像素与设备像素详解', meta: '深度 · 40分钟前', img: 'https://picsum.photos/seed/news5/800/600' },
    { id: 6, title: '前端布局：flex与grid实践', meta: '专栏 · 55分钟前', img: 'https://picsum.photos/seed/news6/800/600' },
    { id: 7, title: 'WebP/AVIF图片优化', meta: '教程 · 1小时前', img: 'https://picsum.photos/seed/news7/800/600' },
    { id: 8, title: 'PWA让新闻离线可阅读', meta: '实践 · 1小时前', img: 'https://picsum.photos/seed/news8/800/600' },
    { id: 9, title: 'H5动效与性能平衡', meta: '观察 · 2小时前', img: 'https://picsum.photos/seed/news9/800/600' },
    { id: 10, title: '字体与中文排版微调', meta: '设计 · 3小时前', img: 'https://picsum.photos/seed/news10/800/600' }
  ],
  tech: [
    { id: 11, title: '前端工程化的新趋势', meta: '科技 · 5分钟前', img: 'https://picsum.photos/seed/news11/800/600' },
    { id: 12, title: '开源生态观察2025', meta: '科技 · 20分钟前', img: 'https://picsum.photos/seed/news12/800/600' },
    { id: 13, title: 'JavaScript运行时竞速', meta: '科技 · 45分钟前', img: 'https://picsum.photos/seed/news13/800/600' },
    { id: 14, title: 'WebAssembly应用案例', meta: '科技 · 1小时前', img: 'https://picsum.photos/seed/news14/800/600' },
    { id: 15, title: '前端监控与可观测性', meta: '科技 · 1小时前', img: 'https://picsum.photos/seed/news15/800/600' },
    { id: 16, title: '云原生与边缘计算', meta: '科技 · 2小时前', img: 'https://picsum.photos/seed/news16/800/600' },
    { id: 17, title: '数据可视化新思路', meta: '科技 · 2小时前', img: 'https://picsum.photos/seed/news17/800/600' },
    { id: 18, title: '低代码平台实践', meta: '科技 · 3小时前', img: 'https://picsum.photos/seed/news18/800/600' }
  ],
  sports: [
    { id: 21, title: '城市马拉松周末开跑', meta: '体育 · 8分钟前', img: 'https://picsum.photos/seed/news21/800/600' },
    { id: 22, title: '篮球季后赛精彩回顾', meta: '体育 · 30分钟前', img: 'https://picsum.photos/seed/news22/800/600' },
    { id: 23, title: '世界杯备战速递', meta: '体育 · 50分钟前', img: 'https://picsum.photos/seed/news23/800/600' },
    { id: 24, title: 'F1分站赛看点', meta: '体育 · 1小时前', img: 'https://picsum.photos/seed/news24/800/600' },
    { id: 25, title: '网球公开赛赛程', meta: '体育 · 1小时前', img: 'https://picsum.photos/seed/news25/800/600' },
    { id: 26, title: '滑雪世界杯集锦', meta: '体育 · 2小时前', img: 'https://picsum.photos/seed/news26/800/600' },
    { id: 27, title: '电竞联赛数据榜', meta: '体育 · 2小时前', img: 'https://picsum.photos/seed/news27/800/600' },
    { id: 28, title: '城市骑行路线推荐', meta: '体育 · 3小时前', img: 'https://picsum.photos/seed/news28/800/600' }
  ]
};

function renderList(cat) {
  const list = document.getElementById('list');
  const items = DATA[cat] || [];
  list.innerHTML = items.map((it) => `
    <article class="card">
      <div>
        <h2 class="title">${it.title}</h2>
        <div class="meta">${it.meta}</div>
      </div>
      <div class="thumb">
        <img src="${it.img}" alt="${it.title}">
      </div>
    </article>
  `).join('');
}

// Tabs interaction
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.cat = btn.dataset.cat;
    renderList(state.cat);
  });
});

// Refresh (重新渲染)
document.getElementById('refresh').addEventListener('click', () => renderList(state.cat));

// Init
renderList(state.cat);

// 字体设置24px 在pc端 iphone5 iphone 11下 大小有什么区别