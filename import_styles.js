// styles.js

const stylesheets = [
    'index.css',
    'shared.css',
    'header.css',
    'evelator.css',
    'cv.css',
    'welcome.css',
    'about.css',
    'skillset.css',
    'education.css',
    'portfolio.css',
    'coding_exp.css',
    'comments.css',
    'contact.css',
    'footer.css',
    'progressbar.css'
];

// 循环遍历样式表数组，创建并添加 link 元素
stylesheets.forEach(style => {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = style;
    document.head.appendChild(linkElement);
});