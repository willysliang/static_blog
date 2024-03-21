import{_ as l,r as t,o as c,c as p,d as n,e as s,a as e,b as i}from"./app-Bvx-HY_0.js";const r="/static_blog/assets/image-20210401230906328-DNOS9uv_.png",o={},d=i('<h3 id="git概念" tabindex="-1"><a class="header-anchor" href="#git概念"><span>Git概念</span></a></h3><blockquote><ul><li>**工作区：**就是你在电脑里能看到的目录。</li><li>**暂存区：**英文叫 stage 或 index。一般存放在 <strong>.git</strong> 目录下的 index 文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。</li><li>**版本库：**工作区有一个隐藏目录 <strong>.git</strong>，这个不算工作区，而是 Git 的版本库。</li></ul><p><img src="'+r+`" alt="image-20210401230906328"></p></blockquote><h3 id="安装配置git" tabindex="-1"><a class="header-anchor" href="#安装配置git"><span>安装配置git</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 安装 Git</span>
yum <span class="token function">install</span> <span class="token function">git</span> <span class="token parameter variable">-y</span>


<span class="token comment"># 配置邮箱、用户名（注意：邮箱格式必须要正确）</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name willysliang	<span class="token comment"># 设置用户名</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email willysliang@qq.com	<span class="token comment">#设置用户邮箱</span>
<span class="token function">git</span> config user.name	<span class="token comment">#查看用户名</span>
<span class="token function">git</span> config user.email	<span class="token comment">#查看邮箱</span>
<span class="token function">git</span> show 	<span class="token comment">#显示所有信息</span>


<span class="token comment">#适当的地显示颜色</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> color.ui ture


<span class="token comment"># 创建仓库</span>
<span class="token function">mkdir</span> demo	<span class="token comment">#创建仓库</span>
<span class="token function">git</span> init	<span class="token comment">#进行初始化，需要在版本库目录中</span>
<span class="token function">touch</span> <span class="token function">file</span>	<span class="token comment">#创建文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="git-init-和-git-init-bare-的区别" tabindex="-1"><a class="header-anchor" href="#git-init-和-git-init-bare-的区别"><span>git init 和 git init --bare 的区别</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### git init 和 git init --bare 的区别</span>
- <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> init<span class="token variable">\`</span></span> 创建非裸存储库
- <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> init <span class="token parameter variable">--bare</span><span class="token variable">\`</span></span> 创建裸存储库

裸存储库是没有工作副本的 <span class="token function">git</span> 存储库，因此 .git 的内容是该目录的顶级内容。
使用非裸存储库在本地工作，并使用裸存储库作为中央服务器与其他人共享您的更改。例如，当您在 <span class="token variable"><span class="token variable">\`</span>github.com<span class="token variable">\`</span></span> 上创建存储库时，它被创建为一个裸存储库。
注意：<span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--bare</span><span class="token variable">\`</span></span> 用于远程存储库，而非本地存储库。


<span class="token comment">#### 案例</span>
<span class="token number">1</span>. 在您的计算机中：
$ <span class="token function">git</span> init
$ <span class="token function">touch</span> README
$ <span class="token function">git</span> <span class="token function">add</span> README
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;initial commit&quot;</span>

<span class="token number">2</span>. 在服务器上：
$ <span class="token builtin class-name">cd</span> /www/project
$ <span class="token function">git</span> init <span class="token parameter variable">--bare</span>

<span class="token number">3</span>. 在客户端，你推送：
$ <span class="token function">git</span> push username@server:/www/project main

然后，您可以通过将其添加为远程来保存键入内容。
服务器端的存储库将通过拉取和推送的方式获得提交，而不是通过您编辑文件然后在服务器中提交文件，因此它是一个裸存储库。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="git-hooks" tabindex="-1"><a class="header-anchor" href="#git-hooks"><span>Git hooks</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Git hooks</span>
Git hooks 是每次 Git 存储库中发生特定事件时自动运行的脚本。它们允许您定制 Git 的内部行为，并在开发生命周期的关键点触发可定制的操作。

Git hooks 的常见用例包括鼓励提交策略、根据存储库的状态改变项目环境，以及实现连续集成工作流。但是，由于脚本是无限可定制的，您可以使用 Git hooks 来自动化或优化开发工作流的几乎任何方面。但如果添加的 Hook 脚本未正常运行，则 Git 操作将不会通过。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Hook 脚本置于目录 <code>~/.git/hooks</code> 中，以可执行文件的形式存在。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token parameter variable">-lah</span> .git/hooks
applypatch-msg.sample     pre-push.sample
commit-msg.sample         pre-rebase.sample
fsmonitor-watchman.sample pre-receive.sample
post-update.sample        prepare-commit-msg.sample
pre-applypatch.sample     update.sample
pre-commit.sample         push-to-checkout.sample
pre-merge-commit.sample
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上常用 hooks 有：</p><ul><li><code>pre-commit</code></li><li><code>pre-push</code></li><li><code>commit-msg</code></li></ul><p>另外 git hooks 可使用 <code>core.hooksPath</code> 自定义脚本位置。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 可通过命令行配置 core.hooksPath</span>
$ <span class="token function">git</span> config <span class="token string">&#39;core.hooksPath&#39;</span> .husky

<span class="token comment"># 也可通过写入文件配置 core.hooksPath</span>
$ <span class="token function">cat</span> .git/config
<span class="token punctuation">[</span>core<span class="token punctuation">]</span>
  hooksPath <span class="token operator">=</span> .husky
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),v={href:"https://git-scm.com/docs/git-config#Documentation/git-config.txt-corehooksPath",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"core.hooksPath",-1),u=n("code",null,"npm scripts",-1),m={href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"},k=i(`<p><code>~/.husky</code> 目录下手动创建 hook 脚本。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 手动创建 pre-commit hook</span>
$ <span class="token function">vim</span> .husky/pre-commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>pre-commit</code> 中进行代码风格校验：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>

<span class="token function">npm</span> run lint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="git-diff" tabindex="-1"><a class="header-anchor" href="#git-diff"><span>Git Diff</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Git Diff</span>
当执行 <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> fetch<span class="token variable">\`</span></span> 拉取远程最新代码到本地，但想要在 <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> merge<span class="token variable">\`</span></span> 合并之前查看一些文件的变动时，可以使用 <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> <span class="token function">diff</span><span class="token variable">\`</span></span> 命令。
注意：如果是少量代码的改动，<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> <span class="token function">diff</span><span class="token variable">\`</span></span> 还是挺方便的，但如果代码量较大，建议使用 GUI 工具。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="查看变化中的差异" tabindex="-1"><a class="header-anchor" href="#查看变化中的差异"><span>查看变化中的差异</span></a></h5><p><code>git diff</code> 显示暂存区和工作区的差异</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span> <span class="token comment"># 具体某个文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="显示暂存区与上次-commit-的差异" tabindex="-1"><a class="header-anchor" href="#显示暂存区与上次-commit-的差异"><span>显示暂存区与上次 commit 的差异</span></a></h5><p><code>--cached</code> 和 <code>--staged</code> 都可以用于显示暂存区与上次 commit 的差异：</p><div class="language-git line-numbers-mode" data-ext="git" data-title="git"><pre class="language-git"><code>git diff --cached [file]
git diff --staged [file]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="查看两个分支之间的差异" tabindex="-1"><a class="header-anchor" href="#查看两个分支之间的差异"><span>查看两个分支之间的差异</span></a></h5><p>使用 <code>git diff &lt;branch&gt;...&lt;other-branch&gt;</code> 查看 <code>&lt;branch&gt;</code> 和 <code>&lt;other-branch&gt;</code> 之间的差异 。</p><ul><li><code>git diff &lt;branch&gt;...&lt;other-branch&gt;</code> 比较两个分支。</li><li><code>git diff 76ce3e6...e251d8d</code> 比较两个特定的提交。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span><span class="token punctuation">..</span>.<span class="token operator">&lt;</span>other-branch<span class="token operator">&gt;</span>
$ <span class="token function">git</span> <span class="token function">diff</span> patch-1<span class="token punctuation">..</span>.patch-2
<span class="token comment"># 显示分支 patch-1 和 patch-2 之间的差异</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="统计数据" tabindex="-1"><a class="header-anchor" href="#统计数据"><span>统计数据</span></a></h5><p><code>--stat</code> 生成差异统计。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--stat</span>

<span class="token comment"># app/a.txt    | 2 +-</span>
<span class="token comment"># app/b.txt    | 8 ++----</span>
<span class="token comment"># 2 files changed, 10 insertions(+), 84 deletions(-)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>--shortstat</code> 是 <code>--stat</code> 选项的简化版本，它不显示具体的文件名及一些图形部分，只输出最后一行统计数据。</p><p>显示今天写了多少行代码：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--shortstat</span> <span class="token string">&quot;@{0 day ago}&quot;</span>
<span class="token comment"># 10 files changed, 62 insertions(+), 15 deletions(-)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="仅显示修改过的文件名" tabindex="-1"><a class="header-anchor" href="#仅显示修改过的文件名"><span>仅显示修改过的文件名</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--summary</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="文件保存-add-、commit" tabindex="-1"><a class="header-anchor" href="#文件保存-add-、commit"><span>文件保存 add 、commit</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 文件添加到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> ./abc.md	<span class="token comment">#将abc.md文件存放到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> ./			<span class="token comment">#添加当前目录下的所有文件到暂存区</span>


<span class="token comment"># 暂存区文件存放到仓库</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;上传说明描述内容&quot;</span>	<span class="token comment">#把代码放到仓库</span>
<span class="token function">git</span> commit <span class="token parameter variable">-a</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;message&quot;</span>		<span class="token comment">#-a参数可将所有已跟踪文件中的执行修改或删除操作的文件都提交到本地仓库，即使它们没有经过git add添加到暂存区（一般不使用）</span>


<span class="token comment"># 修改提交信息（修改上次提交的信息，值message）</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;所修改的提交信息&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="查看信息-status-log" tabindex="-1"><a class="header-anchor" href="#查看信息-status-log"><span>查看信息 <code>status / log</code></span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看状态</span>
<span class="token function">git</span> status	<span class="token comment">#仓库内文件的状态变化信息</span>
<span class="token function">git</span> status <span class="token parameter variable">--short</span>	<span class="token comment">#或git status -s对status简洁输出</span>
$ <span class="token function">git</span> status <span class="token parameter variable">--porcelain</span> <span class="token comment"># 跟上述一致，也是为对 status 简洁输出</span>


<span class="token comment"># 查看提交记录</span>
<span class="token function">git</span> log				<span class="token comment"># 显示当前分支的提交日志</span>
<span class="token function">git</span> log <span class="token parameter variable">--oneline</span>	<span class="token comment"># 简写说明，简洁版的日志 或 git log --pretty=oneline --abbrev-commit</span>
<span class="token function">git</span> log <span class="token parameter variable">--stat</span>		<span class="token comment"># 显示 commit 历史，以及每次 commit 发生变更的文件</span>
<span class="token function">git</span> log <span class="token parameter variable">--oneline</span> <span class="token parameter variable">-number</span>	<span class="token comment"># 查看最近的 number 个提交数</span>


<span class="token comment"># 获取漂亮的日志信息</span>
<span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%h - %an, %ar : %s&quot;</span>		<span class="token comment"># 以给定格式有序的打印提交日志的内容、</span>
<span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%Cred(%h)%Creset - %Cgreen(%an, %ar)%Creset : %Cblue%s&quot;</span> <span class="token comment"># 为输出日志设置颜色</span>


<span class="token comment"># 显示提交历史图表</span>
<span class="token comment">## （\`--graph\` 选项可以以**图形**方式展示日志）</span>
<span class="token function">git</span> log <span class="token parameter variable">--graph</span>
<span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%h %s&quot;</span> <span class="token parameter variable">--graph</span>


<span class="token comment"># 基于时间的日志记录</span>
<span class="token comment">## 可以在特定时间范围内记录条目。非常适合检查每日项目的提交记录</span>
<span class="token function">git</span> log <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token string">&quot;yesterday&quot;</span> <span class="token parameter variable">--oneline</span>
<span class="token function">git</span> log <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token string">&quot;last month&quot;</span> <span class="token parameter variable">--oneline</span>
<span class="token comment">## 如果需要找到给定日期范围之间的提交。可以使用 \`--after\` 和 \`--before\` 选项</span>
<span class="token function">git</span> log <span class="token parameter variable">--after</span><span class="token operator">=</span><span class="token string">&quot;2022-9-28&quot;</span> <span class="token parameter variable">--before</span><span class="token operator">=</span><span class="token string">&quot;2022-9-29&quot;</span> <span class="token parameter variable">--oneline</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="版本回退-reset" tabindex="-1"><a class="header-anchor" href="#版本回退-reset"><span>版本回退 reset</span></a></h3><blockquote><ul><li><code>HEAD</code>指向的版本就是当前版本，因此Git允许我们在版本的历史之间穿梭，使用命令<code>git reset --hard commit_id</code></li><li>穿梭前，用<code>git log</code>可以查看提交历史，以便确定要回退到哪个版本。</li><li>要重返未来，用<code>git reflog</code>查看命令历史，以便确定要回到未来的哪个版本。</li><li>即使执行 <code>git reset</code> 命令之后，也可以使用 <code>git reflog</code> 命令找回那些丢弃掉的提交</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> Head~0		<span class="token comment">#获取最近的版本并覆盖，0为最新的一个</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^		<span class="token comment">#回退上个版本</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^^	<span class="token comment">#回退到上上个版本</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> 版本号	<span class="token comment">#回退到指定版本（版本号可不写全）</span>

<span class="token function">git</span> reflog					<span class="token comment">#查看隐藏的版本号(即在版本回退前存在，回退后不存在的版本)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="撤销修改-checkout" tabindex="-1"><a class="header-anchor" href="#撤销修改-checkout"><span>撤销修改 checkout</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 撤销修改 checkout</span>
- <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> checkout -- readme.txt<span class="token variable">\`</span></span>：把 readme.txt 文件在工作区的修改全部撤销。
- <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> checkout -- <span class="token function">file</span><span class="token variable">\`</span></span>：撤销整个文件的修改。命令中若是没有<span class="token variable"><span class="token variable">\`</span>--<span class="token variable">\`</span></span>，就会变成<span class="token string">&#39;切换到另一分支&#39;</span>的命令。
    - 场景1：当你该乱了工作区某个文件的内容，想直接丢弃工作区的修改时，使用命令<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> checkout -- <span class="token function">file</span><span class="token variable">\`</span></span>。
    - 场景2：当你不但该乱工作区某个文件的内容，还添加到暂存区时，想丢弃修改，则需要分两步：
        <span class="token number">1</span>. <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> reset HEAD <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span><span class="token variable">\`</span></span> 回退到场景1；
        <span class="token number">2</span>. <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> checkout -- <span class="token function">file</span><span class="token variable">\`</span></span> 丢弃所选文件的修改。
    - 场景3：已经提交了不合适的修改到版本库时，想要撤销本次修改，参考版本回退，但前提是没有推送到远程库。
- 注意：使用 checkout 需要你本来就已经存在文件于版本库中，否则会显示找不到该文件。


$ <span class="token function">git</span> reset HEAD readme.txt
$ <span class="token function">git</span> checkout -- readme.txt

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拉取代码-fetch-pull" tabindex="-1"><a class="header-anchor" href="#拉取代码-fetch-pull"><span>拉取代码 fetch/pull</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 拉取代码</span>
注意：在默认模式下，<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> pull<span class="token variable">\`</span></span> 等价于 <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> fetch <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> merge FETCH_HEAD<span class="token variable">\`</span></span>。

- 使用 <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> pull<span class="token variable">\`</span></span> 时，Git 会尝试自动合并。它是上下文敏感的，因此 Git 会将任何拉入的提交合并到您当前工作的分支中。<span class="token variable"><span class="token variable">\`</span>pull<span class="token variable">\`</span></span> 会直接自动合并提交，而不让您先查看它们。如果你不小心管理你的分支，你可能会经常遇到冲突。

- 使用 <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> fetch<span class="token variable">\`</span></span> 时，Git 从目标分支收集当前分支中不存在的任何提交，并将其存储在本地存储库中。但是，它不会将它们与当前分支合并。如果您需要使存储库保持最新状态，但正在处理更新文件可能会导致冲突时，这一点尤其有用。要将提交集成到当前分支中，必须在之后使用 <span class="token variable"><span class="token variable">\`</span>merge<span class="token variable">\`</span></span>。

当你 <span class="token variable"><span class="token variable">\`</span>fetch<span class="token variable">\`</span></span> 时，你可以先使用 <span class="token variable"><span class="token variable">\`</span><span class="token function">diff</span><span class="token variable">\`</span></span> 查看更新后的差异之后，再选择 <span class="token variable"><span class="token variable">\`</span>merge<span class="token variable">\`</span></span>。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="远程仓库配置相关" tabindex="-1"><a class="header-anchor" href="#远程仓库配置相关"><span>远程仓库配置相关</span></a></h3><h4 id="ssh生成" tabindex="-1"><a class="header-anchor" href="#ssh生成"><span>SSH生成</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> ~/.ssh
<span class="token builtin class-name">cd</span> ~/.ssh
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&#39;willy&#39;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&#39;willysliang@qq.com&#39;</span>

<span class="token comment"># 生成公钥和私钥</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;willysliang@qq.com&quot;</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;github_id_rsa&quot;</span>

连续按三次回车

<span class="token comment"># 在用户主目录的\`.ssh\`目录里有\`id_rsa\`和\`id_rsa.pub\`两个文件，这两个是SSH Key的秘钥对，\`id_rsa\`是私钥，\`id_rsa.pub\`是公钥</span>


<span class="token comment"># GitHub设置公钥，打开“Account settings”，“SSH Keys”页面：然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴\`id_rsa.pub\`文件的内容.</span>


<span class="token comment">#绑定好github上的ssh后，关联本地仓库（origin为远程库名，且关联必须放公钥到github账号列表上，否则推送不了数据）</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:willy-liang/willy.git


<span class="token comment">#把本地库的内容推送到github上</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master
或 <span class="token function">git</span> push ssh地址 master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="同机关联多个远程仓库-并行" tabindex="-1"><a class="header-anchor" href="#同机关联多个远程仓库-并行"><span>同机关联多个远程仓库(并行)</span></a></h4><blockquote><p><strong>1、创建ssh key</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 进入用户目录下的 .ssh 文件夹下，路径会因你使用的操作系统不同而略有差异</span>
<span class="token builtin class-name">cd</span> ~/.ssh

<span class="token comment"># 生成 key</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;willysliang@qq.com&quot;</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;gitee_id_rsa&quot;</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;willysliang@qq.com&quot;</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;github_id_rsa&quot;</span>

<span class="token comment"># 最终生成四个key文件</span>
在用户主目录的.ssh目录里有id_rsa和id_rsa.pub两个文件，这两个是SSH Key的秘钥对，id_rsa是私钥，id_rsa.pub是公钥
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2、创建配置文件</strong>（在.ssh文件夹中创建config文件）</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitee_id_rsa

# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/github_id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3、绑定ssh</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#绑定好github上的ssh后，关联本地仓库（origin为远程库名，且关联必须放公钥到github账号列表上，否则推送不了数据）</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:willy-liang/willy.git
<span class="token function">git</span> remote <span class="token function">add</span> gitee git@gitee.com:liangwilly/willy.git
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>	<span class="token comment">#查看远程信息表</span>
<span class="token function">git</span> remote <span class="token parameter variable">-rm</span> gitee	<span class="token comment">#删除远程库</span>

<span class="token comment">#把本地库的内容推送到github与gitee上</span>
<span class="token function">git</span> push origin master
<span class="token function">git</span> push gitee master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="gitlab无需每次输入账号密码" tabindex="-1"><a class="header-anchor" href="#gitlab无需每次输入账号密码"><span>GitLab无需每次输入账号密码</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## GitLab无需每次输入账号密码</span>
<span class="token number">1</span>. 添加SSH到本地，然后把SHH放入GitLab上
<span class="token number">2</span>. 若再次拉取代码和提取代码应无需再输密码，若还需输入密码
   <span class="token number">1</span>. 在命令行中输入：<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> credential.helper store<span class="token variable">\`</span></span>
   <span class="token number">2</span>. 然后操作 pull/push 会让输入用户名密码，第一次输入进去。
   <span class="token number">3</span>. 下次再操作pull/push时就不需要输入用户名密码了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="同时推送两个存储库并保持同步" tabindex="-1"><a class="header-anchor" href="#同时推送两个存储库并保持同步"><span>同时推送两个存储库并保持同步</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> remote set-url <span class="token parameter variable">--add</span> <span class="token parameter variable">--push</span> origin git@github.com:lio-zero/blog.git
<span class="token function">git</span> remote set-url <span class="token parameter variable">--add</span> <span class="token parameter variable">--push</span> origin git@github.com:lio-zero/news.git

<span class="token comment"># 使用 --push 可以操作推送 Url，而不是获取 Url</span>
<span class="token comment"># 使用 --add 将添加新的Url，而不是更改现有的 Url</span>

<span class="token comment"># 执行 git push 将更改发送到两个存储库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="删除-git-缓存中的账号密码" tabindex="-1"><a class="header-anchor" href="#删除-git-缓存中的账号密码"><span>删除 git 缓存中的账号密码</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 删除 git 缓存中的账号密码</span>
<span class="token function">git</span> credential-manager uninstall

<span class="token comment">## 缓存输入的用户名和密码</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> credential.helper wincred
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="ssh连接校验异常" tabindex="-1"><a class="header-anchor" href="#ssh连接校验异常"><span>ssh连接校验异常</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## ssh 连接校验错误</span>

<span class="token comment">### 1. 连接异常</span>
在连接github时，执行”ssh <span class="token parameter variable">-T</span> git@github.com” 命令时，出现
ssh: connect to <span class="token function">host</span> github.com port <span class="token number">22</span>: Connection timed out
fatal: Could not <span class="token builtin class-name">read</span> from remote repository.


<span class="token comment">### 解决方案</span>
<span class="token comment">#### 1. 打开存放 ssh 的目录</span>
$ <span class="token builtin class-name">cd</span> ~/.ssh


<span class="token comment">#### 2. 新建 config 文件</span>
Host github.com
User 注册github的邮箱
Hostname ssh.github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa <span class="token comment"># github 配置的私钥</span>
Port <span class="token number">443</span>

Host gitlab.com
Hostname altssh.gitlab.com
User 注册gitlab的邮箱
Port <span class="token number">443</span>
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa <span class="token comment"># gitlab 配置的私钥</span>


<span class="token comment">#### 3. 删除 config 中的权限</span>
找到C:<span class="token punctuation">\\</span>用户<span class="token punctuation">\\</span>用户名<span class="token punctuation">\\</span>.ssh<span class="token punctuation">\\</span>config文件
属性 —<span class="token operator">&gt;</span> 安全 —<span class="token operator">&gt;</span> 高级 —<span class="token operator">&gt;</span> 禁用继承 —<span class="token operator">&gt;</span>删除所有继承项 —<span class="token operator">&gt;</span> 确定.


<span class="token comment">#### 4. 执行连接操作</span>
$ <span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com

如果出现提示则输入：yes 回车

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="上传代码报403错误" tabindex="-1"><a class="header-anchor" href="#上传代码报403错误"><span>上传代码报403错误</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 上传代码到远程仓库报403错误</span>
<span class="token comment">### 报错信息描述</span>
Connection reset by <span class="token number">20.205</span>.243.160 port <span class="token number">443</span>
fatal: Could not <span class="token builtin class-name">read</span> from remote repository.
Please <span class="token function">make</span> sure you have the correct access rights
and the repository exists.


<span class="token comment">### 原因分析</span>
出现这错误一般是以下两种原因：
	- 客户端与服务端未生成 <span class="token function">ssh</span> key
	- 客户端与服务端的ssh key不匹配
为解决以上问题，我们需要重新生成一次ssh key ，并重新配置一下GitHub账户即可。


<span class="token comment">### 解决</span>
<span class="token number">1</span>. 生成新的SSH key
如果是客户端与服务端未生成ssh key，直接生成新的 rsa 密匙即可。
$ ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;youremail@example.com&quot;</span>
如果是客户端与服务端的ssh key 不匹配，此时需要先将本地生成的 id_rsa以及id_rsa.pub这两个文件【一般在用户名下的.ssh文件夹下】删除掉，然后再使用上述指令生成新的rsa密钥。

<span class="token comment">#### 补充说明</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;邮箱&quot;</span>：这条命令的目的是为了让本地机器ssh登录远程机器上的GitHub账户无需输入密码。
ssh-keygen（基于密匙的安全验证）：需要依靠密钥进行安全验证，必须为自己创建一对密钥，并把公用密钥放在需要访问的服务器上。
	<span class="token parameter variable">-t</span> 即指定密钥的类型。密钥的类型有两种，一种是RSA，一种是DSA。
	<span class="token parameter variable">-b</span> 指定密钥长度。对于RSA密钥，最小要求768位，默认是2048位。命令中的4096指的是RSA密钥长度为4096位。DSA密钥必须恰好是1024位<span class="token punctuation">(</span>FIPS <span class="token number">186</span>-2 标准的要求<span class="token punctuation">)</span>。
	<span class="token parameter variable">-C</span> 表示要提供一个新注释，用于识别这个密钥。“邮箱”里面不一定非要填邮箱，可以是任何内容，邮箱仅仅是识别用的key


<span class="token number">2</span>. 将SSH key 添加到 ssh-agent
使用 <span class="token variable"><span class="token variable">\`</span>ssh-add ~/.ssh/id_rsa<span class="token variable">\`</span></span> 将产生的新ssh key添加到ssh-agent中：
补充： 如果出现“Could not <span class="token function">open</span> a connection to your authentication agent.”的错误
		- $ <span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>ssh-agent <span class="token parameter variable">-s</span><span class="token variable">)</span></span>&quot;</span>
		- $ <span class="token builtin class-name">eval</span> <span class="token variable"><span class="token variable">\`</span>ssh-agent<span class="token variable">\`</span></span>
		- 然后再次执行 ssh-add ~/.ssh/id_rsa 指令。

<span class="token number">3</span>. 将SSH key 添加到你的GitHub账户

<span class="token number">4</span>. 验证 key
使用 <span class="token variable"><span class="token variable">\`</span><span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com<span class="token variable">\`</span></span> 对ssh key 进行验证

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="远程仓库操纵" tabindex="-1"><a class="header-anchor" href="#远程仓库操纵"><span>远程仓库操纵</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 克隆GitHub项目到本地</span>
- <span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> clone 仓库地址<span class="token variable">\`</span></span>
- git支持多种协议，包括https（速度慢、每次推送必须输入口令），但ssh协议速度最快。
- 在自己的账号下clone仓库才能有权限推送修改；别人的仓库会因无权限而没法修改。


<span class="token comment">## 提交代码到GitHub</span>
- 将房间master分支里的代码上传到Github仓库中：<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> push 服务器地址 master<span class="token variable">\`</span></span>
- 从Github仓库里的master分支拿到本地：<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> pull 服务器地址 master<span class="token variable">\`</span></span>
		（本地要初始化一个克隆仓库，此方法为合并数据）
- 把所有的内容拿到本地：<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> clone 服务器地址<span class="token variable">\`</span></span>
		（此方法会覆盖本地的内容数据）


<span class="token comment">## 拉取远程仓库的代码</span>
<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> pull<span class="token variable">\`</span></span>：从远程仓库获取最新版本并 merge 到本地
<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> fetch<span class="token variable">\`</span></span>：从远程仓库获取最新版本到本地，不会自动 merge


<span class="token comment">## 删除远程仓库的绑定（GitHub库）</span>
- 查看远程库信息：<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> remote <span class="token parameter variable">-v</span><span class="token variable">\`</span></span>
- 删除命名为origin的远程库：<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> remote <span class="token function">rm</span> origin<span class="token variable">\`</span></span>
- 关联远程库：<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> remote <span class="token function">add</span> origin git@server-name:path/repo-name.git<span class="token variable">\`</span></span>
- 推送master分支的所有内容：<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master<span class="token variable">\`</span></span>
		注意：加上 <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">-u</span><span class="token variable">\`</span></span>，git会把当前分支与远程分支进行关联（此方法只在当前目录下有效）


<span class="token comment">## 删除远程仓库的文件</span>
<span class="token number">1</span>. 先把github上的文件拉取下来：<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> pull origin master<span class="token variable">\`</span></span>
<span class="token number">2</span>. 删除磁盘上的文件：<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> test.md<span class="token variable">\`</span></span>
<span class="token number">3</span>. 重新提交：<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;删除了test.md文件&#39;</span><span class="token variable">\`</span></span>
<span class="token number">4</span>. 上传到远程仓库更新：<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master<span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="从一个git仓库拷贝到另一个git仓库" tabindex="-1"><a class="header-anchor" href="#从一个git仓库拷贝到另一个git仓库"><span>从一个git仓库拷贝到另一个git仓库</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 从一个git仓库拷贝到另一个git仓库</span>
<span class="token number">1</span>、从原地址克隆一份裸版本库
$ <span class="token function">git</span> clone <span class="token parameter variable">--bare</span> http://<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">(</span>原始仓库地址<span class="token punctuation">)</span>


<span class="token number">2</span>、以镜像推送的方式上传代码到新的仓库地址
（目标仓库可以自己新建一个，如果用自己曾经用过的仓库里面的文件会被覆盖）
$ <span class="token function">git</span> push <span class="token parameter variable">--mirror</span> http：//<span class="token punctuation">..</span>.<span class="token punctuation">(</span>目标仓库地址<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="将本地代码提交远程仓库时新建一个分支" tabindex="-1"><a class="header-anchor" href="#将本地代码提交远程仓库时新建一个分支"><span>将本地代码提交远程仓库时新建一个分支</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 将本地代码提交远程仓库时新建一个分支</span>
  <span class="token number">1</span>. 设置本地文件夹为一个Git仓库：<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> init<span class="token variable">\`</span></span>
  <span class="token number">2</span>. 建立远程连接: <span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> remote <span class="token function">add</span> origin 远程仓库地址<span class="token variable">\`</span></span>
  <span class="token number">3</span>. 可能还需要这一步：<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> pull <span class="token parameter variable">--rebase</span> origin master<span class="token variable">\`</span></span>
  <span class="token number">4</span>. 创建本地新分支：<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> branch 新建的分支名称<span class="token variable">\`</span></span>
  <span class="token number">5</span>. 查看分支：<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> branch <span class="token parameter variable">-a</span><span class="token variable">\`</span></span>
  <span class="token number">6</span>. 切换到本地新分支：<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> checkout 所要切换的分支名称<span class="token variable">\`</span></span>
  <span class="token number">7</span>. 此时修改了本地代码
  <span class="token number">8</span>. 提交本地代码至暂缓区、历史提交区：<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;new branch first commit&quot;</span><span class="token variable">\`</span></span>
  <span class="token number">9</span>. 提交到远程新分支：<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> push origin 所推送到远程仓库的分支名<span class="token variable">\`</span></span>
  <span class="token number">10</span>. 去Gitlab查看，已经创建了一个新的分支并且代码正确提交。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="git-迁移项目到新仓库-并保留历史记录" tabindex="-1"><a class="header-anchor" href="#git-迁移项目到新仓库-并保留历史记录"><span>Git 迁移项目到新仓库，并保留历史记录</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Git 迁移项目到新仓库，并保留历史记录</span>
<span class="token number">1</span>. 新建文件夹，将项目从旧远程仓库地址克隆到本地
<span class="token function">git</span> clone git@github.com:willysliang/blog.git

<span class="token number">2</span>. 删除需求迁移的本地项目所管理的远程仓库地址
<span class="token function">git</span> remote remove origin

<span class="token number">3</span>. 将该项目关联新仓库的地址
<span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:willysliang/core.git

<span class="token number">4</span>. 将项目推送到新的远程仓库
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master

<span class="token number">5</span>. 进到旧项目的 .git 目录，再执行 <span class="token function">git</span> push <span class="token parameter variable">--mirror</span>
<span class="token function">git</span> push <span class="token parameter variable">--mirror</span> git@github.com:willysliang/core.git

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多人协作" tabindex="-1"><a class="header-anchor" href="#多人协作"><span>多人协作</span></a></h4><blockquote><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>- git remote			#查看远程库的信息
- git remote -v			#显示更详细的信息
- git push origin master	#推送marster分支到远程库
- git checkout -b branch-name origin/branch-name	#建立本地分支和远程分支的关联
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>master</code>分支是主分支，因此要时刻与远程同步；</li><li><code>dev</code>分支是开发分支，团队所有成员都需要在上面工作，所以也需要与远程同步；</li><li>bug分支只用于在本地修复bug，就没必要推到远程了，除非老板要看看你每周到底修复了几个bug；</li><li>feature分支是否推到远程，取决于你是否和你的小伙伴合作在上面开发。</li></ul><blockquote><p>注意：在本地提交之前，先 pull 再 push，不然会有冲突</p></blockquote></blockquote><h3 id="拉取子模块-submodule" tabindex="-1"><a class="header-anchor" href="#拉取子模块-submodule"><span>拉取子模块 submodule</span></a></h3><h4 id="添加git子模块" tabindex="-1"><a class="header-anchor" href="#添加git子模块"><span>添加git子模块</span></a></h4><ul><li>先克隆想要添加子模块的仓库<code>git clone 仓库地址</code>，克隆的是主目录</li><li>进入仓库(主目录下)，添加子模块：<code>git submodule add 子模块地址</code></li><li>ls查看会有<code>.gitmodules</code>和子模块的项目名，将生成的文件和目录Push到主仓库中。</li></ul><h4 id="克隆有子模块的仓库" tabindex="-1"><a class="header-anchor" href="#克隆有子模块的仓库"><span>克隆有子模块的仓库</span></a></h4><ul><li>添加过子模块的仓库，如果想重新克隆，在克隆仓库后需要在仓库目录下执行<code>git submodule init</code>和<code>git submodule update</code>，如果不执行，子模块中会没有文件 <ol><li><code>git clone 仓库地址</code></li><li><code>cd 克隆的仓库文件夹名</code></li><li><code>git submodule init</code> 4. <code>git submodule update</code></li></ol></li></ul><h4 id="更改子模块的分支" tabindex="-1"><a class="header-anchor" href="#更改子模块的分支"><span>更改子模块的分支</span></a></h4><ul><li>切换到子模块目录，默认子模块是master分支，<code>git submodule foreach git checkout dev</code></li><li>然后使用<code>git submodule foreach git pull</code>切换分支</li></ul><h4 id="submodule可进行tag和merge" tabindex="-1"><a class="header-anchor" href="#submodule可进行tag和merge"><span>submodule可进行tag和merge</span></a></h4><ul><li><code>git submodule foreach</code>可以分别对子模块进行操作，所以对所有子模块进行tag和merge操作，就相当于对总项目进行相应的操作</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 1. 首次克隆仓库及其子模块</span>
<span class="token function">git</span> clone <span class="token parameter variable">--recursive</span> 仓库地址

<span class="token comment"># 2. 仓库首次拉取子模块</span>
<span class="token function">git</span> submodule update <span class="token parameter variable">--init</span> <span class="token parameter variable">--recursive</span>

<span class="token comment"># 3. 更新子模块</span>
<span class="token function">git</span> submodule update <span class="token parameter variable">--recursive</span> 							// <span class="token punctuation">(</span>git1.7.3版本以上<span class="token punctuation">)</span>
<span class="token function">git</span> submodule update <span class="token parameter variable">--recursive</span> <span class="token parameter variable">--remote</span>    // <span class="token punctuation">(</span>git1.8.2版本以上<span class="token punctuation">)</span>
<span class="token function">git</span> pull --recurse-submodules								 // 合并写法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分支管理-branch" tabindex="-1"><a class="header-anchor" href="#分支管理-branch"><span>分支管理 branch</span></a></h3><h4 id="创建与切换分支" tabindex="-1"><a class="header-anchor" href="#创建与切换分支"><span>创建与切换分支</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 分支管理</span>
- 主分支master：要执行的代码。
- 子分支：还未写完的代码存放的分支。
- <span class="token variable"><span class="token variable">\`</span>HEAD<span class="token variable">\`</span></span>严格来说不是指向提交，而是指向<span class="token variable"><span class="token variable">\`</span>master<span class="token variable">\`</span></span>，<span class="token variable"><span class="token variable">\`</span>master<span class="token variable">\`</span></span>才是指向提交的，所以，<span class="token variable"><span class="token variable">\`</span>HEAD<span class="token variable">\`</span></span>指向的就是当前分支。


<span class="token comment">## 创建与合并分支 switch</span>
- 创建并切换到 dev 分支：<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> switch <span class="token parameter variable">-c</span> dev<span class="token variable">\`</span></span>
- 直接切换到已有的 master 分支：<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> switch master<span class="token variable">\`</span></span>


- 在不切换分支的情况下查看不同分支的文件：<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> show <span class="token punctuation">[</span>branch_name分支名<span class="token punctuation">]</span>:<span class="token punctuation">[</span>file_path文件绝对路径<span class="token punctuation">]</span><span class="token variable">\`</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> branch dev		<span class="token comment">#创建dev分支</span>
<span class="token function">git</span> branch			<span class="token comment">#查看分支</span>
<span class="token function">git</span> checkout dev	<span class="token comment">#切换dev分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> dev	<span class="token comment">#创建并切换到dev分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-u</span> dev	<span class="token comment">#切换分支并进入子分支</span>
<span class="token function">git</span> merge dev		<span class="token comment">#在主分支合并分支，把当前分支与指定的分支进行合并</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> dev	<span class="token comment">#删除dev分支</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="合并分支" tabindex="-1"><a class="header-anchor" href="#合并分支"><span>合并分支</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 合并分支</span>
<span class="token comment">### 合并分支概念</span>
每次提交，Git都把它们串成一条时间线，这条时间线就是一个分支。截止到目前，只有一条时间线，在Git里，这个分支叫主分支（一般命名为<span class="token variable"><span class="token variable">\`</span>master<span class="token variable">\`</span></span>分支）。随着不断提交，主分支的线也会越来越长。
当我们创建新的分支（如dev），Git新建了一个指针叫<span class="token variable"><span class="token variable">\`</span>dev<span class="token variable">\`</span></span>，指向<span class="token variable"><span class="token variable">\`</span>master<span class="token variable">\`</span></span>相同的提交，再把<span class="token variable"><span class="token variable">\`</span>HEAD<span class="token variable">\`</span></span>指向<span class="token variable"><span class="token variable">\`</span>dev<span class="token variable">\`</span></span>，就表示当前在<span class="token variable"><span class="token variable">\`</span>dev<span class="token variable">\`</span></span>分支上。
Git创建分支，除了增加一个<span class="token variable"><span class="token variable">\`</span>dev<span class="token variable">\`</span></span>指针，改改<span class="token variable"><span class="token variable">\`</span>HEAD<span class="token variable">\`</span></span>的指向，工作区的文件都没有任何改变。
当完成在<span class="token variable"><span class="token variable">\`</span>dev<span class="token variable">\`</span></span>上的工作后，就可以把<span class="token variable"><span class="token variable">\`</span>dev<span class="token variable">\`</span></span>合并到<span class="token variable"><span class="token variable">\`</span>master<span class="token variable">\`</span></span>上，就是直接把<span class="token variable"><span class="token variable">\`</span>master<span class="token variable">\`</span></span>指向<span class="token variable"><span class="token variable">\`</span>dev<span class="token variable">\`</span></span>的当前提交，就完成合并了。
合并完分支后，甚至可以删除<span class="token variable"><span class="token variable">\`</span>dev<span class="token variable">\`</span></span>分支。删除<span class="token variable"><span class="token variable">\`</span>dev<span class="token variable">\`</span></span>分支就是把<span class="token variable"><span class="token variable">\`</span>dev<span class="token variable">\`</span></span>指针给删掉，删掉后，就剩下一条<span class="token variable"><span class="token variable">\`</span>master<span class="token variable">\`</span></span>分支。


<span class="token comment">### 解决合并分支内容的冲突</span>
- 在多个分支中修改同一个文件，合并可能会产生冲突（Git用<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;</span><span class="token variable">\`</span></span>，<span class="token variable"><span class="token variable">\`</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token variable">\`</span></span>，<span class="token variable"><span class="token variable">\`</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token variable">\`</span></span>标记出不同分支的内容）
- 冲突解决办法：合并分支后，手动修改冲突文件的内容。
- 查看分支的合并情况：<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> log <span class="token parameter variable">--graph</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline --abbrev-commit<span class="token variable">\`</span></span>
- 用<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> log <span class="token parameter variable">--graph</span><span class="token variable">\`</span></span>命令可以看到分支合并图


<span class="token comment">### 合并分支命令</span>
- <span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> merge 需要被合并的分支名称<span class="token variable">\`</span></span> 命令用于合并指定分支到当前分支。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="分支管理策略" tabindex="-1"><a class="header-anchor" href="#分支管理策略"><span>分支管理策略</span></a></h4><blockquote><ul><li>通常合并分支时，如果可能，Git会用<code>Fast forward</code>模式，但这种模式下，删除分支后，会丢掉分支信息。</li><li>如果要强制禁用<code>Fast forward</code>模式，Git就会在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#--no-ff参数，表示禁用Fast forward</span>
<span class="token function">git</span> merge --no-ff <span class="token parameter variable">-m</span> <span class="token string">&quot;merge with no-ff&quot;</span> dev

<span class="token comment">#查看分支历史</span>
<span class="token function">git</span> log <span class="token parameter variable">--graph</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline --abbrev-commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="bug分支-stash" tabindex="-1"><a class="header-anchor" href="#bug分支-stash"><span>Bug分支 stash</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### Bug 分支</span>
- <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> stash<span class="token variable">\`</span></span>：把当前工作现场<span class="token string">&quot;储藏&quot;</span>，等以后恢复现场后继续工作。
- <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> stash list<span class="token variable">\`</span></span>：查看储藏的<span class="token variable"><span class="token variable">\`</span>stash<span class="token variable">\`</span></span>。
- <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> stash apply<span class="token variable">\`</span></span>：恢复<span class="token variable"><span class="token variable">\`</span>stash<span class="token variable">\`</span></span>的内容<span class="token punctuation">(</span>恢复<span class="token variable"><span class="token variable">\`</span>stash<span class="token variable">\`</span></span>后，<span class="token variable"><span class="token variable">\`</span>stash<span class="token variable">\`</span></span>内容并不删除，所以需要删除<span class="token punctuation">)</span>
- <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> stash drop<span class="token variable">\`</span></span>：删除<span class="token variable"><span class="token variable">\`</span>stash<span class="token variable">\`</span></span>内容
- <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> stash pop<span class="token variable">\`</span></span>：恢复的同时把<span class="token variable"><span class="token variable">\`</span>stash<span class="token variable">\`</span></span>内容也删了
- <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> stash apply stash@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token variable">\`</span></span>：恢复指定的stash（有多次stash时使用）
- <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> cherry-pick 4c80e2 <span class="token variable">\`</span></span>：复制一个特定的提交到当前分支（<span class="token variable"><span class="token variable">\`</span>3c80e2<span class="token variable">\`</span></span>为其他分支的提交号）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cherry-pick" tabindex="-1"><a class="header-anchor" href="#cherry-pick"><span>cherry-pick</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### cherry-pick</span>
Git 中的 cherry-pick 作用是从一个分支中选择一个提交，并将其应用到另一个分支上。
这与其他方式形成了对比，例如 <span class="token variable"><span class="token variable">\`</span>merge<span class="token variable">\`</span></span> 和 <span class="token variable"><span class="token variable">\`</span>rebase<span class="token variable">\`</span></span>，它们通常将许多提交应用于另一个分支。

<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>commit-hash<span class="token operator">&gt;</span><span class="token variable">\`</span></span> 会将指定的提交 <span class="token variable"><span class="token variable">\`</span>commit-hash<span class="token variable">\`</span></span> 应用于当前分支。这会在当前分支产生一个新的提交，当然它们的哈希值会不一样。

假设您有 <span class="token variable"><span class="token variable">\`</span>master<span class="token variable">\`</span></span> 和 <span class="token variable"><span class="token variable">\`</span>develop<span class="token variable">\`</span></span> 分支，现在需要将 <span class="token variable"><span class="token variable">\`</span>develop<span class="token variable">\`</span></span> 分支的某一个提交，如 <span class="token variable"><span class="token variable">\`</span>x<span class="token variable">\`</span></span> 应用到 <span class="token variable"><span class="token variable">\`</span>master<span class="token variable">\`</span></span> 分支：
$ <span class="token function">git</span> checkout master <span class="token comment"># 切换到对应分支（这里是 \`master\`）</span>
$ <span class="token function">git</span> cherry-pick x <span class="token comment"># chergit cherry-pick &lt;HashA&gt; &lt;HashB&gt;ry-pick对应的提交（这里是 \`x\`）</span>


应用 <span class="token variable"><span class="token variable">\`</span>develop<span class="token variable">\`</span></span> 分支的最近一次提交，可以直接使用分支名：<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> cherry-pick develop<span class="token variable">\`</span></span>

转移多个提交：<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>HashA<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>HashB<span class="token operator">&gt;</span><span class="token variable">\`</span></span>

从公共分支中挑选：<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> cherry-pick <span class="token parameter variable">-x</span> <span class="token operator">&lt;</span>commit-hash<span class="token operator">&gt;</span><span class="token variable">\`</span></span>
这将生成一个标准化的提交消息。这样以后仍然可以跟踪提交的来源，并且可以避免将来发生合并冲突。

如果在提交中附加了注释，则它们不会遵循 <span class="token variable"><span class="token variable">\`</span>cherry-pick<span class="token variable">\`</span></span>。要将它们也带过来，则必须使用：
<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> notes copy <span class="token operator">&lt;</span>from<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>to<span class="token operator">&gt;</span><span class="token variable">\`</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="工作流-git-flow" tabindex="-1"><a class="header-anchor" href="#工作流-git-flow"><span>工作流 git flow</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 工作流</span>
<span class="token number">1</span>. master 分支：主分支，用于发布稳定版本。
<span class="token number">2</span>. develop 分支：开发分支，用于集成所有功能的开发，并进行构建、测试和部署等操作。
<span class="token number">3</span>. feature 分支：功能分支，用于开发某个具体的功能，从 develop 分支分离出来，完成后合并回 develop 分支。
<span class="token number">4</span>. release 分支：发布分支，用于准备发布一个新版本，从 develop 分支分离出来，进行构建、测试和修复等操作，并最终合并回 develop 分支和 master 分支。
<span class="token number">5</span>. hotfix 分支：热修复分支，用于修复 master 分支上的严重问题，从 master 分支分离出来，完成后合并回 develop 分支和 master 分支。


<span class="token comment">### 使用</span>
<span class="token number">1</span>. 初始化工作流（直接 enter 即可）
	$ <span class="token function">git</span> flow init
<span class="token number">2</span>. 建立 feature 分支
	$ <span class="token function">git</span> flow feature start 设定的feature分支名
<span class="token number">3</span>. 完成 feature 分支（会合并代码到 develop 分支中，并会删除该 feature 分支）
	$ <span class="token function">git</span> flow feature finish 要完成的feature分支名



<span class="token comment">### Feature 分支</span>
添加一个功能时，不希望因为一些实验性质的代码把主分支搞乱，所以每添加一个功能需要先新建一个 feature 分支在上面开发，完成后合并代码到 develop 分支上。
<span class="token variable"><span class="token variable">\`</span>	$ <span class="token function">git</span> flow feature finish 要完成的feature分支名<span class="token variable">\`</span></span> 会把该 feature 分支合并后删除。
由于 feature 分支上存在有未提交的操作，而 <span class="token function">git</span> 为了防止修改丢失，所以不允许删除，但可进行强制删除分支：<span class="token variable"><span class="token variable">\`</span>$ <span class="token function">git</span> branch <span class="token parameter variable">-D</span> featureName<span class="token variable">\`</span></span>



<span class="token comment">### 代码提交规范</span>
    <span class="token number">1</span>. 新功能（feat）：表示添加新功能或特性。
    <span class="token number">2</span>. 修复（fix）：表示修复 bug 或错误。
    <span class="token number">3</span>. 代码重构（refactor）：表示重构代码，但没有添加新功能或修复 bug。
    <span class="token number">4</span>. 样式调整（style）：表示对代码的样式或格式进行调整，如缩进、空格等。
    <span class="token number">5</span>. 文档（docs）：表示修改文档，如 README 文件、注释等。
    <span class="token number">6</span>. 测试（test）：表示添加或修改测试代码。
    <span class="token number">7</span>. 构建或辅助工具（chore）：表示修改构建或辅助工具的配置或代码。
此外，还有一些可选的消息类型，如：
    <span class="token number">1</span>. 优化（perf）：表示优化代码性能。
    <span class="token number">2</span>. 国际化（i18n）：表示国际化相关的修改。
    <span class="token number">3</span>. 版本或标签（version/tag）：表示版本或标签相关的修改。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rebase" tabindex="-1"><a class="header-anchor" href="#rebase"><span>Rebase</span></a></h3><p><code>git rebase</code>操作的特点：把分叉的提交历史&quot;整理&quot;成一条直线，看上去更直观。缺点是本地的分叉提交已经被修改过了。</p><ul><li>rebase操作可以把本地未push的分叉提交历史整理成直线；</li><li>rebase的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。</li></ul><h3 id="标签管理-tag" tabindex="-1"><a class="header-anchor" href="#标签管理-tag"><span>标签管理 tag</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 标签管理</span>
- 打标签的目的是记录该版本的发表。


<span class="token number">1</span>. 创建标签
- 创建轻量标签：<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> tag <span class="token operator">&lt;</span>tag_name<span class="token operator">&gt;</span><span class="token variable">\`</span></span>
- 创建带注释标签：<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> tag <span class="token parameter variable">-a</span> <span class="token operator">&lt;</span>tag_name<span class="token operator">&gt;</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;custom message&quot;</span><span class="token variable">\`</span></span>


<span class="token number">2</span>. 查看标签
- 查看显示本地所有标签：<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> tag<span class="token variable">\`</span></span> 
- 显示特定标签的标签数据：<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> show <span class="token operator">&lt;</span>tag_name<span class="token operator">&gt;</span><span class="token variable">\`</span></span>
- 查看远程所有标签：<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> ls-remote <span class="token parameter variable">--tags</span><span class="token variable">\`</span></span>


<span class="token number">3</span>. 推送标签
- 推送一个本地标签：<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> push origin <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span><span class="token variable">\`</span></span>
- 将所有标签推送到远程仓库：<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> push <span class="token parameter variable">--tags</span><span class="token variable">\`</span></span>


<span class="token number">4</span>. 删除标签
- 删除本地特定标签：<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> tag <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>tag_name<span class="token operator">&gt;</span><span class="token variable">\`</span></span> 
- 删除远程特定标签：<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> push <span class="token parameter variable">-d</span> origin :refs/tags/<span class="token operator">&lt;</span>tag_name<span class="token operator">&gt;</span><span class="token variable">\`</span></span> 


<span class="token number">5</span>. 检查标签
- 检查标签是否仅在本地可用：<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> push <span class="token parameter variable">--tags</span> --dry-run<span class="token variable">\`</span></span>
		- <span class="token variable"><span class="token variable">\`</span>--dry-run<span class="token variable">\`</span></span> 选项总结了下一次提交中将包含的内容。
		- 如果上述命令的输出状态为 ‘Everything up-to-date’，则表示没有可推送的标签
		- 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#当次提交的标签</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> “fixed some bugs”
<span class="token function">git</span> tag <span class="token parameter variable">-a</span> v0.1.3 <span class="token parameter variable">-m</span> “version <span class="token number">0.1</span>.3″		<span class="token comment">#a指定标签名，m说明文字</span>


<span class="token comment">#可查看历史提交的commit id</span>
<span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline --abbrev-commit


<span class="token comment">#新建一个标签（默认为HEAD，也可指定一个commit id）</span>
<span class="token function">git</span> tag v0.9 f52c633


<span class="token comment">#分享提交标签到远程服务器上</span>
<span class="token function">git</span> push origin master
<span class="token function">git</span> push origin <span class="token parameter variable">--tags</span>
<span class="token function">git</span> push origin v0.9


<span class="token comment">#切换到已有Tag</span>
<span class="token function">git</span> tag <span class="token parameter variable">--list</span>  // 查看已有tag列表
<span class="token function">git</span> show v0.9	//查看说明文件:git show tagname
<span class="token function">git</span> checkout <span class="token punctuation">[</span>tag/branch/commit<span class="token punctuation">]</span>  //切换到指定tag/branch/commit都是此命令


<span class="token comment">#删除本地标签</span>
<span class="token function">git</span> tag <span class="token parameter variable">-d</span> v0.1.3


<span class="token comment">#删除远端服务器的标签（需先从本地删除才能远程删除）</span>
<span class="token function">git</span> push origin :refs/tags/v0.1.3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="忽略特殊文件-gitignore" tabindex="-1"><a class="header-anchor" href="#忽略特殊文件-gitignore"><span>忽略特殊文件 gitignore</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 忽略特殊文件/目录</span>
再 Git 工作区的根目录下创建一个 <span class="token variable"><span class="token variable">\`</span>.gitignore<span class="token variable">\`</span></span> 文件，然后把需要忽略的文件名/文件夹目录填入，Git 提交就会自动忽略这些文件。

忽略文件的原则是：
  <span class="token number">1</span>. 忽略操作系统自动生成的文件；如缩略图等。
  <span class="token number">2</span>. 忽略编译生成的中间文件、可执行文件等。如果一个文件是自动生成的，则该自动生成的文件就没必要放进版本库，如Java编译产生的<span class="token variable"><span class="token variable">\`</span>.class<span class="token variable">\`</span></span>文件。
  <span class="token number">3</span>. 忽略带有敏感信息的配置文件。如存放口令的配置文件。


- 当被<span class="token variable"><span class="token variable">\`</span>.gitignore<span class="token variable">\`</span></span>忽略,强制添加到Git：<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-f</span> App.class<span class="token variable">\`</span></span>
- <span class="token variable"><span class="token variable">\`</span>.gitignore<span class="token variable">\`</span></span>规则写错检查：<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> check-ignore <span class="token parameter variable">-v</span> App.class<span class="token variable">\`</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="通用的-gitignore-文件配置" tabindex="-1"><a class="header-anchor" href="#通用的-gitignore-文件配置"><span>通用的 <code>.gitignore</code> 文件配置</span></a></h4><div class="language-.gitignore line-numbers-mode" data-ext=".gitignore" data-title=".gitignore"><pre class="language-.gitignore"><code># Windows:Windows会自动在有图片的目录下生成隐藏的缩略图文件，如果有自定义目录，目录下就会有Desktop.ini文件，因此你需要忽略Windows自动生成的垃圾文件：
Thumbs.db
ehthumbs.db
Desktop.ini

# Python，忽略Python编译产生的.pyc、.pyo、dist等文件或目录
*.py[cod]
*.so
*.egg
*.egg-info
dist
build

# My configurations:自定义
db.ini
deploy_key_rsa

# 排除所有.开头的隐藏文件:
.*
# 排除所有.class文件:
*.class

# 不排除.gitignore和App.class:
!.gitignore
!App.class

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="git-clean-删除未跟踪的文件或目录" tabindex="-1"><a class="header-anchor" href="#git-clean-删除未跟踪的文件或目录"><span>git clean 删除未跟踪的文件或目录</span></a></h4><p>删除未跟踪的文件或目录，是指未写在 <code>.gitignore</code> 文件中，并且未使用 <code>git add</code> 将变更的文件从工作区添加到暂存区的文件。</p><p>要删除未跟踪的文件和目录，您可以执行：</p><div class="language-git line-numbers-mode" data-ext="git" data-title="git"><pre class="language-git"><code><span class="token comment"># 删除未跟踪的文件。</span>
<span class="token comment"># f</span>
<span class="token command">$ git clean<span class="token parameter"> -f</span></span>

<span class="token comment"># 删除未跟踪的文件和目录。</span>
<span class="token comment"># d</span>
<span class="token command">$ git clean<span class="token parameter"> -fd</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您还想删除被 <code>.gitignore</code> 隐藏的文件，可以使用以下命令：</p><div class="language-git line-numbers-mode" data-ext="git" data-title="git"><pre class="language-git"><code><span class="token comment"># 忽略的文件、未被跟踪的文件和文件夹</span>
<span class="token comment"># x</span>
<span class="token command">$ git clean<span class="token parameter"> -xfd</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要先查看哪些文件可能会被删除，而不执行删除动作，可以执行以下命令：</p><div class="language-git line-numbers-mode" data-ext="git" data-title="git"><pre class="language-git"><code><span class="token comment"># n</span>
<span class="token command">$ git clean<span class="token parameter"> -xfdn</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置别名" tabindex="-1"><a class="header-anchor" href="#配置别名"><span>配置别名</span></a></h3><ul><li><code>--global</code>参数是全局参数，也就是这些命令在这台电脑的所有Git仓库下都有用,</li><li><code>git config --global alias.别名 原名</code></li><li>让其显示最后一次提交信息：<code>git last</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.st status		<span class="token comment">#git status--&gt;git st</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.co checkout
<span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.ci commit
<span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.br branch

<span class="token comment">##撤销修改：git unstage test.py--&gt;gitreset HEAD test.py</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.unstage <span class="token string">&#39;reset HEAD&#39;</span>

<span class="token comment">#lg配置别名 git lg</span>
 <span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.lg <span class="token string">&quot;log --color --graph --pretty=format:&#39;%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&lt;%an&gt;%Creset&#39; --abbrev-commit&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置文件</strong></p><ul><li>配置Git的时候，加上<code>--global</code>是针对当前用户起作用的，如果不加，那只针对当前的仓库起作用。</li><li>每个仓库的Git配置文件都放在<code>.git/config</code>文件中。</li><li>别名就在<code>.git/config</code>文件中的<code>[alias]</code>后面，要删除别名，直接把对应的行删掉即可。</li></ul><h3 id="搭建git服务器" tabindex="-1"><a class="header-anchor" href="#搭建git服务器"><span>搭建Git服务器</span></a></h3><ul><li>搭建Git服务器需要准备一台运行Linux的机器，还需要有<code>sudo</code>权限的用户账号。</li></ul>`,107),g=i("<li>安装git：<code>sudo apt-get install git</code></li><li>创建一个git用户，用来运行git服务：<code>sudo adduser git</code></li><li>创建证书登录：收集所有需要登录的用户的公钥，就是他们自己的id_rsa.pub文件，把所有公钥导入到/home/git/.ssh/authorized_keys文件里，一行一个。</li><li>初始化Git仓库： <ol><li>先选定一个目录作为Git仓库，假定是<code>/srv/sample.git</code>，在<code>/srv</code>目录下输入命令：<code>sudo git init --bare sample.git</code></li><li>Git就会创建一个裸仓库，裸仓库没有工作区，因为服务器上的Git仓库纯粹是为了共享，所以不让用户直接登录到服务器上去改工作区，并且服务器上的Git仓库通常都以<code>.git</code>结尾。然后，把owner改为<code>git</code>：<code>sudo chown -R git:git sample.git</code></li></ol></li><li>禁用shell登录： <ol><li>出于安全考虑，第二步创建的git用户不允许登录shell，这可以通过编辑<code>/etc/passwd</code>文件完成。找到类似下面的一行：<code>git:x:1001:1001:,,,:/home/git:/bin/bash</code></li><li>改为：<code>git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell</code></li><li>这样，<code>git</code>用户可以正常通过ssh使用git，但无法登录shell，因为我们为<code>git</code>用户指定的<code>git-shell</code>每次一登录就自动退出。</li></ol></li><li>克隆远程仓库：<code>git clone git@server:/srv/sample.git</code></li>",6),h=n("code",null,"/home/git/.ssh/authorized_keys",-1),f={href:"https://github.com/res0nat0r/gitosis",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/sitaramc/gitolite",target:"_blank",rel:"noopener noreferrer"},y=i(`<h2 id="git-项目提交信息处理" tabindex="-1"><a class="header-anchor" href="#git-项目提交信息处理"><span>Git 项目提交信息处理</span></a></h2><h3 id="husky-工程化" tabindex="-1"><a class="header-anchor" href="#husky-工程化"><span>Husky 工程化</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Husky 工程化</span>
在前端工程化时，husky 是必不可少的工具，它可以方便地处理 <span class="token function">git</span> hooks 并执行特定的脚本。
钩子都被存储在 .git 目录下的 hooks 目录。


<span class="token comment">###  安装</span>
<span class="token number">1</span>. 在项目中安装
$ <span class="token function">pnpm</span> <span class="token function">install</span> husky

<span class="token number">2</span>. 在项目中添加 srcipts 命令
$ <span class="token function">npm</span> pkg <span class="token builtin class-name">set</span> <span class="token assign-left variable">scripts.prepare</span><span class="token operator">=</span><span class="token string">&quot;husky install&quot;</span>
（等价于在 package.json 文件 scripts 属性下添加 <span class="token variable"><span class="token variable">\`</span>prepare: <span class="token string">&quot;husky install&quot;</span><span class="token variable">\`</span></span>）



<span class="token comment">### 使用</span>
首次安装完毕需执行，这时会在你项目中创建了一个 .husky 文件夹
$ <span class="token function">pnpm</span> run prepare



<span class="token comment">### 常用 Git Hooks</span>
- <span class="token variable"><span class="token variable">\`</span>applypatch-msg<span class="token variable">\`</span></span> <span class="token builtin class-name">:</span> 应用补丁，通过 <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> am<span class="token variable">\`</span></span> 触发。
- <span class="token variable"><span class="token variable">\`</span>pre-applypatch<span class="token variable">\`</span></span> <span class="token builtin class-name">:</span> 提交补丁前，运行 <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> am<span class="token variable">\`</span></span> 期间触发。
- <span class="token variable"><span class="token variable">\`</span>post-applypatch<span class="token variable">\`</span></span> <span class="token builtin class-name">:</span> 提交产生后，运行 <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> am<span class="token variable">\`</span></span> 期间最后触发。
- <span class="token variable"><span class="token variable">\`</span>pre-commit<span class="token variable">\`</span></span> <span class="token builtin class-name">:</span> 用于检查即将提交的快照，<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> commit<span class="token variable">\`</span></span> 触发（可通过 <span class="token variable"><span class="token variable">\`</span>--no-verify<span class="token variable">\`</span></span> 绕过）。
- <span class="token variable"><span class="token variable">\`</span>commit-msg<span class="token variable">\`</span></span> <span class="token builtin class-name">:</span> 用来在提交通过前验证项目状态或提交信息，<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> commit<span class="token variable">\`</span></span> 和 <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> merge<span class="token variable">\`</span></span> 触发（可通过 <span class="token variable"><span class="token variable">\`</span>--no-verify<span class="token variable">\`</span></span> 绕过）。
- <span class="token variable"><span class="token variable">\`</span>post-commit<span class="token variable">\`</span></span> <span class="token builtin class-name">:</span> 主要用于通知，<span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> commit<span class="token variable">\`</span></span> 触发，但不会影响结果。
- <span class="token variable"><span class="token variable">\`</span>post-receive<span class="token variable">\`</span></span> <span class="token builtin class-name">:</span> 推送完成后执行，可以用来更新其他系统服务或者通知用户。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lint-staged" tabindex="-1"><a class="header-anchor" href="#lint-staged"><span>lint-staged</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## lint-staged</span>
lint-staged 是一个在git暂存区上运行linters的工具。它将根据package.json依赖项中的代码质量工具来安装和配置 husky 和 lint-staged ，因此请确保在此之前安装lint-staged，并配置所有代码质量工具，比如Prettier和ESlint。


<span class="token comment">### 安装</span>
<span class="token function">pnpm</span> i <span class="token parameter variable">-D</span> lint-staged


<span class="token comment">### 参数</span>
执行 npx lint-staged <span class="token parameter variable">--help</span> 命令可以看到相关的所有参数如下：
用法: lint-staged <span class="token punctuation">[</span>options<span class="token punctuation">]</span>

Options:
  -V, <span class="token parameter variable">--version</span>                      输出版本号
  --allow-empty                      当任务撤消所有分阶段的更改时允许空提交（默认值：false）默认情况下，当LITER任务撤消所有阶段性的更改时，LITET阶段将抛出一个错误，并中止提交。
  -c, <span class="token parameter variable">--config</span> <span class="token punctuation">[</span>path<span class="token punctuation">]</span>                配置文件的路径
  -d, <span class="token parameter variable">--debug</span>                        打印其他调试信息（默认值：false）
  -p, <span class="token parameter variable">--concurrent</span> <span class="token operator">&lt;</span>parallel tasks<span class="token operator">&gt;</span>  要同时运行的任务数，或者为false则要连续运行任务（默认值：true）
  -q, <span class="token parameter variable">--quiet</span>                        自己的控制台输出（默认值：false）
  -r, <span class="token parameter variable">--relative</span>                     将相对文件路径传递给任务（默认值：false）
  -x, <span class="token parameter variable">--shell</span>                        跳过任务解析以更好地支持shell（默认值：false）
  -h, <span class="token parameter variable">--help</span>                         输出用法信息

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="commitlint" tabindex="-1"><a class="header-anchor" href="#commitlint"><span>commitlint</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## commitlint</span>
提交时，进行提交信息验证，是否符合规范。 这里使用到一个 commitlint 的包

@commitlint/cli <span class="token builtin class-name">:</span> commit 消息校验工具。
@commitlint/config-angular <span class="token builtin class-name">:</span> Angular提交信息规范。
@commitlint/config-conventional <span class="token builtin class-name">:</span> 传统规范。


<span class="token comment">### 安装</span>
$ <span class="token function">pnpm</span> i @commitlint/cli @commitlint/config-conventional <span class="token parameter variable">-D</span>


<span class="token comment">### 生成配置文件</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;module.exports = {extends: [&#39;@commitlint/config-conventional&#39;]}&quot;</span> <span class="token operator">&gt;</span> commitlint.config.cjs

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加-hooks" tabindex="-1"><a class="header-anchor" href="#添加-hooks"><span>添加 hooks</span></a></h3><h4 id="husky-pre-commit" tabindex="-1"><a class="header-anchor" href="#husky-pre-commit"><span>.husky/pre-commit</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token builtin class-name">.</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>/_/husky.sh&quot;</span>

npx lint-staged --allow-empty <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="husky-commit-msg" tabindex="-1"><a class="header-anchor" href="#husky-commit-msg"><span>.husky/commit-msg</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token builtin class-name">.</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>/_/husky.sh&quot;</span>

npx <span class="token parameter variable">--no</span> -- commitlint <span class="token parameter variable">--config</span> commitlint.config.cjs <span class="token parameter variable">--edit</span> <span class="token variable">$1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 添加命令</span>
把 <span class="token variable"><span class="token variable">\`</span>.husky/pre-commit<span class="token variable">\`</span></span> 文件添加到git中。
$ <span class="token function">git</span> <span class="token function">add</span> .husky/pre-commit


<span class="token comment">### 自检代码</span>
$ npx lint-staged --allow-empty <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>

$ npx <span class="token parameter variable">--no</span> -- commitlint <span class="token parameter variable">--config</span> commitlint.config.cjs <span class="token parameter variable">--edit</span> <span class="token variable">$1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions"><span>GitHub Actions</span></a></h2><h3 id="在-github-actions-工作流程中部署-github-pages-时出现-403-错误" tabindex="-1"><a class="header-anchor" href="#在-github-actions-工作流程中部署-github-pages-时出现-403-错误"><span>在 GitHub Actions 工作流程中部署 GitHub Pages 时出现 403 错误</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 在 GitHub Actions 工作流程中部署 GitHub Pages 时出现 403 错误，可能是由于以下原因之一：</span>
<span class="token number">1</span>. 没有正确配置仓库的访问权限。如果你没有正确配置仓库的访问权限，可能会导致 <span class="token number">403</span> 错误。你需要确保你有足够的权限来访问该仓库，并进行部署操作。你可以在仓库的设置页面中配置访问权限。


<span class="token number">2</span>. 没有正确配置 Action 的输入参数。如果你没有正确配置 crazy-max/ghaction-github-pages Action 的输入参数，可能会导致 <span class="token number">403</span> 错误。你需要确保你已经正确配置了 repo、target_branch 和 build_dir 等参数，以便 Action 可以正确地部署 GitHub Pages。


<span class="token number">3</span>. 没有正确配置 Personal Access Token（PAT）。
在使用 crazy-max/ghaction-github-pages Action 部署 GitHub Pages 时，需要提供一个有效的 PAT，用于进行身份验证和授权。如果你没有正确配置 PAT，可能会导致 <span class="token number">403</span> 错误。你可以在 GitHub 的设置页面中创建一个新的 PAT，并将其保存在仓库的 Secrets 中。然后，在 GitHub Actions 工作流程中，你可以使用 <span class="token variable">\${{ secrets.PAT }</span><span class="token punctuation">}</span> 引用该 PAT。

在 GitHub 上创建 Personal Access Token（PAT）并将其保存在仓库的 Secrets 中的具体流程：
    登录 GitHub，进入你的个人资料页面。
    点击右上角的头像，选择 Settings。
    在左侧菜单中选择 Developer settings，然后选择 Personal access tokens。
    点击 Generate new token 按钮。
    在 Token description 中输入一个描述性的名称，以便于识别该令牌的用途。
    在 Select scopes 中选择需要授权的权限。如果只需要访问公共仓库，可以选择 public_repo。如果你需要访问私有仓库，可以选择 repo，并勾选其中的子权限。
    点击 Generate token 按钮。
    复制生成的 PAT，并将其保存在一个安全的地方，以便后续使用。
    进入你的 GitHub 仓库，点击 Settings。
    在左侧菜单中选择 Secrets，然后点击 New repository secret 按钮。
    在 Name 中输入一个名称，例如 PAT。
    在 Value 中粘贴刚才复制的 PAT。
    点击 Add secret 按钮，保存该令牌。
现在，你已经成功创建了一个 PAT，并将其保存在仓库的 Secrets 中。在 GitHub Actions 工作流程中，你可以使用 <span class="token variable">\${{ secrets.PAT }</span><span class="token punctuation">}</span> 引用该 PAT，以进行身份验证和授权。

在 Github Actions 中使用
在你的 GitHub 仓库中，创建一个新的 Secrets，例如 PAT。
将你的 PAT 复制到该 Secrets 的 Value 中，并保存该 Secrets。
在你的 GitHub Actions 工作流程中，使用 <span class="token variable">\${{ secrets.PAT }</span><span class="token punctuation">}</span> 引用该 Secrets。例如：
- name: Deploy to GitHub Pages
  uses: crazy-max/ghaction-github-pages@v2.2.4
  with:
    target_branch: gh-pages
    build_dir: ./public
  env:
    GITHUB_TOKEN: <span class="token variable">\${{ secrets.PAT }</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="svn" tabindex="-1"><a class="header-anchor" href="#svn"><span>SVN</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## SVN</span>


<span class="token comment">### Git 和 SVN 的区别</span>
Git 和 SVN 最大的区别在于 Git 是分布式的，而 SVN 是集中式的。因此不能再离线的情况下使用 SVN。如果服务器出现问题，就没有办法使用 SVN 来提交代码。

SVN 中的分支是整个版本库的复制的一份完整目录，而 Git 的分支是指针指向某次提交，因此 Git 的分支创建更加开销更小 并且分支上的变化不会影响到其他人。SVN 的分支变化会影响到所有的人。

SVN 的概念指令相对于 Git 来说要简单一些，比 Git 更容易上手。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function q(G,_){const a=t("ExternalLinkIcon");return c(),p("div",null,[d,n("p",null,[s("在前端工程化中，husky 即通过自定义 "),n("a",v,[b,e(a)]),s(" 并将 "),u,s(" 写入其中的方式来实现此功能。")]),n("p",null,[n("a",m,[s("Husky"),e(a)]),s(" 允许您安装钩子，包括用 JavaScript 编写的钩子。")]),k,n("ol",null,[g,n("li",null,[s("管理公钥：把每个人的公钥收集起来放到服务器的"),h,s("文件里。或用"),n("a",f,[s("Gitosis"),e(a)]),s("来管理公钥")]),n("li",null,[s("管理权限：会在版本控制系统里设置一套完善的权限控制，每个人是否有读写权限会精确到每个分支甚至每个目录下。因为Git是为Linux源代码托管而开发的，所以Git也继承了开源社区的精神，不支持权限控制。不过，因为Git支持钩子（hook），所以，可以在服务器端编写一系列脚本来控制提交等操作，达到权限控制的目的。"),n("a",x,[s("Gitolite"),e(a)]),s("就是这个工具。")])]),y])}const A=l(o,[["render",q],["__file","Git仓库管理.html.vue"]]),H=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/Git%E4%BB%93%E5%BA%93%E7%AE%A1%E7%90%86.html","title":"","lang":"zh-CN","frontmatter":{"Author":"willysliang","CreateTime":"2022-08-21T16:27:28.000Z","Modifier":"willysliang","ModifiedTime":"2022-12-28T11:52:47.000Z","Description":"Git 仓库管理"},"headers":[{"level":3,"title":"Git概念","slug":"git概念","link":"#git概念","children":[]},{"level":3,"title":"安装配置git","slug":"安装配置git","link":"#安装配置git","children":[]},{"level":3,"title":"文件保存 add 、commit","slug":"文件保存-add-、commit","link":"#文件保存-add-、commit","children":[]},{"level":3,"title":"查看信息 status / log","slug":"查看信息-status-log","link":"#查看信息-status-log","children":[]},{"level":3,"title":"版本回退 reset","slug":"版本回退-reset","link":"#版本回退-reset","children":[]},{"level":3,"title":"撤销修改 checkout","slug":"撤销修改-checkout","link":"#撤销修改-checkout","children":[]},{"level":3,"title":"拉取代码 fetch/pull","slug":"拉取代码-fetch-pull","link":"#拉取代码-fetch-pull","children":[]},{"level":3,"title":"远程仓库配置相关","slug":"远程仓库配置相关","link":"#远程仓库配置相关","children":[]},{"level":3,"title":"远程仓库操纵","slug":"远程仓库操纵","link":"#远程仓库操纵","children":[]},{"level":3,"title":"拉取子模块 submodule","slug":"拉取子模块-submodule","link":"#拉取子模块-submodule","children":[]},{"level":3,"title":"分支管理 branch","slug":"分支管理-branch","link":"#分支管理-branch","children":[]},{"level":3,"title":"工作流 git flow","slug":"工作流-git-flow","link":"#工作流-git-flow","children":[]},{"level":3,"title":"Rebase","slug":"rebase","link":"#rebase","children":[]},{"level":3,"title":"标签管理 tag","slug":"标签管理-tag","link":"#标签管理-tag","children":[]},{"level":3,"title":"忽略特殊文件 gitignore","slug":"忽略特殊文件-gitignore","link":"#忽略特殊文件-gitignore","children":[]},{"level":3,"title":"配置别名","slug":"配置别名","link":"#配置别名","children":[]},{"level":3,"title":"搭建Git服务器","slug":"搭建git服务器","link":"#搭建git服务器","children":[]},{"level":2,"title":"Git 项目提交信息处理","slug":"git-项目提交信息处理","link":"#git-项目提交信息处理","children":[{"level":3,"title":"Husky 工程化","slug":"husky-工程化","link":"#husky-工程化","children":[]},{"level":3,"title":"lint-staged","slug":"lint-staged","link":"#lint-staged","children":[]},{"level":3,"title":"commitlint","slug":"commitlint","link":"#commitlint","children":[]},{"level":3,"title":"添加 hooks","slug":"添加-hooks","link":"#添加-hooks","children":[]}]},{"level":2,"title":"GitHub Actions","slug":"github-actions","link":"#github-actions","children":[{"level":3,"title":"在 GitHub Actions 工作流程中部署 GitHub Pages 时出现 403 错误","slug":"在-github-actions-工作流程中部署-github-pages-时出现-403-错误","link":"#在-github-actions-工作流程中部署-github-pages-时出现-403-错误","children":[]}]},{"level":2,"title":"SVN","slug":"svn","link":"#svn","children":[]}],"git":{"updatedTime":1709475781000,"contributors":[{"name":"willy","email":"willysliang@qq.com","commits":5},{"name":"willy","email":"willysliang","commits":4}]},"filePathRelative":"前端基础/Git仓库管理.md"}');export{A as comp,H as data};
