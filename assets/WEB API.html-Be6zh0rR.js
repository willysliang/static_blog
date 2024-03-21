import{_ as n,o as s,c as a,b as t}from"./app-Bvx-HY_0.js";const e="/static_blog/assets/recover_deleted_watermark-0S_89NpH.webp",p="/static_blog/assets/blob_composition-eFZTX2Z5.png",o="/static_blog/assets/image-20240228203329693-DncR0Hr5.png",c="/static_blog/assets/202402282040-DQ5J63Z6.png",i="/static_blog/assets/202402282058-CTNThoa3.png",l="/static_blog/assets/image-20240228204948313-BiUE_aQM.png",u="/static_blog/assets/image-20240228205239484-BAUhNldC.png",r="/static_blog/assets/image-20240228205720647-BeHjl_nd.png",d={},k=t(`<h2 id="web-api" tabindex="-1"><a class="header-anchor" href="#web-api"><span>WEB API</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## WEB API</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="观察器" tabindex="-1"><a class="header-anchor" href="#观察器"><span>观察器</span></a></h2><h3 id="intersectionobserver-相交节点观察器" tabindex="-1"><a class="header-anchor" href="#intersectionobserver-相交节点观察器"><span>IntersectionObserver 相交节点观察器</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## IntersectionObserver API</span>
IntersectionObserver API 是异步的，不随着目标元素的滚动同步触发。 即只有线程空闲下来，才会执行观察器。这意味着，这个观察器的优先级非常低，只在其他任务执行完，浏览器有了空闲才会执行。


<span class="token comment">## IntersectionObserverEntry对象提供目标元素的信息，一共有六个属性。</span>
time：可见性发生变化的时间，是一个高精度时间戳，单位为毫秒
target：被观察的目标元素，是一个 DOM 节点对象
rootBounds：根元素的矩形区域的信息，getBoundingClientRect<span class="token punctuation">(</span><span class="token punctuation">)</span>方法的返回值，如果没有根元素（即直接相对于视口滚动），则返回null
boundingClientRect：目标元素的矩形区域的信息
intersectionRect：目标元素与视口（或根元素）的交叉区域的信息
intersectionRatio：目标元素的可见比例，即intersectionRect占boundingClientRect的比例，完全可见时为1，完全不可见时小于等于0


<span class="token comment">## options </span>
root: null, // 指定与目标元素相交的根元素，默认null为视口
threshold: <span class="token punctuation">[</span><span class="token punctuation">]</span> // <span class="token punctuation">[</span><span class="token number">0</span>, <span class="token number">0.5</span>, <span class="token number">1</span><span class="token punctuation">]</span> 当目标元素和根元素相交的面积占目标元素面积的百分比到达或跨过某些指定的临界值时就会触发回调函数
rootMagin：<span class="token string">&#39;&#39;</span> // <span class="token string">&quot;100px 0&quot;</span> 与margin类型写法，指定与跟元素相交时的延时加载


<span class="token comment">## 实例方法</span>
- observe<span class="token punctuation">(</span><span class="token punctuation">)</span>
	- 观察某个目标元素，一个观察者实例可以观察任意多个目标元素。
	- 注意：这不是事件，没有冒泡。所以不能只调用一次 observe 方法就能观察一个页面里的所有 img 元素
- unobserve<span class="token punctuation">(</span><span class="token punctuation">)</span>
	- 取消对某个目标元素的观察，延迟加载通常都是一次性的，observe 的回调里应该直接调用 unobserve<span class="token punctuation">(</span><span class="token punctuation">)</span> 那个元素.
- disconnect<span class="token punctuation">(</span><span class="token punctuation">)</span>
	- 取消观察所有已观察的目标元素
- takeRecords<span class="token punctuation">(</span><span class="token punctuation">)</span>
    在浏览器内部，当一个观察者实例在某一时刻观察到了若干个相交动作时，它不会立即执行回调，它会调用 window.requestIdleCallback<span class="token punctuation">(</span><span class="token punctuation">)</span> （目前只有 Chrome 支持）来异步的执行我们指定的回调函数，而且还规定了最大的延迟时间是 <span class="token number">100</span> 毫秒，相当于浏览器会执行：
    requestIdleCallback<span class="token punctuation">((</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>entries.length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        callback<span class="token punctuation">(</span>entries, observer<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>, <span class="token punctuation">{</span> timeout: <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>图片滚动底部懒加载</strong></p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in imgUrl<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgRef<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>systemNotfound<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgUrl[index]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>h-96<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> systemNotfound <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/assets/images&#39;</span>

<span class="token keyword">const</span> imgRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> imgUrl <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string">&#39;https://img2.baidu.com/it/u=617579813,2960860841&amp;fm=253&amp;fmt=auto&amp;app=120&amp;f=JPEG?w=1280&amp;h=800&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://img2.baidu.com/it/u=1003272215,1878948666&amp;fm=253&amp;fmt=auto&amp;app=120&amp;f=JPEG?w=1280&amp;h=800&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://img1.baidu.com/it/u=2995157981,91041597&amp;fm=253&amp;fmt=auto&amp;app=138&amp;f=JPEG?w=500&amp;h=750&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://img2.baidu.com/it/u=1395980100,2999837177&amp;fm=253&amp;fmt=auto&amp;app=120&amp;f=JPEG?w=1200&amp;h=675&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://img0.baidu.com/it/u=925843206,3288141497&amp;fm=253&amp;fmt=auto&amp;app=138&amp;f=JPEG?w=500&amp;h=769&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://img1.baidu.com/it/u=1300668939,1504410366&amp;fm=253&amp;fmt=auto&amp;app=120&amp;f=JPEG?w=500&amp;h=858&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://img0.baidu.com/it/u=4008146120,512111027&amp;fm=253&amp;fmt=auto&amp;app=138&amp;f=JPEG?w=889&amp;h=500&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://img1.baidu.com/it/u=3622442929,3246643478&amp;fm=253&amp;fmt=auto&amp;app=138&amp;f=JPEG?w=889&amp;h=500&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;http://t13.baidu.com/it/u=230088816,2918366315&amp;fm=224&amp;app=112&amp;f=JPEG?w=250&amp;h=500&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://img2.baidu.com/it/u=3038223445,2416689412&amp;fm=253&amp;fmt=auto&amp;app=120&amp;f=JPEG?w=1280&amp;h=800&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// 这里是一个数组可以指定多个比例类似[0.25, 0.5, 0.75, 1]</span>
    <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 交会处</span>
    <span class="token literal-property property">rootMargin</span><span class="token operator">:</span> <span class="token string">&#39;0px&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 对视口进行收缩和扩张</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> lazyIntersection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entires</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// entires为监听的节点数组对象</span>
    entires<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// isIntersecting是当前监听元素交叉区域是否在可视区域指定的阈值内返回的是一个布尔值</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>target<span class="token punctuation">.</span>src <span class="token operator">=</span> item<span class="token punctuation">.</span>target<span class="token operator">?.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-src&#39;</span><span class="token punctuation">)</span>
        <span class="token comment">// 这里资源加载后就停止进行观察</span>
        lazyIntersection<span class="token punctuation">.</span><span class="token function">unobserve</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>target<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>

  <span class="token doc-comment comment">/** observe用来观察指定的DOM节点 */</span>
  imgRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    lazyIntersection<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mutationobserver-节点元素变化监听器" tabindex="-1"><a class="header-anchor" href="#mutationobserver-节点元素变化监听器"><span>MutationObserver 节点元素变化监听器</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## MutationObserver 节点元素变化监听器</span>
- Mutation Observer 提供了监视对 DOM 树所做更改的能力。它被设计为旧的 Mutation Events 功能的替代品，该功能是 DOM3 Events 规范的一部分。
- 即是说这是一个 DOM 元素变化的监听器，当被观察的目标 DOM 发生改变时就可以执行指定的逻辑。


<span class="token comment">## MutationObserver 的应用场景（防删除 DOM 水印）</span>
- MutationObserver 主要在需要监听用户是否违规操作 DOM 的场景。
- 以水印为例，监听用户是否私自把页面的水印 DOM 进行删除，如果触发了事件则对水印进行恢复。
- 常规的页面水印是通过一个 DOM 元素来生成顶层的固定水印，如果用户有一定的网页知识可通过开发者工具来删除水印，这时就可以使用 MutationObserver 来监听 DOM 的操作。
<span class="token comment">### 代码的实现</span>
- 我们可在加载完水印之后创建一个监听器，并且监听了 body 元素（因为常规的水印元素是body的直接子元素，如果直接监听刚才的水印元素，删除这个元素并不会触发监听器）
- 首先根据 mutation 的 removedNodes 字段判断是否进行了删除操作，如果是删除操作再根据是否有下一个相邻节点来判断节点恢复的位置，如果存在相邻节点就在其前面插入被删除的节点，否则直接在末尾追加。


<span class="token comment">## 实例方法</span>
- MutationObserver是一个构造函数，他的实例会有 disconnect、observe和 takeRecords 三个方法

<span class="token comment">### 1. constructor</span>
构造函数接收一个函数，用于在 DOM 变化时执行，该函数有两个参数：一个是描述所有被触发改动的 MutationRecord 对象数组，另一个是调用该函数的 MutationObserver 对象。

<span class="token comment">### 2. observe</span>
- mutationObserver.observe<span class="token punctuation">(</span>target<span class="token punctuation">[</span>, options<span class="token punctuation">]</span><span class="token punctuation">)</span>
	- target: DOM 树中的一个要观察变化的DOM Node（可能是一个Element），或者是被观察的子节点树的根节点。
	- options: 一个可选的 MutationObserverInit 对象，此对象的配置项描述了 DOM 的哪些变化应该提供给当前观察者的 callback
		- attributes设为 <span class="token boolean">true</span> 以观察受监视元素的属性值变更。默认值为 false。
		- attributeFilter要监视的特定属性名称的数组。如未包含此属性，则对所有属性的更改都会触发变动通知。无默认值。
		- characterData设为 <span class="token boolean">true</span> 以监视指定目标节点或子节点树中节点所包含的字符数据的变化。无默认值
		- childList设为 <span class="token boolean">true</span> 以监视目标节点（如果 subtree 为 true，则包含子孙节点）添加或删除新的子节点。默认值为 false。
		- subtree的其他值也会作用于此子树下的所有节点，而不仅仅只作用于目标节点。默认值为 false。

<span class="token comment">### 3. disconnect</span>
阻止 MutationObserver 实例继续接收的通知，直到再次调用其 observe<span class="token punctuation">(</span><span class="token punctuation">)</span> 方法，该观察者对象包含的回调函数都不会再被调用。

<span class="token comment">### 4. takeRecords</span>
返回已检测到但尚未由观察者的回调函数处理的所有匹配 DOM 更改的列表，使变更队列保持为空。
DOM 变化之后并不是立即通知执行回调，而是等主线程代码执行完毕再通知，所以 takeRecords 可以将通知提前拦截。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">DOMHandle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">mutationList<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	mutationList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">mutation</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">switch</span><span class="token punctuation">(</span>mutation<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> <span class="token string">&#39;childList&#39;</span><span class="token operator">:</span>
        <span class="token comment">// 从树上添加或移除一个或多个的子节点</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;结点变更&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
			<span class="token keyword">case</span> <span class="token string">&#39;attributes&#39;</span><span class="token operator">:</span>
        <span class="token comment">// mutation.target 中某节点的一个属性值被更改</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;属性变更&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span>DOMHandler<span class="token punctuation">)</span>
<span class="token keyword">const</span> node1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">)</span>
observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>node1<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
node1<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;willy&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 属性变更</span>

observer<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
node1<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cilly&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 调用之后再元素版本修改属性都不会再次出发之前的回调</span>


<span class="token keyword">const</span> node2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;app&#39;</span><span class="token punctuation">)</span>
observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>node2<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
node<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;king&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> notices <span class="token operator">=</span> observer<span class="token punctuation">.</span><span class="token function">takeRecords</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 拦截 DOM 更改的回调</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>notice<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>【实例】防删除 DOM 元素水印</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>测试删除 DOM 是否能恢复<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">loadMark</span><span class="token punctuation">(</span>settings<span class="token punctuation">)</span> <span class="token comment">// 加载水印</span>

    <span class="token comment">// DOMHandler 在 typescript 中属于 MutationCallback</span>
    <span class="token keyword">const</span> <span class="token function-variable function">DOMHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">mutationList<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mutationList<span class="token punctuation">)</span>
      mutationList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">mutation</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> target<span class="token punctuation">,</span> nextSibling<span class="token punctuation">,</span> removedNodes <span class="token punctuation">}</span> <span class="token operator">=</span> mutation
        <span class="token comment">// 如果列表不为空，说明触发操作的动作是删除</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>mutation<span class="token punctuation">.</span>removedNodes<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>nextSibling<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果存在下一个相邻子节点执行插入</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;恢复被删除的节点&#39;</span><span class="token punctuation">)</span>
            target<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>removedNodes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nextSibling<span class="token punctuation">)</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 直接添加到 target 的末尾</span>
            target<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>removedNodes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span>DOMHandler<span class="token punctuation">)</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> document<span class="token punctuation">.</span>body
    observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">childList</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">subtree</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+e+`" alt="恢复删除的水印"></p><h2 id="类文件对象-blob" tabindex="-1"><a class="header-anchor" href="#类文件对象-blob"><span>类文件对象 Blob</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 类文件对象 Blob</span>
- Blob 表示二进制类型的大对象，在 JS 中 Blob 类型的对象表示一个不可变的类似文件对象的原始数据。
- Blob 存储的数据可以按文本或二进制的格式进行读取，也可以转换成 ReadableStream 来用于数据操作。

- Blob 对象主要负责保存数据，是字节块的不透明表示。
		- Blob 通常存储的是映像、声音或多媒体文件。
		- 注意：Blob 存储的不一定是 JavaScript 原生格式的格式的数据。
		- 如 <span class="token variable"><span class="token variable">\`</span>File<span class="token variable">\`</span></span> 接口基于 Blob，继承 Blob 的功能并将其扩展使其支持用户系统上的文件。
 

<span class="token comment">### Blob 对象拥有两个属性：</span>
- size: 表示 Blob 对象所包含数据的大小（以字节为单位）
- type: 表明该 Blob 对象所包含数据的 MIME 类型。（字符串类型），如果类型未定义，则该值为空字符串
- 可以调用它唯一的 <span class="token variable"><span class="token variable">\`</span>slice<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 方法检索 Blob 的一部分。



<span class="token comment">### Blob 的作用</span>
- Blob 可以从网络内容中创建，可以保存到磁盘，也可以从磁盘读取。Blob 是 <span class="token variable"><span class="token variable">\`</span>FileReader<span class="token variable">\`</span></span> API 中使用的文件的底层数据结构。
- Blob 可以使用 <span class="token punctuation">[</span>Channel Messaging API<span class="token punctuation">]</span> 在 <span class="token punctuation">[</span>Web Worker<span class="token punctuation">]</span> 和 <span class="token punctuation">[</span>iframe<span class="token punctuation">]</span> 之间发送，也可以使用 <span class="token punctuation">[</span>Push API<span class="token punctuation">]</span> 从服务器发送到客户端。
- 可以使用 URL 引用 Blob。
- 提取存储在 Blob 中的文本<span class="token punctuation">(</span>或字节<span class="token punctuation">)</span>，Blob 还可以直接存储在 <span class="token punctuation">[</span>IndexedDB<span class="token punctuation">]</span> 总，也可以从 IndexedDB 中检索出来。



<span class="token comment">### Blob 的方法</span>
- slice<span class="token punctuation">(</span><span class="token punctuation">[</span>start<span class="token punctuation">[</span>, end<span class="token punctuation">[</span>, contentType<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>：返回一个新的 Blob 对象，包含了源 Blob 对象中指定范围内的数据。
- stream<span class="token punctuation">(</span><span class="token punctuation">)</span>：返回一个能读取 blob 内容的 ReadableStream。
- text<span class="token punctuation">(</span><span class="token punctuation">)</span>：返回一个 Promise 对象且包含 blob 所有内容的 UTF-8 格式的 USVString。
- arrayBuffer<span class="token punctuation">(</span><span class="token punctuation">)</span>：返回一个 Promise 对象且包含 blob 所有内容的二进制格式的 ArrayBuffer。



<span class="token comment">### 关联/参考地址</span>
- <span class="token punctuation">[</span>Channel Messaging API<span class="token punctuation">]</span><span class="token punctuation">(</span>https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API<span class="token punctuation">)</span> 
- <span class="token punctuation">[</span>ArrayBuffer<span class="token punctuation">]</span><span class="token punctuation">(</span>https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer<span class="token punctuation">)</span>
- <span class="token punctuation">[</span>ArrayBufferView<span class="token punctuation">]</span><span class="token punctuation">(</span>https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray<span class="token punctuation">)</span>

- <span class="token punctuation">[</span>Blob<span class="token punctuation">]</span><span class="token punctuation">(</span>https://zh.javascript.info/blob<span class="token punctuation">)</span>
- <span class="token punctuation">[</span>你不知道的 Blob<span class="token punctuation">]</span><span class="token punctuation">(</span>https://juejin.cn/post/6844904178725158926<span class="token punctuation">)</span>
- <span class="token punctuation">[</span>《你不知道的 Blob》番外篇<span class="token punctuation">]</span><span class="token punctuation">(</span>https://juejin.cn/post/6844904183661854727<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt="blob_composition"></p><h4 id="创建-blob" tabindex="-1"><a class="header-anchor" href="#创建-blob"><span>创建 Blob</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 创建 Blob</span>
<span class="token comment">#### 创建 Blob 的方式一：使用 Blob 构造函数</span>
- Blob 由一个可选的字符串 <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">type</span><span class="token variable">\`</span></span>（通常指 MIME 类型）和 <span class="token variable"><span class="token variable">\`</span>blobParts<span class="token variable">\`</span></span> 组成。
- 语法：<span class="token variable"><span class="token variable">\`</span>const Blob <span class="token operator">=</span> new Blob<span class="token punctuation">(</span>blobParts, options<span class="token punctuation">)</span><span class="token variable">\`</span></span>
		- blobParts：它是一个由 ArrayBuffer，ArrayBufferView，Blob，字符串（包括 DOMString） 等对象构成的值数组。
				- 即使只有一个字符串也必须将其包装在数组中。
				- DOMStrings 会被编码为 UTF-8。
		- options：一个可选的对象，包含以下两个属性：
				- type：默认值为 <span class="token string">&quot;&quot;</span>，它代表了将会被放入到 blob 中的数组内容的 MIME 类型。
				- endings：用于指定包含行结束符 <span class="token punctuation">\\</span>n 的字符串如何被写入。 它是以下两个值中的一个：（默认值为 <span class="token string">&quot;transparent&quot;</span>）
        	- <span class="token string">&quot;native&quot;</span>：代表行结束符会被更改为适合宿主操作系统文件系统的换行符。
        	- <span class="token string">&quot;transparent&quot;</span>：代表会保持 blob 中保存的结束符不变。


- 例子：
	- <span class="token variable"><span class="token variable">\`</span>const data <span class="token operator">=</span> new Blob<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;Test&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>
	- <span class="token variable"><span class="token variable">\`</span>const data <span class="token operator">=</span> new Blob<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;Test&#39;</span><span class="token punctuation">]</span>, <span class="token punctuation">{</span> type: <span class="token string">&#39;text/plain&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>


<span class="token comment">#### 创建 Blob 的方式二：从另一个 Blob，使用 \`Blob.slice()\` 实例方法</span>
	- 从 aBlob 字节 <span class="token number">10</span> 到 <span class="token number">20</span> 创建新 blob：<span class="token variable"><span class="token variable">\`</span>const partialBlob <span class="token operator">=</span> aBlob.slice<span class="token punctuation">(</span><span class="token number">10</span>, <span class="token number">20</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 从普通字符串创建（基础版）
 */</span>
<span class="token keyword">const</span> txt <span class="token operator">=</span> <span class="token string">&#39;willy&#39;</span>
<span class="token keyword">const</span> txtToBolb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>txt<span class="token punctuation">]</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;txtToBolb: &#39;</span><span class="token punctuation">,</span> txtToBolb<span class="token punctuation">.</span>size<span class="token punctuation">,</span> txtToBolb<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token comment">// txtToBolb:  5 &#39;&#39;</span>


<span class="token doc-comment comment">/**
 * 从 DOMString 创建 Blob
 */</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;&lt;html&gt;&lt;h2&gt;Hello willy&lt;/h2&gt;&lt;/html&gt;&#39;</span> <span class="token comment">// DOMString</span>
<span class="token keyword">const</span> strToBlob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>str<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">endings</span><span class="token operator">:</span> <span class="token string">&#39;transparent&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;strToBlob: &#39;</span><span class="token punctuation">,</span> strToBlob<span class="token punctuation">.</span>size<span class="token punctuation">,</span> strToBlob<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token comment">// strToBlob:  33 text/html</span>
<span class="token comment">// strToBlob.text().then((data) =&gt; console.log(data))</span>


<span class="token doc-comment comment">/**
 * 从类型化数组和字符串创建 Blob
 */</span>
<span class="token keyword">const</span> hello <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">72</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">108</span><span class="token punctuation">,</span> <span class="token number">108</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 二进制格式的 &quot;hello&quot;</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>hello<span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;willy&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> arrToBlob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text/plain&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;arrToBlob: &#39;</span><span class="token punctuation">,</span> arrToBlob<span class="token punctuation">.</span>size<span class="token punctuation">,</span> arrToBlob<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token comment">// arrToBlob:  11 text/plain</span>


<span class="token doc-comment comment">/**
 * 从另一个 Blob 中使用 slice() 实例方法创建
 */</span>
<span class="token keyword">const</span> blob1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;hello willy&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> blob2 <span class="token operator">=</span> blob1<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> blob2Text <span class="token operator">=</span> <span class="token keyword">await</span> blob2<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>blob2Text<span class="token punctuation">)</span> <span class="token comment">// &#39;willy&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="读取-blob-的数据" tabindex="-1"><a class="header-anchor" href="#读取-blob-的数据"><span>读取 Blob 的数据</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 读取 Blob 的数据</span>
- 无法直接访问 Blob 对象中包含的数据，必须使用 <span class="token variable"><span class="token variable">\`</span>FileReader<span class="token variable">\`</span></span> 对象或使用响应对象<span class="token variable"><span class="token variable">\`</span>Response<span class="token variable">\`</span></span>。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/* 使用 FileReader 对象访问 Blob 中的数据 */</span>
<span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
reader<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reader<span class="token punctuation">.</span>result<span class="token punctuation">)</span> <span class="token comment">// &#39;Test&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
reader<span class="token punctuation">.</span><span class="token function">readAsText</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>


<span class="token comment">/* 使用 Response 响应对象访问 Blob 中的数据 */</span>
<span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
text <span class="token comment">// &#39;Test&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="blob-用作-url" tabindex="-1"><a class="header-anchor" href="#blob-用作-url"><span>Blob 用作 URL</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### Blob 用作 URL 引用</span>
- Blob 可以作为 <span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>a<span class="token operator">&gt;</span><span class="token variable">\`</span></span>、<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>img<span class="token operator">&gt;</span><span class="token variable">\`</span></span> 或其他标签的 URL。而因为 Blob 的 <span class="token builtin class-name">type</span> 属性，还可以进行上传/下载 Blob 对象。

- Blob URL 以 <span class="token variable"><span class="token variable">\`</span>blob://<span class="token variable">\`</span></span> 开头，不同于 Data URL（以 <span class="token variable"><span class="token variable">\`</span>data:<span class="token variable">\`</span></span> 开头），因为它们不将数据存储在 URL 中。它也不同于 File URL（以 <span class="token variable"><span class="token variable">\`</span>file:<span class="token variable">\`</span></span> 开头），因为它们不会显示文件路径等敏感信息。




<span class="token comment">#### Blob URL / Object URL</span>
- Blob URL/Object URL 是一种伪协议，允许 Blob 和 File 对象用作图像，下载二进制数据链接等的 URL 源。

- 在浏览器中，使用 <span class="token variable"><span class="token variable">\`</span>URL.createObjectURL<span class="token variable">\`</span></span> 方法来创建 Blob URL，该方法可接收一个 Blob 对象，并为其创建一个唯一的 URL，其形式为 <span class="token variable"><span class="token variable">\`</span>blob:<span class="token operator">&lt;</span>origin<span class="token operator">&gt;</span>/<span class="token operator">&lt;</span>uuid<span class="token operator">&gt;</span><span class="token variable">\`</span></span>。
		- 例：<span class="token variable"><span class="token variable">\`</span>blob:http://localhost:4000/7966ae32-0105-498d-b37f-b6b6a245dcd5<span class="token variable">\`</span></span>。
		- 浏览器内部为每个通过 URL.createObjectURL 生成并存储了一个 URL → Blob 映射。因为 Blob URL 是通过内部引用的方式来使用，因此 Blob URL 较短。
		- 当浏览器看到 Blob URL，它将提供存储在内存或磁盘中的相应 Blob，以此访问 Blob。
		- 如果访问一个不再存在的 Blob URL，将收到来自浏览器的 <span class="token number">404</span> 错误。
		
- 注意：生成的 Blob URL 仅在当前文档打开的状态下才有效。
    - 虽然存储了 URL → Blob 的映射，但 Blob 本身仍驻留在内存中，浏览器无法释放它。
    - 映射在文档卸载时自动清除，因此 Blob 对象随后被释放。但是，如果应用程序寿命很长，那不会很快发生。因此，如果我们创建一个 Blob URL，即使不再需要该 Blob，它也会存在内存中。

- 生成 Blob URL 后，可以通过调用 <span class="token variable"><span class="token variable">\`</span>URL.revokeObjectURL<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 方法，从内部映射中删除引用，从而允许删除 Blob（如果没有其他引用），并释放内存。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="blob-转换为-base64" tabindex="-1"><a class="header-anchor" href="#blob-转换为-base64"><span>Blob 转换为 Base64</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### Blob 转换为 Base64</span>

<span class="token comment">#### Base64</span>
Base64 是一种基于 <span class="token number">64</span> 个可打印字符来表示二进制数据的表示方法，它常用于处理文本数据的场合，表示、传输、存储二进制数据<span class="token punctuation">(</span>如 MIME 的电子邮件及 XML 的一些复杂数据<span class="token punctuation">)</span>。

Base64 可以用来将二进制的字节序列数据编码成 ASCII 字符序列构成的文本。使用时需要在传输编码方式中指定 base64。Base64 使用的字符包括大小写阿拉丁字母各 <span class="token number">26</span> 个、数字 <span class="token number">10</span> 个、加号<span class="token variable"><span class="token variable">\`</span>+<span class="token variable">\`</span></span>和斜杠<span class="token variable"><span class="token variable">\`</span>/<span class="token variable">\`</span></span>，共 <span class="token number">64</span> 个字符，等号 <span class="token variable"><span class="token variable">\`</span><span class="token operator">=</span><span class="token variable">\`</span></span> 用来作为后缀用途。


<span class="token comment">#### Data URLs</span>
当图片数据为二进制数据时，使用 <span class="token variable"><span class="token variable">\`</span>Data URLs<span class="token variable">\`</span></span> 特性来支持进行嵌入。<span class="token variable"><span class="token variable">\`</span>Data URLs<span class="token variable">\`</span></span> 允许使用 base64 对图片或其他文件的二进制数据进行编码，将其作为文本字符串嵌入页面中。

Data URLs 由四部分组成：前缀<span class="token punctuation">(</span><span class="token variable"><span class="token variable">\`</span>data:<span class="token variable">\`</span></span><span class="token punctuation">)</span>、指定数据类型的 MIME 类型、如果非文本则为可选的 base64 标记、数据本身<span class="token punctuation">(</span>二进制字节<span class="token punctuation">)</span>。

<span class="token variable"><span class="token variable">\`</span>data:<span class="token punctuation">[</span><span class="token operator">&lt;</span>mediatype<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">;</span>base64<span class="token punctuation">]</span>,<span class="token operator">&lt;</span>data<span class="token operator">&gt;</span><span class="token variable">\`</span></span>：
mediatype 是一个 MIME 类型的字符串，如 <span class="token variable"><span class="token variable">\`</span>image/jpeg<span class="token variable">\`</span></span> 表示 JPEG 图像文件。如果被省略，则默认值为 <span class="token variable"><span class="token variable">\`</span>text/plain<span class="token punctuation">;</span><span class="token assign-left variable">charset</span><span class="token operator">=</span>US-ASCII<span class="token variable">\`</span></span>。如果数据是文本类型，可以直接将文本嵌入（根据文档类型，使用合适的实体字符或转义字符）。如果是二进制数据，可以将数据进行 base64 编码之后再进行嵌入。
如一张图片转化为 base64后：<span class="token variable"><span class="token variable">\`</span>data:image/png<span class="token punctuation">;</span>base64,iVBORw0KGgoAAAANSUhEUg<span class="token punctuation">..</span>.<span class="token variable">\`</span></span>。

注意：如果图片较大，图片的色彩层次比较丰富，则不适合使用这种方式，因为该图片经过 base64 编码后的字符串非常大，会明显增大 HTML 页面的大小，从而影响加载速度。

对于 FileReader 对象来说，除了支持把 Blob/File 对象转换为 Data URL 之外，还提供了 readAsArrayBuffer<span class="token punctuation">(</span><span class="token punctuation">)</span> 和 readAsText<span class="token punctuation">(</span><span class="token punctuation">)</span> 方法，用于把 Blob/File 对象转换为其它的数据格式。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="blob-转换为-base64-1" tabindex="-1"><a class="header-anchor" href="#blob-转换为-base64-1"><span>blob 转换为 base64</span></a></h5><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@function</span> blobToOther 将 Blob 转换其他类型
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Blob<span class="token punctuation">}</span></span> <span class="token parameter">blob</span> 要转换的 Blob 对象
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token string">&#39;base64&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;arrayBuffer&#39;</span><span class="token punctuation">}</span></span> <span class="token parameter">transfromType</span> 要转换的类型
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>string <span class="token operator">|</span> ArrayBuffer <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">}</span></span> 正常会返回 base64 编码的字符串
 *
 * <span class="token keyword">@example</span>
  <span class="token example"><span class="token code language-javascript"><span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text/plain&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
  <span class="token code language-javascript"><span class="token keyword">const</span> base64 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">blobToOther</span><span class="token punctuation">(</span>blob<span class="token punctuation">,</span> <span class="token string">&#39;base64&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
    <span class="token code language-javascript">console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Error converting blob to base64:&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span></span>
  <span class="token code language-javascript"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
  <span class="token code language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>base64<span class="token punctuation">)</span> <span class="token comment">// 输出将会是一个 base64 编码的字符串</span></span></span>
*/</span>
<span class="token keyword">function</span> <span class="token function">blobToOther</span><span class="token punctuation">(</span>
  <span class="token literal-property property">blob</span><span class="token operator">:</span> Blob<span class="token punctuation">,</span>
  <span class="token literal-property property">transfromType</span><span class="token operator">:</span> <span class="token string">&#39;base64&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;arrayBuffer&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;base64&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>string <span class="token operator">|</span> ArrayBuffer <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fileReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">switch</span> <span class="token punctuation">(</span>transfromType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&#39;arrayBuffer&#39;</span><span class="token operator">:</span>
        fileReader<span class="token punctuation">.</span><span class="token function">readAsArrayBuffer</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">&#39;base64&#39;</span><span class="token operator">:</span>
        fileReader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        fileReader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    fileReader<span class="token punctuation">.</span><span class="token function-variable function">onloadend</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span>fileReader<span class="token punctuation">.</span>result<span class="token punctuation">)</span>
    fileReader<span class="token punctuation">.</span>onerror <span class="token operator">=</span> reject
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="服务端存储-base64-数据" tabindex="-1"><a class="header-anchor" href="#服务端存储-base64-数据"><span>服务端存储 base64 数据</span></a></h5><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> express<span class="token punctuation">,</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;express&#39;</span>

<span class="token keyword">const</span> router<span class="token operator">:</span> Router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * post - 上传 base64 资源
 * 
 * <span class="token keyword">@example</span>
      const imgData = &#39;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjMxLjg4IiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDI1NyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJJY29uaWZ5SWQxODEzMDg4ZmUxZmJjMDFmYjQ2NiIgeDE9Ii0uODI4JSIgeDI9IjU3LjYzNiUiIHkxPSI3LjY1MiUiIHkyPSI3OC40MTElIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNDFEMUZGIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQkQzNEZFIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9Ikljb25pZnlJZDE4MTMwODhmZTFmYmMwMWZiNDY3IiB4MT0iNDMuMzc2JSIgeDI9IjUwLjMxNiUiIHkxPSIyLjI0MiUiIHkyPSI4OS4wMyUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkVBODMiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjguMzMzJSIgc3RvcC1jb2xvcj0iI0ZGREQzNSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0ZGQTgwMCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGZpbGw9InVybCgjSWNvbmlmeUlkMTgxMzA4OGZlMWZiYzAxZmI0NjYpIiBkPSJNMjU1LjE1MyAzNy45MzhMMTM0Ljg5NyAyNTIuOTc2Yy0yLjQ4MyA0LjQ0LTguODYyIDQuNDY2LTExLjM4Mi4wNDhMLjg3NSAzNy45NThjLTIuNzQ2LTQuODE0IDEuMzcxLTEwLjY0NiA2LjgyNy05LjY3bDEyMC4zODUgMjEuNTE3YTYuNTM3IDYuNTM3IDAgMCAwIDIuMzIyLS4wMDRsMTE3Ljg2Ny0yMS40ODNjNS40MzgtLjk5MSA5LjU3NCA0Ljc5NiA2Ljg3NyA5LjYyWiI+PC9wYXRoPjxwYXRoIGZpbGw9InVybCgjSWNvbmlmeUlkMTgxMzA4OGZlMWZiYzAxZmI0NjcpIiBkPSJNMTg1LjQzMi4wNjNMOTYuNDQgMTcuNTAxYTMuMjY4IDMuMjY4IDAgMCAwLTIuNjM0IDMuMDE0bC01LjQ3NCA5Mi40NTZhMy4yNjggMy4yNjggMCAwIDAgMy45OTcgMy4zNzhsMjQuNzc3LTUuNzE4YzIuMzE4LS41MzUgNC40MTMgMS41MDcgMy45MzYgMy44MzhsLTcuMzYxIDM2LjA0N2MtLjQ5NSAyLjQyNiAxLjc4MiA0LjUgNC4xNTEgMy43OGwxNS4zMDQtNC42NDljMi4zNzItLjcyIDQuNjUyIDEuMzYgNC4xNSAzLjc4OGwtMTEuNjk4IDU2LjYyMWMtLjczMiAzLjU0MiAzLjk3OSA1LjQ3MyA1Ljk0MyAyLjQzN2wxLjMxMy0yLjAyOGw3Mi41MTYtMTQ0LjcyYzEuMjE1LTIuNDIzLS44OC01LjE4Ni0zLjU0LTQuNjcybC0yNS41MDUgNC45MjJjLTIuMzk2LjQ2Mi00LjQzNS0xLjc3LTMuNzU5LTQuMTE0bDE2LjY0Ni01Ny43MDVjLjY3Ny0yLjM1LTEuMzctNC41ODMtMy43NjktNC4xMTNaIj48L3BhdGg+PC9zdmc+&#39;
      fetch(\`$<span class="token punctuation">{</span>SERVER_BASE_URL<span class="token punctuation">}</span>/file/upload_base64\`, <span class="token punctuation">{</span>
        method: &#39;POST&#39;,
        headers: <span class="token punctuation">{</span> &#39;Content-Type&#39;: &#39;application/json&#39; <span class="token punctuation">}</span>,
        body: JSON.stringify(<span class="token punctuation">{</span> imgData <span class="token punctuation">}</span>),
      <span class="token punctuation">}</span>)
      .then((response) =&gt; response.json())
      .then((result) =&gt; <span class="token punctuation">{</span>
        console.log(&#39;fetch&#39;, result)
      <span class="token punctuation">}</span>)
      .catch((error) =&gt; <span class="token punctuation">{</span>
        console.error(error)
      <span class="token punctuation">}</span>)
  */</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">uploadBase64FilePostHandler</span><span class="token punctuation">(</span>req<span class="token operator">:</span> Request<span class="token punctuation">,</span> res<span class="token operator">:</span> Response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取POST请求中的base64图片数据</span>
  <span class="token keyword">const</span> imgData <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>imgData

  <span class="token comment">// 从 imgData 中提取文件格式</span>
  <span class="token keyword">let</span> fileExtension <span class="token operator">=</span> imgData<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^data:image\\/(.*?);base64,</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fileExtension<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> errorData <span class="token operator">=</span> <span class="token punctuation">{</span>
      code<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
      msg<span class="token operator">:</span> <span class="token string">&#39;base64 image 文件格式错误&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>errorData<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 提取正确的文件格式（因为要对 svg+xml 这种格式进行处理）</span>
  fileExtension <span class="token operator">=</span> fileExtension<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\w+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

  <span class="token comment">// 匹配所有 Image 类型的 Base64 数据</span>
  <span class="token keyword">const</span> base64Data <span class="token operator">=</span> imgData<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^data:image\\/.+;base64,</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> dataBuffer <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>base64Data<span class="token punctuation">,</span> <span class="token string">&#39;base64&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// 根据文件格式来设定文件名称</span>
  <span class="token keyword">const</span> filePath <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./data/file/test.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fileExtension<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token keyword">const</span> dirPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span>

  fs<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span>dirPath<span class="token punctuation">,</span> <span class="token punctuation">{</span> recursive<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> errorData <span class="token operator">=</span> <span class="token punctuation">{</span>
        code<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
        msg<span class="token operator">:</span> <span class="token string">&#39;创建文件目录错误&#39;</span><span class="token punctuation">,</span>
        error<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>errorData<span class="token punctuation">)</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> dataBuffer<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> errorData <span class="token operator">=</span> <span class="token punctuation">{</span>
          code<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
          msg<span class="token operator">:</span> <span class="token string">&#39;upload base64 image error&#39;</span><span class="token punctuation">,</span>
          error<span class="token operator">:</span> err<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>errorData<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        code<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        msg<span class="token operator">:</span> <span class="token string">&#39;upload base64 image success&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

router<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">&#39;/upload_base64&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>uploadBase64FilePostHandler<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="从本地磁盘加载文件并获取" tabindex="-1"><a class="header-anchor" href="#从本地磁盘加载文件并获取"><span>从本地磁盘加载文件并获取</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 从页面上的本地磁盘加载文件并获取</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 用 input 标签选择图像，一旦选择图像，则删除输入元素并显示图像，然后在完成图像显示后清除 Blob  --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">allow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image/*<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>input <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  input<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> imageBlob <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>input<span class="token operator">?.</span>files<span class="token operator">?.</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    img<span class="token punctuation">.</span>src <span class="token operator">=</span> imageBlob

    img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>imageBlob<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    input <span class="token operator">&amp;&amp;</span> input<span class="token punctuation">.</span>parentNode <span class="token operator">&amp;&amp;</span> input<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">replaceChild</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> input<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="图片压缩" tabindex="-1"><a class="header-anchor" href="#图片压缩"><span>图片压缩</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 图片压缩</span>
一般在上传本地图片时，先对图片进行一定压缩，然后再提交到服务器，从而减少传输的数据量。
一般前端实现图片压缩，可以利用 Canvas 对象提供的 toDataURL<span class="token punctuation">(</span><span class="token punctuation">)</span> 方法，该方法接收 type（图片格式）和 encoderOptions（图片质量）两个可选参数。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@function</span> compressImage 将 base64 图片进行压缩
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> base64 图片转换为 base64 的字符串
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> quality 图片质量的比例（要压缩的比例），取值范围（0 ~ 1），默认1为不压缩，值越小，压缩率越高，图片质量越低
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> mimeType 表示图像格式的 DOMString。
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span> needOptimizeDataSize 是否需要优化数据量的大小
 * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>Promise&lt;Blob | string&gt;<span class="token punctuation">}</span> 返回压缩后的 base64 字符串或 Blob 对象
 */</span>
<span class="token function">compressImage</span><span class="token punctuation">(</span>
  base64<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  quality<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0.92</span><span class="token punctuation">,</span>
  mimeType<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;image/png&#39;</span><span class="token punctuation">,</span>
  needOptimizeDataSize<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Blob <span class="token operator">|</span> <span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> imgDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span>
  imgDom<span class="token punctuation">.</span>crossOrigin <span class="token operator">=</span> <span class="token string">&#39;anonymous&#39;</span>

  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    imgDom<span class="token punctuation">.</span>src <span class="token operator">=</span> base64

    <span class="token keyword">const</span> <span class="token function-variable function">imgOnload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token doc-comment comment">/** 图片最大宽度 */</span>
      <span class="token keyword">const</span> <span class="token constant">IMG_MAX_WIDTH</span> <span class="token operator">=</span> <span class="token number">800</span>

      <span class="token doc-comment comment">/** 没有超出图片最大宽度 */</span>
      <span class="token keyword">const</span> unExceedMaximum<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> imgDom<span class="token punctuation">.</span>width <span class="token operator">&lt;=</span> <span class="token constant">IMG_MAX_WIDTH</span>
      <span class="token keyword">const</span> targetWidth <span class="token operator">=</span> unExceedMaximum <span class="token operator">?</span> imgDom<span class="token punctuation">.</span>width <span class="token operator">:</span> <span class="token constant">IMG_MAX_WIDTH</span>
      <span class="token keyword">const</span> targetHeight <span class="token operator">=</span> unExceedMaximum
        <span class="token operator">?</span> imgDom<span class="token punctuation">.</span>height
        <span class="token operator">:</span> <span class="token punctuation">(</span>imgDom<span class="token punctuation">.</span>height <span class="token operator">*</span> <span class="token constant">IMG_MAX_WIDTH</span><span class="token punctuation">)</span> <span class="token operator">/</span> imgDom<span class="token punctuation">.</span>width

      canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> targetWidth
      canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> targetHeight

      <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span>
      ctx<span class="token operator">?.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> targetWidth<span class="token punctuation">,</span> targetHeight<span class="token punctuation">)</span> <span class="token comment">// 清除画布</span>
      ctx<span class="token operator">?.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>imgDom<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span>

      <span class="token keyword">const</span> imageData <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span>mimeType<span class="token punctuation">,</span> quality<span class="token punctuation">)</span>

      <span class="token comment">// 对于 Data URL 格式的图片数据，如果需要优化数据量的大小，则把它转换为 Blob 对象减少，否则返回压缩后的 base64 字符串</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>needOptimizeDataSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> compressedImageBlob <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">dataUrlToBlob</span><span class="token punctuation">(</span>imageData<span class="token punctuation">)</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>compressedImageBlob<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>imageData<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    imgDom<span class="token punctuation">.</span>onload <span class="token operator">=</span> imgOnload
    imgDom<span class="token punctuation">.</span>onerror <span class="token operator">=</span> reject
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="上传-blob-数据" tabindex="-1"><a class="header-anchor" href="#上传-blob-数据"><span>上传 Blob 数据</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 上传 Blob 数据</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@function</span> uploadBlob 上传Blob 数据
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">url</span> 上传的接口地址
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Blob<span class="token punctuation">}</span></span> <span class="token parameter">blob</span> 所上传的 Blob
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">trackProgress</span> 跟踪上传的进度
 * <span class="token keyword">@desc</span> 用作对输入类型或拖放的回调
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">uploadBlob</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> blob<span class="token punctuation">,</span> trackProgress</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 使用 XHR 将 Blob 加载到 URL</span>
  <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>
  xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span>
  xhr<span class="token punctuation">.</span>upload<span class="token punctuation">.</span>onprogress <span class="token operator">=</span> trackProgress
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="文件分片上传" tabindex="-1"><a class="header-anchor" href="#文件分片上传"><span>文件分片上传</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 文件分片上传</span>
File 对象是特殊类型的 Blob，且可以用在任意的 Blob 类型的上下文中。
所以针对大文件传输的场景，可以使用 Blob 的 slice<span class="token punctuation">(</span><span class="token punctuation">)</span> 实例方法对大文件进行切割，然后分片进行上传。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> chunkedUpload <span class="token operator">=</span> <span class="token punctuation">(</span>file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> uploadUrl <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> chunkSize <span class="token operator">=</span> <span class="token number">4000</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> start <span class="token operator">&lt;</span> file<span class="token punctuation">.</span>size<span class="token punctuation">;</span> start <span class="token operator">+=</span> chunkSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> chunk <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> start <span class="token operator">+</span> chunkSize<span class="token punctuation">)</span>
    <span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> chunk<span class="token punctuation">)</span>

    <span class="token function">fetch</span><span class="token punctuation">(</span>uploadUrl<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">body</span><span class="token operator">:</span> formData <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;test.txt&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> chunkSize <span class="token operator">=</span> <span class="token number">4000</span>
<span class="token keyword">const</span> uploadUrl <span class="token operator">=</span> <span class="token string">&#39;http://willy.com/api/upload_file/post&#39;</span>

<span class="token function">chunkedUpload</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> uploadUrl<span class="token punctuation">,</span> chunkSize<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="以-blob-形式从互联网下载数据" tabindex="-1"><a class="header-anchor" href="#以-blob-形式从互联网下载数据"><span>以 Blob 形式从互联网下载数据</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 以 Blob 形式从互联网下载数据</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@function</span> downloadBlob 以 Blob 形式从互联网下载数据
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">url</span> 所需要下载的数据接口地址
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">callback</span> 回调函数，获取 Blob 对象
 * <span class="token keyword">@desc</span> 从互联网下载数据，并将其存储到 Blob 对象中
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">downloadBlob</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>
  xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">&#39;blob&#39;</span>

  xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">callback</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>下载线上图片到本地显示</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> myImage <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLImageElement <span class="token operator">|</span> <span class="token keyword">null</span>

<span class="token keyword">const</span> requestImg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span>
  <span class="token string">&#39;https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/2/172734410c51dbed~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.png&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token function">fetch</span><span class="token punctuation">(</span>requestImg<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">blob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>myBlob<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建一个 blob 的资源 url 地址</span>
    <span class="token keyword">const</span> objectURL <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>myBlob<span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>objectURL<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>myImage <span class="token operator">&amp;&amp;</span> <span class="token string">&#39;src&#39;</span> <span class="token keyword">in</span> myImage<span class="token punctuation">)</span> myImage<span class="token punctuation">.</span>src <span class="token operator">=</span> objectURL
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="blob-文件下载" tabindex="-1"><a class="header-anchor" href="#blob-文件下载"><span>Blob 文件下载</span></a></h4><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@function</span> downloadBlob 下载 Blob 对象中的内容
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>Blob<span class="token punctuation">}</span> blob Blob 对象
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> fileName 文件名字
 * <span class="token keyword">@example</span>
  const blob = new Blob([&#39;一文彻底掌握 Blob Web API&#39;], <span class="token punctuation">{</span> type: &#39;text/plain&#39; <span class="token punctuation">}</span>)
  downloadBlob(blob, &#39;test&#39;)
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">downloadBlob</span> <span class="token operator">=</span> <span class="token punctuation">(</span>blob<span class="token operator">:</span> Blob<span class="token punctuation">,</span> fileName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建 a 标签下载 Blob 对象中的内容</span>
  <span class="token keyword">const</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
  link<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span>
  link<span class="token punctuation">.</span>download <span class="token operator">=</span> fileName
  link<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  link<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 及时清除 Blob 对象</span>
  <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>link<span class="token punctuation">.</span>href<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="生成pdf" tabindex="-1"><a class="header-anchor" href="#生成pdf"><span>生成pdf</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/jspdf@latest/dist/jspdf.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">generatePdf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> doc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">jsPDF</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    doc<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">&quot;Hello semlinker!&quot;</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>doc<span class="token punctuation">.</span><span class="token function">output</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;application/pdf&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    blob<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">blobAsText</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>blobAsText<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="blob-与-arraybuffer-的区别" tabindex="-1"><a class="header-anchor" href="#blob-与-arraybuffer-的区别"><span>Blob 与 ArrayBuffer 的区别</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### Blob 与 ArrayBuffer 的区别</span>
- 除非需要使用 ArrayBuffer 提供的写入/编辑能力，否则 Blob 格式是最好的。
- Blob 对象是不可变的，而 ArrayBuffer 是可以通过 TypedArrays 或 DataView 来操作。
- ArrayBuffer 是存在内存中的，可以直接操作。而 Blob 可以位于磁盘、高速缓存内存和其他不可用的位置。
虽然 Blob 可以直接作为参数传递给其他函数（如 <span class="token variable"><span class="token variable">\`</span>window.URL.createObjectURL<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>），但你可能仍需要 FileReader 之类的 File API 才能与 Blob 一起使用。
Blob 与 ArrayBuffer 对象之间是可以相互转化的：
	- 使用 FileReader 的 readAsArrayBuffer<span class="token punctuation">(</span><span class="token punctuation">)</span> 方法，可以把 Blob 对象转换为 ArrayBuffer 对象；
	- 使用 Blob 构造函数，如 new Blob<span class="token punctuation">(</span><span class="token punctuation">[</span>new Uint8Array<span class="token punctuation">(</span>data<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>，可以把 ArrayBuffer 对象转换为 Blob 对象。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="http-中-blob-和-arraybuffer-的使用方式" tabindex="-1"><a class="header-anchor" href="#http-中-blob-和-arraybuffer-的使用方式"><span>http 中 Blob 和 ArrayBuffer 的使用方式</span></a></h5><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">&#39;arraybuffer&#39;</span><span class="token punctuation">;</span> <span class="token comment">// or xhr.responseType = &quot;blob&quot;;</span>
  xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">!=</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Unexpected status code &quot;</span> <span class="token operator">+</span> xhr<span class="token punctuation">.</span>status <span class="token operator">+</span> <span class="token string">&quot; for &quot;</span> <span class="token operator">+</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// or new Blob([xhr.response]);</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="service-worker" tabindex="-1"><a class="header-anchor" href="#service-worker"><span>Service Worker</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Service Worker</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="push-api" tabindex="-1"><a class="header-anchor" href="#push-api"><span>Push API</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Push API</span>
<span class="token punctuation">[</span>Push API<span class="token punctuation">]</span><span class="token punctuation">(</span>https://developer.mozilla.org/zh-CN/docs/Web/API/Push_API<span class="token punctuation">)</span>

Push API 允许服务器向用户的设备发送通知，即使用户当前没有打开网站。这意味着即使用户的浏览器是关闭的，只要设备能连接到互联网，服务器也可以推送通知。

Service Workers 是在 Web 浏览器中运行的一种脚本，可以在没有页面或用户界面的情况下运行。因此即使应用程序没有打开，Service Workers 也可以接收来自服务器的推送消息，并相应地对用户显示通知。

Web 应用想要使用推送，需要 Push API 与 Service Workers API 结合使用才能实现。必须在 Web 应用下的 ServiceWorker 处于激活状态，在 ServiceWorkerRegistration scope 下的 PushManager 来做推送订阅相关工作。
在 ServiceWorkerGlobalScope scope 下通过 onpush 来监听推送事件。

激活一个 <span class="token function">service</span> worker 来提供推送消息会导致资源消耗的增加，尤其是电池。不同的浏览器对此有不同的方案——目前为止还没有标准的机制。Firefox 允许对发送给应用的推送消息做数量限制（配额）。该限制会在站点每一次被访问之后刷新。相比之下，Chrome 选择不做限制，但要求站点在每一次消息到达后都显示通知，这样可以让用户确认他们仍希望接收消息并确保用户可见性。



<span class="token comment">### Push API 的使用流程大致如下：</span>
<span class="token number">1</span>. 注册 Service Worker：首先，需要在客户端（用户的浏览器）注册一个 Service Worker。这个 Service Worker 负责监听推送事件并响应这些事件。
<span class="token number">2</span>. 订阅推送服务：通过 Service Worker，客户端向推送服务订阅，以接收来自服务器的推送消息。在订阅过程中，客户端会生成一对密钥（公钥和私钥），私钥保留在客户端，而公钥发送给服务器。
<span class="token number">3</span>. 将订阅信息发送给服务器：客户端将包含公钥和推送服务订阅信息的对象发送给服务器。服务器保留这些信息，用于之后的推送消息。
<span class="token number">4</span>. 服务器发送推送消息：当服务器想要发送消息时，它会使用保存的订阅信息和公钥向推送服务发送一个请求。推送服务负责将消息传递给正确的客户端。
<span class="token number">5</span>. 客户端接收消息：客户端的 Service Worker 会收到推送消息，并可以根据消息内容显示通知或执行其他相关操作。



<span class="token comment">### 最佳实践及安全措施</span>
<span class="token number">1</span>. 生成 VAPID 密钥：使用 Web Push 协议时，需要生成一对 VAPID（Voluntary Application Server Identification）密钥。这些密钥用于鉴别服务器身份，确保推送服务能够验证请求的来源。您应该只在服务端生成和保存私钥。
<span class="token number">2</span>. 保存订阅信息：当用户订阅推送通知时，前端会生成一个包含端点和密钥的订阅对象。您需要将这个订阅对象安全地发送到后端并存储起来，因为每次发送消息时都需要使用这些信息。
<span class="token number">3</span>. 服务端保密：所有的服务端通信和操作，比如存储订阅信息、发送推送消息、管理 VAPID 密钥等，都应该是安全的。确保您的服务器使用 HTTPS 并且所有敏感操作都经过适当的鉴权和验证。
<span class="token number">4</span>. 用户体验：确保用户能够轻松管理他们的订阅偏好，包括取消订阅。发送给用户的每个推送通知都应该是有价值的，避免发送垃圾消息，因为这可能导致用户取消订阅。
<span class="token number">5</span>. 遵守限制和政策：不同的浏览器和推送服务可能有自己的使用限制和隐私政策。确保您的实现遵从这些政策，并且能够适应不同环境下的变化。
<span class="token number">6</span>. 消息有效载荷加密：推送消息通常需要加密以确保用户的隐私。web-push 库可以帮助您处理加密的细节。
<span class="token number">7</span>. 错误处理：在发送推送消息时，您可能会遇到各种错误，比如网络问题、推送服务的限制等。在服务端代码中实现适当的错误处理逻辑是很重要的。
<span class="token number">8</span>. 监控和调试：监控推送消息的发送状态和用户的订阅情况可以帮助您调试问题，并优化推送策略。
<span class="token number">9</span>. 正式环境：在生产环境中，您还需要考虑其他因素，比如缩放到成千上万的用户，以及服务端和客户端之间的安全通信。



<span class="token comment">### 浏览器关闭是否会收到推送</span>
<span class="token number">1</span>. Android 系统
Android 系统的消息机制是系统级的，系统有单独的进程去监听推送消息，收到消息就会唤醒对应的应用程序来处理这个推送消息，无论应用是否关闭。所有应用都采用这种处理方式。所以当收到浏览器的推送消息时，会唤醒浏览器，然后浏览器再去激活相应 的 ServiceWorker 线程，然后触发推送事件。

<span class="token number">2</span>. MAC 系统：
MAC 系统下当打开应用后，默认关闭应用实际上还在后台运行，可以通过 dock 来查看。
可以看到未完全关闭的应用下面会有一个黑点来标志，在这种情况下，浏览器是可以收到推送消息的。
如果浏览器完全关闭，则当在浏览器打开后，浏览器同样会收到通知消息（TTL 有效时间内）。

<span class="token number">3</span>. Windows 系统
Windows 系统和 MAC 相似，但判断浏览器是否在后台运行比较复杂。



<span class="token comment">### 对于消息推送如何在浏览器上调试查看</span>
Chrome 环境下，地址栏输入chrome://gcm-internals/，并点击Start Recording按钮进行录制。
通常来说，主要有两方面的问题：
  - 发送消息时的问题：
    - 授权问题
    - HTTP 状态码错误问题
  - 接收消息时的问题：
    - payload 加密问题
    - 连接问题


<span class="token comment">### 为什么 Push 比 Web Sockets 好</span>
Push 是工作在 serviceWorker 线程下的，所以不关系浏览器窗口是否打开。而 Web Sockets 必须保证浏览器和网页处于打开状态才能正常工作。



<span class="token comment">### 国内服务器无法与 FCM/GCM 推送服务器通讯</span>
在国内服务器对消息通讯的请求上部署代理服务器，如在 <span class="token function">node</span> 环境下用 web-push 库：
  webpush.sendNotification<span class="token punctuation">(</span>
    subscription，
    data,
    <span class="token punctuation">{</span>
      <span class="token punctuation">..</span>. options,
      proxy: <span class="token string">&#39;代理地址&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="push-api-接口" tabindex="-1"><a class="header-anchor" href="#push-api-接口"><span>Push API 接口</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### Push API 接口</span>
- PushManager
- PushEvent
- PushMessageData
- PushSubscription
- PushSubscriptionOptions

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="pushmanager" tabindex="-1"><a class="header-anchor" href="#pushmanager"><span>PushManager</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### PushManager</span>
通过 ServiceWorkerRegistration.PushManager 获取。
PushManager 接口用于操作推送订阅。


<span class="token comment">#### \`PushManager.subscribe()\`：用于订阅推送服务。</span>
返回一个 Promise 形式的  PushSubscription 对象，该对象包含推送订阅的详情。如果当前 <span class="token function">service</span> worker 没有已存在的订阅，则会创建一个新的推送订阅。
语法： <span class="token variable"><span class="token variable">\`</span>PushManager.subscribe<span class="token punctuation">(</span>options<span class="token punctuation">)</span>.then<span class="token punctuation">(</span>function<span class="token punctuation">(</span>pushSubscription<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">..</span>. <span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token variable">\`</span></span>
options 参数：
	- userVisibleOnly：布尔值，表示返回的推送订阅将只能被用于对用户可见的消息。在订阅时必须把此项设置为 true，这样当有消息推送给用户时，浏览器会展示一个消息通知，也就是说不存在静默推送。为了让用户可知。
	- applicationServerKey：推送服务器用来向客户端应用发送消息的公钥。该值是应用程序服务器生成的签名密钥对的一部分，可使用在 P-256 曲线上实现的椭圆曲线数字签名（ECDSA）。若是使用 VAPID 协议（Voluntary Application Server Identification：自主应用服务器标识），则需要将 Base64 的公钥转为 Uint8 的数组。


<span class="token comment">#### \`PushSubscription.getSubscription()\`：用于获取订阅对象 PushSubscription</span>
返回一个 Promise 用来处理一个包含已经发布的分支的细节的PushSubscription 对象。如果没有已经发布的分支存在，返回null。
语法：<span class="token variable"><span class="token variable">\`</span>PushManager.getSubscription<span class="token punctuation">(</span><span class="token punctuation">)</span>.then<span class="token punctuation">(</span>function<span class="token punctuation">(</span>pushSubscription<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">..</span>. <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>


<span class="token comment">#### \`PushSubscription.permissionState()\`： 用于获取 PushManager 的权限状态</span>
语法：<span class="token variable"><span class="token variable">\`</span>PushManager.permissionState<span class="token punctuation">(</span>options<span class="token punctuation">)</span>.then<span class="token punctuation">(</span>function<span class="token punctuation">(</span>PushMessagingState<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">..</span>. <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>
options 参数:
	- userVisibleOnly
	- applicationServerKey
返回 Promise，如下值：
  - granted：WEB 应用已授权 Push 权限。
  - denied：WEB 应用已拒绝 Push 权限。
  - prompt：WEB 应用未授权 Push 权限。
如下使用：<span class="token variable"><span class="token variable">\`</span>ServiceWorkerRegistration.pushManager.permissionState<span class="token punctuation">(</span><span class="token punctuation">{</span>userVisibleOnly: true<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="pushevent" tabindex="-1"><a class="header-anchor" href="#pushevent"><span>PushEvent</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### PushEvent</span>
Push API 接收消息时的事件。此事件在 ServiceWorkerGlobalScope 下响应。

属性
	- data：返回对 PushMessageData 类型，包含发送到的数据的对象。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="pushmessagedata" tabindex="-1"><a class="header-anchor" href="#pushmessagedata"><span>PushMessageData</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### PushMessageData</span>
此接口为 PushEvent.data 中的类型。
与 Fetch 中 Body 的方法相似，不同处再于可以重复调用。

方法
	- arrayBuffer<span class="token punctuation">(</span><span class="token punctuation">)</span>
	- blob<span class="token punctuation">(</span><span class="token punctuation">)</span>
	- json<span class="token punctuation">(</span><span class="token punctuation">)</span>
	- text<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="pushsubscription" tabindex="-1"><a class="header-anchor" href="#pushsubscription"><span>PushSubscription</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### PushSubscription</span>
PushSubscription 为 PushManager.subscribe<span class="token punctuation">(</span><span class="token punctuation">)</span> 的订阅信息类型。

<span class="token comment">#### 属性</span>
	- endpoint：包含订阅相关的推送服务器的信息。以 URL 形式展示。最好对于这个 URL 安全，防止被其他人劫持它并滥用推送功能。
	- expirationTime：返回与推送订阅关联的订阅到期时间（如果有），否则返回null。
	- options：PushSubscriptionOptions 类型，订阅时的 options 信息，包含：
		- applicationServerKey
		- userVisibleOnly


<span class="token comment">#### 方法</span>
<span class="token number">1</span>. getKey<span class="token punctuation">(</span><span class="token punctuation">)</span>
用于获取 PushSubscription 中订阅的公钥信息，返回 ArrayBuffer。
语法：<span class="token variable"><span class="token variable">\`</span>const key <span class="token operator">=</span> subscription.getKey<span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token variable">\`</span></span>
name 参数：
	- p256dh：P-256曲线上的椭圆曲线Diffie-Hellman公钥（即NIST secp256r1椭圆曲线）。 生成的密钥是ANSI X9.62格式的未压缩点。
	- auth：身份验证密钥，Web推送的加密描述。


<span class="token number">2</span>. toJSON<span class="token punctuation">(</span><span class="token punctuation">)</span>
序列化 PushSubscription 对象，用于存储和发送给应用服务器。
<span class="token variable"><span class="token variable">\`</span>subscription.toJSON<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 返回如下结构：
    <span class="token punctuation">{</span>
      endpoint: <span class="token string">&quot;https://fcm.googleapis.com/fcm/send/xxx:zzzzzzzzz&quot;</span>
      expirationTime: null
      keys: <span class="token punctuation">{</span>
        auth: <span class="token string">&quot;xxxx-zzzz&quot;</span>
        p256dh: <span class="token string">&quot;BasdfasdfasdfasdffsdafasdfFMRs&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


<span class="token number">3</span>. unsubscribe<span class="token punctuation">(</span><span class="token punctuation">)</span>
用于取消订阅推送服务。
返回 Promise 的 Boolean。如果 true，则退订成功。
语法：<span class="token variable"><span class="token variable">\`</span>PushSubscription.unsubscribe<span class="token punctuation">(</span><span class="token punctuation">)</span>.then<span class="token punctuation">(</span>function<span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">..</span>. <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="接口间的关系图" tabindex="-1"><a class="header-anchor" href="#接口间的关系图"><span>接口间的关系图</span></a></h4><blockquote><h4 id="接口间的关系" tabindex="-1"><a class="header-anchor" href="#接口间的关系"><span>接口间的关系</span></a></h4><p><img src="`+o+'" alt="image-20240228203329693"></p><h4 id="相关属性、方法" tabindex="-1"><a class="header-anchor" href="#相关属性、方法"><span>相关属性、方法</span></a></h4><p><img src="'+c+`" alt="202402282040"></p></blockquote><h4 id="push-相关事件" tabindex="-1"><a class="header-anchor" href="#push-相关事件"><span>Push 相关事件</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### Push 相关事件</span>
Push API 通过下面的 serviceWorker 事件来监控并响应推送和订阅更改事件。


<span class="token comment">#### onpush</span>
当 ServiceWorker 收到 Push-Server 推送的消息时，就会触发 ServiceWorkerGlobalScope 接口的 onpush 事件。
语法：
	- <span class="token variable"><span class="token variable">\`</span>ServiceWorkerGlobalScope.onpush <span class="token operator">=</span> function<span class="token punctuation">(</span>PushEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">..</span>. <span class="token punctuation">}</span><span class="token variable">\`</span></span>
	- <span class="token variable"><span class="token variable">\`</span>self.addEventListener<span class="token punctuation">(</span><span class="token string">&#39;push&#39;</span>, function<span class="token punctuation">(</span>PushEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">..</span>. <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>
通过 PushEvent.data 来获取 PushMessageData 类型的推送消息中的数据。


<span class="token comment">#### onpushsubscriptionchange</span>
当订阅信息发生改变时，会触发 ServiceWorkerGlobalScope 接口的 onpushsubscriptionchange 事件，
例如：如果推送服务器设置了订阅到期时间，则可能会触发此事件。（正常订阅/退订时不会触发此事件）
发生此事件时，通常需要重新订阅推送服务器，并把新的订阅体发送给应用服务器。
语法：
	- <span class="token variable"><span class="token variable">\`</span>ServiceWorkerGlobalScope.onpushsubscriptionchange <span class="token operator">=</span> <span class="token function-name function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">..</span>. <span class="token punctuation">}</span><span class="token variable">\`</span></span>
	- <span class="token variable"><span class="token variable">\`</span>self.addEventListener<span class="token punctuation">(</span><span class="token string">&#39;pushsubscriptionchange&#39;</span>, <span class="token function-name function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">..</span>. <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="订阅原理" tabindex="-1"><a class="header-anchor" href="#订阅原理"><span>订阅原理</span></a></h4><h5 id="详细执行过程" tabindex="-1"><a class="header-anchor" href="#详细执行过程"><span>详细执行过程</span></a></h5><p><img src="`+i+`" alt="202402282058"></p><h5 id="浏览器端订阅" tabindex="-1"><a class="header-anchor" href="#浏览器端订阅"><span>浏览器端订阅</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 浏览器端订阅</span>
浏览器端在订阅 Push Server 时，必须 Notification 是授权的，否则会出现授权窗口，这里的授权交互和 Notification 的授权是一样的。

注意：Notificatino 的授权状态手动调整改变后，订阅体将失效，需要重新订阅。

注意：目前大部分国内网络环境无法访问 Chrome 的 FCM 推送服务器，所以在不出海的网络环境下浏览器无法完成订阅。FireFox 的推送服务器不存在此问题，所以可以在 FireFox 下测试此功能。

关于推送请求问题，需要使用 VAPID 协议。

订阅时applicationServerKey 使用 VAPID 公钥作为识别标示，规范中要求公钥需要 UInt8 类型，所以订阅前要进行类型转换。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt="image-20240228204948313"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 浏览器订阅</span>
navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span>ready<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">swReg</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  swReg<span class="token punctuation">.</span>pushManager<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">userVisibleOnly</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">applicationServerKey</span><span class="token operator">:</span> <span class="token function">urlB64ToUint8Array</span><span class="token punctuation">(</span>
        <span class="token string">&quot;xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&quot;</span>
      <span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">pushSubscription</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将订阅信息发送到你的应用服务器</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;https://你的应用服务器&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>pushSubscription<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;订阅失败&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;授权状态：&#39;</span> <span class="token operator">+</span> <span class="token keyword">await</span> self<span class="token punctuation">.</span>registration<span class="token punctuation">.</span>pushManager<span class="token punctuation">.</span><span class="token function">permissionState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">userVisibleOnly</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="应用服务器端发送" tabindex="-1"><a class="header-anchor" href="#应用服务器端发送"><span>应用服务器端发送</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 应用服务器端发送</span>
应用服务器从数据库里取出你的订阅信息，然后根据 Web Push 协议要求，对要发送的消息进行拼装和加密，然后发送给相应的 Push 服务器，然后 Push 服务器再根据订阅信息中的标志发送给相应的终端。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt="image-20240228205239484"></p><h5 id="设备端接收" tabindex="-1"><a class="header-anchor" href="#设备端接收"><span>设备端接收</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 设备端接收</span>
浏览器端收到推送消息后，会激活相应的 ServiceWorker 线程，并触发 Push 事件。
例如收到消息后，展示一个 Notification，或者做任何其他的事。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="image-20240228205720647"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// serviceWorker 环境下</span>
self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;push&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 此处可以做任何事</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;push&quot;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">var</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  	
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>Notification <span class="token operator">&amp;&amp;</span> self<span class="token punctuation">.</span>Notification<span class="token punctuation">.</span>permission <span class="token operator">===</span> <span class="token string">&quot;granted&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  self<span class="token punctuation">.</span>registration<span class="token punctuation">.</span><span class="token function">showNotification</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>title<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> data<span class="token punctuation">.</span>body
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="加密认证" tabindex="-1"><a class="header-anchor" href="#加密认证"><span>加密认证</span></a></h4><h5 id="浏览器订阅" tabindex="-1"><a class="header-anchor" href="#浏览器订阅"><span>浏览器订阅</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 浏览器订阅</span>
在 <span class="token variable"><span class="token variable">\`</span>subscribe<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 方法中的 <span class="token variable"><span class="token variable">\`</span>applicationServerKey<span class="token variable">\`</span></span> 选项用于推送服务器鉴别订阅用户的应用服务，并用确保推送消息发送给哪个订阅用户。

<span class="token variable"><span class="token variable">\`</span>applicationServerKey<span class="token variable">\`</span></span> 是一对公私钥。私钥应用服务器保存，公钥交给浏览器，浏览器订阅时将这个公钥传给推送服务器，这样推送服务器可以将你的公钥和用户的 <span class="token variable"><span class="token variable">\`</span>PushSubscription<span class="token variable">\`</span></span> 绑定。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="你的服务器发送" tabindex="-1"><a class="header-anchor" href="#你的服务器发送"><span>你的服务器发送</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 你的服务器发送</span>
当你的服务器要发送推送消息时，需要创建一个 <span class="token variable"><span class="token variable">\`</span>Authorization<span class="token variable">\`</span></span> 的 header 头，<span class="token variable"><span class="token variable">\`</span>Authorization<span class="token variable">\`</span></span> 由规范要求的加密算法进行私钥加密。推送消息收到消息时，首先取消息请求中 <span class="token variable"><span class="token variable">\`</span>endpoint<span class="token variable">\`</span></span> 对应的公钥，解码消息请求中签名过的 <span class="token variable"><span class="token variable">\`</span>Authorization<span class="token variable">\`</span></span> header 头，验证签名是否合法，防止它人伪造身份。通过后，推送服务器把消息发送到相应的设备浏览器。

注：这里说的 applicationServerKey 就是 VAPID key。


<span class="token comment">### JWT 加密生成 Authorization 信息</span>
Authorization 的签名采用 JWT（JSON web token），JWT 是一种向第三方发送消息的方式，三方收到后，获取发送者的公钥进行验证 JWT 的签名。
Authorization 对 JWT 签名的格式要求：<span class="token variable"><span class="token variable">\`</span>Authorization: <span class="token string">&#39;WebPush &lt;JWT Info&gt;.&lt;JWT Data&gt;.&lt;Signature&gt;&#39;</span><span class="token variable">\`</span></span>
在签名的前面加上 WebPush 作为 Authorization 头的值发送给推送服务器。
推送协议同时要求Crypto-Key header 头，用来发送公钥，并需要p256ecdsa<span class="token operator">=</span>前缀，格式：<span class="token variable"><span class="token variable">\`</span>Crypto-Key: <span class="token assign-left variable">p256ecdsa</span><span class="token operator">=</span><span class="token operator">&lt;</span>URL Safe Base64 Public Application Server Key<span class="token operator">&gt;</span>
<span class="token variable">\`</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="关于消息部分的加密" tabindex="-1"><a class="header-anchor" href="#关于消息部分的加密"><span>关于消息部分的加密</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 关于消息部分的加密</span>
发送的消息部分（即 payload）为了保证安全性，协议里同样要求需要加密，且推送服务器无法解密，只有浏览器才能解密消息数据。

在浏览器向推送服务器进行订阅后产生的订阅体，在这里就用的上了，再看下结构：
    <span class="token punctuation">{</span>
      endpoint: <span class="token string">&quot;https://fcm.googleapis.com/fcm/send/xxx:zzzzzzzzz&quot;</span>
      expirationTime: null
      keys: <span class="token punctuation">{</span>
        auth: <span class="token string">&quot;xxxx-zzzz&quot;</span>
        p256dh: <span class="token string">&quot;BasdfasdfasdfasdffsdafasdfFMRs&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


结构中的 keys 字段就是浏览器端的密钥信息，由浏览器生成。
加密需要 auth、p256dh和payload 三个值做为输入进行加密，加密过程比较复杂。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>FCM的请求DEMO</strong></p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  &#39;hostname&#39;<span class="token operator">:</span> <span class="token string">&quot;fcm.googleapis.com&quot;</span><span class="token punctuation">,</span>
  &#39;port&#39;<span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  &#39;path&#39;<span class="token operator">:</span>
    <span class="token string">&quot;/fcm/send/xxx-xx:APA91bFzxDp-j-xoN_kxqzie3uJS1aSNI5wI4SXL34dLWPFFa3QSZVBOE6eG7b4tb2RIvqUy3d3ww57In2lFsZW5MVsjQRtPFfbKoq9XqqrsTwRZiPDbPcbwZ4vkmv_1lnIHRo5yOxQF&quot;</span><span class="token punctuation">,</span>
  &#39;headers&#39;<span class="token operator">:</span> <span class="token punctuation">{</span>
    &#39;TTL&#39;<span class="token operator">:</span> <span class="token number">3600</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Content-Length&quot;</span><span class="token operator">:</span> <span class="token number">224</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/octet-stream&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Content-Encoding&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aesgcm&quot;</span><span class="token punctuation">,</span>
    &#39;Encryption&#39;<span class="token operator">:</span> <span class="token string">&quot;salt=lIiVReih7lcahHxS2UhENA&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Crypto-Key&quot;</span><span class="token operator">:</span>
      <span class="token string">&quot;dh=BG9SmS2AixNf9UgRlOr1aEiVQMH5h47cAz0FW-_m9MRiwLqrUUP9DhrbFGXqaHAYh12IyKtvySbnDYNmF3Mh0d0;p256ecdsa=BDTgN25YAAabqE6ANPP49d2EkoLAMxT4xDZxE5BdrCHPyq1zk36LofZ2M3DYosxZzSG7i_26S1ViOGC_rBifW_U&quot;</span><span class="token punctuation">,</span>
    &#39;Authorization&#39;<span class="token operator">:</span>
      <span class="token string">&quot;WebPush eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJhdWQiOiJodHRwczovL2ZjbS5nb29nbGVhcGlzLmNvbSIsImV4cCI6MTU1OTA3ODEwOSwic3ViIjoiaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL2Z1bmRhbWVudGFscy8ifQ.Fa3nW6Lt7cp2dGML71aZItdyIcEabZ4GRVtkQBc3dWavAGH3_xSh0jnT-Cy8vGHJrwwRSRKaOcbt-uniIYt6fA&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  &#39;method&#39;<span class="token operator">:</span> <span class="token string">&quot;POST&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="vapid-key-生成" tabindex="-1"><a class="header-anchor" href="#vapid-key-生成"><span>VAPID key 生成</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### VAPID key 生成</span>
密钥使用 ECDSA（椭圆曲线迪菲-赫尔曼金钥交换）的 ES256 算法（ECDSA使用 P-256 曲线和 SHA-256 哈希算法的缩写）。


基于 <span class="token function">node</span> 实现：
$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> web-push
$ web-push generate-vapid-keys

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="基于浏览器-js-实现" tabindex="-1"><a class="header-anchor" href="#基于浏览器-js-实现"><span>基于浏览器 JS 实现</span></a></h6><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">generateNewKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> crypto<span class="token punctuation">.</span>subtle<span class="token punctuation">.</span><span class="token function">generateKey</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ECDH&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">namedCurve</span><span class="token operator">:</span> <span class="token string">&#39;P-256&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;deriveBits&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">keys</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">cryptoKeyToUrlBase64</span><span class="token punctuation">(</span>keys<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span> keys<span class="token punctuation">.</span>privateKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">cryptoKeyToUrlBase64</span><span class="token punctuation">(</span><span class="token parameter">publicKey<span class="token punctuation">,</span> privateKey</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> promises <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  promises<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
    crypto<span class="token punctuation">.</span>subtle<span class="token punctuation">.</span><span class="token function">exportKey</span><span class="token punctuation">(</span><span class="token string">&#39;jwk&#39;</span><span class="token punctuation">,</span> publicKey<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">jwk</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token function">base64UrlToUint8Array</span><span class="token punctuation">(</span>jwk<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token function">base64UrlToUint8Array</span><span class="token punctuation">(</span>jwk<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> publicKey <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      publicKey<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0x04</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      publicKey<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      publicKey<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>y<span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> publicKey<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  promises<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
    crypto<span class="token punctuation">.</span>subtle
      <span class="token punctuation">.</span><span class="token function">exportKey</span><span class="token punctuation">(</span><span class="token string">&#39;jwk&#39;</span><span class="token punctuation">,</span> privateKey<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">jwk</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">base64UrlToUint8Array</span><span class="token punctuation">(</span>jwk<span class="token punctuation">.</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">exportedKeys</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token keyword">public</span><span class="token operator">:</span> <span class="token function">uint8ArrayToBase64Url</span><span class="token punctuation">(</span>exportedKeys<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token keyword">private</span><span class="token operator">:</span> <span class="token function">uint8ArrayToBase64Url</span><span class="token punctuation">(</span>exportedKeys<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">base64UrlToUint8Array</span><span class="token punctuation">(</span><span class="token parameter">base64UrlData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> padding <span class="token operator">=</span> <span class="token string">&#39;=&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">-</span> base64UrlData<span class="token punctuation">.</span>length <span class="token operator">%</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> base64 <span class="token operator">=</span> <span class="token punctuation">(</span>base64UrlData <span class="token operator">+</span> padding<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\-</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;+&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">_</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> rawData <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">atob</span><span class="token punctuation">(</span>base64<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>rawData<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> rawData<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    buffer<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> rawData<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> buffer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">uint8ArrayToBase64Url</span><span class="token punctuation">(</span><span class="token parameter">uint8Array<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  start <span class="token operator">=</span> start <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>
  end <span class="token operator">=</span> end <span class="token operator">||</span> uint8Array<span class="token punctuation">.</span>byteLength<span class="token punctuation">;</span>

  <span class="token keyword">const</span> base64 <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">btoa</span><span class="token punctuation">(</span>
    String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> uint8Array<span class="token punctuation">.</span><span class="token function">subarray</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> base64
    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\=</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// eslint-disable-line no-useless-escape</span>
    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="应用服务器端实现" tabindex="-1"><a class="header-anchor" href="#应用服务器端实现"><span>应用服务器端实现</span></a></h6><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 这里用 node 来实现一下应用服务器向推送服务器发送消息</span>
<span class="token comment">// 其他语言环境可参考 [web-push-libs](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fweb-push-libs)</span>

<span class="token keyword">const</span> webpush <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;web-push&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">vapidDetails</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">&quot;mail@you.com&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 你的联系邮箱</span>
    <span class="token literal-property property">publicKey</span><span class="token operator">:</span> <span class="token string">&quot;公钥&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">privateKey</span><span class="token operator">:</span> <span class="token string">&quot;私钥&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token constant">TTL</span><span class="token operator">:</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token comment">// 有效时间，单位秒</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> subscription <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从数据库取用户的订阅对象</span>
<span class="token keyword">const</span> payload <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 要发送的消息</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;hellow&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 发送消息到推送服务器</span>
webpush
  <span class="token punctuation">.</span><span class="token function">sendNotification</span><span class="token punctuation">(</span>subscription<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// err.statusCode</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,102),v=[k];function b(m,g){return s(),a("div",null,v)}const y=n(d,[["render",b],["__file","WEB API.html.vue"]]),f=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/WEB%20API.html","title":"","lang":"zh-CN","frontmatter":{"Author":"willysliang","CreateTime":"2024-02-19T11:34:54.000Z","Modifier":"willysliang","ModifiedTime":"2024-02-19T16:07:25.000Z","Description":"WEB API"},"headers":[{"level":2,"title":"WEB API","slug":"web-api","link":"#web-api","children":[]},{"level":2,"title":"观察器","slug":"观察器","link":"#观察器","children":[{"level":3,"title":"IntersectionObserver 相交节点观察器","slug":"intersectionobserver-相交节点观察器","link":"#intersectionobserver-相交节点观察器","children":[]},{"level":3,"title":"MutationObserver 节点元素变化监听器","slug":"mutationobserver-节点元素变化监听器","link":"#mutationobserver-节点元素变化监听器","children":[]}]},{"level":2,"title":"类文件对象 Blob","slug":"类文件对象-blob","link":"#类文件对象-blob","children":[]},{"level":2,"title":"Service Worker","slug":"service-worker","link":"#service-worker","children":[]},{"level":2,"title":"Push API","slug":"push-api","link":"#push-api","children":[]}],"git":{"updatedTime":1709537170000,"contributors":[{"name":"willy","email":"willysliang@qq.com","commits":4}]},"filePathRelative":"前端基础/WEB API.md"}');export{y as comp,f as data};
