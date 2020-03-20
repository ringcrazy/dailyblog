(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{324:function(t,a,s){"use strict";s.r(a);var e=s(11),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("h2",{attrs:{id:"基本配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本配置"}},[t._v("#")]),t._v(" 基本配置")]),t._v(" "),s("h3",{attrs:{id:"base"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#base"}},[t._v("#")]),t._v(" base")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("/")])])]),t._v(" "),s("p",[t._v("部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 GitHub pages，如果你想将你的网站部署到 "),s("code",[t._v("https://foo.github.io/bar/")]),t._v("，那么 "),s("code",[t._v("base")]),t._v(" 应该被设置成 "),s("code",[t._v('"/bar/"')]),t._v("，它的值应当总是以斜杠开始，并以斜杠结束。")]),t._v(" "),s("p",[s("code",[t._v("base")]),t._v(" 将会作为前缀自动地插入到所有以 "),s("code",[t._v("/")]),t._v(" 开始的其他选项的链接中，所以你只需要指定一次。")]),t._v(" "),s("p",[s("strong",[t._v("参考:")])]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh/guide/assets.html#基础路径"}},[t._v("Base URL")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/guide/deploy.html#github-pages"}},[t._v("部署指南 > GitHub Pages")])],1)]),t._v(" "),s("h3",{attrs:{id:"title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" title")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("undefined")])])]),t._v(" "),s("p",[t._v("网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。")]),t._v(" "),s("h3",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("undefined")])])]),t._v(" "),s("p",[t._v("网站的描述，它将会以 "),s("code",[t._v("<meta>")]),t._v(" 标签渲染到当前页面的 HTML 中。")]),t._v(" "),s("h3",{attrs:{id:"head"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[t._v("#")]),t._v(" head")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("Array")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("[]")])])]),t._v(" "),s("p",[t._v("额外的需要被注入到当前页面的 HTML "),s("code",[t._v("<head>")]),t._v(" 中的标签，每个标签都可以以 "),s("code",[t._v("[tagName, { attrName: attrValue }, innerHTML?]")]),t._v(" 的格式指定，举个例子，增加一个自定义的 favicon：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  head"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'icon'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/logo.png'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"host"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[t._v("#")]),t._v(" host")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("'0.0.0.0'")])])]),t._v(" "),s("p",[t._v("指定用于 dev server 的主机名。")]),t._v(" "),s("h3",{attrs:{id:"port"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[t._v("#")]),t._v(" port")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("number")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("8080")])])]),t._v(" "),s("p",[t._v("指定 dev server 的端口。")]),t._v(" "),s("h3",{attrs:{id:"temp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#temp"}},[t._v("#")]),t._v(" temp")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("/path/to/@vuepress/core/.temp")])])]),t._v(" "),s("p",[t._v("指定客户端文件的临时目录。")]),t._v(" "),s("h3",{attrs:{id:"dest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dest"}},[t._v("#")]),t._v(" dest")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v(".vuepress/dist")])])]),t._v(" "),s("p",[t._v("指定 "),s("code",[t._v("vuepress build")]),t._v(" 的输出目录。如果传入的是相对路径，则会基于 "),s("code",[t._v("process.cwd()")]),t._v(" 进行解析。")]),t._v(" "),s("h3",{attrs:{id:"locales"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#locales"}},[t._v("#")]),t._v(" locales")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("{ [path: string]: Object }")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("undefined")])])]),t._v(" "),s("p",[t._v("提供多语言支持的语言配置。具体细节请查看 "),s("RouterLink",{attrs:{to:"/zh/guide/i18n.html"}},[t._v("多语言支持")]),t._v("。")],1),t._v(" "),s("h3",{attrs:{id:"shouldprefetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shouldprefetch"}},[t._v("#")]),t._v(" shouldPrefetch")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("Function")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("() => true")])])]),t._v(" "),s("p",[t._v("一个函数，用来控制对于哪些文件，是需要生成 "),s("code",[t._v('<link rel="prefetch">')]),t._v(" 资源提示的。请参考 "),s("a",{attrs:{href:"https://ssr.vuejs.org/zh/api/#shouldprefetch",target:"_blank",rel:"noopener noreferrer"}},[t._v("shouldPrefetch"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cache"}},[t._v("#")]),t._v(" cache")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("boolean|string")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("true")])])]),t._v(" "),s("p",[t._v("VuePress 默认使用了 "),s("a",{attrs:{href:"https://github.com/webpack-contrib/cache-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("cache-loader"),s("OutboundLink")],1),t._v("  来大大地加快 webpack 的编译速度。")]),t._v(" "),s("p",[t._v("此选项可以用于指定 cache 的路径，同时也可以通过设置为 "),s("code",[t._v("false")]),t._v(" 来在每次构建之前删除 cache。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("这个选项也可以通过命令行来使用：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("vuepress dev docs --cache .cache "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置 cache 路径")]),t._v("\nvuepress dev docs --no-cache     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在每次构建前删除 cache")]),t._v("\n")])])])]),t._v(" "),s("h3",{attrs:{id:"extrawatchfiles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extrawatchfiles"}},[t._v("#")]),t._v(" extraWatchFiles")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("Array")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("[]")])])]),t._v(" "),s("p",[t._v("指定额外的需要被监听的文件。")]),t._v(" "),s("p",[t._v("你可以监听任何想监听的文件，文件变动将会触发 "),s("code",[t._v("vuepress")]),t._v(" 重新构建，并实时更新。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  extraWatchFiles"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.vuepress/foo.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用相对路径")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path/to/bar.js'")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用绝对路径")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"patterns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#patterns"}},[t._v("#")]),t._v(" patterns")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Array")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("['**/*.md', '**/*.vue']")])])]),t._v(" "),s("p",[t._v("Specify which pattern of files you want to be resolved.")]),t._v(" "),s("h2",{attrs:{id:"styling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#styling"}},[t._v("#")]),t._v(" Styling")]),t._v(" "),s("h3",{attrs:{id:"palette-styl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#palette-styl"}},[t._v("#")]),t._v(" palette.styl")]),t._v(" "),s("p",[t._v("如果要对"),s("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/@vuepress/core/lib/client/style/config.styl",target:"_blank",rel:"noopener noreferrer"}},[t._v("默认预设"),s("OutboundLink")],1),t._v("的样式应用简单的颜色替换，或者定义一些颜色变量供以后使用，你可以创建一个 "),s("code",[t._v(".vuepress/styles/palette.styl")]),t._v(" 文件。")]),t._v(" "),s("p",[t._v("你可以调整一些颜色变量:")]),t._v(" "),s("div",{staticClass:"language-stylus extra-class"},[s("pre",{pre:!0,attrs:{class:"language-stylus"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$accentColor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#3eaf7c")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$textColor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#2c3e50")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$borderColor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#eaecef")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$codeBgColor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#282c34")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$badgeTipColor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#42b983")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$badgeWarningColor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token func"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("darken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#ffe564")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("35%")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable-declaration"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$badgeErrorColor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#DA5961")])]),t._v("\n")])])]),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("你应该"),s("strong",[t._v("只在")]),t._v("这个文件中写入颜色变量。因为 "),s("code",[t._v("palette.styl")]),t._v(" 将在根的 stylus 配置文件的末尾引入，作为配置，它将被多个文件使用，所以一旦你在这里写了样式，你的样式就会被多次复制。")])]),t._v(" "),s("h3",{attrs:{id:"index-styl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#index-styl"}},[t._v("#")]),t._v(" index.styl")]),t._v(" "),s("p",[t._v("VuePress 提供了一种添加额外样式的简便方法。你可以创建一个 "),s("code",[t._v(".vuepress/styles/index.styl")]),t._v(" 文件。这是一个 "),s("a",{attrs:{href:"http://stylus-lang.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stylus"),s("OutboundLink")],1),t._v(" 文件，但你也可以使用正常的 CSS 语法。")]),t._v(" "),s("div",{staticClass:"language-stylus extra-class"},[s("pre",{pre:!0,attrs:{class:"language-stylus"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".content "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("px")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主题"}},[t._v("#")]),t._v(" 主题")]),t._v(" "),s("h3",{attrs:{id:"theme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#theme"}},[t._v("#")]),t._v(" theme")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("undefined")])])]),t._v(" "),s("p",[t._v("当你使用自定义主题的时候，需要指定它。")]),t._v(" "),s("p",[s("strong",[t._v("参考:")])]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh/theme/using-a-theme.html"}},[t._v("使用主题")]),t._v(".")],1)]),t._v(" "),s("h3",{attrs:{id:"themeconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#themeconfig"}},[t._v("#")]),t._v(" themeConfig")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("Object")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("{}")])])]),t._v(" "),s("p",[t._v("为当前的主题提供一些配置，这些选项依赖于你正在使用的主题。")]),t._v(" "),s("p",[s("strong",[t._v("也可以参考:")])]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh/theme/default-theme-config.html"}},[t._v("默认主题")]),t._v("。")],1)]),t._v(" "),s("h2",{attrs:{id:"pluggable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pluggable"}},[t._v("#")]),t._v(" Pluggable")]),t._v(" "),s("h3",{attrs:{id:"plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" plugins")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("Object|Array")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("undefined")])])]),t._v(" "),s("p",[t._v("请参考 "),s("RouterLink",{attrs:{to:"/zh/plugin/using-a-plugin.html"}},[t._v("plugin > Using a plugin")]),t._v(" 来使用一个插件。")],1),t._v(" "),s("h2",{attrs:{id:"markdown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown"}},[t._v("#")]),t._v(" Markdown")]),t._v(" "),s("h3",{attrs:{id:"markdown-linenumbers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-linenumbers"}},[t._v("#")]),t._v(" markdown.lineNumbers")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("undefined")])])]),t._v(" "),s("p",[t._v("是否在每个代码块的左侧显示行号。")]),t._v(" "),s("p",[s("strong",[t._v("参考:")])]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh/guide/markdown.html#行号"}},[t._v("行号")])],1)]),t._v(" "),s("h3",{attrs:{id:"markdown-slugify"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-slugify"}},[t._v("#")]),t._v(" markdown.slugify")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("Function")])]),t._v(" "),s("li",[t._v("默认值: "),s("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/shared-utils/src/slugify.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("source"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("一个将标题文本转换为 slug 的函数。修改它会影响 "),s("RouterLink",{attrs:{to:"/zh/miscellaneous/glossary.html#headers"}},[t._v("标题")]),t._v("、"),s("RouterLink",{attrs:{to:"/zh/guide/markdown.html#目录"}},[t._v("目录")]),t._v("、以及"),s("RouterLink",{attrs:{to:"/zh/theme/default-theme-config.html#侧边栏"}},[t._v("侧边栏")]),t._v("链接的 id 和 链接。")],1),t._v(" "),s("h3",{attrs:{id:"markdown-anchor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-anchor"}},[t._v("#")]),t._v(" markdown.anchor")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("Object")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("{ permalink: true, permalinkBefore: true, permalinkSymbol: '#' }")])])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/valeriangalliat/markdown-it-anchor",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-anchor"),s("OutboundLink")],1),t._v(" 的选项。")]),t._v(" "),s("h3",{attrs:{id:"markdown-externallinks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-externallinks"}},[t._v("#")]),t._v(" markdown.externalLinks")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("Object")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("{ target: '_blank', rel: 'noopener noreferrer' }")])])]),t._v(" "),s("p",[t._v("这个键值对将会作为特性被增加到是外部链接的 "),s("code",[t._v("<a>")]),t._v(" 标签上，默认的选项将会在新窗口中打开一个该外部链接。")]),t._v(" "),s("h3",{attrs:{id:"markdown-toc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-toc"}},[t._v("#")]),t._v(" markdown.toc")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("Object")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("{ includeLevel: [2, 3] }")])])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/Oktavilla/markdown-it-table-of-contents",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-table-of-contents"),s("OutboundLink")],1),t._v(" 的选项。")]),t._v(" "),s("h3",{attrs:{id:"markdown-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-plugins"}},[t._v("#")]),t._v(" markdown.plugins")]),t._v(" "),s("p",[t._v("你可以使用 "),s("code",[t._v("markdown.plugins")]),t._v(" 来安装 markdown-it 插件。它的使用方法与"),s("RouterLink",{attrs:{to:"/zh/plugin/using-a-plugin.html#using-a-plugin"}},[t._v("安装一个 VuePress 插件")]),t._v("类似。你可以使用 Babel 语法或对象语法。"),s("code",[t._v("markdown-it-")]),t._v(" 前缀同样是可以忽略的。")],1),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  markdown"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@org/foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等价于 @org/markdown-it-foo，如果对应的包存在")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown-it-bar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 提供你的选项")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("or")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  markdown"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@org/foo'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown-it-bar'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 提供你的选项")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"markdown-extendmarkdown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-extendmarkdown"}},[t._v("#")]),t._v(" markdown.extendMarkdown")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("Function")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("undefined")])])]),t._v(" "),s("p",[t._v("一个用于修改当前的 "),s("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it"),s("OutboundLink")],1),t._v(" 实例的默认配置，或者应用额外的插件的函数，举例如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  markdown"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("extendMarkdown")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("md")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      md"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" breaks"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      md"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown-it-xxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("这个选项也被 "),s("RouterLink",{attrs:{to:"/zh/plugin/option-api.html#extendmarkdown"}},[t._v("Plugin API")]),t._v(" 所支持。")],1)]),t._v(" "),s("h3",{attrs:{id:"markdown-extractheaders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-extractheaders"}},[t._v("#")]),t._v(" markdown.extractHeaders")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("Array")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("['h2', 'h3']")])])]),t._v(" "),s("p",[t._v("Markdown 文件的 headers (标题 & 小标题) 会在准备阶段被提取出来，并存储在 "),s("code",[t._v("this.$page.headers")]),t._v(" 中。默认情况下，VuePress 会提取 "),s("code",[t._v("h2")]),t._v(" 和 "),s("code",[t._v("h3")]),t._v(" 标题。你可以通过这个选项来修改提取出的标题级别。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  markdown"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    extractHeaders"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h4'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"构建流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建流程"}},[t._v("#")]),t._v(" 构建流程")]),t._v(" "),s("h3",{attrs:{id:"postcss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postcss"}},[t._v("#")]),t._v(" postcss")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("Object")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("{ plugins: [require('autoprefixer')] }")])])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/postcss/postcss-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("postcss-loader"),s("OutboundLink")],1),t._v(" 的选项，请注意，指定这个值，将会覆盖内置的 autoprefixer，所以你需要自己将它加进去。")]),t._v(" "),s("h3",{attrs:{id:"stylus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stylus"}},[t._v("#")]),t._v(" stylus")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("Object")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("{ preferPathResolver: 'webpack' }")])])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/shama/stylus-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("stylus-loader"),s("OutboundLink")],1),t._v(" 的选项。")]),t._v(" "),s("h3",{attrs:{id:"scss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scss"}},[t._v("#")]),t._v(" scss")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("Object")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("{}")])])]),t._v(" "),s("p",[t._v("加载 "),s("code",[t._v("*.scss")]),t._v(" 文件的 "),s("a",{attrs:{href:"https://github.com/postcss/postcss-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("sass-loader"),s("OutboundLink")],1),t._v(" 的选项。")]),t._v(" "),s("h3",{attrs:{id:"sass"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sass"}},[t._v("#")]),t._v(" sass")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("Object")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("{ indentedSyntax: true }")])])]),t._v(" "),s("p",[t._v("加载 "),s("code",[t._v("*.sass")]),t._v(" 文件的 "),s("a",{attrs:{href:"https://github.com/postcss/postcss-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("sass-loader"),s("OutboundLink")],1),t._v(" 的选项。")]),t._v(" "),s("h3",{attrs:{id:"less"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#less"}},[t._v("#")]),t._v(" less")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("Object")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("{}")])])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/webpack-contrib/less-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("less-loader"),s("OutboundLink")],1),t._v(" 的选项。")]),t._v(" "),s("h3",{attrs:{id:"configurewebpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configurewebpack"}},[t._v("#")]),t._v(" configureWebpack")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("Object | Function")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("undefined")])])]),t._v(" "),s("p",[t._v("用于修改内部的 Webpack 配置。如果给定一个对象，那么它将会被 "),s("a",{attrs:{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-merge"),s("OutboundLink")],1),t._v(" 合并到最终的配置中，如果给定一个函数，它将会接受 "),s("code",[t._v("config")]),t._v(" 作为第一个参数，以及 "),s("code",[t._v("isServer")]),t._v(" 作为第二个参数，你可以直接更改 "),s("code",[t._v("config")]),t._v("，也可以返回一个待合并的对象。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("configureWebpack")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("isServer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改客户端的 webpack 配置")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"chainwebpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chainwebpack"}},[t._v("#")]),t._v(" chainWebpack")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("Function")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("undefined")])])]),t._v(" "),s("p",[t._v("通过 "),s("a",{attrs:{href:"https://github.com/mozilla-neutrino/webpack-chain",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-chain"),s("OutboundLink")],1),t._v(" 来修改内部的 Webpack 配置。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpack")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config 是 ChainableConfig 的一个实例")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"浏览器兼容性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器兼容性"}},[t._v("#")]),t._v(" 浏览器兼容性")]),t._v(" "),s("h3",{attrs:{id:"evergreen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#evergreen"}},[t._v("#")]),t._v(" evergreen")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("boolean | Function")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("false")])])]),t._v(" "),s("p",[t._v("如果你的对象只有那些 “常青树” 浏览器，你可以将其设置成 "),s("code",[t._v("true")]),t._v("，这将会禁止 ESNext 到 ES5 的转译以及对 IE 的 polyfills，同时会带来更快的构建速度和更小的文件体积。")])])}),[],!1,null,null,null);a.default=r.exports}}]);