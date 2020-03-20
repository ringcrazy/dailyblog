const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
  // dest: '../../dist',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器'
    }
  },
  theme: '@vuepress/vue',
  themeConfig: {
    repo: 'vuejs/vuepress',
    editLinks: true,
    // #697 Provided by the official algolia team.
    smoothScroll: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/zh'),
        sidebar: {
          '/javascript/': getThemeSidebar(),
          '/webpack/': getWebpackSidebar(),
          '/guide/': getGuideSidebar('Guide', 'Advanced'),
          '/plugin/': getPluginSidebar('Plugin', 'Introduction', 'Official Plugins'),
          '/theme/': getThemeSidebar('Theme', 'Introduction')
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/javascript/': getThemeSidebar('主题', '介绍'),
          '/zh/api/': getApiSidebar(),
          '/zh/guide/': getGuideSidebar('01.执行上下文', '02.this', '03.原型', '04.高阶函数'),
          '/zh/plugin/': getPluginSidebar('插件', '介绍', '官方插件'),
          '/zh/theme/': getThemeSidebar('主题', '介绍')
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>'
    }],
    ['flowchart']
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/zh.js'
  ]
})

function getApiSidebar () {
  return [
    'cli',
    'node'
  ]
}
function getBlogSidebar(){

  // return [{
  //   title: '01.执行上下文',
  //   collapsable: true,
  //   children: [
  //     'cli',
  //     'node'
  //   ]
  // }
  // ]
  return [
    '',
    'cli',
    'node'
  ]
  // return [
  //   {
  //     title: '主题',
  //     collapsable: true,
  //     sidebarDepth: 2,
  //     children: [
  //       '',
  //       'cli',
  //       'note'
  //     ]
  //   },
  //   {
  //     title: '主题',
  //     collapsable: true,
  //     sidebarDepth: 2,
  //     children: [
  //       '01/1'
  //     ]
  //   }
  // ]
}

// guideSideBar
function getGuideSidebar (groupA, groupB, groupC, groupD) {
  return [
    {
      title: groupA,
      collapsable: true,
      children: [
        '',
        'getting-started',
        'directory-structure',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'i18n',
        'deploy'
      ]
    },
    {
      title: groupB,
      collapsable: true,
      children: [
        'frontmatter',
        'permalinks',
        'markdown-slot',
        'global-computed'
      ]
    },{
      title: groupC
    },{
      title: groupD
    }
  ]
}

// 文件处理
const officalPlugins = fs
  .readdirSync(path.resolve(__dirname, '../plugin/official'))
  .map(filename => 'official/' + filename.slice(0, -3))
  .sort()

function getPluginSidebar (pluginTitle, pluginIntro, officialPluginTitle) {
  return [
    {
      title: pluginTitle,
      collapsable: true,
      children: [
        ['', pluginIntro],
        'using-a-plugin',
        'writing-a-plugin',
        'life-cycle',
        'option-api',
        'context-api'
      ]
    },
    {
      title: officialPluginTitle,
      collapsable: true,
      children: officalPlugins
    }
  ]
}


// JavaScript
function getThemeSidebar (groupA, introductionA) {
  return [
    {
      title: '1.调用堆栈',
      collapsable: true,
      // sidebarDepth: 2,
      children: [
        '',
        '01/1.1',
        '01/1.2',
        '01/1.3',
        '01/1.4',
        '01/1.5'
      ]
    },
    {
      title: '2.作用域&闭包',
      collapsable: true,
      // sidebarDepth: 2,
      children: [
        '02/2.1',
        '02/2.2',
        '02/2.3'
      ]
    },
    {
      title: '3.this',
      collapsable: true,
      // sidebarDepth: 2,
      children: [
        '03/3.1',
        '03/3.2',
        '03/3.3',
        '03/3.4',
        '03/3.5'
      ]
    },
    {
      title: '4.原型&继承',
      collapsable: true,
      // sidebarDepth: 2,
      children: [
        '04/4.1',
        '04/4.2'
      ]
    },
    {
      title: '5.高阶函数',
      collapsable: true,
      // sidebarDepth: 2,
      children: [
        '05/5.1',
        '05/5.2'
      ]
    }
  ]
}

// Webpack
function getWebpackSidebar(){
  return [
    {
      title: '1.基础应用',
      collapsable: true,
      // sidebarDepth: 2,
      children: [
        '',
        '01/1.1'
      ]
    }
  ]
}
