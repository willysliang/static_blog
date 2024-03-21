import{_ as n,o as s,c as a,b as e}from"./app-Bvx-HY_0.js";const i="/static_blog/assets/image-20221212173515655-D-BlvElN.png",l={},t=e(`<h2 id="monorepo-介绍" tabindex="-1"><a class="header-anchor" href="#monorepo-介绍"><span>monorepo 介绍</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## monorepo 是什么</span>
monorepo 是一种将多个项目代码存储在一个仓库里的软件开发策略（mono 意为单一，repo 意为 仓库）。
与之相对的是另一种流行的代码管理方式 MultiRepo，即每个项目对应一个单独的仓库来分散管理。


<span class="token comment">## monorepo 优点</span>
- 易于代码复用：所有项目代码集中于单一仓库，易于抽离出共用的业务组件或工具，并通过 TypeScript，Lerna 或其他工具进行代码内引用；
- 易于依赖管理：项目之间的引用路径内化于单一仓库，当某个项目的代码修改后，易于追踪其影响的是其他哪些项目。通过工具，易于版本依赖管理和版本号自动升级；并且所有的项目都是使用最新的代码，不会产生其它项目版本更新不及时的情况；
- 易于代码重构：代码重构难在不确定对某个项目的修改是否对于其他项目是破坏性的。而 monorepo 使得能够明确知道代码的影响范围，并且能够对被影响的项目可以进行统一的测试，利于不断优化代码；
- 倡导开放，透明，共享的组织文化，有利于开发者成长，代码质量的提升：monorepo 使得开发者都被鼓励去查看和修改他人的代码，同时，也会激起开发者维护代码，和编写单元测试的责任心，这将会形成一种良性的技术氛围，从而保障整个组织的代码质量；


<span class="token comment">## monorepo 缺点</span>
- 不易于项目粒度的权限管理；
- 额外的学习成本：monorepo 使得增加理清各个代码仓库之间的相互逻辑的成本；
- 需要工具链和自动构建工具的支持：项目若很庞大且没有工具链的支持，那么 <span class="token function">git</span> 管理、安装依赖、构建、部署会很麻烦和耗时。比如可以基于 Lerna、Yarn Workspaces 等工具更加自动化的处理依赖包之间的构建和发布。



<span class="token comment">## 利用 tomono 基于已有的项目转化为 monorepo 项目</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="monorepo落地" tabindex="-1"><a class="header-anchor" href="#monorepo落地"><span>Monorepo落地</span></a></h2><blockquote><h3 id="_1-锁定环境-volta-or-nvm" tabindex="-1"><a class="header-anchor" href="#_1-锁定环境-volta-or-nvm"><span>1. 锁定环境：volta or nvm</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 1. 锁定环境：volta or nvm</span>
除了使用 Docker 和显式的在文档中声明 <span class="token function">node</span> 和 npm（yarn）的版本之外，我们需要一个锁定环境的强力工具。相比使用 nvm，volta 支持当项目 CLI 工具与全局不兼容时，自动切换为项目指定的版本。
Volta 是用 Rust 构建的 JavaScript 工具管理器，它可以让我们轻松地在项目中锁定 node，npm（yarn） 的版本。只需在安装完 Volta 后，在项目的根目录中执行 volta pin 命令，那么无论您当前使用的 <span class="token function">node</span> 或 npm（yarn）版本是什么，volta 都会自动切换为您指定的版本。
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-利用-workspace-特性复用-package" tabindex="-1"><a class="header-anchor" href="#_2-利用-workspace-特性复用-package"><span>2. 利用 workspace 特性复用 package</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 2. 利用 workspace 特性复用 package</span>
  workspace 特性使得：
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
          
		<span class="token number">3</span>. 为了避免我们误操作将仓库发布，在 package.json 文件中，设置 private 属性为 true。然后，在项目根目录中执行 <span class="token function">npm</span> <span class="token function">install</span> 或 <span class="token function">yarn</span> <span class="token function">install</span> 后，项目根目录中生成由所有子项目共用的 <span class="token function">npm</span> 包和我们自己的子项目共同构成的 node_modules 目录，正因如此，才使得可以像引入一般的 <span class="token function">npm</span> 模块一样彼此相互引用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-统一-eslint-typescript-babel-配置" tabindex="-1"><a class="header-anchor" href="#_3-统一-eslint-typescript-babel-配置"><span>3. 统一 ESlint / Typescript / babel 配置</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 3. 统一 ESlint / Typescript / babel 配置</span>
可以在 项目根目录设置通用的 tsconfig.base.json / .eslintrc / .babelrc 配置，然后在子项目的对应配置文件中声明继承 extend 属性即可：
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-统一脚本-script-配置" tabindex="-1"><a class="header-anchor" href="#_4-统一脚本-script-配置"><span>4. 统一脚本 script 配置</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 4. 统一脚本 script 配置</span>
每个子项目的 package.json 文件中的 scripts 属性都大同小异，我们可以使用 scripty 管理脚本命令提高复用性。
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-利用-lerna-统一包管理" tabindex="-1"><a class="header-anchor" href="#_5-利用-lerna-统一包管理"><span>5. 利用 lerna 统一包管理</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 5. 利用 lerna 统一包管理 </span>
lerna 可以帮助解决 monorepo 因为多个子项目放在一个代码仓库，并且子项目之间又相互依赖时带来的两个棘手问题：
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-commitlint-约束-commit-信息" tabindex="-1"><a class="header-anchor" href="#_6-commitlint-约束-commit-信息"><span>6. commitlint：约束 commit 信息</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 6.  commitlint：约束 commit  信息</span>
commitlint 可以帮助我们检查提交的 commit 信息，它强制约束我们的 commit 信息必须在开头附加指定类型，用于标示本次提交的大致意图，支持的类型关键字有：
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="lerna" tabindex="-1"><a class="header-anchor" href="#lerna"><span>lerna</span></a></h2><blockquote><p><img src="`+i+`" alt="image-20221212173515655"></p></blockquote><h2 id="pnpm-构建motorepo" tabindex="-1"><a class="header-anchor" href="#pnpm-构建motorepo"><span>pnpm 构建motorepo</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 1. 初始化仓库</span>
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
		$ <span class="token function">pnpm</span> i typescript <span class="token parameter variable">-D</span> <span class="token parameter variable">-w</span>    <span class="token comment"># \`-w\` 参数</span>

    会在最外层 package.json 生成如下信息：
        <span class="token punctuation">{</span>
          <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;test-pnpm-monorepo&quot;</span>,
          <span class="token punctuation">..</span>.
          <span class="token string">&quot;devDependencies&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;typescript&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;^4.5.4&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

（2）特定 package 增加外部依赖
    $ <span class="token function">pnpm</span> i debug <span class="token parameter variable">--filter</span> @test/lib    <span class="token comment"># \`--filter\` 为制定 package 添加依赖</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,8),c=[t];function o(p,r){return s(),a("div",null,c)}const u=n(l,[["render",o],["__file","monorepo.html.vue"]]),m=JSON.parse('{"path":"/%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7/monorepo.html","title":"","lang":"zh-CN","frontmatter":{"Author":"willysliang","CreateTime":"2023-01-10T11:27:02.000Z","Modifier":"willysliang","ModifiedTime":"2023-01-10T12:05:14.000Z","Description":"monorepo"},"headers":[{"level":2,"title":"monorepo 介绍","slug":"monorepo-介绍","link":"#monorepo-介绍","children":[]},{"level":2,"title":"Monorepo落地","slug":"monorepo落地","link":"#monorepo落地","children":[]},{"level":2,"title":"lerna","slug":"lerna","link":"#lerna","children":[]},{"level":2,"title":"pnpm 构建motorepo","slug":"pnpm-构建motorepo","link":"#pnpm-构建motorepo","children":[]}],"git":{"updatedTime":1701137510000,"contributors":[{"name":"willy","email":"willysliang","commits":2}]},"filePathRelative":"构建工具/monorepo.md"}');export{u as comp,m as data};
