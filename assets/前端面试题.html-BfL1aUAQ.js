import{_ as n,o as s,c as a,b as e}from"./app-Bvx-HY_0.js";const t="/static_blog/assets/bVcQV0-6KW3Edhs.png",p="/static_blog/assets/image-20220104003115957-DSezzj-i.png",l="/static_blog/assets/image-20211224134943355-DUu8L1Xn.png",i="/static_blog/assets/image-20211025153149658-CtZB12o7.png",o={},c=e(`<h2 id="待复习" tabindex="-1"><a class="header-anchor" href="#待复习"><span>待复习</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 在前端开发中，什么样的代码会导致性能很低？</span>
<span class="token number">1</span>. 不恰当的使用递归
<span class="token number">2</span>. 过多地渲染页面可视区域之外的DOM节点内容
<span class="token number">3</span>. 大数据量的计算
<span class="token number">4</span>. 多层嵌套循环的数据
<span class="token number">5</span>. 不恰当地导入未需要引用的模块或库，或导致页面加载缓慢
<span class="token number">6</span>. 过度地进行Http请求，而因http请求最大并发数量为6，从而导致请求阻塞


<span class="token comment">## 碰到一个棘手的问题，您这边通常采取什么样的思路排查问题？</span>
首先分析问题的性质，以及可能在哪个环节会导致这样的问题发生；
然后推理可能的解决方案；
然后再实际去试探排查问题真实所在；
最后再相应的解决问题。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> <span class="token number">1</span>. 如何用JS判断一个对象是空对象？
 <span class="token number">3</span>. window和document对象的区别？
 <span class="token number">4</span>. 如何看到组件化，如何做好组件规范？


vuex 的 mutation 是检测数据的变化，

1px 解决
<span class="token number">1</span>. css3 transform 的 scale 设置为 <span class="token number">0.5</span>
<span class="token number">2</span>. box-shadow: 提取一半高度

HTTP1.1的方法有哪些，怎么区分简单请求和复杂请求
实现 <span class="token number">75</span>%圆环
JS实现Set类型的交集、补集、并集、差集
ES6定义变量的方法：let、const、import、class
var a <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span> var b <span class="token operator">=</span> <span class="token number">2</span>   a*b <span class="token operator">=</span> NaN；a + b <span class="token operator">=</span> a2；a - b <span class="token operator">=</span> NaN；



<span class="token number">2</span>. 有什么影响 SEO 的，哪些标签影响 SEO 的搜索（只要影响到搜索引擎的，都需要编写，vue可以忽略）
网站TDK：title元素、description元素、keywords元素
SEO 提高浏览器搜索排名的，影响SEO排名的标签有如下：
  - meta
  - h1：页面唯一只能有一个 h1，用的时候要慎重
  - a标签的title属性、核心影响 href， href 必须要写，不然会降低 SEO 排名
  - image标签的alt（替换属性），一般功能是假如图片链接错了会出代替图片显示，崩溃需要添加 onError事件，公司项目是不允许图片崩溃的
  - 核心影响的是 （有且仅有一个）tdk：title,
  - 富文本编辑器（wangEditor）：

SEO怎么实现的，比如SSR这种

<span class="token number">5</span>. keepalive 的生命周期
有些路由不想缓存怎么办，有些路由不想缓存在怎么办

<span class="token number">6</span>. 性能优化
vue相关的：路由懒加载（加上layzy）、keepalive、虚拟滚动、触底更新、预加载


<span class="token number">7</span>. 一次https包含几次请求，分别是怎么样的
发送两次，把公钥作为传递的，私钥作为本地验证的
- 公钥发送一次
- 被公钥加密的一次的大密文，然后前端解密


<span class="token number">9</span>. webpack 跨域的Proxy反向代理的底层原理实现	

<span class="token number">12</span>. AMD/CMD、UMD、COMMONJS

<span class="token number">16</span>. vite 由什么实现组成的
<span class="token number">20</span>. 深拷贝递归是深度优先还是广度优先
广度优先的
体验感：innerHTML/vsDom /document
vue能明确知道更新哪个组件，React不知要更新哪个组件

时间切片：react人机交互，不希望用户体验卡顿，但是又不希望程序停止



<span class="token comment"># 若是包装简历，会问算法，我们要记忆流程、记忆算法图解、记忆核心原理</span>
<span class="token comment"># 大厂考的是如何把问题图形化、如何把问题抽象化</span>
<span class="token number">1</span>. 冒泡是一个什么过程，有东西往上冒 或者 有东西往下沉


<span class="token number">2</span>. 怎么看待在公司中跟同事相处
HR核心是想试探你的性格，如果你放在团队中，你是一个什么人？
我一定是团结同事、虚心请教（不搞事，友好相处、不挑事）
要不卑不亢，做好自己，不要显得太柔弱，不然就算面试都不好过


<span class="token number">3</span>. 领导分配的活给你比较重，比其他人比较轻
HR想问什么，不要暴露情绪、不要暴露需求、不要暴露短板
要说，这是我的责任，我应该这么做，如果有一天我做不满了，我会跟领导说，我会完成我本职工作
我不会跟别人攀比，工作多少都是我的责任
如果我压力非常大，我会跟领导说，我的工作跟别人无关（突出这方面）

<span class="token number">1</span>. 问你在工作上有遇到什么问题呀
一般没遇到什么问题，

<span class="token number">1</span>. 你对我们公司有了解吗
HR想让你夸他们公司，看你能不能做合格的舔狗

<span class="token number">4</span>. 如何学习
去掘金学基础、看github哪些最近比较火（最好看有文档的）

<span class="token number">5</span>. 职业规划
HR想问的是：你是一个什么样的人，你是想在我这养老、镀金还是创造价值
努力学习，跟公司一起成长，跟公司发现业务价值
HR想要问你什么时候在公司离职
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">js的精度问题：是怎么通过toFixed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>来进行计算，因为是四舍五入，是否会缺失精度。
如果通过<span class="token operator">*</span><span class="token number">100</span>然后再除以<span class="token number">100</span>，是否可以达到这样的效果

数组拉伸：通过把数组转换为字符串，然后消去<span class="token string">&#39;[&#39;</span>和<span class="token string">&#39;]&#39;</span>符号。


移除prototype上的属性问题
<span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">log</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> Foo <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
foo<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;before delete&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	
	<span class="token comment">//Foo.prototype = { } 这句执行完毕以后，log方法依然会存在与foo对象上，并且可以调用</span>
<span class="token keyword">delete</span> <span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>log<span class="token punctuation">;</span> <span class="token comment">//这句可以正常删除log方法</span>
foo<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;after delete&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

我曾思考过使用 <span class="token class-name">People</span><span class="token punctuation">.</span>prototype绑定事件并去触发来执行，取消绑定时则<span class="token keyword">delete</span>该方法，但是会比较繁琐，并且会导致People类中可能会


<span class="token number">1.</span> websocket
<span class="token number">3.</span> rem与em与px
<span class="token number">6.</span> 首页白屏优化
<span class="token number">11.</span> 怎么同时执行多个Async
<span class="token number">14.</span> <span class="token constant">ES6</span>模块化与Commonjs区别
<span class="token number">22.</span> Vue组件如何插入高度自定义信息
<span class="token number">23.</span> 怎么判断数据类型
<span class="token number">26.</span> 项目难点
<span class="token number">27.</span> git master分支
<span class="token number">28.</span> 怎么与后端联调

大数据量，怎么实现分页，怎么接收数据
通过虚拟<span class="token constant">DOM</span>来完成

请求的方式：合并请求，通过多数组的方式获取
多数据渲染：轮询，每隔多少秒进行请求（可能也会造成卡顿）、数据懒加载、

模糊搜索卡顿
<span class="token number">1.</span> 查找使用二分法
<span class="token number">2.</span> 页面渲染的懒加载
<span class="token number">3.</span> 页面虚拟列表

<span class="token number">1.</span> 处理数据方面
<span class="token number">2.</span> 渲染数据方面


<span class="token keyword">const</span> <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> res1 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">$http</span><span class="token punctuation">(</span><span class="token string">&#39;/test1&#39;</span><span class="token punctuation">)</span>
	<span class="token keyword">const</span> res2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">$http</span><span class="token punctuation">(</span><span class="token string">&#39;/test2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="面试总结" tabindex="-1"><a class="header-anchor" href="#面试总结"><span>面试总结</span></a></h2><blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token number">1.</span> 你是怎么学习新知识的？
如果有人已经在我们前面走过弯路摸索过，而我们就应该沿着他们摸索出来的道路上前行，而不是多花许多无谓的时间琢磨。
直到前面无人探索时或自己有了一定的基础知识后，自己摸索就会相对比较好。
这也是我为什么喜欢先看视频学习，因为别人会总结出一些学习的经验，会让我们更容易理解以及避免这些错误。
然后可以再看看官网，因为官网是叙述了此框架的知识，是总结，我们可以在其中发现我们在视频中遗漏的知识点。


<span class="token number">2.</span> 如果在开发过程中遇到问题，你应该怎么解决？
可以通过百度去解决问题，先设想能否绕开这个难题，行不通则可引进新技术，行不通则花时间琢磨解决，再行不通就跟别人讨论、研究、请教问题解决方案
  首先我们先看看这个问题我们能否解决，如果条件允许，我们可以规避、绕开这些问题
  或者引进新的技术来解决问题
  如果实在不行，可以跟别人探讨问题的解决方案

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="混杂" tabindex="-1"><a class="header-anchor" href="#混杂"><span>混杂</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>http请求：http请求头

协商缓存，<span class="token constant">DNS</span>缓存

伪类选择器的先后顺序
<span class="token literal-property property">a</span><span class="token operator">:</span>link<span class="token punctuation">,</span>     <span class="token literal-property property">a</span><span class="token operator">:</span>visited<span class="token punctuation">,</span>	<span class="token literal-property property">a</span><span class="token operator">:</span>hover<span class="token punctuation">,</span>	<span class="token literal-property property">a</span><span class="token operator">:</span>active

两个div重叠
	<span class="token constant">BFC</span>可以解决外边距重叠。
	产生<span class="token constant">BFC</span>的元素：
根元素；
float不为none
overflow不为visible
position不为<span class="token keyword">static</span>和relative
disaplay为inline<span class="token operator">-</span>block<span class="token operator">/</span>flex<span class="token operator">/</span>inline<span class="token operator">-</span>flex<span class="token operator">/</span>table<span class="token operator">-</span>cell<span class="token operator">/</span>table<span class="token operator">-</span>caption 


vue2的数据双向绑定原理
<span class="token number">1.</span> 通过监听器Observer：劫持并监听对象所有属性，利用Object<span class="token punctuation">.</span><span class="token function">definedProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>对属性加上setter和getter方法
<span class="token number">2.</span> 通过解析器Compile：解析Vue模板指令，将模板的变量替换为数据，然后渲染页面视图，并对每个指令节点绑定更新函数，添加监听数据的订阅者，当数据有变动，就会调动更新函数进行数据更新
<span class="token number">3.</span> 订阅者Watcher：是监听器和解析器之间通信的桥梁，主要是订阅监听器中的属性值变化，当发生变化，就会触发解析器中对应的更新函数
<span class="token number">4.</span> 订阅器Dep：订阅器采用 发布<span class="token operator">-</span>订阅 模式，用来收集订阅者，对监听器和解析器进行统一管理。

v<span class="token operator">-</span>show与v<span class="token operator">-</span><span class="token keyword">if</span>的区别 ？ 
   v<span class="token operator">-</span>show：初始渲染高，等同display<span class="token operator">:</span>none，适用于频繁切换的；
   v<span class="token operator">-</span><span class="token keyword">if</span>：按条件渲染，每次都删除或创建元素，适用于运行时很少改变条件的
computed与watch的区别<span class="token operator">?</span>
   computed：依赖其他属性值，并且computed有缓存，只有依赖值发生改变，下一次获取才会改变； 会产生一个新的属性值
   watch：监听其他数据的变化，并且监听的值必须存在data中，不支持缓存，每当数据变化后回调执行

组件间的通信
   <span class="token number">1.</span> props <span class="token operator">/</span> $emit 适用父子组件通信
   <span class="token number">2.</span> ref 与 $parent <span class="token operator">/</span> $children 适用于父子组件通信
   <span class="token number">3.</span> 事件总线 适用于父子、隔代、兄弟组件通信
   <span class="token number">4.</span> $attrs <span class="token operator">/</span> $listeners 适用于隔代组件通信
   <span class="token number">5.</span> provide <span class="token operator">/</span> inject 适用于隔代组件通信
   <span class="token number">6.</span> Vuex 适用于父子、隔代、兄弟组件通信


全局变量实现的方式
<span class="token number">1.</span> vuex
<span class="token number">2.</span> 通过module<span class="token punctuation">.</span>exports：可在一个js文件中定义变量，然后通过module<span class="token punctuation">.</span>exports暴露出去，最后通过入口文件全局挂载到Vue<span class="token punctuation">.</span>protype中；通过<span class="token keyword">this</span>来进行引用
<span class="token number">3.</span> 通过<span class="token keyword">export</span> <span class="token keyword">default</span>：可在一个js文件中定义变量，然后通过<span class="token keyword">export</span> <span class="token keyword">default</span>暴露出去，最后通过入口文件全局挂载到Vue<span class="token punctuation">.</span>protype中；通过<span class="token keyword">this</span>来进行引用

vue的key值使用场景
<span class="token number">1.</span> v<span class="token operator">-</span><span class="token keyword">for</span>：key是虚拟<span class="token constant">DOM</span>对象的表示。在数据发生变化时，新旧虚拟<span class="token constant">DOM</span>会根据diff算法对比，若kye值找到，就判断数据是否相同；key值不同，则创建一个
   所以一般不用索引下标来当做key值，因为Key值很容易相同，但是内容不同
<span class="token number">2.</span> 动态路由中添加key，管理可复用元素：Vue会尽可能高效的渲染元素，通常会复用已有元素，但此时会带来一些不好的副作用，所以通过key来辨识他们不一样
 主要作用是为了高效的更新虚拟<span class="token constant">DOM</span>，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="html-css" tabindex="-1"><a class="header-anchor" href="#html-css"><span>HTML &amp; CSS</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## html 标签语义化</span>
HTML5的语义化指：合理正确的使用语义化的标签来创建页面结构。
语义化的标签：h1~h5、p、strong、em、button、header、nav、article、aside、section、footer 等。
语义化的作用：
  - HTML标签语义化让页面的内容结构化，在没有 css 样式情况下，页面整体也会呈现出很好的结构效果。
  - 有利于浏览器、搜索引擎解析优化，搜索引擎爬虫会根据不同的标签来赋予不同的权重。
  - 方便其他设备解析（如盲人阅读器），根据语义渲染页面。
  - 有利于开发和维护
  - 提升用户体验，比如title、alt。
  

<span class="token comment">## iframe 的缺点</span>
<span class="token number">1</span>. iframe 会阻塞主页面加载。
		 window 的 onload 事件需要在所有 iframe 加载完毕后<span class="token punctuation">(</span>包含里面的元素<span class="token punctuation">)</span>才会触发。
<span class="token number">2</span>. iframe 和主页面共享连接池
		http只能同时发送6个请求，但因为主页面和其中的 iframe 是共享这些连接的，若iframe 上请求过多就会阻塞主页面资源的加载。
优化方案：可通过在主页面上的重要的元素加载完毕后，在动态设置 iframe 的 src 属性上所绑定的链接来优化。


<span class="token comment">## HTML 混乱模式</span>
- 网站设置 <span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE html<span class="token operator">&gt;</span><span class="token variable">\`</span></span> 是为了防止浏览器在渲染文档时，使用一个不符合规范的渲染模式。
- 在严格模式下，浏览器根据 W3C 标准进行解析并渲染，而在混杂模式下浏览器会用自己的渲染方式解析并渲染。
- 混杂模式的存在是为了在没有 W3C 标准时间段写的旧网页可以顺利地加载出来。


<span class="token comment">## CSS选择器优先级</span>
- <span class="token operator">!</span>important <span class="token operator">&gt;</span> 行内样式 <span class="token operator">&gt;</span> ID选择器 <span class="token operator">&gt;</span> 类选择器/伪类选择器/属性选择器 <span class="token operator">&gt;</span> 元素选择器/伪元素选择器 <span class="token operator">&gt;</span> 通配符选择器/关系选择器 <span class="token operator">&gt;</span> 继承样式 <span class="token operator">&gt;</span> 默认样式
- 当样式中包含多种选择器时，需要将多种选择器的优先级相加然后再进行比较。
- 但注意，选择器的优先级计算不会超过它的最大数量级，如果选择器的优先级一样，前面定义的样式会被后面的样式覆盖
- 伪类的顺序：<span class="token variable"><span class="token variable">\`</span>:link  、 :visited 、 :hover 、 :active<span class="token variable">\`</span></span>


<span class="token comment">## 浮动 float</span>
    - 浮动的作用：当父元素不给高度时，内部元素如果不浮动则不会撑开；而浮动时，父元素会变成一条线。
    - 使用clear清除浮动的原理：元素盒子的变不能和前面的浮动元素相邻，对元素设置 <span class="token function">clear</span> 属性时为了避免浮动元素对该元素的影响，而不是直接清除掉浮动。
    - <span class="token variable"><span class="token variable">\`</span>clear:both<span class="token variable">\`</span></span>：本质是闭合浮动，即是让父盒子闭合出口和入口，不让子盒子出来。
<span class="token comment">### 清除浮动的方式</span>
    <span class="token number">1</span>. 额外标签法：在最后一个浮动标签后新加一个标签并设置属性<span class="token variable"><span class="token variable">\`</span>clear：both<span class="token punctuation">;</span><span class="token variable">\`</span></span>
    		 clear:both 的本质是闭合浮动，让父盒子闭合出口和入口，不让子盒子出来
    <span class="token number">2</span>. 父元素添加overflow属性（<span class="token variable"><span class="token variable">\`</span>overflow:hidden/auto<span class="token variable">\`</span></span>）
    			通过触发BFC方式，实现清除浮动
    <span class="token number">3</span>. 在父元素中使用after伪元素清除浮动，在:after中添加设置模式为块元素，并通过<span class="token variable"><span class="token variable">\`</span>clear:both<span class="token variable">\`</span></span>清除浮动
    <span class="token number">4</span>. 在父元素中使用before和after双伪元素清除浮动，设置模式为table元素，并在after中清除浮动
    			为了兼容ie浏览器，需要给父元素添加属性 <span class="token variable"><span class="token variable">\`</span>*zoom: <span class="token number">1</span><span class="token variable">\`</span></span>
注意：即使清除浮动，当超出父元素的内容还是会溢出，所以建议在父元素中定义<span class="token variable"><span class="token variable">\`</span>overflow:hidden/auto<span class="token variable">\`</span></span>；且在定义浮动后，若子盒子宽度超出父盒子宽度，超出部分的子盒子会换行显示（是超出部分的整个子盒子，而不是子盒子的内容）
    


<span class="token comment">## 定位 position</span>
<span class="token number">1</span>. 静态定位：元素的标准流显示方式，没有定位，会忽略<span class="token variable"><span class="token variable">\`</span>left、right、top、bottom、z-index<span class="token variable">\`</span></span>属性
<span class="token number">2</span>. 固定定位：以浏览器的可视窗口为参照点定位，会脱离文档流，元素不占位
<span class="token number">3</span>. 相对定位：相对于自身位置进行定位，元素仍然占据原来的位置
<span class="token number">4</span>. 绝对定位：相对于离自己最近，且定义了非静态定位的父元素的位置进行定位，若全部父元素没有定位属性，则相对于 body 标签左上角进行定位，会脱离文档流，不占据位置
<span class="token number">5</span>. 粘性定位：以浏览器的可视窗口为参照点移动元素，且元素会占据原先位置，必须添加 <span class="token variable"><span class="token variable">\`</span>left、right、top、bottom、z-index<span class="token variable">\`</span></span> 其中一个属性才有效。
- 可通过z-index来进行定位元素的上下层级调整（静态定位不能设置）


<span class="token comment">### 哪些情况下会使 z-index 的行为发生变化</span>
正常情况下，元素的层叠规则遵循 “值越大位置越靠前，谁在后谁靠上”。
但在一些特殊情况下，层叠规则会有些不同。有如下情况：
   * 元素为flex布局元素（父元素display：flex<span class="token operator">|</span>inline-flex），同时z-index不为auto
   * 元素的opacity值不是1
   * 元素的transform不是none
   * 元素mix-blend-mode知不是normal
   * 元素的filter值不是none
   * 元素的isolation值是isolate
   * 元素的will-change属性值为上面2~6的任意一个（如will-change:opacity will-change:transform等）
   * 元素的-webkit-overflow-scrolling设为touch


<span class="token comment">## 盒子模型 box-sizing</span>
- 盒模型的本质是盒子，封装周内的HTML元素。
- CSS的盒模型分为标准盒模型和怪异盒模型。
- 盒模型大小 <span class="token operator">=</span> 内容、内边距、边框、外边距（注意：怪异盒模型的内容包括border跟padding）
- box-sizing的值：inherit<span class="token punctuation">(</span>继承父元素的box-sizing的值<span class="token punctuation">)</span>、content-box<span class="token punctuation">(</span>标准盒模型<span class="token punctuation">)</span>、border-box<span class="token punctuation">(</span>怪异盒模型<span class="token punctuation">)</span>

- 标准盒模型的 content 为 width 和 height
- 怪异盒模型的 content 为 width 和 height、border、padding

- 标准盒模型的宽度 <span class="token operator">=</span> width + 左右margin + 左右padding + 左右border
- 怪异盒模型的宽度 <span class="token operator">=</span> width + 左右margin	（width 已经包含 padding 和 border）



<span class="token comment">## 水平垂直居中</span>
<span class="token number">1</span>. 父元素设置弹性布局或网格布局：<span class="token variable"><span class="token variable">\`</span>display:flex/grid<span class="token punctuation">;</span>justify-content:center<span class="token punctuation">;</span>align-items:center<span class="token punctuation">;</span><span class="token variable">\`</span></span>
<span class="token number">2</span>. 父元素设置flex或grid布局+margin:auto：<span class="token variable"><span class="token variable">\`</span>display:flex/gird<span class="token punctuation">;</span>margin:auto<span class="token punctuation">;</span><span class="token variable">\`</span></span>
<span class="token number">3</span>. 子元素通过margin和transform配合：<span class="token variable"><span class="token variable">\`</span>margin:50% auto<span class="token punctuation">;</span>transform:translateY<span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token variable">\`</span></span>
<span class="token number">4</span>. 使用table-cell：父元素设置<span class="token variable"><span class="token variable">\`</span>display:table-cell<span class="token punctuation">;</span>vertical-align:middle<span class="token punctuation">;</span>text-align:center<span class="token punctuation">;</span><span class="token variable">\`</span></span>，子元素设置<span class="token variable"><span class="token variable">\`</span>display:inline-block<span class="token punctuation">;</span><span class="token variable">\`</span></span>
<span class="token number">5</span>. 设置定位和transform：父元素设置相对定位，子元素设置<span class="token variable"><span class="token variable">\`</span>position:absolute<span class="token punctuation">;</span>left:50%<span class="token punctuation">;</span>right:50%<span class="token punctuation">;</span> transform: translate<span class="token punctuation">(</span>-50%, -50%<span class="token punctuation">)</span><span class="token variable">\`</span></span>
<span class="token number">6</span>. 设置定位和margin:auto：<span class="token variable"><span class="token variable">\`</span>position:absolute<span class="token punctuation">;</span> left:50%<span class="token punctuation">;</span> top:50%<span class="token punctuation">;</span> margin:auto<span class="token punctuation">;</span><span class="token variable">\`</span></span>
<span class="token number">7</span>. 设置定位和负margin：<span class="token variable"><span class="token variable">\`</span>width:100px<span class="token punctuation">;</span>height:100px<span class="token punctuation">;</span> position:absolute<span class="token punctuation">;</span> left:50%<span class="token punctuation">;</span> top: <span class="token number">50</span>%<span class="token punctuation">;</span> margin-left:-50px<span class="token punctuation">;</span> margin-right: -50px<span class="token punctuation">;</span><span class="token variable">\`</span></span>
<span class="token number">8</span>. 文本水平居中和行高占满容器<span class="token punctuation">(</span>只适用纯文字类<span class="token punctuation">)</span>：<span class="token variable"><span class="token variable">\`</span>&#39;width:100px<span class="token punctuation">;</span>height:100px<span class="token punctuation">;</span> text-align:center<span class="token punctuation">;</span> line-height:100px<span class="token punctuation">;</span><span class="token variable">\`</span></span>
<span class="token number">9</span>. 使用伪元素，在父级最后增加一个空的文本元素，将文本元素的行高设置成父元素content的高度，当这个父元素的空的文本元素与其直接子元素的font-size一样高时，由于基线对齐，实现了垂直居中<span class="token variable"><span class="token variable">\`</span>.father<span class="token punctuation">{</span>width: 50px<span class="token punctuation">;</span>height: 50px<span class="token punctuation">;</span>text-align: center<span class="token punctuation">;</span><span class="token punctuation">}</span> .father::after<span class="token punctuation">{</span>content:<span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>line-height:50px<span class="token punctuation">;</span><span class="token punctuation">}</span> .son<span class="token punctuation">{</span>display:inline-block<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token variable">\`</span></span>



<span class="token comment">## 隐藏元素的方法：display:none、visibility:hidden、opacity:0 的区别</span>
  <span class="token number">1</span>. <span class="token variable"><span class="token variable">\`</span>opacity:0<span class="token variable">\`</span></span>：将元素透明度变为0，但依然占据空间且可交互，重建图层性能较高。
  <span class="token number">2</span>. <span class="token variable"><span class="token variable">\`</span>visibility:hidden<span class="token variable">\`</span></span>：元素不可见，占据空间且不会导致页面结构发生变动，不会交互，会引起重绘。
  <span class="token number">3</span>. <span class="token variable"><span class="token variable">\`</span>display:none<span class="token variable">\`</span></span>： 元素从文档流中消失，在文档布局中不再分配空间，且不可交互；在显示原来这里不存在的结构会引起重排，性能开销较大。
  <span class="token number">4</span>. <span class="token variable"><span class="token variable">\`</span>overflow:hidden<span class="token variable">\`</span></span>：只隐藏元素溢出的部分，占据空间且不可交互。
  <span class="token number">5</span>. <span class="token variable"><span class="token variable">\`</span>z-index:-9999<span class="token variable">\`</span></span>：将层级放到底部，这样会被其它元素覆盖，占据空间，不一定能交互（没有被覆盖部分能交互）
  <span class="token number">6</span>. <span class="token variable"><span class="token variable">\`</span>transform:scale<span class="token punctuation">(</span><span class="token number">0,0</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>：平面变换，将元素缩放为0，占据空间且不可交互。
  
  

<span class="token comment">## 用css实现三角符号</span>
/*记忆口诀：盒子宽高均为零，三面边框皆透明。 */
div:after<span class="token punctuation">{</span>
    position: absolute<span class="token punctuation">;</span>
    width: <span class="token number">0</span><span class="token punctuation">;</span>
    height: <span class="token number">0</span><span class="token punctuation">;</span>
    content: <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    border: 100px solid transparent<span class="token punctuation">;</span>
    border-top: 100px solid <span class="token comment">#ff0;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对h5的理解" tabindex="-1"><a class="header-anchor" href="#对h5的理解"><span>对h5的理解</span></a></h3><blockquote><ul><li>新标签可读性高，有助于开发</li><li>提供了更多的媒体标签（audio、video）</li><li>很好的替代了flash</li></ul><h4 id="html5新特性" tabindex="-1"><a class="header-anchor" href="#html5新特性"><span>HTML5新特性</span></a></h4><ul><li>绘画canvas</li><li>用于媒介回放的video和audio元素</li><li>本地离线存储localstorage长期存储数据，浏览器关闭后数据不丢失</li><li>sessionstorage的数据在浏览器关闭后自动删除</li><li>语义化更好的内容元素，比如<code>article、footer、header、nav、section</code></li><li>表单控件<code>calendar、date、time、email、url、search</code></li><li>地图和拖放</li><li>新的技术webworker、websocket、Geolocation</li></ul><h4 id="处理兼容" tabindex="-1"><a class="header-anchor" href="#处理兼容"><span>处理兼容</span></a></h4><ul><li>IE8/IE7/IE6支持通过document.createElement方法产生的标签，可以利用这一特性让这些浏览器支持HTML5新标签，浏览器支持新标签后，还需添加标签默认的样式</li><li>还可用成熟的框架，比如html5shim</li></ul><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token comment">&lt;!-- [if lt IE 9]&gt;
	&lt;script src=&quot;http://html5shim.googlecode.come/svn/trunk/html5.js&quot;&gt;&lt;/script&gt;
&lt;![endif]--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="script标签defer和async的区别" tabindex="-1"><a class="header-anchor" href="#script标签defer和async的区别"><span>script标签defer和async的区别</span></a></h3><blockquote><ol><li>没有defer和async，浏览器会立即加载并执行指定的脚本，“立即”是指在渲染该script标签之下的文档元素之前，就是说不等待后续载入的文档元素，读到加载并立即执行</li><li>有async，加载和渲染后续文档元素的过程将和js脚本文件的加载与执行并行进行（异步）</li><li>有defer，加载后续文档元素的过程将和js脚本文件的加载并行进行（异步），但js脚本文件的执行要在所有元素解析完成后，<code>DOMContentLoaded</code>事件触发之前完成 4. 从实用角度来说，把所有脚本都丢到<code>&lt;/body&gt;</code>之前是最佳实践，因为对于旧浏览器来说这是唯一的优化选择，此法可保证非脚本的其他一切元素能够以最快的速度得到加载和解析</li></ol><p><img src="`+t+`" alt="bVcQV0"></p><ul><li>defer和async在网络读取(下载)都是异步的（相较于HTML解析）</li><li>defer是按照加载顺序执行脚本</li><li>async是乱序执行的，脚本的加载完会立刻执行</li><li>async对于应用脚本用处不大，因为它不考虑依赖；对于不依赖任何脚本或不被任何脚本依赖的脚本非常适合，如<code>Google Analytics</code></li><li>即操作DOM的脚本不要使用<code>async或defer</code></li></ul></blockquote><h3 id="页面导入样式时-使用link和-import的区别" tabindex="-1"><a class="header-anchor" href="#页面导入样式时-使用link和-import的区别"><span>页面导入样式时，使用link和@import的区别</span></a></h3><blockquote><ol><li>link是XHTML标签，除了加载CSS外，还能用于定义RSS，定义rel链接属性等作用；而@import是CSS提供，只能用于加载CSS</li><li>link引用CSS时，在页面载入时同时加载，@import需要页面网页完全载入以后加载</li><li>link是XHTML标签，无兼容性问题；@import是在CSS2.1提出，低版本(IE5及以下)的浏览器不支持</li><li>link支持使用JavaScript控制DOM去改变样式；而@import不支持</li></ol></blockquote><h3 id="css加载会造成阻塞吗" tabindex="-1"><a class="header-anchor" href="#css加载会造成阻塞吗"><span>CSS加载会造成阻塞吗？</span></a></h3><blockquote><ul><li>css加载不会阻塞DOM的解析</li><li>css加载会阻塞DOM的渲染</li><li>CSS加载会阻塞js的执行</li></ul></blockquote><h3 id="样式的继承" tabindex="-1"><a class="header-anchor" href="#样式的继承"><span>样式的继承</span></a></h3><blockquote><p>并不是所有的样式都会被子元素所继承，如：背景相关的、边框相关的、定位相关的样式都不会被子元素所继承。</p><p>可以继承的有：字体系列的属性、文本系列的属性、元素的可见性、表格布局属性、列表属性、页面样式属性</p></blockquote><h3 id="取消行内元素间的间隙" tabindex="-1"><a class="header-anchor" href="#取消行内元素间的间隙"><span>取消行内元素间的间隙</span></a></h3><blockquote><ul><li>行内元素产生间隙的原因：存在“回车键”、空格、“tab”时就会出现间隙</li></ul><ol><li>将元素写成一行，中间不换行(代码不美观)</li><li>给父元素设置font-size:0(其他字符尺寸也被设为0，需要额外重新设定其他字符尺寸，且在Safari浏览器依然会出现空白间隔)</li><li>为元素设置负margin值，但是会根据父元素定义的font-size大小而变化</li><li>设置浮动，需要给父元素设置宽高(有些容器是不能设置浮动，如左右切换的焦点图等)</li><li>给父元素设置word-space或letter-space值为负数(这也设置了<code>&lt;li&gt;</code>内的字符间隔，因此需要将<code>&lt;li&gt;</code>内的字符间隔设为默认letter-spacing:normal)</li></ol></blockquote><h3 id="文本溢出" tabindex="-1"><a class="header-anchor" href="#文本溢出"><span>文本溢出</span></a></h3><blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 单行溢出显示省略号</span>
<span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
white<span class="token operator">-</span>space<span class="token operator">:</span>nowrap<span class="token punctuation">;</span>	<span class="token comment">// 文本不换行，只显示一行文字</span>
<span class="token literal-property property">overflow</span><span class="token operator">:</span>hidden<span class="token punctuation">;</span>	<span class="token comment">// 超出内容框的隐藏</span>
text<span class="token operator">-</span>overflow<span class="token operator">:</span>ellipsis<span class="token punctuation">;</span>	<span class="token comment">// 用省略号显示超出的部分</span>

<span class="token comment">// 两行超出隐藏</span>
<span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>	<span class="token comment">// 超出的隐藏显示</span>
text<span class="token operator">-</span>overflow<span class="token operator">:</span>ellipsis<span class="token punctuation">;</span>	<span class="token comment">// 省略号显示溢出部分</span>
<span class="token literal-property property">display</span><span class="token operator">:</span><span class="token operator">-</span>webkit<span class="token operator">-</span>box<span class="token punctuation">;</span>	<span class="token comment">// 弹性伸缩盒子模型显示</span>
<span class="token operator">-</span>webkit<span class="token operator">-</span>line<span class="token operator">-</span>clamp<span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">;</span>	<span class="token comment">// 限制在一个块元素显示的文本行数</span>
<span class="token operator">-</span>webkit<span class="token operator">-</span>box<span class="token operator">-</span>orient<span class="token operator">:</span>vertical<span class="token punctuation">;</span>	<span class="token comment">// 设置或检索伸缩盒对象的子元素的排列顺序</span>
word<span class="token operator">-</span>wrap<span class="token operator">:</span> <span class="token keyword">break</span><span class="token operator">-</span>word<span class="token punctuation">;</span>	<span class="token comment">//换行（若不设置会不换行，从而导致只显示一行）</span>
line<span class="token operator">-</span>height<span class="token operator">:</span> 30rpx<span class="token punctuation">;</span>
<span class="token literal-property property">height</span><span class="token operator">:</span> 60rpx<span class="token punctuation">;</span>	<span class="token comment">// 一般来说，应设定高度=行高*显示的行数,防止超出的文字露出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="flex布局" tabindex="-1"><a class="header-anchor" href="#flex布局"><span>flex布局</span></a></h3><blockquote><p><strong>flex</strong>属性是<code>flex-grow、flex-shrink、flex-basis</code>三个属性的缩写</p><p><strong>flex-grow</strong>：定义项目的的放大比例；</p><ul><li>​ 默认为0，即 即使存在剩余空间，也不会放大；</li><li>​ 所有项目的flex-grow为1：等分剩余空间（自动放大占位）；</li><li>​ flex-grow为n的项目，占据的空间（放大的比例）是flex-grow为1的n倍。</li></ul><p><strong>flex-shrink</strong>：定义项目的缩小比例；</p><ul><li>​ 默认为1，即 如果空间不足，该项目将缩小；</li><li>​ 所有项目的flex-shrink为1：当空间不足时，缩小的比例相同；</li><li>​ flex-shrink为0：空间不足时，该项目不会缩小；</li><li>​ flex-shrink为n的项目，空间不足时缩小的比例是flex-shrink为1的n倍。</li></ul><p><strong>flex-basis</strong>： 定义在分配多余空间之前，项目占据的主轴空间（main size），浏览器根据此属性计算主轴是否有多余空间，</p><ul><li>​ 默认值为auto，即 项目原本大小；</li><li>​ 设置后项目将占据固定空间。</li></ul><p>所以flex属性的默认值为：0 1 auto （不放大会缩小）</p><p><strong>flex为none</strong>：0 0 auto （不放大也不缩小）</p><p><strong>flex为auto</strong>：1 1 auto （放大且缩小）</p><p><strong>flex为一个非负数字n</strong>：该数字为flex-grow的值，</p><p><strong>flex：n</strong>；= flex-grow：n；</p><p>​ flex-shrink：1；</p><p>​ flex-basis：0%；</p><p><strong>flex为两个非负数字n1</strong>，<strong>n2</strong>： 分别为flex-grow和flex-shrink的值，</p><p><strong>flex：n1 n2</strong>; = flex-grow：n1；</p><p>​ flex-shrink：n2；</p><p>​ flex-basis：0%；</p><p><strong>flex为一个长度或百分比L</strong>：视为flex-basis的值，</p><p><strong>flex: L</strong>; = flex-grow：1；</p><p>​ flex-shrink：1；</p><p>​ flex-basis：L；</p><p><strong>flex为一个非负数字n和一个长度或百分比L</strong>：分别为flex-grow和flex-basis的值，</p><p><strong>flex：n L</strong>；= flex-grow：n；</p><p>​ flex-shrink：1；</p><p>​ flex-basis：L;</p><p>可以发现，flex-grow和flex-shrink在flex属性中不规定值则为1，flex-basis为0%。</p><p>flex：1即为flex-grow：1，经常用作自适应布局，将父容器的display：flex，侧边栏大小固定后，将内容区flex：1，内容区则会自动放大占满剩余空间。</p></blockquote><h3 id="bfc" tabindex="-1"><a class="header-anchor" href="#bfc"><span>BFC</span></a></h3><blockquote><p><strong>BFC（Block formatting contexts）：块级格式上下文</strong></p><ul><li><p>块级元素才会产生BFC，且BFC仍属于文档中的普通流，是一个独立隔离的渲染区域，不影响区域与外部</p></li><li><p><strong>产生BFC的元素</strong>(脱离文档流)</p><ol><li>根元素</li><li>float属性不为none；</li><li>position不为static和relative；</li><li>overflow不为visible；</li><li>display为inline-block, flex, inline-flex，table-cell, table-caption</li></ol></li><li><p><strong>BFC的特点</strong></p><p>1）内部的Box会在垂直方向，一个接一个地放置。 2）Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠 3）每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。 4）BFC的区域不会与float box重叠。 5）<strong>BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。</strong> 6）计算BFC的高度时，浮动元素也参与计算</p></li><li><p><strong>BFC作用</strong></p><ul><li><strong>解决外边距重叠问题</strong>：由于BFC是一个独立的区域，内部的元素和外部的元素互不影响，将两个元素变为两个BFC，就解决了margin重叠的问题。</li></ul></li><li><p><strong>解决高度塌陷的问题（清除浮动影响）</strong>：在对子元素设置浮动后，父元素会发生高度塌陷，也就是父元素的高度变为0。解决这个问题，只需要把父元素变成一个BFC。常用的办法是给父元素设置<code>overflow:hidden</code>。</p><ul><li><strong>创建自适应两栏布局</strong>：可以用来创建自适应两栏布局：左边的宽度固定，右边的宽度自适应（利用浮动导致内容坍塌，然后让中间的设置margin:auto）</li></ul></li></ul><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>关于div外边距重叠的发生条件
情况一：两个div垂直边界相邻，margin会等于二者中margin较大的值
              解决方案 1.position：absolute
                      2.float：left

情况二：子元素在父元素内，子元素的margin-top会与父元素的margin-top重叠，值等于二者中较大的，如果只有子元素设置了margin-top，则显示为父元素的margin-top
              解决方案 1.给父元素设置border（给子元素设置边框没有用）
                      2.给父元素设置padding值
                      3.给父元素或子元素添加float：left
                      4.给父元素或子元素添加position：absolute
                      5.给父元素添加overflow：hidden
                      6.给子元素添加display：inline-block

情况三：一个空白元素自身的margin-top和margin-bottom会重叠，值为而这种较大的
             解决方案 1.设置透明border
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="display、float、position的关系" tabindex="-1"><a class="header-anchor" href="#display、float、position的关系"><span>display、float、position的关系</span></a></h3><blockquote><p>（1）首先判断display属性是否为none，如果为none，则position和float属性的值不影响元素最后的表现。</p><p>（2）然后判断position的值是否为absolute或者fixed，如果是，则float属性失效，并且display的值应该被设置为table或者block，具体转换需要看初始转换值。</p><p>（3）如果position的值不为absolute或者fixed，则判断float属性的值是否为none，如果不是，则display的值则按上面的规则转换。注意，如果position的值为relative并且float属性的值存在，则relative相对于浮动后的最终位置定位。</p><p>（4）如果float的值为none，则判断元素是否为根元素，如果是根元素则display属性按照上面的规则转换，如果不是，则保持指定的display属性值不变。</p><p>可以看作是一个类似优先级的机制，&quot;position:absolute&quot;和&quot;position:fixed&quot;优先级最高，有它存在的时候，浮动不起作用，&#39;display&#39;的值也需要调整；其次，元素的&#39;float&#39;特性的值不是&quot;none&quot;的时候或者它是根元素的时候，调整&#39;display&#39;的值；最后，非根元素，并且非浮动元素，并且非绝对定位的元素，&#39;display&#39;特性值同设置值</p></blockquote><h3 id="inline、inline-block、block的区别" tabindex="-1"><a class="header-anchor" href="#inline、inline-block、block的区别"><span>inline、inline-block、block的区别</span></a></h3><blockquote><ul><li>行内元素一般是内容的容器（适合显示具体内容），而块级元素一般是其他容器的容器（适合做布局）</li><li><strong>块级元素</strong><code>block</code>：独占一行，对宽高属性生效；如果不给宽度，块级元素默认为浏览器的宽度100%宽</li><li><strong>行内元素</strong><code>inline</code>：可以多标签存在一行，对宽高属性值不生效，完全靠内容撑开宽高</li><li><strong>行内块元素</strong><code>inline-block</code>：可设置长宽，可让padding和margin生效，又可和其他行内元素并排</li><li>行内元素：<code>a、b、strong、span、img、label、button、input、select、textarea</code>（其中img和input为行内块元素）</li><li>块级元素：<code>header、form、ul、ol、table、article、div、hr、aside、figure、canvas、video、audio、footer</code></li></ul><p><strong>行内元素与块元素的转换</strong></p><ul><li><strong>float</strong>：当把行内元素设置浮动后，该行内元素的display属性会被赋予block属性，且拥有浮动特性。行内元素去除了之间的莫名空白</li><li><strong>position:</strong> 当为行内元素进行定位时，position:absolute与position:fixed都会使得原先的行内元素变为块级元素</li><li><strong>display:<code>inline/inline-block/block</code></strong></li></ul><p><strong>特性</strong></p><ul><li>text-align属性对块级元素起作用，对行内元素不起作用</li><li>块级元素独自占一行且宽度默认会占满父元素宽度，行内元素不会独占一行，相邻行内元素可以排在同一行</li><li>块级元素可以设置weith和height，行内元素设置width和height无效，而且块级元素即使设置宽度也还是独占一行。</li></ul></blockquote><h3 id="css模块化" tabindex="-1"><a class="header-anchor" href="#css模块化"><span>css模块化</span></a></h3><blockquote><p><img src="`+p+`" alt="image-20220104003115957"></p><ul><li>就是通过每个页面根节点唯一类名，然后加上CSS后代选择器的方式来实现私有样式，这种方式是最简单，基本上和模块化不搭边，他只适合在比较小的前端中使用。</li><li>Vue中scoped方案，通过给每个模块生成一个唯一的属性值，然后将该属性添加到每个dom节点上，然后配合CSS的属性选择器来时实现私有样式，这种方式只能解决样式私有化的问题，但是也架不住被其他样式文件干扰</li><li>开启css-loader的modules，使用CSS Modules方案，它不仅能实现样式的私有化，还能有效的避免被其他样式文件干扰，只是他需要借助webpack进行进行编译，写法上也有点不一样。</li></ul></blockquote><h3 id="实现三列布局" tabindex="-1"><a class="header-anchor" href="#实现三列布局"><span>实现三列布局</span></a></h3><blockquote><p><strong>实现左右两侧宽度固定，中间自适应</strong>：BFC块级布局，flex布局，table布局,css计算宽度布局</p><ul><li>绝对定位+中间版块不给宽度</li><li>两侧浮动+中间自动撑开（使用calc动态计算宽度，设置对应宽度margin）</li><li>flex，左右设置flex-basis，中间设置flex-grow</li></ul><p><strong>calc计算</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">&lt;div class= &quot;main&quot;&gt;
    &lt;div class=&quot;left&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;center&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;style&gt;
    .main</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>400px<span class="token punctuation">;</span><span class="token property">border</span><span class="token punctuation">:</span>1px solid red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.left</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">background</span><span class="token punctuation">:</span>gray<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.center</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span><span class="token function">calc</span><span class="token punctuation">(</span>100% - 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> 
    <span class="token selector">.right</span><span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span>400px<span class="token punctuation">;</span><span class="token property">background</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span>right<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>float布局</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.left</span><span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #631D9F<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span><span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.center</span><span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #4990E2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.main::after</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>position布局</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.left</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.center</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #3A2CAC<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>flex布局</strong></p><blockquote><ul><li>注意：当子元素的宽度大于父元素的宽度时，左右两边的子盒子会平分父元素宽度显示，中间的内容不显示</li></ul><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.main</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.center</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>table布局</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.main</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left,.center,.right</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.center</span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>grid布局</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.div</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 300px auto 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="js-es6" tabindex="-1"><a class="header-anchor" href="#js-es6"><span>JS &amp; ES6+</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 数据类型</span>
- 基本数据类型：number、boolean、string、null、undefined、symbol、bigInt。
- 复杂数据类型：object（包含function、Array、Date、RegExp、特殊的基本包装类型<span class="token punctuation">(</span>String、Number、Boolean<span class="token punctuation">)</span> 以及单体内置对象<span class="token punctuation">(</span>Global、Math<span class="token punctuation">)</span>等）


<span class="token comment">## 数据类型判断</span>
<span class="token number">1</span>. <span class="token variable"><span class="token variable">\`</span>typeof<span class="token variable">\`</span></span>：主要用于基础数据类型的判定，其中数组、对象、null都会被判断为object，但function还是会判断出为function类型。
<span class="token number">2</span>. <span class="token variable"><span class="token variable">\`</span>instanceof<span class="token variable">\`</span></span>：只能正确判定引用数据类型，而不能判断基本数据类型。
				其内部运行机制是判断一个对象在其原型链中依次向下查询栏能否找到该类型的原型<span class="token punctuation">(</span>构造函数的prototype属性<span class="token punctuation">)</span>
<span class="token number">3</span>. <span class="token variable"><span class="token variable">\`</span>constructor<span class="token variable">\`</span></span>：一是判断数据的类型，二是对象实例通过 <span class="token variable"><span class="token variable">\`</span>constrcutor<span class="token variable">\`</span></span> 对象访问它的构造函数。
				需要注意，如果创建一个对象来改变它的原型，<span class="token variable"><span class="token variable">\`</span>constructor<span class="token variable">\`</span></span>就不能用来判断数据类型
<span class="token number">4</span>. <span class="token variable"><span class="token variable">\`</span>Object.prototype.toString.call<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>：使用 Object 对象的原型方法 toString 来判断数据类型
封装方法获取所有类型：<span class="token variable"><span class="token variable">\`</span>const getType <span class="token operator">=</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> Object.prototype.toString.call<span class="token punctuation">(</span>obj<span class="token punctuation">)</span>.slice<span class="token punctuation">(</span><span class="token number">8</span>, -1<span class="token punctuation">)</span><span class="token variable">\`</span></span>


<span class="token comment">## 判断数组的类型</span>
- 通过Object.prototype.toString.call<span class="token punctuation">(</span><span class="token punctuation">)</span>：<span class="token variable"><span class="token variable">\`</span>Object.prototype.toString.call<span class="token punctuation">(</span>obj<span class="token punctuation">)</span>.slice<span class="token punctuation">(</span><span class="token number">8</span>,-1<span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">&#39;Array&#39;</span><span class="token variable">\`</span></span>
- 通过constructor判断：<span class="token variable"><span class="token variable">\`</span>obj.constructor <span class="token operator">==</span><span class="token operator">=</span> Array<span class="token variable">\`</span></span>
- 通过instanceof做判断：<span class="token variable"><span class="token variable">\`</span>obj instanceof Array<span class="token variable">\`</span></span>
- 通过ES6的Array.isArray<span class="token punctuation">(</span><span class="token punctuation">)</span>判断：<span class="token variable"><span class="token variable">\`</span>Array.isArrray<span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token variable">\`</span></span>
- 通过原型链判断：<span class="token variable"><span class="token variable">\`</span>obj.__proto__ <span class="token operator">==</span><span class="token operator">=</span> Array.prototype<span class="token variable">\`</span></span>
- 通过Array.prototype.isPrototypeOf：<span class="token variable"><span class="token variable">\`</span>Array.prototype.isPrototypeOf<span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token variable">\`</span></span>



<span class="token comment">## null 和 undefined 的区别</span>
- null 和 undefined 的共同点：都是基本类型，数据保存在栈中，且在 <span class="token keyword">if</span> 判断语句中值都为 false。
- null 表示变量声明未赋值，null 表示空对象。
- null 主要作用：
		<span class="token number">1</span>. 解除对象引用，便于垃圾回收。
		<span class="token number">2</span>. 作为对象原型链的终点。
		<span class="token number">3</span>. 作为函数参数表示该函数的参数是正常或意料之中的值空缺。
		<span class="token number">4</span>. null转换为数值为<span class="token variable"><span class="token variable">\`</span><span class="token number">0</span><span class="token variable">\`</span></span>。
- undefined 主要作用：
		<span class="token number">1</span>. 判断变量是否声明。
		<span class="token number">2</span>. 函数调用应提供的参数没有提供，该参数值为undefined。
		<span class="token number">3</span>. 对象中没有赋值的属性的属性值为undefined。
		<span class="token number">4</span>. 函数默认返回值为undefined。
		<span class="token number">5</span>. undefined转换为数值为<span class="token variable"><span class="token variable">\`</span>NaN<span class="token variable">\`</span></span>。
		
		

<span class="token comment">## 垃圾回收机制</span>
标记清除法：当变量进入执行环境时，被标记为 <span class="token string">&quot;进入环境&quot;</span>，当变量离开执行环境时，会被标记为 <span class="token string">&quot;离开环境&quot;</span>，垃圾回收器会销毁那些带标记的值并回收它们所占用的内存空间。
引用计数法：当前内存内占用一次，计数累加一次，移除占用就减1，减到0时，浏览器就会回收它。


<span class="token comment">## 闭包</span>
- 闭包是指有权访问另一个函数作用域中变量的函数<span class="token punctuation">(</span>常见的是在函数内部创建函数调用该函数的<span class="token punctuation">)</span>
- 闭包用途：在函数外部能访问到函数内部的变量，函数执行完后变量对象继续保存在内存中，不会被回收掉。
- 闭包的缺点：不会自动销毁，所以可能会导致内存泄漏，因此可以在使用完成后将变量对象定义为null，使得js垃圾回收机制回收该变量。
- 闭包的应用场景：函数柯里化、立即执行函数、防抖节流

<span class="token comment">## this 指向</span>
<span class="token number">1</span>. 普通函数、定时器函数、立即执行函数的 this 指向 window。
<span class="token number">2</span>. 以对象方法调用时 this 指向对象本身。
<span class="token number">3</span>. 构造函数的 this 指向实例对象。
<span class="token number">4</span>. 绑定事件函数的 this 指向函数的调用者。
<span class="token number">5</span>. 还可通过 call、bind、apply 改变 this 的指向，但它们区别是传参方式或执行时间会有所不同。


<span class="token comment">## call/apply/bind</span>
- 基于 Function.prototype 上的 apply/call/bind 调用模式，这三个方法都可以显示的指定调用函数的 this 指向。
- apply<span class="token punctuation">(</span><span class="token punctuation">)</span>：立即调用函数，接收参数必须是数组<span class="token punctuation">(</span>伪数组<span class="token punctuation">)</span>，返回undefined
- call<span class="token punctuation">(</span><span class="token punctuation">)</span>：立即调用函数，接收参数列表，返回undefined
- bind<span class="token punctuation">(</span><span class="token punctuation">)</span>：不会立即调用，传入一个对象，返回一个 this 绑定了传入对象的新函数，这个函数的 this 指向除了使用 new 时会被改变，其它情况下都不会改变。


<span class="token comment">## Promise</span>
- Promise是异步编程的一种解决方案，是一个对象，可以获取异步操作的消息，改善了回调地狱问题。
- Promise有等待、满足和拒绝状态，且状态不可变
- promise.any：只要一个成功就返回成功，如果所有的都是失败，则失败；如果any接收的是一个非promise数组，则返回成功
- promise.race：看第一个执行完成的promise，且状态跟第一个执行完成的状态一致；一般用作超时处理
- promise.all：所有执行成功才会返回成功，否则返回失败
- async/await：其实是generator的语法糖，能优化then链，看似是同步，实则异步；await等待async函数的返回值，若等到的结果为一个Promise，则会阻塞后面的代码，等着Promise对象resolve，然后得到resolve的值作为await表达式的运算结果。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dom节点增删改查" tabindex="-1"><a class="header-anchor" href="#dom节点增删改查"><span>DOM节点增删改查</span></a></h3><blockquote><p><strong>查找节点</strong>：<code>getElementById()、getElementsByClassName()、getElementsByTagName()、querySelector()、querySelectorAll()</code></p><p><strong>创建节点</strong>：<code>createElement()</code></p><p><strong>插入节点：</strong></p><ul><li><code>appendChild()</code>：子节点末尾添加</li><li><code>insertBefore()</code>：同级指定位置添加，但需要知道父节点</li></ul><p><strong>替换节点</strong>：<code>replaceChild(newChild, oldChild)</code>：第一个为要插入的结点，第二个为要替换的结点</p><p><strong>移除节点</strong>：<code>removeChild()</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> newNode <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>newNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> newNode<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> oldNode<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">replaceChild</span><span class="token punctuation">(</span>newNode<span class="token punctuation">,</span>oldNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> element<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">querySeletor</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>综合案例</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>DOM CRUD<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token doc-comment comment">/**
       * 查找节点
       * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">name</span>
       * name: id,class,tagname
       * 调用示例 findNode(&#39;#root&#39;)或者findNode(&#39;div&#39;)
       */</span>
      <span class="token keyword">const</span> <span class="token function-variable function">findNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token doc-comment comment">/**
       * 创建一个节点
       * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> tagName, attrObj
       * name: 标签名
       * attrObj: 属性名
       * 调用示例: createNode(&#39;div&#39;), createNode(&#39;div&#39;,<span class="token punctuation">{</span>id:&#39;first&#39;,innerHTML:&#39;helloworld&#39;<span class="token punctuation">}</span>)
       */</span>
      <span class="token keyword">const</span> <span class="token function-variable function">createNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">tagName<span class="token punctuation">,</span> attrObj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> node <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>tagName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> attrObj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          node<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> attrObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> node<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token doc-comment comment">/**
       * 插入一个节点
       * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> parentNode,newNode
       * parentNode: 要插入的父节点
       * newNode: 要插入的节点
       * 调用示例: insertNode(root,node2)
       */</span>
      <span class="token keyword">const</span> <span class="token function-variable function">insertNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">parentNode<span class="token punctuation">,</span> newNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// appendChild</span>
        <span class="token comment">// insertBefore</span>
        parentNode<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token doc-comment comment">/**
       * 替换一个节点
       * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> parentNode,newNode,oldNode
       * parentNode: 要替换节点的父节点
       * newNode: 替换后的节点
       * oldNode: 替换前的节点
       * 调用示例: replaceNode(root,node1,node2);
       * 注意：第二个参数和第三个参数不可调换位置
       */</span>
      <span class="token keyword">const</span> <span class="token function-variable function">replaceNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">parentNode<span class="token punctuation">,</span> newNode<span class="token punctuation">,</span> oldNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parentNode<span class="token punctuation">.</span><span class="token function">replaceChild</span><span class="token punctuation">(</span>newNode<span class="token punctuation">,</span> oldNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token doc-comment comment">/**
       * 移除一个节点
       * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> sourceNode,targetNode
       * sourceNode: 要移除节点的父节点
       * targetNode: 需要被移除的节点
       * 调用示例: removeNode(root,node1);
       */</span>
      <span class="token keyword">const</span> <span class="token function-variable function">removeNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">sourceNode<span class="token punctuation">,</span> targetNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sourceNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>targetNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token doc-comment comment">/**
       * 渲染一段dom
       * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">node</span> htmlStr
       * node: 需要插入的父节点
       * htmlStr: dom字符串
       * 调用示例: renderDom(findNode(&#39;#root&#39;),&#39;&lt;div id=&quot;myDiv&quot;&gt;myDiv&lt;/div&gt;&#39;);
       */</span>
      <span class="token keyword">const</span> <span class="token function-variable function">renderDom</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> htmlStr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> htmlStr<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token comment">//测试</span>
      <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">findNode</span><span class="token punctuation">(</span><span class="token string">&quot;#root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> node1 <span class="token operator">=</span> <span class="token function">createNode</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;n1&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">innerHTML</span><span class="token operator">:</span> <span class="token string">&quot;节点1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> node2 <span class="token operator">=</span> <span class="token function">createNode</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;n2&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">innerHTML</span><span class="token operator">:</span> <span class="token string">&quot;节点2&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> node3 <span class="token operator">=</span> <span class="token function">createNode</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;n3&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">innerHTML</span><span class="token operator">:</span> <span class="token string">&quot;节点3&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> node4 <span class="token operator">=</span> <span class="token function">createNode</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;n4&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">innerHTML</span><span class="token operator">:</span> <span class="token string">&quot;节点4&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> htmlStr <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div id=&quot;myDiv&quot;&gt;mydiv&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

      <span class="token comment">//  insertNode(root,node1);</span>
      <span class="token comment">//  insertNode(root,node2);</span>
      <span class="token comment">//  insertNode(root,node3);</span>

      <span class="token comment">// replaceNode(root,node4,node1);</span>

      <span class="token comment">// removeNode(root,node1)</span>

      <span class="token function">renderDom</span><span class="token punctuation">(</span><span class="token function">findNode</span><span class="token punctuation">(</span><span class="token string">&quot;#root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> htmlStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="冒泡事件" tabindex="-1"><a class="header-anchor" href="#冒泡事件"><span>冒泡事件</span></a></h3><blockquote><ul><li>**不支持冒泡的事件：**focus、blur、mouseenter、mouseleave、load、unload、resize</li><li>**支持冒泡的事件：**scroll、click</li><li>addEventListener的第三个参数默认为false，在冒泡执行；true为在捕获时执行（即可理解为是否在捕获时执行）</li></ul></blockquote><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件"><span>事件</span></a></h3><blockquote><ul><li><p>事件捕获：是从document到触发事件的那个节点，即自上而下的去触发事件</p></li><li><p>事件冒泡：IE提出的事件流，和事件捕获相反，即事件开始时由<strong>最具体的元素接收，然后逐级向上传播到较为不具体的节点，是由下而上的去触发事件</strong></p></li><li><p><strong>事件委托：事件委托是利用事件冒泡，只指定一个事件处理程序来管理某一类型的所有事件。</strong></p></li><li><p><strong>为什么要用事件委托？</strong></p><p>1.在JavaScript中添加到页面上的事件处理程序的个数直接关系到页面的整体运行性能。为什么呢？因为，每个事件处理函数都是对象，对象会占用内存，内存中的对象越多，性能就越差。此外，必须事先指定所有的事件处理程序而导致的DOM访问次数，会延迟整个页面的交互就绪时间。</p><p>2.对有很多个数据的表格以及很长的列表逐个添加事件，简直就是噩梦。所以事件委托，能极大地提高页面的运行性能，减少开发人员的工作量。</p></li></ul></blockquote><h3 id="类型转换-判断" tabindex="-1"><a class="header-anchor" href="#类型转换-判断"><span>类型转换/判断</span></a></h3><blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// &quot;&quot;、[]、0的数据类型转换</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>	<span class="token comment">// true</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>	<span class="token comment">// true</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>	<span class="token comment">// false</span>

<span class="token operator">!</span><span class="token operator">!</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>	<span class="token comment">// false</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>	<span class="token comment">// false</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>	<span class="token comment">// true</span>

<span class="token operator">!</span><span class="token operator">!</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>		<span class="token comment">// true</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>		<span class="token comment">// false</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>	<span class="token comment">// false</span>
注意：<span class="token punctuation">[</span><span class="token punctuation">]</span> 转为字符串时是 <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> 转为数字是 <span class="token number">0</span><span class="token punctuation">,</span> 转为布尔值是 <span class="token boolean">true</span>


<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token operator">!</span><span class="token punctuation">[</span><span class="token punctuation">]</span>	<span class="token comment">// true</span>
<span class="token operator">!</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token comment">// true</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span>	<span class="token comment">// true</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>	<span class="token comment">// false</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>	<span class="token comment">// false</span>
<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span>	<span class="token comment">// true</span>
<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">==</span> <span class="token boolean">false</span>	<span class="token comment">//  false</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">false</span> <span class="token comment">// true</span>

<span class="token keyword">undefined</span> <span class="token operator">==</span> <span class="token keyword">undefined</span>	<span class="token comment">//true</span>
<span class="token keyword">undefined</span> <span class="token operator">==</span> <span class="token keyword">null</span>	<span class="token comment">// true</span>
<span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">null</span>	<span class="token comment">// true</span>
<span class="token number">NaN</span> <span class="token operator">==</span> <span class="token keyword">null</span>		<span class="token comment">// false</span>
<span class="token number">Infinity</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">===</span> <span class="token number">Infinity</span> <span class="token comment">// true</span>

<span class="token comment">// 先比较 第一位字符串，如果为true，则继续比较第二位</span>
<span class="token string">&quot;abc&quot;</span> <span class="token operator">&gt;</span> <span class="token string">&quot;b&quot;</span>	<span class="token comment">// false</span>
<span class="token string">&quot;abc&quot;</span> <span class="token operator">&gt;</span> <span class="token string">&quot;aad&quot;</span>	<span class="token comment">// true</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>	<span class="token comment">// false</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span>	<span class="token comment">// true</span>

<span class="token comment">// 需要一个小数点作为隔开</span>
<span class="token number">3.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 解析成 (3.)toString() 报错</span>
<span class="token number">3.</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 解析成 (3.).toString() &quot;3&quot;</span>
<span class="token number">3.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 解析成 (3.)..toString() 报错</span>
<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	<span class="token comment">// &quot;3&quot;</span>


Function <span class="token keyword">instanceof</span> <span class="token class-name">Object</span>	<span class="token comment">// true</span>
Object <span class="token keyword">instanceof</span> <span class="token class-name">Function</span>	<span class="token comment">// true</span>


<span class="token keyword">const</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">NaN</span><span class="token punctuation">,</span><span class="token number">NaN</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>set<span class="token punctuation">.</span>size<span class="token punctuation">)</span>  <span class="token comment">// 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化"><span>模块化</span></a></h3><blockquote><h3 id="cmd与amd" tabindex="-1"><a class="header-anchor" href="#cmd与amd"><span>CMD与AMD</span></a></h3><blockquote><ul><li>CMD依赖就近，SeaJS遵循CMD规范为通用模块规范</li><li>AMD依赖前置，RequireJS遵循AMD规范为异步模块规范</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// CMD Common Moudle Definition</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./a&quot;</span><span class="token punctuation">)</span>
  a<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./b&quot;</span><span class="token punctuation">)</span>
  b<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// AMD Asyncchronous Module Definition</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;./a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./b&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	a<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	b<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote></blockquote><h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型"><span>数据类型</span></a></h3><blockquote><h3 id="数据存储位置" tabindex="-1"><a class="header-anchor" href="#数据存储位置"><span><strong>数据存储位置</strong></span></a></h3><ul><li>原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储</li><li>引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。</li></ul><p>堆和栈的概念存在于数据结构和操作系统内存中，在数据结构中：</p><ul><li>在数据结构中，栈中数据的存取方式为先进后出。</li><li>堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。</li></ul><p>在操作系统中，内存被分为栈区和堆区：</p><ul><li>栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。</li><li>堆区内存一般由开发着分配释放，若开发者不释放，程序结束时可能由垃圾回收机制回收。</li></ul></blockquote><h3 id="计算问题" tabindex="-1"><a class="header-anchor" href="#计算问题"><span>计算问题</span></a></h3><blockquote><h3 id="为什么0-1-0-2-0-3-如果让他们相等" tabindex="-1"><a class="header-anchor" href="#为什么0-1-0-2-0-3-如果让他们相等"><span><strong>为什么0.1+0.2 !== 0.3，如果让他们相等？</strong></span></a></h3><ul><li>因为计算机是通过二进制的方式存储数据，Number类型相加的实现遵循IEEE 754标准，使用64位固定长度来表示，也就是标准的double双精度浮点数。在二进制科学表示法中，双精度浮点数的小数部分最多只能保留52位，再加上前面的1，其实就是保留53位有效数字，剩余的需要舍去，遵从“0舍1入”的原则</li><li>可通过Math.toFixed()函数对结果四舍五入，<code>(0.1 + 0.2).toFixed(2)</code></li></ul><h3 id="和-的区别" tabindex="-1"><a class="header-anchor" href="#和-的区别"><span><strong>== 和 === 的区别</strong></span></a></h3><ul><li>**==<strong>如果两边变量的类型不同，会类型转换后再比较；</strong>===**会直接判断，如果类型不同，则直接返回false <ul><li>首先会判断两者类型是否相同，相同则比较两者的大小；</li><li>若类型不同，就会进行类型转换；</li><li>会先判断是否在对比 <code>null</code> 和 <code>undefined</code>，是的话就会返回 <code>true</code></li><li>判断两者类型是否为 <code>string</code> 和 <code>number</code>，是的话就会将字符串转换为 <code>number</code></li><li>判断其中一方是否为 <code>boolean</code>，是的话就会把 <code>boolean</code> 转为 <code>number</code> 再进行判断</li><li>判断其中一方是否为 <code>object</code> 且另一方为 <code>string</code>、<code>number</code> 或者 <code>symbol</code>，是的话就会把 <code>object</code> 转为原始类型再进行判断</li></ul></li></ul><h3 id="数字类型转换" tabindex="-1"><a class="header-anchor" href="#数字类型转换"><span><strong>数字类型转换</strong></span></a></h3><ul><li>Undefined 类型的值转换为 NaN。</li><li>Null 类型的值转换为 0。</li><li>Boolean 类型的值，true 转换为 1，false 转换为 0。</li><li>String 类型的值转换如同使用 Number() 函数进行转换，如果包含非数字值则转换为 NaN，空字符串为 0。</li><li>Symbol 类型的值不能转换为数字，会报错。</li><li>对象（包括数组）会首先被转换为相应的基本类型值，如果返回的是非数字的基本类型值，则再遵循以上规则将其强制转换为数字</li><li>假值的布尔类型的转换结果为false，假值有：<code>空格、undefined、null、false、+0、-0、NaN、&quot;&quot;</code></li></ul><h3 id="转换规则" tabindex="-1"><a class="header-anchor" href="#转换规则"><span><strong>转换规则</strong></span></a></h3><ul><li>当拿不到真实数据时，就会调用<code>valueOf()</code>和<code>toString()</code>方法</li><li>为了将值转换为相应的基本类型值，抽象操作 ToPrimitive 会首先（通过内部操作 DefaultValue）检查该值是否有valueOf()方法。如果有并且返回基本类型值，就使用该值进行强制类型转换。如果没有就使用 toString() 的返回值（如果存在）来进行强制类型转换。</li><li>如果 valueOf() 和 toString() 均不返回基本类型值，会产生 TypeError 错误</li></ul><h3 id="和-操作符的返回值" tabindex="-1"><a class="header-anchor" href="#和-操作符的返回值"><span><strong>|| 和 &amp;&amp; 操作符的返回值</strong></span></a></h3><ul><li>|| 和 &amp;&amp; 首先会对第一个操作数执行条件判断，如果其不是布尔值就先强制转换为布尔类型，然后再执行条件判断</li><li>对于 || 来说，如果条件判断结果为 true 就返回第一个操作数的值，如果为 false 就返回第二个操作数的值。</li><li>&amp;&amp; 则相反，如果条件判断结果为 true 就返回第二个操作数的值，如果为 false 就返回第一个操作数的</li><li>注意：|| 和 &amp;&amp; 返回它们其中一个操作数的值，而非条件判断的结果</li></ul><h3 id="隐式类型转换" tabindex="-1"><a class="header-anchor" href="#隐式类型转换"><span><strong>隐式类型转换</strong></span></a></h3><ol><li>当<code>type</code>为<code>number</code>时规则如下： <ul><li>调用<code>obj</code>的<code>valueOf</code>方法，如果为原始值，则返回，否则下一步；</li><li>调用<code>obj</code>的<code>toString</code>方法，后续同上；</li><li>抛出<code>TypeError</code> 异常。</li></ul></li><li>当<code>type</code>为<code>string</code>时规则如下： <ul><li>调用<code>obj</code>的<code>toString</code>方法，如果为原始值，则返回，否则下一步；</li><li>调用<code>obj</code>的<code>valueOf</code>方法，后续同上；</li><li>抛出<code>TypeError</code> 异常。</li></ul></li><li>两者的主要区别在于调用<code>toString</code>和<code>valueOf</code>的先后顺序。默认情况下： <ul><li>如果对象为 Date 对象，则<code>type</code>默认为<code>string</code>；</li><li>其他情况下，<code>type</code>默认为<code>number</code>：<code>var objToNumber = value =&gt; Number(value.valueOf().toString())</code></li></ul></li></ol><ul><li><strong><code>+</code>操作符</strong>：的两边有至少一个<code>string</code>类型变量时，两边的变量都会被隐式转换为字符串；其他情况下两边的变量都会被转换为数字</li><li><strong><code>-</code>、<code>*</code>、<code>\\</code>操作符</strong>：会转换为数字类型</li></ul><h4 id="操作符优先级" tabindex="-1"><a class="header-anchor" href="#操作符优先级"><span>操作符优先级</span></a></h4><blockquote><p>算数操作符 &gt; 比较操作符 &gt; 布尔(逻辑)操作符 &gt; “=”赋值运算符</p><p>逻辑与<code>&amp;&amp;</code>优先级高于逻辑或<code>||</code></p></blockquote></blockquote><h3 id="深浅拷贝" tabindex="-1"><a class="header-anchor" href="#深浅拷贝"><span><strong>深浅拷贝</strong></span></a></h3><blockquote><ul><li>引用赋值是地址的赋值，将对象指针赋值给一个变量，将此变量指向对象</li><li>浅拷贝只会将对象的各个属性进行依次复制，并不会进行递归复制；而JS存储对象都是存地址的，所以会导致共用同一内存地址</li><li>深拷贝不仅复制对象的各个属性，同时也将原对象各个属性所包含的子对象也递归地复制到新对象上（不共用内存地址）</li><li>浅拷贝实现 <ul><li>Object.assign()</li><li>扩展运算符</li><li>for…in遍历赋值</li><li>Array.from()，只适用于类数组对象并返回新数组</li><li>Array.prototype.concat()，合并多个数组并返回新数组</li><li>Array.prototype.slice()，截取并返回新数组</li></ul></li><li>深拷贝实现 <ul><li>JSON.parse()和JSON.stringify()：但能处理的只能被JSON直接表示的数据结构（Number、String、Boolean、Array、扁平对象），会忽略Undefined、symbol、不能序列化函数、不能解决循环引用的对象</li><li>浅拷贝+递归：当遇到子对象是引用对象时，采用递归层层复制</li></ul></li></ul></blockquote><h3 id="es6新特性" tabindex="-1"><a class="header-anchor" href="#es6新特性"><span>ES6新特性</span></a></h3><blockquote><h3 id="var、let和const的区别" tabindex="-1"><a class="header-anchor" href="#var、let和const的区别"><span><strong>var、let和const的区别</strong></span></a></h3><ul><li>var会变量提升和重复声明，let和const不会</li><li>let和const存在暂时性死区和块级作用域，var没有（暂存性死区：声明前变量不可用）</li><li>const必须设置初始值，var和let可以不用(此时值默认为undefined)</li><li>通过Object.definePrototype限制属性不可修改或冻结对象，可<strong>使得通过const定义的对象里面的数据不能修改</strong></li><li>声明变量方法有六种：<code>var、function、let、const、import、class</code></li></ul><h3 id="var-函数和变量提升" tabindex="-1"><a class="header-anchor" href="#var-函数和变量提升"><span>var(函数和变量提升)</span></a></h3><ul><li>通过var定义的声明会提升到作用域的最顶部</li><li>同一个变量只会声明一次，其他的会被忽略或覆盖</li><li>函数声明的优先级高于变量声明的优先级，并且函数声明和函数定义的部分一起被声明</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> 	<span class="token comment">// 输出 ƒ a() { var a = 2;}</span>
<span class="token keyword">var</span> a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> 
<span class="token keyword">var</span> <span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> 
<span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// 输出 ƒ () { var a = 3; }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">a</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 编译后</span>
<span class="token keyword">function</span> <span class="token function">a</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>                      <span class="token comment">// 函数提升在最前面</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> a                                <span class="token comment">// 变量提升跟在后面</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>                      <span class="token comment">// 打印 a () { console.log(&#39;function&#39;)}</span>
<span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                    						<span class="token comment">// 打印 function</span>
<span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>                    <span class="token comment">// 变量赋值</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>                      <span class="token comment">// a () { console.log(&#39;a&#39;)}</span>
<span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                    						<span class="token comment">//  打印 a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote></blockquote><h3 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数"><span>箭头函数</span></a></h3><blockquote><ul><li>箭头函数不会创建自己的this，所以没有自己的this；它会捕获自己在<strong>定义时</strong>（不是调用时）所处的外层执行环境（作用域链的上一层）的this并继承，且该this用不会改变</li><li>注意：定义对象的大括号<code>{}</code>是无法形成一个单独的执行环境的，它依旧是处于全局执行环境中，所以在对象中的箭头函数的this仍然是指向window</li><li>call、bind、apply无法改变箭头函数this的指向；因为call、bind、apply方法是动态修改函数执行时this的指向，但由于箭头函数的this定义时就已确定且永远不，所以无法修改，但此操作不会报错</li><li>箭头函数不能作为构造函数使用，即不能通过new的方式来创建箭头函数；因为箭头函数this是继承外城执行环境的，且this指向永远不会随在哪调用、被谁调用而改变，所以箭头函数不能作为构造函数使用，或者说构造函数不能定义成箭头函数，否则用new调用时会报错</li><li>箭头函数自身没有arguments，所以在箭头函数中访问的arguments实际是外层函数的arguments值；可以使用rest参数(剩余参数)代替arguments对象，来访问箭头函数的参数列表</li><li>箭头函数不能用作Generator函数，不能使用yeild关键字</li><li>箭头函数位于构造函数内部，它定义生效时是在构造函数执行时；此时箭头函数所在的运行环境肯定是实例对象，所以this总是指向实例对象</li></ul></blockquote><h3 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数"><span>构造函数</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 构造函数</span>
- 构造函数是通过 new 关键字来生成对象实例，生成对象实例的过程也是通过构造函数给实例绑定this的过程，而箭头函数没有自己的this。
- 创建对象过程，new首先会创建一个空对象，并将这个空对象的<span class="token variable"><span class="token variable">\`</span>___propto__<span class="token variable">\`</span></span>指向构造函数的prototype，从而继承原型上的方法。
- 注意：箭头函数没有prototype。因此不能使用箭头函数作为构造函数，也就不能通过new操作符来调用箭头函数。


<span class="token comment">## ## 构造函数的new做了什么（new 实例化生成一个对象的过程）</span>
<span class="token number">1</span>. JS内部首先会生成一个对象。
<span class="token number">2</span>. 再将构造函数的原型链赋给实例对象 obj。
<span class="token number">3</span>. 使用 call 改变构造函数 this 指向，指向到实例对象 obj。
<span class="token number">4</span>. 将初始化完毕的新对象地址保存到等号左边的变量中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="类数组转换为数组" tabindex="-1"><a class="header-anchor" href="#类数组转换为数组"><span>类数组转换为数组</span></a></h3><blockquote><ul><li>通过 call 调用数组的 slice 方法来实现转换：<code>Array.prototype.slice.call(arrayLike)</code></li><li>通过 call 调用数组的 splice 方法来实现转换：<code>Array.prototype.splice.call(arrayLike, 0)</code></li><li>通过 apply 调用数组的 concat 方法来实现转换：<code>Array.prototype.concat.apply([], arrayLike)</code></li><li>通过 Array.from 方法来实现转换：<code>Array.from(arrayLike)</code></li></ul></blockquote><h3 id="迭代数组方法" tabindex="-1"><a class="header-anchor" href="#迭代数组方法"><span>迭代数组方法</span></a></h3><blockquote><ul><li><strong>forEach()</strong>：不改变原数组，没有返回值（不可通过break和return中断循环）</li><li><strong>map()</strong>：当数组中元素是值类型时不改变原数组，当数组是引用类型则可以改变原数组。通过return返回调用函数处理后的新数组，可链式调用(但是可以在回调函数执行时改变原数组)</li><li><strong>filter()</strong>：过滤数组，返回包含符合条件的元素的数组，可链式调用</li><li><strong>for..of</strong>：遍历具有迭代器对象的属性，返回的是数组元素、对象的属性值，不能遍历普通obj对象，将异步循环变成同步循环</li><li><strong>every()、some()</strong>：some()只要有一个符合条件便返回ture，而every()需要每条数据都符合条件才返回true，否则返回false</li><li><strong>find()、findIndex()</strong>：find()返回的是第一个符合条件的值，findIndex()返回的是第一个返回条件的值的索引值</li><li><strong>reduce()、reduceRight()</strong>：reduce()对数组正序操作，reduceRight()对数组逆序操作，默认从数组第二个值开始，可以通过在后面定义初始条件以此从第一个值开始</li></ul></blockquote><h3 id="for-in和for-of的区别" tabindex="-1"><a class="header-anchor" href="#for-in和for-of的区别"><span>for in和for of的区别</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## for…in（ES3）和 for…of（ES6）</span>
- <span class="token variable"><span class="token variable">\`</span>for<span class="token punctuation">..</span>.in<span class="token variable">\`</span></span>遍历获取的是对象的键名<span class="token punctuation">(</span>索引<span class="token punctuation">)</span>，<span class="token variable"><span class="token variable">\`</span>for<span class="token punctuation">..</span>.of<span class="token variable">\`</span></span>遍历获取的是对象的键值
  - <span class="token variable"><span class="token variable">\`</span>for…in<span class="token variable">\`</span></span> 遍历数组时获取的是索引值且有可能不按照实际数组内部顺序遍历，还会遍历原型链上可枚举的属性。
  - <span class="token variable"><span class="token variable">\`</span>for<span class="token punctuation">..</span>.of<span class="token variable">\`</span></span> 只遍历数组内的元素，而不包括数组的原型属性method和索引name
  
  
- 遍历对象键名通常使用 <span class="token variable"><span class="token variable">\`</span>for<span class="token punctuation">..</span>.in<span class="token variable">\`</span></span>，可在循环内部使用 <span class="token variable"><span class="token variable">\`</span>hasOwnProperty<span class="token variable">\`</span></span> 判断某属性是否是该对象的实例属性来控制是否遍历原型。还可通过ES5的<span class="token variable"><span class="token variable">\`</span>Object.keys<span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token variable">\`</span></span>获取对象的实例属性组成的数组<span class="token punctuation">(</span>不包括原型方法和属性<span class="token punctuation">)</span>
- <span class="token variable"><span class="token variable">\`</span>for<span class="token punctuation">..</span>.of<span class="token variable">\`</span></span> 可遍历 <span class="token string">&#39;数组、类数组对象，字符串、Set、Map 以及 Generator 对象&#39;</span> 等拥有迭代器对象的集合。因对象不存在迭代器对象所以无法遍历，若想迭代一个对象的属性，可用 <span class="token variable"><span class="token variable">\`</span>for<span class="token punctuation">..</span>in<span class="token variable">\`</span></span> 或内建 <span class="token variable"><span class="token variable">\`</span>Object.keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 方法转化为数组再进行遍历，或添加一个迭代器到对象中。
- <span class="token variable"><span class="token variable">\`</span>Reflect.ownKeys<span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token variable">\`</span></span>遍历对象：返回一个数组,包含对象自身的所有属性,不管属性名是Symbol或字符串,也不管是否可枚举。
- <span class="token variable"><span class="token variable">\`</span>Object.getOwnPropertyNames<span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token variable">\`</span></span>遍历对象：返回一个数组,包含对象自身的所有属性<span class="token punctuation">(</span>不含Symbol属性,但是包括不可枚举属性<span class="token punctuation">)</span>. 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="原型与原型链" tabindex="-1"><a class="header-anchor" href="#原型与原型链"><span>原型与原型链</span></a></h3><blockquote><ul><li>通过new出来的实例对象的<code>__proto__ </code>等于对象的prototype，<code>实例对象.__proto__ = 实例对象.constructor.prototype</code></li><li>使用后<code>hasOwnProperty()</code>方法来判断属性是否属于原型链的属性</li><li><code>__proto__</code>属性的作用：当对象查找一个属性时，如果没有在自身找到，则会通过<code>__proto__</code>属性逐级向上查找自身的原型，直到找到 Object.prototype 原型为 null 时查找停止，再往上找就相当于在null上取值，会报错。这种通过<code>__proto__</code>属性逐级向上查找原型链称为原型链</li><li>prototype属性的作用：让该函数所实例化的对象们都可以找到公用的属性和方法，即<code>f1.__proto__ === Foo.prototype</code></li><li>constructor属性的含义：指向该对象的构造函数，所有函数（此时看成对象）最终的构造函数都指向Function</li><li>原型继承：一个对象可以使用另一个对象的属性或者方法称为继承。具体是通过将这个对象的原型设置为另外一个对象，这样根据原型链的规则，如果查找一个对象属性且在自身不存在时，就会查找另外一个对象，相当于一个对象可以使用另外一个对象的属性和方法了</li></ul></blockquote><h3 id="垃圾回收" tabindex="-1"><a class="header-anchor" href="#垃圾回收"><span>垃圾回收</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 浏览器垃圾回收机制</span>
<span class="token number">1</span>. 项目中如果存在大量不被释放的内存（堆、栈、上下文），页面性能会变得很慢。
		当某些代码操作不被合理释放，就会造成内存泄露。
		我们尽可能减少使用闭包，因为它会消耗内存。

<span class="token number">2</span>. 浏览器垃圾回收机制/内存回收机制：
浏览器的Javascript具有自动垃圾回收机制<span class="token punctuation">(</span>GC:Garbage Collecation<span class="token punctuation">)</span>，垃圾收集器会定期（周期性）找出那些不在继续使用的变量，然后释放其内存。

<span class="token number">3</span>. 垃圾回收的方法
- 标记清除法：当变量进入执行环境时，被标记为 <span class="token string">&quot;进入环境&quot;</span>，当变量离开执行环境时，会被标记为 <span class="token string">&quot;离开环境&quot;</span>，垃圾回收器会销毁那些带标记的值并回收它们所占用的内存空间。
- 引用计数法：当前内存内占用一次，计数累加一次，移除占用就减1，减到0时，浏览器就会回收它。

<span class="token number">4</span>. 优化手段：内存优化；手动释放：取消内存的占用即可。
- 对数组进行优化：在清空一个数组时，最简单的方法是给其赋值 <span class="token variable"><span class="token variable">\`</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token variable">\`</span></span>，但是与此同时会创建一个新的空对象；可以将数组的长度设置为0，以此来达到清空数组的目的。
- 对 Object 进行优化：对象尽量复用，对于不再使用的对象，将其设置为 null，垃圾回收机制会自动回收该变量。
- 对函数进行优化：在循环中的函数表达式，如果可以复用，尽量放在函数外部。

<span class="token number">5</span>. 内存泄露
在 JS 中，常见的内存泄露主要有 <span class="token number">4</span> 中，意外创建的全局变量、闭包、已删除DOM的DOM元素的引用、未及时清除的定时器。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="手写函数" tabindex="-1"><a class="header-anchor" href="#手写函数"><span>手写函数</span></a></h3><blockquote><h3 id="手写防抖-节流函数" tabindex="-1"><a class="header-anchor" href="#手写防抖-节流函数"><span>手写防抖/节流函数</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@fn</span> 需要设置防抖的函数
 * <span class="token keyword">@wait</span> 等待的时间
*/</span>
<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait <span class="token operator">=</span> <span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait <span class="token operator">=</span> <span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">throttle</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">debounce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手写promise" tabindex="-1"><a class="header-anchor" href="#手写promise"><span>手写Promise</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyPromise</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>resolvedCallbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>rejectedCallbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token string">&#39;PENDING&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token string">&#39;PENDING&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token string">&#39;RESOLVED&#39;</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>resolvedCallbacks<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">cb</span> <span class="token operator">=&gt;</span> <span class="token function">cb</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token string">&#39;PENDING&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token string">&#39;REJECTED&#39;</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>rejectedCallbacks<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">cb</span> <span class="token operator">=&gt;</span> <span class="token function">cb</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">onFulfilled<span class="token punctuation">,</span> onRejected</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token string">&#39;PENDING&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>resolvedCallbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>onFulfilled<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>rejectedCallbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token string">&#39;RESOLVED&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">onFulfilled</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token string">&#39;REJECTED&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">onRejected</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手写promise-all" tabindex="-1"><a class="header-anchor" href="#手写promise-all"><span>手写Promise.all</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/***
 * 手写Promise.all
 *
 * 编写思维：
 * Promise.all返回的肯定是一个promise对象，所以使用 return new Promise((resolve, reject) =&gt; <span class="token punctuation">{</span><span class="token punctuation">}</span>)
 * 遍历传入的参数，用Promise.resolve()将参数“包一层”，使其变成一个Promise对象
 * 通过计数器resolve出去，每个内部promise对象决议后将计数器加一，并判断加以后的大小是否与传入的数量相等；
 * 如果相等则调用resolve()，如果任何一个promise对象失败，则调用reject()方法
 *
 * 注意：
 * Promise.all()接收的参数时一个可遍历的参数，所以未必是一个数组，可通过Array.from()转化
 * 使用for...of进行遍历，因为凡是可遍历的变量应该都是部署了iterator方法，使用for...of遍历最安全
 */</span>

Promise<span class="token punctuation">.</span><span class="token function-variable function">all</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">iterator</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//用于计数，当等于len时就resolve</span>
    len <span class="token operator">=</span> iterator<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
    res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//用于存放结果</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> iterator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>iterator<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//先转化为Promise对象</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>count <span class="token operator">===</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> promise1 <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> promise2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> promise3 <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>

Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>promise1<span class="token punctuation">,</span> promise2<span class="token punctuation">,</span> promise3<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">values</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手写promise-race" tabindex="-1"><a class="header-anchor" href="#手写promise-race"><span>手写Promise.race</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/* 谁先决议那么就返回谁，所以将all的计数器和逻辑判断全部去除掉就可以了 */</span>
Promise<span class="token punctuation">.</span><span class="token function-variable function">race</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">iterators</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> p <span class="token keyword">of</span> iterators<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> promise1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token string">&#39;one&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> promise2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span><span class="token punctuation">[</span>promise1<span class="token punctuation">,</span> promise2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Both resolve, but promise2 is faster</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手写proxy响应式改变数据" tabindex="-1"><a class="header-anchor" href="#手写proxy响应式改变数据"><span>手写Proxy响应式改变数据</span></a></h3><ul><li>之所以 Vue3.0 要使用 <code>Proxy</code> 替换原本的 API 原因在于 <code>Proxy</code> 无需一层层递归为每个属性添加代理，一次即可完成以上操作，性能上更好，并且原本的实现有一些数据更新不能监听到，但是 <code>Proxy</code> 可以完美监听到任何方式的数据改变，唯一缺陷就是浏览器的兼容性不好</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">onWatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> setBind<span class="token punctuation">,</span> getLogger</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">getLogger</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> property<span class="token punctuation">)</span>
      <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setBind</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> property<span class="token punctuation">)</span>
      <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token function">onWatch</span><span class="token punctuation">(</span>
  obj<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> property</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">监听到属性</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>property<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">改变为</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> property</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>property<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39; = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>target<span class="token punctuation">[</span>property<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
p<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">// 监听到属性a改变</span>
p<span class="token punctuation">.</span>a <span class="token comment">// &#39;a&#39; = 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="callback-promise-async-await三者区别" tabindex="-1"><a class="header-anchor" href="#callback-promise-async-await三者区别"><span>callback，Promise，async &amp;await三者区别</span></a></h3><blockquote><ul><li>callback 经过深层次的嵌套，会产生回调地狱，需手动检查err参数</li><li>promise 通过链式调用，直接在 then 中返回一个 promise 来进行成功之后的回调函数，用 catch 来做错误处理</li><li>async/await 则直接将其变成了同步的写法，既可以用.catch又可以用try-catch捕捉，简洁，可读性强</li><li><strong>注意：try…catch只能捕获同步函数的异常，不可以捕获promise异常</strong></li></ul><hr><ul><li>async/await是基于Promise实现的，是Generater的语法糖，将异步强行转换为同步处理，它返回的是一个Promise对象</li><li>async用于申明一个function是异步的，而await可认为是async await的简写，等待一个异步方法执行完成</li><li>async/await相对于Promise来说写法更加简洁</li><li>Promise的出现解决了传统的回调函数导致的回调地狱问题，但它的语法导致了它向纵向发展行成了一个回调链，遇到复杂的业务场景，这样的语法会不美观。而async await代码看起来会简洁些，使得异步代码看起来像同步代码，await的本质是可以提供等同“同步效果”的等待异步返回能力的语法糖</li><li>async await与promise一样是非阻塞的</li></ul></blockquote><h3 id="new生成一个对象的过程" tabindex="-1"><a class="header-anchor" href="#new生成一个对象的过程"><span>new生成一个对象的过程</span></a></h3><blockquote><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>var obj = new <span class="token function">Base</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
<span class="token selector">所做过程 ==&gt;: var obj =</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> obj.__proto__ = Base.prototype<span class="token punctuation">;</span> Base.<span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> 

1. 创建一个空对象
3. 将构造函数的原型链赋给obj	
4. 使用call改变构造函数this指向，指向obj对象
5. 将初始化完毕的新对象地址，保存到等号左边的变量中
	- 注意：在构造函数中是不用写return语句的，因为它会默认返回新创建的对象。
        但是如果在构造函数中写了return语句而且return的是一个对象，那么函数就会覆盖掉新创建的对象，而返回此对象；
        如果return的是基本类型如字符串、数字、布尔值等，那么函数会忽略掉return语句，还是返回新创建的对象。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><h3 id="跨域解决方法" tabindex="-1"><a class="header-anchor" href="#跨域解决方法"><span>跨域解决方法</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token number">1</span>、 通过jsonp跨域
<span class="token number">2</span>、 document<span class="token punctuation">.</span>domain <span class="token operator">+</span> iframe 跨域
<span class="token number">3</span>、 location<span class="token punctuation">.</span>hash <span class="token operator">+</span> iframe
<span class="token number">4</span>、 window<span class="token punctuation">.</span>name <span class="token operator">+</span> iframe 跨域
<span class="token number">5</span>、 postMessage跨域
<span class="token number">6</span>、 跨域资源共享（<span class="token constant">CORS</span>）
<span class="token number">7</span>、 nginx代理跨域
<span class="token number">8</span>、 nodejs中间件代理跨域
<span class="token number">9</span>、 WebSocket协议跨域
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="浏览器哪些地方用到异步" tabindex="-1"><a class="header-anchor" href="#浏览器哪些地方用到异步"><span>浏览器哪些地方用到异步</span></a></h3><blockquote><p>JS是一门脚本语言，他的执行顺序是自上到下的，浏览器只有一个javascript引擎，所以浏览器同时只能执行一个任务，那么异步操作的实现原理是什么呢？ 浏览器的javascript引擎是单线程的，但浏览器本身是多线程的，浏览器包含<strong>javascript引擎线程、界面渲染线程、浏览器事件触发线程、Http请求线程</strong> 所以触发异步操作时，会有单独的线程去做操作，javascript引擎线程不会受到阻塞，依然继续解析js代码。 <strong>浏览器用到异步的地方是：promise的回调函数、定时器和计时器的回调函数、process.nextTick</strong></p></blockquote><h3 id="浏览器事件循环" tabindex="-1"><a class="header-anchor" href="#浏览器事件循环"><span>浏览器事件循环</span></a></h3><blockquote><ol><li>首先<strong>执行同步代码</strong>(宏任务：<code>script、setTimeout、setInterval、setImmediate、I/O、UI rendering</code>)</li><li>当执行完所有同步代码后，执行栈为空，查询是否有异步代码需要执行</li><li><strong>执行所有微任务</strong>(<code>process.nextTick、promise、MutationObserver</code>)</li><li>当执行完所有微任务后，如有必要，会渲染页面</li><li>然后开始下一轮<code>Event Loop</code>，<strong>执行宏任务的异步代码</strong>，即<code>setTimeout、setInterval</code>中的回调函数</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>第一次事件循环中，JavaScript 引擎会把整个 script 代码当成一个宏任务执行，
执行完成之后，再检测本次循环中是否存在微任务，存在的话就依次从微任务的任务队列中读取执行完所有的微任务，
再读取宏任务的任务队列中的任务执行，再执行所有的微任务，如此循环。
<span class="token constant">JS</span> 的执行顺序就是每次事件循环中的宏任务<span class="token operator">-</span>微任务。

宏任务（macro<span class="token operator">-</span><span class="token function">task）包括：script</span><span class="token punctuation">(</span>整体代码<span class="token punctuation">)</span><span class="token punctuation">,</span> setTimeout<span class="token punctuation">,</span> setInterval<span class="token punctuation">,</span> setImmediate<span class="token punctuation">,</span> <span class="token constant">I</span><span class="token operator">/</span><span class="token constant">O</span><span class="token punctuation">,</span> <span class="token constant">UI</span> rendering。
微任务（micro<span class="token operator">-</span>task）包括：process<span class="token punctuation">.</span>nextTick<span class="token punctuation">,</span> Promises<span class="token punctuation">,</span> Object<span class="token punctuation">.</span>observe<span class="token punctuation">,</span> MutationObserver。

第一次时间循环，整段script代码作为宏任务进入主线程
遇到setTimeout，就会等到了指定的时间后将回调函数放入宏任务的任务队列中
遇到Promise，将then函数放入微任务的任务队列中
整个事件循环完成后，会去检测微任务的任务队列中是否存在任务，存在就执行
接着再到宏任务的任务队列中按顺序取出一个宏任务到栈中让主程序执行，那么此次循环中的宏任务就是setTimeout注册的回调函数，执行完这个回调函数，发现在这次循环中并不存在微任务，则准备进行下一次事件循环
检测到宏任务队列中已经没有要执行的任务，则结束事件循环
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="settimeout的运行机制" tabindex="-1"><a class="header-anchor" href="#settimeout的运行机制"><span>setTimeout的运行机制</span></a></h3><blockquote><p>在现有浏览器环境中，Javascript执行引擎是单线程的，主线程的语句和方法会阻塞定时任务的运行，在Javascript执行引擎之外，存在一个任务队列，当在代码中调用setTimeout()方法时，注册的延时方法会挂到浏览器内核其他模块处理，当延时方法到达触发条件，即到达设置的延时时间时，该模块再将要执行的方法添加至该模块的任务队列中。这一过程与执行引擎主线程独立，执行引擎在主线程方法执行完毕，到达空闲状态时，才会从该模块的任务队列中顺序提取任务来执行，这期间的时间，可能大于注册任务时设置的延时时间； 浏览器在空闲状态下，会不断的尝试从模块的任务队列中提取任务，这称为事件循环模型；</p></blockquote><h3 id="浏览器渲染原理" tabindex="-1"><a class="header-anchor" href="#浏览器渲染原理"><span>浏览器渲染原理</span></a></h3><blockquote><ul><li>渲染流程：<code>解析html以构建DOM树/CSS RULE TREE -&gt; 构建render树 -&gt; 布局render树 -&gt; 绘制render树</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>解析过程：
  <span class="token number">1.</span> <span class="token constant">DOM</span> Tree：浏览器会将<span class="token constant">HTML</span>解析成一个<span class="token constant">DOM</span>树
  <span class="token number">2.</span> <span class="token constant">CSS</span> rule tree：将<span class="token constant">CSS</span>解析成树形的数据结构
  <span class="token number">3.</span> Render Tree<span class="token operator">:</span> 根据<span class="token constant">DOM</span>树和<span class="token constant">CSSOM</span>来构造Render Tree
  	 此时浏览器已经能知道网页中有哪些节点、各个节点的<span class="token constant">CSS</span>定义以及他们的从属关系；
		 但并不知道节点的位置，需要依靠接下来的layout
  <span class="token number">4.</span> <span class="token function">layout：计算出每个节点在屏幕中的位置</span><span class="token punctuation">(</span>宽高、颜色等<span class="token punctuation">)</span>
  <span class="token number">5.</span> <span class="token function">绘制</span><span class="token punctuation">(</span>painting<span class="token punctuation">)</span>：即遍历render树，并使用<span class="token constant">UI</span>后端层绘制每个节点到页面上
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="http" tabindex="-1"><a class="header-anchor" href="#http"><span>http</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## . XML 与 html 的区别</span>
<span class="token number">1</span>. xml 是可扩展标记语言，类似 html，但与html不同的是，xml标签没有被预定义，需要自行定义标签。
<span class="token number">2</span>. xml 被设计用来传输和存储数据，其焦点是数据内容；
	xml 不是 html 的替代，html 被设计用来显示数据，其焦点是数据外观；
<span class="token number">3</span>. xml 具有自我描述性。



<span class="token comment">## . http 请求跨域问题</span>
- 跨域：是指浏览器不能执行其他网站的脚本，它是由浏览器的同源策略造成的。
- 同源策略：只要 <span class="token string">&#39;协议、域名、端口&#39;</span> 其中一个不同都会被当作不同的域，该策略是浏览器为了降低浏览器收到XSS、CSFR等攻击的安全机制，确保一个应用中的资源只能被本应用的资源访问。
- 同源的限制行为：
      Cookie、LocalStorage 和 IndexDB 无法读取；
      DOM与JS对象无法获取；
      AJAX请求不能有效发送。
- 跨域原理：通过各种方式避免浏览器的安全限制。
- 实现跨域的方法
    <span class="token number">1</span>. window.domain + iframe：父子域都设立同一域名
    <span class="token number">2</span>. window.name + iframe：iframe跨域+同一窗口共享window.name
    <span class="token number">3</span>. window.hash + iframe：iframe跨域+hash携带参数
    <span class="token number">4</span>. webpack配置的跨域：开发环境下使用 webpack 的 proxy
    <span class="token number">5</span>. JSONP：利用 script 可跨域调用脚本的特性
    <span class="token number">6</span>. CORS 跨域共享，配置响应头 Access-Control-Allow-Origin
    <span class="token number">7</span>. nginx 反向代理
    <span class="token number">8</span>. postMessage：窗口/页面通信
    <span class="token number">9</span>. websocket协议跨域


<span class="token comment">## . http 和 https 的区别</span>
- http 传输的数据都是明文<span class="token punctuation">(</span>未加密<span class="token punctuation">)</span>，网景公司设置了 ssl 协议来对 http 协议传输的数据进行加密处理，简单来说 https 协议是由 http 和 ssl 协议构建的可进行加密传输和身份认证的网络协议，比 http 协议的安全性更高。
- https 协议需要 ca 证书，费用较高
- http 是超文本传输协议，信息是明文传输，https 则是具有安全性的 ssl 加密传输协议
- http 协议的端口为80，https 的端口为443
- http 的链接是无状态的；https 协议是由 ssl+http 协议构建的可进行加密传输、身份认证的网络协议，比 http 协议安全


<span class="token comment">## . get 和 post 的区别</span>
- GET 和 POST 请求都是基于 TCP 连接的，但 get 是从指定的资源请求数据，post 是向指定的资源提交要被处理的数据。
    <span class="token number">1</span>. <span class="token string">&#39;浏览器页面回退&#39;</span>：GET 请求在浏览器回退是无害的，POST 请求则需要再次提交请求的表单信息。
    <span class="token number">2</span>. <span class="token string">&#39;历史记录&#39;</span>：GET 请求参数可保留在浏览器历史记录中，其 URL 地址也可被收藏，而POST无法保存。
    <span class="token number">3</span>. <span class="token string">&#39;数据缓存&#39;</span>：GET 请求会被浏览器主动缓存，而 POST 请求需要手动设置才行。
    <span class="token number">4</span>. <span class="token string">&#39;编码类型&#39;</span>：GET 请求只能进行 url 编码，而 POST 支持多种编码方式。
    <span class="token number">5</span>. <span class="token string">&#39;数据长度限制&#39;</span>：因为 URL 地址最大长度为 <span class="token number">2048</span> 个字符<span class="token punctuation">(</span>长度受限<span class="token punctuation">)</span>，所以 GET 请求在 URL 中传递的参数是有长度限制的；而 post 请求的参数信息存放在请求体，所以没有长度限制，也允许二进制数据。
    <span class="token number">6</span>. <span class="token string">&#39;数据类型限制&#39;</span>：GET 请求的参数数据类型只接受 ASCII 字符，而 POST 请求的参数数据类型则没有限制。
    <span class="token number">7</span>. <span class="token string">&#39;可见/安全性&#39;</span>：因为 GET 请求的参数通过 URL 传递，POST 请求的参数存放在请求体中，导致 GET 相对于 POST 更不安全，所以不建议使用 get 来传递敏感信息。


<span class="token comment">## . http 状态码</span>
    - <span class="token number">200</span>：请求成功
    - <span class="token number">202</span>：接受请求但无内容返回
    - <span class="token number">301</span>：永久移动
    - <span class="token number">302</span>：临时移动
    - <span class="token number">304</span>：未修改
    - <span class="token number">400</span>：错误请求，一般为参数错误
    - <span class="token number">401</span>：用户未授权，需要身份认证
    - <span class="token number">403</span>：禁止访问，一般为用户权限不足
    - <span class="token number">404</span>：为找到该网页
    - <span class="token number">500</span>：服务器响应错误


<span class="token comment">### . http缓存</span>
  - http缓存是在第一次获取资源后，根据返回的HTTP 响应头信息来告诉如何缓存资源。
  - http缓存主要是为解决用户重复请求相同资源。
  - 强缓存是直接从缓存中获取资源不经过服务器，状态码是200（设置缓存有效时间，超出有效时间则发送请求到服务器来获取资源）
  - 协商缓存是由服务器来确定缓存志愿是否可用，存在缓存时返回状态码为304且不带响应体的报文，新资源则返回状态码为200且响应体为请求数据的报文。
- 强缓存和协商缓存的区别
    <span class="token number">1</span>. 强制缓存发生在浏览器端，协商缓存发生在服务器端。
    <span class="token number">2</span>. 强制缓存在浏览器强制刷新的情况下不会生效，而协商缓存则不受影响。
    <span class="token number">3</span>. 强制缓存返回的报文状态码为 <span class="token number">200</span>，协商缓存返回的报文状态码为 <span class="token number">304</span>。



<span class="token comment">## . http1.0、http1.1、http2.0、http3</span>
    http 协议是应用层协议，都是建立在传输层之上的。传输层上不只有 TCP 协议，还有 UDP 协议。
    http1.0 ~ http2.0 都是基于 TCP 协议的，因此都会有 TCP 带来的硬伤和局限性；
    而 http3.0 则是建立在 UDP 基础之上的，所以其余 http2.0 之间有质的不同。

    - http1.0 exprires last-modified 连接无法复用
    - http1.1 etag cache-control 支持长连接（connection） 支持文件断点续传
    - http2.0 多路复用 首部压缩 server push 传输速度更快了

    <span class="token number">1</span>. http1.0
      - 仅支持保持短暂的TCP链接
      - 不追踪ip

    <span class="token number">2</span>. http1.1
      - 支持长连接
      -	纯文本报头
      -	增加了更多的请求头和响应头
      -	连接数过多 容易队首阻塞 且串行传输

    <span class="token number">3</span>. http2.0
        -	多路复用，并行请求
        -	二进制报头，分帧层（headers帧层和data帧层）
        -	对报头使用二进制格式编码化压缩，降低开销
        -	服务器主动推送，减少请求延迟
        -	默认使用加密 增加伪头字段

    <span class="token number">4</span>. http3.0
        - 连接迁移
        - 无队头阻塞
        - 自定义的拥塞控制
        - 前向安全和前向纠错



<span class="token comment">## . cookie、sessionStorage、localStorage 的区别</span>
相同点：都存储在客户端
不同点：
  <span class="token number">1</span>. 存放的数据大小：
      - cookie 数据大小不能超过 4KB；
      - sessionStorage和localStorage 存储的数据大小可以达到 5MB+。
  <span class="token number">2</span>. 数据的生命周期
      - cookie：若不设置过期时间，则视为会话，关闭浏览器后丢失；
      					若设置时间，则在设置的过期时间之前一直有效，即使窗口或浏览器关闭。
      - localStorage永久存储，浏览器关闭后如果不主动删除数据都不会丢失掉；
      - sessionStorage 数据在当前浏览器窗口关闭后自动删除。
  <span class="token number">3</span>. 与服务器通信
      - cookie 的数据会携带在 http 头中自动传递到服务器；但如果使用 cookie 保存过多数据会带来性能问题。
      - sessionStorage和localStorage 数据只能保存在本地。
	<span class="token number">4</span>. 易用性
			- cookie 需要自己封装，源生的 cookie 接口不友好。
			- sessionStorage和localStorage 源生接口可接受，也可再次封装对 Object和Array有更好的支持。



<span class="token comment">## AJAX、Fetch 和 axios 的区别</span>
    <span class="token number">1</span>. AJAX
        - AJAX 的核心是 XMLHttpRequest 对象，全称为异步的js与xml（Async JavaScript And XML）。
        - AJAX 的优点是可实现页面局部刷新，进行异步网络	请求。
        - 拥有打开AJAX请求、设置http请求头、发送ajax请求的方法；还有响应请求 onreadystatechange 的回调事件、以及响应返回的状态。
        - AJAX 基于原生的 XHR 开发，如果多个请求之间如果有先后关系的话，就会出现回调地狱问题。

    <span class="token number">2</span>. Fetch
        - Fetch 是基于 Promise 设计的。Fetch 的代码结构比 AJAX 简单，参数类似 JQuery ajax。但是 Fetch 不是 ajax 的进一步封装（没有使用 XMLHttpRequest 对象），而是原生 js。
        - 语法简洁，更加语义化。
        - 脱离 XHR，是 ES 语法规范里的新视线方式。
        - Fetch 只对网络请求报错，对 <span class="token number">400</span>、500 状态码都当做成功的请求。
        - Fetch 默认不会带 cookie，需要添加配置项。

    <span class="token number">3</span>. axios
        - axios 即提供了并发的封装，也没有 fetch 的各种问题，而且包体积小，是目前主流使用的请求方式。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="从输入url到页面展示的过程" tabindex="-1"><a class="header-anchor" href="#从输入url到页面展示的过程"><span>从输入URL到页面展示的过程</span></a></h3><blockquote><ol><li>首先在浏览器中输入URL</li><li><strong>DNS查询（查找缓存）</strong><ol><li>浏览器首先搜索浏览器自身缓存的DNS记录（浏览器会记录DNS一段时间，因此是第一个地方解析DNS请求）</li><li>如果浏览器缓存中没有找到需要的记录或记录已过期，则搜索hosts文件和操作系统缓存</li><li>如果在hosts文件和操作系统缓存中没有需要的记录或记录已过期，则向域名解析服务器发送解析请求</li><li>如果域名解析服务器也没有该域名的记录，则开始递归+迭代解析</li><li>获取域名对应的IP后，一步步向上返回，直到返回给浏览器</li></ol></li><li><strong>发起TCP三次握手建立TCP连接</strong><ol><li>解析出IP地址后，根据IP地址和默认80端口，和服务器建立TCP连接</li><li>第一次握手：建立连接时，客户端向服务端发送请求报文</li><li>第二次握手：服务器收到报文后，如果同意连接，则向客户端发送确认报文</li><li>第三次握手：客户端收到服务器的确认后，再次向服务器给出确认报文，完成连接</li></ol></li><li><strong>浏览器向web服务器发起http请求</strong><ul><li>浏览器发起读取文件的HTTP请求，，该请求报文作为TCP三次握手的第三次数据发送给服务器</li><li>请求行：指定http请求的方法、url、http协议版本等</li><li>请求头：描述浏览器的相关信息，如语言、编码等</li><li>请求正文：当发送POST、PUT请求时，通常需要向服务器传递数据，这些数据就储存在请求正文中</li></ul></li><li><strong>服务器处理HTTP请求，并返回响应报文</strong>(状态码、响应头、响应正文) <ul><li>服务器响应请求并返回结果：服务器对浏览器请求做出响应，并把对应的html文件发送给浏览器</li><li>响应头：包含了响应的相关信息，如日期等</li><li>响应正文：服务器返回给浏览器的文本信息，通常html、js、css和图片等就包含在里面</li></ul></li><li><strong>浏览器解析HTML内容，进行页面渲染</strong><ul><li>客户端（浏览器）接受到http服务器发送过来的响应报文，并开始解析html文档并渲染页面。</li><li>浏览器接收到数据包后的解析流程为：构建DOM树、构建CSS规则树、构建render树、进行页面布局、遍历render树绘制页面元素 <ul><li>构建DOM树：词法分析然后解析成DOM树（dom tree），是由dom元素及属性节点组成，树的根是document对象</li><li>构建CSS规则树：生成CSS规则树（CSS Rule Tree）</li><li>构建render树：Web浏览器将DOM和CSSOM结合，并构建出渲染树（render tree）</li><li>布局（Layout）：计算出每个节点在屏幕中的位置</li><li>绘制（Painting）：即遍历render树，并使用UI后端层绘制每个节点。</li></ul></li></ul></li><li><strong>发起TCP四次挥手关闭TCP连接</strong><ol><li>客户端发送数据并关闭数据传送通道</li><li>服务端接发回确认收到数据</li><li>服务端发送完数据并关闭数据传送通道</li><li>客户端发回确认收到数据</li></ol></li></ol><h4 id="重绘和回流-重排" tabindex="-1"><a class="header-anchor" href="#重绘和回流-重排"><span>重绘和回流(重排)</span></a></h4><blockquote><ol><li><code>重排/回流（Reflow）</code>：当<code>DOM</code>的变化影响了元素的几何信息，浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置，这个过程叫做重排。表现为重新生成布局，重新排列元素。如浏览器页面初始化、添加/删除可见的DOM元素、元素位置、尺寸、内容改变、窗口尺寸改变</li><li><code>重绘(Repaint)</code>: 当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程叫重绘。表现为某些元素的外观被改变；如不影响页面布局的操作：css改动、改变某个元素的背景色、文字颜色、边框颜色</li><li><strong>注意：『重排』必将引起『重绘』，『重绘』不一定会引起『重排』</strong></li></ol><p>单单改变元素的外观，肯定不会引起网页重新生成布局，但当浏览器完成重排之后，将会重新绘制受到此次重排影响的部分</p><p>重排和重绘代价是高昂的，它们会破坏用户体验，并且让UI展示非常迟缓，而相比之下重排的性能影响更大，在两者无法避免的情况下，一般我们宁可选择代价更小的重绘。</p><h4 id="如何触发回流和重绘" tabindex="-1"><a class="header-anchor" href="#如何触发回流和重绘"><span>如何触发回流和重绘？</span></a></h4><p>任何改变用来构建渲染树的信息都会导致一次回流或重绘：</p><ul><li>添加、删除、更新DOM节点</li><li>通过display: none隐藏一个DOM节点-触发回流和重绘</li><li>通过visibility: hidden隐藏一个DOM节点-只触发重绘，因为没有几何变化</li><li>移动或者给页面中的DOM节点添加动画</li><li>添加一个样式表，调整样式属性</li><li>用户行为，例如调整窗口大小，改变字号，或者滚动。</li></ul><h4 id="如何避免回流和重绘" tabindex="-1"><a class="header-anchor" href="#如何避免回流和重绘"><span>如何避免回流和重绘？</span></a></h4><p>不在布局信息改变时做 DOM 查询、提前定义class类定义要修改的dom属性。对于重排的元素使其脱离文档流再改变</p><ul><li><p><code>集中改变样式</code>，不要一条一条地修改 DOM 的样式。</p></li><li><p>不要把 DOM 结点的属性值放在循环里当成循环里的变量。</p></li><li><p>尽可能在 DOM 树的最末端改变 class。</p></li><li><p>避免设置多层内联样式</p></li><li><p>为动画的 HTML 元件使用 <code>fixed</code> 或 <code>absoult</code> 的 <code>position</code>，那么修改他们的 CSS 是不会 reflow 的。</p></li><li><p>不使用 table 布局。因为可能很小的一个小改动会造成整个 table 的重新布局。</p></li><li><p>尽量只修改<code>position：absolute</code>或<code>fixed</code>元素，对其他元素影响不大</p></li><li><p>动画开始<code>GPU</code>加速，<code>translate</code>使用<code>3D</code>变化</p></li><li><p>提升为合成层</p><p>将元素提升为合成层有以下优点：</p><ul><li>合成层的位图，会交由 GPU 合成，比 CPU 处理要快</li><li>当需要 repaint 时，只需要 repaint 本身，不会影响到其他的层</li><li>对于 transform 和 opacity 效果，不会触发 layout 和 paint</li></ul></li></ul></blockquote></blockquote><h3 id="dns" tabindex="-1"><a class="header-anchor" href="#dns"><span>DNS</span></a></h3><blockquote><ul><li><p>DNS(Domain Name System)域名系统，即根据服务器根据域名的层级来查找IP地址。</p></li><li><p><code>主机名.次级域名.顶级域名.根域名</code></p></li><li><p>解析过程</p><ul><li>从&quot;根域名服务器&quot;查到&quot;顶级域名服务器&quot;的NS记录和A记录（IP地址）</li></ul><ol start="2"><li>从&quot;顶级域名服务器&quot;查到&quot;次级域名服务器&quot;的NS记录和A记录（IP地址）</li><li>从&quot;次级域名服务器&quot;查出&quot;主机名&quot;的IP地址</li></ol></li></ul></blockquote><h3 id="tcp和udp的区别" tabindex="-1"><a class="header-anchor" href="#tcp和udp的区别"><span>TCP和UDP的区别</span></a></h3><blockquote><ul><li>TCP是面向连接，UDP是面向无连接的（即发送数据前不需要简历连接）</li><li>TCP提供可靠的服务；通过TCP连接传送的数据，无差错，不丢失，不重复，且按需到达；UDP尽最大努力交付，即不保证可靠交付；因TCP可靠、面向连接且不会丢失数据，因此不适合大数据量的交换。</li><li>TCP是面向字节流，UDP面向报文，并且网络出现拥塞不会使得发送速率降低（因此会出现丢包，所以常用于实时的应用，如IP电话和视屏会议等）</li><li>TCP只能1对1，UDP支持1对1和1对多</li><li>TCP的首部较大为20字节，而UDP只有8字节</li><li>TCP是面向连接的可靠传输，而UDP是不可靠的</li><li><strong>TCP是可靠传输的原因</strong>：数据报校验, 失序数据重排序, 丢弃重复数据,应答机制,超时重发,流量控制等</li></ul></blockquote><h3 id="tcp三次握手" tabindex="-1"><a class="header-anchor" href="#tcp三次握手"><span>TCP三次握手</span></a></h3><blockquote><ul><li><p>客户端和服务端都需要各自收发，因此需要三次握手（C 发起请求连接S 确认，也发起连接C）</p></li><li><p>第一次握手：S 只可以确认自己可以接受C 发送的报文段 第二次握手：C 可以确认S 收到了自己发送的报文段，并且可以确认自己可以接受S 发送的报文段。 第三次握手：S 可以确认C 收到了自己发送的报文段。</p></li><li><h6 id="第一次握手服务端" tabindex="-1"><a class="header-anchor" href="#第一次握手服务端"><span>第一次握手服务端</span></a></h6></li></ul><p><img src="`+l+'" alt="image-20211224134943355"></p></blockquote><h3 id="tcp四次挥手" tabindex="-1"><a class="header-anchor" href="#tcp四次挥手"><span>TCP四次挥手</span></a></h3><blockquote><p>由于TCP连接是全双工的，因此每个方向都必须单独进行关闭。这原则是当一方完成它的数据发送任务后就能发送一个FIN来终止这个方向的连接。收到一个 FIN只意味着这一方向上没有数据流动，一个TCP连接在收到一个FIN后仍能发送数据。首先进行关闭的一方将执行主动关闭，而另一方执行被动关闭。</p><p>TCP客户端发送一个FIN，用来关闭客户到服务器的数据传送。 服务器收到这个FIN，它发回一个ACK，确认序号为收到的序号加1。和SYN一样，一个FIN将占用一个序号。 服务器关闭客户端的连接，发送一个FIN给客户端。 客户端发回ACK报文确认，并将确认序号设置为收到序号加1。</p><hr><ol><li><code>客户端进程发出连接释放报文</code>，并且停止发送数据。释放数据报文首部，FIN=1，其序列号为seq=u（等于前面已经传送过来的数据的最后一个字节的序号加1），此时，<code>客户端进入FIN-WAIT-1（终止等待1）状态</code>。 TCP规定，FIN报文段即使不携带数据，也要消耗一个序号。</li><li><code>服务器收到连接释放报文，发出确认报文</code>，ACK=1，ack=u+1，并且带上自己的序列号seq=v，此时，<code>服务端就进入了CLOSE-WAIT（关闭等待）状态</code>。TCP服务器通知高层的应用进程，客户端向服务器的方向就释放了，这时候处于半关闭状态，即客户端已经没有数据要发送了，但是服务器若发送数据，客户端依然要接受。这个状态还要持续一段时间，也就是整个CLOSE-WAIT状态持续的时间。</li><li>客户端收到服务器的确认请求后，此时，<code>客户端就进入FIN-WAIT-2（终止等待2）状态</code>，等待服务器发送连接释放报文（在这之前还需要接受服务器发送的最 后的数据）。</li><li><code>服务器将最后的数据发送完毕后，就向客户端发送连接释放报文</code>，FIN=1，ack=u+1，由于在半关闭状态，服务器很可能又发送了一些数据，假定此时的序列号为seq=w，此时，<code>服务器就进入了LAST-ACK（最后确认）状态</code>，等待客户端的确认。</li><li><code>客户端收到服务器的连接释放报文后，必须发出确认</code>，ACK=1，ack=w+1，而自己的序列号是seq=u+1，此时，<code>客户端就进入了TIME-WAIT（时间等待）状态</code>。注意此时TCP连接还没有释放，必须经过2∗∗MSL（最长报文段寿命）的时间后，<code>当客户端撤销相应的TCB后，才进入CLOSED状态</code>。</li><li>服务器只要收到了客户端发出的确认，<code>立即进入CLOSED状态</code>。同样，撤销TCB后，就结束了这次的TCP连接。可以看到，<code>服务器结束TCP连接的时间要比客户端早一些</code>。</li></ol><p><img src="'+i+`" alt="image-20211025153149658"></p></blockquote><h3 id="ftp协议" tabindex="-1"><a class="header-anchor" href="#ftp协议"><span>FTP协议</span></a></h3><blockquote><ul><li>FTP允许用户以文件操作的方式(如文件的增、删、改、查、传送等)与另一主机相互通信。然而，用户并不真正登录到自己想要存取的计算机上面而成为完全用户，可用FTP程序访问远程资源，实现用户往返传输文件、目录管理以及访问电子邮件等，即是双方计算机可能配有不同的操作系统和文件存储方式。</li><li>FTP是应用层的一个文件传输协议，使用了两个并行的TCP来传输文件，一个是<strong>控制连接(21端口)</strong>，一个是<strong>数据连接(20端口)</strong> 在介绍FTP的工作原理时候，通常会讲到两个信道(控制信道、数据信道)和两种模式(主动模式、被动模式)</li><li><strong>控制信道和数据信道</strong>：</li><li>控制信道是创建会话的必要条件,通常传输控制信息，如口令，用户标识，存放、获取文件等命令</li><li>数据信道则是临时创立的，它通常被用来传输文件。当发送完文件之后数据连接会自动关闭</li><li><strong>主动模式(服务器主动发起请求)</strong>：</li><li>控制信道：客户端(端口随机) -----&gt; 服务器21端口</li><li>数据信道：客户端(端口随机) &lt;----- 服务器20端口</li><li>在主动模式下，客户端向服务器的FTP端口21发起连接请求，服务器接收连接后，创建一条命令链路。当需要传输数据时，客户端在链路上用PORT命令告诉服务器:&quot;我打开了X端口，需要你连接我&quot;。接着服务器从20端口向客户端的X端口发起连接请求，之后双方可以利用数据通道来传输数据</li><li><strong>被动模式(服务器被动响应请求):</strong></li><li>控制信道：客户端(端口随机) -----&gt; 服务器21端口</li><li>数据信道：客户端(端口随机) &lt;----- 服务器随机端口</li><li>被动模式下控制信道的传输方式和主动一致，但是在需要数据传输的时候，服务器在控制信道上用PASV的命令告诉客户端，我开启了XX端口，你过来连接我，之后服务器被动等待客户端连接它的XX端口，创建连接后开始传输数据</li><li>在创建连接的过程中，有很多FTP独有的命令。例如在被动模式下的控制信道，经过三次握手后，客户端会向服务器发送PASV命令，意为：你是否支持被动模式，服务器如果支持则会返回227:a,b,c,d,e,f。其中a,b,c,d为IP地址。端口为e*256+f，到了第二信道，双方的通信端口都是随机的，这样较为安全。</li><li>当有防火墙的时候，需要转换IP端口，防火墙做了什么？</li></ul></blockquote><h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化"><span>性能优化</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 性能优化</span>


<span class="token comment">### CDN 内容分发网络</span>
<span class="token number">1</span>. CDN 解决常见的网络请求问题如下：
		- 带宽限制。一个服务器由于带宽限制，所后才能守网络的并发请求量和连接数有限。
		- 延时和拥塞。从客户端发起请求到服务端返回数据，中间经理很长很复杂的网络环境，且容易出现请求延迟或拥塞。
		- 网络运营商跨域问题。网络请求跨运营商，可能会导致网络延迟。
		- 客户端的网络限流。

<span class="token number">2</span>. 相对于传统的网络
相对于传统的网络，追加了一个智能调度DNS服务器。它可以根据一定的算法和策略（如静态拓扑、容量等），将最适合的CDN节点IP地址回应给LocalDns。

<span class="token number">3</span>. CDN 相关技术
- 负载均衡技术
    CDN 中分为服务器负载均衡和服务器全局负载均衡。
    负载均衡目的是让性能更差的服务器不会称为整体系统的瓶颈，同时也要让性能好的服务器的资源得到充分利用。
- 动态分发与复制技术
		通常一个网络请求要经过重重的路由转发和处理才能到达最后的服务器去请求到资源。
		而动态分发与复制技术是将大部分静态资源分发复制到各地的加速节点上，以便缩短客户端与目标资源的路径。
- 缓存技术
    一般可通过Web缓存服务来改善请求的响应时间，如代理缓存服务、透明代理缓存服务、使用重定向服务的透明代理缓存服务等。
    通过Web缓存服务，用户访问网页时可以将广域网的流量降至最低，并提高用户的访问速度。
      对于公司内联网用户来说，这意味着将内容在本地缓存，而无须通过专用的广域网来检索网页。
      对于Internet用户来说，这意味着将内容存储在他们的ISP的缓存器中，而无须通过Internet来检索网页。
    CDN的核心作用正是提高网络的访问速度。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="vue" tabindex="-1"><a class="header-anchor" href="#vue"><span>VUE</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## vue2 数据双向绑定原理</span>
<span class="token number">1</span>. 监听器Observer：劫持并监听所有属性，对数据对象遍历<span class="token punctuation">(</span>包括子属性对象的属性<span class="token punctuation">)</span>，利用 <span class="token variable"><span class="token variable">\`</span>Object.definedProperty<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 对属性加上 setter 和 getter 方法，当对象值增加或获取，就会触发。
<span class="token number">2</span>. 解析器Compile：解析 Vue 指令模板，将模板的变量替换为数据，然后初始渲染页面视图，并对每个指令节点绑定更新函数，添加监听数据的订阅者，当数据有变动，就会调动更新函数进行数据更新。
<span class="token number">3</span>. 订阅者Watcher：是监听器和解析器之间通信的桥梁，主要是订阅监听器中的属性值变化，当发生变化，就会触发解析器中对应的更新函数。
<span class="token number">4</span>. 订阅器Dep：订阅器采用 发布-订阅 模式，用来收集订阅者，对监听器进行统一管理。


<span class="token comment">### Vue2 的 Object.definedProperty 为什么不支持数组的响应式变化？</span>
Object.definedProperty 虽然可以实现这样的效果，但是 vue2 为了优化性能而不实现这样的功能。
因为如果不断地监听数组变化（可能数组存在深层次数据），就会消耗很多不必要的性能，所以在 vue2 中不做这样的实现。
而 vue3 可以监听到是因为 vue3 是通过 proxy 代理数据（当数据变动都会触发该proxy对象），而 vue2 是劫持数据。


<span class="token comment">## watch 和 computed 的区别</span>
- computed 计算属性是用来声明式地描述一个值依赖了其它的值，当所依赖的值或者变量发生改变时，计算属性也会随之变化。
- <span class="token function">watch</span> 监听的是已有变量（在 data 中定义的变量），当该变量变化时，会触发 <span class="token function">watch</span> 中的方法。

- computed 会根据已有变量产生一个新的响应式变量。
- <span class="token function">watch</span> 是监听已有变量的变化触发相应操作。
注意：既能用computed 实现又可以用watch 监听来实现的功能，推荐用computed， 重点在于computed 的缓存功能。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="vue生命周期" tabindex="-1"><a class="header-anchor" href="#vue生命周期"><span>vue生命周期</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Vue2 的生命周期</span>
  <span class="token number">1</span>. beforeCreate：
      在实例初始化后，数据观测<span class="token punctuation">(</span>data observer<span class="token punctuation">)</span> 和 event/watcher 事件配置之前被调用。
      在当前阶段，data、methods、computed、watch 上的数据和方法都不能被访问。
  <span class="token number">2</span>. create：
      实例已经创建完成后被调用。
      此时实例已经完成数据观测<span class="token punctuation">(</span>data observer<span class="token punctuation">)</span>、属性和方法的运算、event/watcher 事件回调。
      此时没有 <span class="token variable"><span class="token variable">\`</span>$el<span class="token variable">\`</span></span><span class="token punctuation">(</span>还未进入浏览器 render 阶段<span class="token punctuation">)</span>，但可通过 vm.<span class="token variable">$nextTick</span> 来访问 DOM。
  <span class="token number">3</span>. beforeMount：
      在挂载开始之前被调用。
      此时已经完成模板的编译<span class="token punctuation">(</span>相关的 render 函数首次被调用<span class="token punctuation">)</span>，但是还没挂载到页面中。
  <span class="token number">4</span>. mounted：
      在挂载完成后被触发。
      此时真实 DOM 挂载完毕，数据完成双向绑定，可以访问到 DOM 节点。

  <span class="token number">5</span>. beforeUpdate：
      数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁<span class="token punctuation">(</span>patch<span class="token punctuation">)</span> 之前。
      可以在这个钩子中进一步地更改状态，这不会触发附加的重新渲染过程。
  <span class="token number">6</span>. updated：
      发生在更新完成之后，当前阶段组件 DOM 已完成更新。
      注意1：要避免在此期间更改数据，因为这可能会导致无限循环的更新。
      注意2：该钩子在服务端渲染期间不被调用。

  <span class="token number">7</span>. beforeDestroy：
      实例销毁之前被调用。此时实例仍然可用。
      适合移除事件、定时器等，避免可能引起的内存泄露问题。
  <span class="token number">8</span>. destroyed：
      Vue实例<span class="token punctuation">(</span>组件<span class="token punctuation">)</span>销毁之后调用。
      调用后，vue实例<span class="token punctuation">(</span>组件<span class="token punctuation">)</span>的所有东西都会解除绑定，所有的事件监听器都会被移除，所有的子实例也会被销毁。
      该钩子在服务端渲染期间不被调用。

	<span class="token number">9</span>. activated：路由设置keep-alive时，该路由组件被激活时调用。
	<span class="token number">10</span>. deactivated：路由设置keep-alive时，该路由组件被销毁时调用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-router有几种模式" tabindex="-1"><a class="header-anchor" href="#vue-router有几种模式"><span>vue-router有几种模式</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## vue-Router 作用</span>
- 用于与服务器交互，通过不同的路径请求不同的资源，其中包含如下三种路由类型
    Hash:      使用URL的hash值来作为路由。支持所有浏览器。
    History:   以来HTML5 History API 和服务器配置。参考官网中HTML5 History模式
    Abstract： 支持所有javascript运行模式。如果发现没有浏览器的API，路由会自动强制进入这个模式。


<span class="token comment">## hash模式（window.location.hash）</span>
- location.hash的值实际就是url中<span class="token variable"><span class="token variable">\`</span><span class="token comment">#</span><span class="token variable">\`</span></span>字符后面的字符串，它的特点在于hash 虽然出现 URL 中，但不会被包含在 HTTP 请求中，对后端完全没有影响，因此改变 <span class="token builtin class-name">hash</span> 不会重新加载页面
- URL中的hash值只是客户端的一种状态，是由前端路由处理，即当服务器端发出请求时hash值不包括在http请求中，所以改变Hash值时不会刷新页面，也不会向服务器发送请求
-  每一次改变 hash（window.location.hash）都会在浏览器的访问历史中增加一个记录，因此我们通过浏览器的回退、前进按钮可以控制hash的切换，就可以来实现前端路由“更新视图但不重新请求页面”的功能了
- 可通过a标签并设置href属性，当用户点击标签后，URL的hash值会发生改变，或者使用JavaScript来对location.hash进行赋值，改变URL的hash值
- 可使用hashchange事件来监听hash值的变化，从而对页面进行跳转（渲染）
		<span class="token variable"><span class="token variable">\`</span>window.addEventListener<span class="token punctuation">(</span><span class="token string">&quot;hashchange&quot;</span>, funcRef, <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token variable">\`</span></span>


<span class="token comment">## history模式（HTML5的history模式）</span>
- 整个地址重新加载，可以保存历史记录，方便前进后退
- 使用html5和http服务端配置，没有后台配置的话，页面刷新会出现404页面
- 可以使用popstate事件来监听URL的变化，从而对页面进行跳转（渲染）
- 主要是利用history.pushState<span class="token punctuation">(</span><span class="token punctuation">)</span>和history.replaceState<span class="token punctuation">(</span><span class="token punctuation">)</span>两个API来操作实现URL/页面路由的跳转变化，担保这两个API不会触发popstate事件，此时我们需要手动触发页面跳转（渲染）
- 这两个方法应用于浏览器的历史记录站，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。这两个方法有个共同的特点：当调用他们修改浏览器历史记录栈后，虽然当前 URL改变了，但浏览器不会刷新页面，这就为单页应用前端路由“更新视图但不重新请求页面”提供了基础
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="vue路由组件复用导致路由参数失效问题" tabindex="-1"><a class="header-anchor" href="#vue路由组件复用导致路由参数失效问题"><span>vue路由组件复用导致路由参数失效问题</span></a></h3><blockquote><p>问题：虽然路由参数已发生改变，但是vue-router会以为仍然是上一次访问的组件内容，由于之前已经渲染过该组件，所以会直接复用之前的组件，并且不会执行组件中的任何操作包括mounted之类的生命周期函数</p><p>1.使用<code>watch</code>侦听器来监听路由的变化情况，根据路由参数的变化来响应相应的数据，</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
 <span class="token string-property property">&quot;$route&quot;</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>xxx<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token string-property property">&quot;$route&quot;</span><span class="token operator">:</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// n为路由</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 深度监听</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.用<code>:key</code>来阻止复用</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>router<span class="token operator">-</span>view <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;$route.fullPath&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h3 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex"><span>vuex</span></a></h3><blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>有state、mutation、action、getter、module函数，具有数据响应式、刷新页面数据会销毁

<span class="token function">每一个Vuex应用的核心就是store</span><span class="token punctuation">(</span>仓库<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">store基本上就是一个容器，它包含着你的应用中大部分的状态</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span>。
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
state<span class="token punctuation">,</span> <span class="token comment">// 共同维护的一个状态，state里面可以是很多个全局状态</span>
getters<span class="token punctuation">,</span> <span class="token comment">// 获取数据并渲染</span>
actions<span class="token punctuation">,</span> <span class="token comment">// 数据的异步操作</span>
mutations <span class="token comment">// 处理数据的唯一途径，state的改变或赋值只能在这里</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

注意：mutations必须是同步函数，因为异步方法不知道什么时候状态会改变，就无法追踪了（若使用异步，需要使用actions）
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token comment">// type(事件类型)： 其值为setResturantName</span>
    <span class="token comment">// payload：官方给它还取了一个高大上的名字：载荷，其实就是一个保存要传递参数的容器</span>
<span class="token function-variable function">setResturantName</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> state<span class="token punctuation">.</span>resturantName <span class="token operator">=</span> payload<span class="token punctuation">.</span>resturantName<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
不能直接调用<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>mutations<span class="token punctuation">.</span><span class="token function">setResturantName</span><span class="token punctuation">(</span><span class="token string">&#39;KFC&#39;</span><span class="token punctuation">)</span>，
必须使用如下方式调用：<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span>payload<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1、把载荷和type分开提交</span>
store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;setResturantName&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span> <span class="token literal-property property">resturantName</span><span class="token operator">:</span><span class="token string">&#39;KFC&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 2、载荷和type写到一起</span>
store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;setResturantName&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">resturantName</span><span class="token operator">:</span> <span class="token string">&#39;KFC&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token literal-property property">actions</span><span class="token operator">:</span>
同步模式，即上述所说的单线程模式，一次只能执行一个任务，函数调用后需等到函数执行结束，
			返回执行的结果，才能进行下一个任务。如果这个任务执行的时间较长，就会导致「线程阻塞」
异步模式，即与同步模式相反，可以一起执行多个任务，函数调用后不会立即返回执行的结果，
			如果任务<span class="token constant">A</span>需要等待，可先执行任务<span class="token constant">B</span>，等到任务<span class="token constant">A</span>结果返回后再继续回调。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="vuex与本地存储" tabindex="-1"><a class="header-anchor" href="#vuex与本地存储"><span>VUEX与本地存储</span></a></h3><blockquote><ul><li>vuex存储在内存，localstorage(本地存储)则以文件的方式永久存储在本地；sessionstorage(会话存储)临时保存在缓存中。</li><li>localStorage和sessionStorage只能存储字符串类型，对于复杂的对象可以使用ECMAScript提供的JSON对象的stringify和parse来处理</li><li>vuex用于组件之间的传值，localstorage，sessionstorage则主要用于不同页面之间的传值。</li><li>永久性：当刷新页面（这里的刷新页面指的是 --&gt; F5刷新,属于清除内存了）时vuex存储的值会丢失，sessionstorage页面关闭后就清除掉，localstorage不会清除</li><li>vuex会响应式处理数据，本地存储不会响应式</li></ul></blockquote><h2 id="react" tabindex="-1"><a class="header-anchor" href="#react"><span>react</span></a></h2><h3 id="对react的理解" tabindex="-1"><a class="header-anchor" href="#对react的理解"><span>对react的理解</span></a></h3><blockquote><p>react起源于Facebook，react是一个用于构建用户界面的js库</p><ul><li>声明式设计：react采用范式声明，开发者只需声明显示内容，react就会自动完成</li><li>高效：react通过对DOM的模拟（即虚拟DOM）最大限度减少与dom的交互</li><li>灵活：react可和已知的库或框架很好配合</li><li>组件：通过react构建组件，让代码更容易复用，能很好应用在大型项目开发中，把页面功能拆分成小模块，每个小模块即是组件</li><li>单项数据流：react是单向数据流，数据通过props从父节点传递到子节点，如果父级的某个props改变，react会重新渲染所有的子节点</li></ul></blockquote><h3 id="vue和react的区别" tabindex="-1"><a class="header-anchor" href="#vue和react的区别"><span>vue和react的区别</span></a></h3><blockquote><p><strong>相同点</strong></p><ul><li>都支持服务器渲染</li><li>都有虚拟dom、组件化开发、通过props参数进行父子组件数据传递</li><li>都实现webcomponent规范</li><li>都是数据驱动视图</li><li>都有状态管理，react有redux，vue有vuex</li><li>都支持native的方案，react有react native，vue有weex</li></ul><p><strong>不同点</strong></p><ul><li>react严格上只针对mvc的view层，vue是mvvm模式</li><li>虚拟dom不一样，vue会跟踪每一个组件的依赖关系，不需要重新渲染整个dom组件树；react当应用的状态被改变时，全部组件都会重新渲染，所以react中用<code>shouldComponentUpdate</code>钩子函数来控制</li><li>组件写法不同，react是jsx+inline style，即把html和css都写进js；vue则是html、css、js在同一个文件</li><li>数据绑定一样，vue实现数据双向绑定，react数据流动是单项的</li><li>在react中state需要用setstate方法进行更新状态；在vue中state对象不是必须的，数据由data属性在vue对象中管理</li></ul></blockquote><h3 id="虚拟dom与diff算法" tabindex="-1"><a class="header-anchor" href="#虚拟dom与diff算法"><span>虚拟dom与diff算法</span></a></h3><blockquote><ul><li>虚拟DOM及虚拟节点，是通过js的object对象模拟DOM中的节点，然后通过特定的渲染方法将其渲染成真实的DOM节点。频繁的操作DOM，或大量造成页面的重绘和回流</li><li>DIFF算法：把树形结构按照层级分解，只比较同级元素，给列表结构的每个单元添加唯一的key值，可以方便比较，防止不必要的重新赋值渲染</li></ul><h4 id="为什么虚拟dom会提高性能" tabindex="-1"><a class="header-anchor" href="#为什么虚拟dom会提高性能"><span>为什么虚拟DOM会提高性能？</span></a></h4><ul><li>因为虚拟DOM相当于在js和真实DOM中间加入一个缓存，利用DOM diff算法避免了没有必要的DOM操作，从而提高性能</li></ul><h4 id="调用setstate之后发生了什么" tabindex="-1"><a class="header-anchor" href="#调用setstate之后发生了什么"><span>调用setState之后发生了什么？</span></a></h4><ul><li>react在调用setstate后，react会将传入的参数对象和组件当前的状态合并，触发调和过程，在调和过程中，react会根据新的状态构建react元素树重新渲染整个UI界面，在得到元素树后，react会自动计算新老节点的差异，根据差异对界面进行最小化重新渲染</li></ul></blockquote><h3 id="react的生命周期函数" tabindex="-1"><a class="header-anchor" href="#react的生命周期函数"><span>react的生命周期函数</span></a></h3><blockquote><ul><li>componentWillMount：组件渲染前调用</li><li>componentDidMount：在第一次渲染后调用</li><li>componentWillReceiveProps：在组件接收到一个新的props时调用</li><li>shouldComponentUpdate：判断组件是否更新html</li><li>componentWillUpdate：组件即将更新html时调用</li><li>componentDidUpdate：在组件完成更新后立即调用</li><li>componentWillUnmount：在组件移除前调用</li></ul><h4 id="shouldcoponentupdate是做什么的" tabindex="-1"><a class="header-anchor" href="#shouldcoponentupdate是做什么的"><span>shouldCoponentUpdate是做什么的？</span></a></h4><p>该钩子函数是为了解决：在更新数据时用setState修改整个数据，数据改变后，遍历时所有内容都要被重新渲染，若数据量庞大则会严重影响性能</p><ol><li>使用<code>shouldComponentUpdate</code>在渲染前进行判断组件是否更新，更新了再渲染</li><li>使用<code>purecomponent(纯组件)</code>省去虚拟DOM生成和对比的过程，在类组件中使用</li><li>使用<code>react.memo()</code>，类似于纯组件，在无状态组件中使用</li></ol><h4 id="在react组件的何处发起ajax请求" tabindex="-1"><a class="header-anchor" href="#在react组件的何处发起ajax请求"><span>在react组件的何处发起ajax请求？</span></a></h4><p>在react组件中，应在componentDidMount钩子函数中发起网络请求。这个方法会在组件第一次挂载(被添加到DOM)时执行，在组件的生命周期中仅会执行一次。更重要的是，你不能保证在组件挂载之前ajax请求已经完成，如果是这样，即以为着将尝试在一个未挂载的组件上调用setState，这将不起作用。在componentDidMount中发起网络请求将保证这一个组件可以更新</p></blockquote><h3 id="组件的状态state和属性props间的区别" tabindex="-1"><a class="header-anchor" href="#组件的状态state和属性props间的区别"><span>组件的状态state和属性props间的区别</span></a></h3><blockquote><p>props是一个从外部传进组件的参数，主要作用是父组件向子组件传递数据，但props对于使用它的组件来说是只读的，一旦赋值则不能修改，只能通过外部组件主动传入新的props来重新渲染子组件</p><p>state 一个组件的显示形态可以由数据状态和外部参数决定，外部参数是props，数据状态就是state。在组件初始化时，用<code>this.state</code>给组件设定一个初始的state，在第一次渲染时就会用这个数据来渲染组件，state不同于props是state可修改数据，通过<code>this.setState()</code>方法来修改state</p></blockquote><h3 id="调用super-props-的目的是什么" tabindex="-1"><a class="header-anchor" href="#调用super-props-的目的是什么"><span>调用super(props)的目的是什么</span></a></h3><blockquote><p>super()调用父类的构造方法，有super组件才有自己的this，在组件全局中都可使用this，如果只是constructor而不执行super，之后的this都是错误的，super继承父组件的this</p></blockquote><h3 id="react组件间的数据传递" tabindex="-1"><a class="header-anchor" href="#react组件间的数据传递"><span>react组件间的数据传递</span></a></h3><blockquote><ul><li>正向传值用props</li><li>逆向传值用函数传值，通过事件调用函数传递</li><li>同级传值用pubsub-js</li><li>用<code>pubsub.publish(事件名, 数据)</code>来抛出数据</li><li>用<code>pubsub.subscribe(监听的事件, ()=&gt;{})</code>接收数据</li><li>跨组件传递数据使用context：要使用context进行跨组件传值就需要使用createContext()方法，此方法有两个对象，provider是生产者，Consumer是消费者</li></ul></blockquote><h3 id="事件处理-修改this指向" tabindex="-1"><a class="header-anchor" href="#事件处理-修改this指向"><span>事件处理-修改this指向</span></a></h3><blockquote><ol><li>通过bind方法进行原地绑定，从而改变this的指向</li><li>通过创建箭头函数</li><li>在constructor中提前对事件进行绑定（即通过在构造函数中对事件绑定，但会替换掉原来的事件名称，且给其事件的this会改变，因为调用时是在类中调用）</li><li>将事件调用的写法改成箭头函数的形式，因为箭头函数没有自身的this，调用的this会是上层作用域的this</li></ol></blockquote>`,129),u=[c];function r(d,k){return s(),a("div",null,u)}const m=n(o,[["render",r],["__file","前端面试题.html.vue"]]),b=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98.html","title":"","lang":"zh-CN","frontmatter":{"Author":"willysliang","CreateTime":"2022-08-21T16:22:33.000Z","Modifier":"willysliang","ModifiedTime":"2023-02-22T23:53:02.000Z","Description":"前端面试题"},"headers":[{"level":2,"title":"待复习","slug":"待复习","link":"#待复习","children":[]},{"level":2,"title":"面试总结","slug":"面试总结","link":"#面试总结","children":[]},{"level":2,"title":"混杂","slug":"混杂","link":"#混杂","children":[]},{"level":2,"title":"HTML & CSS","slug":"html-css","link":"#html-css","children":[{"level":3,"title":"对h5的理解","slug":"对h5的理解","link":"#对h5的理解","children":[]},{"level":3,"title":"script标签defer和async的区别","slug":"script标签defer和async的区别","link":"#script标签defer和async的区别","children":[]},{"level":3,"title":"页面导入样式时，使用link和@import的区别","slug":"页面导入样式时-使用link和-import的区别","link":"#页面导入样式时-使用link和-import的区别","children":[]},{"level":3,"title":"CSS加载会造成阻塞吗？","slug":"css加载会造成阻塞吗","link":"#css加载会造成阻塞吗","children":[]},{"level":3,"title":"样式的继承","slug":"样式的继承","link":"#样式的继承","children":[]},{"level":3,"title":"取消行内元素间的间隙","slug":"取消行内元素间的间隙","link":"#取消行内元素间的间隙","children":[]},{"level":3,"title":"文本溢出","slug":"文本溢出","link":"#文本溢出","children":[]},{"level":3,"title":"flex布局","slug":"flex布局","link":"#flex布局","children":[]},{"level":3,"title":"BFC","slug":"bfc","link":"#bfc","children":[]},{"level":3,"title":"display、float、position的关系","slug":"display、float、position的关系","link":"#display、float、position的关系","children":[]},{"level":3,"title":"inline、inline-block、block的区别","slug":"inline、inline-block、block的区别","link":"#inline、inline-block、block的区别","children":[]},{"level":3,"title":"css模块化","slug":"css模块化","link":"#css模块化","children":[]},{"level":3,"title":"实现三列布局","slug":"实现三列布局","link":"#实现三列布局","children":[]}]},{"level":2,"title":"JS & ES6+","slug":"js-es6","link":"#js-es6","children":[{"level":3,"title":"DOM节点增删改查","slug":"dom节点增删改查","link":"#dom节点增删改查","children":[]},{"level":3,"title":"冒泡事件","slug":"冒泡事件","link":"#冒泡事件","children":[]},{"level":3,"title":"事件","slug":"事件","link":"#事件","children":[]},{"level":3,"title":"类型转换/判断","slug":"类型转换-判断","link":"#类型转换-判断","children":[]},{"level":3,"title":"模块化","slug":"模块化","link":"#模块化","children":[]},{"level":3,"title":"数据类型","slug":"数据类型","link":"#数据类型","children":[]},{"level":3,"title":"计算问题","slug":"计算问题","link":"#计算问题","children":[]},{"level":3,"title":"深浅拷贝","slug":"深浅拷贝","link":"#深浅拷贝","children":[]},{"level":3,"title":"ES6新特性","slug":"es6新特性","link":"#es6新特性","children":[]},{"level":3,"title":"箭头函数","slug":"箭头函数","link":"#箭头函数","children":[]},{"level":3,"title":"构造函数","slug":"构造函数","link":"#构造函数","children":[]},{"level":3,"title":"类数组转换为数组","slug":"类数组转换为数组","link":"#类数组转换为数组","children":[]},{"level":3,"title":"迭代数组方法","slug":"迭代数组方法","link":"#迭代数组方法","children":[]},{"level":3,"title":"for in和for of的区别","slug":"for-in和for-of的区别","link":"#for-in和for-of的区别","children":[]},{"level":3,"title":"原型与原型链","slug":"原型与原型链","link":"#原型与原型链","children":[]},{"level":3,"title":"垃圾回收","slug":"垃圾回收","link":"#垃圾回收","children":[]},{"level":3,"title":"手写函数","slug":"手写函数","link":"#手写函数","children":[]},{"level":3,"title":"callback，Promise，async &await三者区别","slug":"callback-promise-async-await三者区别","link":"#callback-promise-async-await三者区别","children":[]},{"level":3,"title":"new生成一个对象的过程","slug":"new生成一个对象的过程","link":"#new生成一个对象的过程","children":[]},{"level":3,"title":"浏览器哪些地方用到异步","slug":"浏览器哪些地方用到异步","link":"#浏览器哪些地方用到异步","children":[]},{"level":3,"title":"浏览器事件循环","slug":"浏览器事件循环","link":"#浏览器事件循环","children":[]},{"level":3,"title":"setTimeout的运行机制","slug":"settimeout的运行机制","link":"#settimeout的运行机制","children":[]},{"level":3,"title":"浏览器渲染原理","slug":"浏览器渲染原理","link":"#浏览器渲染原理","children":[]}]},{"level":2,"title":"http","slug":"http","link":"#http","children":[{"level":3,"title":"从输入URL到页面展示的过程","slug":"从输入url到页面展示的过程","link":"#从输入url到页面展示的过程","children":[]},{"level":3,"title":"DNS","slug":"dns","link":"#dns","children":[]},{"level":3,"title":"TCP和UDP的区别","slug":"tcp和udp的区别","link":"#tcp和udp的区别","children":[]},{"level":3,"title":"TCP三次握手","slug":"tcp三次握手","link":"#tcp三次握手","children":[]},{"level":3,"title":"TCP四次挥手","slug":"tcp四次挥手","link":"#tcp四次挥手","children":[]},{"level":3,"title":"FTP协议","slug":"ftp协议","link":"#ftp协议","children":[]}]},{"level":2,"title":"性能优化","slug":"性能优化","link":"#性能优化","children":[]},{"level":2,"title":"VUE","slug":"vue","link":"#vue","children":[{"level":3,"title":"vue生命周期","slug":"vue生命周期","link":"#vue生命周期","children":[]},{"level":3,"title":"vue-router有几种模式","slug":"vue-router有几种模式","link":"#vue-router有几种模式","children":[]},{"level":3,"title":"vue路由组件复用导致路由参数失效问题","slug":"vue路由组件复用导致路由参数失效问题","link":"#vue路由组件复用导致路由参数失效问题","children":[]},{"level":3,"title":"vuex","slug":"vuex","link":"#vuex","children":[]},{"level":3,"title":"VUEX与本地存储","slug":"vuex与本地存储","link":"#vuex与本地存储","children":[]}]},{"level":2,"title":"react","slug":"react","link":"#react","children":[{"level":3,"title":"对react的理解","slug":"对react的理解","link":"#对react的理解","children":[]},{"level":3,"title":"vue和react的区别","slug":"vue和react的区别","link":"#vue和react的区别","children":[]},{"level":3,"title":"虚拟dom与diff算法","slug":"虚拟dom与diff算法","link":"#虚拟dom与diff算法","children":[]},{"level":3,"title":"react的生命周期函数","slug":"react的生命周期函数","link":"#react的生命周期函数","children":[]},{"level":3,"title":"组件的状态state和属性props间的区别","slug":"组件的状态state和属性props间的区别","link":"#组件的状态state和属性props间的区别","children":[]},{"level":3,"title":"调用super(props)的目的是什么","slug":"调用super-props-的目的是什么","link":"#调用super-props-的目的是什么","children":[]},{"level":3,"title":"react组件间的数据传递","slug":"react组件间的数据传递","link":"#react组件间的数据传递","children":[]},{"level":3,"title":"事件处理-修改this指向","slug":"事件处理-修改this指向","link":"#事件处理-修改this指向","children":[]}]}],"git":{"updatedTime":1701137510000,"contributors":[{"name":"willy","email":"willysliang","commits":2}]},"filePathRelative":"前端进阶/前端面试题.md"}');export{m as comp,b as data};
