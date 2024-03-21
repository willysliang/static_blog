import{_ as n,o as e,c as i,b as s}from"./app-Bvx-HY_0.js";const l={},a=s(`<h3 id="前端面试【大纲】" tabindex="-1"><a class="header-anchor" href="#前端面试【大纲】"><span>前端面试【大纲】</span></a></h3><h3 id="浏览器" tabindex="-1"><a class="header-anchor" href="#浏览器"><span>浏览器</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 浏览器</span>
- 介绍一下EventLoop
		EventLoop中为什么要同时存在宏任务和微任务两个队列？设计一个行不行？
		一段代码在执行时，程序是如何去区分宏任务和微任务的？

- 介绍一下宏任务和微任务
		宏任务和微任务的区别是什么
    追问：哪些是宏任务？哪些是微任务？
    追问：宏任务和微任务的区别是什么？为什么要设计宏任务和微任务两个队列？使用一个任务队列行不行？为什么？
    追问：你刚刚所说的都是根据api来识别微任务和宏任务的，那么一段完整的程序浏览器是如何区分宏任务和微任务的呢？
    微任务的优先级？
    如何理解script标签是个宏任务？


- 内存泄露
		如何排查内存泄露导致的页面卡顿现象
		项目中内存泄漏的场景
		setTimeout为什么会造成内存泄露？如何防止setTimeout内存泄露？清除定时器为什么就不会有内存泄露？

- 浏览器加载页面
		onload 和 DOMContentLoaded的区别
		requestAnimationFrame
		浏览器加载页面的过程
		script标签为什么要放在底部
		defer和async的区别，以及它们的加载和执行时机
		DOM事件模型。事件捕获和事件冒泡的使用场景
		从输入url到页面展示的过程

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="css" tabindex="-1"><a class="header-anchor" href="#css"><span>CSS</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## CSS</span>
- css和js两种方式实现div右移1000px动画

- visibility、display、opacity的区别

- 单行截断css

- flex布局
		- flex：1

- transition、transform、translate的区别

- 如何画一条 <span class="token number">0</span>.5px 的边框

- 说一下BFC

- parent元素宽高不定，实现scale固定宽高比始终为4：3

- CSS垂直居中的方案

- 伪元素和伪类的区别

- position的几个属性和含义

- 说一下盒模型

- 响应式布局方案

- 三栏式布局方案

- 如何提高动画的渲染性能
		- 这样使用GPU动画
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="js-es6" tabindex="-1"><a class="header-anchor" href="#js-es6"><span>JS &amp; ES6+</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## JS &amp; ES6+</span>
- es6有哪些新特性
	
	- Map和Set的区别，Map和Object的区别
	- 数组的filter、every、flat的作用是什么

- 说一下对Promise的了解
		- Promise实现原理
		- Promise的all和race有什么区别

- 箭头函数和普通函数的区别

- let、var和const的区别？如果希望const定义的对象的属性也不能被修改该怎么做？
		- 堆和栈的区别
		- 数据类型有哪些？如何判断一个数据是否是数组
		- instanceof的实现原理

- 分别介绍一下原型、原型链、作用域和作用域链的含义和使用场景

- 闭包的原理

- new的实现原理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="http-网络" tabindex="-1"><a class="header-anchor" href="#http-网络"><span>HTTP 网络</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## HTTP 面试题</span>
- 介绍一下http缓存
    追问：哪些字段用做强缓存？哪些字段用做协商缓存？
    追问：cache-control、expires、etag等字段的属性值是什么样的？
    追问：这些字段都被存放在请求的哪个部分？
    追问：last-modify和expires这些字段的时间有什么区别？
    追问：last-modify和expires能共存吗？
    追问：如果不想让某个资源使用缓存，那么应该如何设计http缓存？
    追问：cache-control中的no-cache和no-store的区别

- http1.1和http2的区别

- 如何设计css、js等文件的缓存

- <span class="token number">204</span>、304、404、504

- 描述一下同源策略、跨域及其解决方案

- sessionSorage、localstorage、cookie的区别？
		同一个系统开两个网页，两个网页的sessionStorage共享吗？

- http和https的区别？
		为什么HTTPS是安全的？为什么https是相对安全的？
		https加密原理？

- tcp三次握手和四次挥手的步骤

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript"><span>TypeScript</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## TypeScript 面试题</span>
- typescript相较于JavaScript有什么优势和劣势？
- const func <span class="token operator">=</span> <span class="token punctuation">(</span>a, b<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> a + b<span class="token punctuation">;</span> 要求编写Typescript，要求a，b参数类型一致，都为number或者都为string
- 实现 ReturnType
- 实现 DeepReadOnly
- 实现内置条件类型 Unility Types
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack"><span>Webpack</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Webpack</span>
- 为什么webpack打包慢？为什么vite会比webpack快？如果想提高webpack速度，应该怎么做？
		Webpack优化

- 说说webpack编译打包的流程

- 说一下对tree-shaking的了解，对CommonJS和ESM都可以用tree-shaking吗

- webpack中plugin和laoder的区别，它们的执行时机，以及常用的plugin和loader

- css-loader的作用是什么？不使用css-loader行不行

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="框架通识" tabindex="-1"><a class="header-anchor" href="#框架通识"><span>框架通识</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 框架通识</span>
- React-router、vue-router原理

- vue和 react 的区别
		- 前端框架用vue还是react？清晰对比两者差异
		- vue和 react 如何做技术选型

- css module原理

- 说一下虚拟DOM？为什么要使用虚拟DOM？
		- 追问：虚拟DOM是如何合并patch的

- react diff算法和vue diff算法的区别
		- map 和 v-for 中 key 的作用

- 组件通信的方式有哪些

- SPA单页面应用和多页面应用有什么区别
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="vue" tabindex="-1"><a class="header-anchor" href="#vue"><span>Vue</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Vue 面试题</span>
- data为什么是个函数，而不是对象

- computed和watch的区别
		- watch能监听computed的属性吗

- vue的响应式原理
		- vue模板（template）里为什么不能使用多个头结点？
		
- vue2和 vue3 在数据绑定这一块有什么区别？

- vue的生命周期
		- mounted拿到数据可以后可以直接获取dom吗
		- vue挂载和卸载父子组件生命周期钩子执行顺序

- nextTick原理

- vuex为什么同时设计mutation和action？只设计一个行不行？

- vue的优化方案（等同于如何编写可读性高、易维护且高性能的vue代码）

- keep-alive的原理，使用有什么问题？如何解决？
		- keep-alive 的原理，是否触发了 create 和 mounted，是否render 重新渲染页面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="react" tabindex="-1"><a class="header-anchor" href="#react"><span>React</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## React 面试题</span>
- React Fiber 原理介绍
	- fiber的实现原理
	- fiber的时间调度通过哪两个原生api实现的（requestAnimationFrame和requestIdleCallback？？？）

- React dom绑定事件和原生事件有什么区别
		- React合成事件是如何实现的

- 说一下 Redux 原理
    - 使用Redux时需要注意的点
    - 如果Redux没返回新的数据会怎样
		- Redux是如何派发数据的？ connect原理？
		- context的实现原理是什么？如何做依赖收集？

- 什么场景会触发重新渲染（re-render）

- 说一下 setState
    - setState是同步还是异步的
    - setState返回一样的引用，render会执行吗

- React的生命周期（React15、React16）

- React Hooks有什么优势和劣势
		- useEffect的使用方法？useEffect的return会在什么时候执行？useEffect原理是什么？
		- useMemo和useCallback的区别，它们的实现原理是什么？
		- useEffect、useMemo、useCallback是如何做依赖收集的
		- Hooks的实现原理

- PureComponent和Component的区别

- 如果在map循环中没有设置key值，那么从 A B C D 四个节点变成 B C D三个节点，它会以什么样的方式变化

- 类组件和纯函数组件的区别
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="小程序" tabindex="-1"><a class="header-anchor" href="#小程序"><span>小程序</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 小程序面试题</span>
<span class="token number">1</span>. 小程序的运行环境是怎样的？
<span class="token number">2</span>. 小程序的运行机制是怎样的？
<span class="token number">3</span>. 小程序的原生组件与非原生组件的区别是什么？
<span class="token number">4</span>. 如何解决小程序10级页面的问题？
<span class="token number">5</span>. 静默授权和非静默授权的区别是什么？
<span class="token number">6</span>. 小程序页面切换的方法有哪些？他们之间有哪些区别？
<span class="token number">7</span>. 谈一谈小程序的rpx单位？
<span class="token number">8</span>. 如何获取当前用户的openid？
<span class="token number">9</span>. unionid解决的是什么问题？
<span class="token number">10</span>. onShow和onLoad生命周期有什么不同？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="面试经历" tabindex="-1"><a class="header-anchor" href="#面试经历"><span>面试经历</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 博士科技 2023.03.06 16:41</span>
key<span class="token punctuation">..</span>of  any输出什么
递归组件获取父辈的值
display，none，visility,hidden
单例模式弹层（不断显示）
判断对象是否该属性，类似isKey of obj方式
给对象添加新属性
动态添加新属性
for<span class="token punctuation">..</span>.of,for<span class="token punctuation">..</span>.in
怎么给对象添加迭代器使用for<span class="token punctuation">..</span>.in
for<span class="token punctuation">..</span>.in可以给数组遍历吗，为什么不建议
主题设置
object.create（null）怎么获取对象的方法
伪数组获取数组方法
增删改查数组
interface和type区别
axios封装身份认证信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,23),d=[a];function v(c,r){return e(),i("div",null,d)}const u=n(l,[["render",v],["__file","前端面试【大纲】.html.vue"]]),b=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E3%80%90%E5%A4%A7%E7%BA%B2%E3%80%91.html","title":"","lang":"zh-CN","frontmatter":{"Author":"willysliang","CreateTime":"2023-03-29T15:02:26.000Z","Modifier":"willysliang","ModifiedTime":"2023-03-29T15:06:07.000Z","Description":"前端面试【大纲】"},"headers":[{"level":3,"title":"前端面试【大纲】","slug":"前端面试【大纲】","link":"#前端面试【大纲】","children":[]},{"level":3,"title":"浏览器","slug":"浏览器","link":"#浏览器","children":[]},{"level":3,"title":"CSS","slug":"css","link":"#css","children":[]},{"level":3,"title":"JS & ES6+","slug":"js-es6","link":"#js-es6","children":[]},{"level":3,"title":"HTTP 网络","slug":"http-网络","link":"#http-网络","children":[]},{"level":3,"title":"TypeScript","slug":"typescript","link":"#typescript","children":[]},{"level":3,"title":"Webpack","slug":"webpack","link":"#webpack","children":[]},{"level":3,"title":"框架通识","slug":"框架通识","link":"#框架通识","children":[]},{"level":3,"title":"Vue","slug":"vue","link":"#vue","children":[]},{"level":3,"title":"React","slug":"react","link":"#react","children":[]},{"level":3,"title":"小程序","slug":"小程序","link":"#小程序","children":[]},{"level":3,"title":"面试经历","slug":"面试经历","link":"#面试经历","children":[]}],"git":{"updatedTime":1701137510000,"contributors":[{"name":"willy","email":"willysliang","commits":2}]},"filePathRelative":"前端进阶/前端面试【大纲】.md"}');export{u as comp,b as data};
