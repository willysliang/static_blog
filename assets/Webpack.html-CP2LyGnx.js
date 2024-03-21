import{_ as n,o as s,c as a,b as e}from"./app-Bvx-HY_0.js";const p="/static_blog/assets/image-20201210154729727-ZF9MuoQz.png",t="/static_blog/assets/image-20201218001222599-w--8BaoY.png",l="/static_blog/assets/image-20220919081506434-BzdkD_V0.png",i={},c=e(`<h2 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack"><span>Webpack</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 本地安装webpack</span>
<span class="token function">npm</span> <span class="token function">install</span> webpack -save-dev


<span class="token comment"># 核心概念</span>
<span class="token comment">## Entry 和 Output</span>
webpack的解析入口，项目的打包出口所在


<span class="token comment"># webpack打包：</span>
<span class="token variable"><span class="token variable">\`</span>webpack 被解析的文件路径 <span class="token parameter variable">-o</span> 存放打包文件所在的目录<span class="token variable">\`</span></span>
webpack .<span class="token punctuation">\\</span>src<span class="token punctuation">\\</span>main.js .<span class="token punctuation">\\</span>dist<span class="token punctuation">\\</span>bundle.js	 <span class="token comment">#把main.js文件打包生成bundle.js文件</span>


<span class="token comment">## 全局 webpack 作用</span>
- 通过 <span class="token function">npm</span> i webpack <span class="token parameter variable">-g</span> 安装的 webpack 为全局 weback
- 全局 webpack 是必须安装的，我们在命令行直接执行 webpack 指令时，使用的是全局 webpack 去完成的

<span class="token comment">## 局部 webpack 作用</span>
- 局部 webpack 是指安装在项目文件夹下 node_modules 的 webpack
- 全局的 webpack 有且只有一个，但实际情况下，不同项目的 webpack 版本可能完全不同。当我们项目需求的 webpack 版本和我们全局的 webpack 不一致时，就需要安装局部 webpack


<span class="token comment">## 编译 TypeScript 流程</span>
<span class="token number">1</span>. 安装 typescript 和 ts-loader：npm i typescript ts-loader --save-dev
<span class="token number">2</span>. 在 webpack.config.js 配置文件中中写入 ts-loader 编译规则
<span class="token number">3</span>. 编写 tsconfig.json：类似于 .babelrc、ts-loader 的额外配置


<span class="token comment">## 观察应用变化 --watch</span>
- <span class="token variable"><span class="token variable">\`</span>$ <span class="token function">npm</span> webpack <span class="token parameter variable">--watch</span><span class="token variable">\`</span></span>


<span class="token comment">## 从bundle中排除某个导入：externals</span>
Webpack externals 告诉 Webpack 从 bundle 中排除某个导入。<span class="token variable"><span class="token variable">\`</span>external<span class="token variable">\`</span></span> 通常用于排除将通过 CDN 加载的导入。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><p><img src="`+p+`" alt="image-20201210154729727"></p><h4 id="安装webpack-需先安装nodejs" tabindex="-1"><a class="header-anchor" href="#安装webpack-需先安装nodejs"><span>安装webpack（需先安装nodejs）</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//main.js</span>
<span class="token comment">//使用commonjs模块化规范</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>add<span class="token punctuation">,</span>mul<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mathUtils.js&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">39</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">mul</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//使用ES6模块化规范</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>height<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./info&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//info.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;Kobe&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">14</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> height <span class="token operator">=</span> <span class="token number">12.2</span><span class="token punctuation">;</span>

<span class="token comment">//mathUtils.js</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span>num2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">mul</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span>num2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">return</span> num1 <span class="token operator">*</span> num2
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
     add<span class="token punctuation">,</span>
     mul
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>config.js和package.json的配置</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#初始化定义，然后生成package.json文件</span>
<span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//config.js配置</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>	<span class="token comment">//导入模块</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/main.js&#39;</span><span class="token punctuation">,</span>	<span class="token comment">//入口</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>	<span class="token comment">//出口</span>
       <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>	<span class="token comment">//resolve()对括号里面的路径进行拼接，__dirname是当前项目根路径</span>
       <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="loader" tabindex="-1"><a class="header-anchor" href="#loader"><span>loader</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## loader</span>
使用 webpack 可以在 JavaScript 代码中使用 <span class="token variable"><span class="token variable">\`</span><span class="token function">import</span><span class="token variable">\`</span></span> 或 <span class="token variable"><span class="token variable">\`</span>require<span class="token variable">\`</span></span> 语句，不仅可以包括其他 JavaScript，还包括任何类型的文件，例如 CSS。
Webpack 旨在处理我们所有的依赖关系，而不仅仅是 JavaScript，而 loader 是实现此目的的一种方式。


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

<span class="token comment">### style-loader 核心配置</span>
- insertAt：style 标签插入在哪一块区域
- insertInto：插入指定的dom
- singleton：是否合并为一个 style 标签
- transform：在浏览器环境下，插入 style 到页面前，用 js 对 css 进行操作


<span class="token comment">### css-loader 核心配置</span>
- minimize：是否压缩 css
- module：是否使用 css 模块化
- alias：css 中的全局别名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><h3 id="loader-1" tabindex="-1"><a class="header-anchor" href="#loader-1"><span>loader</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#vscode安装loader配置（此为固定版本安装）</span>
<span class="token function">npm</span> <span class="token function">install</span> --save-dev css-loader@2.0.2 css
<span class="token function">npm</span> <span class="token function">install</span> --save-dev style-loader@0.23.1 style
<span class="token function">npm</span> <span class="token function">install</span> --save-dev less-loader@4.1.0 less@3.9.0
<span class="token function">npm</span> <span class="token function">install</span> url-loader@1.1.2 --save-dev		<span class="token comment">#引用图片时调用</span>
<span class="token function">npm</span> <span class="token function">install</span> file-loader@3.0.1 --save-dev	<span class="token comment">#当图片大于所定义的大小时，需要引用</span>
<span class="token function">npm</span> <span class="token function">install</span> -save-dev babel-loader@7 @babel/core @babel/preset-es2015	<span class="token comment">#ES6转化为ES5</span>
<span class="token function">npm</span> <span class="token function">install</span> vue <span class="token parameter variable">--save</span>
<span class="token function">npm</span> <span class="token function">install</span> --save-dev vue-loader@13.0. vue-template-compiler@2.5.21
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
<span class="token comment">//引入loader</span>
<span class="token comment">//css-loader只负责将CSS文件进行加载，style-loader负责将样式添加到DOM中</span>
<span class="token comment">//使用多个loader时，use的引用是由右向左的</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/main.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;dist/&#39;</span>     <span class="token comment">//自动在前面拼接</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          	<span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          		<span class="token punctuation">[</span><span class="token string">&#39;@babel/peset-env&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          			<span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          				<span class="token literal-property property">browsers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;&gt;1%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;last 2 versions&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 编译成大于1%浏览器支持的语言，即编译为es5</span>
          				<span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        					<span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&#39;59&#39;</span><span class="token punctuation">,</span>
      					<span class="token punctuation">}</span>
          		<span class="token punctuation">}</span><span class="token punctuation">]</span>
        		<span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.tsx?%</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;ts-loader&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">insertInto</span><span class="token operator">:</span> <span class="token string">&#39;#mydiv&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">singleton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">&#39;./transform.js&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;less-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">lessOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">strictMath</span><span class="token operator">:</span> <span class="token boolean">true</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|gif)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">//当加载的图片小于limit时，会将图片编译成base64字符串形式</span>
              <span class="token comment">//当加载图片大于limit时，需要使用filte-loader模块进行加载，加载的图片会存入dist目录下</span>
              <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">8192</span><span class="token punctuation">,</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;img/[name].[hash:8].[ext]&#39;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">&#39;vue-loader&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//vue环境的配置</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//alias(别名--起别的名字)</span>
      <span class="token string-property property">&#39;vue$&#39;</span><span class="token operator">:</span> <span class="token string">&#39;vue/dist/vue.esm.js&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./node_modules&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>图片文件处理--修改文件名称</strong></p><p><img src="`+t+`" alt="image-20201218001222599"></p></blockquote><h2 id="plugin插件" tabindex="-1"><a class="header-anchor" href="#plugin插件"><span>plugin插件</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## plugin</span>
- commonsChunkPlugin、uglifyjsWebpackPlugin、PurifyCSS等优化文件体积的插件
- HtmlWebpackPlugin、HotModuleReplacementPlugin等额外功能的插件


<span class="token comment">## plugin作用：</span>
- plugin是插件，通常是对于某个现有的架构进行扩展。
- webpack中的插件，即是对webpack现有功能扩展，如打包优化，文件压缩


<span class="token comment">## loader和plugin的区别</span>
- loader主要用于转换某些类型的模块，是转换器
- plugin是插件，是扩展器


<span class="token comment">### **HtmlWebPlugin插件作用：**</span>
- 自动生成一个index.html文件（可指定模块生成）
- 将打包的js文件，自动通过script标签插入到body中

<span class="token comment">### **UglifyJsPlugin插件作用：**</span>
- 丑化js代码，在打包js代码时，会把注释等删掉
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><h3 id="plugin插件-1" tabindex="-1"><a class="header-anchor" href="#plugin插件-1"><span>Plugin插件</span></a></h3><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>#打包html的plugin
npm install html-webpack-plugin@3.2.0 --save-dev
#js压缩的plugin（uglifyjs--即丑化js）
npm install uglifyjs-webpack-plugin@1.1.1 --save -dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">repuire</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> UglifyJsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;uglifyjs-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
       <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>BannerPlugin</span><span class="token punctuation">(</span><span class="token string">&#39;最终版权归willy所有&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
         <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span>	<span class="token comment">//默认搜寻当前路径下的index.html作为模板生成文件</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token keyword">new</span> <span class="token class-name">UglifyJsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>webpack配置文件的抽离--merge插件</strong></p><p>因为有些配置最后打包才使用到，如：js代码的丑化（uglifyjs插件），因此需要分离配置文件，方便维护使用</p><div class="language-vscode-cmd line-numbers-mode" data-ext="vscode-cmd" data-title="vscode-cmd"><pre class="language-vscode-cmd"><code>npm install webpack-merge@4.1.5 --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在package.json中修改build和dev的文件</p><div class="language-package.json line-numbers-mode" data-ext="package.json" data-title="package.json"><pre class="language-package.json"><code>&quot;build&quot;: &quot;webpack --config ./build/prod.config.js&quot;,
&quot;dev&quot;: &quot;webpack-dev-server --open --config ./build/dev.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>新建build文件，把webpack.config.js文件分离成base.config.js、dev.config.js、prod.config.js</p><p>通过调用base.config.js文件来运行</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// dev.config.js、prod.config.js</span>
<span class="token keyword">const</span> UglifyJsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;uglifyjs-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpackMerge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> baseConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./base.config&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">webpackMerge</span><span class="token punctuation">(</span>baseConfig<span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">UglifyJsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="webpack-dev-server" tabindex="-1"><a class="header-anchor" href="#webpack-dev-server"><span>webpack-dev-server</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Webpack-dev-server 提供的常用额外功能</span>
  - 路径重定向
  - 接口代理
  - 浏览器中显示编译问题
  - 热更新
  
  
<span class="token comment">## 本地服务器安装</span>
cnpm i webpack-dev-server --save-dev


<span class="token comment">## 属性说明</span>
- 本地服务器基于nodejs搭建，内部使用express框架，实现我们想要让浏览器刷新显示我们修改后的结果
- deserver属性选项
  - contentBase：为哪一个文件夹提供本地服务，默认为根文件夹，一般写./dist
  - port：代理端口号,默认8080端口
  - proxy：代理请求  
  - inline：服务的开启模式，可使得页面实时刷新
  - historyApiFallback：路径重定向，在SPA页面中依赖HTML5的history模式
  - <span class="token function">open</span> 参数表示直接打开浏览器
  - hot：热更新
  - lazy：懒编译
  - overlay：错误遮罩
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="搭建本地服务器配置" tabindex="-1"><a class="header-anchor" href="#搭建本地服务器配置"><span>搭建本地服务器配置</span></a></h3><blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  	<span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">,</span>
  	<span class="token literal-property property">inline</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
    <span class="token literal-property property">overlay</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    
    <span class="token comment">// 路径重定向,控制 html5的history模式的显示</span>
    <span class="token literal-property property">historyApiFallback</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rewrites</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/([ -~]+)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token function-variable function">to</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;./&#39;</span> <span class="token operator">+</span> context<span class="token punctuation">.</span>match<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;.html&#39;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  	<span class="token comment">// 接口代理</span>
  	<span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;^/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 请求重定向</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;^api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
      
    <span class="token comment">// 热更新</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hotOnly</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-dev-server&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="webpack打包" tabindex="-1"><a class="header-anchor" href="#webpack打包"><span>Webpack打包</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## webpack 打包</span>
- Webpack 依赖于 Node 的环境与文件操作系统
- Webpack 的打包过程就是利用 Node 去读取文件，然后进行一些字符串处理后，再利用 Node 去写入文件


<span class="token comment">## Webpack 打包流程</span>
<span class="token number">1</span>. 读取配置文件
<span class="token number">2</span>. 注册内部插件与配置插件
<span class="token number">3</span>. loader 编译
<span class="token number">4</span>. 组织模块
<span class="token number">5</span>. 生成最终文件导出


<span class="token comment">## 打包结果分析</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="loader编译" tabindex="-1"><a class="header-anchor" href="#loader编译"><span>loader编译</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## loader 编译</span>
- Loader 是一个方法，接收一个字符串，方法内部处理完后再返回字符串

module.exports <span class="token operator">=</span> function<span class="token punctuation">(</span>source<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token builtin class-name">return</span> <span class="token builtin class-name">source</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/* webpack.config.js */</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="webpack打包速度优化" tabindex="-1"><a class="header-anchor" href="#webpack打包速度优化"><span>webpack打包速度优化</span></a></h3><blockquote><ol><li><p>使用<code>webpack-bundle-analyzer</code>对项目进行模块分析生成report，查看report后看看哪些模块体积过大，然后针对性优化，比如我项目中引用了常用的UI库element-ui和v-charts等</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;element-ui&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Element&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;v-charts&#39;</span><span class="token operator">:</span> <span class="token string">&#39;VCharts&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置webpack的externals ，防止将某些import的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖。 所以，可以将体积大的库分离出来：</p></li><li><p>然后在main.js中移除相关库的import</p></li><li><p>在index.html模板文件中，添加相关库的cdn引用(如<code>&lt;script src=&quot;https://unpkg.com/element-ui@2.10.0/lib/index.js&quot;&gt;&lt;/script&gt;</code>)</p></li></ol></blockquote><h2 id="source-map" tabindex="-1"><a class="header-anchor" href="#source-map"><span>source-map</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## source-map </span>
- 为方便调试，需要知道打包后的代码对应于原文件的位置
- 如果代码有一处错误，无 source-map 只能追踪到错误发生在打包后文件的哪个位置，但是打包后的文件不方便阅读
- 而 source-map 就可以查看错误发生在原模块哪个位置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt="image-20220919081506434"></p></blockquote><h3 id="dev-server" tabindex="-1"><a class="header-anchor" href="#dev-server"><span>Dev-server</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Dev-server</span>
- Dev-server 利用 express 和一个中间件 webpack-dev-middleware 来开启服务，然后开启的 server 会执行打包出来的代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/* dev.js */</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="webpack-减少构建时间" tabindex="-1"><a class="header-anchor" href="#webpack-减少构建时间"><span>Webpack 减少构建时间</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Webpack 减少构建时间</span>
- Webpack 构建项目的速度很大程度上取决于项目的复杂度和电脑配置。确保项目在有足够的磁盘空间和良好的处理器情况下运行。
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
    


<span class="token comment">### 3.  别名 — \`resolve.alias\`</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="从bundle中排除某个导入" tabindex="-1"><a class="header-anchor" href="#从bundle中排除某个导入"><span>从bundle中排除某个导入</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 从bundle中排除某个导入: externals</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="webpack-1" tabindex="-1"><a class="header-anchor" href="#webpack-1"><span>Webpack</span></a></h2><h2 id="webpack说明" tabindex="-1"><a class="header-anchor" href="#webpack说明"><span>Webpack说明</span></a></h2><h3 id="为什么需要打包工具" tabindex="-1"><a class="header-anchor" href="#为什么需要打包工具"><span>为什么需要打包工具</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 为什么需要打包工具？</span>
开发时，我们会使用框架（React、Vue）、ES6模块化语法、Less/Sass 等 CSS 预处理语言等语法进行开发，这样的代码要想在浏览器运行必须经过编译成浏览器能识别的 JS、CSS 语法才能运行。
打包工具能够对上述的高级语法编译成浏览器能识别的语法，而且打包还能压缩代码、做兼容性处理、提升代码性能等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="对-webpack-的理解" tabindex="-1"><a class="header-anchor" href="#对-webpack-的理解"><span>对 Webpack 的理解</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 说说对 Webpack 的理解</span>
webpack 是一个静态模块的打包工具。它会在内部从一个或多个入口点构建一个依赖图，然后将项目中所需的每一个模块组合成一个或多个 bundles 进行输出，它们均为静态资源。输出的文件已经编译好了，可以在浏览器运行。 webpack 具有打包压缩、编译兼容、能力扩展等功能。其最初的目标是实现前端项目的模块化，也就是如何更高效地管理和维护项目中的每一个资源。


<span class="token comment">### 概述</span>
- Webpack 是一种用于编译 JavaScript 模块的工具，也称为模块捆绑器（一个现代的js应用的静态模块化打包工具）。
- 常用 webpack 处理项目所编写的 js 代码，并且 webpack 会自动处理 js 之间相关的依赖。


<span class="token comment">### Webpack 作用</span>
- 捆绑资源。
- 将 ES6+ 语法转译为 ES5代码，允许使用最新的 JavaScript 功能，而不必担心浏览器的支持限制。
- 将 typescript 转成 ES5 代码，将 CoffeeScript 转换为 JavaScript，将 scss/less 转成 css等。
- 将 .jsx、.vue 文件转成 js 文件等。
- 可将内联图像转换为 Data URL。
- 允许您对 CSS 文件使用 require<span class="token punctuation">(</span><span class="token punctuation">)</span>。
- 可以运行开发 Web 服务器。
- 可以处理热模块替换，监视更改并重新运行任务。
- 可以将输出文件拆分为多个文件，以避免在第一个页面命中时加载巨大的 js 文件。
- 可以执行 Tree Shaking（摇树）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="webpack-解析流程" tabindex="-1"><a class="header-anchor" href="#webpack-解析流程"><span>Webpack 解析流程</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Webpack 的解析流程</span>
Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：
    <span class="token number">1</span>. 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数。
    <span class="token number">2</span>. 开始编译：用上一步得到的参数初始化 Compilier 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译。
    <span class="token number">3</span>. 确定入口：根据配置中的 entry 找出所有的入口文件。
    <span class="token number">4</span>. 编译模块：从入口文件出发，调出所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
    <span class="token number">5</span>. 完成模块编译：在经过第 <span class="token number">4</span> 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。
    <span class="token number">6</span>. 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会。
    <span class="token number">7</span>. 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件，把文件内容写入到文件系统。
在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。


<span class="token comment">### 简单描述</span>
<span class="token number">1</span>. 初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler
<span class="token number">2</span>. 编译：从 Entry 出发，针对每个 Module 串行调用对应的 Loader 去翻译文件的内容，再找到该 Module 依赖的 Module，递归地进行编译处理
<span class="token number">3</span>. 输出：将编译后的 Module 组合成 Chunk，将 Chunk 转换成文件，输出到文件系统中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="解析器-loader" tabindex="-1"><a class="header-anchor" href="#解析器-loader"><span>解析器 Loader</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 解析器 Loader</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="loader-与-plugin-的区别" tabindex="-1"><a class="header-anchor" href="#loader-与-plugin-的区别"><span>Loader 与 Plugin 的区别？</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### Loader 与 Plugin 的区别？</span>
<span class="token number">1</span>. 性质上的区别：
- <span class="token string">&#39;Loader&#39;</span> 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。

- <span class="token string">&#39;Plugin&#39;</span> 就是插件，基于事件流框架 <span class="token string">&#39;Tapable&#39;</span>，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。


<span class="token number">2</span>. 配置上的区别：
    - Loader 在 <span class="token variable"><span class="token variable">\`</span>module.rules<span class="token variable">\`</span></span> 中配置，作为模块的解析规则，类型为数组，每一项都是一个 Object，内部包含了 test（类型文件）、loader、options（参数） 等属性。
    - Plugin 在 <span class="token variable"><span class="token variable">\`</span>module.plugins<span class="token variable">\`</span></span> 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="vite" tabindex="-1"><a class="header-anchor" href="#vite"><span>Vite</span></a></h2><h2 id="vite问题" tabindex="-1"><a class="header-anchor" href="#vite问题"><span>Vite问题</span></a></h2><h3 id="vite项目修改依赖不更新-清除依赖缓存" tabindex="-1"><a class="header-anchor" href="#vite项目修改依赖不更新-清除依赖缓存"><span>vite项目修改依赖不更新，清除依赖缓存</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### vite 报错问题展述</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,43),o=[c];function r(u,d){return s(),a("div",null,o)}const k=n(i,[["render",r],["__file","Webpack.html.vue"]]),b=JSON.parse('{"path":"/%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7/Webpack.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Webpack","slug":"webpack","link":"#webpack","children":[]},{"level":2,"title":"loader","slug":"loader","link":"#loader","children":[]},{"level":2,"title":"plugin插件","slug":"plugin插件","link":"#plugin插件","children":[]},{"level":2,"title":"webpack-dev-server","slug":"webpack-dev-server","link":"#webpack-dev-server","children":[{"level":3,"title":"搭建本地服务器配置","slug":"搭建本地服务器配置","link":"#搭建本地服务器配置","children":[]}]},{"level":2,"title":"Webpack打包","slug":"webpack打包","link":"#webpack打包","children":[{"level":3,"title":"loader编译","slug":"loader编译","link":"#loader编译","children":[]},{"level":3,"title":"webpack打包速度优化","slug":"webpack打包速度优化","link":"#webpack打包速度优化","children":[]}]},{"level":2,"title":"source-map","slug":"source-map","link":"#source-map","children":[{"level":3,"title":"Dev-server","slug":"dev-server","link":"#dev-server","children":[]}]},{"level":2,"title":"Webpack 减少构建时间","slug":"webpack-减少构建时间","link":"#webpack-减少构建时间","children":[]},{"level":2,"title":"从bundle中排除某个导入","slug":"从bundle中排除某个导入","link":"#从bundle中排除某个导入","children":[]},{"level":2,"title":"Webpack","slug":"webpack-1","link":"#webpack-1","children":[]},{"level":2,"title":"Webpack说明","slug":"webpack说明","link":"#webpack说明","children":[{"level":3,"title":"为什么需要打包工具","slug":"为什么需要打包工具","link":"#为什么需要打包工具","children":[]},{"level":3,"title":"对 Webpack 的理解","slug":"对-webpack-的理解","link":"#对-webpack-的理解","children":[]},{"level":3,"title":"Webpack 解析流程","slug":"webpack-解析流程","link":"#webpack-解析流程","children":[]}]},{"level":2,"title":"解析器 Loader","slug":"解析器-loader","link":"#解析器-loader","children":[{"level":3,"title":"Loader 与 Plugin 的区别？","slug":"loader-与-plugin-的区别","link":"#loader-与-plugin-的区别","children":[]}]},{"level":2,"title":"Vite","slug":"vite","link":"#vite","children":[]},{"level":2,"title":"Vite问题","slug":"vite问题","link":"#vite问题","children":[{"level":3,"title":"vite项目修改依赖不更新，清除依赖缓存","slug":"vite项目修改依赖不更新-清除依赖缓存","link":"#vite项目修改依赖不更新-清除依赖缓存","children":[]}]}],"git":{"updatedTime":1699357323000,"contributors":[{"name":"willy","email":"willysliang","commits":1}]},"filePathRelative":"构建工具/Webpack.md"}');export{k as comp,b as data};
