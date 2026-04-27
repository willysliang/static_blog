import{_ as e,r as i,o as l,c as t,b as n,e as p,a as c,d as s}from"./app-Bf_tkh-q.js";const o="/blog/assets/image-20220919081506434-BzdkD_V0.png",u="/blog/assets/image-20260226151656556-CdGSE1Y_.png",d="/blog/assets/image-20221212173515655-D-BlvElN.png",r={},v=s(`<h2 id="构建工具" tabindex="-1"><a class="header-anchor" href="#构建工具"><span>构建工具</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>JS 构建工具改变了构建在 WEB 上运行项目的方式，帮助开发人员高效地构建，并简化开发过程<span class="token punctuation">(</span>可能会让配置复杂化<span class="token punctuation">)</span>。
构建工具包括不限于 Task Runner（任务运行器）、Transpiler、模块打包器、Linter、包管理器和开发服务器。

- Vite：基于 ESM
- Webpack：JS 应用程序的静态模块打包器，主要目的是捆绑 JS 文件可在浏览器中使用，但它也能转换、捆绑或打包几乎任何资源。
- Parcel：Web 应用程序捆绑器，利用多核处理提供了极快的性能，并且需要零配置。
- Rollup：JS 模块打包器，将小段代码编译，如库或应用程序。
- Gulp：自动化和增加工作流程的工具包。
- Grunt：基于任务的 JS 工程命令行构建工具。



<span class="token comment">#### 为什么需要打包工具？</span>
开发时，我们会使用框架（React、Vue）、ES6模块化语法、Less/Sass 等 CSS 预处理语言等语法进行开发，这样的代码要想在浏览器运行必须经过编译成浏览器能识别的 JS、CSS 语法才能运行。
打包工具能够对上述的高级语法编译成浏览器能识别的语法，而且打包还能压缩代码、做兼容性处理、提升代码性能等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack"><span>Webpack</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### Entry 和 Output</span>
webpack的解析入口，项目的打包出口所在


<span class="token comment">### webpack打包：</span>
<span class="token variable"><span class="token variable">\`</span>webpack 被解析的文件路径 <span class="token parameter variable">-o</span> 存放打包文件所在的目录<span class="token variable">\`</span></span>
webpack .<span class="token punctuation">\\</span>src<span class="token punctuation">\\</span>main.js .<span class="token punctuation">\\</span>dist<span class="token punctuation">\\</span>bundle.js	 <span class="token comment">#把main.js文件打包生成bundle.js文件</span>



<span class="token comment">### 编译 TypeScript 流程</span>
<span class="token number">1</span>. 安装 typescript 和 ts-loader：npm i typescript ts-loader --save-dev
<span class="token number">2</span>. 在 webpack.config.js 配置文件中中写入 ts-loader 编译规则
<span class="token number">3</span>. 编写 tsconfig.json：类似于 .babelrc、ts-loader 的额外配置


<span class="token comment">### 观察应用变化 --watch</span>
- <span class="token variable"><span class="token variable">\`</span>$ <span class="token function">npm</span> webpack <span class="token parameter variable">--watch</span><span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h3><h4 id="对-webpack-的理解" tabindex="-1"><a class="header-anchor" href="#对-webpack-的理解"><span>对 Webpack 的理解</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>- Webpack 是一种用于编译 JavaScript 模块的工具，又称模块捆绑器（js应用的静态模块化打包工具）。具有打包压缩、编译兼容、能力扩展等功能。其最初的目标是实现前端项目的模块化，更高效地管理和维护项目中的每一个资源。
- 它会在内部从一个或多个入口点构建一个依赖图，然后将项目中所需的每一个模块组合成一个或多个 bundles 进行输出（均为静态资源）。输出的文件已经编译好了，可以在浏览器运行。



<span class="token comment">### Webpack 作用</span>
- 捆绑资源。
- 将 ES6+ 语法转译为 ES5代码。
- 将 ts 转成 ES5 代码，将 CoffeeScript 转换为 js，将 scss/less 转成 css等。
- 将 .jsx、.vue 文件转成 js 文件等。
- 可将内联图像转换为 Data URL。
- 允许对 CSS 文件使用 require<span class="token punctuation">(</span><span class="token punctuation">)</span>。
- 可以运行开发 Web 服务器。
- 可以处理热模块替换，监视更改并重新运行任务。
- 可以将输出文件拆分为多个文件，以避免在第一个页面命中时加载巨大的 js 文件。
- 可以执行 Tree Shaking。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="webpack-解析流程" tabindex="-1"><a class="header-anchor" href="#webpack-解析流程"><span>Webpack 解析流程</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：
    <span class="token number">1</span>. 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数。
    <span class="token number">2</span>. 开始编译：用上一步得到的参数初始化 Compilier 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译。
    <span class="token number">3</span>. 确定入口：根据配置中的 entry 找出所有的入口文件。
    <span class="token number">4</span>. 编译模块：从入口文件出发，调出所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
    <span class="token number">5</span>. 完成模块编译：在经过第 <span class="token number">4</span> 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。
    <span class="token number">6</span>. 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会。
    <span class="token number">7</span>. 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件，把文件内容写入到文件系统。
在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。



<span class="token comment">### webpack 解析流程（简化版）</span>
<span class="token number">1</span>. 初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler
<span class="token number">2</span>. 编译：从 Entry 出发，针对每个 Module 串行调用对应的 Loader 去翻译文件的内容，再找到该 Module 依赖的 Module，递归地进行编译处理
<span class="token number">3</span>. 输出：将编译后的 Module 组合成 Chunk，将 Chunk 转换成文件，输出到文件系统中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="npm-run-dev-时-webpack-做了什么事情" tabindex="-1"><a class="header-anchor" href="#npm-run-dev-时-webpack-做了什么事情"><span>npm run dev 时 webpack 做了什么事情？</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. 先通过 package.json 中的 scripts.dev 字段配置的文件<span class="token punctuation">(</span>webpack.config.js<span class="token punctuation">)</span>进行执行
<span class="token number">2</span>. 检查 <span class="token function">node</span> 和 <span class="token function">npm</span> 的版本、引入相关插件和配置
<span class="token number">3</span>. webpack 对源码进行编译打包并返回 compiler 对象
<span class="token number">4</span>. 创建 express 服务器
<span class="token number">5</span>. 配置 开发中间件<span class="token punctuation">(</span>webpack-dev-middleware<span class="token punctuation">)</span> 和 热重载中间件<span class="token punctuation">(</span>webpack-hot-middleware<span class="token punctuation">)</span>
<span class="token number">6</span>. 挂载代理服务和中间件
<span class="token number">7</span>. 配置静态资源
<span class="token number">8</span>. 启动服务器并监听特定端口<span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span> —— 创建的express服务器进行监听
<span class="token number">9</span>. 自动打开浏览器并打开特定网址<span class="token punctuation">(</span>localhost:8080<span class="token punctuation">)</span> —— express通过 <span class="token function">open</span> 方法进行打开
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="scss-文件在-webpack-中的编译打包过程是怎么样的" tabindex="-1"><a class="header-anchor" href="#scss-文件在-webpack-中的编译打包过程是怎么样的"><span>scss 文件在 webpack 中的编译打包过程是怎么样的？</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. 加载 scss：sass-loader 在 js 文件中根据模块化规则找到 scss 文件。
<span class="token number">2</span>. 编译 scss：sass 编译器将 scss 编译为 css。
<span class="token number">3</span>. css-loader 解析：根据 css-loader 对 css 文件进行加载并解析其中的 <span class="token variable"><span class="token variable">\`</span>@import<span class="token variable">\`</span></span> 和 <span class="token variable"><span class="token variable">\`</span>url<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>。
<span class="token number">4</span>. style-loader 工作：将 css 样式插入到 html 文件中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解析器-loader" tabindex="-1"><a class="header-anchor" href="#解析器-loader"><span>解析器 loader</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>webpack 本身只能理解 JavaScript 和 JSON 文件，但实际开发中会用到 CSS、图片、Vue 单文件组件、TS/JSX 等各种格式的文件，loader 的核心就是：
	- 转换（核心）：把非 JS 文件转换成 webpack 能处理的模块（最终都会转为 JS 模块）；
	- 链式处理：多个 loader 可以按顺序链式执行（从右到左 / 从下到上），比如先把 Less 编译成 CSS，再把 CSS 转换成 JS 模块；
	- 模块化：让转换后的文件能被import/require引入，融入 webpack 的模块体系


<span class="token comment">### 常用的 loader</span>
- css-loader、style-loader等css处理loader
- url-loader、image-loader等图片字体文件等资源处理loader
- less-loader、sass-loader、babel-loader等编译loader

<span class="token number">1</span>. babel-preset
  <span class="token variable"><span class="token variable">\`</span><span class="token function">npm</span> i babel-loader @bable/core @babel/preset-env --save-dev<span class="token variable">\`</span></span>
  - Babel-preset 是存储 JavaScript 不同标准的插件，通过使用正确的 presets 告诉 babel 按照哪个规范编译
      - Target 是 preset的核心配置，告诉 preset 编译的具体目标
      - Target 可以以 browsers<span class="token punctuation">(</span>通常情况下会用<span class="token punctuation">)</span>、node的版本、特定的浏览器为目标

<span class="token number">2</span>. ES6 方法的编译
  <span class="token variable"><span class="token variable">\`</span><span class="token function">npm</span> i babel-polyfill --save-dev<span class="token variable">\`</span></span>
  <span class="token variable"><span class="token variable">\`</span><span class="token function">npm</span> i babel-plugin-transform-runtime babel-runtime --save-dev<span class="token variable">\`</span></span>
	- babel-polyfill 会生成一个全局对象
	- babel-transform-runtime 会生成一个局部对象

<span class="token number">3</span>. 引入解析 css 文件
- <span class="token variable"><span class="token variable">\`</span><span class="token function">npm</span> i style-loader css-loader <span class="token parameter variable">--save</span><span class="token variable">\`</span></span>
- css-loader：让 css 可以被 js 正确的引入
- style-loader：让 css 被引入后可以被正确的以一个 style 标签插入页面
- 注意：两者顺序很重要，要先引入 css-loader 处理，再由 style-loader 处理

	style-loader 核心配置
      - insertAt：style 标签插入在哪一块区域
      - insertInto：插入指定的dom
      - singleton：是否合并为一个 style 标签
      - transform：在浏览器环境下，插入 style 到页面前，用 js 对 css 进行操作
	css-loader 核心配置
      - minimize：是否压缩 css
      - module：是否使用 css 模块化
      - alias：css 中的全局别名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插件-plugin" tabindex="-1"><a class="header-anchor" href="#插件-plugin"><span>插件 plugin</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>- webpack中的 plugin 是对webpack现有功能扩展，如打包优化，文件压缩。


<span class="token comment">### 常用插件</span>
- 优化文件体积的插件：commonsChunkPlugin、uglifyjsWebpackPlugin、PurifyCSS等
- 额外功能的插件：HtmlWebpackPlugin、HotModuleReplacementPlugin等

- HtmlWebPlugin插件作用：
    - 自动生成一个index.html文件（可指定模块生成）
    - 将打包的js文件，自动通过script标签插入到body中

- UglifyJsPlugin插件作用：
		- 丑化js代码，在打包js代码时，会把注释等删掉
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="loader-与-plugin-的区别" tabindex="-1"><a class="header-anchor" href="#loader-与-plugin-的区别"><span>Loader 与 Plugin 的区别？</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>- loader主要用于转换某些类型的模块，是转换器
- plugin是插件，是扩展器


<span class="token number">1</span>. 性质上的区别：
- <span class="token string">&#39;Loader&#39;</span> 本质是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。因为 Webpack 只认识 JS，所以 Loader 需要对其他类型的资源进行转译的预处理工作。

- <span class="token string">&#39;Plugin&#39;</span> 插件，基于事件流框架 <span class="token string">&#39;Tapable&#39;</span>，插件可扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。


<span class="token number">2</span>. 配置上的区别：
    - Loader 在 <span class="token variable"><span class="token variable">\`</span>module.rules<span class="token variable">\`</span></span> 中配置，作为模块的解析规则，类型为数组，每一项都是一个 Object，内部包含了 test（类型文件）、loader、options（参数） 等属性。
    - Plugin 在 <span class="token variable"><span class="token variable">\`</span>module.plugins<span class="token variable">\`</span></span> 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="本地服务器-webpack-dev-server" tabindex="-1"><a class="header-anchor" href="#本地服务器-webpack-dev-server"><span>本地服务器 webpack-dev-server</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Webpack-dev-server 提供的常用额外功能</span>
  - 路径重定向
  - 接口代理
  - 浏览器中显示编译问题
  - 热更新


<span class="token comment">## 属性说明</span>
- 本地服务器基于nodejs搭建，内部使用express框架，实现我们想要让浏览器刷新显示我们修改后的结果
- deserver属性选项
  - contentBase：为哪一个文件夹提供本地服务，默认为根文件夹，一般写./dist
  - port：代理端口号,默认8080端口
  - proxy：代理请求
  - inline：服务的开启模式，可使得页面实时刷新
  - historyApiFallback：路径重定向，在SPA页面中依赖HTML5的history模式
  - open：是否打开浏览器
  - hot：热更新
  - lazy：懒编译
  - overlay：错误遮罩
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包-output" tabindex="-1"><a class="header-anchor" href="#打包-output"><span>打包 output</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## webpack 打包</span>
- Webpack 的打包过程就是利用 Node 去读取文件，然后进行一些字符串处理后，再利用 Node 去写入文件


<span class="token comment">### Webpack 打包流程</span>
<span class="token number">1</span>. 读取配置文件
<span class="token number">2</span>. 注册内部插件与配置插件
<span class="token number">3</span>. loader 编译
<span class="token number">4</span>. 组织模块
<span class="token number">5</span>. 生成最终文件导出


<span class="token comment">### 打包结果分析</span>
<span class="token punctuation">(</span>function<span class="token punctuation">(</span>modules<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">function</span> __webpack_require__<span class="token punctuation">(</span>moduleId<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token builtin class-name">return</span> __webpack.require<span class="token punctuation">(</span>
		__webpack_require__.s <span class="token operator">=</span> <span class="token string">&#39;./app.js&#39;</span>
	<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token string">&quot;./app.js&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">(</span><span class="token function-name function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>,
	<span class="token string">&quot;module1.js&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">(</span><span class="token function-name function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>,
	<span class="token string">&quot;module2.js&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">(</span><span class="token function-name function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>,
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="loader编译" tabindex="-1"><a class="header-anchor" href="#loader编译"><span>loader编译</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>- Loader 是一个方法，接收一个字符串，方法内部处理完后再返回字符串

module.exports <span class="token operator">=</span> function<span class="token punctuation">(</span>source<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token builtin class-name">return</span> <span class="token builtin class-name">source</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/* webpack.config.js */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/main.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
     <span class="token punctuation">{</span>
       <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">&#39;/\\.willy$/&#39;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;./willy-loader&#39;</span> <span class="token comment">// 自定义 loader 文件</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/* willy-loader/index.js */</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resource</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> resource<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;log&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;console.log&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// this.callback(err, result, sourcemap) // callback可以使用捕获错误并返回</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-willy line-numbers-mode" data-ext="willy" data-title="willy"><pre class="language-willy"><code>/* src/test.willy  注意：需要在 main.js 入口文件中引入 */
log(&#39;console log willy&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="webpack打包速度优化" tabindex="-1"><a class="header-anchor" href="#webpack打包速度优化"><span>webpack打包速度优化</span></a></h4><blockquote><ol><li><p>使用<code>webpack-bundle-analyzer</code>对项目进行模块分析生成report，查看report后看看哪些模块体积过大，然后针对性优化，比如我项目中引用了常用的UI库element-ui和v-charts等</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;element-ui&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Element&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;v-charts&#39;</span><span class="token operator">:</span> <span class="token string">&#39;VCharts&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置webpack的externals ，防止将某些import的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖。 所以，可以将体积大的库分离出来：</p></li><li><p>然后在main.js中移除相关库的import</p></li><li><p>在index.html模板文件中，添加相关库的xcdn引用(如<code>&lt;script src=&quot;https://unpkg.com/element-ui@2.10.0/lib/index.js&quot;&gt;&lt;/script&gt;</code>)</p></li></ol></blockquote><h3 id="调试" tabindex="-1"><a class="header-anchor" href="#调试"><span>调试</span></a></h3><h4 id="source-map" tabindex="-1"><a class="header-anchor" href="#source-map"><span>source-map</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>sourceMap是一项将编译、打包、压缩后的代码映射回源代码的技术，由于打包压缩后的代码并没有阅读性可言，一旦在开发中报错或者遇到问题，直接在混淆代码中 debug 会带来非常糟糕的体验， sourceMap 可以帮助快速定位到源代码位置，提高开发效率。

sourceMap 是一种源码的映射，所以会有一份映射的文件来标记混淆代码里对应的源码的位置，通常这份映射文件以 <span class="token string">&#39;.map&#39;</span> 结尾。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+`" alt="image-20220919081506434"></p><p><code>.map</code> 文件的数据结构大致如下：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;version&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>                          <span class="token comment">// Source Map版本</span>
  <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;out.js&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// 输出文件（可选）</span>
  <span class="token property">&quot;sourceRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// 源文件根目录（可选）</span>
  <span class="token property">&quot;sources&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;foo.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar.js&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>        <span class="token comment">// 源文件列表</span>
  <span class="token property">&quot;sourcesContent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token null keyword">null</span><span class="token punctuation">,</span> <span class="token null keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">,</span>         <span class="token comment">// 源内容列表（可选，和源文件列表顺序一致）</span>
  <span class="token property">&quot;names&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;maps&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;are&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;fun&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// mappings使用的符号名称列表</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token string">&quot;A,AAAB;;ABCDE;&quot;</span>            <span class="token comment">// 带有编码映射数据的字符串</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有了这份映射文件，我们只需要在压缩代码的最末端加上这句注释，即可让 sourceMap 生效：</p><div class="language-ruby line-numbers-mode" data-ext="rb" data-title="rb"><pre class="language-ruby"><code><span class="token operator">/</span><span class="token operator">/</span><span class="token comment"># sourceURL=/path/to/file.js.map</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有了这段注释后，浏览器就会通过<code>sourceURL</code>去获取这份映射文件，通过解释器解析后，实现源码和混淆代码之间的映射。因此 sourceMap 也需要浏览器支持。</p><h4 id="dev-server" tabindex="-1"><a class="header-anchor" href="#dev-server"><span>dev-server</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>- Dev-server 利用 express 和一个中间件 webpack-dev-middleware 来开启服务，然后开启的 server 会执行打包出来的代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/* dev.js */</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpackDevMid <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-dev-middleware&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpackHotMid <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-hot-middleware&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.config.js&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> compiler <span class="token operator">=</span> <span class="token function">webpack</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 开启自定义配置的本地服务器</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">webpackDevMid</span><span class="token punctuation">(</span>compiler<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 开启热更新（需要遍历入口文件，开启更改）</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>entry<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  config<span class="token punctuation">.</span>entry<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;webpack-hot-middle/client?noInfo=true&amp;reload=true&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>entry<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">webpackHotMid</span><span class="token punctuation">(</span>compiler<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">overlayStyles</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">2007</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="优化" tabindex="-1"><a class="header-anchor" href="#优化"><span>优化</span></a></h3><h4 id="减少构建时间" tabindex="-1"><a class="header-anchor" href="#减少构建时间"><span>减少构建时间</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>- Webpack 构建项目的速度很大程度上取决于项目的复杂度和电脑配置。确保项目在有足够的磁盘空间和良好的处理器情况下运行。
- webpack 的 <span class="token punctuation">[</span>Build Performance<span class="token punctuation">]</span><span class="token punctuation">(</span>https://webpack.docschina.org/guides/build-performance/<span class="token punctuation">)</span> 章节提供了一些提高构建/编译性能的方法。


<span class="token comment">### 1. 保持最新的 Webpack、Node 和包管理器</span>
使用最新的 webpack 版本（新优化），并且与 Node 版本同步，重点是 <span class="token variable"><span class="token variable">\`</span>npm/yarn/pnpm<span class="token variable">\`</span></span> 包管理器，较新的版本创建更高效的模块树并提高解析速度。


<span class="token comment">### 2. 优化 Loader 的文件搜索范围</span>
通过使用 <span class="token variable"><span class="token variable">\`</span>include<span class="token variable">\`</span></span> 和 <span class="token variable"><span class="token variable">\`</span>exclude<span class="token variable">\`</span></span> 字段，仅将 loader 应用在实际需要将其转换的模块。
另外，将 Babel 编译过的文件缓存起来，下次只需要编译更改过的文件即可，这样可以大幅度加快打包时间。
    module.exports <span class="token operator">=</span> <span class="token punctuation">{</span>
      module: <span class="token punctuation">{</span>
        rules: <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            test: /<span class="token punctuation">\\</span>.js$/,
            loader: <span class="token string">&#39;babel-loader?cacheDirectory=true&#39;</span>,
            include: path.resolve<span class="token punctuation">(</span>__dirname, <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>,
            exclude: /node_modules/
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>



<span class="token comment">### 3.  别名 resolve.alias</span>
    const path <span class="token operator">=</span> require<span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
    const resolve <span class="token operator">=</span> <span class="token punctuation">(</span>dir<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> path.join<span class="token punctuation">(</span>__dirname, <span class="token function">dir</span><span class="token punctuation">)</span>
    module.exports <span class="token operator">=</span> <span class="token punctuation">{</span>
      resolve: <span class="token punctuation">{</span>
        alias: <span class="token punctuation">{</span> <span class="token string">&#39;@&#39;</span><span class="token builtin class-name">:</span> resolve<span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>



<span class="token comment">### 4. 解析</span>
减少以下方法条目数量，因为他们会增加文件系统调用的次数<span class="token punctuation">(</span>层级不要过深<span class="token punctuation">)</span>
- <span class="token variable"><span class="token variable">\`</span>resolve.modules<span class="token variable">\`</span></span> 告诉 webpack 解析模块时应该搜索的目录。
- <span class="token variable"><span class="token variable">\`</span>resolve.extensions<span class="token variable">\`</span></span> 尝试按顺序解析这些后缀名。如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。
- <span class="token variable"><span class="token variable">\`</span>resolve.mainFiles<span class="token variable">\`</span></span> 解析目录时要使用的文件名。
- <span class="token variable"><span class="token variable">\`</span>resolve.descriptionFiles<span class="token variable">\`</span></span> 用于描述的 JSON 文件。
- 如果不使用 symlinks（例如 <span class="token variable"><span class="token variable">\`</span><span class="token function">npm</span> <span class="token function">link</span><span class="token variable">\`</span></span> 或 <span class="token variable"><span class="token variable">\`</span><span class="token function">yarn</span> <span class="token function">link</span><span class="token variable">\`</span></span>），可以设置：
		<span class="token variable"><span class="token variable">\`</span>resolve: <span class="token punctuation">{</span> symlinks: <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token variable">\`</span></span>
- 如果你使用自定义 resolve plugin 规则，并且没有指定 context 上下文，可以设置：
		<span class="token variable"><span class="token variable">\`</span>resolve: <span class="token punctuation">{</span> cacheWithContext: <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token variable">\`</span></span>


<span class="token comment">### 5. 减少项目体积</span>
减少编译结果的整体大小，以提高构建性能。尽量保持 chunk 体积小
- 使用数量更少/体积更小的 library（例如：<span class="token variable"><span class="token variable">\`</span>moment -<span class="token operator">&gt;</span> day.js<span class="token variable">\`</span></span>、<span class="token variable"><span class="token variable">\`</span>lodash -<span class="token operator">&gt;</span> lodash/es<span class="token variable">\`</span></span>）。
- 在多页面应用程序中使用 SplitChunksPlugin，并开启 <span class="token variable"><span class="token variable">\`</span>async<span class="token variable">\`</span></span> 模式。
- 移除未引用代码 — 涉及到了 Tree Shaking。
- 只编译你当前正在开发的那些代码（缓存）。



<span class="token comment">## 6. 最小化 entry chunk</span>
确保在生成 entry chunk 时，尽量减少其体积以提高性能。将 <span class="token variable"><span class="token variable">\`</span>optimization.runtimeChunk<span class="token variable">\`</span></span> 设置为 <span class="token variable"><span class="token variable">\`</span><span class="token boolean">true</span><span class="token variable">\`</span></span> 或 <span class="token variable"><span class="token variable">\`</span>&#39;multiple&#39;<span class="token variable">\`</span></span>，会为每个入口添加一个只含有 runtime 的额外 chunk。所以它的生成代价较低。
    module.exports <span class="token operator">=</span> <span class="token punctuation">{</span>
      // <span class="token punctuation">..</span>.
      optimization: <span class="token punctuation">{</span>
        runtimeChunk: <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>



<span class="token comment">## 7. 解析构建资源</span>
webpack 提供了 <span class="token variable"><span class="token variable">\`</span>thread-loader<span class="token variable">\`</span></span> 允许我们可以将耗时的 loader 放置在独立的线程下运行<span class="token punctuation">(</span><span class="token variable"><span class="token variable">\`</span>happypack<span class="token variable">\`</span></span> 插件已经未维护好几年，使用 <span class="token variable"><span class="token variable">\`</span>thread-loader<span class="token variable">\`</span></span> 替换<span class="token punctuation">)</span>。
    module.exports <span class="token operator">=</span> <span class="token punctuation">{</span>
      module: <span class="token punctuation">{</span>
        rules: <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            test: /<span class="token punctuation">\\</span>.js$/,
            include: path.resolve<span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>,
            use: <span class="token punctuation">[</span>
              <span class="token string">&#39;thread-loader&#39;</span>, // 注意，这里需要放置在第一位
              // 后面放置耗时的 loader （例如 babel-loader）
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="从bundle中排除某个导入" tabindex="-1"><a class="header-anchor" href="#从bundle中排除某个导入"><span>从bundle中排除某个导入</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 从bundle中排除某个导入: externals</span>
Webpack externals 告诉 Webpack 从 bundle 中排除某个导入。<span class="token variable"><span class="token variable">\`</span>external<span class="token variable">\`</span></span> 通常用于排除将通过 CDN 加载的导入。

如 <span class="token variable"><span class="token variable">\`</span>webpack.config.js<span class="token variable">\`</span></span> 将 <span class="token variable"><span class="token variable">\`</span>vue<span class="token variable">\`</span></span> 添加为 <span class="token variable"><span class="token variable">\`</span>externals<span class="token variable">\`</span></span>，这意味着 Webpack 不会捆绑 Vue。相反，当 <span class="token variable"><span class="token variable">\`</span>component.js<span class="token variable">\`</span></span> 调用 <span class="token variable"><span class="token variable">\`</span>require<span class="token punctuation">(</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 时，Webpack 将返回 <span class="token variable"><span class="token variable">\`</span>global.Vue<span class="token variable">\`</span></span>。

<span class="token variable"><span class="token variable">\`</span>externals<span class="token variable">\`</span></span> 的另一个用例是需要在 Node.js 中使用 polyfill 的浏览器 API，比如 <span class="token variable"><span class="token variable">\`</span>FormData<span class="token variable">\`</span></span>。而 <span class="token variable"><span class="token variable">\`</span>FormData<span class="token variable">\`</span></span> 又是一个浏览器 API，所以在编译上述代码时不需要捆绑。因此，您可以将 <span class="token variable"><span class="token variable">\`</span>form-data<span class="token variable">\`</span></span> 添加到 <span class="token variable"><span class="token variable">\`</span>externals<span class="token variable">\`</span></span>：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/component.js</span><span class="token template-punctuation string">\`</span></span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/dist</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
       <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].min.js&#39;</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;web&#39;</span><span class="token punctuation">,</span>
     <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token comment">// 去掉 require(&#39;vue&#39;)，返回 global.Vue</span>
       <span class="token literal-property property">vue</span><span class="token operator">:</span> <span class="token string">&#39;Vue&#39;</span><span class="token punctuation">,</span>
       <span class="token comment">// 去掉 require(&#39;form-data&#39;)，返回 global.FormData</span>
       <span class="token string-property property">&#39;form-data&#39;</span><span class="token operator">:</span> <span class="token string">&#39;FormData&#39;</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="vite" tabindex="-1"><a class="header-anchor" href="#vite"><span>Vite</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>在浏览器支持 ES 模块之前，JavaScript 并没有提供原生机制让开发者以模块化的方式进行开发。
打包的概念：使用工具抓取、处理并将源码模块串联成可以在浏览器中运行的文件，如webpack、Rollup 和 Parcel 等工具。
由于浏览器原生开始支持 ES 模块，Vite 利用 ES 模块化来解决 Webpack 构建速度慢，HMR<span class="token punctuation">(</span>热更新<span class="token punctuation">)</span>迟钝等问题。



<span class="token comment">#### 如何指定 vite 插件 的执行顺序？</span>
可以使用 enforce 修饰符来强制插件的位置:
	- pre：在 Vite 核心插件之前调用该插件
	- 默认：在 Vite 核心插件之后调用该插件
	- post：在 Vite 构建插件之后调用该插件


<span class="token comment">#### vite 插件 常见的 hook</span>
Vite 会在生命周期的不同阶段中去调用不同的插件以达到不同的目的.
	- config： 可用于修改 vite config，用户可以通过这个 hook 修改 config；例如 vite-aliases 这个插件可以帮助我们自动生成别名。它利用的就是这个钩子。
	- configResolved： 在解析 Vite 配置后调用，用于获取解析完毕的 config，在这个 hook 中不建议修改 config。
	- configureServer： 用于给 dev server 添加自定义 middleware；例如 vite-plugin-mock 插件就是在这个生命周期调用的
	- configurePreviewServer：与 configureServer 相同但是作为预览服务器。vite preview插件就是利用这个钩子。
	- transformIndexHtml：注入变量，用来转换 HTML 的内容。vite-plugin-html 插件就是利用这个钩子在html里注入变量。
	- handleHotUpdate：执行自定义 HMR 更新处理


<span class="token comment">#### Vite实现支持 commonjs 写法</span>
纯业务代码，一般建议采用 ESM 写法。如果引入的三方组件或三方库采用 CJS 写法，vite 在预构建时会将 CJS 模块转化为 ESM 模块。
如果非要在业务代码中采用 CJS 模块，可以自定义一个 vite 插件，定义 load hook，在 hook 内部识别是 CJS 模块还是 ESM 模块。如果是 CJS 模块，利用 esbuild 的 transfrom 功能，将 CJS 模块转化为 ESM 模块。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="webpack-和-vite-的区别" tabindex="-1"><a class="header-anchor" href="#webpack-和-vite-的区别"><span>webpack 和 vite 的区别</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>优点：
  <span class="token number">1</span>. 更快的冷启动：Vite 借助了浏览器对 ESM 规范的支持，采取了与 Webpack 完全不同的 unbundle 机制
  <span class="token number">2</span>. 更快的热更新：Vite 采用 unbundle 机制，所以 dev-server 在监听到文件发生变化后，只需要通过 ws 连接通知浏览器去重新加载变化的文件，剩下的工作就交给浏览器去做了。


缺点：
  <span class="token number">1</span>. 开发环境下首屏加载变慢：由于 unbundle 机制，Vite 首屏期间需要额外做其它工作。不过首屏性能差只发生在 dev-server 启动以后第一次加载页面时发生。之后再 reload 页面时，首屏性能会好很多。原因是 dev-server 通过 HTTP 的协商缓存来将之前已经完成转换的内容缓存起来
  <span class="token number">2</span>. 开发环境下懒加载变慢：跟首屏加载变慢的原因一样。Vite 在懒加载方面的性能也比 Webpack 差。由于 unbundle 机制，动态加载的文件，需要做 resolve、load、transform、parse 操作，并且还有大量的 http 请求，导致懒加载性能也受到影响。
  <span class="token number">3</span>. webpack支持更广：由于 Vite 基于 ES Module，所以代码中不可以使用CommonJs；webpack更关注兼容性，而 Vite 关注浏览器端的开发体验。


Vite 大量使用 Go语言编写的 esbuild 处理依赖预构建、源码编译，而 Webpack 主要用 JS 编写的 loader/plugin（如babel-loader）
	- esbuild 编译速度是 babel 的 <span class="token number">20</span>~30倍，


注意：
	- 当需要打包到生产环境时，Vite使用传统的rollup进行打包，所以，vite的优势是体现在开发阶段，缺点也只是在开发阶段存在。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="开发模式下-vite-比-webpack-的冷启动、热启动、热更新都会快的原因" tabindex="-1"><a class="header-anchor" href="#开发模式下-vite-比-webpack-的冷启动、热启动、热更新都会快的原因"><span>开发模式下，vite 比 webpack 的冷启动、热启动、热更新都会快的原因</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. 核心理念：Webpack 是 <span class="token string">&#39;全量打包后启动&#39;</span>，Vite 是 <span class="token string">&#39;按需编译 + 原生ESM&#39;</span>，从根源避免冷启动的全量打包耗时；
<span class="token number">2</span>. 依赖处理：Vite 用 esbuild 预构建依赖<span class="token punctuation">(</span>快且缓存<span class="token punctuation">)</span>，Webpack 启动时全量处理依赖<span class="token punctuation">(</span>慢且无缓存复用<span class="token punctuation">)</span>；
<span class="token number">3</span>. 热更新逻辑：Vite 仅编译修改的单个文件，Webpack 可能触发连锁编译，且 Vite 基于浏览器原生 ESM 无需重新你打包；
<span class="token number">4</span>. 底层差异：Vite 用 Go 编写的 esbuild 替代 JS 编写的 loader，编译速度提升一个量级。
<span class="token number">5</span>. 充分利用缓存；Vite 利用 HTTP 头来加速整个页面的重新加载：源码模块的请求会根据 <span class="token number">304</span> Not Modified 进行协商缓存，而依赖模块请求则会通过 Cache-Control: max-age<span class="token operator">=</span><span class="token number">31536000</span>,immutable 进行强缓存，因此一旦被缓存它们将不需要再次请求。


一、冷启动（首次启动开发服务器）：耗时主要在 <span class="token string">&#39;处理依赖&#39;</span> 和 <span class="token string">&#39;编译源码&#39;</span>
	Webpack的冷启动流程：
			<span class="token number">1</span>. 解析 entry 入口文件，递归分析所有依赖（如 React/Vue、业务源码）；
			<span class="token number">2</span>. 对所有依赖执行 loader 转换（如 babel 转译 JS、css-loader 处理样式）；
			<span class="token number">3</span>. 把所有处理后的代码打包成 bundle<span class="token punctuation">(</span>代码块<span class="token punctuation">)</span>；
			<span class="token number">4</span>. 启动挨罚服务器，等待浏览器请求；
			<span class="token number">5</span>. 浏览器请求时，直接返回打包好的 bundle。
			➡ 问题：全量打包整个项目的所有依赖和源码，项目越大，打包时间越长

	Vite的冷启动流程：
			<span class="token number">1</span>. 预构建依赖：启动时仅对三方依赖<span class="token punctuation">(</span>如React、Vue<span class="token punctuation">)</span>用esbuild做一次轻量预构建，生成优化后的 ESM 模块；
					- 三方依赖多是 CommonJS/UMD 格式，预构建成 ESM 后浏览器可直接加载；同时把多个小依赖合并成一个，减少网络请求。
					- 预构建只做一次，后续启动会跳过（除非依赖变更）
			<span class="token number">2</span>. 直接启动开发服务器（无需打包源码）；
			<span class="token number">3</span>. 浏览器请求某个页面时，才按需编译该页面的源码（如只编译当前页面的 Vue/React 组件）；
			<span class="token number">4</span>. 源码编译用 esbuild，而非 babel，且只编译当前请求的文件，而非全量。
			➡ 优势：只处理依赖（预构建极快），源码没完全打包，哪怕大型项目冷启动也很快速


二、热启动（关闭服务器后再次启动）：Vite几乎秒启
	Webpack：每次启动都重复 “分析依赖➡打包”的全流程，哪怕代码没变化，耗时和冷启动几乎一样；
	Vite：依赖的预构建结果会缓存到磁盘<span class="token punctuation">(</span>node_module/.vite<span class="token punctuation">)</span>，再次启动时直接复用缓存，只需要启动服务器<span class="token punctuation">(</span>几十毫秒<span class="token punctuation">)</span>，几乎无等待。


三、热更新（HRM，修改代码后更新）：耗时核心是 <span class="token string">&#39;重新编译的代码量&#39;</span> 和 <span class="token string">&#39;更新方式&#39;</span>
	Webpack的热更新流程：
			<span class="token number">1</span>. 检测到文件修改后，触发模块依赖图重新分析；
			<span class="token number">2</span>. 重新编译修改的文件，以及所有依赖该文件的模块（可能触发连锁编译）；
			<span class="token number">3</span>. 重新打包相关 bundle，通过 websocket 通知浏览器刷新（或热替换，但仍需重新加载模块）；
			<span class="token number">4</span>. 大型项目中，哪怕改一行代码，也可能需几秒才能看到效果。
	Vite的热更新流程：
			<span class="token number">1</span>. 检测到文件修改后，仅编译修改的单个文件<span class="token punctuation">(</span>因源码是 ESM 格式，依赖关系由浏览器原生处理，无需重新分析依赖图<span class="token punctuation">)</span>；
			<span class="token number">2</span>. 通过 websocket 通知浏览器：仅重新加载这个修改的模块（而非整个 bundle）；
			<span class="token number">3</span>. 样式文件<span class="token punctuation">(</span>css<span class="token punctuation">)</span>甚至无需刷新模块，直接注入样式，做到秒更。
	➡ 差异：Webpack是打包后更新，可能触发连锁编译；Vite是原生ESM按需更新，只编译修改的文件



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="指定-vite-插件-的执行顺序" tabindex="-1"><a class="header-anchor" href="#指定-vite-插件-的执行顺序"><span>指定 vite 插件 的执行顺序</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> pluginA <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-a&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> pluginB <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-b&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> pluginC <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-c&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// pluginA 在 Vite 核心插件之前执行</span>
    <span class="token punctuation">{</span> <span class="token operator">...</span><span class="token function">pluginA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&#39;pre&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// pluginB 在默认阶段执行</span>
    <span class="token function">pluginB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// pluginC 在 Vite 核心插件之后执行</span>
    <span class="token punctuation">{</span> <span class="token operator">...</span><span class="token function">pluginC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tree-shaking" tabindex="-1"><a class="header-anchor" href="#tree-shaking"><span>Tree Shaking</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Tree-Shaking 是一种基于 ES Module 规范的 Dead Code Elimination 技术，它会在运行过程中静态分析模块之间的导入导出，确定 ESM 模块中哪些导出值未曾其它模块使用，并将其删除，以此实现打包产物的优化。



<span class="token comment">### 在 webpack 中启动 Tree Shaking</span>
在 Webpack 中，启动 Tree Shaking 功能必须同时满足三个条件：
- 使用 ESM 规范编写模块代码
- 配置 optimization.usedExports 为 true，启动标记功能
- 启动代码优化功能，可以通过如下方式实现：
		- 配置 mode <span class="token operator">=</span> production
		- 配置 optimization.minimize <span class="token operator">=</span> <span class="token boolean">true</span>
		- 提供 optimization.minimizer 数组



<span class="token comment">### 实现原理</span>
Webpack 中，Tree-shaking 的实现一是先「标记」出模块导出值中哪些没有被用过，二是使用 Terser 删掉这些没被用到的导出语句。标记过程大致可划分为三个步骤：
	- Make 阶段，收集模块导出变量并记录到模块依赖关系图 ModuleGraph 变量中
	- Seal 阶段，遍历 ModuleGraph 标记模块导出变量有没有被使用
	- 生成产物时，若变量没有被其它模块使用则删除对应的导出语句
	- （即是标记的效果就是删除没有被其他模块使用的导出语句）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vite项目修改依赖不更新-清除依赖缓存" tabindex="-1"><a class="header-anchor" href="#vite项目修改依赖不更新-清除依赖缓存"><span>vite项目修改依赖不更新，清除依赖缓存</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### vite 报错问题展述</span>
<span class="token number">11</span>:23:46 <span class="token punctuation">[</span>vite<span class="token punctuation">]</span> error <span class="token keyword">while</span> updating dependencies:
Error: ENOENT: no such <span class="token function">file</span> or directory, <span class="token function">rename</span> <span class="token string">&#39;F:\\项目\\portfolio\\packages\\music-player\\node_modules\\.vite\\deps_temp&#39;</span> -<span class="token operator">&gt;</span> <span class="token string">&#39;F:\\项目\\portfolio\\packages\\music-player\\node_modules\\.vite\\deps&#39;</span>
<span class="token number">11</span>:23:46 <span class="token punctuation">[</span>vite<span class="token punctuation">]</span> error <span class="token keyword">while</span> updating dependencies:
Error: ENOENT: no such <span class="token function">file</span> or directory, <span class="token function">rename</span> <span class="token string">&#39;F:\\项目\\portfolio\\packages\\music-player\\node_modules\\.vite\\deps_temp&#39;</span> -<span class="token operator">&gt;</span> <span class="token string">&#39;F:\\项目\\portfolio\\packages\\music-player\\node_modules\\.vite\\deps&#39;</span> <span class="token punctuation">(</span>x2<span class="token punctuation">)</span>



<span class="token comment">### github 的 vite 问题提出</span>
https://github.com/vitejs/vite/issues/10839



<span class="token comment">### vite项目修改依赖不更新，清除依赖缓存的解决方案（个人尝试无法解决）</span>
有些时候我们会直接修改依赖文件，但修改后没有更新，大多数情况下就是被缓存了

解决方法
<span class="token number">1</span>、手动删除node_modules/.vite
		Vite 会将预构建的依赖缓存到 node_modules/.vite<span class="token punctuation">;</span>然后手动删除即可

<span class="token number">2</span>、强制vite重新构建依赖
		用 <span class="token parameter variable">--force</span> 命令行选项启动开发服务器
  “scripts”: <span class="token punctuation">{</span>
  “dev”: “vite --force”
  <span class="token punctuation">}</span>,

vite的缓存只会在以下情况发生时重新构建
    - package.json 中的 dependencies 列表
    - 包管理器的 lockfile，例如 package-lock.json, yarn.lock，或者 pnpm-lock.yaml
    - 可能在 vite.config.js 相关字段中配置过的


<span class="token comment">### 个人解决</span>
复制另一个项目中成功构建的 node_modules/.vite 文件夹过阿里
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="grunt-gulp" tabindex="-1"><a class="header-anchor" href="#grunt-gulp"><span>Grunt/Gulp</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>grunt/gulp 的核心是 Task
可以配置一系列的 task，并自定义 task 要处理的事务（如ES6，ts转化，图片压缩，scss编译成css），之后 grunt/gulp 来依次自动化执行这些开发任务。


什么时候使用 grunt/gulp？
- 工程化模块依赖简单（没用到模块化等概念）
- 只需要进行简单的合并/压缩
- 如果是整个项目使用模块化管理，则使用 webpack。


<span class="token comment">### grunt/gulp 和 webpack 的区别</span>
- grunt/gulp 更加强调流程的自动化，模块化不是它的核心。
- webpack 更加强调模块化开发管理，而文件压缩合并，预处理等功能是它附带的功能。

构建方式：
- Webpack：以模块为单位进行打包，支持各种模块化规范，能够将不同类型的文件视作模块，通过各种加载器进行处理和转换，并最终打包成静态资源文件。
- Gulp：基于流的自动化构建工具，采用代码优先原则，通过编写和组合任务来进行构建，能够实时监控文件变化并自动执行任务。
- Grunt：基于配置的自动化构建工具，通过编写和组合任务，使用配置文件来指定任务的执行顺序和参数。

配置方式：
- Webpack：通过编写配置文件（webpack.config.js）来配置打包规则、加载器和插件等。
- Gulp：通过编写任务函数和配置文件（gulpfile.js）来定义和组合任务。
- Grunt：通过编写任务函数和配置文件（Gruntfile.js）来定义和组合任务。

功能特点：
Webpack：主要用于模块打包和资源管理，支持代码拆分和按需加载，可以优化页面加载速度。
Gulp：主要用于任务执行和自动化构建，支持实时监控文件变化，并能够实现开发过程中的实时预览和调试。
Grunt：主要用于任务执行和自动化构建，支持多任务并行执行，可以同时执行多个任务提高构建效率。

如果项目需要进行模块化打包和资源管理，可以选择Webpack；如果需要灵活的任务编写和自动化构建，可以选择Gulp；如果对配置和任务编写要求较低，可以选择Grunt。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Gulp 的主要特点包括代码的简洁性、易于使用、高度可配置、强大的插件系统、流式处理等。

Gulp 与 Grunt 区别
	- Gulp 使用代码而不是配置，通常更简洁；Gulp 利用 Node.js 流进行文件处理，
	- Grunt 使用临时文件；Gulp 的插件生态系统更为活跃。

Gulp 与 Webpack 的区别是什么？
Gulp 主要用于自动化构建和任务运行，而 Webpack 是一个模块打包器，专注于应用打包和模块管理。

Gulp 任务是如何工作的？
Gulp 任务是异步的，可以定义单个任务或任务序列。任务可以依赖其他任务，并且可以实时重新运行。

如何创建自定义 Gulp 任务？
在 gulpfile.js 中，使用 gulp.task<span class="token punctuation">(</span><span class="token punctuation">)</span> 方法定义任务，可以指定任务名称、依赖任务和执行函数。

Gulp 插件是如何工作的？
Gulp 插件可以扩展 Gulp 的功能，通过 gulp.src<span class="token punctuation">(</span><span class="token punctuation">)</span> 读取文件，通过 .pipe<span class="token punctuation">(</span><span class="token punctuation">)</span> 方法传递给插件处理，最后通过 gulp.dest<span class="token punctuation">(</span><span class="token punctuation">)</span> 输出处理后的文件。

如何为 Gulp 任务添加多个插件？
可以在 .pipe<span class="token punctuation">(</span><span class="token punctuation">)</span> 方法链中连续使用多个插件，每个插件都会处理前一个插件的输出。

Gulp 如何处理错误？
Gulp 插件可以监听 error 事件并处理错误，或者使用 gulp-plumber 插件来避免错误导致的任务中断。

Gulp 支持哪些类型的插件？
Gulp 支持多种类型的插件，包括文件处理插件、文件转换插件、服务器插件等。

如何实现 Gulp 的实时预览功能？
可以使用 gulp-connect 或 browser-sync 等插件实现 Gulp 的实时预览功能。


Gulp 的 <span class="token function">watch</span> 任务是如何实现的？
使用 gulp.watch<span class="token punctuation">(</span><span class="token punctuation">)</span> 方法监听文件系统的变化，当文件变化时自动执行定义的任务。

如何优化 Gulp 的性能？
可以通过减少不必要的文件操作、使用高效的插件、并行处理任务等方式优化 Gulp 的性能。

Gulp 支持哪些源码管理工具？
Gulp 可以与 Git 等源码管理工具结合使用，通过 Gulp 插件来管理版本控制的流程。

如何为 Gulp 编写复杂的任务逻辑？
可以使用 gulp.series<span class="token punctuation">(</span><span class="token punctuation">)</span> 来按顺序执行多个任务，或者使用 gulp.parallel<span class="token punctuation">(</span><span class="token punctuation">)</span> 来并行执行任务。

Gulp 的任务队列是如何工作的？
Gulp 的任务队列会按照定义的顺序执行任务，任务完成后会调用下一个任务。

Gulp 的 gulp.src<span class="token punctuation">(</span><span class="token punctuation">)</span> 和 gulp.dest<span class="token punctuation">(</span><span class="token punctuation">)</span> 方法有什么作用？
gulp.src<span class="token punctuation">(</span><span class="token punctuation">)</span> 用于指定 Gulp 需要处理的文件路径，gulp.dest<span class="token punctuation">(</span><span class="token punctuation">)</span> 用于指定处理后的文件输出路径。

Gulp 的配置文件是如何使用的？
可以在项目中创建一个 JSON 或 JavaScript 配置文件，然后在 gulpfile.js 中引入并使用这些配置。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> grup <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gulp&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> babel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gulp-babel&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 将 src下的js文件转换成es5语法，并构建输出到dist文件中</span>
gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&#39;js&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">&#39;src/*.js&#39;</span><span class="token punctuation">)</span>
  	<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">babel</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;es2015&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  	<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="babel-原理" tabindex="-1"><a class="header-anchor" href="#babel-原理"><span>Babel 原理</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Babel 通过 AST 转换实现代码兼容，编译器阶段涵盖从源码解析到目标生成，类型检查在语义分析阶段，虚拟机提供跨平台执行能力，IR 优化和解耦前后端，交叉编译解决环境差异问题。



<span class="token comment">### Babel 的编译过程</span>
<span class="token number">1</span>. 解析（Parsing）：使用解析器将源码转换为抽象语法树（AST）
	词法分析：将源代码转换为令牌流（Tokens）
	语法分析：构建语法树（如 AST）
	语义分析：包括类型检查、作用域分析等（数据类型检查在此阶段进行）
<span class="token number">2</span>. 转换（Transformation）：通过插件对 AST 进行遍历和修改（如语法降级、代码优化）
	中间代码生成：生成与平台无关的中间表示（IR）
	优化：对 IR 进行性能优化
<span class="token number">3</span>. 生成（Generation）：将修改后的 AST 转换为目标代码，并生成 Sourcemap
	目标代码生成：生成特定平台的机器码或字节码


<span class="token comment">### 虚拟机在编译过程中的作用</span>
虚拟机（如 JVM、V8）的作用包括：
- 解释执行中间代码/字节码：解释执行或通过 JIT 编译为机器码，从而实现跨平台的代码执行。
- 提供运行时环境：虚拟机为程序提供了一个运行时环境，包括自动垃圾回收、内存分配、线程管理等功能。
- 跨平台支持：统一中间表示，屏蔽底层硬件差异。
- 运行时优化：虚拟机可以收集程序的运行时信息，例如代码的执行频率、变量的使用情况等。编译器可以利用这些信息进行优化，例如进行动态编译（Just-In-Time Compilation，JIT），将热点代码编译为机器代码，提高程序的执行效率。


<span class="token comment">### 中间代码（IR）的作用</span>
中间代码是编译器前端与后端之间的桥梁，作用包括：
- 解耦前后端：不同语言可共用同一后端（如 LLVM IR）。
- 优化便利性：在 IR 上进行多轮平台无关的优化。
- 可移植性：便于生成多种目标平台的代码。


<span class="token comment">### 交叉编译</span>
交叉编译指在一个平台上生成另一个平台的可执行代码。
例如，在 x86 电脑上编译出 ARM 架构的程序。
常见于嵌入式开发或跨平台应用构建，使得开发环境与运行环境分离。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. 解析<span class="token punctuation">(</span>Parsing<span class="token punctuation">)</span>
解析阶段目标是将源代码字符串转换为计算机可理解的抽象语法树（AST）
	<span class="token number">1</span>-1. 词法分析<span class="token punctuation">(</span>Lexical Analysis<span class="token punctuation">)</span>
			分词<span class="token punctuation">(</span>Tokenization<span class="token punctuation">)</span>：将源代码字符串（如 ES6+、TS、JSX 代码）按语法规则分解为最小的词法单元（Tokens），例如关键字、标识符、运算符等。
				如 <span class="token variable"><span class="token variable">\`</span>const <span class="token function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a, b<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> a + b<span class="token variable">\`</span></span>，会被拆分为 <span class="token variable"><span class="token variable">\`</span>const<span class="token variable">\`</span></span>, <span class="token variable"><span class="token variable">\`</span><span class="token function">sum</span><span class="token variable">\`</span></span>, <span class="token variable"><span class="token variable">\`</span><span class="token operator">=</span><span class="token variable">\`</span></span>,<span class="token variable"><span class="token variable">\`</span> <span class="token punctuation">(</span><span class="token variable">\`</span></span>, <span class="token variable"><span class="token variable">\`</span>a<span class="token variable">\`</span></span>, <span class="token variable"><span class="token variable">\`</span>,<span class="token variable">\`</span></span>, <span class="token variable"><span class="token variable">\`</span>b<span class="token variable">\`</span></span>, <span class="token variable"><span class="token variable">\`</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>, <span class="token variable"><span class="token variable">\`</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token variable">\`</span></span>, <span class="token variable"><span class="token variable">\`</span>a<span class="token variable">\`</span></span>, <span class="token variable"><span class="token variable">\`</span>+<span class="token variable">\`</span></span>, <span class="token variable"><span class="token variable">\`</span>b<span class="token variable">\`</span></span> 等 Token。
			过滤空白/注释：忽略空格、换行符、注释等非语义内容。
	<span class="token number">1</span>-2. 语法分析<span class="token punctuation">(</span>Syntactic Analysis<span class="token punctuation">)</span>
			构建AST：根据 ECMAScript 语法规则，将 Tokens 组合成树形结构的 AST（兼容 ESLint、Prettier 等工具）。
				AST 是一种以树状结构表示代码语法结构的形式，它忽略了代码中的空格、注释等无关信息，更专注于代码的语法结构。
				如上述箭头函数会被解析成如下：
            <span class="token punctuation">{</span>
              <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;VariableDeclaration&quot;</span>,
              <span class="token string">&quot;declarations&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;VariableDeclarator&quot;</span>,
                <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Identifier&quot;</span>, <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;sum&quot;</span> <span class="token punctuation">}</span>,
                <span class="token string">&quot;init&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                  <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ArrowFunctionExpression&quot;</span>,
                  <span class="token string">&quot;params&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">..</span>. <span class="token punctuation">]</span>,
                  <span class="token string">&quot;body&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token punctuation">..</span>. <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
	<span class="token number">1</span>-3 语义分析
			语法校验：对抽象语法树进行静态检查，确保代码符合语言的语义规则，例如类型检查、作用域检查等（如括号是否匹配、关键词是否正确）


<span class="token number">2</span>. 转换<span class="token punctuation">(</span>Transformation<span class="token punctuation">)</span>
转换阶段通过 插件<span class="token punctuation">(</span>Plugins<span class="token punctuation">)</span> 和 预设<span class="token punctuation">(</span>Presets<span class="token punctuation">)</span> 对 AST 进行修改，实现语法降级、代码优化等功能。
	<span class="token number">2</span>-1. 遍历AST
			访问者模式<span class="token punctuation">(</span>Visitor Pattern<span class="token punctuation">)</span>：Babel 以深度优先顺序遍历 AST，每个节点会触发对应的 entry 和 <span class="token builtin class-name">exit</span> 钩子函数。
				如处理箭头函数时：
            const visitor <span class="token operator">=</span> <span class="token punctuation">{</span>
              ArrowFunctionExpression<span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                // 在进入箭头函数节点时触发
                // path 包含当前节点及其上下文信息
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
 	<span class="token number">2</span>-2. 操作AST
 			节点修改：插件通过 <span class="token variable"><span class="token variable">\`</span>@babel/types<span class="token variable">\`</span></span>  库创建、替换或删除 AST 节点。
 				如将箭头函数转换为普通函数
 					转换前：<span class="token punctuation">(</span>a, b<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> a + b<span class="token punctuation">;</span>
 					转换后：function<span class="token punctuation">(</span>a, b<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token builtin class-name">return</span> a +b<span class="token punctuation">;</span> <span class="token punctuation">}</span>
 			作用域管理：Babel 跟踪变量作用域，避免重命名冲突。例如将 const 转换为 var 时需确保变量提升正确。
	<span class="token number">2</span>-3. 插件预设
			插件：每个插件针对一个语法特性（如 @babel/plugin-transform-arrow-function）
			预设：一组插件集合（如 @babel/preset-env 根据目标浏览器自动选择需要的插件）


<span class="token number">3</span>. 生成<span class="token punctuation">(</span>Generation<span class="token punctuation">)</span>
将修改后的 AST 转换为目标代码，并生成 Sourcemap（源码与生成代码的映射关系）
	<span class="token number">3</span>-1. 代码生成；转换后的AST。
			递归拼接字符串：根据AST节点类型生成对应的代码字符串。
			格式处理：自动添加分号、缩进、换行等格式化操作。
			工具：@babel/generator 负责此阶段
	<span class="token number">3</span>-2. Sourcemap 生成
			作用：调试时定位到原始代码（而非转换后的代码）
			原理：记录原始代码与生成代码的行列映射关系，以 .map 文件或 Base64 格式内联。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pnpm" tabindex="-1"><a class="header-anchor" href="#pnpm"><span>pnpm</span></a></h2><h3 id="pnpm-优势" tabindex="-1"><a class="header-anchor" href="#pnpm-优势"><span>pnpm 优势</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. 节省磁盘资源
   使用 <span class="token function">npm</span> 时，依赖每次被不同的项目使用，都会重复安装一次。而在使用 <span class="token function">pnpm</span> 时，依赖会被存储在内容可寻址的存储中，所以：
   如果在不同的项目中使用了同样的包：
     - 在使用npm/yarn时，这个包会被安装多次，也就是说磁盘中会多次写入这块相同的内容，占用空间。
     - 而pnpm会将所有的文件存储在磁盘上的某个位置，在包被安装时，包里的文件会通过hardlink<span class="token punctuation">(</span>硬链接<span class="token punctuation">)</span>到这个位置，也就是说，在不同的项目复用同一个包时，pnpm只会安装一次，并且多次复用。实现了跨项目对同一版本包的共享。
       对于包的不同版本，pnpm会将不同版本间有差异的文件添加至磁盘仓库中，使用pnpm update时也只会更新差异文件，极大程度上复用了之前版本的代码，不会因为部分文件的差异改变整个包的内容。
         因此，pnpm在磁盘上节省了大量空间，这与项目和依赖项的数量成正比，并且安装速度要快

<span class="token number">2</span>. 更快的安装速度
   <span class="token function">pnpm</span> 分为三个阶段来执行安装：
   <span class="token number">1</span>. 依赖解析。仓库中没有的依赖都被识别并获取到仓库。
   <span class="token number">2</span>. 目录结构计算。node_modules 目录结构时根据依赖计算出来的。
   <span class="token number">3</span>. 链接依赖项。所有以前安装过的依赖项都会直接从仓库中获取并链接到 node_modules 中。

<span class="token number">3</span>. 非扁平的 node_modules 目录
   包时从全局 store 硬连接到虚拟 store（虚拟 store 指 node_modules/.pnpm）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pnpm-跟-npm、yarn-的对比" tabindex="-1"><a class="header-anchor" href="#pnpm-跟-npm、yarn-的对比"><span>pnpm 跟 npm、yarn 的对比</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>- npm：嵌套安装<span class="token punctuation">(</span>v2<span class="token punctuation">)</span> → 扁平安装<span class="token punctuation">(</span>v3+<span class="token punctuation">)</span>，每个项目单独下载依赖，重复包多份存储
- yarn：扁平安装，全局缓存<span class="token punctuation">(</span>yarn cache<span class="token punctuation">)</span>，重复包只存一份
- pnpm：符号链接<span class="token punctuation">(</span>symlink<span class="token punctuation">)</span> + 硬链接，全局存储库<span class="token punctuation">(</span>store<span class="token punctuation">)</span>，所有项目共享依赖


在 npm1、npm2 中，嵌套安装会让 node_modules 目录结构是依赖嵌套的，如果依赖包过多，会造成大量重复的包被安装
在 npm3 和 <span class="token function">yarn</span> 使用扁平化依赖解决嵌套安装导致 node_modules 层级过深、体积过大，会把依赖“拍平”到 node_modules 根目录，如果找到相同版本的包会直接复用，但可能会导致依赖版本冲突和幽灵依赖。

扁平安装：
	<span class="token number">1</span>. 把所有依赖尽可能拍平到 node_modules 根目录；
	<span class="token number">2</span>. 如果遇到不同版本的依赖（如A依赖lodash@4.17.0，B依赖lodash@4.17.21），只会把其中一个版本放到根目录，另一个版本嵌套在对应依赖的 node_modules 下。

版本冲突：根目录的版本可能不是某个子依赖需要的版本，导致隐性 bug。
幽灵依赖：项目未声明的依赖（如依赖的依赖）也能被代码直接引用（因为在根目录），破坏依赖隔离。
  如项目中使用包A，A可能依赖B、C两个包，使用 npm3/yarn 安装依赖包A时，A、B、C 三个包都会被安装到 node_modules 目录中，但 package.json 中只存在依赖A，而 NodeJs 的 require<span class="token punctuation">(</span><span class="token punctuation">)</span> 函数能够在依赖目录直接找到 B、C 三个包并调用它们的方法。
  在项目中，可能会直接使用 B、C 这些幽灵依赖，如果项目迭代 A 不再被使用<span class="token punctuation">(</span>移除A包<span class="token punctuation">)</span>，使用幽灵依赖将会因为无法找到依赖而报错。

<span class="token function">pnpm</span> 使用软硬链接机制：依赖存储在全局 store，项目 node_modules 仅通过符号链接指向全局存储，既节省磁盘，又能严格隔离依赖版本，彻底解决幽灵依赖问题。
		全局存储：所有依赖包会被下载到 <span class="token function">pnpm</span> 的全局 store 目录（如 ~/.pnpm-store），同一个版本的包只存一份，所有项目共享；
		项目内链接：项目的 node_modules 中，只有 package.json 里显式声明的依赖会出现在根目录，且这些依赖都是符号链接，指向全局 store；
		子依赖隔离：每个包的子依赖会被放在该包专属的 node_modules 目录下（通过硬链接 / 符号链接指向全局 store），而非根目录；
		版本冲突处理：如果多个依赖需要同一包的不同版本，pnpm 会为每个版本创建独立的链接，不会强制扁平到根目录，确保每个依赖都能拿到自己需要的版本。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+'" alt="image-20260226151656556"></p><h3 id="pnpm-修改node-modules中的内容" tabindex="-1"><a class="header-anchor" href="#pnpm-修改node-modules中的内容"><span>pnpm 修改node_modules中的内容</span></a></h3>',69),m={href:"https://pnpm.io/zh/next/cli/patch",target:"_blank",rel:"noopener noreferrer"},b=s(`<ol><li>修改源文件后，输入 <code>$ pnpm patch &lt;pkg_name&gt;</code> ，会生成一个临时的目录 2. 进入这个临时目录，这里面的文件就是要修改的包的文件，在这里进行修改源文件内容 3. 修改完成，输入 <code>$ pnpm patch-commit &lt;temp_dir&gt;</code>，<code>temp_dir</code> 是指第一步生成的临时目录地址 4. 项目根目录会生成一个 patchs 文件夹 5. pnpm 会自动向 <code>package.json</code> 中生成如下的指令： <code>&quot;pnpm&quot;: { &quot;patchedDependencies&quot;&quot; { &quot;pkg_name@pkg_version&quot;: &quot;patches/pkg_name@pkg_version.patch&quot; }&quot; }</code></li></ol><h2 id="monorepo" tabindex="-1"><a class="header-anchor" href="#monorepo"><span>monorepo</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>monorepo 是一种将多个项目代码<span class="token punctuation">(</span>package 软件包<span class="token punctuation">)</span>存储在同一个仓库中进行管理的软件开发策略（mono 意为单一，repo 意为 仓库）。
与之相对的是另一种流行的代码管理方式 MultiRepo，即每个项目对应一个单独的仓库来分散管理。


<span class="token number">1</span>. monorepo 优点
- 易于代码复用：所有项目代码集中于单一仓库，易于抽离出共用的业务组件或工具，并通过 TypeScript，Lerna 或其他工具进行代码内引用；
- 易于依赖管理：项目之间的引用路径内化于单一仓库，当某个项目的代码修改后，易于追踪其影响的是其他哪些项目。通过工具，易于版本依赖管理和版本号自动升级；并且所有的项目都是使用最新的代码，不会产生其它项目版本更新不及时的情况；
- 易于代码重构：代码重构难在不确定对某个项目的修改是否对于其他项目是破坏性的。而 monorepo 使得能够明确知道代码的影响范围，并且能够对被影响的项目可以进行统一的测试，利于不断优化代码；


<span class="token number">2</span>. monorepo 缺点
- 不易于项目粒度的权限管理；
- 额外的学习成本：monorepo 使得增加理清各个代码仓库之间的相互逻辑的成本；
- 需要工具链和自动构建工具的支持：项目若很庞大且没有工具链的支持，那么 <span class="token function">git</span> 管理、安装依赖、构建、部署会很麻烦和耗时。比如可以基于 Lerna、Yarn Workspaces 等工具更加自动化的处理依赖包之间的构建和发布。


<span class="token number">3</span>. 利用 tomono 基于已有的项目转化为 monorepo 项目
    lerna <span class="token function">import</span> 命令用来将已有的包导入到 monorepo 仓库，并且还会保留该仓库的所有 commit 信息，但是该命令仅支持导入本地项目，并且不支持远程仓库、以及导入项目的分支和标签。
    所以可以使用 tomono 导入远程仓库：
    首先下载 tomono 在用户根目录（~），然后创建一个包含所有需要导入 repo 地址的文本文件 repos.txt：
        //格式为： Git仓库地址 子项目名称 迁移后的路径
        git@github.com/backend.git @mono/backend packages/backend
        git@github.com/frontend.git @mono/frontend packages/frontend
        git@github.com/mobile.git @mono/mobile packages/mobile

    再执行 shell 命令即可导入：
        <span class="token function">cat</span> repos.txt <span class="token operator">|</span> ~/tomono/tomono.sh

    除了上述的基于 Lerna 负责发布和版本控制，而使用 Yarn Workspaces 来管理多个应用程序之间的依赖的偏底层 monorepo 方案。也有一些集成的 Monorepo 方案，比如 nx 、rushstack，提供从初始化、开发、构建、测试到部署的全流程能力，有一套比较完整的 Monorepo 基础设施，适合直接拿来进行业务项目的开发。
    而且基于 lerna 进行构建的 monorepo 项目，如果构建多个应用程序依赖，耗时很长，可以探索诸如 TurboRepo 的方案解决。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="monorepo落地" tabindex="-1"><a class="header-anchor" href="#monorepo落地"><span>Monorepo落地</span></a></h3><blockquote><h3 id="_1-锁定环境-volta-or-nvm" tabindex="-1"><a class="header-anchor" href="#_1-锁定环境-volta-or-nvm"><span>1. 锁定环境：volta or nvm</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>除了使用 Docker 和显式的在文档中声明 <span class="token function">node</span> 和 npm（yarn）的版本之外，锁定环境的工具有 vlota 和 nvm。相比使用 nvm，volta 支持当项目 CLI 工具与全局不兼容时，自动切换为项目指定的版本。
Volta 是用 Rust 构建的 JavaScript 工具管理器，它可以轻松在项目中锁定 node，npm（yarn） 的版本。只需在安装完 Volta 后，在项目的根目录中执行 volta pin 命令，那么无论您当前使用的 <span class="token function">node</span> 或 npm（yarn）版本是什么，volta 都会自动切换为指定的版本。
volta pin node@12.20
volta pin yarn@1.19

在package.json中配置如下：
    <span class="token punctuation">{</span>
       <span class="token punctuation">..</span>.,
       <span class="token string">&quot;volta&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
           <span class="token string">&quot;node&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;12.20.2&quot;</span>,
           <span class="token string">&quot;yarn&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.19.2&quot;</span>
         <span class="token punctuation">}</span>,
         <span class="token punctuation">..</span>.
       <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-利用-workspace-特性复用-package" tabindex="-1"><a class="header-anchor" href="#_2-利用-workspace-特性复用-package"><span>2. 利用 workspace 特性复用 package</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>workspace 特性使得：
    - 避免重复安装包，减少了磁盘空间的占用，并降低了构建时间；
    - 内部代码可以彼此相互引用；

    <span class="token number">1</span>. 调整目录结构，将相互关联的项目放置在同一个目录，推荐命名为 packages；请注意对子项目的命名统一以 @<span class="token operator">&lt;</span>repo_name<span class="token operator">&gt;</span>/ 开头，这是一种社区最佳实践，更容易让其他开发者了解整个应用的架构和在项目中找到所需的子项目。

   <span class="token number">2</span>. 在项目根目录里的 package.json 文件中，设置 workspaces 属性，属性值为之前创建的目录（packages）；
      比如在 babel在中：
     	 <span class="token string">&quot;workspaces&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;codemods/*&quot;</span>,
            <span class="token string">&quot;eslint/*&quot;</span>,
            <span class="token string">&quot;packages/*&quot;</span>,
            <span class="token string">&quot;test/esm&quot;</span>,
            <span class="token string">&quot;test/runtime-integration/*&quot;</span>,
            <span class="token string">&quot;benchmark&quot;</span>
          <span class="token punctuation">]</span>,

		<span class="token number">3</span>. 为避免误操作将仓库发布，在 package.json 文件中，设置 private 属性为 true。然后，在项目根目录中执行 <span class="token function">npm</span> <span class="token function">install</span> 或 <span class="token function">yarn</span> <span class="token function">install</span> 后，项目根目录中生成由所有子项目共用的 <span class="token function">npm</span> 包和我们自己的子项目共同构成的 node_modules 目录，正因如此，才使得可以像引入一般的 <span class="token function">npm</span> 模块一样彼此相互引用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-统一-eslint-typescript-babel-配置" tabindex="-1"><a class="header-anchor" href="#_3-统一-eslint-typescript-babel-配置"><span>3. 统一 ESlint / Typescript / babel 配置</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>可以在 项目根目录设置通用的 tsconfig.base.json / .eslintrc / .babelrc 配置，然后在子项目的对应配置文件中声明继承 extend 属性即可：
     // babel
      <span class="token punctuation">{</span>
        <span class="token string">&quot;extends&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;../../.babelrc&quot;</span>
      <span class="token punctuation">}</span>

      // eslint
      <span class="token punctuation">{</span>
        <span class="token string">&quot;extends&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;../../.eslintrc&quot;</span>,
       <span class="token string">&quot;parserOptions&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;project&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;tsconfig.json&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      // typescript
      <span class="token punctuation">{</span>
        <span class="token string">&quot;extends&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;../../tsconfig.base.json&quot;</span>,
       <span class="token string">&quot;compilerOptions&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;composite&quot;</span><span class="token builtin class-name">:</span> true, // 用于帮助 TypeScript 快速确定引用工程的输出文件位置
          <span class="token string">&quot;outDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;dist&quot;</span>,
          <span class="token string">&quot;rootDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;src&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;include&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-统一脚本-script-配置" tabindex="-1"><a class="header-anchor" href="#_4-统一脚本-script-配置"><span>4. 统一脚本 script 配置</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>每个子项目的 package.json 文件中的 scripts 属性都大同小异，我们可以使用 scripty 管理脚本命令提高复用性。
简单来说，scripty 允许将脚本命令定义在文件中，并在 package.json 文件中直接通过文件名来引用。这使我们可以实现如下目的：
<span class="token number">1</span>. 子项目间复用脚本命令；
<span class="token number">2</span>. 像写代码一样编写脚本命令，无论它有多复杂，而在调用时，像调用函数一样调用；
<span class="token number">3</span>. 同时可将脚本分为两类 package类（包级别脚本）与 workspace类（全局脚本），分别放在两个文件夹内：如此既可以在项目根目录执行全局脚本，也可以针对单个项目执行特定的脚本。


子项目的 package.json 文件中的 scripts 属性简化为：
    <span class="token punctuation">{</span>
      <span class="token punctuation">..</span>.
     <span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
       <span class="token string">&quot;test&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;scripty&quot;</span>,
        <span class="token string">&quot;lint&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;scripty&quot;</span>,
        <span class="token string">&quot;build&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;scripty&quot;</span>,
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;scripty&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;../../scripts/packages&quot;</span> // 这里执行了 scripty 的路径
      <span class="token punctuation">}</span>,
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-利用-lerna-统一包管理" tabindex="-1"><a class="header-anchor" href="#_5-利用-lerna-统一包管理"><span>5. 利用 lerna 统一包管理</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>lerna 可以帮助解决 monorepo 因为多个子项目放在一个代码仓库，并且子项目之间又相互依赖时带来的两个棘手问题：
问题一：在多个子目录执行相同的命令时需要手动进入各个目录，并执行命令；
问题二：子项目更新后只能手动追踪依赖该项目的其他子项目，并升级其版本。

首先，在项目根目录使用 npx lerna init 初始化，根目录会生成一个 lerna.json 文件，稍作改动：
    <span class="token punctuation">{</span>
      <span class="token string">&quot;packages&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;packages/*&quot;</span><span class="token punctuation">]</span>,
      <span class="token string">&quot;npmClient&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;yarn&quot;</span>, // 显式声明包客户端为 <span class="token function">yarn</span>
      <span class="token string">&quot;version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;independent&quot;</span>,  // 将每个子项目的版本号看作是相互独立的
     <span class="token string">&quot;useWorkspaces&quot;</span><span class="token builtin class-name">:</span> true, // 开启 workspaces 特性：子项目引用和通用包提升
    <span class="token punctuation">}</span>


当某个子项目代码更新后，运行 lerna publish 时，Lerna 将监听到代码变化的子项目并以交互式 CLI 方式让开发者决定需要升级的版本号，关联的子项目版本号不会自动升级，反之，当我们填入固定的版本号时，则任一子项目的代码变动，都会导致所有子项目的版本号基于当前指定的版本号升级


<span class="token comment">### Lerna 常用的 CLI 命令</span>
- lerna bootstrap：等同于 lerna <span class="token function">link</span> + <span class="token function">yarn</span> install，用于创建符合链接并安装依赖包；
- lerna run：会像执行一个 <span class="token keyword">for</span> 循环一样，在所有子项目中执行 <span class="token function">npm</span> script 脚本，并且，它会非常智能的识别依赖关系，并从根依赖开始执行命令；
- lerna exec：像 lerna run 一样，会按照依赖顺序执行命令，不同的是，它可以执行任何命令，例如 shell 脚本；
- lerna publish：发布代码有变动的 package，因此首先需要在使用 Lerna 前使用 <span class="token function">git</span> commit 命令提交代码，好让 Lerna 有一个 baseline；
- lerna add：将本地或远程的包作为依赖添加至当前的 monorepo 仓库中，该命令让 Lerna 可以识别并追踪包之间的依赖关系，因此非常重要；比如<span class="token comment"># 向 @mono/project2 和 @mono/project3 中添加 @mono/project1</span>


<span class="token comment">### lerna 常用的参数</span>
<span class="token parameter variable">--concurrency</span> <span class="token operator">&lt;</span>number<span class="token operator">&gt;</span>：参数可以使 Lerna 利用计算机上的多个核心，并发运行，从而提升构建速度；
<span class="token parameter variable">--scope</span> <span class="token string">&#39;@mono/{pkg1,pkg2}&#39;</span>：--scope 参数可以指定 Lerna 命令的运行环境，通过使用该参数，Lerna 将不再是一把梭的在所有仓库中执行命令，而是可以精准地在我们所指定的仓库中执行命令，并且还支持示例中的模版语法；
--stream：该参数可使我们查看 Lerna 运行时的命令执行信息


结合 verdanccio 在本地创建 <span class="token function">npm</span> 代理仓库，先发布体验和验证，全局安装 <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--global</span> verdaccio，在项目根目录创建 .npmrc 文件，并在文件中将 <span class="token function">npm</span> 仓库地址改写为本地代理地址 <span class="token assign-left variable">registry</span><span class="token operator">=</span><span class="token string">&quot;http://localhost:4873/&quot;</span>，执行 shell 命令 verdaccio 后，访问  localhost:4837即可，这样，每当执行 lerna publish 时，子项目所构建成的 package 将会先发布在本地 <span class="token function">npm</span> 仓库中，只有执行 lerna bootstrap 时，verdaccio 才发布到远程 npm。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-commitlint-约束-commit-信息" tabindex="-1"><a class="header-anchor" href="#_6-commitlint-约束-commit-信息"><span>6. commitlint：约束 commit 信息</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>commitlint 可以帮助我们检查提交的 commit 信息，它强制约束我们的 commit 信息必须在开头附加指定类型，用于标示本次提交的大致意图，支持的类型关键字有：
    feat：表示添加一个新特性；
   chore：表示做了一些与特性和修复无关的改动；
    fix：表示修复了一个 bug；
   refactor：表示本次提交是因为重构了代码；
    style：表示代码美化或格式化；


<span class="token comment">### 使用 commitlint 进行检查</span>
因为 monorepo 仓库可能被不同的开发者提交不同子项目的代码，规范化的 commit 信息在故障排查或版本回滚时是很有必要的。
可以通过下面的命令安装 commitlint 以及周边依赖，其中 husky 使得能在提交 commit 信息时自动运行 commitlint 进行检查：
 <span class="token function">npm</span> i <span class="token parameter variable">-D</span> @commitlint/cli @commitlint/config-conventional @commitlint/config-lerna-scopes commitlint husky lerna-changelog

项目根目录下的 package.json 文件中 husky 配置为：
   <span class="token punctuation">{</span>
      <span class="token punctuation">..</span>.
      <span class="token string">&quot;husky&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;hooks&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;commit-msg&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;commitlint -E HUSKY_GIT_PARAMS&quot;</span>
       <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token punctuation">..</span>.
    <span class="token punctuation">}</span>


在项目根目录中增加 commitlint.config.js 文件使得 commitlint 能感知到子项目名称，并设置文件内容为：
    module.exports <span class="token operator">=</span> <span class="token punctuation">{</span>
      extends: <span class="token punctuation">[</span>
        <span class="token string">&quot;@commitlint/config-conventional&quot;</span>,
        <span class="token string">&quot;@commitlint/config-lerna-scopes&quot;</span>,
     <span class="token punctuation">]</span>,
   <span class="token punctuation">}</span><span class="token punctuation">;</span>


除此之外，commitlint 还支持显示指定本次提交所对应的子项目名称。比如，针对名为@mono/project1 的子项目提交的 commit 信息可以写为：
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;feat(project1): add a attractive button&quot;</span> <span class="token comment"># 可以省略 @mono 的项目前缀</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="lerna" tabindex="-1"><a class="header-anchor" href="#lerna"><span>lerna</span></a></h3><blockquote><p><img src="`+d+`" alt="image-20221212173515655"></p></blockquote><h3 id="pnpm-构建monorepo" tabindex="-1"><a class="header-anchor" href="#pnpm-构建monorepo"><span>pnpm 构建monorepo</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 1. 初始化仓库</span>
$ <span class="token function">mkdir</span> test-pnpm-monorepo
$ <span class="token builtin class-name">cd</span> test-pnpm-monorepo
$ <span class="token function">pnpm</span> init     <span class="token comment"># 生成 package.json 文件</span>


<span class="token comment">## 2. 在根目录下添加 pnpm-workspace.yaml 文件，内容如下：</span>
 packages:
      - <span class="token string">&#39;packages/**&#39;</span>


<span class="token comment">## 3. 新建子项目</span>
$ <span class="token function">mkdir</span> packages <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> packages/app <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> packages/lib 	<span class="token comment"># 新建 app 和 lib 两个 package</span>
$ <span class="token builtin class-name">cd</span> packages/app <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> init <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>.  <span class="token comment"># 初始化 app package</span>
$ <span class="token builtin class-name">cd</span> packages/lib <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> init <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>.  <span class="token comment"># 初始化 lib package</span>


<span class="token comment">## 4. 统一子项目命名空间</span>
修改一下 packages/app/package.json 和 packages/lib/package.json 中的 name
			// packages/app
      <span class="token punctuation">{</span>
        <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;@test/app&quot;</span>,
        <span class="token punctuation">..</span>.
      <span class="token punctuation">}</span>

      // packages/lib
      <span class="token punctuation">{</span>
        <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;@test/lib&quot;</span>,
        <span class="token punctuation">..</span>.
      <span class="token punctuation">}</span>


<span class="token comment">## 5. 依赖的安装</span>
（1）全局依赖
		$ <span class="token function">pnpm</span> i typescript <span class="token parameter variable">-D</span> <span class="token parameter variable">-w</span>    <span class="token comment"># -w 参数</span>

    会在最外层 package.json 生成如下信息：
        <span class="token punctuation">{</span>
          <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;test-pnpm-monorepo&quot;</span>,
          <span class="token punctuation">..</span>.
          <span class="token string">&quot;devDependencies&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;typescript&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;^4.5.4&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

（2）特定 package 增加外部依赖
    $ <span class="token function">pnpm</span> i debug <span class="token parameter variable">--filter</span> @test/lib    <span class="token comment"># --filter 为制定 package 添加依赖</span>

    会在 packages/lib/package.json 生成如下信息：
        <span class="token punctuation">{</span>
          <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;@test/lib&quot;</span>,
          <span class="token punctuation">..</span>.
          <span class="token string">&quot;dependencies&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;debug&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;^4.3.3&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

（3）内部依赖
    $ <span class="token function">pnpm</span> i @test/lib <span class="token parameter variable">--filter</span> @test/app    <span class="token comment"># 指定命令空间 @test/lib，指定为 @test/app 添加依赖</span>

    会在 packages/app/package.json 生成如下信息：
        <span class="token punctuation">{</span>
          <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;@test/app&quot;</span>,
          <span class="token punctuation">..</span>.
          <span class="token string">&quot;dependencies&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;@test/lib&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;workspace:^1.0.0&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>


<span class="token comment">## 6. 最终的目录结构</span>
test-pnpm-monorepo
├── README.md
├── package.json
├── packages
<span class="token operator">|</span>  ├── app
<span class="token operator">|</span>  <span class="token operator">|</span>  ├── package.json
<span class="token operator">|</span>  <span class="token operator">|</span>  └── pnpm-lock.yaml
<span class="token operator">|</span>  └── lib
<span class="token operator">|</span>     ├── p	ackage.json
<span class="token operator">|</span>     └── pnpm-lock.yaml
├── pnpm-lock.yaml
└── pnpm-workspace.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,9);function k(g,h){const a=i("ExternalLinkIcon");return l(),t("div",null,[v,n("ul",null,[n("li",null,[n("a",m,[p("官方文档"),c(a)])])]),b])}const q=e(r,[["render",k],["__file","构建工具.html.vue"]]),y=JSON.parse('{"path":"/%E5%B7%A5%E7%A8%8B_%E7%BD%91%E7%BB%9C/%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7.html","title":"","lang":"zh-CN","frontmatter":{"Author":"willy","CreateTime":"2024-05-29T17:32:57.000Z","Modifier":"willy","ModifiedTime":"2024-11-19T21:41:35.000Z","Description":"构建工具"},"headers":[{"level":2,"title":"构建工具","slug":"构建工具","link":"#构建工具","children":[]},{"level":2,"title":"Webpack","slug":"webpack","link":"#webpack","children":[{"level":3,"title":"原理","slug":"原理","link":"#原理","children":[]},{"level":3,"title":"解析器 loader","slug":"解析器-loader","link":"#解析器-loader","children":[]},{"level":3,"title":"插件 plugin","slug":"插件-plugin","link":"#插件-plugin","children":[]},{"level":3,"title":"本地服务器 webpack-dev-server","slug":"本地服务器-webpack-dev-server","link":"#本地服务器-webpack-dev-server","children":[]},{"level":3,"title":"打包 output","slug":"打包-output","link":"#打包-output","children":[]},{"level":3,"title":"调试","slug":"调试","link":"#调试","children":[]},{"level":3,"title":"优化","slug":"优化","link":"#优化","children":[]}]},{"level":2,"title":"Vite","slug":"vite","link":"#vite","children":[]},{"level":2,"title":"Grunt/Gulp","slug":"grunt-gulp","link":"#grunt-gulp","children":[]},{"level":2,"title":"Babel 原理","slug":"babel-原理","link":"#babel-原理","children":[]},{"level":2,"title":"pnpm","slug":"pnpm","link":"#pnpm","children":[{"level":3,"title":"pnpm 优势","slug":"pnpm-优势","link":"#pnpm-优势","children":[]},{"level":3,"title":"pnpm 跟 npm、yarn 的对比","slug":"pnpm-跟-npm、yarn-的对比","link":"#pnpm-跟-npm、yarn-的对比","children":[]},{"level":3,"title":"pnpm 修改node_modules中的内容","slug":"pnpm-修改node-modules中的内容","link":"#pnpm-修改node-modules中的内容","children":[]}]},{"level":2,"title":"monorepo","slug":"monorepo","link":"#monorepo","children":[{"level":3,"title":"Monorepo落地","slug":"monorepo落地","link":"#monorepo落地","children":[]},{"level":3,"title":"lerna","slug":"lerna","link":"#lerna","children":[]},{"level":3,"title":"pnpm 构建monorepo","slug":"pnpm-构建monorepo","link":"#pnpm-构建monorepo","children":[]}]}],"git":{"updatedTime":1777250844000,"contributors":[{"name":"willy","email":"willysliang@qq.com","commits":5}]},"filePathRelative":"工程&网络/构建工具.md"}');export{q as comp,y as data};
