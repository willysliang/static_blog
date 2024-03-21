import{_ as n,o as e,c as s,b as i}from"./app-Bvx-HY_0.js";const a={},l=i(`<h3 id="前端面试【非技术】" tabindex="-1"><a class="header-anchor" href="#前端面试【非技术】"><span>前端面试【非技术】</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 前端面试【非技术】</span>
主要记录哪些非技术相关的问题，如职业规划、团队管理等问题。


<span class="token comment">### 问题列表</span>
<span class="token number">1</span>. 你将来的人生规划是什么？是走技术路线？还是管理路线
<span class="token number">2</span>. 你对本次换工作的期望是什么？你想在哪方面有提高
<span class="token number">3</span>. 你之前工作的离职原因是什么？
<span class="token number">4</span>. 介绍一下你经历过的并且觉得有亮点的项目
<span class="token number">5</span>. 管理相关问题，如何避免团队新人（年龄较小、经验较少、应届生）犯下质量上的问题
<span class="token number">6</span>. 管理相关问题，如何控制团队的开发质量
<span class="token number">7</span>. 管理相关问题，在管理团队时，遇到工作资质比你老，出现在工作中对你<span class="token string">&quot;不服&quot;</span>的情况，你如何应对？
<span class="token number">8</span>. 管理相关问题，如何保证code review的质量
<span class="token number">9</span>. 过往工作中，是否遇到过什么课题？你是如何解决的？


上家公司没有成熟的体系架构，因为自己比较年轻，所以还是希望能来像你们这样人数规模比较庞大的公司发展。
想跟更多的前端大牛去学习，以提升自己和鞭笞自己。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="前端工程的价值体现在哪" tabindex="-1"><a class="header-anchor" href="#前端工程的价值体现在哪"><span>前端工程的价值体现在哪？</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 前端工程的价值体现在哪？</span>
<span class="token number">1</span>. 为简化用户使用提供技术支持（交互部分）
<span class="token number">2</span>. 为多个浏览器兼容性提供支持
<span class="token number">3</span>. 为提供用户浏览速度（浏览器性能）提供支持
<span class="token number">4</span>. 为跨平台或者其他基于 webkit 或其他渲染引擎的应用提供支持
<span class="token number">5</span>. 为展示数据提供支持（数据接口）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="平时如何管理你的项目" tabindex="-1"><a class="header-anchor" href="#平时如何管理你的项目"><span>平时如何管理你的项目？</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 平时如何管理你的项目？</span>
<span class="token number">1</span>. 前期团队必须确定好全局样式（globe.css），编码模式（utf-8）等；
<span class="token number">2</span>. 编写习惯必须一致（例如都是采用继承式写法，丹阳市都写一行）；
<span class="token number">3</span>. 标注样式编写、各模块都及时标注（标注关键样式调用地方）；
<span class="token number">4</span>. 页面进行标注（如页面模块开始和结束）；
<span class="token number">5</span>. CSS 与 HTML 分文件夹并行存放，命名都得统一；
<span class="token number">6</span>. JS 分文件夹存放，命名以该 JS 功能为准的英文翻译。
<span class="token number">7</span>. 图片采用整合的 images/png/1.png 格式文件使用，尽量整合在一起方便将来管理。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="如何保证code-review的质量" tabindex="-1"><a class="header-anchor" href="#如何保证code-review的质量"><span>如何保证code review的质量</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 如何保证code review的质量</span>
<span class="token comment">### 可用的工具</span>
- PR 是在 gitlab 上的 <span class="token function">diff</span> 工具上进行确认。
- 采用 Code Flow 进行交叉 code review。


<span class="token comment">### 流程</span>
<span class="token number">1</span>. 先是任务分发，程序员在接到任务后，建立新的 feature 分支，然后进行开发。
<span class="token number">2</span>. 代码开发完成后，应该将自己开发的功能需求文档和代码的分支地址或代码的 <span class="token function">diff</span> 地址发给 Review 代码的人。
<span class="token number">3</span>. Review者


<span class="token comment">### 激励政策</span>
<span class="token number">1</span>. 管理上规定所有功能的上线前都应该经过 CodeReview，功能（或模块）不仅有对应的开发者，也有每次上线前的 Review者，
将这一步固化为生产流程中的一步。
<span class="token number">2</span>. 长此以往，每个开发者都有寻找 Review 者的需求，最后整个团队的每个成员都会有机会成为 Review 别人的人和被 Review 的人。


<span class="token comment">### 对于代码的作者</span>
- <span class="token string">&quot;代码被Review过&quot;</span> 这件事已经成为生产流程的一部分。
- Code Review 的参与者可以共同分担上线后出现 bug 的风险。


<span class="token comment">### 对于 Review 的人</span>
- 将来自己也会需要别人 Review 自己的代码，所以不好拒绝别人。
- 关于保证 Review 质量，由于上线后出现 bug 的风险是共同承担的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="过往工作中遇到的问题-解决方案" tabindex="-1"><a class="header-anchor" href="#过往工作中遇到的问题-解决方案"><span>过往工作中遇到的问题 &amp; 解决方案</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 2. 过往工作中遇到的问题 &amp; 解决方案</span>
- 这个问题是想考验思考问题的逻辑性、是否善于总结、是否有抗压能力等等。

<span class="token comment">### 安智信 - 特瑞</span>
在刚刚进入这个工作单位的时候，我还是从学生身份转为职场人，当时工作安排了一个《烟草专卖系统》的项目任务给我。
当时我独立负责项目前端的构建与开发工作，技术选型为 uniapp 作为安卓应用开发，使用 pnpm、vite、ts、vue3 作为核心框架技术。因为当时自己除了毕业设计之外，并没有独立开发过其他的项目，所以在这条路上就有些坎坷。

主要原因如下：
  <span class="token number">1</span>. 工作排期估时预算：工作初始排期预期是刚好足够的，但是因为在工作中任务不断地新增，就导致工作量不断增加，从而使得工期的延长。
  <span class="token number">2</span>. 对框架的了解不够深入：技术选型时选择了当时呼声很高但是自己并不熟悉的uniapp框架。
  <span class="token number">3</span>. 公司内部，关于 vue3和uniapp框架的技术没有太多的积累，需要自己去打通。
  <span class="token number">4</span>. 项目规模和难度的错误估计。
这也导致了项目前期的估时和排期误差很大，后来到项目中期发生了延期。


当时解决办法是：
- 加强自己的学习，在下班之余自己去摸索学习，去GitHub上观摩别人的代码技巧，并将需要深入学习的点罗列下来逐个攻克。
- 提前写好对接的接口文档，避免block同事的工作。
- 连续的加班工作，提高代码复用率，终于把进度赶回来。


通过这次努力的积累：
- 封装了一些函数hooks，大大提高了后续项目的开发效率
- 建立了团队成员间的信任，后续再次面对项目时，减少了很多不必要的沟通成本。
- 更有有效率地工作细分。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="移动端-android-ios-怎么做好用户体验" tabindex="-1"><a class="header-anchor" href="#移动端-android-ios-怎么做好用户体验"><span>移动端（Android / IOS）怎么做好用户体验?</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 移动端（Android IOS）怎么做好用户体验?</span>
<span class="token number">1</span>. 清晰的视觉纵线、
<span class="token number">2</span>. 信息的分组、极致的减法、
<span class="token number">3</span>. 利用选择代替输入、
<span class="token number">4</span>. 标签及文字的排布方式、
<span class="token number">5</span>. 依靠明文确认密码、
<span class="token number">6</span>. 合理的键盘利用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,12),d=[l];function c(v,r){return e(),s("div",null,d)}const m=n(a,[["render",c],["__file","前端面试【非技术】.html.vue"]]),t=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E3%80%90%E9%9D%9E%E6%8A%80%E6%9C%AF%E3%80%91.html","title":"","lang":"zh-CN","frontmatter":{"Author":"willysliang","CreateTime":"2023-02-23T15:51:22.000Z","Modifier":"willysliang","ModifiedTime":"2023-02-23T15:51:39.000Z","Description":"前端面试【非技术】"},"headers":[{"level":3,"title":"前端面试【非技术】","slug":"前端面试【非技术】","link":"#前端面试【非技术】","children":[]},{"level":3,"title":"前端工程的价值体现在哪？","slug":"前端工程的价值体现在哪","link":"#前端工程的价值体现在哪","children":[]},{"level":3,"title":"平时如何管理你的项目？","slug":"平时如何管理你的项目","link":"#平时如何管理你的项目","children":[]},{"level":3,"title":"如何保证code review的质量","slug":"如何保证code-review的质量","link":"#如何保证code-review的质量","children":[]},{"level":3,"title":"过往工作中遇到的问题 & 解决方案","slug":"过往工作中遇到的问题-解决方案","link":"#过往工作中遇到的问题-解决方案","children":[]},{"level":3,"title":"移动端（Android / IOS）怎么做好用户体验?","slug":"移动端-android-ios-怎么做好用户体验","link":"#移动端-android-ios-怎么做好用户体验","children":[]}],"git":{"updatedTime":1701137510000,"contributors":[{"name":"willy","email":"willysliang","commits":2}]},"filePathRelative":"前端进阶/前端面试【非技术】.md"}');export{m as comp,t as data};
