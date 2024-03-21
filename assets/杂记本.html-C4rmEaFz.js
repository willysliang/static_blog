import{_ as n,o as s,c as a,b as e}from"./app-Bvx-HY_0.js";const i={},l=e(`<h2 id="杂记本" tabindex="-1"><a class="header-anchor" href="#杂记本"><span>杂记本</span></a></h2><h2 id="学习" tabindex="-1"><a class="header-anchor" href="#学习"><span>学习</span></a></h2><h3 id="待了解" tabindex="-1"><a class="header-anchor" href="#待了解"><span>待了解</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
数据结构
https://www.conardli.top/docs/dataStructure/


Babel 的编译过程
编译器一般由哪几个阶段组成？数据类型检查一般在什么阶段进行
编译过程中虚拟机的作用是什么？
什么是中间代码（IR），它的作用是什么？
什么是交叉编译？


<span class="token comment">## Babel 原理</span>
https://juejin.cn/post/6844903956905197576
https://juejin.cn/post/6844903961820921869


<span class="token number">6</span>. 力扣
	https://leetcode.cn/problems/number-of-recent-calls/submissions/
	https://leetcode.wang/leetCode-1-Two-Sum.html

<span class="token number">7</span>. 算法
https://juejin.cn/post/6947842412102287373
https://www.bilibili.com/video/BV1wA411b7qZ/?buvid<span class="token operator">=</span>Y94F4592A1D1B67F406A9731EBF5D5D6F160<span class="token operator">&amp;</span><span class="token assign-left variable">is_story_h5</span><span class="token operator">=</span>false<span class="token operator">&amp;</span><span class="token assign-left variable">mid</span><span class="token operator">=</span>91AwBesvxQm7lVOaAsa7jQ%3D%3D<span class="token operator">&amp;</span><span class="token assign-left variable">p</span><span class="token operator">=</span><span class="token number">1</span><span class="token operator">&amp;</span><span class="token assign-left variable">plat_id</span><span class="token operator">=</span><span class="token number">116</span><span class="token operator">&amp;</span><span class="token assign-left variable">share_from</span><span class="token operator">=</span>ugc<span class="token operator">&amp;</span><span class="token assign-left variable">share_medium</span><span class="token operator">=</span>iphone<span class="token operator">&amp;</span><span class="token assign-left variable">share_plat</span><span class="token operator">=</span>ios<span class="token operator">&amp;</span><span class="token assign-left variable">share_session_id</span><span class="token operator">=</span>FBB2B7BF-4F29-4D45-8AE8-7EA9E5EC4177<span class="token operator">&amp;</span><span class="token assign-left variable">share_source</span><span class="token operator">=</span>WEIXIN<span class="token operator">&amp;</span><span class="token assign-left variable">share_tag</span><span class="token operator">=</span>s_i<span class="token operator">&amp;</span><span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">1676998117</span><span class="token operator">&amp;</span><span class="token assign-left variable">unique_k</span><span class="token operator">=</span>MTmiy4L<span class="token operator">&amp;</span><span class="token assign-left variable">up_id</span><span class="token operator">=</span><span class="token number">455848380</span><span class="token operator">&amp;</span><span class="token assign-left variable">vd_source</span><span class="token operator">=</span>ab21cbab13abf720083cea60dddd9871


http请求：https://github.com/semlinker/awesome-http

- <span class="token variable"><span class="token variable">\`</span><span class="token function">docker</span><span class="token variable">\`</span></span> 前端应用部署工具
- <span class="token variable"><span class="token variable">\`</span>Gitlab<span class="token variable">\`</span></span> 前端项目管理工具<span class="token punctuation">(</span>包含CI/CD<span class="token punctuation">)</span>
- <span class="token variable"><span class="token variable">\`</span>jenkins<span class="token variable">\`</span></span> 前端应用自动化构建工具     
前端性能优化：JSPerf、YSlow、PageSpedd
自动化测试：Mocha、Jest、AVA、Karma、Nightmare



四、Node与工程化开发
阻塞非阻塞
触发器events与path模块
Buffer对象
Node原生封装HTTP与文件服务器


<span class="token number">2</span>、Node框架
路由配置
模板引擎
数据脚本
Router核心
CORS配置
错误处理
校验封装
PM2管理
nodemoon管理
MORGAN日志处理
查询正则捕获
中间件开发
bodyParse等第三方中间件使用
文件流上传下载


<span class="token number">4</span>、前后端数据交互
HTTP通信交互原理
MIME
报文解析
端口
报文流
测试监听抓包
TCP/IP握手机制
网络业务模型
代理
网关
隧道等概念
代理服务器跨域处理
拦截
合并
通信加密策略
数据对称加密
数据非对称加密
RSA加密实践
MD5加密实践



<span class="token comment">## 待实现</span>
手写深拷贝
手写call / apply
手写Promise.all / Promise.race / Promise.allSettled
手写限制并发数量
手写括号匹配
手写红包算法（注意均衡分配和浮点数计算精度问题）
数组去重
将奇数排在前面，偶数排在后面。要求时间复杂度O<span class="token punctuation">(</span>n<span class="token punctuation">)</span>。空间复杂度O<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>（不能用splice）
数组转树结构
解析出URL中所有的部分
实现一个compare函数，比较两个对象是否相同
螺旋矩阵
大数相加
找出出现次数最多的英语单词
节点倒序（将ul.id<span class="token operator">=</span>list，将ul节点下的10000个li节点倒序。考虑性能。）
实现一个函数计算 <span class="token string">&quot;1+12-31+100-93&quot;</span>
判断链表是否有环
手写useReducer
手写useDidMount
手写useDidUpdate，模拟componentDidUpdate
手写usePrevious



<span class="token comment">## 开放题</span>
Antd栅格布局的实现
劫持所有的a标签，点击时不发生跳转，而是弹出提示框提示即将跳转到某个网址，点击确认则跳转，点击取消则无操作
两个promise，分别实现串行和并行形式，只有两个promise都返回结果时打印success，否则打印fail
埋点是如何拦截和上报的
如何实现一个无埋点数据上报
使用hash路由时，怎么能再刷新后时候自动滚动到页面上次的锚点位置？
实现一个多级菜单，菜单层级不定
如何监控和排查内存泄漏问题
模拟实现Java中的sleep函数
使用var模拟实现es6中的let和const
实现一个数组的splice方法（说思路）
A页面跳转到B页面，在B页面做的操作传输给A页面的方法
Sentry是如何实现错误监控的
将一个GIF绘制到canvas上是否可行？如果可行，说说你的实现方法。
如果让你搭建一个项目，你会使用哪些技术方案进行组合？
如何做技术选型？
手写实现一个图片懒加载
<span class="token number">1</span>、到指定高度加载图片
<span class="token number">2</span>、考虑重排和重绘
<span class="token number">3</span>、考虑性能
<span class="token number">4</span>、先加载缩略图，再加载完整的图
<span class="token number">5</span>、注意图片加载容错情况
编写一个函数，传入一个promise和数字n，n<span class="token punctuation">(</span>s<span class="token punctuation">)</span>内promise没有返回结果，直接reject
了解SSR吗
说一下深拷贝要注意的点
前端发展方向设想
如何设计一个类似于elementui这样的可以单包发布，也可以多包发布的框架
如果让你设计一个单测框架，你怎么设计？
如何实现模块懒加载？import语法是如何做的
如何设计一个单点登录方案？
用过哪些设计模式？分别说说它们的使用场景和应用案例？你觉得使用设计模式给你带来了什么好处？
从A页面跳转到B页面，再返回A页面时，如何让A页面保持上一次的状态
Nginx和node中间件代理的区别
Node中间件主要是解决什么问题
说一下你做过的最有收获的项目。描述一下系统所承载的功能、目标以及这个系统能解决什么问题？

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 未记录知识点</span>
<span class="token number">2</span>. 工程化
	- 对 Webpack 的理解（loader、plugin）
	- CI/CD 工程化部署，基于敏捷开发的快速提交以及设置 tag
	- 基于 nodejs 实现工具插件，如 Vite 之类
	- 基于 Webpack 所能进行的优化 
<span class="token number">5</span>. 网络安全
	- xss
		- xss 是什么？怎么优化？
		- replace 怎么替换，替换成什么？
		- 有什么转码的方式？
	<span class="token parameter variable">-csrf</span>
		- csrf 是什么？怎么解决？
		- csrf 是获取了什么信息？
			- 主要是获取了 cookies 里面的内容，因为 cookie 会根据网络请求进行发送，所以我们可以通过伪造http 请求来获取 cookie 的内容（虽然我们可以在测试中使用 document.cookie 来获取，但是它没有办法，所以可以通过 cookie 来获取内容）
			- 这个怎么解决?
- 问主要学习的规划
	- 主要是对于自己基础知识的掌握
	- 然后对 webpack 的掌握，自己的项目比别人更加的丝滑，绝大多数的优化事项都是在 webpack 中可以进行实现的。
	- 还有对 nodejs 的掌握，比如构建一个插件或中间件，如CI/CD的自动化、Vite的插件实现，等等


<span class="token comment">## 问题记录</span>
- 因为 <span class="token function">pnpm</span> 会把代码铺平放在顶层，然后当使用 monorepo 时在某个 project 中使用时，Vite 的在 node_modules 中的缓存文件会存在缺失。这种有遇到的方案解决吗？还是说我的操作不当？

<span class="token comment">### 计算机网络</span>
<span class="token number">1</span>. 如何<span class="token variable"><span class="token variable">\`</span>cancel<span class="token variable">\`</span></span>掉一个正在pending中的网络请求
<span class="token number">2</span>. <span class="token variable"><span class="token variable">\`</span>DDos（Distributed Denial of Service）<span class="token variable">\`</span></span>攻击是什么？如何防范？
<span class="token number">5</span>. 对称加密和非对称加密是什么？
<span class="token number">6</span>. https如何解决网络安全的？


<span class="token number">4</span>. <span class="token number">301</span>和302，服务端怎么进行重定向
<span class="token number">5</span>. 大文件上传的状态（接着上传）根据文件流上传的进度，来紧接着上传
<span class="token number">6</span>. axios拦截的原理
<span class="token number">7</span>. 还有什么图片优化的技巧，比如图片压缩，怎么样进行图片压缩，是不是每次都需要进行压缩（比如wepack打包后才行、后端每次之后都需要进行一个监听是否压缩吗）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面试经验" tabindex="-1"><a class="header-anchor" href="#面试经验"><span>面试经验</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 1. 薪资</span>
	面试官；<span class="token string">&quot;你要求多少薪资？&quot;</span>
	我：“能给个范围吗？”

<span class="token comment"># 2. 遇到不会的问题</span>
	这块儿我没了解过，准备回去看一下。
	这块儿我没研究过，您有没有好的资料，我可以补充一下细节。
	写不出详细的代码，但是知道思路

<span class="token comment"># 3. 写简历的经验</span>
<span class="token comment">## 自我介绍</span>
	面试问的问题，很大层次上，取决你的简历和自我介绍。
<span class="token comment">### 简历</span>
	简历中最重要的四个信息：
    - 基本信息：姓名、年龄、手机、邮箱、籍贯。
    - 学历：从大到小写。硕士 -<span class="token operator">&gt;</span> 本科。
    - 工作经历：时间、公司、岗位、职责、技术栈、**业绩**。业绩是大多数人所忽略的。
    - 开源项目、Github、说明。
    - 最多可以写“深入了解”，但不要写“精通”
		- 自我评价可以不写。
		-	项目的业绩上，要包括：**技术收益**和**业绩收益**。
<span class="token comment">## 自我陈述</span>
	<span class="token number">1</span>、**把握面试的沟通方向。**
	如果陈述中谈到项目，面试官可能会问：
		- 负责了什么项目，项目是做什么的
		- 和前端的结合点是？你的角色是？项目中承担了什么责任？
		- 你在项目中的成绩？
	如果你说自己是项目<span class="token variable"><span class="token variable">\`</span>负责人<span class="token variable">\`</span></span>，会被问到：
    - 该项目怎么分配？有几个人参与？
    - 作为负责人，你的角色是什么？是项目管理还是技术管理？
    - 遇到技术难点，如何解决？
<span class="token comment">### 提问题</span>
	如果在深入问题时，碰到不会的，不要说“我不知道”。
	这块儿我没了解过，准备回去看一下。
	这块儿我没研究过，您有没有好的资料，我可以补充一下细节。
	写不出详细的代码，但是知道思路


<span class="token comment">### 校招和社招各自看中的层面</span>
  校招：
  - 知识：40%
  - 能力：59%
  - 经验：1%
  社招：
  - 知识：30%。比如协议、业务的认知程度。
  - 能力：50%。比如架构、业务的抽象能力、项目的把控能力。
  - 经验：20%。项目的体现
**任职要求：**
（1）<span class="token variable"><span class="token variable">\`</span><span class="token number">3</span>年以上工作经验<span class="token variable">\`</span></span>：不要太较真工作年限。<span class="token variable"><span class="token variable">\`</span>精通 H5 特性<span class="token variable">\`</span></span>：说明公司很看重移动端。了解H5<span class="token variable"><span class="token variable">\`</span>最新规范<span class="token variable">\`</span></span>：贵公司希望我对新技术是有追求的，比如<span class="token variable"><span class="token variable">\`</span>ES6<span class="token variable">\`</span></span>等。
（2）要求我们对<span class="token variable"><span class="token variable">\`</span>面向对象<span class="token variable">\`</span></span>部分有足够的了解。组件化的编程也离不开面向对象。
（3）体现了几点：
	- <span class="token variable"><span class="token variable">\`</span>熟悉 Web 标准<span class="token variable">\`</span></span>：熟悉最新的标准即可。
	- <span class="token variable"><span class="token variable">\`</span>表现与数据分离<span class="token variable">\`</span></span>：MVC框架。
	- <span class="token variable"><span class="token variable">\`</span>语义化<span class="token variable">\`</span></span>：这个词千万不要忽视。不是什么都用 div。
	- <span class="token variable"><span class="token variable">\`</span>实际经验<span class="token variable">\`</span></span>：利用框架开发的过程中，遇到过哪些问题？没有实际经验的话，也要提前准备几个问题。
（4）以下几点：
	- <span class="token variable"><span class="token variable">\`</span>前端架构分析与设计<span class="token punctuation">..</span>.<span class="token variable">\`</span></span>：说明此岗位并不面对初级岗位。因为工作一至两年的人，大部分都是**做业务开发**，缺少**系统的架构能力**。
				我们要准备一个项目的架构（比如公司现有的项目）重新梳理，包含：目录结构的设计、复用性设计、模块化设计、自动化测试、上线流是什么。
	- <span class="token variable"><span class="token variable">\`</span>易读、易维护的代码<span class="token variable">\`</span></span>：面试过程中一定会让你写代码，来体现。要求；每个函数的功能要单一、能抽象尽量抽象。符合这两个原则，基本就满足了“易读、易维护”。
	- <span class="token variable"><span class="token variable">\`</span>高质量、高效率的代码<span class="token variable">\`</span></span>，短时间内不好准备。
（5）<span class="token variable"><span class="token variable">\`</span>用户可用性、用户体验、用户研究<span class="token variable">\`</span></span>：考察的不是技术，而是候选人对于产品体验的理解。不仅仅只是完成功能而已。

（6）<span class="token variable"><span class="token variable">\`</span>强烈兴趣<span class="token variable">\`</span></span>等，是公司企业文化的一种要求。多去GitHub上看看别人的项目里用的什么新技术、多看博客。短时间内无法准备。
（7）了解<span class="token variable"><span class="token variable">\`</span>Sass<span class="token variable">\`</span></span>和<span class="token variable"><span class="token variable">\`</span>Less<span class="token variable">\`</span></span>：这是基本技能。
（8）**熟悉**<span class="token variable"><span class="token variable">\`</span>web构建工具<span class="token variable">\`</span></span>：新手推荐学习 Glup，而不是 grunt。当然，你要知道 **Glup 和 grunt 的区别**。
	PS：了解、熟悉、精通，是有区别的。
（9）暂时可以忽略。如果 职位描述里没有要求<span class="token variable"><span class="token variable">\`</span>Node.js<span class="token variable">\`</span></span>，而你只会一点点 <span class="token variable"><span class="token variable">\`</span>Node.js<span class="token variable">\`</span></span>，那不建议你面试的时候把<span class="token variable"><span class="token variable">\`</span>Node.js<span class="token variable">\`</span></span>体现出来。否则是给自己挖坑。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="学习新框架概要" tabindex="-1"><a class="header-anchor" href="#学习新框架概要"><span>学习新框架概要</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 学习新框架概要</span>
<span class="token number">1</span>. 这个框架是什么？即简介
<span class="token number">2</span>. 这个框架内部有哪些组件？
<span class="token number">3</span>. 各个组件的功能是什么？
<span class="token number">4</span>. 这个框架的工作流程？
<span class="token number">5</span>. 这个框架的原理机制？
<span class="token number">6</span>. 这个框架的优缺点？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="网站" tabindex="-1"><a class="header-anchor" href="#网站"><span>网站</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 综合类</span>
- 国家企业信用信息公示系统：<span class="token operator">&lt;</span>http://www.gsxt.gov.cn<span class="token operator">&gt;</span>
- JSON格式化：http://www.bejson.com/
- 草料二维码：<span class="token operator">&lt;</span>https://cli.im/<span class="token operator">&gt;</span>
- 短链生成：<span class="token operator">&lt;</span>http://www.sina.lt<span class="token operator">&gt;</span>
- GitHub短网址：<span class="token operator">&lt;</span>https://git.io/<span class="token operator">&gt;</span>
- **图片压缩**：<span class="token operator">&lt;</span>https://www.yasuotu.com/<span class="token operator">&gt;</span>
- 在线PS：<span class="token operator">&lt;</span>https://www.photopea.com/<span class="token operator">&gt;</span>
- 图片在线裁剪：<span class="token operator">&lt;</span>https://www.asqql.com/gifc/<span class="token operator">&gt;</span>
- 多数据源IP地址查询：<span class="token operator">&lt;</span>https://haoip.cn/<span class="token operator">&gt;</span>
- Gif添加字幕：<span class="token operator">&lt;</span>http://www.yingjingtu.com/<span class="token operator">&gt;</span>
- Photoshop的投影参数转换为 CSS代码：<span class="token operator">&lt;</span>https://psd2css.mezw.com/<span class="token operator">&gt;</span>
- Get Emoji：<span class="token operator">&lt;</span>https://emoji.svend.cc/<span class="token operator">&gt;</span>
- 视频转GIF：<span class="token operator">&lt;</span>https://github.com/vvo/gifify<span class="token operator">&gt;</span>
- OCR文字识别：<span class="token operator">&lt;</span>https://app.xunjiepdf.com/ocr<span class="token operator">&gt;</span>

<span class="token comment">### 图片类</span>
- 图片转base64：<span class="token operator">&lt;</span>http://imgbase64.duoshitong.com/<span class="token operator">&gt;</span>

<span class="token comment"># 1. 渐变色背景代码 「UIgradients」</span>
https://uigradients.com/

<span class="token comment"># 2. 开源插图（SVG图像，免费，无版权）</span>
https://undraw.co/illustrations


<span class="token comment"># 5. StockSnap 免费精美图片分享站</span>
https://stocksnap.io/

<span class="token comment"># 6. BootCDN 前端开源项目 CDN 加速服务</span>
https://www.bootcdn.cn/

<span class="token comment"># 8. Can I use</span>
是一个针对Web网站开发人员定制的一个查询CSS在个中流行浏览器中的特性和兼容性列表的网站，怎样可以很好地保证网页的浏览器兼容性?是网站开发者一直在讨论的问题，有了这个工具你就可以快速的了解到代码在各浏览器中的效果
https://caniuse.com/


<span class="token comment"># 9. 印记中文 https://docschina.org/</span>
深入挖掘国外<span class="token punctuation">[</span>前端<span class="token punctuation">]</span><span class="token punctuation">(</span>http://www.fly63.com/<span class="token punctuation">)</span>新领域，为中国 Web 开发人员提供优质文档！这个整合前端大部分官方文档的中文文档


<span class="token comment">## 调试抓包</span>
- 代理抓包工具 whistle：<span class="token operator">&lt;</span>https://wproxy.org/whistle/<span class="token operator">&gt;</span>
- 代理抓包工具 Fiddler：<span class="token operator">&lt;</span>https://www.telerik.com/fiddler<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="名词记录" tabindex="-1"><a class="header-anchor" href="#名词记录"><span>名词记录</span></a></h2><h3 id="岗位英文简写" tabindex="-1"><a class="header-anchor" href="#岗位英文简写"><span>岗位英文简写</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>- RD – Research <span class="token operator">&amp;</span> Develop 研发工程师
- FE – Front End 前端工程师
- BE – Back End 后端工程师
- QA – Quality Assurance 测试工程师
- DBA – Database Administrator 数据库
- PM – Product <span class="token operator">&amp;</span> Marketing 产品经理
- TS – Technology Support 技术支持
- OP – Operation 运维工程师
- UE<span class="token punctuation">(</span>UX<span class="token punctuation">)</span> – User Experience 用户体验设计师
- UI – User Interface 用户界面设计师
- UER – User Experience Research 用户研究
- SYS – System
- SCM – Software Configuration Management
- FM – Facility Management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="【内聚】" tabindex="-1"><a class="header-anchor" href="#【内聚】"><span>【内聚】</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 描述</span>
内聚（Cohesion），科学名词，是一个模块内部各成分之间相关联程度的度量。
内聚的概念是Constantine、Yourdon、Stevens等人提出的。按他们的观点，把内聚按紧密程度从低到高排列次序为偶然内聚、逻辑内聚、时间内聚、过程内聚、通信内聚、顺序内聚、功能内聚。但是紧密程度的增长是非线性的。偶然内聚和逻辑内聚的模块联系松散，后面几种内聚相差不多，功能内聚一个功能、独立性强、内部结构紧密，是最理想的内聚。


<span class="token comment">## 分类</span>
内聚按强度从低到高有以下几种类型：
<span class="token number">1</span>. 偶然内聚
如果一个模块的各成分之间毫无关系，则称为偶然内聚，也就是说模块完成一组任务，这些任务之间的关系松散，实际上没有什么联系。

<span class="token number">2</span>. 逻辑内聚
几个逻辑上相关的功能被放在同一模块中，则称为逻辑内聚。如一个模块读取各种不同类型外设的输入。尽管逻辑内聚比偶然内聚合理一些，但逻辑内聚的模块各成分在功能上并无关系，即使局部功能的修改有时也会影响全局，因此这类模块的修改也比较困难。

<span class="token number">3</span>. 时间内聚
如果一个模块完成的功能必须在同一时间内执行（如系统初始化），但这些功能只是因为时间因素关联在一起，则称为时间内聚。

<span class="token number">4</span>. 过程内聚
构件或者操作的组合方式是，允许在调用前面的构件或操作之后，马上调用后面的构件或操作，即使两者之间没有数据进行传递。
模块完成多个需要按一定的步骤一次完成的功能。（过程相关---控制耦合）。例如：在用程序流程图设计模块时，若将程序流程图中的一部分划出各自组成模块，便形成过程内聚。

<span class="token number">5</span>. 通信内聚（信息内聚）
如果一个模块的所有成分都操作同一数据集或生成同一数据集，则称为通信内聚。
模块完成多个功能，各个功能都在同一数据结构上操作，这个模块的所有功能都是基于同一个数据结构（符号表），因此，它是一个信息内聚的模块。

<span class="token number">6</span>. 顺序内聚
如果一个模块的各个成分和同一个功能密切相关，而且一个成分的输出作为另一个成分的输入，则称为顺序内聚。

<span class="token number">7</span>. 功能内聚
模块的所有成分对于完成单一的功能都是必须的，则称为功能内聚。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,16),d=[l];function v(c,r){return s(),a("div",null,d)}const p=n(i,[["render",v],["__file","杂记本.html.vue"]]),o=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E6%9D%82%E8%AE%B0%E6%9C%AC.html","title":"","lang":"zh-CN","frontmatter":{"Author":"willysliang","CreateTime":"2022-12-30T11:48:02.000Z","Modifier":"willysliang","ModifiedTime":"2022-12-30T12:02:08.000Z","Description":"杂记本"},"headers":[{"level":2,"title":"杂记本","slug":"杂记本","link":"#杂记本","children":[]},{"level":2,"title":"学习","slug":"学习","link":"#学习","children":[{"level":3,"title":"待了解","slug":"待了解","link":"#待了解","children":[]},{"level":3,"title":"面试经验","slug":"面试经验","link":"#面试经验","children":[]},{"level":3,"title":"学习新框架概要","slug":"学习新框架概要","link":"#学习新框架概要","children":[]},{"level":3,"title":"网站","slug":"网站","link":"#网站","children":[]}]},{"level":2,"title":"名词记录","slug":"名词记录","link":"#名词记录","children":[{"level":3,"title":"岗位英文简写","slug":"岗位英文简写","link":"#岗位英文简写","children":[]},{"level":3,"title":"【内聚】","slug":"【内聚】","link":"#【内聚】","children":[]}]}],"git":{"updatedTime":1708562968000,"contributors":[{"name":"willy","email":"willysliang","commits":3},{"name":"willy","email":"willysliang@qq.com","commits":1}]},"filePathRelative":"前端进阶/杂记本.md"}');export{p as comp,o as data};
