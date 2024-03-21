import{_ as n,o as s,c as a,b as e}from"./app-Bvx-HY_0.js";const t="/static_blog/assets/e70bfa89b435885a8705d32af28fa5123d4c38da-DgXU3-4R.gif",p={},o=e(`<h2 id="nodejs" tabindex="-1"><a class="header-anchor" href="#nodejs"><span>nodejs</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## node.js</span>
<span class="token comment">### nodejs 的学习规划</span>
<span class="token number">1</span>. 学习JavaScript，Node.js是基于JavaScript语言的，因此需要先学习 JS，掌握其基本语法、函数、面向对象编程等基础知识。
<span class="token number">2</span>. 学习Node.js基础知识，包括模块、事件机制、异步编程等。
<span class="token number">3</span>. 学习Node.js的核心模块，如fs、http、net等，掌握它们的使用方法和应用场景。
<span class="token number">4</span>. 学习Node.js框架，如Express、Koa等，了解它们的使用方法和特点，以及如何搭建Web应用程序。
<span class="token number">5</span>. 学习数据库操作，如MySQL、MongoDB等，学习如何使用Node.js连接数据库、进行增删改查等操作。
<span class="token number">6</span>. 学习前端技术，如HTML、CSS、React、Vue等，了解前后端分离的开发模式，以及如何使用Node.js搭建API服务。
<span class="token number">7</span>. 学习Node.js的高级特性，如流、Buffer、Cluster等，了解它们的使用方法和优化应用程序的技巧。
<span class="token number">8</span>. 实践项目，通过实践项目来巩固所学知识，如搭建一个博客、构建一个API服务等。


<span class="token comment">### nodejs 概念</span>
- node.js是一个基于 Chrome V8 引擎的 JavaScript 运行环境：
	  - 不是库，是运行环境/JS语言解释器。底层源码是用C++开发的。
  	- Chrome V8引擎：引擎分为渲染引擎（渲染DOM）和脚本引擎<span class="token punctuation">(</span>运行脚本语言<span class="token punctuation">)</span>。脚本引擎最流行的是chrome中的V8引擎。
- node.js 的包管理是 npm，成为世界上最大的开源代码的生态系统。
- node.js 使用一个事件驱动、非阻塞I/O的模型，使其轻量又高效。
  	- 事件驱动：指在持续事务管理过程中，进行决策的一种策略，即跟随当前时间点上出现的事件，调动可用资源，执行相关任务，使不断出现的问题得以解决，防止事务堆积。
 	 	- I/O：在服务器上可理解为读写操作，非阻塞I/O<span class="token punctuation">(</span>异步I/O<span class="token punctuation">)</span>。nodejs是单线程语言，其在遇到I/O事件会创建一个线程去执行，然后主线程会继续往下执行。因此，触发一个I/O事件，紧接着继续执行别的动作，再触发一个I/O事件，两个动作并行执行，假如各需要 1s，那么总时间是1s。


<span class="token comment">### nodejs 组成</span>
- nodejs 是由 ECMAScript 及 <span class="token function">node</span> 环境提供的一些附加API组成，包括文件、http、路径等API。
- 全局对象 global 的方法可在任何地方使用，global 可省略。
  - console.log<span class="token punctuation">(</span><span class="token punctuation">)</span>   //在控制台输出
  - setTimeout<span class="token punctuation">(</span><span class="token punctuation">)</span>   //设置超时定时器
  - clearTimeout<span class="token punctuation">(</span><span class="token punctuation">)</span>   /清除超时定时器
  - setInterval<span class="token punctuation">(</span><span class="token punctuation">)</span>   //设置间歇定时器
  - clearInterval<span class="token punctuation">(</span><span class="token punctuation">)</span>  //清除间歇定时器
- <span class="token function">node</span> 应用场景：自动化构件等工具、HTTP Proxy、网站应用开发、im即时聊天<span class="token punctuation">(</span>socket、io<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-nodejs" tabindex="-1"><a class="header-anchor" href="#安装-nodejs"><span>安装 nodejs</span></a></h2><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>#下载cnpm	(i是英文install的缩写，-g代表全局安装，-D代表本地安装。全局安装意味着安装后在任何文件夹下都能使用，而本地安装则把东西安装到指定的文件夹，当然使用也只能在这个文件夹下使用)
npm i cnpm -g	

#全局安装webpack（指定版本3.6.0，因为vue cli2依赖该版本）
npm install webpack@3.6.0 -g

#安装nrm（nrm有我们常用的镜像地址）
npm i nrm
#查看镜像地址
nrm ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>npm安装报错</strong></p><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>#去掉npm代理（权限问题记得加sudo）
npm config rm proxy
npm config rm https-proxy
#修改npm的资源镜像链接:
npm config set registry http://registry.npm.taobao.org
#查看是否修改成功
npm config get registry

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="npm" tabindex="-1"><a class="header-anchor" href="#npm"><span>NPM</span></a></h3><p><strong>概念</strong></p><ul><li>NPM是随同nodejs一起安装的包管理工具。常见使用场景： <ul><li>从NPM服务器下载别人编写的第三方包到本地；</li><li>从NPM服务器下载并安装比人编写的命令行程序到本地；</li><li>将自己编写的包或命令程序上传到NPM服务器。</li></ul></li><li>在windows系统中，全局安装路径默认是用户node目录下的node_modules，非全局安装路径是命令运行所在路径下的node_modules下。</li></ul><h4 id="使用npm" tabindex="-1"><a class="header-anchor" href="#使用npm"><span>使用npm</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token parameter variable">-v</span>											<span class="token comment">#查看版本</span>

<span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token parameter variable">-f</span>			<span class="token comment">#强制安装</span>
<span class="token function">npm</span> update <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>					<span class="token comment">#更新模块</span>
<span class="token function">npm</span> uninstall <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>			<span class="token comment">#卸载模块</span>


<span class="token function">npm</span> list									<span class="token comment">#查看安装的包</span>
<span class="token function">npm</span> list <span class="token operator">|</span> <span class="token function">grep</span> <span class="token operator">&lt;</span>包名<span class="token operator">&gt;</span> 		<span class="token comment">#查看安装的指定包的分支</span>


<span class="token function">npm</span> view <span class="token operator">&lt;</span>包名<span class="token operator">&gt;</span>						<span class="token comment">#查看依赖包的所有的版本号</span>


<span class="token function">npm</span> cache clean <span class="token parameter variable">--force</span>		<span class="token comment">#清除npm的缓存（防止上次安装断开导致此次无法正常安装）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="package-json的使用" tabindex="-1"><a class="header-anchor" href="#package-json的使用"><span>package.json的使用</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> init <span class="token parameter variable">-y</span>									<span class="token comment">#初始化package.json文件，-y为默认生成</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token parameter variable">--save</span>		<span class="token comment">#安装并写入package.json</span>
<span class="token function">npm</span> <span class="token function">install</span> lodash --save-dev	<span class="token comment">#安装并写入package.json的dev环境上</span>


<span class="token function">npm</span> i <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token parameter variable">-S</span> <span class="token comment">#安装并写入package.json的生产环境(&quot;dependencies&quot;:{})中，即只有生产环境才使用的包</span>
<span class="token function">npm</span> i <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token parameter variable">-D</span> <span class="token comment">#安装并写入package.json的开发环境(&quot;devDependencies&quot;:{})中，即只有开发环境才使用的包</span>
<span class="token function">npm</span> i <span class="token parameter variable">--production</span>				<span class="token comment">#安装package.json中指定环境的版本包(生产环境)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="更新本地安装依赖包的版本" tabindex="-1"><a class="header-anchor" href="#更新本地安装依赖包的版本"><span>更新本地安装依赖包的版本</span></a></h4><p><strong>依赖包中的版本号<code>~、^、*</code></strong></p><ul><li>*<em>空表示patch；~表示minor； ^表示major ；<em>表示最新版本</em></em></li><li><code>包名~2.0.0</code>：表示依赖包配置的版本号为2.0.0</li><li><code>包名^2.0.0</code>：表示依赖包配置的版本号最低要求为2.0.0</li><li><code>包名*</code>：表示依赖包配置版本号是最新的</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> info underscore
$ <span class="token function">npm</span> view underscore versions
$ <span class="token function">npm</span> <span class="token function">install</span> underscore@1.4.4 --save-dev
$ <span class="token function">npm</span> list <span class="token operator">|</span> <span class="token function">grep</span> gulp

$ <span class="token function">npm</span> outdated 					<span class="token comment">#查看过期的包</span>

$ <span class="token function">npm</span> list <span class="token operator">|</span> <span class="token function">grep</span> gulp

$ <span class="token function">npm</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="npm-install去哪获取模块" tabindex="-1"><a class="header-anchor" href="#npm-install去哪获取模块"><span>npm install去哪获取模块？</span></a></h4><ul><li>npm配置有仓库地址，install时都会从仓库地址中找模块。默认的仓库地址是：<code>https://registry.npmjs.org/</code>，可配置默本地默认的npm仓库下载地址：<code>npm config set registry http://ggjs-app-03.hnisi.com.cn:8090</code></li></ul><h4 id="淘宝npm镜像" tabindex="-1"><a class="header-anchor" href="#淘宝npm镜像"><span>淘宝NPM镜像</span></a></h4><ol><li>使用淘宝镜像：<code>npm install -g cnpm --registry=http://registry.npm.taobao.org</code></li><li>安装模块：<code>cnpm install [name]</code></li><li>创建模块：nodejs模块就是发布到npm的代码块。 <ol><li>首先利用<code>npm init</code>命令创建package.json，这个过程中命令行会逐步提示你输入这个模块的信息，其中模块的名字和版本号是必填项。</li></ol></li></ol><h4 id="国内镜像-国内加速访问github" tabindex="-1"><a class="header-anchor" href="#国内镜像-国内加速访问github"><span>国内镜像（国内加速访问GitHub）</span></a></h4><p><strong>Windows：</strong></p><div class="language-hosts文件 line-numbers-mode" data-ext="hosts文件" data-title="hosts文件"><pre class="language-hosts文件"><code> //Hosts文件位于C:\\Windows\\System32\\drivers\\etc
//1、将下面的信息添加到Hosts文件中，保存
140.82.114.3		github.com
199.232.69.194	github.global.ssl.fastly.net
151.101.192.133 raw.githubusercontent.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cmd命令 line-numbers-mode" data-ext="cmd命令" data-title="cmd命令"><pre class="language-cmd命令"><code>//2、更新DNS缓存
ipconfig /flushdns
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Linux：</strong></p><div class="language-命令行 line-numbers-mode" data-ext="命令行" data-title="命令行"><pre class="language-命令行"><code>//1、编辑Hosts文件
vi /etc/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vi文本 line-numbers-mode" data-ext="vi文本" data-title="vi文本"><pre class="language-vi文本"><code> //2、按i进入编辑模式，插入如下文本
 140.82.114.3		github.com
199.232.69.194	github.global.ssl.fastly.net
151.101.192.133 raw.githubusercontent.com

//3、按Esc键退出编辑模式，输入:wq!保存退出。
//4、重启机器或者重启服务使Hosts生效
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn"><span>Yarn</span></a></h3><p><strong>概念</strong></p><ul><li>Yarm是一个由Facebook、Google、exponent和tilde构建的新的JavaScript包管理器。目标是解决npm所遇的问题：安装包不够快速和稳定；因npm允许包在安装时运行代码导致存在安全隐患。</li><li>Yarm不能完全替代npm。Yarm仅仅是一个能够从npm仓库获取模块的新的CLI客户端。</li><li>特点：速度超快(yarm缓存每个下载过的包，再次使用无需重复下载)；安全(在执行代码前，yarm会通过算法校检每个安装包的完整性)；可靠(使用详细、简介的锁文件格式和明确的安装算法，Yarm能保证在不同系统上无差异工作)</li></ul><h3 id="nvm" tabindex="-1"><a class="header-anchor" href="#nvm"><span>NVM</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## NVM </span>
在开发的工程中，我们可能需要经常切换node版本来应对不同的开发环境，所以需要经常使用不同版本的node


<span class="token comment">### 一、安装npm插件n ,通过n模块来管理node版本</span>
<span class="token number">1</span>、全局安装n模块
<span class="token function">npm</span> instlal <span class="token parameter variable">-g</span> n
<span class="token number">2</span>、安装当前稳定版本
n stable或者sudo n stable
<span class="token number">3</span>、安装最新版本的
n latest或者sudo n latest
<span class="token number">4</span>、安装指定版本的node
n v8.16.0
<span class="token number">5</span>、卸载指定的node版本
n <span class="token function">rm</span> v8.16.0


<span class="token comment">### 二、使用nvm管理node版本</span>
<span class="token number">1</span>、安装nvm
brew <span class="token function">install</span> nvm

<span class="token number">2</span>、使用nvm安装node版本
- 安装最新版本
	nvm isntall <span class="token function">node</span>

- 安装指定版本
	nvm <span class="token function">install</span> <span class="token number">8.16</span>.0
	
<span class="token number">3</span>、查看所有版本
nvm <span class="token function">ls</span>

<span class="token number">4</span>、切换node版本
- 使用最新版本
	nvm use <span class="token function">node</span>
- 使用指定版本
nvm use <span class="token number">10.16</span>.2

<span class="token number">5</span>. 案例
通常会使用第二种方式
例如：在一个项目中使用的是node@6.13.2,新项目使用的是node@8.16.0,
先要安装node@8.16.0：	nvm <span class="token function">install</span> <span class="token number">8.16</span>.0，
然后，nvm use <span class="token number">8.16</span>.0


<span class="token comment">### NVM 使用</span>
nvm list	<span class="token comment">#查看所有安装版本</span>
nvm use <span class="token number">12.13</span>.1		<span class="token comment">#切换指定版本</span>
nvm uninstall <span class="token number">12.13</span>.1	<span class="token comment">#卸载指定版本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nrm" tabindex="-1"><a class="header-anchor" href="#nrm"><span>NRM</span></a></h3><ul><li>NRM(<code>npm registry manager</code>)是npm的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在 npm 源间切换。</li></ul><h4 id="手工切换源-镜像" tabindex="-1"><a class="header-anchor" href="#手工切换源-镜像"><span>手工切换源（镜像）</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#1.查看当前源</span>
<span class="token function">npm</span> config get registry

<span class="token comment">#2.切换淘宝源</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org

<span class="token comment">#3.切换nrm  --&gt;nrm use 源名</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="管理源" tabindex="-1"><a class="header-anchor" href="#管理源"><span>管理源</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#1.安装nrm</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> nrm

<span class="token comment">#2.查看所拥有的源</span>
<span class="token comment">#执行命令 nrm ls 查看可选的源。 其中，带*的是当前使用的源，上面的输出表明当前源是官方源。</span>
nrm <span class="token function">ls</span>

<span class="token comment">#3.切换nrm  --&gt;nrm use 源名</span>
nrm use <span class="token function">npm</span>			<span class="token comment">#切换到https://registry.npmjs.org/</span>
nrm use lesso		<span class="token comment">#切换到http://nexus.lesso.com/nexus/content/groups/npm/</span>
nrm use taobao	<span class="token comment">#切换到 https://registry.npm.taobao.org/</span>

<span class="token comment">#添加用户/账号</span>
<span class="token function">npm</span> adduser

<span class="token comment">#测试源的响应时间</span>
nrm <span class="token builtin class-name">test</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上传自己的包" tabindex="-1"><a class="header-anchor" href="#上传自己的包"><span>上传自己的包</span></a></h3><h6 id="_1-编写模块" tabindex="-1"><a class="header-anchor" href="#_1-编写模块"><span>1 编写模块</span></a></h6><p>保存为index.js</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>exports<span class="token punctuation">.</span><span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
  <span class="token keyword">return</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2-初始化包描述文件" tabindex="-1"><a class="header-anchor" href="#_2-初始化包描述文件"><span>2 初始化包描述文件</span></a></h6><p>$ npm init package.json</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span> 
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gp19-npm&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.1&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gp19 self module&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;make test&quot;</span> 
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;repository&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Git&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git+https://github.com/lurongtao/gp19-npm.git&quot;</span> 
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> 
        <span class="token string">&quot;demo&quot;</span> 
    <span class="token punctuation">]</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Felixlu&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;bugs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://github.com/lurongtao/gp19-npm/issues&quot;</span> 
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;homepage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://github.com/lurongtao/gp19-npm#readme&quot;</span><span class="token punctuation">,</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_3-注册npm仓库账号" tabindex="-1"><a class="header-anchor" href="#_3-注册npm仓库账号"><span>3 注册npm仓库账号</span></a></h6><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>https://www.npmjs.com
felix_lurt/qq
$ npm adduser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_4-上传包" tabindex="-1"><a class="header-anchor" href="#_4-上传包"><span>4 上传包</span></a></h6><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ npm publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>坑：403 Forbidden</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>查看npm源：npm config get registry
切换npm源方法一：npm config <span class="token builtin class-name">set</span> registry http://registry.npmjs.org
切换npm源方法二：nrm use <span class="token function">npm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_5-安装包" tabindex="-1"><a class="header-anchor" href="#_5-安装包"><span>5 安装包</span></a></h6><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ npm install gp19-npm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="_6-卸载包" tabindex="-1"><a class="header-anchor" href="#_6-卸载包"><span>6 卸载包</span></a></h6><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>查看当前项目引用了哪些包 ：
npm ls
卸载包：
npm unpublish --force
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_7-使用引入包" tabindex="-1"><a class="header-anchor" href="#_7-使用引入包"><span>7 使用引入包</span></a></h6><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var hello = require(&#39;gp19-npm&#39;)
hello.sayHello()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="npm安装git上发布的包" tabindex="-1"><a class="header-anchor" href="#npm安装git上发布的包"><span>npm安装git上发布的包</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 这样适合安装公司内部的git服务器上的项目</span>
<span class="token function">npm</span> <span class="token function">install</span> git+https://git@github.com:lurongtao/gp-project.git

<span class="token comment"># 或者以ssh的方式</span>
<span class="token function">npm</span> <span class="token function">install</span> git+ssh://git@github.com:lurongtao/gp-project.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="npm脚本" tabindex="-1"><a class="header-anchor" href="#npm脚本"><span>npm脚本</span></a></h3><ul><li>npm允许在package.json文件里面，使用<code>scripts</code>字段定义脚本命令。</li><li>如果npm脚本里面需要执行多个任务，就需要明确他们的执行顺序。 <ul><li>如果是并行执行（即同时的平行执行），可以使用 <code>&amp;</code> 符号。<code>npm run script1 &amp; npm run script2</code></li><li>如果是继发执行（即只有前一个任务成功，才执行下一个任务），可以使用 <code>&amp;&amp;</code> 符号。<code>npm run script1 &amp;&amp; npm run script2</code></li></ul></li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;script1&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node script1.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;script2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node script2.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="npm变量" tabindex="-1"><a class="header-anchor" href="#npm变量"><span>npm变量</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### npm 变量</span>
- <span class="token function">npm</span> 脚本可以使用 <span class="token function">npm</span> 的内部变量。
- 通过 <span class="token variable"><span class="token variable">\`</span>npm_package_<span class="token variable">\`</span></span> 前缀， <span class="token function">npm</span> 脚本可以拿到 package.json 里面的字段。
	注意：一定要在 <span class="token function">npm</span> 脚本中运行才可以<span class="token punctuation">(</span>如 <span class="token variable"><span class="token variable">\`</span><span class="token function">npm</span> run view<span class="token variable">\`</span></span><span class="token punctuation">)</span>，直接在命令行中运行 JS 是拿不到值的<span class="token punctuation">(</span>如 <span class="token variable"><span class="token variable">\`</span><span class="token function">node</span> view.js<span class="token variable">\`</span></span><span class="token punctuation">)</span>。
- 通过环境变量 <span class="token variable"><span class="token variable">\`</span>process.env<span class="token variable">\`</span></span> 对象，拿到 <span class="token variable"><span class="token variable">\`</span>package.json<span class="token variable">\`</span></span> 的字段值。如果是 Bash 脚本，可以使用 <span class="token variable"><span class="token variable">\`</span>$npm_package_name<span class="token variable">\`</span></span> 和 <span class="token variable"><span class="token variable">\`</span>$npm_package_version<span class="token variable">\`</span></span> 取到这两个值。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>取值案例</strong></p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token comment">// 以下为 pageage.json 文件内容</span>

<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.2.5&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node view.js&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>npm_package_name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// foo</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>npm_package_version<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1.2.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="npx" tabindex="-1"><a class="header-anchor" href="#npx"><span>NPX</span></a></h3><ul><li>NPX(npm package extention)想要解决的主要问题是<strong>调用项目内部安装的模块</strong>。</li><li>Node 自带 npm 模块，所以可以直接使用 npx 命令。万一不能用，就要手动安装一下<code>npm install -g npx</code></li></ul><h4 id="避免全局安装模块" tabindex="-1"><a class="header-anchor" href="#避免全局安装模块"><span>避免全局安装模块</span></a></h4><p>除了调用项目内部模块，npx 还能避免全局安装的模块。比如，<code>create-react-app</code>这个模块是全局安装，npx 可以运行它，而且不进行全局安装。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ npx create-react-app my-react-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>上面代码运行时，npx 将<code>create-react-app</code>下载到一个临时目录，使用以后再删除。所以，以后再次执行上面的命令，会重新下载<code>create-react-app</code>。</p><p>下载全局模块时，npx 允许指定版本。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ npx uglify-js@3.1.0 main.js <span class="token parameter variable">-o</span> ./dist/main.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>上面代码指定使用 3.1.0 版本的<code>uglify-js</code>压缩脚本。</p><p>注意，只要 npx 后面的模块无法在本地发现，就会下载同名模块。比如，本地没有安装<code>http-server</code>模块，下面的命令会自动下载该模块，在当前目录启动一个 Web 服务。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ npx http-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h4 id="no-install-参数和-ignore-existing-参数" tabindex="-1"><a class="header-anchor" href="#no-install-参数和-ignore-existing-参数"><span><code>--no-install</code> 参数和<code>--ignore-existing</code> 参数</span></a></h4><p>如果想让 npx 强制使用本地模块，不下载远程模块，可以使用<code>--no-install</code>参数。如果本地不存在该模块，就会报错。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ npx --no-install http-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>反过来，如果忽略本地的同名模块，强制安装使用远程模块，可以使用<code>--ignore-existing</code>参数。比如，本地已经全局安装了<code>create-react-app</code>，但还是想使用远程模块，就用这个参数。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ npx --ignore-existing create-react-app my-react-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h4 id="使用不同版本的-node" tabindex="-1"><a class="header-anchor" href="#使用不同版本的-node"><span>使用不同版本的 node</span></a></h4><p>利用 npx 可以下载模块这个特点，可以指定某个版本的 Node 运行脚本。它的窍门就是使用 npm 的 node 模块。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ npx node@0.12.8 <span class="token parameter variable">-v</span>
v0.12.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面命令会使用 0.12.8 版本的 Node 执行脚本。原理是从 npm 下载这个版本的 node，使用后再删掉。</p><p>某些场景下，这个方法用来切换 Node 版本，要比 nvm 那样的版本管理器方便一些。</p><h4 id="p-参数" tabindex="-1"><a class="header-anchor" href="#p-参数"><span><code>-p</code> 参数</span></a></h4><p><code>-p</code>参数用于指定 npx 所要安装的模块。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ npx <span class="token parameter variable">-p</span> node@0.12.8 <span class="token function">node</span> <span class="token parameter variable">-v</span> 
v0.12.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面命令先指定安装<code>node@0.12.8</code>，然后再执行<code>node -v</code>命令。</p><p><code>-p</code>参数对于需要安装多个模块的场景很有用。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ npx <span class="token parameter variable">-p</span> lolcatjs <span class="token parameter variable">-p</span> cowsay <span class="token punctuation">[</span>command<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h4 id="c-参数" tabindex="-1"><a class="header-anchor" href="#c-参数"><span>-c 参数</span></a></h4><p>如果 npx 安装多个模块，默认情况下，所执行的命令之中，只有第一个可执行项会使用 npx 安装的模块，后面的可执行项还是会交给 Shell 解释。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ npx <span class="token parameter variable">-p</span> lolcatjs <span class="token parameter variable">-p</span> cowsay <span class="token string">&#39;cowsay hello | lolcatjs&#39;</span>
<span class="token comment"># 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面代码中，<code>cowsay hello | lolcatjs</code>执行时会报错，原因是第一项<code>cowsay</code>由 npx 解释，而第二项命令<code>localcatjs</code>由 Shell 解释，但是<code>lolcatjs</code>并没有全局安装，所以报错。</p><p><code>-c</code>参数可以将所有命令都用 npx 解释。有了它，下面代码就可以正常执行了。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ npx <span class="token parameter variable">-p</span> lolcatjs <span class="token parameter variable">-p</span> cowsay <span class="token parameter variable">-c</span> <span class="token string">&#39;cowsay hello | lolcatjs&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><code>-c</code>参数的另一个作用，是将环境变量带入所要执行的命令。举例来说，npm 提供当前项目的一些环境变量，可以用下面的命令查看。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> run <span class="token function">env</span> <span class="token operator">|</span> <span class="token function">grep</span> npm_
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><code>-c</code>参数可以把这些 npm 的环境变量带入 npx 命令。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ npx <span class="token parameter variable">-c</span> <span class="token string">&#39;echo &quot;$npm_package_name&quot;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>上面代码会输出当前项目的项目名。</p><h4 id="执行-github-源码" tabindex="-1"><a class="header-anchor" href="#执行-github-源码"><span>执行 GitHub 源码</span></a></h4><p>npx 还可以执行 GitHub 上面的模块源码。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 执行 Gist 代码</span>
$ npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32

<span class="token comment"># 执行仓库代码</span>
$ npx github:piuccio/cowsay hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>注意，远程代码必须是一个模块，即必须包含<code>package.json</code>和入口脚本。</p><h2 id="cross-env" tabindex="-1"><a class="header-anchor" href="#cross-env"><span>cross-env</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## cross-env</span>
- cross-env 是运行跨平台设置和使用环境变量的脚本。cross-env 使得可以使用单个命令而不必担心为平台正确设置或使用环境变量。

- 出现原因：当使用如 <span class="token variable"><span class="token variable">\`</span><span class="token assign-left variable">NODE_ENV</span><span class="token operator">=</span>production<span class="token variable">\`</span></span> 来设置环境变量时，大多数 Windows 命令提示符将会阻塞<span class="token punctuation">(</span>报错<span class="token punctuation">)</span>。（异常是Windows上的 Bash 是使用本机 Bash。即 Windows 不支持 <span class="token variable"><span class="token variable">\`</span><span class="token assign-left variable">NODE_ENV</span><span class="token operator">=</span>production<span class="token variable">\`</span></span> 的设置方式）

- 安装：<span class="token variable"><span class="token variable">\`</span><span class="token function">npm</span> i --save-dev cross-env<span class="token variable">\`</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 在Windows中</span>
    <span class="token comment">#node中常用的到的环境变量是NODE_ENV，首先查看是否存在 </span>
    <span class="token builtin class-name">set</span> NODE_ENV 

    <span class="token comment">#如果不存在则添加环境变量 </span>
    <span class="token builtin class-name">set</span> <span class="token assign-left variable">NODE_ENV</span><span class="token operator">=</span>production 

    <span class="token comment">#环境变量追加值 set 变量名=%变量名%;变量内容 </span>
    <span class="token builtin class-name">set</span> <span class="token assign-left variable">path</span><span class="token operator">=</span>%path%<span class="token punctuation">;</span>C:<span class="token punctuation">\\</span>web<span class="token punctuation">;</span>C:<span class="token punctuation">\\</span>Tools 

    <span class="token comment">#某些时候需要删除环境变量 </span>
    <span class="token builtin class-name">set</span> <span class="token assign-left variable">NODE_ENV</span><span class="token operator">=</span>


<span class="token comment"># 在linux中配置</span>
    <span class="token comment">#node中常用的到的环境变量是NODE_ENV，首先查看是否存在</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$NODE_ENV</span>

    <span class="token comment">#如果不存在则添加环境变量</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">NODE_ENV</span><span class="token operator">=</span>production

    <span class="token comment">#环境变量追加值</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">path</span><span class="token operator">=</span><span class="token variable">$path</span>:/home/download:/usr/local/

    <span class="token comment">#某些时候需要删除环境变量</span>
    <span class="token builtin class-name">unset</span> NODE_ENV

    <span class="token comment">#某些时候需要显示所有的环境变量</span>
    <span class="token function">env</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装依赖问题" tabindex="-1"><a class="header-anchor" href="#安装依赖问题"><span>安装依赖问题</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### ETIMEDOUT</span>
问题：connect ETIMEDOUT <span class="token number">104.16</span>.26.34:443

解决方案：
<span class="token number">1</span>. 清除缓存
$ <span class="token function">npm</span> config <span class="token builtin class-name">set</span> proxy <span class="token boolean">false</span>

<span class="token number">2</span>. 如果报错，继续强制清除
$ <span class="token function">npm</span> cache clean <span class="token parameter variable">--force</span>

<span class="token number">3</span>. 重新执行安装步骤
$ <span class="token function">npm</span> i

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块化-commonjs" tabindex="-1"><a class="header-anchor" href="#模块化-commonjs"><span>模块化 CommonJS</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 模块化</span>
- nodejs 是一种 javascript 的运行环境，能够使得 javascript 脱离浏览器运行。
- <span class="token function">node</span> 的加载机制：node 会把整个待加载的 js 文件放入一个包装 load 中执行。在执行整个 load 函数前Node 会调用 module 变量。
- 模块化的好处：防止命名冲突、高复用性、高维护性。


<span class="token comment">### CommonJS</span>
CommonJS 是 NodeJS 使用的模块化规范。
CommonJS 规范规定：每个模块内部，module 变量代表当前模块。这个变量是一个对象，它的 exports 属性（即<span class="token variable"><span class="token variable">\`</span>module.exports<span class="token variable">\`</span></span>）是对外的接口对象。加载某个模块其实是加载该模块的 <span class="token variable"><span class="token variable">\`</span>module.exports<span class="token variable">\`</span></span> 对象。

在 CommonJS 中每个文件都可以当作一个模块：
  - 在服务端：模块的加载是运行时同步加载的。
  - 在客户端：模块需要提前编译打包处理。因为同步容易引起阻塞，且浏览器不认识 require 语法，因此需要提前编译打包。
- 不限node版本的情况下，如果不声明严格模式<span class="token variable"><span class="token variable">\`</span>&#39;use strict&#39;<span class="token punctuation">;</span><span class="token variable">\`</span></span>，往往es6语法不支持启动。


<span class="token comment">### 模块暴露：exports 和 module.exports 的区别</span>
- 模块暴露数据的方式有两种：
    <span class="token number">1</span>. module.exports <span class="token operator">=</span> value
    <span class="token number">2</span>. exports.propName <span class="token operator">=</span> value

- Node 中每个模块的最后都会执行 <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">return</span> module.exports<span class="token variable">\`</span></span>。
- Node 中每个模块都会把 module.exports 指向的对象赋值给一个变量 exports，并且初始化为空对象<span class="token variable"><span class="token variable">\`</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token variable">\`</span></span>。
		- 即存在隐式关系：<span class="token variable"><span class="token variable">\`</span>exports <span class="token operator">=</span> module.exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token variable">\`</span></span>。
		- 不能使用 <span class="token variable"><span class="token variable">\`</span>exports <span class="token operator">=</span> value<span class="token variable">\`</span></span> 的形式暴露数据的原因：在通过 require 引入数据时，是引用 module.exports 里面的数据，<span class="token variable"><span class="token variable">\`</span>exports <span class="token operator">=</span> value<span class="token variable">\`</span></span> 不能让 module.exports 里面的数据发生变化。
		- 能使用  <span class="token variable"><span class="token variable">\`</span>exports.propName <span class="token operator">=</span> value<span class="token variable">\`</span></span> 的形式暴露数据的原因： 因为 module.exports 和 exports 通过隐式赋值关系来共用了同一个对象的内存空间，所以在 <span class="token variable"><span class="token variable">\`</span>exports.propName <span class="token operator">=</span> value<span class="token variable">\`</span></span> 修改属性值时 module.exports 也会同时改变值。



<span class="token comment">### 引入模块的方式：require</span>
- <span class="token variable"><span class="token variable">\`</span>const module1 <span class="token operator">=</span> require<span class="token punctuation">(</span><span class="token string">&#39;模块名&#39;</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>
    - 内置模块：require 的是包名。
    - 下载的第三方模块：require 的是包名（会自动在 node_modules 中寻找相应的模块）
    - 自定义模块：require 的是文件路径。文件路径既可以用绝对路径，也可以用相对路径。后缀名 <span class="token variable"><span class="token variable">\`</span>.js<span class="token variable">\`</span></span> 可以省略。
    
- require<span class="token punctuation">(</span><span class="token punctuation">)</span> 函数的两个作用：
		- 执行导入的模块中的对象。
		- 返回导入模块中的接口对象。

- 导入自定义模块的流程
    <span class="token number">1</span>. 将相对路径转为绝对路径，定位目标文件。
    <span class="token number">2</span>. 缓存检测（查看之前是否加载过该目标文件，如果加载则取缓存的，无需再次加载）。
    <span class="token number">3</span>. 读取目标文件代码。
    <span class="token number">4</span>. 包裹成一个立即执行函数（可通过 <span class="token variable"><span class="token variable">\`</span>arguments.callee.toString<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 查看自执行函数）。
    <span class="token number">5</span>. 缓存模块的值。
    <span class="token number">6</span>. 返回 module.exports 的值。



<span class="token comment">### 自定义模块导入目录的加载规则</span>
- 在目录中放置一个<span class="token variable"><span class="token variable">\`</span>package.json<span class="token variable">\`</span></span>文件，并且将入口文件写入<span class="token variable"><span class="token variable">\`</span>main<span class="token variable">\`</span></span>字段。
- 如果 require 传入的参数字符串是指向一个目录，则会首先检测该目录的<span class="token variable"><span class="token variable">\`</span>package.json<span class="token variable">\`</span></span>文件中 <span class="token variable"><span class="token variable">\`</span>main<span class="token variable">\`</span></span> 属性对应的文件，然后加载<span class="token variable"><span class="token variable">\`</span>main<span class="token variable">\`</span></span> 字段指定的入口文件。如果 main 属性不存在，或者不存在 package.json 文件，则会检测加载目录下的 <span class="token variable"><span class="token variable">\`</span>index.js<span class="token variable">\`</span></span> 和 <span class="token variable"><span class="token variable">\`</span>index.json<span class="token variable">\`</span></span> 文件，如果还是没找到，则会报错。


<span class="token comment">#### 模块的缓存</span>
- 第一次加载某个模块时，Node会缓存该模块。以后再加载该模块，就直接从缓存取出该模块的<span class="token variable"><span class="token variable">\`</span>module.exports<span class="token variable">\`</span></span>属性。


<span class="token comment">### 清除模块缓存</span>
- 所有缓存的模块保存在<span class="token variable"><span class="token variable">\`</span>require.cache<span class="token variable">\`</span></span>之中
- 注意，缓存是根据绝对路径识别模块的，如果同样的模块名，但是保存在不同的路径，<span class="token variable"><span class="token variable">\`</span>require<span class="token variable">\`</span></span>命令还是会重新加载该模块。

    // 删除指定模块的缓存
    delete require.cache<span class="token punctuation">[</span>moduleName<span class="token punctuation">]</span><span class="token punctuation">;</span>

    // 删除所有模块的缓存
    Object.keys<span class="token punctuation">(</span>require.cache<span class="token punctuation">)</span>.forEach<span class="token punctuation">((</span>key<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
      delete require.cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入模块原理" tabindex="-1"><a class="header-anchor" href="#导入模块原理"><span>导入模块原理</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 模块导入 伪代码
 */</span>
<span class="token keyword">function</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. 将相对路径转化为绝对路径，定位目标文件</span>
    <span class="token keyword">const</span> absolutePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> file<span class="token punctuation">)</span>

    <span class="token comment">// 2. 缓存检测（查看之前是否加载过该目标文件，如果加载则取缓存的，无需再次加载）</span>
    <span class="token keyword">const</span> caches <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>caches<span class="token punctuation">[</span>absolutePath<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> caches<span class="token punctuation">[</span>absolutePath<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 3. 读取目标文件代码</span>
    <span class="token keyword">const</span> code <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>absolutePath<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> module <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">const</span> exports <span class="token operator">=</span> <span class="token punctuation">(</span>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 4. 包裹成一个立即执行函数</span>
    <span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">exports<span class="token punctuation">,</span> require<span class="token punctuation">,</span> module<span class="token punctuation">,</span> __filename<span class="token punctuation">,</span> __dirname</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> test <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;willy&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        module<span class="token punctuation">.</span>exports <span class="token operator">=</span> test
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">.</span>callee<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span> require<span class="token punctuation">,</span> module<span class="token punctuation">,</span> __filename<span class="token punctuation">,</span> __dirname<span class="token punctuation">)</span>

    <span class="token comment">// 5. 缓存模块的值</span>
    caches<span class="token punctuation">[</span>absolutePath<span class="token punctuation">]</span> <span class="token operator">=</span> module<span class="token punctuation">.</span>exports

    <span class="token comment">// 6. 返回 module.exports 的值</span>
    <span class="token keyword">return</span> module<span class="token punctuation">.</span>exports
<span class="token punctuation">}</span>

<span class="token keyword">const</span> m1 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./tsconfig.json&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> m2 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./tsconfig.json&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 此时取缓存的，不会执行里面首次执行的内容</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局对象-global" tabindex="-1"><a class="header-anchor" href="#全局对象-global"><span>全局对象 global</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 全局对象 global</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="操作路径-path" tabindex="-1"><a class="header-anchor" href="#操作路径-path"><span>操作路径 path</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 操作路径：path</span>
<span class="token variable"><span class="token variable">\`</span>const path <span class="token operator">=</span> require<span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token variable">\`</span></span>

常用API
    - 拼接规范的绝对路径：<span class="token variable"><span class="token variable">\`</span>path.resolve<span class="token variable">\`</span></span>
    - 获取操作系统的路径分隔符：<span class="token variable"><span class="token variable">\`</span>path.sep<span class="token variable">\`</span></span>
    - 解析路径并返回对象：<span class="token variable"><span class="token variable">\`</span>path.parse<span class="token variable">\`</span></span>
    - 获取路径的基础名称：<span class="token variable"><span class="token variable">\`</span>path.basename<span class="token variable">\`</span></span>
    - 获取路径的目录名：<span class="token variable"><span class="token variable">\`</span>path.dirname<span class="token variable">\`</span></span>
    - 获取路径的扩展名：<span class="token variable"><span class="token variable">\`</span>path.extname<span class="token variable">\`</span></span>



<span class="token comment">### __dirname</span>
<span class="token variable"><span class="token variable">\`</span>__dirname<span class="token variable">\`</span></span> 是 nodejs 中的一个全局变量，表示当前模块所在的目录的绝对路径。
例如，如果一个 Node.js 模块位于 <span class="token variable"><span class="token variable">\`</span>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>username<span class="token punctuation">\\</span>projects<span class="token punctuation">\\</span>myapp<span class="token punctuation">\\</span>index.js<span class="token variable">\`</span></span>，那么在该模块中访问 __dirname 变量的值为 <span class="token variable"><span class="token variable">\`</span>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>username<span class="token punctuation">\\</span>projects<span class="token punctuation">\\</span>myapp<span class="token variable">\`</span></span>。
__dirname 变量通常用于构建文件路径，比如读取文件、写入文件、加载模块等。使用 <span class="token variable"><span class="token variable">\`</span>__dirname<span class="token variable">\`</span></span> 变量可以确保路径的正确性，避免出现相对路径错误。
注意：<span class="token variable"><span class="token variable">\`</span>__dirname<span class="token variable">\`</span></span> 变量不是全局变量的一部分，而是每个模块独有的局部变量。因此在模块中使用 <span class="token variable"><span class="token variable">\`</span>__dirname<span class="token variable">\`</span></span> 变量时，不需要使用 <span class="token variable"><span class="token variable">\`</span>global<span class="token variable">\`</span></span> 对象或 <span class="token variable"><span class="token variable">\`</span>require<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 方法进行导入。


<span class="token comment">### 相对路径和绝对路径问题</span>
- 相对路径参照物：命令执行的工作目录（即在不同目录下执行命令，则会把当前的工作目录下作为参照物，因而会导致路径的不稳定性（特别是会导致生成/读取文件所在目录））。
- 绝对路径<span class="token string">&#39;全局变量&#39;</span>保存的是：所在文件的所在目录的绝对路径。

- 会导致生成文件目录不确定性：<span class="token variable"><span class="token variable">\`</span>fs.writeFileSync<span class="token punctuation">(</span><span class="token string">&#39;./index.html&#39;</span>, <span class="token string">&#39;love&#39;</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>
- 稳定生成在该文件夹下：<span class="token variable"><span class="token variable">\`</span>fs.writeFileSync<span class="token punctuation">(</span>__dirname + <span class="token string">&#39;/index.html&#39;</span>, <span class="token string">&#39;love&#39;</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>


<span class="token comment">### 相对路径和绝对路径的转化</span>
<span class="token number">1</span>. 绝对路径
- <span class="token variable"><span class="token variable">\`</span>https://www.baidu.com<span class="token variable">\`</span></span>：完整的url地址，直接跳转。
- <span class="token variable"><span class="token variable">\`</span>//jd.com<span class="token variable">\`</span></span>：会获取网站上的的协议名称拼接然后再跳转。如现在的网站是 <span class="token variable"><span class="token variable">\`</span>http://test.com<span class="token variable">\`</span></span>，则打开这个链接会拼接成 <span class="token variable"><span class="token variable">\`</span>http://jd.com<span class="token variable">\`</span></span>，但因为 jd 会对 <span class="token variable"><span class="token variable">\`</span>http://jd.com<span class="token variable">\`</span></span> 进行 <span class="token number">301</span> 重定向，所以导致页面上显示的是 <span class="token variable"><span class="token variable">\`</span>https://jd.com<span class="token variable">\`</span></span>。
- <span class="token variable"><span class="token variable">\`</span>/search<span class="token variable">\`</span></span>：会获取网站上的协议名称、域名、端口号跟这个路径进行拼接。如现在的网站是 <span class="token variable"><span class="token variable">\`</span>http://test.com<span class="token variable">\`</span></span>，则打开这个链接会拼接成 <span class="token variable"><span class="token variable">\`</span>http://test.com/search<span class="token variable">\`</span></span>。

<span class="token number">2</span>. 相对路径
会根据原来的网站来进行相应的回退和前进来拼接，当页面的url错误时，会以网站的初始地址为基准。如现在的网站是 <span class="token variable"><span class="token variable">\`</span>http://test.com/demo1/index.html<span class="token variable">\`</span></span>：
    - <span class="token variable"><span class="token variable">\`</span>./css/index.css<span class="token variable">\`</span></span>：跳转 <span class="token variable"><span class="token variable">\`</span>http://test.com/demo1/css/index.css<span class="token variable">\`</span></span>。
    - <span class="token variable"><span class="token variable">\`</span>js/index.js<span class="token variable">\`</span></span>：跳转 <span class="token variable"><span class="token variable">\`</span>http://test.com/demo1/js/index.js<span class="token variable">\`</span></span>。
    - <span class="token variable"><span class="token variable">\`</span><span class="token punctuation">..</span>/img/logo.jpg<span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 跳转 <span class="token variable"><span class="token variable">\`</span>http://test.com/img/logo.jpg<span class="token variable">\`</span></span>。
    - <span class="token variable"><span class="token variable">\`</span><span class="token punctuation">..</span>/<span class="token punctuation">..</span>/img/logo.jpg<span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 跳转 <span class="token variable"><span class="token variable">\`</span>http://test.com/img/logo.jpg<span class="token variable">\`</span></span>。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** path.resolve() */</span>
<span class="token keyword">const</span> p1 <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./index.js&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> p2 <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;index.js&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> p3 <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;/index.js&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 这会回到根目录下</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3<span class="token punctuation">)</span>

<span class="token doc-comment comment">/** sep 分隔符 */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>sep<span class="token punctuation">)</span>   <span class="token comment">// window下为 \\，Linux下为 /</span>

<span class="token keyword">const</span> pathStr <span class="token operator">=</span> <span class="token string">&#39;C:\\\\Users\\\\OP0213\\\\Desktop\\\\core\\\\index.js&#39;</span>

<span class="token doc-comment comment">/** 文件分隔符：parse */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>pathStr<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 文件基础名称：basename */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>pathStr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// index.js</span>

<span class="token doc-comment comment">/** 文件的所在目录名称：dirname */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>pathStr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// C:\\Users\\OP0213\\Desktop\\core </span>

<span class="token doc-comment comment">/** 路径的扩展名：extname */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>pathStr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// .js</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件操作-fs" tabindex="-1"><a class="header-anchor" href="#文件操作-fs"><span>文件操作 fs</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 文件操作 fs</span>
<span class="token variable"><span class="token variable">\`</span>const fs <span class="token operator">=</span> require<span class="token punctuation">(</span>fs<span class="token punctuation">)</span><span class="token variable">\`</span></span>


<span class="token comment">### 同步与异步的取舍</span>
- 由于Node环境执行的JavaScript代码是服务器端代码，所以绝大部分需要在服务器运行期反复执行业务逻辑的代码**必须使用异步代码**，否则，同步代码在执行时期，服务器将停止响应，因为**JavaScript只有一个执行线程**。
- **服务器启动时**如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件读取" tabindex="-1"><a class="header-anchor" href="#文件读取"><span>文件读取</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 文件读取</span>
标准读取文件，是采取异步的方式读取的。
同步读取的函数和异步函数相比，函数需要加<span class="token variable"><span class="token variable">\`</span>Sync<span class="token variable">\`</span></span>后缀，并且不接收回调函数，函数直接返回结果。
并且如果同步读取文件发生错误，需要用<span class="token variable"><span class="token variable">\`</span>try<span class="token punctuation">..</span>.catch<span class="token variable">\`</span></span>捕获错误。


<span class="token comment">### 文件读取方法</span>
<span class="token number">1</span>. 异步读取：readFile
<span class="token number">2</span>. 同步读取：readFileSync
<span class="token number">3</span>. 流式读取：createReadStream


<span class="token comment">### 读取文件应用场景</span>
- 电脑开机
- 程序运行
- 编辑器打开文件
- 查看图片、聊天记录
- 播放视频、音乐
- 上传文件
- 查看 Git 提交记录



<span class="token comment">### 异步读取 readFile</span>
- <span class="token variable"><span class="token variable">\`</span>fs.readFile<span class="token punctuation">(</span>path<span class="token punctuation">[</span>, options<span class="token punctuation">]</span>, callback<span class="token punctuation">)</span><span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 异步(标准)读取文件</span>
fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&#39;test.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">// 同步读取文件</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;test.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件写入" tabindex="-1"><a class="header-anchor" href="#文件写入"><span>文件写入</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 文件写入</span>
将数据写入文件是通过<span class="token variable"><span class="token variable">\`</span>fs.writeFile<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>函数实现；同步写文件则是<span class="token variable"><span class="token variable">\`</span>writeFileSync<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>函数。
<span class="token variable"><span class="token variable">\`</span>writeFile<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>的参数依次为文件名、数据和回调函数。如果传入的数据是String，默认按UTF-8编码写入文本文件，如果传入的参数是<span class="token variable"><span class="token variable">\`</span>Buffer<span class="token variable">\`</span></span>，则写入的是二进制文件。回调函数由于只关心成功与否，因此只需要一个<span class="token variable"><span class="token variable">\`</span>err<span class="token variable">\`</span></span>参数。


<span class="token comment">### 文件写入的方法</span>
    <span class="token number">1</span>. 异步写入：writeFile
    <span class="token number">2</span>. 同步写入：writeFileSync
    <span class="token number">3</span>. 追加写入：appendFile、appendFileSync
    <span class="token number">4</span>. 流式写入：createWriteStram


<span class="token comment">### 写入文件的场景：（当需要持久化保存数据时，应该想到文件写入）</span>
    - 下载文件
    - 安装软件
    - 保存程序日志，如 Git
    - 编辑器保存文件
    - 视频录制


<span class="token comment">### 追加内容：appendFile</span>
- <span class="token variable"><span class="token variable">\`</span>fs.appendFile<span class="token punctuation">(</span>file, data<span class="token punctuation">[</span>, options<span class="token punctuation">]</span>, callback<span class="token punctuation">)</span><span class="token variable">\`</span></span>

fs.appendFile<span class="token punctuation">(</span><span class="token string">&#39;example.txt&#39;</span>, <span class="token string">&#39;Hello, world!\\n&#39;</span>, <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> throw err<span class="token punctuation">;</span>
  console.log<span class="token punctuation">(</span><span class="token string">&#39;内容已追加到文件&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">### 写入内容：writeFile</span>
- 实现在文件内追加内容：fs.writeFile<span class="token punctuation">(</span><span class="token string">&#39;/path&#39;</span>, <span class="token string">&#39;追加的内容&#39;</span>, <span class="token punctuation">{</span> flag: <span class="token string">&#39;a&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
- <span class="token variable"><span class="token variable">\`</span>fs.writeFile<span class="token punctuation">(</span>file, data<span class="token punctuation">[</span>, options<span class="token punctuation">]</span>, callback<span class="token punctuation">)</span><span class="token variable">\`</span></span>

fs.writeFile<span class="token punctuation">(</span><span class="token string">&#39;example.txt&#39;</span>, <span class="token string">&#39;Hello, world!&#39;</span>, <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> throw err<span class="token punctuation">;</span>
  console.log<span class="token punctuation">(</span><span class="token string">&#39;内容已写入文件&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">### 流式写入：createWriteStream</span>
注意：程序打开一个文件是需要消耗资源的，流失写入可以减少打开关闭文件的次数。
流式写入方式适用于大文件写入或者频繁写入的场景，writeFile 适用于写入频率较低的场景。
<span class="token variable"><span class="token variable">\`</span>fs.createWriteStream<span class="token punctuation">(</span>path<span class="token punctuation">[</span>, options<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>

const ws <span class="token operator">=</span> fs.createWriteStream<span class="token punctuation">(</span><span class="token string">&#39;./willy.txt&#39;</span><span class="token punctuation">)</span>
ws.write<span class="token punctuation">(</span><span class="token string">&#39;昨日晴空万里\\r\\n&#39;</span><span class="token punctuation">)</span>
ws.write<span class="token punctuation">(</span><span class="token string">&#39;今天依旧晴朗，风和日丽\\r\\n&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token string">&#39;Hello, Node.js&#39;</span>

fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">&#39;test.txt&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ok.&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;test.txt&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件信息状态-stat" tabindex="-1"><a class="header-anchor" href="#文件信息状态-stat"><span>文件信息状态 stat</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 文件信息资源状态 stat</span>
<span class="token variable"><span class="token variable">\`</span>fs.stat<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 或 <span class="token variable"><span class="token variable">\`</span>fs.statSync<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 可以获取文件大小，创建时间等信息，它返回一个<span class="token variable"><span class="token variable">\`</span>Stat<span class="token variable">\`</span></span>对象，能告诉我们文件或目录的详细信息。

语法：
	- <span class="token variable"><span class="token variable">\`</span>fs.stat<span class="token punctuation">(</span>path<span class="token punctuation">[</span>, options<span class="token punctuation">]</span>, callback<span class="token punctuation">)</span><span class="token variable">\`</span></span>
	- <span class="token variable"><span class="token variable">\`</span>fs.statSync<span class="token punctuation">(</span>path<span class="token punctuation">[</span>, options<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>

结果只对象结构：
    - 检测是否是文件 <span class="token variable"><span class="token variable">\`</span>isFile<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>
    - 检测是否是目录 <span class="token variable"><span class="token variable">\`</span>isDirectory<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>
    - 文件体积大小 <span class="token variable"><span class="token variable">\`</span>size<span class="token variable">\`</span></span>
    - 创建时间 <span class="token variable"><span class="token variable">\`</span>birthtime<span class="token variable">\`</span></span>
    - 最后修改时间 <span class="token variable"><span class="token variable">\`</span>mtime<span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>

fs<span class="token punctuation">.</span><span class="token function">stat</span><span class="token punctuation">(</span><span class="token string">&#39;./blog&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> stat</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;操作失败&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 是否是文件:</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;isFile: &#39;</span> <span class="token operator">+</span> stat<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token comment">// 是否是目录:</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;isDirectory: &#39;</span> <span class="token operator">+</span> stat<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>stat<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 文件大小:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;size: &#39;</span> <span class="token operator">+</span> stat<span class="token punctuation">.</span>size<span class="token punctuation">)</span>
    <span class="token comment">// 创建时间, Date对象:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;birth time: &#39;</span> <span class="token operator">+</span> stat<span class="token punctuation">.</span>birthtime<span class="token punctuation">)</span>
    <span class="token comment">// 修改时间, Date对象:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;modified time: &#39;</span> <span class="token operator">+</span> stat<span class="token punctuation">.</span>mtime<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="stream-流" tabindex="-1"><a class="header-anchor" href="#stream-流"><span>stream 流</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## stream 流</span>
- stream 是 nodejs 提供的又一个仅在服务区端可用的模块，目的是支持 “流” 这种数据结构。
- 流的特点是数据有序的，而且必须依次读取，或者依次写入，不能像 Array 那样随机定位。（类似堆栈）

- 所有可以读取数据的流都继承自<span class="token variable"><span class="token variable">\`</span>stream.Readable<span class="token variable">\`</span></span>，所有可以写入的流都继承自<span class="token variable"><span class="token variable">\`</span>stream.Writable<span class="token variable">\`</span></span>。

- 流也是一个对象，存在三个响应流的事件：
    <span class="token number">1</span>. <span class="token variable"><span class="token variable">\`</span>data<span class="token variable">\`</span></span>事件表示流的数据已经读取；
    <span class="token number">2</span>. <span class="token variable"><span class="token variable">\`</span>end<span class="token variable">\`</span></span>事件表示这个流已经到末尾，没有数据可以读取了；
    <span class="token number">3</span>. <span class="token variable"><span class="token variable">\`</span>error<span class="token variable">\`</span></span>事件表示出错了。

- 注意：<span class="token variable"><span class="token variable">\`</span>data<span class="token variable">\`</span></span> 事件可能会有多次，每次传递的 <span class="token variable"><span class="token variable">\`</span>chunk<span class="token variable">\`</span></span> 是流的一部分数据。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 创建读取流 */</span>
<span class="token keyword">const</span> rs <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&quot;./package.json&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>

rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;open&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;读取的文件已打开&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;close&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;读取流结束&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;ERROR: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;END&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;单批数据流入: &quot;</span><span class="token punctuation">,</span> chunk<span class="token punctuation">.</span>length<span class="token punctuation">,</span> chunk<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 创建写入流 */</span>
<span class="token keyword">const</span> ws <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&quot;./temp/test1.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>

ws<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;open&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;文件打开&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
ws<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;close&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;文件写入完成，关闭&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//文件流式写入</span>
ws<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;helloworld1!&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;内容1流入完成&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
ws<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;helloworld2!&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;内容2流入完成&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

ws<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;文件写入关闭&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>要以流的形式写入文件，只需要不断调用<code>write()</code>方法，最后以<code>end()</code>结束:</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> ws1 <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&quot;./temp/test1.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
ws1<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;使用Stream写入文本数据...\\n&quot;</span><span class="token punctuation">)</span>
ws1<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;END.&quot;</span><span class="token punctuation">)</span>
ws1<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> ws2 <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&quot;./temp/test2.js&quot;</span><span class="token punctuation">)</span>
ws2<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;使用Stream写入二进制数据...\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
ws2<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;END.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
ws2<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pipe-读写流" tabindex="-1"><a class="header-anchor" href="#pipe-读写流"><span>pipe 读写流</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## pipe 读写流</span>
一个 Readable 流和一个 Writable 流串起来后，所有的数据自动从 Readable 流进入 Writable 流，这种操作叫 pipe。
通过 pipe<span class="token punctuation">(</span><span class="token punctuation">)</span> 把一个文件流和另一个文件流串联，这样源文件的所有数据就自动写入到目标文件中<span class="token punctuation">(</span>实际是复制文件的过程<span class="token punctuation">)</span>

默认情况下，当读取流的数据的<span class="token variable"><span class="token variable">\`</span>end<span class="token variable">\`</span></span>事件触发后，将自动关闭写入流。而限制写入流的自动关闭，则需要传入参数：<span class="token variable"><span class="token variable">\`</span>readable.pipe<span class="token punctuation">(</span>writable, <span class="token punctuation">{</span> end: <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> rs <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&quot;test1.txt&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ws <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&quot;test2.txt&quot;</span><span class="token punctuation">)</span>

rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;close&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;读取流结束&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

rs<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>ws<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 限制管理写入流</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pipe原理" tabindex="-1"><a class="header-anchor" href="#pipe原理"><span>pipe原理</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span>

<span class="token comment">//创建读取流</span>
<span class="token keyword">const</span> rs <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&quot;video.mp4&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ws <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&quot;b.mp4&quot;</span><span class="token punctuation">)</span>

rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;close&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    ws<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;读取流结束&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//每一批数据流入完成</span>
rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;单批数据流入:&quot;</span> <span class="token operator">+</span> chunk<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    ws<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>chunk<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;单批输入流入完成&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件复制" tabindex="-1"><a class="header-anchor" href="#文件复制"><span>文件复制</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> process <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;process&#39;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 方式一：readFile */</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token comment">// 读取文件内容</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./package.json&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// 写入文件</span>
  fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./temp.json&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">memoryUsage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// rss  71471104 -&gt; 68.16015625</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/** 方式二：流式操作 */</span>
<span class="token comment">// 创建读取流对象</span>
<span class="token keyword">const</span> rs <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&#39;./package.json&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 创建写入流对象</span>
<span class="token keyword">const</span> ws <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&#39;./temp2.json&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 绑定 data 事件</span>
rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token parameter">chunk</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  ws<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>chunk<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">memoryUsage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// rss  71561216 -&gt; 68.24609375</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件重命名与移动" tabindex="-1"><a class="header-anchor" href="#文件重命名与移动"><span>文件重命名与移动</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 文件重命名 */</span>
fs<span class="token punctuation">.</span><span class="token function">rename</span><span class="token punctuation">(</span><span class="token string">&#39;./temp/temp.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./temp/temp1.json&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;操作失败~&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;操作成功&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 文件移动 */</span>
fs<span class="token punctuation">.</span><span class="token function">rename</span><span class="token punctuation">(</span><span class="token string">&#39;./temp/temp2.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./temp2.json&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;操作失败~&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;操作成功&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件删除" tabindex="-1"><a class="header-anchor" href="#文件删除"><span>文件删除</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 调用 unlink 方法 或 unlinkSync */</span>
fs<span class="token punctuation">.</span><span class="token function">unlink</span><span class="token punctuation">(</span><span class="token string">&#39;./temp/temp1.json&#39;</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;删除失败~&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;删除成功&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token doc-comment comment">/** 调用 rm 方法 或 rmSync */</span>
fs<span class="token punctuation">.</span><span class="token function">rm</span><span class="token punctuation">(</span><span class="token string">&#39;./temp/temp2.json&#39;</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;删除失败~&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;删除成功&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件夹操作" tabindex="-1"><a class="header-anchor" href="#文件夹操作"><span>文件夹操作</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 文件夹操作</span>
<span class="token number">1</span>. 创建文件夹：mkdir、mkdirSync
<span class="token number">2</span>. 读取文件夹：readdir、readdirSync
<span class="token number">3</span>. 删除文件夹：rmdir、rmdirSync


- <span class="token variable"><span class="token variable">\`</span>fs.mkdir<span class="token punctuation">(</span>path<span class="token punctuation">[</span>, options<span class="token punctuation">]</span>, callback<span class="token punctuation">)</span><span class="token variable">\`</span></span>
- <span class="token variable"><span class="token variable">\`</span>fs.mkdirSync<span class="token punctuation">(</span>path<span class="token punctuation">[</span>, options<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>


- 注意：递归创建文件夹需要增加 recursive 参数，如：<span class="token variable"><span class="token variable">\`</span>fs.mkdir<span class="token punctuation">(</span>path, <span class="token punctuation">{</span> recursive: <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>
- 注意：<span class="token variable"><span class="token variable">\`</span>fs.rm<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 或 <span class="token variable"><span class="token variable">\`</span>fs.rmdir<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 只能删除空目录，如果目录中还有文件或子目录，则需要使用 <span class="token variable"><span class="token variable">\`</span>fs.readdir<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 方法遍历目录并递归删除其中的文件和子目录，直到目录为空，才能使用 <span class="token variable"><span class="token variable">\`</span>fs.rm<span class="token punctuation">(</span><span class="token punctuation">)</span>、fs.rmdir<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 方法删除目录。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 回调函数封装 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">typeValue<span class="token punctuation">,</span> showData <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>typeValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">失败~</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>typeValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">成功</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        showData <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 创建 */</span>
fs<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token string">&#39;./temp&#39;</span><span class="token punctuation">,</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token string">&#39;创建&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 递归创建 */</span>
fs<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token string">&#39;./temp/a/b/c&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">recursive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token string">&#39;创建&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 读取文件夹  */</span>
fs<span class="token punctuation">.</span><span class="token function">readdir</span><span class="token punctuation">(</span><span class="token string">&#39;./temp&#39;</span><span class="token punctuation">,</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token string">&#39;读取&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 删除文件夹 */</span>
fs<span class="token punctuation">.</span><span class="token function">rm</span><span class="token punctuation">(</span><span class="token string">&#39;./temp&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">recursive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token string">&#39;删除&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="递归删除一个目录及其子目录和文件" tabindex="-1"><a class="header-anchor" href="#递归删除一个目录及其子目录和文件"><span>递归删除一个目录及其子目录和文件</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 递归删除一个目录及其子目录和文件 */</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">deleteFolderRecursive</span><span class="token punctuation">(</span><span class="token parameter">folderPath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>folderPath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>folderPath<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> curFilePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>folderPath<span class="token punctuation">,</span> file<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">lstatSync</span><span class="token punctuation">(</span>curFilePath<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">deleteFolderRecursive</span><span class="token punctuation">(</span>curFilePath<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        fs<span class="token punctuation">.</span><span class="token function">unlinkSync</span><span class="token punctuation">(</span>curFilePath<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    fs<span class="token punctuation">.</span><span class="token function">rmdirSync</span><span class="token punctuation">(</span>folderPath<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">已删除目录：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>folderPath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">deleteFolderRecursive</span><span class="token punctuation">(</span><span class="token string">&#39;temp&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="url接口" tabindex="-1"><a class="header-anchor" href="#url接口"><span>URL接口</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## URL 接口（代替内置模块 url）</span>
浏览器原生提供 <span class="token variable"><span class="token variable">\`</span>URL<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 接口，它是一个构造函数，用来构造、解析和编码 URL。一般情况下，通过 <span class="token variable"><span class="token variable">\`</span>window.URL<span class="token variable">\`</span></span> 可拿到这个构造函数。



<span class="token comment">## URLSearchParams 对象(代替内置模块querystring使用)</span>
URLSearchParams 对象是浏览器的原生对象，用来构造、解析和处理 URL 的查询字符串（即 URL 问号后面的部分）。
它本身也是一个构造函数，可以生成实例。参数可以为查询字符串，起首的问号?有没有都行，也可以是对应查询字符串的数组或对象。

  <span class="token number">1</span>. nodejs内置模块querystring有些方法要被废弃，我们使用URLSearchParams API 构造代替
  <span class="token number">2</span>. 如果你的nodejs版本大于18，可以使用 <span class="token variable"><span class="token variable">\`</span>const <span class="token assign-left variable">querystring</span><span class="token operator">=</span> require<span class="token punctuation">(</span><span class="token string">&#39;node:querystring&#39;</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>。querystring比URLSearchParams性能更高，但不是 标准化的 API。使用URLSearchParams 当性能不重要或 当需要与浏览器代码兼容时。
  <span class="token number">3</span>. 还可以安装qs模块，使用方式和querystring一样


<span class="token comment">## qs 模块</span>
qs是一个npm仓库所管理的包,可通过npm <span class="token function">install</span> qs命令进行安装。
qs.parse<span class="token punctuation">(</span><span class="token punctuation">)</span>将URL解析成对象的形式
qs.stringify<span class="token punctuation">(</span><span class="token punctuation">)</span>将对象 序列化成URL的形式，以<span class="token operator">&amp;</span>进行拼接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="url-模块和-url-接口的对比" tabindex="-1"><a class="header-anchor" href="#url-模块和-url-接口的对比"><span>url 模块和 URL 接口的对比</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// url模块，url.parse(&#39;link&#39;)</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">protocol</span><span class="token operator">:</span> <span class="token string">&quot;https:&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">slashes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;m.shop.com&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">&quot;m.shop.com&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token string">&quot;#detail&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">&quot;?id=4433&amp;name=%E6%9D%8E%E5%A4%87&amp;directCompanyId=&amp;mobile=18951431099&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token string">&quot;id=4433&amp;name=%E6%9D%8E%E5%A4%87&amp;directCompanyId=&amp;mobile=18951431099&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">&quot;/home/share&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/home/share?id=4433&amp;name=%E6%9D%8E%E5%A4%87&amp;directCompanyId=&amp;mobile=18951431099&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&quot;https://m.shop.com/home/share?id=4433&amp;name=%E6%9D%8E%E5%A4%87&amp;directCompanyId=&amp;mobile=18951431099#detail&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// new URL()</span>
<span class="token keyword">const</span> newURL <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&quot;https://m.shop.com/home/share?id=4433&amp;name=%E6%9D%8E%E5%A4%87&amp;directCompanyId=&amp;mobile=18951431099#detail&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token string">&quot;https://m.shop.com&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">protocol</span><span class="token operator">:</span> <span class="token string">&quot;https:&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;m.shop.com&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">&quot;m.shop.com&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">&quot;/home/share&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">&quot;?id=4433&amp;name=%E6%9D%8E%E5%A4%87&amp;directCompanyId=&amp;mobile=18951431099&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// searchParams: URLSearchParams</span>
    <span class="token literal-property property">searchParams</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;4433&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;李备&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">directCompanyId</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">mobile</span><span class="token operator">:</span> <span class="token string">&quot;18951431099&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token string">&quot;#detail&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资源压缩-zib" tabindex="-1"><a class="header-anchor" href="#资源压缩-zib"><span>资源压缩 zib</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 资源压缩 zlib</span>
使用gizp：浏览器向服务端发起资源请求时，浏览器通过在 http 头部添加 <span class="token variable"><span class="token variable">\`</span>Accept-Encoding: gzip, deflate<span class="token variable">\`</span></span> 来告诉服务端可以用 <span class="token function">gzip</span> 或者 defalte 算法来压缩资源。如下载一个js文件，服务端会先对资源进行压缩再返回给浏览器，以此减少资源的大小，加快返回速度。

在 nodejs 中能对资源压缩的模块为 Alib 模块。


- 压缩文件：<span class="token variable"><span class="token variable">\`</span>zlib.createGzip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>
- 解压资源：<span class="token variable"><span class="token variable">\`</span>zlib.createGunzip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>
- 压缩字符串：<span class="token variable"><span class="token variable">\`</span>zlib.gzipSync<span class="token punctuation">(</span><span class="token string">&#39;字符串&#39;</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> zlib <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;zlib&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> readStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&quot;./README.md&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> writeStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&quot;./README.md&quot;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 资源压缩 */</span>
<span class="token keyword">const</span> gzip <span class="token operator">=</span> zlib<span class="token punctuation">.</span><span class="token function">createGzip</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
readStream<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gzip<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>writeStream<span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 对字符串压缩 */</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&quot;Hi, willysliang~&quot;</span>
<span class="token keyword">const</span> gzipStr <span class="token operator">=</span> zlib<span class="token punctuation">.</span><span class="token function">gzipSync</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gzipStr<span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 资源解压 */</span>
<span class="token keyword">const</span> gunzip <span class="token operator">=</span> zlib<span class="token punctuation">.</span><span class="token function">createGunzip</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
readStream<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gunzip<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>writeStream<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务端gzip压缩" tabindex="-1"><a class="header-anchor" href="#服务端gzip压缩"><span>服务端gzip压缩</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> zlib <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;zlib&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@title</span> 服务端 gzip 压缩
 * <span class="token keyword">@description</span> 首先判断是否包含 accept-encoding 首部，且存在值为 gzip，是则返回 gzip 压缩后的文件，否则返回未压缩的文件
 */</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> filePath <span class="token operator">=</span> <span class="token string">&quot;./README.md&quot;</span>
    <span class="token keyword">const</span> rs <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span>

    <span class="token keyword">const</span> acceptEncodeing <span class="token operator">=</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&quot;accept-encoding&quot;</span><span class="token punctuation">]</span>

    <span class="token comment">// 判断是否需要 gzip 压缩</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>acceptEncodeing <span class="token operator">&amp;&amp;</span> acceptEncodeing<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;gzip&quot;</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 响应 Content-Encoding 告诉浏览器文件被 gzip 压缩过</span>
        res<span class="token punctuation">.</span><span class="token function">writeHeader</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;Content-Encoding&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gzip&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token keyword">const</span> gzip <span class="token operator">=</span> zlib<span class="token punctuation">.</span><span class="token function">createGzip</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        rs<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gzip<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

        <span class="token comment">// 对字符串进行 gzip 压缩</span>
        <span class="token keyword">const</span> responseText <span class="token operator">=</span> <span class="token string">&quot;Hi, willys~&quot;</span>
        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>zlib<span class="token punctuation">.</span><span class="token function">gzipSync</span><span class="token punctuation">(</span>responseText<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        rs<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;server start&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网络协议-http" tabindex="-1"><a class="header-anchor" href="#网络协议-http"><span>网络协议 http</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 网络协议 http</span>

<span class="token comment">### 配置本地 host</span>
<span class="token number">1</span>. 打开hosts文件。该文件通常位于以下位置：C:<span class="token punctuation">\\</span>Windows<span class="token punctuation">\\</span>System32<span class="token punctuation">\\</span>drivers<span class="token punctuation">\\</span>etc<span class="token punctuation">\\</span>hosts（对于Windows）或/etc/hosts（对于Mac和Linux）
<span class="token number">2</span>. 在hosts文件中添加条目，格式为“IP地址 域名”，例如 “127.0.0.1 willys.com”。
<span class="token number">3</span>. 保存 hosts 文件夹
<span class="token number">4</span>. 测试新的host配置是否生效。可以使用ping命令测试，例如“ping willys.com”。



<span class="token comment">### 设置状态代码、状态描述信息</span>
- 设置响应头：res.writeHead<span class="token punctuation">(</span><span class="token punctuation">)</span>
- 设置状态码：res.statusCode <span class="token operator">=</span> codeNumber
- 设置描述信息：res.statusMessage <span class="token operator">=</span> <span class="token string">&#39;message desc&#39;</span>



<span class="token comment">### 设置相应主体</span>
<span class="token number">1</span>. response.write<span class="token punctuation">(</span>chunk<span class="token punctuation">[</span>, encoding<span class="token punctuation">]</span><span class="token punctuation">[</span>, callback<span class="token punctuation">]</span><span class="token punctuation">)</span>
		- chunk：响应主体的内容，可以是string，也可以是buffer。当为string时，encoding参数用来指明编码方式。（默认是utf8）
		- encoding：编码方式，默认是 utf8。
		- callback：当响应体 flushed 时触发的回调。

	注意：
		- 如果 res.write<span class="token punctuation">(</span><span class="token punctuation">)</span> 被调用时 res.writeHead<span class="token punctuation">(</span><span class="token punctuation">)</span> 还没被调用过，则会把 header flush 出去。
		- res.write<span class="token punctuation">(</span><span class="token punctuation">)</span> 可以被调用多次。
		- 当 res.write<span class="token punctuation">(</span>chunk<span class="token punctuation">)</span> 第一次被调用时，node 会将 header 信息以及 chunk 发送到客户端。第二次调用 res.write<span class="token punctuation">(</span>chunk<span class="token punctuation">)</span> ，node 会认为你是要发送 streaming data。


<span class="token number">2</span>. response.end<span class="token punctuation">(</span><span class="token punctuation">[</span>data<span class="token punctuation">]</span><span class="token punctuation">[</span>, encoding<span class="token punctuation">]</span><span class="token punctuation">[</span>, callback<span class="token punctuation">]</span><span class="token punctuation">)</span>
		- res.end<span class="token punctuation">(</span><span class="token punctuation">)</span> 用处是告诉 nodejs 此次请求到此结束。


<span class="token comment">### 超时处理</span>
- response.setTimeout<span class="token punctuation">(</span>msecs, callback<span class="token punctuation">)</span>


<span class="token comment">### 事件 close/finish</span>
- close：response.end<span class="token punctuation">(</span><span class="token punctuation">)</span> 被调用前连接就断开，此时会触发这个事件。
- finish：响应header、body都已经发送出去（交给操作系统，排队等候传输），但客户端是否实际收到数据为止。（这个事件后 res 上就不会再有其他事件触发）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务器请求" tabindex="-1"><a class="header-anchor" href="#服务器请求"><span>服务器请求</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;node:http&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取请求的方法</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> method <span class="token punctuation">}</span> <span class="token operator">=</span> request

    <span class="token comment">// 获取请求的 url 路径</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> pathname <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token string">&quot;http://127.0.0.1&quot;</span><span class="token punctuation">)</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> pathname<span class="token punctuation">)</span>

    <span class="token doc-comment comment">/** 响应状态码 */</span>
    response<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">203</span>
    response<span class="token punctuation">.</span>statusMessage <span class="token operator">=</span> <span class="token string">&quot;willysliang&quot;</span>
    <span class="token doc-comment comment">/** 响应头 */</span>
    response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;willy&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;L&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;O&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;V&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;E&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token doc-comment comment">/** 响应体设置 */</span>
    response<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;I &quot;</span><span class="token punctuation">)</span>
    response<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;LOVE &quot;</span><span class="token punctuation">)</span>
    response<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;U! &quot;</span><span class="token punctuation">)</span>
    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;willysliang&quot;</span><span class="token punctuation">)</span>

    <span class="token doc-comment comment">/** 请求超时处理 */</span>
    <span class="token keyword">const</span> timeout <span class="token operator">=</span> <span class="token number">5000</span> <span class="token comment">// 设置超时时间为5秒</span>
    request<span class="token punctuation">.</span><span class="token function">setTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        response<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">408</span> <span class="token comment">// 请求超时状态码</span>
        response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;Request Timeout&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 响应超时信息</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** socket 连接超时处理 */</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;connection&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">socket</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果连接超时，则socket会触发timeout事件，可以在该事件的回调函数中调用socket.destroy()方法来关闭连接</span>
    socket<span class="token punctuation">.</span><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span> <span class="token comment">// 设置超时时间为5秒</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;listener 80....&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加载完整项目" tabindex="-1"><a class="header-anchor" href="#加载完整项目"><span>加载完整项目</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** bug: 对无效的路径请求无法响应（做不到是因为单页面应用的路由模块还没配置白名单） */</span>

<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;node:http&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;node:path&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 声明 MIME 资源变量</span>
<span class="token keyword">const</span> <span class="token literal-property property">mimes</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> string<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">html</span><span class="token operator">:</span> <span class="token string">&#39;text/html;charset=utf-8;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token string">&#39;text/css&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">js</span><span class="token operator">:</span> <span class="token string">&#39;text/javascript&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">png</span><span class="token operator">:</span> <span class="token string">&#39;image/png&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">jpg</span><span class="token operator">:</span> <span class="token string">&#39;image/jpeg&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">gif</span><span class="token operator">:</span> <span class="token string">&#39;image/gif&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mp4</span><span class="token operator">:</span> <span class="token string">&#39;video/mp4&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mp3</span><span class="token operator">:</span> <span class="token string">&#39;video/mpeg&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">json</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">other</span><span class="token operator">:</span> <span class="token string">&#39;application/octet-stream&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 其他文件类型(此会让浏览器对资源进行下载)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span> pathname <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token string">&#39;http://127.0.0.1&#39;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;pathname==========&#39;</span><span class="token punctuation">,</span> pathname<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>pathname <span class="token operator">===</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> html <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&#39;/dist/index.html&#39;</span><span class="token punctuation">)</span>
        response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> resourcePath <span class="token operator">=</span> __dirname <span class="token operator">+</span> pathname
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>resourcePath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> resource <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>resourcePath<span class="token punctuation">)</span>
        
            <span class="token comment">// 获取文件的后缀名</span>
            <span class="token keyword">const</span> ext <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>pathname<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

            <span class="token comment">// 兼容在模块脚本需要在服务器响应中设置正确的 MIME 类型（例如，text/javascript 或 application/javascript），否则浏览器将无法正确解析脚本并报告这个错误</span>
            <span class="token comment">// if (ext === &#39;js&#39;) response.setHeader(&#39;Content-Type&#39;, &#39;application/javascript&#39;)</span>

            <span class="token comment">// 设置文件的 MIME 类型,如果文件的后缀没有匹配到,则设置为 &#39;application/octet-stream&#39; 类型</span>
            response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> mimes<span class="token punctuation">[</span>ext<span class="token punctuation">]</span> <span class="token operator">||</span> mimes<span class="token punctuation">[</span><span class="token string">&#39;other&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

            response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>resource<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// response.statusCode = 404</span>
            <span class="token comment">// response.setHeader(&#39;Content-Type&#39;, &#39;text/html&#39;)</span>
            <span class="token comment">// response.end(&#39;&lt;h1&gt;404 Not Found&lt;/h1&gt;&#39;)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;listener 80....&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优化版" tabindex="-1"><a class="header-anchor" href="#优化版"><span>优化版</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** bug: 对无效的路径请求无法响应（做不到是因为单页面应用的路由模块还没配置白名单） */</span>

<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;node:http&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;node:path&#39;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 声明 MIME 资源变量 */</span>
<span class="token keyword">const</span> <span class="token literal-property property">mimes</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> string<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">html</span><span class="token operator">:</span> <span class="token string">&#39;text/html;charset=utf-8;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token string">&#39;text/css&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">js</span><span class="token operator">:</span> <span class="token string">&#39;text/javascript&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">png</span><span class="token operator">:</span> <span class="token string">&#39;image/png&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">jpg</span><span class="token operator">:</span> <span class="token string">&#39;image/jpeg&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">gif</span><span class="token operator">:</span> <span class="token string">&#39;image/gif&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mp4</span><span class="token operator">:</span> <span class="token string">&#39;video/mp4&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mp3</span><span class="token operator">:</span> <span class="token string">&#39;video/mpeg&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">json</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">other</span><span class="token operator">:</span> <span class="token string">&#39;application/octet-stream&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 其他文件类型(此会让浏览器对资源进行下载)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 错误处理 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">errorResponse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">response<span class="token punctuation">,</span> code</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token number">404</span><span class="token operator">:</span>
            response<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">404</span>
            response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;h1&gt;404 Not Found&lt;/h1&gt;&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token number">403</span><span class="token operator">:</span>
            response<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">403</span>
            response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;h1&gt;403 Forbidden&lt;/h1&gt;&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token number">405</span><span class="token operator">:</span>
            response<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">405</span>
            response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;h1&gt;405 Method Not Allowed&lt;/h1&gt;&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            response<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">500</span>
            response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;h1&gt;500 Internet Server Error&lt;/h1&gt;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> response
<span class="token punctuation">}</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>method <span class="token operator">!==</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        response <span class="token operator">=</span> <span class="token function">errorResponse</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> <span class="token number">405</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> <span class="token punctuation">{</span> pathname <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token string">&#39;http://127.0.0.1&#39;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;pathname==========&#39;</span><span class="token punctuation">,</span> pathname<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>pathname <span class="token operator">===</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> html <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&#39;/dist/index.html&#39;</span><span class="token punctuation">)</span>
        response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> resourcePath <span class="token operator">=</span> __dirname <span class="token operator">+</span> pathname
        fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>resourcePath<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> resourceData</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err=====&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>

                response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> mimes<span class="token punctuation">[</span><span class="token string">&#39;html&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token keyword">switch</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">case</span> <span class="token string">&#39;ENOENT&#39;</span><span class="token operator">:</span>
                        response <span class="token operator">=</span> <span class="token function">errorResponse</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> <span class="token number">404</span><span class="token punctuation">)</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token keyword">case</span> <span class="token string">&#39;EPERM&#39;</span><span class="token operator">:</span>
                        response <span class="token operator">=</span> <span class="token function">errorResponse</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> <span class="token number">403</span><span class="token punctuation">)</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token keyword">default</span><span class="token operator">:</span>
                        response <span class="token operator">=</span> <span class="token function">errorResponse</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> err<span class="token punctuation">.</span>code<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">return</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 获取文件的后缀名</span>
            <span class="token keyword">const</span> ext <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>pathname<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

            <span class="token comment">// 兼容在模块脚本需要在服务器响应中设置正确的 MIME 类型（例如，text/javascript 或 application/javascript），否则浏览器将无法正确解析脚本并报告这个错误</span>
            <span class="token comment">// if (ext === &#39;js&#39;) response.setHeader(&#39;Content-Type&#39;, &#39;application/javascript&#39;)</span>

            <span class="token comment">// 设置文件的 MIME 类型,如果文件的后缀没有匹配到,则设置为 &#39;application/octet-stream&#39; 类型</span>
            response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> mimes<span class="token punctuation">[</span>ext<span class="token punctuation">]</span> <span class="token operator">||</span> mimes<span class="token punctuation">[</span><span class="token string">&#39;other&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

            response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>resourceData<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;listener 80....&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网络服务-https" tabindex="-1"><a class="header-anchor" href="#网络服务-https"><span>网络服务 https</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 网络服务 https</span>
https 与 http 模块用法相似。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成证书" tabindex="-1"><a class="header-anchor" href="#生成证书"><span>生成证书</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 生成证书</span>
<span class="token number">1</span>. 创建目录存放证书
$ <span class="token function">mkdir</span> cert
$ <span class="token builtin class-name">cd</span> cert


<span class="token number">2</span>. 生成私钥
$ openssl genrsa <span class="token parameter variable">-out</span> willy-key.pem <span class="token number">2048</span>


<span class="token number">3</span>. 生成证书签名请求（csr是 Certificate Signing Request）
openssl req <span class="token parameter variable">-new</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-sha256</span>
  <span class="token parameter variable">-key</span> willy-key.key.pem <span class="token punctuation">\\</span>
  <span class="token parameter variable">-out</span> willy-csr.pem <span class="token punctuation">\\</span>
  <span class="token parameter variable">-subj</span> <span class="token string">&quot;/C=CN/ST=Guandong/L=Guangzhou/O=YH Inc/CN=www.willy.com&quot;</span>



<span class="token number">4</span>. 生成证书
openssl x509 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-req</span> <span class="token parameter variable">-in</span> willy-csr.pem <span class="token punctuation">\\</span>
  <span class="token parameter variable">-signkey</span> willy-key.pem <span class="token punctuation">\\</span>
  <span class="token parameter variable">-out</span> willy-cert.pem


<span class="token number">5</span>. 本地测试（因为本地没有域名，所以先配置本地host）
<span class="token number">127.0</span>.0.1 www.willy.com

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// htts 服务端</span>
<span class="token keyword">const</span> https <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;https&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;./cert/chyingp-key.pem&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 私钥</span>
    <span class="token literal-property property">cert</span><span class="token operator">:</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;./cert/chyingp-cert.pem&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 证书</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> https<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;这是来自HTTPS服务器的返回&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据加密-crypto" tabindex="-1"><a class="header-anchor" href="#数据加密-crypto"><span>数据加密 crypto</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 数据加密 crypto</span>
crypto 模块的目的是为了提供通用的加密和哈希算法。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> cryptos <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;crypto&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> algorithm <span class="token operator">=</span> <span class="token string">&quot;aes-256-cbc&quot;</span> <span class="token comment">// 加密算法</span>
<span class="token keyword">const</span> key <span class="token operator">=</span> cryptos<span class="token punctuation">.</span><span class="token function">randomBytes</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span> <span class="token comment">// 根据加密算法生成一个32字节的密钥</span>
<span class="token keyword">const</span> iv <span class="token operator">=</span> cryptos<span class="token punctuation">.</span><span class="token function">randomBytes</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token comment">// 生成长度为 16 字节的随机数作为 iv</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span> <span class="token comment">// 要加密的数据</span>

<span class="token doc-comment comment">/**
 * 创建加密器
 */</span>
<span class="token keyword">const</span> cipher <span class="token operator">=</span> cryptos<span class="token punctuation">.</span><span class="token function">createCipheriv</span><span class="token punctuation">(</span>algorithm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> iv<span class="token punctuation">)</span>

<span class="token keyword">let</span> encrypted <span class="token operator">=</span> cipher<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hex&quot;</span><span class="token punctuation">)</span>
encrypted <span class="token operator">+=</span> cipher<span class="token punctuation">.</span><span class="token function">final</span><span class="token punctuation">(</span><span class="token string">&quot;hex&quot;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;encrypted:&quot;</span><span class="token punctuation">,</span> encrypted<span class="token punctuation">)</span> <span class="token comment">// encrypted: e221f586cf104b2d0d5d58166a8cfe69</span>

<span class="token doc-comment comment">/**
 * 创建解密器
 */</span>
<span class="token keyword">const</span> decipher <span class="token operator">=</span> cryptos<span class="token punctuation">.</span><span class="token function">createDecipheriv</span><span class="token punctuation">(</span>algorithm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> iv<span class="token punctuation">)</span>

<span class="token keyword">let</span> decrypted <span class="token operator">=</span> decipher<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>encrypted<span class="token punctuation">,</span> <span class="token string">&quot;hex&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span>
decrypted <span class="token operator">+=</span> decipher<span class="token punctuation">.</span><span class="token function">final</span><span class="token punctuation">(</span><span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;decrypted:&quot;</span><span class="token punctuation">,</span> decrypted<span class="token punctuation">)</span> <span class="token comment">// decrypted: hello world</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="计算摘要-hash" tabindex="-1"><a class="header-anchor" href="#计算摘要-hash"><span>计算摘要 hash</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 计算摘要 Hash</span>
在 crypto 模块中，Hash 是一种用于计算数据摘要的算法，它可以将任意长度的数据映射为固定长度的哈希值。
哈希值通常用于验证数据完整性、数据签名和密码存储等场景。

注意：Hash 对象是单向的，即不能从哈希值中恢复原始数据。因此 Hash 算法通常用于验证数据完整性和密码存储等场景。
在密码场景中，通常将密码的哈希值存储在数据库中，而不是存储密码本身，以提高安全性。当用户登录时，将输入的密码进行哈希计算，然后将计算得到的哈希值与数据库中存储的哈希值进行比较，以验证密码是否正确。

在 crypto 模块中，可以使用 <span class="token variable"><span class="token variable">\`</span>const <span class="token builtin class-name">hash</span> <span class="token operator">=</span> crypto.createHash<span class="token punctuation">(</span>algorithm<span class="token punctuation">)</span><span class="token variable">\`</span></span> 方法创建一个 Hash 对象。
<span class="token variable"><span class="token variable">\`</span>algorithm<span class="token variable">\`</span></span> 参数指定要使用的哈希算法，例如 <span class="token string">&quot;sha256&quot;</span>、<span class="token string">&quot;md5&quot;</span> 等。
可以使用 <span class="token variable"><span class="token variable">\`</span>crypto.getHashes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 方法获取支持的哈希算法列表。


<span class="token comment">### hash 对象实例方法</span>
<span class="token number">1</span>. 计算摘要：hash.digest<span class="token punctuation">(</span><span class="token punctuation">[</span>encoding<span class="token punctuation">]</span><span class="token punctuation">)</span>
		encoding 可以是 hex、latin1 或者 base64。
	如果声明了 encoding，那么返回字符串。否则，返回Buffer实例。
	注意：调用 hash.digest<span class="token punctuation">(</span><span class="token punctuation">)</span> 后，hash 对象就作废了，再次调用就会出错。


<span class="token number">2</span>. hash.update<span class="token punctuation">(</span>data<span class="token punctuation">[</span>, input_encoding<span class="token punctuation">]</span><span class="token punctuation">)</span>：
		input_encoding 可以是 utf8、ascii 或者 latin1。
	如果 data 是字符串，且没有指定 input_encoding，则默认是utf8。
	注意：hash.update<span class="token punctuation">(</span><span class="token punctuation">)</span> 方法可以调用多次。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> cryptos <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;crypto&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 创建了一个 SHA-256 的 Hash 对象</span>
<span class="token keyword">const</span> algorithm <span class="token operator">=</span> <span class="token string">&quot;sha256&quot;</span>
<span class="token keyword">const</span> hash <span class="token operator">=</span> cryptos<span class="token punctuation">.</span><span class="token function">createHash</span><span class="token punctuation">(</span>algorithm<span class="token punctuation">)</span>

<span class="token comment">// 使用 update() 方法将 data 字符串写入 Hash 对象中</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token string">&quot;Hi, willys&quot;</span>
hash<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

<span class="token comment">// 使用 digest() 方法获取哈希值，以十六进制字符串的形式返回</span>
<span class="token keyword">const</span> digest <span class="token operator">=</span> hash<span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&quot;hex&quot;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>digest<span class="token punctuation">)</span> <span class="token comment">// 5412b888d0f63cc2269dab76826196fb5f37cd4253f081ff0fa9def0c3e4f1b4</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="消息认证-hmac" tabindex="-1"><a class="header-anchor" href="#消息认证-hmac"><span>消息认证 HMAC</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 消息认证 HMAC</span>
HMAC（Hash-base Message Authentication Code）是一种基于哈希函数和密钥的消息认证算法，它可以用于验证消息的完整性和真实性。

在 crypto 模块中，可以使用 <span class="token variable"><span class="token variable">\`</span>crypto.createHmac<span class="token punctuation">(</span>algorithm, key<span class="token punctuation">)</span><span class="token variable">\`</span></span> 方法创建一个 HMAC 对象。
	<span class="token variable"><span class="token variable">\`</span>algorithm<span class="token variable">\`</span></span> 参数指定要使用的哈希算法，例如 <span class="token string">&quot;sha256&quot;</span>、<span class="token string">&quot;md5&quot;</span> 等。
	key 参数指定用于计算 HMAC 的密钥。
	可以使用 <span class="token variable"><span class="token variable">\`</span>crypto.getHashes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 方法获取支持的哈希算法列表。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> cryptos <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;crypto&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 创建了一个 SHA-256 的 Hash 对象</span>
<span class="token keyword">const</span> algorithm <span class="token operator">=</span> <span class="token string">&quot;sha256&quot;</span>
<span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token string">&quot;willy-key&quot;</span>
<span class="token keyword">const</span> hmac <span class="token operator">=</span> cryptos<span class="token punctuation">.</span><span class="token function">createHmac</span><span class="token punctuation">(</span>algorithm<span class="token punctuation">,</span> key<span class="token punctuation">)</span>

<span class="token comment">// 使用 update() 方法将 data 字符串写入 Hash 对象中</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token string">&quot;Hi, willys&quot;</span>
hmac<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

<span class="token comment">// 使用 digest() 方法获取哈希值，以十六进制字符串的形式返回</span>
<span class="token keyword">const</span> digest <span class="token operator">=</span> hmac<span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&quot;hex&quot;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>digest<span class="token punctuation">)</span> <span class="token comment">// ff21d18da8f432e60025a04db1eccdc39b1574edb5e5ae49d3ad8d1509335cfe</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="散列函数-md5" tabindex="-1"><a class="header-anchor" href="#散列函数-md5"><span>散列函数 md5</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 散列函数 md5</span>
MD5（Message-Digest Algorithm）是计算机安全领域广泛使用的散列函数（又称哈希算法、摘要算法），主要用来确保消息的完整和一致性。


<span class="token comment">### 应用场景：</span>
<span class="token number">1</span>. 文件完整性校验：如从网上下载一个软件，一般网站都会将软件的 md5 值附在网页上，用户下载完软件后，可对下载到本地的软件进行 md5 运算，然后跟网站上的 md5 值进行对比，确保下载的软件是完整的、正确的。
<span class="token number">2</span>. 密码保护：将 md5 加密后的密码保存到数据库，而不是保存明文密码，避免拖库等事件发生后导致明文密码外泄。
<span class="token number">3</span>. 防篡改：比如数字证书的防篡改，就用到摘要算法（还需要结合数字签名等手段）


<span class="token comment">### 特点：</span>
<span class="token number">1</span>. 运算速度快
<span class="token number">2</span>. 输出长度固定：输入长度不固定，输出长度固定为 <span class="token number">128</span> 位。
<span class="token number">3</span>. 运算不可逆：已知运算结果的情况下，无法通过逆运算得到原始字符串。
<span class="token number">4</span>. 高度离散：输入的微小变化，可导致运算结果差异巨大。
<span class="token number">5</span>. 弱碰撞性：不同输入的散列值可能相同。


<span class="token comment">### 单纯 md5 加密的缺陷</span>
因为相同的明文密码 md5 值也是相同的。即当攻击者知道算法是 md5 且数据库里存储的密码值时，理论上可以猜测出用户的明文密码。

事实上，彩虹表也是这么暴力破解的：事先将常见明文密码的 md5 值运算好存储起来，然后跟网站数据库里存储的密码进行匹配就能快速找到用户的明文密码。（此时可以使用 <span class="token string">&quot;密码加盐&quot;</span> 来进一步提升安全性）



<span class="token comment">### 密码加盐</span>
密码加盐的原理：在密码特定位置插入特定字符串后，再对修改后的字符串进行 md5 运算加密。
例如同样的密码，当 <span class="token string">&quot;盐值&quot;</span> 不一样时 md5 值的差异非常大。通过密码加密，可以防止最初级的暴力破解。如果攻击者事先不知道 <span class="token string">&quot;盐值&quot;</span>，破解的难度就会非常大。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> cryptos <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;crypto&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">cryptoPwd</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">password</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> md5 <span class="token operator">=</span> cryptos<span class="token punctuation">.</span><span class="token function">createHash</span><span class="token punctuation">(</span><span class="token string">&quot;md5&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> md5<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&quot;hex&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token string">&quot;123456&quot;</span>
<span class="token comment">// 服务器端加密</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">cryptoPwd</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// e10adc3949ba59abbe56e057f20f883e</span>

<span class="token comment">// 他人恶意暴力破解</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">cryptoPwd</span><span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// e10adc3949ba59abbe56e057f20f883e</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="盐值加密" tabindex="-1"><a class="header-anchor" href="#盐值加密"><span>盐值加密</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> cryptos <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;crypto&quot;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 密码盐值加密 */</span>
<span class="token keyword">const</span> cryptoPwd <span class="token operator">=</span> <span class="token punctuation">(</span>password<span class="token punctuation">,</span> savedSalt <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 生成随机的盐值</span>
    <span class="token keyword">const</span> salt <span class="token operator">=</span> cryptos<span class="token punctuation">.</span><span class="token function">randomBytes</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">&quot;hex&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">// 对密码进行哈希处理（如果为用户注册时则使用随机生成的盐值，如果用户登录时则拿用户注册的盐值进行校验）</span>
    <span class="token keyword">const</span> hash <span class="token operator">=</span> cryptos
        <span class="token punctuation">.</span><span class="token function">pbkdf2Sync</span><span class="token punctuation">(</span>password<span class="token punctuation">,</span> savedSalt <span class="token operator">||</span> salt<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token string">&quot;sha512&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">&quot;hex&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">// 将盐值和哈希值保存到数据库中</span>
    <span class="token keyword">const</span> savedPassword <span class="token operator">=</span> <span class="token punctuation">{</span>
        salt<span class="token punctuation">,</span>
        hash<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> savedPassword
<span class="token punctuation">}</span>

<span class="token comment">// 当用户注册时时，获取保存的盐值和哈希值</span>
<span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token string">&quot;willy&quot;</span> <span class="token comment">// 假设用户输入的密码为 &quot;password&quot;</span>
<span class="token keyword">const</span> savedPassword <span class="token operator">=</span> <span class="token function">cryptoPwd</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span>
<span class="token keyword">const</span> savedSalt <span class="token operator">=</span> savedPassword<span class="token punctuation">.</span>salt
<span class="token keyword">const</span> savedHash <span class="token operator">=</span> savedPassword<span class="token punctuation">.</span>hash

<span class="token comment">// 对用户输入的密码进行哈希处理，并与保存的哈希值进行比较</span>
<span class="token keyword">const</span> loginPassword <span class="token operator">=</span> <span class="token function">cryptoPwd</span><span class="token punctuation">(</span><span class="token string">&quot;willy&quot;</span><span class="token punctuation">,</span> savedSalt<span class="token punctuation">)</span>
<span class="token keyword">const</span> loginHash <span class="token operator">=</span> loginPassword<span class="token punctuation">.</span>hash

<span class="token keyword">if</span> <span class="token punctuation">(</span>loginHash <span class="token operator">===</span> savedHash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;密码正确&quot;</span><span class="token punctuation">,</span> loginHash<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;密码错误&quot;</span><span class="token punctuation">,</span> loginHash<span class="token punctuation">,</span> savedHash<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="buffer-类" tabindex="-1"><a class="header-anchor" href="#buffer-类"><span>Buffer 类</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Buffer 类</span>
Buffer 是 Node.js 中用于处理二进制数据的类，它是 Node.js 在处理 TCP 流、文件系统操作、加密算法等方面的核心模块之一。
注意：Buffer对象在创建时需要指定其大小（以字节为单位），且创建后无法改变其大小。在使用Buffer时，需要注意内存泄漏和安全问题，避免出现缓冲区溢出等问题。


<span class="token comment">### Buffer 的作用：</span>
<span class="token number">1</span>. 存储二进制数据：Buffer可以存储二进制数据，包括字节、位、16进制、ASCII等。
<span class="token number">2</span>. 处理网络流数据：Buffer可以用于处理网络流数据，如socket接收到的数据，可以将其转换为Buffer对象进行处理。
<span class="token number">3</span>. 处理文件系统操作：Buffer可以用于读取和写入文件系统中的二进制数据，如读取图片、音频、视频等文件。
<span class="token number">4</span>. 实现加密算法：Buffer可以用于实现加密算法，如MD5、SHA1等，以及对称加密算法、非对称加密算法等。
<span class="token number">5</span>. 处理数据传输：Buffer可以用于处理数据传输的编码和解码，如Base64编码、URL编码、JSON编码等。
<span class="token number">6</span>. 支持转换编码：Buffer可以将不同编码的数据进行转换，如将UTF-8编码的数据转换为GBK编码的数据。


<span class="token comment">### 计算机基本组成</span>
内存：读写速度较快，断电丢失数据
硬盘：读写速度较慢，断电不丢失数据
线程：线程是一个进程的执行流



<span class="token comment">### 类方法：Buffer.from(buffer)</span>
- Buffer.from<span class="token punctuation">(</span><span class="token punctuation">)</span>方法用于创建包含指定字符串，数组或缓冲区的新缓冲区。
- <span class="token variable"><span class="token variable">\`</span>Buffer.from<span class="token punctuation">(</span> object, encoding <span class="token punctuation">)</span><span class="token variable">\`</span></span>
    - object：此参数可以包含字符串，缓冲区，数组或arrayBuffer。
    - encoding：如果对象是字符串，则用于指定其编码。它是可选参数。其默认值为utf8。



<span class="token comment">### buffer 与字符串的转换</span>
- 转换为buffer：Buffer.from<span class="token punctuation">(</span><span class="token punctuation">)</span>
- 转换为字符串：Buffer.toString<span class="token punctuation">(</span><span class="token punctuation">)</span>
注意：一个 buffer 位只能存储最高二进制值为256的数值，超出256的数值会在转换为二进制后进行高位舍弃。

const buf1 <span class="token operator">=</span> Buffer.from<span class="token punctuation">(</span><span class="token string">&#39;hi, willy&#39;</span><span class="token punctuation">)</span>
const buf2 <span class="token operator">=</span> Buffer.from<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">105</span>, <span class="token number">108</span>, <span class="token number">111</span>, <span class="token number">118</span>, <span class="token number">101,121</span>,111,117<span class="token punctuation">]</span><span class="token punctuation">)</span>
const str1 <span class="token operator">=</span> buf2.toString<span class="token punctuation">(</span><span class="token punctuation">)</span> // iloveyou
console.log<span class="token punctuation">(</span>buf1, buf2, str1<span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件机制模块-events" tabindex="-1"><a class="header-anchor" href="#事件机制模块-events"><span>事件机制模块 events</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 事件机制模块 events</span>
nodejs 存在许多内置的事件，可通过引入 events 模块并通过实例化 EventEmitter 类来绑定和监听事件。


<span class="token comment">### EventEmmiter</span>
EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，而对于每个事件，EventEmitter 支持若干个事件监听器。
当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 引入 events 模块</span>
<span class="token keyword">const</span> EventEmitter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;events&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 创建 eventEmitter 对象</span>
<span class="token keyword">const</span> events <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

events<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;someEvent&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arg1<span class="token punctuation">,</span> arg2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;listener1&quot;</span><span class="token punctuation">,</span> arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
events<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;someEvent&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arg1<span class="token punctuation">,</span> arg2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;listener2&quot;</span><span class="token punctuation">,</span> arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

events<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;someEvent&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;arg1 参数&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;arg2 参数&quot;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 输出
 * listener1 arg1 参数 arg2 参数
    listener2 arg1 参数 arg2 参数
 */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="爬虫-puppeteer" tabindex="-1"><a class="header-anchor" href="#爬虫-puppeteer"><span>爬虫 puppeteer</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 爬虫 puppeteer</span>

$ <span class="token function">pnpm</span> i puppeteer-core

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> puppeteer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;puppeteer-core&quot;</span><span class="token punctuation">)</span>

<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用 puppeteer.launch 方法启动 Chrome 或 Chromium 浏览器</span>
    <span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token keyword">await</span> puppeteer<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">executablePath</span><span class="token operator">:</span>
            <span class="token string">&quot;C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headless</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 关掉无界面模式 或 false（可视化）</span>
        <span class="token literal-property property">slowMo</span><span class="token operator">:</span> <span class="token number">250</span><span class="token punctuation">,</span> <span class="token comment">// 慢速度，slowMo选项以指定的毫秒减慢Puppeteer的操作</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 使用 browser.newPage 方法创建一个新页面</span>
    <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 使用 page.goto 方法跳转到指定的网页：</span>
    <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span><span class="token string">&quot;https://cc.163.com/&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">// 捕获console的输出,通过监听console事件</span>
    page<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;console&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;PAGE LOG:&quot;</span><span class="token punctuation">,</span> <span class="token operator">...</span>msg<span class="token punctuation">.</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// 使用 page.evaluate(pageFunction, ...args) 执行 JavaScript 代码并获取结果</span>
    <span class="token keyword">const</span> dimensions <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">,</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">,</span>
            <span class="token literal-property property">deviceScaleFactor</span><span class="token operator">:</span> window<span class="token punctuation">.</span>devicePixelRatio<span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> document<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
            <span class="token literal-property property">href</span><span class="token operator">:</span> location<span class="token punctuation">.</span>href<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Dimensions: &quot;</span><span class="token punctuation">,</span> dimensions<span class="token punctuation">)</span>

    <span class="token comment">// 截屏</span>
    <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">screenshot</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;willy.png&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 打印页面成 pdf</span>
    <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">pdf</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;willy.pdf&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&quot;A4&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 使用 browser.close 方法关闭浏览器</span>
    <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="爬虫模拟登录" tabindex="-1"><a class="header-anchor" href="#爬虫模拟登录"><span>爬虫模拟登录</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> puppeteer <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;puppeteer-core&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// import puppeteer from &quot;puppeteer-core&quot;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Page<span class="token punctuation">,</span> Browser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;puppeteer-core&quot;</span>

<span class="token keyword">const</span> newPage <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>
    browser<span class="token operator">:</span> Browser
    page<span class="token operator">:</span> Page
<span class="token punctuation">}</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
        executablePath<span class="token operator">:</span>
            <span class="token string">&quot;C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe&quot;</span><span class="token punctuation">,</span>
        headless<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 关掉无界面模式 或 false（可视化）</span>
        <span class="token comment">// slowMo: 250, // 慢速度，slowMo选项以指定的毫秒减慢Puppeteer的操作</span>
        <span class="token comment">//设置视窗的宽高</span>
        defaultViewport<span class="token operator">:</span> <span class="token punctuation">{</span>
            width<span class="token operator">:</span> <span class="token number">1400</span><span class="token punctuation">,</span>
            height<span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        args<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;--window-size=1400,700&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 使用 puppeteer.launch 方法启动 Chrome 或 Chromium 浏览器</span>
    <span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token keyword">await</span> puppeteer<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>

    <span class="token comment">// 使用 browser.newPage 方法创建一个新页面</span>
    <span class="token keyword">const</span> page<span class="token operator">:</span> Page <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        browser<span class="token punctuation">,</span>
        page<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">doPyt</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> page<span class="token punctuation">,</span> browser <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span><span class="token string">&quot;https://baidu.com&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">&quot;#kw&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;puppeteer&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> delay<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    page<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token string">&quot;#su&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">waitForSelector</span><span class="token punctuation">(</span><span class="token string">&quot;#content_left&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> targetLink <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> links <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span>prototype
            <span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token operator">...</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&quot;.result a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> item<span class="token punctuation">.</span>innerText <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>innerText<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;Puppeteer&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>links<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>links<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> links<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>href
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// throw new Error(&quot;未找到相关链接&quot;)</span>
            <span class="token keyword">return</span> <span class="token string">&quot;https://baidu.com&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span>targetLink<span class="token punctuation">,</span> <span class="token punctuation">{</span> timeout<span class="token operator">:</span> <span class="token number">60000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">waitForSelector</span><span class="token punctuation">(</span><span class="token string">&quot;#content_left&quot;</span><span class="token punctuation">)</span>
    browser<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">doPyt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+t+`" alt="爬虫"></p><h3 id="多元素处理" tabindex="-1"><a class="header-anchor" href="#多元素处理"><span>多元素处理</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> puppeteer <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;puppeteer-core&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Page<span class="token punctuation">,</span> Browser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;puppeteer-core&quot;</span>

<span class="token keyword">const</span> newPage <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>
    browser<span class="token operator">:</span> Browser
    page<span class="token operator">:</span> Page
<span class="token punctuation">}</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
        executablePath<span class="token operator">:</span>
            <span class="token string">&quot;C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe&quot;</span><span class="token punctuation">,</span>
        headless<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 关掉无界面模式 或 false（可视化）</span>
        <span class="token comment">// slowMo: 250, // 慢速度，slowMo选项以指定的毫秒减慢Puppeteer的操作</span>
        <span class="token comment">//设置视窗的宽高</span>
        defaultViewport<span class="token operator">:</span> <span class="token punctuation">{</span>
            width<span class="token operator">:</span> <span class="token number">1400</span><span class="token punctuation">,</span>
            height<span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        args<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;--window-size=1400,700&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 使用 puppeteer.launch 方法启动 Chrome 或 Chromium 浏览器</span>
    <span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token keyword">await</span> puppeteer<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>

    <span class="token comment">// 使用 browser.newPage 方法创建一个新页面</span>
    <span class="token keyword">const</span> page<span class="token operator">:</span> Page <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        browser<span class="token punctuation">,</span>
        page<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">doPyt</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> page<span class="token punctuation">,</span> browser <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 使用 page.goto 方法跳转到指定的网页：</span>
    <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.jd.com/&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#key&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">await</span> input<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">&quot;手机&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">await</span> page<span class="token punctuation">.</span>keyboard<span class="token punctuation">.</span><span class="token function">press</span><span class="token punctuation">(</span><span class="token string">&quot;Enter&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">waitForSelector</span><span class="token punctuation">(</span><span class="token string">&quot;.gl-warp&gt;.gl-item:last-child&quot;</span><span class="token punctuation">)</span>

        <span class="token comment">// 获取到的对象进行 dom 操作，然后获取相应的内容</span>
        <span class="token keyword">const</span> lis <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">$$eval</span><span class="token punctuation">(</span><span class="token string">&quot;.gl-warp&gt;.gl-item&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>els<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
            els<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>innerText<span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lis<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 使用 browser.close 方法关闭浏览器</span>
    <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">doPyt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输入文本与元素点击" tabindex="-1"><a class="header-anchor" href="#输入文本与元素点击"><span>输入文本与元素点击</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> puppeteer <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;puppeteer-core&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Page <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;puppeteer-core&quot;</span>

<span class="token keyword">const</span> newPage <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Page<span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
        executablePath<span class="token operator">:</span>
            <span class="token string">&quot;C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe&quot;</span><span class="token punctuation">,</span>
        headless<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 关掉无界面模式 或 false（可视化）</span>
        <span class="token comment">// slowMo: 250, // 慢速度，slowMo选项以指定的毫秒减慢Puppeteer的操作</span>
        <span class="token comment">//设置视窗的宽高</span>
        defaultViewport<span class="token operator">:</span> <span class="token punctuation">{</span>
            width<span class="token operator">:</span> <span class="token number">1400</span><span class="token punctuation">,</span>
            height<span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        args<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;--window-size=1400,700&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 使用 puppeteer.launch 方法启动 Chrome 或 Chromium 浏览器</span>
    <span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token keyword">await</span> puppeteer<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>

    <span class="token comment">// 使用 browser.newPage 方法创建一个新页面</span>
    <span class="token keyword">const</span> page<span class="token operator">:</span> Page <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> page
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">doPyt</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.baidu.com/&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">waitForSelector</span><span class="token punctuation">(</span><span class="token string">&quot;#kw&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">await</span> input<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> btn <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#su&quot;</span><span class="token punctuation">)</span>
        btn <span class="token operator">&amp;&amp;</span> btn<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment">/* 等待指定的选择器匹配的元素出现在页面中，如果调用此方法时已经有匹配的元素，
  那么此方法立即返回。如果指定的选择器在超时时间后扔不出现，此方法会报错。 
  返回: &lt;Promise&lt;ElementHandle&gt;&gt;*/</span>
        <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">waitForSelector</span><span class="token punctuation">(</span>
            <span class="token string">&quot;div#content_left &gt; div.result-op.c-container.xpath-log&quot;</span>
        <span class="token punctuation">)</span>

        <span class="token keyword">const</span> text1 <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">$eval</span><span class="token punctuation">(</span>
            <span class="token string">&quot;div#content_left &gt; div.result-op.c-container.xpath-log&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> el<span class="token punctuation">.</span>innerText
        <span class="token punctuation">)</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text1<span class="token punctuation">)</span>

        <span class="token doc-comment comment">/** 使用 js 方法 */</span>
        <span class="token keyword">let</span> text2 <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> div<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>
                <span class="token string">&quot;div#content_left &gt; div.result-op.c-container.xpath-log&quot;</span>
            <span class="token punctuation">)</span>
            <span class="token keyword">return</span> div<span class="token punctuation">.</span>innerText
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">doPyt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,208),c=[o];function i(l,u){return s(),a("div",null,c)}const d=n(p,[["render",i],["__file","Nodejs.html.vue"]]),k=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/Nodejs.html","title":"","lang":"zh-CN","frontmatter":{"Author":"willysliang","CreateTime":"2022-08-21T16:24:54.000Z","Modifier":"willysliang","ModifiedTime":"2022-12-28T11:53:11.000Z","Description":"NodeJS"},"headers":[{"level":2,"title":"nodejs","slug":"nodejs","link":"#nodejs","children":[]},{"level":2,"title":"安装 nodejs","slug":"安装-nodejs","link":"#安装-nodejs","children":[{"level":3,"title":"NPM","slug":"npm","link":"#npm","children":[]},{"level":3,"title":"Yarn","slug":"yarn","link":"#yarn","children":[]},{"level":3,"title":"NVM","slug":"nvm","link":"#nvm","children":[]},{"level":3,"title":"NRM","slug":"nrm","link":"#nrm","children":[]},{"level":3,"title":"上传自己的包","slug":"上传自己的包","link":"#上传自己的包","children":[]},{"level":3,"title":"npm安装git上发布的包","slug":"npm安装git上发布的包","link":"#npm安装git上发布的包","children":[]},{"level":3,"title":"npm脚本","slug":"npm脚本","link":"#npm脚本","children":[]},{"level":3,"title":"npm变量","slug":"npm变量","link":"#npm变量","children":[]},{"level":3,"title":"NPX","slug":"npx","link":"#npx","children":[]}]},{"level":2,"title":"cross-env","slug":"cross-env","link":"#cross-env","children":[]},{"level":2,"title":"安装依赖问题","slug":"安装依赖问题","link":"#安装依赖问题","children":[]},{"level":2,"title":"模块化 CommonJS","slug":"模块化-commonjs","link":"#模块化-commonjs","children":[{"level":3,"title":"导入模块原理","slug":"导入模块原理","link":"#导入模块原理","children":[]}]},{"level":2,"title":"全局对象 global","slug":"全局对象-global","link":"#全局对象-global","children":[]},{"level":2,"title":"操作路径 path","slug":"操作路径-path","link":"#操作路径-path","children":[]},{"level":2,"title":"文件操作 fs","slug":"文件操作-fs","link":"#文件操作-fs","children":[{"level":3,"title":"文件读取","slug":"文件读取","link":"#文件读取","children":[]},{"level":3,"title":"文件写入","slug":"文件写入","link":"#文件写入","children":[]},{"level":3,"title":"文件信息状态 stat","slug":"文件信息状态-stat","link":"#文件信息状态-stat","children":[]},{"level":3,"title":"stream 流","slug":"stream-流","link":"#stream-流","children":[]},{"level":3,"title":"pipe 读写流","slug":"pipe-读写流","link":"#pipe-读写流","children":[]},{"level":3,"title":"文件复制","slug":"文件复制","link":"#文件复制","children":[]},{"level":3,"title":"文件重命名与移动","slug":"文件重命名与移动","link":"#文件重命名与移动","children":[]},{"level":3,"title":"文件删除","slug":"文件删除","link":"#文件删除","children":[]},{"level":3,"title":"文件夹操作","slug":"文件夹操作","link":"#文件夹操作","children":[]},{"level":3,"title":"递归删除一个目录及其子目录和文件","slug":"递归删除一个目录及其子目录和文件","link":"#递归删除一个目录及其子目录和文件","children":[]}]},{"level":2,"title":"URL接口","slug":"url接口","link":"#url接口","children":[]},{"level":2,"title":"资源压缩 zib","slug":"资源压缩-zib","link":"#资源压缩-zib","children":[{"level":3,"title":"服务端gzip压缩","slug":"服务端gzip压缩","link":"#服务端gzip压缩","children":[]}]},{"level":2,"title":"网络协议 http","slug":"网络协议-http","link":"#网络协议-http","children":[{"level":3,"title":"服务器请求","slug":"服务器请求","link":"#服务器请求","children":[]},{"level":3,"title":"加载完整项目","slug":"加载完整项目","link":"#加载完整项目","children":[]},{"level":3,"title":"优化版","slug":"优化版","link":"#优化版","children":[]}]},{"level":2,"title":"网络服务 https","slug":"网络服务-https","link":"#网络服务-https","children":[{"level":3,"title":"生成证书","slug":"生成证书","link":"#生成证书","children":[]}]},{"level":2,"title":"数据加密 crypto","slug":"数据加密-crypto","link":"#数据加密-crypto","children":[{"level":3,"title":"计算摘要 hash","slug":"计算摘要-hash","link":"#计算摘要-hash","children":[]},{"level":3,"title":"消息认证 HMAC","slug":"消息认证-hmac","link":"#消息认证-hmac","children":[]},{"level":3,"title":"散列函数 md5","slug":"散列函数-md5","link":"#散列函数-md5","children":[]},{"level":3,"title":"盐值加密","slug":"盐值加密","link":"#盐值加密","children":[]}]},{"level":2,"title":"Buffer 类","slug":"buffer-类","link":"#buffer-类","children":[]},{"level":2,"title":"事件机制模块 events","slug":"事件机制模块-events","link":"#事件机制模块-events","children":[]},{"level":2,"title":"爬虫 puppeteer","slug":"爬虫-puppeteer","link":"#爬虫-puppeteer","children":[{"level":3,"title":"爬虫模拟登录","slug":"爬虫模拟登录","link":"#爬虫模拟登录","children":[]},{"level":3,"title":"多元素处理","slug":"多元素处理","link":"#多元素处理","children":[]},{"level":3,"title":"输入文本与元素点击","slug":"输入文本与元素点击","link":"#输入文本与元素点击","children":[]}]}],"git":{"updatedTime":1708562968000,"contributors":[{"name":"willy","email":"willysliang@qq.com","commits":3},{"name":"willy","email":"willysliang","commits":2}]},"filePathRelative":"前端基础/Nodejs.md"}');export{d as comp,k as data};
