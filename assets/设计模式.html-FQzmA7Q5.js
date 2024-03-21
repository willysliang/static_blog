import{_ as n,o as s,c as a,b as t}from"./app-Bvx-HY_0.js";const p="/static_blog/assets/mode_Factory_Method-CxyRO1Gc.jpg",e="/static_blog/assets/mode_Abstract_Factory-CpurtduG.jpg",o="/static_blog/assets/mode_Singleton-tpzxjwOt.png",c="/static_blog/assets/image-20230425230812561-T--yK5lh.png",i="/static_blog/assets/image-20230425230635668-CbbWQx81.png",l="/static_blog/assets/mode_Builder-BFuENIM3.webp",u="/static_blog/assets/mode_Prototype-Co9nbdJd.webp",r="/static_blog/assets/mode_Adapter-DbPcmaqy.jpg",k="/static_blog/assets/mode_Decorator-C2t5dx7k.png",d="/static_blog/assets/mode_Proxy-IYNG-Wla.webp",v="/static_blog/assets/mode_Facade-BQ1snq-v.webp",m="/static_blog/assets/mode_Bridge-oEtTVrDp.webp",b="/static_blog/assets/mode_Composite-EL8nQUMx.jpg",y="/static_blog/assets/mode_Flyweight-Caqg2vOz.jpg",g="/static_blog/assets/mode_Strategy-CWxRRlHA.jpg",w="/static_blog/assets/mode_Command-BdofVypr.jpg",f="/static_blog/assets/mode_State-Bp_Xo4Rt.jpg",h="/static_blog/assets/mode_Observer-5TkIBoY3.jpg",x="/static_blog/assets/image-20230309180118425-BRYa7vl-.png",j="/static_blog/assets/mode_Visitor-C2xmXw0m.jpg",M="/static_blog/assets/mode_Mediator-C1Ib66Ta.webp",C="/static_blog/assets/mode_Interpreter-dpV-_cvJ.jpg",S="/static_blog/assets/mode_Iterator-DiaesT0c.jpg",q="/static_blog/assets/mode_Memento-Dj3WsNnr.jpg",P="/static_blog/assets/mode_Chain_of_Responsibility-CW4hq1rH.jpg",_="/static_blog/assets/mode_Template-DnWFjeEg.jpg",F={},B=t(`<h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><h3 id="设计模式的六大原则" tabindex="-1"><a class="header-anchor" href="#设计模式的六大原则"><span>设计模式的六大原则</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 设计模式六大原则</span>
<span class="token number">1</span>. 单一职责原则		SRP - Single Responsibility Principle
	一个人只做一件事
	如果功能过于复杂就拆分，每个拆分的子模块都要保持独立
	
	
<span class="token number">2</span>. 开放-封闭原则		OCP - OpenClosed Principle
	对扩展开放，对修改封闭
	软件实体（类、模块、函数）可以扩展，但是不可修改
	
	
<span class="token number">3</span>. 里氏替换原则		LSP - Liskov Substitution Principle
	子类能覆盖父类
	父类能出现的地方子类就能出现
	
<span class="token number">4</span>. 依赖倒转原则		DIP - Dependency Inersion Principle
	面向接口编程，依赖于抽象而不依赖于具体
	使用方只关注接口而不关注具体类的实现
	A.高层模块不应该依赖底层，两个都应该依赖抽象。
	B.抽象不应该依赖细节，细节依赖抽象
	
<span class="token number">5</span>. 接口隔离原则		ISP - Interface Segregation Principle
	保持接口的单一独立
	类似单一职责原则，这里更关注于接口

<span class="token number">6</span>. 迪米特原则（最小知识原则）	LoD - law of demeter Principle
  尽量降低类与类之间的耦合
  如果两个类不必直接通信，那么这两个类不应当发生直接的相互作用。
  如果其中一个类需要调用另一个类的某一个方法的话，可通过第三者发起这个调用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="设计模式分类" tabindex="-1"><a class="header-anchor" href="#设计模式分类"><span>设计模式分类</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 创建型模式（五种）：用于解决对象的创建问题，抽象了实例化过程，使对象的创建和使用解耦</span>
- 着重点：提供了一种在创建对象时隐藏创建逻辑的方式，而不是直接实例化对象，提高了对象创建的灵活性
<span class="token number">1</span>. 工厂方法模式：允许一个类的实例化（产品的创建）延迟到子类中实现
<span class="token number">2</span>. 抽象工厂模式：选择产品簇的创建
<span class="token number">3</span>. 单例模式：控制对象实例的数目（一个类仅有一个实例对象。 	vuex、redux）
<span class="token number">4</span>. 建造者（生成器）模式：分离整体构建和部件的构造
<span class="token number">5</span>. 原型模式：克隆生成对象


<span class="token comment">## 结构型模式（七种）：描述如何将类或对象进行组合以实现更大的结构或新功能，实现多个类之间协同工作</span>
- 着重点： 关注类和对象的组合
<span class="token number">1</span>. 适配器模式：转换匹配，复用功能（一种数据结构改成另一种数据结构。	枚举值接口变更）
<span class="token number">2</span>. 装饰器模式：动态组合
<span class="token number">3</span>. 代理<span class="token punctuation">(</span>委托<span class="token punctuation">)</span>模式：代理对象和本体对象具有一致的接口（控制对象的访问。	图片懒加载）
<span class="token number">4</span>. 外观模式：封装交互，简化调用
<span class="token number">5</span>. 桥接模式：分离抽象和实现
<span class="token number">6</span>. 组合模式：在对象间形成一致对待的树形结构（统一叶子对象和组合对象。	扫描文件夹）
<span class="token number">7</span>. 享元模式：分离与共享，减少对象创建的个数，节约对象开销成本（减少创建实例的个数。	男女模具试装）


<span class="token comment">## 行为型模式（十一种）：描述算法和对象之间的交互和职责分配</span>
<span class="token number">1</span>. 策略模式：根据不同参数可以命中不同的策略（分离算法，选择实现。	表单校验）
<span class="token number">2</span>. 状态模式：根据状态来分离和选择行为
<span class="token number">3</span>. 命令<span class="token punctuation">(</span>事务<span class="token punctuation">)</span>模式：不同对象间约定好相应的接口（封装请求。	项目负责人分配任务给相应的工作人员，而无需知道任务怎么完成）
<span class="token number">4</span>. 备忘录模式：保存和恢复内部状态
<span class="token number">5</span>. 职责链模式：通过请求第一个条件，会持续执行后续的条件，直到返回结果为止（分离职责，动态组合。	if-else的优化）
<span class="token number">6</span>. 迭代器模式：能获取聚合对象的顺序和元素（控制访问聚合对象中的元素。 each<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">]</span>, cb<span class="token punctuation">)</span>）
<span class="token number">7</span>. 解释器模式：分离实现，解释执行
<span class="token number">8</span>. 访问者模式：把对元素的访问操作交给访问者
<span class="token number">9</span>. 中介者<span class="token punctuation">(</span>调停<span class="token punctuation">)</span>模式：对象和对象之间借助第三方中介者进行通信（封装交互，对象间解耦。	测试结束告知结果）
<span class="token number">10</span>. 观察者<span class="token punctuation">(</span>发布订阅<span class="token punctuation">)</span>模式：当观察对象发生变化时，自动调用相关函数（订阅消息，发布通知消息更新。	vue 双向绑定）
<span class="token number">11</span>. 模板方法模式：父类中定好执行顺序（将定义<span class="token string">&#39;算法步骤骨架&#39;</span>和<span class="token string">&#39;具体实现&#39;</span>分离。	咖啡和茶）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="创建型模式" tabindex="-1"><a class="header-anchor" href="#创建型模式"><span>创建型模式</span></a></h2><h3 id="【工厂模式】" tabindex="-1"><a class="header-anchor" href="#【工厂模式】"><span>【工厂模式】</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 工厂模式描述</span>
- 工厂模式是定义一个创建对象的接口，这个接口由子类决定实例化哪一个类。
- 即是使一个类的实例化延迟到子类；而子类可以重写接口方法以便创建时指定自己的对象类型。
- 主要思想：将创建者（对象的创建）与构造函数（对象的实现）分离开。将对象的逻辑封装在一个函数中（工厂函数），而不暴露对象创建的逻辑

<span class="token comment">## JS的实现：</span>
根据不同的输入返回不同类的实例，一般用来创建同一类对象
因为 JS 中没有抽象类，所以可将工厂模式看做一个实例化对象的工厂类。


<span class="token comment">## 工厂模式分类</span>
工厂模式根据抽象程度不同可分为：
<span class="token number">1</span>. 简单工厂
<span class="token number">2</span>. 工厂方法
<span class="token number">3</span>. 抽象工厂

<span class="token comment">## 优点</span>
<span class="token number">1</span>. 对象的创建过程可能比较复杂，而访问者无需知道创建的具体流程（调用者想创建对象，只需要知道其名称）
<span class="token number">2</span>. 通过工厂方法分离构造函数和创建者，符合“开放封闭原则”
<span class="token number">3</span>. 扩展性优良，如果想增加一个产品，只需要扩展一个工厂类
<span class="token number">4</span>. 解耦了高层逻辑和底层产品类，符合最少知识原则，无需了解底层逻辑

<span class="token comment">## 缺点</span>
<span class="token number">1</span>. 每次新增或删除产品种类时，不仅要增加产品类，还需要对应修改的工厂方法，违反了开闭原则，也导致这个方法变得臃肿、高耦合。
<span class="token number">2</span>. 考虑到系统的可扩展性，需要引用抽象层，在客户端代码中均使用抽象层进行定义，带来了额外的系统复杂度，增加了系统的抽象性和理解难度


<span class="token comment">## 工厂模式适用场景</span>
<span class="token number">1</span>. 如果不想让某个子系统与较大的那个对象之间形成强耦合，而是想运行时从许多子系统中进行挑选时，此模式为最佳选择
<span class="token number">2</span>. 将 new 操作简单封装，遇到 new 时应该考虑是否用工厂模式
<span class="token number">3</span>. 处理大量具有相同属性的小对象


<span class="token comment">## 非适用场景</span>
当被应用到错误的问题类型上时，这一模式会给应用程序引来大量不必要的复杂性，除非为创建对象提供一个接口是我们编写的库或者框架的一个设计上目标，否则就建议使用明确的构造器，以避免不必要的开销。
由于对象的创建过程被高效的抽象在一个接口后面的事实，这也会给依赖于这个过程可能或有多复杂的单元测试带来问题。


<span class="token comment">## 工厂模式的应用：vue的异步组件 与 React的createElement()</span>
在大型应用中，我们可能需要将应用分割成小一些的代码块，并且只在需要的时候才从服务器加载一个模块。
为了简化，Vue允许以一个工厂函数的方式定义你的组件，这个工厂函数会异步解析你的组件定义。
Vue只有在这个组件需要被渲染时才会触发该工厂函数，且会把结果缓存起来供未来重渲染。


<span class="token comment">## 工厂模式 与 模板方法模式 的主要区别</span>
- 工厂模式主要关注产品实例的创建，对创建流程封闭起来
- 模板方法模式主要专注的是为固定的算法骨架提供某些步骤的实现
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="工厂模式应用1-vue的异步组件" tabindex="-1"><a class="header-anchor" href="#工厂模式应用1-vue的异步组件"><span>工厂模式应用1：vue的异步组件</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;async-example&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;这是一个异步组件！&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="工厂模式应用2-路由权限控制" tabindex="-1"><a class="header-anchor" href="#工厂模式应用2-路由权限控制"><span>工厂模式应用2：路由权限控制</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** router/index.js */</span>

<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Router<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//重定向到登录页</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//登陆页</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Login&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../components/Login.vue&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// routerFactory.js</span>
<span class="token keyword">const</span> AllRoute <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">//超级管理员页面</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/super-admin&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;SuperAdmin&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../components/SuperAdmin.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//普通管理员页面</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/normal-admin&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;NormalAdmin&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../components/Admin.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//普通用户页面</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../components/User.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//404页面</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;NotFound404&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../components/404.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">routerFactory</span> <span class="token operator">=</span> <span class="token punctuation">(</span>role<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>role<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;superAdmin&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;SuperAdmin&#39;</span><span class="token punctuation">,</span>
        route<span class="token operator">:</span> AllRoute
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;normalAdmin&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;NormalAdmin&#39;</span><span class="token punctuation">,</span>
        route<span class="token operator">:</span> AllRoute<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;user&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span>
        route<span class="token operator">:</span>  AllRoute<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span> 
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;参数错误! 可选参数: superAdmin, normalAdmin, user&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// Login.vue</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>routerFactory<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../router/routerFactory.js&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">userLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//请求登陆接口, 获取用户权限, 根据权限调用this.getRoute方法</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">getRoute</span><span class="token punctuation">(</span><span class="token parameter">role</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//根据权限调用routerFactory方法</span>
      <span class="token keyword">let</span> routerObj <span class="token operator">=</span> <span class="token function">routerFactory</span><span class="token punctuation">(</span>role<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">//给vue-router添加该权限所拥有的路由页面</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">addRoutes</span><span class="token punctuation">(</span>routerObj<span class="token punctuation">.</span>route<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">//跳转到相应页面</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> routerObj<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在实际项目中，因为使用<code>this.$router.addRoutes</code>方法添加的路由刷新后不能保存，所以会导致路由无法访问。通常的做法是本地加密保存用户信息，在刷新后获取本地权限并解密，根据权限重新添加路由。</p></blockquote><h3 id="【简单工厂模式】" tabindex="-1"><a class="header-anchor" href="#【简单工厂模式】"><span>【简单工厂模式】</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 简单工厂模式的优缺点及应用场景</span>
<span class="token number">1</span>. 简单工厂的优点：
	使用工厂函数时，只需传递一个合法的参数，就可以获取到想要的对象，而无需了解创建并返回该对象的具体细节。

<span class="token number">2</span>. 简单工厂的缺点
	因为在工厂函数内包含了所有对象的构造函数和判断逻辑代码，若每次需要添加一个对象，则需要新增一个构造函数，当我们所需要维护的对象过多时，则这个函数将会成为超级函数，而导致难以维护。

<span class="token number">3</span>. 简单工厂的推荐应用场景
	简单工厂模式只适用于所创建构造函数产生的对象数量少，以及逻辑简单的情况（因为对象数量过多会导致后期难以维护该工厂）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 工厂构造函数 */</span>
<span class="token keyword">function</span> <span class="token function">Superman</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;超级管理员&#39;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>role <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;修改密码&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;发布消息&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;查看主页&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">CommonMan</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;普通用户&#39;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>role <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;查看主页&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 简单工厂 */</span>
<span class="token keyword">function</span> <span class="token function">Factory</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">Factory</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getInstance</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">className</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;new&#39;</span> <span class="token operator">+</span> className <span class="token operator">+</span> <span class="token string">&#39;()&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;参数错误，不存在该工厂构造函数&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&#39;Superman&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&#39;CommonMan&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>name<span class="token punctuation">,</span> obj2<span class="token punctuation">.</span>name<span class="token punctuation">)</span>	<span class="token comment">// 超级管理员， 普通用户</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实际版" tabindex="-1"><a class="header-anchor" href="#实际版"><span>实际版</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 简单工厂函数 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">factory</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">role</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">superman</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;超级管理员&#39;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>role <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;修改密码&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;发布消息&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;查看主页&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">commonMan</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;普通用户&#39;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>role <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;查看主页&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">switch</span> <span class="token punctuation">(</span>role<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;superman&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">superman</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token string">&#39;man&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">commonMan</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;参数错误&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 模式调用 */</span>
<span class="token keyword">const</span> superman <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token string">&#39;superman&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> man <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token string">&#39;man&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>superman<span class="token punctuation">.</span>role<span class="token punctuation">,</span> man<span class="token punctuation">.</span>role<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="简单工厂优化" tabindex="-1"><a class="header-anchor" href="#简单工厂优化"><span>简单工厂优化</span></a></h4><p>factory就是一个简单的工厂，该工厂中存在两个构造函数分别对应不同的权限。我们只需要传递相应的参数就可以获取一个实例对象。因为工厂内部的构造函数有相似的地方，所以还可以进一步优化。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 简单工厂（优化版） */</span>
<span class="token keyword">const</span> <span class="token function-variable function">factory</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">role</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">User</span> <span class="token punctuation">(</span><span class="token parameter">userObj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> userObj<span class="token punctuation">.</span>name
    <span class="token keyword">this</span><span class="token punctuation">.</span>role <span class="token operator">=</span> userObj<span class="token punctuation">.</span>role
  <span class="token punctuation">}</span>

  <span class="token keyword">switch</span> <span class="token punctuation">(</span>role<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;superman&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;平台用户&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">role</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;主页&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;登录页&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token string">&#39;man&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;游客&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">role</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;登录页&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;参数错误&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 模式调用 */</span>
<span class="token keyword">const</span> superman <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token string">&#39;superman&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> man <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token string">&#39;man&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>superman<span class="token punctuation">.</span>role<span class="token punctuation">,</span> man<span class="token punctuation">.</span>role<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="【工厂方法模式】抽象思考" tabindex="-1"><a class="header-anchor" href="#【工厂方法模式】抽象思考"><span>【工厂方法模式】抽象思考</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 工厂方法（Factory Method）：抽象思考</span>
工厂方法模式是说将提供某一产品的过程进行抽象，通过接口的模式去规范出来。
类似的，我们很多做事的过程，都是面向过程，没有抽象提炼一下。如果经过进一步思考，那么可以往上再提炼一个层次，发现事物的本质：到底在做什么，我们的职责是什么，提供什么样的价值。想的更清楚，做的也会更加准确。


<span class="token comment">## 工厂方法模式描述</span>
允许一个类的实例化推迟到子类中进行。这样核心类就会变成抽象类，而工厂方法的工程类，它只需做实例化这件事。
一般采用安全模式创建工厂对象。


<span class="token comment">## 工厂方法模式相对于简单工厂模式</span>
在简单工厂模式中，我们添加一个新对象需要 添加相应新的构造函数 和 对该对象的判定，
在工厂方法模式中，我们只需要修改它的原型类即可。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt="工厂方法模式"></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 工厂 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">factory</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>role<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">factory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token keyword">this</span></span><span class="token punctuation">[</span>role<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
     <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">factory</span><span class="token punctuation">(</span>role<span class="token punctuation">)</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 工厂的原型类 */</span>
factory<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">admin</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;平台用户&#39;</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>role <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;登录页&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;主页&#39;</span><span class="token punctuation">]</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token function-variable function">common</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;游客&#39;</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>role <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;登录页&#39;</span><span class="token punctuation">]</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token function-variable function">test</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;测试&#39;</span><span class="token punctuation">;</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>role <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;登录页&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;主页&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;测试页&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>test <span class="token operator">=</span> <span class="token string">&#39;我还有一个测试属性哦&#39;</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 工厂方法的实例化对象 */</span>
<span class="token keyword">const</span> admin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">factory</span><span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> common <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">factory</span><span class="token punctuation">(</span><span class="token string">&#39;common&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">factory</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>admin<span class="token punctuation">,</span> common<span class="token punctuation">,</span> test<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="【抽象工厂模式】多套方案" tabindex="-1"><a class="header-anchor" href="#【抽象工厂模式】多套方案"><span>【抽象工厂模式】多套方案</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 抽象工厂（Abstract Factory）：多套方案</span>
抽象工厂模式是对创建不同的产品类型的抽象。
在工作中，我们应该具备提供多套方案的能力，来提供选择规避风险。当你有这样的前瞻意识，一般也会被打上思考较多的标签，但是内在来说，的确想问题更加全面了。


<span class="token comment">## 描述</span>
通过对类的工厂抽象使其业务用于对产品类簇的创建，而不是负责创建某一类产品的实例。
关键在于使用抽象类制定了实例的结构，调用者直接面对实例的结构编程，从实例的具体实现中解耦。

<span class="token comment">## 优点</span>
- 抽象产品类将产品的结构抽象出来，访问者不需要知道产品的具体实现，只需要面向产品的结构编程即可，丛产品的具体实现中解耦

<span class="token comment">## 缺点</span>
- 扩展新类簇的产品类比较困难，因为需要创建新的抽象产品类，并且还要修改工厂类，违反开放封闭原则
- 带来了系统复杂度，增加新的类，和新的继承关系

<span class="token comment">## 适用场景</span>
如果一组实例都有相同的结构，那么就可以使用抽象工厂模式


<span class="token comment">## 抽象工厂模式 与 工厂模式 的区别</span>
- 工厂模式主要关注单独的产品实例的创建
- 抽象工厂模式主要关注产品类簇实例的创建，如果产品类簇只有一个产品，那么这时的抽象工厂模式就退化为工厂模式了


<span class="token comment">## 抽象工厂模式的通用实现：</span>
Factory ：工厂，负责返回产品实例；
AbstractFactory ：虚拟工厂，制定工厂实例的结构；
Product：产品，访问者从工厂中拿到的产品实例，实现抽象类；
AbstractProduct ：产品抽象类，由具体产品实现，制定产品实例的结构；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+e+`" alt="抽象工厂模式"></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 用户登录抽象类 */</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractUserLogin</span> <span class="token punctuation">{</span>
  kind<span class="token operator">:</span> <span class="token builtin">string</span>
  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>kind <span class="token operator">=</span> <span class="token string">&#39;登录方法&#39;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 抽象方法</span>
  <span class="token keyword">abstract</span> <span class="token function">goLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 微信登录 */</span>
<span class="token keyword">class</span> <span class="token class-name">UserOfWechat</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractUserLogin</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;微信登录&#39;</span>
  <span class="token punctuation">}</span>
  <span class="token function">goLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>kind <span class="token operator">+</span> <span class="token string">&#39;:&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>type<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** QQ登录 */</span>
<span class="token keyword">class</span> <span class="token class-name">UserOfQQ</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractUserLogin</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;QQ登录&#39;</span>
  <span class="token punctuation">}</span>
  <span class="token function">goLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>kind <span class="token operator">+</span> <span class="token string">&#39;:&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>type<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 用户的抽象工厂 */</span>
<span class="token keyword">class</span> <span class="token class-name">AbstractUserFactory</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">setUserLoginType</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&#39;wechat&#39;</span><span class="token operator">:</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">UserOfWechat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">case</span> <span class="token string">&#39;qq&#39;</span><span class="token operator">:</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">UserOfQQ</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;参数错误, 可选参数:wechat、qq&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 抽象工厂实例调用 */</span>
<span class="token keyword">const</span> userLogin1 <span class="token operator">=</span> AbstractUserFactory<span class="token punctuation">.</span><span class="token function">setUserLoginType</span><span class="token punctuation">(</span><span class="token string">&#39;qq&#39;</span><span class="token punctuation">)</span>
userLogin1<span class="token punctuation">.</span><span class="token function">goLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 登录方法:微信登录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="单例模式-singleton" tabindex="-1"><a class="header-anchor" href="#单例模式-singleton"><span>单例模式 Singleton</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 单例模式（Singleton）：单一专注</span>
单例模式是指在多线程的情况下，保证一个类只能构造出唯一实例，并提供一个访问它的全局访问点。
	- 涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单一对象被创建。
	- 这个单例类提供了一种访问其唯一对象的方式，可以直接访问，不需要实例化该类的对象。


<span class="token comment">## JS 中的单例模式</span>
	- 因为JS不存在类，只需用一个变量确保实例只创建一次即可（JS中实现该类的原理是使用了对象的浅拷贝）
	- 相对于通过 class 生成对象的单例模式，在 js 中我们可以直接生成对象，并且这个对象就是全局唯一，所以在 js 中单例模式是浑然天成，我们平常是不会感知的。尤其是现在开发使用的 ES6 module 模块，每个模块也同样是一个单例对象。



<span class="token comment">## 优点·</span>
	- 划分命名空间，减少全局变量
	- 增强模块化，将自己的代码放在一个全局变量名下，便于维护
	- 即使是调用多次，也只会实例化一次，其余的都是将实例化对象复制给它

<span class="token comment">## 缺点</span>
	- 由于单例模式提供的是一种单点访问，所以它有可能导致模块间的强耦合，从而不利于单元测试。无法单独测试一个调用了来自单例的方法的类，而只能把它与那个单例作为一个单元一起测试。
	- 可测试性不强、对抽象、继承、多态都支持得不友好等。


<span class="token comment">## 场景实例</span>
  - 如全局缓存、全局状态管理等这些只有一个对象可访问，就可以使用单例模式构建
  - 定义命名空间和实现分支型方法
  - vuex 和 redux 中的 store
  - 弹框层的创建：
      实现弹框的一种做法是先创建好弹框，然后使之隐藏，但这样会浪费部分不必要的 DOM 开销。
      我们可以在需要弹框时再进行创建，同时结合单例模式实现只有一个实例，从而节省部分 DOM 开销，以及防止出现多个弹层在页面中显示的问题。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+'" alt="单例模式"></p><p><img src="'+c+`" alt="image-20230425230812561"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 单例模式 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">Singleton</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
Singleton<span class="token punctuation">.</span><span class="token function-variable function">getInstance</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>instance
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> Singleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> Singleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 因为单例模式只创建一次实例，而第二次触发的是将第一次创建的实例赋值给 s2，所以两个实例是相等的</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="【典例一】vuex" tabindex="-1"><a class="header-anchor" href="#【典例一】vuex"><span>【典例一】VUEX</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> Vue <span class="token operator">=</span> <span class="token keyword">null</span>
expoet <span class="token keyword">function</span> <span class="token function">install</span> <span class="token punctuation">(</span><span class="token parameter">_Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>Vue <span class="token operator">&amp;&amp;</span> _Vue <span class="token operator">===</span> Vue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果发现 Vue 有值，则无需重新创建实例</span>
   <span class="token keyword">return</span>
  <span class="token punctuation">}</span> 
  Vue <span class="token operator">=</span> _Vue
  <span class="token function">applyMixin</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="【典例二】创建弹层" tabindex="-1"><a class="header-anchor" href="#【典例二】创建弹层"><span>【典例二】创建弹层</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// ElementUI 的 Loading</span>
<span class="token comment">// ~/packages/loading/src/index.js</span>

<span class="token keyword">let</span> fullscreenLoading<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Loading</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token comment">// options 不传的话默认是 fullscreen</span>
  options <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> defaults<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>fullscreen <span class="token operator">&amp;&amp;</span> fullscreenLoading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> fullscreenLoading<span class="token punctuation">;</span> <span class="token comment">// 存在直接 return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> parent <span class="token operator">=</span> options<span class="token punctuation">.</span>body <span class="token operator">?</span> document<span class="token punctuation">.</span>body <span class="token operator">:</span> options<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
  <span class="token keyword">let</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LoadingConstructor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> options
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token operator">...</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>fullscreen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fullscreenLoading <span class="token operator">=</span> instance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 这样在使用 Element 的 loading 的时候，如果同时调用两次，其实只会有一个 loading 的遮罩层，第二个并不会显示。</span>
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> first <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;我是第一个全屏loading&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> second <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;我是第二个&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>first <span class="token operator">===</span> second<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+`" alt="image-20230425230635668"></p></blockquote><h3 id="建造者模式-builder" tabindex="-1"><a class="header-anchor" href="#建造者模式-builder"><span>建造者模式 Builder</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 建造者（Builder）：善于分解</span>
生成器模式是对一个个体的创建过程进行细分，拆解为不同的创建部分。

建造者模式主要作用：分步构建一个复杂的对象，将一个复杂对象的构建层与其表示层分离。若不是极其复杂的对象，应选择适用对象字面或工厂模式等方式创建对象。
实现原理：通常使用 链式调用 来进行建造过程，最后调用 build<span class="token punctuation">(</span><span class="token punctuation">)</span> 方法生成最终对象


<span class="token comment">## 优点</span>
- 封装性好，创建和使用分离
- 扩展性好，建造类之间独立，一定程度上解耦

<span class="token comment">## 缺点</span>
- 产生多余的 Builder 对象
- 产品内部发生变化，建造者都要修改，成本较大

<span class="token comment">## 适用场景</span>
<span class="token number">1</span>. 相同的方法，不同的执行顺序，产生不一样的产品时适用。
<span class="token number">2</span>. 产品的组成部件类似，通过组装不同的组件获得不同产品时适用。
<span class="token number">3</span>. 在设计组件时，如果组件的参数会经常变动，并且越来越多，可引入一个 Object 类型的参数，然后将相关的参数内聚到 Object 中进行传递。


<span class="token comment">## 建造者模式 与工厂模式 的区别</span>
- 工厂模式关注的是创建的结果
- 建造者模式不仅得到结果，同时也参与了创建的具体过程


<span class="token comment">## 建造者模式的通用实现：</span>
Builder: 生成器接口，定义创建一个Product对象各个部件的操作。
ConcreteBuilder: 具体的生成器实现，实现各个部件的创建，并负责组装Product对象的各个部件，同时还提供一个返回Product对象的方法。
Director: 指导者，主要用来使用Builder接口，以一个统一的过程来构建所需要的Product对象。
		- 在 Director 类的构造函数中持有一个 Builder 实例，然后调用 Builder 类的 buildPart 和 getResult 即可创建对象。
		- 未来有新的对象需要创建时，只需实现新的 Builder 类即可，无需修改 Director 实例。
Product: 产品，表示被生成器构建的复杂对象，包含多个部件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt="生成器模式"></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 汽车零件大小类型约束 */</span>
<span class="token keyword">type</span> <span class="token class-name">CarPartType</span> <span class="token operator">=</span> <span class="token string">&#39;small&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;normal&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;big&#39;</span>

<span class="token doc-comment comment">/** 建造者：汽车部件厂家，提供具体零部件的生产 */</span>
<span class="token keyword">class</span> <span class="token class-name">CarPartBuilder</span> <span class="token punctuation">{</span>
  color<span class="token operator">:</span> <span class="token builtin">string</span>
  weight<span class="token operator">:</span> <span class="token builtin">string</span>
  tyreType<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  engineType<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// buildTyre: &lt;T extends CarPartType&gt;(type: T) =&gt; void</span>
  <span class="token comment">// buildEngine?: &lt;T extends CarPartType&gt;(type: T) =&gt; void</span>

  <span class="token function">constructor</span> <span class="token punctuation">(</span>color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> weight<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color
    <span class="token keyword">this</span><span class="token punctuation">.</span>weight <span class="token operator">=</span> weight
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 生产部件：轮胎 */</span>
  <span class="token function">buildTyre</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&#39;small&#39;</span><span class="token operator">:</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tyreType <span class="token operator">=</span> <span class="token string">&#39;小号轮胎&#39;</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">&#39;normal&#39;</span><span class="token operator">:</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tyreType <span class="token operator">=</span> <span class="token string">&#39;中号轮胎&#39;</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">&#39;big&#39;</span><span class="token operator">:</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tyreType <span class="token operator">=</span> <span class="token string">&#39;大号轮胎&#39;</span>
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 生产部件：发动机 */</span>
  <span class="token function">buildEngine</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&#39;small&#39;</span><span class="token operator">:</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>engineType <span class="token operator">=</span> <span class="token string">&#39;小马力发动机&#39;</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">&#39;normal&#39;</span><span class="token operator">:</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>engineType <span class="token operator">=</span> <span class="token string">&#39;中马力发动机&#39;</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">&#39;big&#39;</span><span class="token operator">:</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>engineType <span class="token operator">=</span> <span class="token string">&#39;大马力发动机&#39;</span>
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 汽车厂家：负责汽车产品零件的装配 */</span>
<span class="token keyword">class</span> <span class="token class-name">CarDirector</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span>tyre<span class="token operator">:</span> CarPartType<span class="token punctuation">,</span> engine<span class="token operator">:</span> CarPartType<span class="token punctuation">,</span> param<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CarPartBuilder</span><span class="token punctuation">(</span>param<span class="token punctuation">.</span>color<span class="token punctuation">,</span> param<span class="token punctuation">.</span>weight<span class="token punctuation">)</span>
    car<span class="token punctuation">.</span><span class="token function">buildTyre</span><span class="token punctuation">(</span>tyre<span class="token punctuation">)</span>
    car<span class="token punctuation">.</span><span class="token function">buildEngine</span><span class="token punctuation">(</span>engine<span class="token punctuation">)</span>
    <span class="token keyword">return</span> car
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 产品实例 */</span>
<span class="token keyword">const</span> product1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CarDirector</span><span class="token punctuation">(</span><span class="token string">&#39;small&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;big&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> weight<span class="token operator">:</span> <span class="token string">&#39;1600kg&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> product2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CarDirector</span><span class="token punctuation">(</span><span class="token string">&#39;normal&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;small&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">,</span> weight<span class="token operator">:</span> <span class="token string">&#39;2000kg&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>product1<span class="token punctuation">,</span> product2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="【原型模式】传承知识" tabindex="-1"><a class="header-anchor" href="#【原型模式】传承知识"><span>【原型模式】传承知识</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 原型（Prototype）：传承知识</span>
原型模式是利用拷贝对象的方法，减少一些复杂的创建过程。
很多方案不是每次都需要重写，是可以在原来的方案上进行拷贝服用的。这个 clone 的过程，往往是只是传承的结果。如果有比较好的传承机制，那么会大大提升服务效率。

<span class="token comment">## 描述</span>
- 用原型实例指定创建对象的种类，并通过拷贝这些原型创建新的对象。
- 原型模式是用于创建重复的对象，同时又能保证性能。

<span class="token comment">## JS构建</span>
用同一个原型 new 出来的实例，拥有相同的原型上的属性和方法
注意：用构造函数创建函数时不可以使用箭头函数（因为箭头函数没有自己的上下文 this指向）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt="原型模式"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 类 */</span>
<span class="token keyword">class</span> <span class="token class-name">PersonProperty</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 原型 */</span>
<span class="token class-name">PersonProperty</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;willy&#39;</span>
<span class="token class-name">PersonProperty</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 实例化 */</span>
<span class="token keyword">const</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PersonProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PersonProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
person1<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;willy&#39;</span>
person2<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;willy&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="结构型模式" tabindex="-1"><a class="header-anchor" href="#结构型模式"><span>结构型模式</span></a></h2><h3 id="适配器模式-adapter" tabindex="-1"><a class="header-anchor" href="#适配器模式-adapter"><span>适配器模式 Adapter</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 适配器（Adapter）：适应能力</span>
- 适配器是为了结合原来的能力，适配新的接口服务，比如适配不同的协议入口。
- 将一个类的接口转化为另外一个接口，以满足用户的需求，使类之间的接口不兼容问题通过适配器得以解决。


<span class="token comment">## 适用场景</span>
- 当你想要已有对象的功能，却想修改它的接口时，一般可考虑是否可以应用适配器模式。
- 如果你想要一个已经存在的对象，但是它的接口不满足需求，那么可以使用适配器模式把已有的实现转换成你需要的接口。
- 如果你想创建一个可复用的对象，而且确定需要和一些不兼容的对象一起工作，这种情况可以使用适配器模式，然后需要什么就适配什么。
- 实际场景如：系统集成、旧系统升级、第三窟调用等。


<span class="token comment">## 优点</span>
- 已有的功能如果只是接口不兼容，使用适配器适配已有功能，可以使原有逻辑得到更好的服用，有助于避免大规模改写现有代码。
- 可扩展性良好，在实现适配器功能时，可以调用自己开发的功能，从而方便地扩展系统功能。
- 灵活性好，因为适配器并没有对原有对象的功能有所影响，如果不想使用适配器，直接删除即可，不会对使用原有对象的代码有影响。
- 可以让任何两个没有关联的类一起运行，提高了类的复用。
- 适配对象，适配库，适配数据。

<span class="token comment">## 缺点</span>
- 额外对象的创建，非直接调用，存在一定的开销（且不像代理模式在某些功能点上可实现性能优化）
- 如果没必要使用适配器模式的话，可考虑重构，如果使用，则要尽量把说明文档完善。


<span class="token comment">## 应用实例：Vue的计算属性 computed</span>
因为旧的 data 数据不满足当前要求，通过计算属性的规则来适配成我们需要的格式，对原有数据并没有改变，只改变了原有数据的表现形式
	const message <span class="token operator">=</span> ref<span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span>
	const reverseMessage <span class="token operator">=</span> computed<span class="token variable"><span class="token punctuation">((</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> message.value.split<span class="token punctuation">(</span>&#39;&#39;<span class="token punctuation">)</span>.reverse<span class="token punctuation">(</span><span class="token punctuation">)</span>.join<span class="token punctuation">(</span>&#39;&#39;<span class="token punctuation">))</span></span>	// olleH


<span class="token comment">## 其他相关模式</span>
适配器模式、代理模式 和 装饰者模式 都是属于包装模式，即是用一个对象来包装另一个对象的模式
<span class="token number">1</span>. 适配器模式 与 代理模式
	- 适配器模式：提供一个不一样的接口，由于原来的接口风格不能使用，提供新的接口可以满足新场景的需求。
	- 代理模式：提供一个一模一样的接口，由于不能直接访问目标对象，找个代理来帮忙访问，使用者就像访问目标对象一样来访问代理对象。
<span class="token number">2</span>. 适配器模式、装饰者模式 与 代理模式
	- 适配器模式：功能不变，只转换了原有接口访问格式。
	- 装饰者模式：扩展功能，原有功能不变且可直接使用。
	- 代理模式：原有功能不变，但一般是经过限制访问的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="适配器模式"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 原有接口（被适配者） */</span>
<span class="token keyword">class</span> <span class="token class-name">AdapteePlug</span> <span class="token punctuation">{</span>
  <span class="token function">getName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;iphone 充电头&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 目标接口（适配器） */</span>
<span class="token keyword">class</span> <span class="token class-name">Target</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>plug <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AdapteePlug</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">getName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>plug<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;适配器 Type-c 充电头&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 实例 */</span>
<span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Target</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> resultName <span class="token operator">=</span> target<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resultName<span class="token punctuation">)</span> <span class="token comment">// iphone 充电头适配器 Type-c 充电头</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="装饰器模式-decorator" tabindex="-1"><a class="header-anchor" href="#装饰器模式-decorator"><span>装饰器模式 Decorator</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 装饰（Decorator）：增量价值</span>
- 装饰模式是将原来的能力进行包装，并提供新的行为，是一种实现继承的替代方案。
- 就增加功能而言，装饰模式比生成子类更灵活。
- 装饰器模式是在不改变原对象的前提下，对其进行包装扩展（动态地添加新的功能或行为），从而提高代码的可复用性和灵活性，且不会影响这个类中派生的其他对象。


<span class="token comment">## 优点</span>
- 装饰类和被装饰类都只关心自身的核心业务，实现了解耦。
- 方便动态地扩展功能，且提供了比继承更多的灵活性。

<span class="token comment">## 缺点</span>
- 多层装饰比较复杂。
- 常常会引入许多小对象，看起来比较相似，实际功能大相径庭，从而使得我们的应用程序架构变得复杂起来。


<span class="token comment">## 适用场景</span>
<span class="token number">1</span>. 适用于扩展对象的功能，而无需修改现有的类或构造函数。
<span class="token number">2</span>. 将特征添加到对象中，而无需修改底层的代码。
<span class="token number">3</span>. 当我们接手老代码时，需要对它已有的功能做扩展。
<span class="token number">4</span>. 常用于组合多个小型功能


<span class="token comment">## 场景实例</span>
<span class="token number">1</span>. 常见场景：日志记录、性能统计、权限控制、缓存等。
<span class="token number">2</span>. core-decorators
<span class="token number">3</span>. ES7的装饰器 Decorator
<span class="token number">4</span>. 如现在有四种型号的自行车，我们为每种自行车都定义一个单独的类。
   现在要给每种自行车都装上前灯、尾灯和铃铛这三种配件。
   如果使用继承的方式来给每种自行车创建子类，则需要 <span class="token number">4</span>*3<span class="token operator">=</span><span class="token number">12</span> 个子类。
   但是如果把前灯、尾灯、铃铛这些对象动态组合到自行车上，则只需要额外增加 <span class="token number">3</span> 个类。


<span class="token comment">### 继承与装饰器的对比</span>
<span class="token number">1</span>. 继承的方式并不灵活，会导致超类和子类之间存在强耦合性，当超类改变时，子类也会随之改变
<span class="token number">2</span>. 在继承方式中，超累的内部细节是对子类可见的，继承常常被认为破坏了封装性
<span class="token number">3</span>. 在完成一些功能复用的同时，有可能创建出大量的子类，使子类的数量呈现爆炸性增长


<span class="token comment">### 代理模式与装饰器模式的区别</span>
业务上的区别：
<span class="token number">1</span>. 代理模式中是直接将原有对象封装到代理对象中，对于业务方不关心原始对象，直接使用代理对象即可。
<span class="token number">2</span>. 装饰器模式中，我们只提供了装饰函数、输入原始对象、输出增强对象。输出的增强对象还可以接着传入到新的装饰器函数中继续增强。对于业务方，可以随意组合装饰函数，但得有一个最开始的原始对象。

性质上的区别：
<span class="token number">1</span>. 代理模式：显示原有功能，但是可对原有功能进行限制。
<span class="token number">2</span>. 装饰器模式：扩展对象，原有功能不变且可直接使用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+k+`" alt="装饰器模式"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 原有老代码 */</span>
<span class="token keyword">let</span> <span class="token function-variable function">horribleCode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;一堆看不懂的老逻辑代码&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
* 对原有老代码已有功能做扩展
* 缺点1：直接修改已有的函数体，违背 &quot;开放封闭原则&quot;
* 缺点2：往一个函数体塞这么多逻辑，违背 &quot;单一职责原则&quot;
* 需优化项：为了不被已有的业务逻辑干扰，需将旧逻辑与新逻辑分离，把旧逻辑抽离出去
*/</span>
<span class="token function-variable function">horribleCode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;一堆看不懂的老逻辑代码&#39;</span><span class="token punctuation">)</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;添加的新逻辑代码&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">horribleCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token doc-comment comment">/**
* 优化：对老旧代码进行抽离
* 缺点1：临时变量会越来越多
* 缺点2：this 指向有时会出错
*/</span>
<span class="token function-variable function">horribleCode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;一堆看不懂的老逻辑代码&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> _horribleCode <span class="token operator">=</span> horribleCode
<span class="token function-variable function">horribleCode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token function">_horribleCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;添加的新逻辑代码&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">horribleCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="es6实现装饰器" tabindex="-1"><a class="header-anchor" href="#es6实现装饰器"><span>ES6实现装饰器</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 原有对象类 */</span>
<span class="token keyword">class</span> <span class="token class-name">HorribleCode</span> <span class="token punctuation">{</span>
 <span class="token function">control</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;一堆看不懂的老逻辑代码&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 老代码对应的装饰器 */</span>
<span class="token keyword">class</span> <span class="token class-name">Decorator</span> <span class="token punctuation">{</span>
 <span class="token comment">// 将老代码实例传入</span>
 <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">oldHC</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>oldHC <span class="token operator">=</span> oldHC
 <span class="token punctuation">}</span>
 <span class="token function">newHC</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;添加的新逻辑代码&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token function">control</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>oldHC<span class="token punctuation">.</span><span class="token function">control</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token comment">// 包装一层新逻辑</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">newHC</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试实例 */</span>
<span class="token keyword">const</span> oldHC <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HorribleCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> decorator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Decorator</span><span class="token punctuation">(</span>oldHC<span class="token punctuation">)</span>
decorator<span class="token punctuation">.</span><span class="token function">control</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="es7-装饰器" tabindex="-1"><a class="header-anchor" href="#es7-装饰器"><span>ES7 装饰器</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
* 优化：ES7 装饰器
*/</span>
<span class="token comment">// 装饰器函数，它第一个参数是目标类</span>
<span class="token keyword">function</span> <span class="token function">Decorator</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> name<span class="token punctuation">,</span> descriptor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> name<span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span>
 <span class="token keyword">const</span> originalMethod <span class="token operator">=</span> descriptor<span class="token punctuation">.</span>value
 descriptor<span class="token punctuation">.</span><span class="token function-variable function">value</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我是 Func 的装饰器逻辑&#39;</span><span class="token punctuation">)</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我是新的逻辑&#39;</span><span class="token punctuation">)</span>
   <span class="token comment">// eslint-disable-next-line prefer-rest-params</span>
   <span class="token keyword">return</span> <span class="token function">originalMethod</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> descriptor
<span class="token punctuation">}</span>

<span class="token comment">// 将装饰器 安装到 HorribleCode 上</span>
<span class="token keyword">class</span> <span class="token class-name">HorribleCode</span> <span class="token punctuation">{</span>
 @Decorator
 <span class="token function">control</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我是一堆看不懂的老逻辑代码&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 验证装饰器是否生效</span>
<span class="token keyword">const</span> horribleCode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HorribleCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
horribleCode<span class="token punctuation">.</span><span class="token function">control</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="柯里化函数实现装饰器" tabindex="-1"><a class="header-anchor" href="#柯里化函数实现装饰器"><span>柯里化函数实现装饰器</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">wear1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">wear2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">wear3</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 前置函数</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">before</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">beforeFn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token comment">// 保存原函数引用</span>
 <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 返回包含了原函数和新函数的 &#39;代理函数&#39;</span>
   <span class="token function">beforeFn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span> <span class="token comment">// 执行新函数，修正this</span>
   <span class="token keyword">return</span> <span class="token function">self</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span> <span class="token comment">// 执行原函数</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 后置函数</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">after</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">afterFn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span>
 <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">self</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
   <span class="token keyword">return</span> <span class="token function">afterFn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
wear2<span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span>wear3<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">before</span><span class="token punctuation">(</span>wear1<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token doc-comment comment">/**
* 优化：防止污染原生函数
*/</span>
<span class="token keyword">const</span> <span class="token function-variable function">after</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> afterFn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
   <span class="token function">afterFn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> wear <span class="token operator">=</span> <span class="token function">after</span><span class="token punctuation">(</span><span class="token function">after</span><span class="token punctuation">(</span>wear1<span class="token punctuation">,</span> wear2<span class="token punctuation">)</span><span class="token punctuation">,</span> wear3<span class="token punctuation">)</span>
<span class="token function">wear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="react的装饰器模式" tabindex="-1"><a class="header-anchor" href="#react的装饰器模式"><span>React的装饰器模式</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//  React中随处可见的装饰模式</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>
<span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
 <span class="token comment">// ...具体逻辑</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="代理模式-proxy" tabindex="-1"><a class="header-anchor" href="#代理模式-proxy"><span>代理模式 Proxy</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 代理模式(委托模式)（Proxy）：理解保护</span>
- 为一个对象包装一个类，以便对相关操作进行二次转发 或 管控对它访问。
- 代理模式把代理对象插入到访问者和目标对象之间，从而为访问者对目标对象的访问引入一定的间接性。正是这种间接性给了代理对象很多操作空间，比如在调用目标对象前和调用后进行一些预操作和后操作，从而实现新功能或者扩展目标的功能。


<span class="token comment">## 优点</span>
- 代理模式能将访问者与被调用对象分离，在一定程度上降低了系统的耦合度。
- 代理模式在访问者和目标对象之间，可以起到 中介和保护目标对象 的作用。
- 代理对象可以扩展目标对象的功能，通过修改代理对象即可，符合 <span class="token string">&quot;开闭原则&quot;</span>。
- 符合 <span class="token string">&quot;单一职责原则&quot;</span>，如果直接修改对象，会增加原有对象的复杂度，原对象如何负责的职责过多，引起对象改动的原因就会增多。

<span class="token comment">## 缺点</span>
- 处理请求速度可能有差别，非直接访问存在一定开销。
- 增加了系统的复杂度。


<span class="token comment">## 应用场景实例</span>
常用的虚拟代理形式：某一个花销很大的操作，可以通过虚拟代理的方式延迟到这种需要它的时候才去创建。
		如使用虚拟代理实现图片懒加载：先通过一张loading图占位，然后通过异步的方式加载图片，等图片加载好再把完成的图片加载到img标签里面。
- ES6的代理对象 Proxy<span class="token punctuation">(</span><span class="token punctuation">)</span>。


<span class="token comment">## 代理模式与装饰器模式区别</span>
- 装饰器模式：扩展功能，原有功能不变且可直接使用
- 代理模式：显示原有功能，但是是经过限制之后的


<span class="token comment">## 代理模式与适配器模式的区别</span>
- 适配器模式：主要用来解决接口之间不匹配的问题，通常是为所适配的对象提供一个不同的接口
- 代理模式：提供访问目标对象的间接访问，以及对目标对象功能的扩展，一般提供和目标对象一样的接口


<span class="token comment">## 1.1 正向代理</span>
一般的访问流程是客户端直接向目标服务器发送请求并获取内容，使用正向代理后，客户端改为向代理服务器发送请求，并指定目标服务器（原始服务器）。然后由代理服务器和原始服务器通信，转交请求并获得的内容，再返回给客户端。
正向代理隐藏了真实的客户端，为客户端收发请求，使真实客户端对服务器不可见。

<span class="token comment">## 1.2 反向代理</span>
与一般访问流程相比，使用反向代理后，直接收到请求的服务器是代理服务器，然后将请求转发给内部网络上真正进行处理的服务器，并将得到的结果返回给客户端。
反向代理隐藏了真实的服务器，为服务器收发请求，使真实服务器对客户端不可见。常用于处理跨域请求。

<span class="token comment">## 2. 虚拟代理</span>
虚拟代理是把一些开销很大的对象，延迟到真正需要它的时候才去创建执行。
如图片的懒加载：在浏览一些购物商城时会发现，当网络不太好的情况下，有些图片是加载不出来的，会有一张图片去代替它的实际图片，等网络图片加载完成后才会被实际图片代替。

<span class="token comment">## 3. 缓存代理</span>
缓存代理是可以为一些开销大的运算结果提供暂时的存储，在下次运算时，如果传递进来堵塞参数跟之前一致，则可直接返回前面存储的运算结果。
比如前后端分离，向后端请求分页数据时，每次页码改变时都需要重新请求后端数据，我们可以将页面和对应的结果进行缓存，当请求同一页时，就不再请求后端的接口，而是从缓存中取数据。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt="代理模式"></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
 <span class="token function">sayName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;willysliang&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token function">sayAge</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 代理类 */</span>
<span class="token keyword">class</span> <span class="token class-name">PersonProxy</span> <span class="token punctuation">{</span>
 person<span class="token operator">:</span> Person
 <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// 代理调用 Person 的方法</span>
 <span class="token function">callMethod</span> <span class="token punctuation">(</span>functionName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 代理方法</span>
   <span class="token keyword">try</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>person<span class="token punctuation">[</span>functionName<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
     <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;参数错误，原对象不存在该方法&#39;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试实例 */</span>
<span class="token keyword">const</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PersonProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 通过代理来调用应有的方法</span>
person1<span class="token punctuation">.</span><span class="token function">callMethod</span><span class="token punctuation">(</span><span class="token string">&#39;sayName&#39;</span><span class="token punctuation">)</span> <span class="token comment">// willylsiang</span>
person1<span class="token punctuation">.</span><span class="token function">callMethod</span><span class="token punctuation">(</span><span class="token string">&#39;sayAge&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="图片懒加载的代理" tabindex="-1"><a class="header-anchor" href="#图片懒加载的代理"><span>图片懒加载的代理</span></a></h4><p>使用代理模式实现图片懒加载的优点还有符合单一职责原则。减少一个类或方法的粒度和耦合度。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 图片懒加载</span>
<span class="token keyword">const</span> imgFunc <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">const</span> imgNode <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>imgNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">setSrc</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">src</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    imgNode<span class="token punctuation">.</span>src <span class="token operator">=</span> src<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> proxyImage <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  imgFunc<span class="token punctuation">.</span><span class="token function">setSrc</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>src<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">setSrc</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">src</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    imgFunc<span class="token punctuation">.</span><span class="token function">setSrc</span><span class="token punctuation">(</span><span class="token string">&#39;./loading,gif&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    img<span class="token punctuation">.</span>src <span class="token operator">=</span> src<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

proxyImage<span class="token punctuation">.</span><span class="token function">setSrc</span><span class="token punctuation">(</span><span class="token string">&#39;./pic.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="html元素事件的代理" tabindex="-1"><a class="header-anchor" href="#html元素事件的代理"><span>HTML元素事件的代理</span></a></h4><ul><li>代理是为了控制对对象的访问，不让外部直接访问到对象</li><li>事件代理就用到代理模式（通过给父节点绑定一个事件，让父节点作为代理去拿到真实点击的结点）</li><li>不直接给事件点击代理事件的原因（动态添加该兄弟节点时，节省手动添加事件操作）</li></ul><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ul<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> ul <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#ul&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ul<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="缓存斐波那契数列-缓存代理" tabindex="-1"><a class="header-anchor" href="#缓存斐波那契数列-缓存代理"><span>缓存斐波那契数列（缓存代理）</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getFib</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">1</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">getFib</span><span class="token punctuation">(</span>number <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">getFib</span><span class="token punctuation">(</span>number <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> getCacheProxy <span class="token operator">=</span> <span class="token punctuation">(</span>fn<span class="token punctuation">,</span> cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">apply</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> context<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> argsString <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cache<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>argsString<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果有缓存，直接返回缓存数据</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">输出</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>args<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">的缓存结果：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>argsString<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>argsString<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
    cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>argsString<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> getFibProxy <span class="token operator">=</span> <span class="token function">getCacheProxy</span><span class="token punctuation">(</span>getFib<span class="token punctuation">)</span>
<span class="token function">getFibProxy</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span> <span class="token comment">// 保存缓存的结果</span>
<span class="token function">getFibProxy</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span> <span class="token comment">// 获取上次缓存的结果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="外观模式-facade" tabindex="-1"><a class="header-anchor" href="#外观模式-facade"><span>外观模式 Facade</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 外观（Facade）：深入浅出</span>
- 外观模式是说我们不需要理解复杂的系统，而是通过一个外观去操作。可以理解为对系统功能包装后收口和聚焦的感觉。
- 外观模式为一组复杂的子系统接口提供一个更高级的统一接口，隐藏了内部的逻辑，而且通过这个接口使得对子系统接口的访问更容易。
- 外观模式的用途：将一些复杂操作封装起来，并创建一个简单的接口用于调用。


<span class="token comment">## 适用场景</span>
- 设计初期如果构建多层系统，应该有意识地使用外观模式来将系统分层，让外观模块成为每层的入口，简化层间调用，松散层间耦合。比如经典的三层结构，在数据访问层和业务逻辑层、业务逻辑层和表示层之间建立外观 Facade。
- 在开发阶段，子系统往往因为不断的重构演化而变得越来越复杂，增加外观 Facade 可以提供一个简单的接口，减少他们之间的依赖。
- 在维护一个遗留的大型系统时，可能这个系统已经难以维护，这时为系统开发一个外观 Facade 类，为设计粗糙和高度复杂的遗留代码提供比较清晰的接口，让新系统和 Facade 对象交互，Facade 与遗留代码交互所有的复杂工作。
- 团队协作时，可以给各个负责的模块建立合适的外观，以简化使用，节约沟通时间。


<span class="token comment">## 优点</span>
- 访问者不需要再了解子系统内部模块的功能，而只需和外观交互即可，使得访问者对子系统的使用变得简单，符合 <span class="token string">&quot;最少知识原则&quot;</span>，增加了可移植性和可读性。
- 减少了与子系统模块的直接引用，实现了访问者与子系统中模块之间的松耦合，增加了可维护性和可扩展性。
- 通过合理使用外观模式，可以帮组我们更好地划分系统访问层次，比如把需要暴露给外部的功能集中到外观中，这样既方便访问者使用，也很好地隐藏了内部的细节，提高了安全性。

<span class="token comment">## 缺点</span>
- 不符合 <span class="token string">&quot;开闭原则&quot;</span>，对修改关闭，对扩展开放，如果外观模块出错，那么只能通过修改的方式来解决问题，因为外观模块是子系统的唯一出口。
- 不需要或不合理的使用外观会让人迷惑，过犹不及。


<span class="token comment">## 外观模式与终结者模式的区别</span>
- 外观模式：封装子使用者对子系统内模块的直接交互，方便使用者对子系统的调用。
- 中介者模式：封装子系统间各模块之间的直接交互，松散模块间的耦合。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+`" alt="外观模式"></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 子系统A */</span>
<span class="token keyword">class</span> <span class="token class-name">SubSystemA</span> <span class="token punctuation">{</span>
 <span class="token function">operationA</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;SubSystemA operation&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/** 子系统B */</span>
<span class="token keyword">class</span> <span class="token class-name">SubSystemB</span> <span class="token punctuation">{</span>
 <span class="token function">operationB</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;SubSystemB operation&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 外观类 */</span>
<span class="token keyword">class</span> <span class="token class-name">Facade</span> <span class="token punctuation">{</span>
 <span class="token keyword">private</span> subSystemA<span class="token operator">:</span> SubSystemA
 <span class="token keyword">private</span> subSystemB<span class="token operator">:</span> SubSystemB

 <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>subSystemA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SubSystemA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>subSystemB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SubSystemB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token function">operation</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>subSystemA<span class="token punctuation">.</span><span class="token function">operationA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>subSystemB<span class="token punctuation">.</span><span class="token function">operationB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 客户端代码 */</span>
<span class="token keyword">const</span> facade <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Facade</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
facade<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 调用外观类的方法，输出 SubSystemA operation、SubSystemB operation</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="兼容浏览器事件绑定" tabindex="-1"><a class="header-anchor" href="#兼容浏览器事件绑定"><span>兼容浏览器事件绑定</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">addEvent</span><span class="token punctuation">(</span><span class="token parameter">elm<span class="token punctuation">,</span> evType<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> useCapture</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>elm<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   ele<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>evType<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> useCapture<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>elm<span class="token punctuation">.</span>attachEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> ele<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&quot;on&quot;</span> <span class="token operator">+</span> evType<span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   elm<span class="token punctuation">[</span><span class="token string">&quot;on&quot;</span> <span class="token operator">+</span> evType<span class="token punctuation">]</span> <span class="token operator">=</span> fn<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="【桥接模式】合理关系" tabindex="-1"><a class="header-anchor" href="#【桥接模式】合理关系"><span>【桥接模式】合理关系</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 桥接（Bridge）：合理关系</span>
桥接模式是将原来相互依赖的部分，通过上层接口再往抽象层提一下，减少类之间的直接合作，形成间接关系。
在工作中经常是开发对开发 <span class="token keyword">case</span> By Case 解决问题，如果往产品逻辑层走一下，开发对产品，产品层面可能有更好的抽象，当然为了更好的服务体检，这样的解耦是不多见的，但这样的思考我们可能要 get 一下

<span class="token comment">## 描述</span>
- 桥接模式将抽象部分与实现部分分离，使得两者都可以独立地变化。使用组合关系代替继承关系，降低抽象和实现两个可变维度的耦合度。


<span class="token comment">## 优点</span>
- 分离了抽象和实现部分，将实现层（DOM 元素事件触发并执行具体修改逻辑）和抽象层（元素外观、尺寸部分的修改函数）解耦，有利于分层独立地管理各组成部分
- 提高了可扩展性，多个维度的部件自由组合，避免了类继承带来的强耦合关系，也减少了部件类的数量
- 使用者不用关心细节的实现，可方便快捷地进行使用

<span class="token comment">## 缺点</span>
- 桥接模式要求两个部件没有耦合关系，否则无法独立地变化，因此要求正确的对系统变化的维度进行识别，使用范围存在局限性
- 大量的类将导致开发成本的增加，同时在性能方面可能也会有所减少

<span class="token comment">## 使用场景</span>
- 如果产品的部件有独立的变化维度，可以考虑桥接模式
- 不希望使用继承，或因为多层次继承导致系统类的个数急剧增加的系统
- 产品部件的粒度越细，部件复用的必要性越大，可以考虑桥接模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+`" alt="桥接模式"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 典例：演奏乐器 */</span>
<span class="token keyword">class</span> <span class="token class-name">Boy</span> <span class="token punctuation">{</span>
<span class="token literal-property property">instrument</span><span class="token operator">:</span> any
<span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">instrument</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>instrument <span class="token operator">=</span> instrument
<span class="token punctuation">}</span>

<span class="token function">sayHi</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hi, 我是男生~&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">playInstrument</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>instrument<span class="token operator">?.</span>play <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>instrument<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Girl</span> <span class="token punctuation">{</span>
<span class="token literal-property property">instrument</span><span class="token operator">:</span> any
<span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">instrument</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>instrument <span class="token operator">=</span> instrument
<span class="token punctuation">}</span>

<span class="token function">sayHi</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hi, 我是女生~&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">playInstrument</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>instrument<span class="token operator">?.</span>play <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>instrument<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Piano</span> <span class="token punctuation">{</span>
<span class="token function">play</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;钢琴开始演奏&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Guitar</span> <span class="token punctuation">{</span>
<span class="token function">play</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;吉他开始演奏&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> piano <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Piano</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> pianoBoy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boy</span><span class="token punctuation">(</span>piano<span class="token punctuation">)</span>
pianoBoy<span class="token punctuation">.</span><span class="token function">playInstrument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 钢琴开始演奏</span>

<span class="token keyword">const</span> guitar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Guitar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> guitarGirl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Girl</span><span class="token punctuation">(</span>guitar<span class="token punctuation">)</span>
guitarGirl<span class="token punctuation">.</span><span class="token function">playInstrument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 吉他开始演奏</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="【组合模式】递归思考" tabindex="-1"><a class="header-anchor" href="#【组合模式】递归思考"><span>【组合模式】递归思考</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 组合（Composite）：递归思考</span>
组合模式是通过继承和子节点，可以递归地去描述一个对象层次。
我们在工作中，若是要加深思考的层次，可以某个点拆分再去思考，同时如果能够在递归分解过程中抽象一些共性的点，就能找到一些规律。
比如我们的需求分解，每个需求可以分解为子需求，子需求再往下看又可以递归分解。分解完后，每个部分有这部分的owner去驱动它的下游，形成一个层次结构。


<span class="token comment">## 描述</span>
- 组合模式允许你将对象组合成树形结构来表现 “部分-整体” 的层次结构。
- 通过对象的多态表现，让使用者可以用一致的方式处理组合对象以及部分对象（一致性）

<span class="token comment">## 适用场景</span>
- 如果对象组织呈现树形结构就可以考虑使用组合模式，特别是如果操作树中对象的方法比较类似时。

<span class="token comment">## 优点</span>
- 忽略组合对象和单个对象的差别，对外一致接口使用。
- 解耦调用者与复杂元素之间的联系，处理方式变得简单。

<span class="token comment">## 缺点</span>
- 树叶对象接口一致，无法区分，只有在运行时方可辨别。
- 包裹对象创建太多，额外增加内存负担。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+`" alt="组合模式"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">TrainOrder</span> <span class="token punctuation">{</span>
 <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;创建火车票订单&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">HotelOrder</span> <span class="token punctuation">{</span>
 <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;创建酒店订单&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">TotalOrder</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>orderList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
 <span class="token function">addOrder</span><span class="token punctuation">(</span><span class="token parameter">order</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>orderList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span>
   <span class="token keyword">return</span> <span class="token keyword">this</span>
 <span class="token punctuation">}</span>
 <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>orderList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     item<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token keyword">return</span> <span class="token keyword">this</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 可以在购票网站买车票同时也订房间</span>
<span class="token keyword">const</span> train <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TrainOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> hotel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HotelOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> total <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TotalOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
total<span class="token punctuation">.</span><span class="token function">addOrder</span><span class="token punctuation">(</span>train<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addOrder</span><span class="token punctuation">(</span>hotel<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="典例-文件夹" tabindex="-1"><a class="header-anchor" href="#典例-文件夹"><span>典例：文件夹</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 创建文件夹 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">createFolder</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token punctuation">{</span>
   name<span class="token punctuation">,</span>
   <span class="token literal-property property">_children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

   <span class="token comment">// 在文件夹下增加文件或文件夹</span>
   <span class="token function">add</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>fileOrFolder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>_children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>fileOrFolder<span class="token punctuation">)</span>
     <span class="token keyword">return</span> <span class="token keyword">this</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token comment">// 扫描方法</span>
   <span class="token function">scan</span> <span class="token punctuation">(</span><span class="token parameter">cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>_children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">child</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> child<span class="token punctuation">.</span><span class="token function">scan</span><span class="token punctuation">(</span>cb<span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 创建文件 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">createFile</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token punctuation">{</span>
   name<span class="token punctuation">,</span>
   size<span class="token punctuation">,</span>

   <span class="token comment">// 在文件下增加文件，应报错</span>
   <span class="token function">add</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;文件下面不能再添加文件&#39;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token comment">// 执行扫描方法</span>
   <span class="token function">scan</span> <span class="token punctuation">(</span><span class="token parameter">cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建总文件夹</span>
<span class="token keyword">const</span> foldMovies <span class="token operator">=</span> <span class="token function">createFolder</span><span class="token punctuation">(</span><span class="token string">&#39;电影&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 创建子文件夹，并放入根文件夹</span>
<span class="token keyword">const</span> foldMarvelMovies <span class="token operator">=</span> <span class="token function">createFolder</span><span class="token punctuation">(</span><span class="token string">&#39;漫威英雄电影&#39;</span><span class="token punctuation">)</span>
foldMovies<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>foldMarvelMovies<span class="token punctuation">)</span>
<span class="token keyword">const</span> foldDCMovies <span class="token operator">=</span> <span class="token function">createFolder</span><span class="token punctuation">(</span><span class="token string">&#39;DC英雄电影&#39;</span><span class="token punctuation">)</span>
foldMovies<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>foldDCMovies<span class="token punctuation">)</span>

<span class="token comment">// 为两个子文件夹分别添加电影</span>
foldMarvelMovies<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">createFile</span><span class="token punctuation">(</span><span class="token string">&#39;钢铁侠.mp4&#39;</span><span class="token punctuation">,</span> <span class="token number">1.9</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
foldMarvelMovies<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">createFile</span><span class="token punctuation">(</span><span class="token string">&#39;蜘蛛侠.mp4&#39;</span><span class="token punctuation">,</span> <span class="token number">2.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
foldMarvelMovies<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">createFile</span><span class="token punctuation">(</span><span class="token string">&#39;金刚狼.mp4&#39;</span><span class="token punctuation">,</span> <span class="token number">2.3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
foldMarvelMovies<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">createFile</span><span class="token punctuation">(</span><span class="token string">&#39;黑寡妇.mp4&#39;</span><span class="token punctuation">,</span> <span class="token number">1.9</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
foldMarvelMovies<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">createFile</span><span class="token punctuation">(</span><span class="token string">&#39;美国队长.mp4&#39;</span><span class="token punctuation">,</span> <span class="token number">1.4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
foldDCMovies<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">createFile</span><span class="token punctuation">(</span><span class="token string">&#39;蝙蝠侠.mp4&#39;</span><span class="token punctuation">,</span> <span class="token number">2.4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;size 大于2G的文件有：&#39;</span><span class="token punctuation">)</span>
foldMovies<span class="token punctuation">.</span><span class="token function">scan</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>size <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> size:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token punctuation">.</span>size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">GB</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 链模式调用 */</span>
<span class="token keyword">const</span> foldMovies2 <span class="token operator">=</span> <span class="token function">createFolder</span><span class="token punctuation">(</span><span class="token string">&#39;电影&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
 <span class="token function">createFolder</span><span class="token punctuation">(</span><span class="token string">&#39;漫威英雄电影&#39;</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">createFile</span><span class="token punctuation">(</span><span class="token string">&#39;钢铁侠.mp4&#39;</span><span class="token punctuation">,</span> <span class="token number">1.9</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">createFile</span><span class="token punctuation">(</span><span class="token string">&#39;蜘蛛侠.mp4&#39;</span><span class="token punctuation">,</span> <span class="token number">2.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">createFile</span><span class="token punctuation">(</span><span class="token string">&#39;金刚狼.mp4&#39;</span><span class="token punctuation">,</span> <span class="token number">2.3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">createFile</span><span class="token punctuation">(</span><span class="token string">&#39;黑寡妇.mp4&#39;</span><span class="token punctuation">,</span> <span class="token number">1.9</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">createFile</span><span class="token punctuation">(</span><span class="token string">&#39;美国队长.mp4&#39;</span><span class="token punctuation">,</span> <span class="token number">1.4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token function">createFolder</span><span class="token punctuation">(</span><span class="token string">&#39;DC英雄电影&#39;</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">createFile</span><span class="token punctuation">(</span><span class="token string">&#39;蝙蝠侠.mp4&#39;</span><span class="token punctuation">,</span> <span class="token number">2.4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">createFile</span><span class="token punctuation">(</span><span class="token string">&#39;超人.mp4&#39;</span><span class="token punctuation">,</span> <span class="token number">1.6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;size 大于2G的文件有：&#39;</span><span class="token punctuation">)</span>
foldMovies2<span class="token punctuation">.</span><span class="token function">scan</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>size <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> size:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token punctuation">.</span>size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">GB</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 size 大于2G的文件有：
 index.vue:63 name:蜘蛛侠.mp4 size:2.1GB
 index.vue:63 name:金刚狼.mp4 size:2.3GB
 index.vue:63 name:蝙蝠侠.mp4 size:2.4GB
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="es6类模式实现文件夹" tabindex="-1"><a class="header-anchor" href="#es6类模式实现文件夹"><span>ES6类模式实现文件夹</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 文件类 */</span>
<span class="token keyword">class</span> <span class="token class-name">Folder</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
   <span class="token keyword">this</span><span class="token punctuation">.</span>children <span class="token operator">=</span> children
 <span class="token punctuation">}</span>

 <span class="token comment">// 在文件夹下增加文件或文件夹</span>
 <span class="token function">add</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>fileOrFolder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>fileOrFolder<span class="token punctuation">)</span>
   <span class="token keyword">return</span> <span class="token keyword">this</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// 扫描方法</span>
 <span class="token function">scan</span> <span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">child</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> child<span class="token punctuation">.</span><span class="token function">scan</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 文件类</span>
<span class="token keyword">class</span> <span class="token class-name">File</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
   <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> size
 <span class="token punctuation">}</span>

 <span class="token comment">// 在文件下增加文件，应报错</span>
 <span class="token function">add</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>fileOrFolder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">文件下面不能再添加文件</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// 执行扫描方法</span>
 <span class="token function">scan</span> <span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> foldMovies <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Folder</span><span class="token punctuation">(</span><span class="token string">&#39;电影&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
 <span class="token keyword">new</span> <span class="token class-name">Folder</span><span class="token punctuation">(</span><span class="token string">&#39;漫威英雄电影&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
   <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&#39;钢铁侠.mp4&#39;</span><span class="token punctuation">,</span> <span class="token number">1.9</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&#39;蜘蛛侠.mp4&#39;</span><span class="token punctuation">,</span> <span class="token number">2.1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&#39;金刚狼.mp4&#39;</span><span class="token punctuation">,</span> <span class="token number">2.3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&#39;黑寡妇.mp4&#39;</span><span class="token punctuation">,</span> <span class="token number">1.9</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&#39;美国队长.mp4&#39;</span><span class="token punctuation">,</span> <span class="token number">1.4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token keyword">new</span> <span class="token class-name">Folder</span><span class="token punctuation">(</span><span class="token string">&#39;DC英雄电影&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
   <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&#39;蝙蝠侠.mp4&#39;</span><span class="token punctuation">,</span> <span class="token number">2.4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&#39;超人.mp4&#39;</span><span class="token punctuation">,</span> <span class="token number">1.6</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;size 大于2G的文件有：&#39;</span><span class="token punctuation">)</span>
foldMovies<span class="token punctuation">.</span><span class="token function">scan</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>size <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> size:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token punctuation">.</span>size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">GB</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 size 大于2G的文件有：
 index.vue:63 name:蜘蛛侠.mp4 size:2.1GB
 index.vue:63 name:金刚狼.mp4 size:2.3GB
 index.vue:63 name:蝙蝠侠.mp4 size:2.4GB
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="【享元模式】分离共享" tabindex="-1"><a class="header-anchor" href="#【享元模式】分离共享"><span>【享元模式】分离共享</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 享元（Flyweight）：分离共享</span>
- 享元模式是说当我们已经存在一些内容时，可以通过缓存服用，而不是重新创建，减少开销。
- 我们在工作中要做好积累，更要做好缓存的key，通过怎么样的手段去链接到我们工作中，是需要我们做好类目管理和持续积累的。
- 即享元就是共享单元，如现在的共享单车和共享充电宝等，它们的核心理念都是享元模式。

<span class="token comment">## 描述</span>
- 运用共享技术有效地支持大量细粒度对象的复用，以减少创建的对象的数量。
- 系统只使用少量对象，而这些对象都很相似，状态变化很小，可以实现对象的多次复用。由于享元模式要求能够共享的对象必须是细粒度对象，因此它又称为轻量级模式，它是一种对象结构型模式。


<span class="token comment">## 适用场景</span>
- 程序中使用了大量的相似对象，造成很大的存储开销时就应该考虑使用
- 对象的大多数状态都可以变为外部状态，剥离外部状态后，可以用相对较少的共享对象取代大量对象。

<span class="token comment">## 优点</span>
- 大大减少对象的创建，降低系统的内存，使效率提高
- 外部状态相对独立，不会影响到内部状态，所以享元对象能够在不同环境被共享

<span class="token comment">## 缺点</span>
- 引入了共享对象，使对象结构变得复杂
- 共享对象的创建、销毁等需要维护，带来额外的复杂度（如果需要把共享对象维护起来的话）
- 提高了系统的复杂度，需要分离出外部状态和内部状态，而且外部状态具有固有化的性质，不应该随着内部状态的变化而变化，否则会造成系统的混乱
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+y+`" alt="享元模式"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 【案例】某商家有 50 种男款内衣和 50 种款女款内衣, 要展示它们 */</span>
<span class="token doc-comment comment">/**
* 方案一：造 50 个塑料男模型和 50 个塑料女模型，让他们穿上
*/</span>
<span class="token keyword">class</span> <span class="token class-name">Model1</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">gender<span class="token punctuation">,</span> underwear</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender
   <span class="token keyword">this</span><span class="token punctuation">.</span>underwear <span class="token operator">=</span> underwear
 <span class="token punctuation">}</span>
 <span class="token function">takePhoto</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>gender<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">穿着</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>underwear<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">51</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> maleModel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Model1</span><span class="token punctuation">(</span><span class="token string">&#39;male&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">款衣服</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
 maleModel<span class="token punctuation">.</span><span class="token function">takePhoto</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">51</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> femaleModel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Model1</span><span class="token punctuation">(</span><span class="token string">&#39;female&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">款衣服</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
 femaleModel<span class="token punctuation">.</span><span class="token function">takePhoto</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>



<span class="token doc-comment comment">/**
* @方案二：造 1 个塑料男模特和 1 个塑料女模特，分别试穿 50 款内衣
* @对比：方案一创建了 100 个对象，方案二只创建了 2 个对象
* @说明：在该 demo 中，gender（性别）是内部对象，underwear（衣服）是外部对象
*/</span>
<span class="token keyword">class</span> <span class="token class-name">Model2</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">gender</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender
 <span class="token punctuation">}</span>
 <span class="token function">takePhoto</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>gender<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">穿着</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>underwear<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> maleModel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Model2</span><span class="token punctuation">(</span><span class="token string">&#39;male&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> femaleModel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Model2</span><span class="token punctuation">(</span><span class="token string">&#39;female&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">51</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 maleModel<span class="token punctuation">.</span>underwear <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">款衣服</span><span class="token template-punctuation string">\`</span></span>
 maleModel<span class="token punctuation">.</span><span class="token function">takePhoto</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">51</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 femaleModel<span class="token punctuation">.</span>underwear <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">款衣服</span><span class="token template-punctuation string">\`</span></span>
 femaleModel<span class="token punctuation">.</span><span class="token function">takePhoto</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>



<span class="token doc-comment comment">/**
* 方案二优化1：一开始就通过构造函数显示地创建实例，可用工厂模式将其升级成可控生成
* 方案二优化2：在实例上手动添加 underwear 不是很优雅，可以在外部单独写个 manager 函数
*/</span>
<span class="token keyword">class</span> <span class="token class-name">Model3</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">gender</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender
 <span class="token punctuation">}</span>

 <span class="token function">takePhoto</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>gender<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">穿着</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>underwear<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ModelFactory</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>modelGender <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token function">createModel</span><span class="token punctuation">(</span><span class="token parameter">gender</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>modelGender<span class="token punctuation">[</span>gender<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>modelGender<span class="token punctuation">[</span>gender<span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>modelGender<span class="token punctuation">[</span>gender<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Model3</span><span class="token punctuation">(</span>gender<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> modelFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModelFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">ModelManager</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>modelObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">gender<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>modelObj<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">underwear</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">款衣服</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span>
   <span class="token keyword">return</span> modelFactory<span class="token punctuation">.</span><span class="token function">createModel</span><span class="token punctuation">(</span>gender<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token function">copy</span><span class="token punctuation">(</span><span class="token parameter">model<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 优化第二点</span>
   model<span class="token punctuation">.</span>underwear <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>modelObj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>underwear
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> modelManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModelManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">51</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> maleModel <span class="token operator">=</span> modelManager<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;male&#39;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
 modelManager<span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span>maleModel<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
 maleModel<span class="token punctuation">.</span><span class="token function">takePhoto</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">51</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> femaleModel <span class="token operator">=</span> modelManager<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;female&#39;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
 modelManager<span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span>femaleModel<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
 femaleModel<span class="token punctuation">.</span><span class="token function">takePhoto</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="【典例一】享元模式优化图书管理" tabindex="-1"><a class="header-anchor" href="#【典例一】享元模式优化图书管理"><span>【典例一】享元模式优化图书管理</span></a></h3><ul><li>记录书籍的属性，如果已经存在则只需要调用缓存的图书，不需要再次重复存储该书籍（内部状态）</li><li>记录图书馆的所拥有的书籍，如果存在则不需要创建，只需要调用即可（外部状态）</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 享元（存储内部状态）- 书籍属性 */</span>
<span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">title<span class="token punctuation">,</span> author<span class="token punctuation">,</span> genre<span class="token punctuation">,</span> pageCount<span class="token punctuation">,</span> publisherId<span class="token punctuation">,</span> isbn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">=</span> title
   <span class="token keyword">this</span><span class="token punctuation">.</span>author <span class="token operator">=</span> author
   <span class="token keyword">this</span><span class="token punctuation">.</span>genre <span class="token operator">=</span> genre
   <span class="token keyword">this</span><span class="token punctuation">.</span>pageCount <span class="token operator">=</span> pageCount
   <span class="token keyword">this</span><span class="token punctuation">.</span>publisherId <span class="token operator">=</span> publisherId
   <span class="token keyword">this</span><span class="token punctuation">.</span>isbn <span class="token operator">=</span> isbn
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/** 享元工厂（创建/管理享元） */</span>
<span class="token keyword">class</span> <span class="token class-name">BookFactory</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>existingBooks <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 存在的书籍库</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>existingBook <span class="token operator">=</span> <span class="token keyword">null</span>  <span class="token comment">// 当前的书籍</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/** 创建/查找图书 */</span>
 <span class="token function">createBook</span><span class="token punctuation">(</span><span class="token parameter">title<span class="token punctuation">,</span> author<span class="token punctuation">,</span> genre<span class="token punctuation">,</span> pageCount<span class="token punctuation">,</span> publisherId<span class="token punctuation">,</span> isbn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 如果书籍已经创建，则找到并返回</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>existingBook <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>existingBooks<span class="token punctuation">[</span>isbn<span class="token punctuation">]</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>existingBook<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>existingBook
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
     <span class="token comment">// 如果书籍不存在，则选择创建该书的新实例并保存</span>
     <span class="token keyword">const</span> book <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span>title<span class="token punctuation">,</span> author<span class="token punctuation">,</span> genre<span class="token punctuation">,</span> pageCount<span class="token punctuation">,</span> publisherId<span class="token punctuation">,</span> isbn<span class="token punctuation">)</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>existingBooks<span class="token punctuation">[</span>isbn<span class="token punctuation">]</span> <span class="token operator">=</span> book
     <span class="token keyword">return</span> book
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> bookFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BookFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token doc-comment comment">/** 客户端（存储外部状态） - 管理所需的额外属性 */</span>
<span class="token keyword">class</span> <span class="token class-name">BookRecordManager</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>bookRecordDatabase <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 图书记录库</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/** 添加新书到数据库 */</span>
 <span class="token function">addBookRecord</span><span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> title<span class="token punctuation">,</span> author<span class="token punctuation">,</span> genre<span class="token punctuation">,</span> pageCount<span class="token punctuation">,</span> publisherId<span class="token punctuation">,</span> isbn<span class="token punctuation">,</span>
   checkoutDate<span class="token punctuation">,</span> checkoutMember<span class="token punctuation">,</span> dueReturnDate<span class="token punctuation">,</span> availability</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> book <span class="token operator">=</span> bookFactory<span class="token punctuation">.</span><span class="token function">createBook</span><span class="token punctuation">(</span>title<span class="token punctuation">,</span> author<span class="token punctuation">,</span> genre<span class="token punctuation">,</span> pageCount<span class="token punctuation">,</span> publisherId<span class="token punctuation">,</span> isbn<span class="token punctuation">)</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>bookRecordDatabase<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">checkoutMember</span><span class="token operator">:</span> checkoutMember<span class="token punctuation">,</span>
     <span class="token literal-property property">checkoutDate</span><span class="token operator">:</span> checkoutDate<span class="token punctuation">,</span>
     <span class="token literal-property property">dueReturnDate</span><span class="token operator">:</span> dueReturnDate<span class="token punctuation">,</span>
     <span class="token literal-property property">availability</span><span class="token operator">:</span> availability<span class="token punctuation">,</span>
     <span class="token literal-property property">book</span><span class="token operator">:</span> book
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/** 更新图书信息状态 */</span>
 <span class="token function">updateCheckStatus</span><span class="token punctuation">(</span><span class="token parameter">bookId<span class="token punctuation">,</span> newStatus<span class="token punctuation">,</span> checkoutDate<span class="token punctuation">,</span> checkoutMember<span class="token punctuation">,</span> newReturnDate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> record <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bookRecordDatabase<span class="token punctuation">[</span>bookId<span class="token punctuation">]</span>
   record<span class="token punctuation">.</span>availability <span class="token operator">=</span> newStatus
   record<span class="token punctuation">.</span>checkoutDate <span class="token operator">=</span> checkoutDate
   record<span class="token punctuation">.</span>checkoutMember <span class="token operator">=</span> checkoutMember
   record<span class="token punctuation">.</span>dueReturnDate <span class="token operator">=</span> newReturnDate
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/** 延长期限 */</span>
 <span class="token function">extendCheckoutPeriod</span><span class="token punctuation">(</span><span class="token parameter">bookId<span class="token punctuation">,</span> newReturnDate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>bookRecordDatabase<span class="token punctuation">[</span>bookId<span class="token punctuation">]</span><span class="token punctuation">.</span>dueReturnDate <span class="token operator">=</span> newReturnDate
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/** 归还期限是否到期 */</span>
 <span class="token function">isPastDue</span><span class="token punctuation">(</span><span class="token parameter">bookId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> currentDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token keyword">return</span> currentDate<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>bookRecordDatabase<span class="token punctuation">[</span>bookId<span class="token punctuation">]</span><span class="token punctuation">.</span>dueReturnDate<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> bookRecordManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BookRecordManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// isbn号是书籍的唯一标识，以下三条只会创建一个book对象</span>
bookRecordManager<span class="token punctuation">.</span><span class="token function">addBookRecord</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;xx&#39;</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">10001</span><span class="token punctuation">,</span> <span class="token string">&#39;100-232-31&#39;</span><span class="token punctuation">)</span> <span class="token comment">// new book1</span>
bookRecordManager<span class="token punctuation">.</span><span class="token function">addBookRecord</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;xx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;xx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;xx&#39;</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">10001</span><span class="token punctuation">,</span> <span class="token string">&#39;100-232-32&#39;</span><span class="token punctuation">)</span> <span class="token comment">// new book2</span>
bookRecordManager<span class="token punctuation">.</span><span class="token function">addBookRecord</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">10001</span><span class="token punctuation">,</span> <span class="token string">&#39;100-232-31&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bookFactory<span class="token punctuation">.</span>existingBooks<span class="token punctuation">,</span> bookRecordManager<span class="token punctuation">.</span>bookRecordDatabase<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="【典例二】享元模式-对象池技术优化页面渲染" tabindex="-1"><a class="header-anchor" href="#【典例二】享元模式-对象池技术优化页面渲染"><span>【典例二】享元模式 + 对象池技术优化页面渲染</span></a></h3><ul><li>以下代码仅使用 2 个享元对象，21个 DOM 对象，就完成了 10000 条数据的渲染，相比 10000 个 book 对象和 10000 个 DOM，性能优化是非常明显的</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> books <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">v<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0.5</span>
   <span class="token operator">?</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">软件工程</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
       <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">&#39;技术类&#39;</span><span class="token punctuation">,</span>
     <span class="token punctuation">}</span>
   <span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">傲慢与偏见</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
       <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">&#39;文学类&#39;</span><span class="token punctuation">,</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">FlyweightBook</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">category</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>category <span class="token operator">=</span> category
 <span class="token punctuation">}</span>

 <span class="token comment">// 用于享元对象获取外部状态</span>
 <span class="token function">getExternalState</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> p <span class="token keyword">in</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span><span class="token punctuation">[</span>p<span class="token punctuation">]</span> <span class="token operator">=</span> state<span class="token punctuation">[</span>p<span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token function">print</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>category<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
* 工厂类：生产享元对象
* 注意：这代码实际用了单例模式，每个享元对象都为单例，因为我们没必要创建多个相同的向原对象
*/</span>
<span class="token keyword">class</span> <span class="token class-name">FlyweightBookFactory</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>flyweightBookStore <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/** 生产享元对象 */</span>
 <span class="token function">produce</span> <span class="token punctuation">(</span><span class="token parameter">category</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>flyweightBookStore<span class="token punctuation">[</span>category<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>flyweightBookStore<span class="token punctuation">[</span>category<span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">const</span> flyweightBook <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FlyweightBook</span><span class="token punctuation">(</span>category<span class="token punctuation">)</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>flyweightBookStore<span class="token punctuation">[</span>category<span class="token punctuation">]</span> <span class="token operator">=</span> flyweightBook
   <span class="token keyword">return</span> flyweightBook
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> flyweightBookFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FlyweightBookFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** DOM 的享元对象 */</span>
<span class="token keyword">class</span> <span class="token class-name">Div</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token function">getExternalState</span> <span class="token punctuation">(</span><span class="token parameter">extState<span class="token punctuation">,</span> onClick</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 获取外部状态</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>dom<span class="token punctuation">.</span>innerText <span class="token operator">=</span> extState<span class="token punctuation">.</span>innerText
   <span class="token keyword">this</span><span class="token punctuation">.</span>dom<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>extState<span class="token punctuation">.</span>seq <span class="token operator">*</span> <span class="token number">4</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>dom<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">absolute</span><span class="token template-punctuation string">\`</span></span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>dom<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> onClick<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token function">mount</span> <span class="token punctuation">(</span><span class="token parameter">container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   container<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>dom<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DivFactory</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>divPool <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 对象池</span>
 <span class="token punctuation">}</span>

 <span class="token function">inner</span> <span class="token punctuation">(</span><span class="token parameter">innerContainer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">let</span> div
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>divPool<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     div <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Div</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>divPool<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
     <span class="token comment">// 滚动行为，在超过20个对象后，复用池中的第一个实例返回给调用者</span>
     div <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>divPool<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>divPool<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   div<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span>innerContainer<span class="token punctuation">)</span>
   <span class="token keyword">return</span> div
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> divFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DivFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 外层container，用户可视区域</span>
<span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 内层container，包含了所有DOM的总高度</span>
<span class="token keyword">const</span> innerContainer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
container<span class="token punctuation">.</span>style<span class="token punctuation">.</span>maxHeight <span class="token operator">=</span> <span class="token string">&#39;400px&#39;</span>
container<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">&#39;200px&#39;</span>
container<span class="token punctuation">.</span>style<span class="token punctuation">.</span>overflow <span class="token operator">=</span> <span class="token string">&#39;auto&#39;</span>
innerContainer<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token number">10</span> <span class="token operator">*</span> books<span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span> <span class="token comment">// 由每个DOM的总高度算出内层container的高度</span>
innerContainer<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">relative</span><span class="token template-punctuation string">\`</span></span>
container<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>innerContainer<span class="token punctuation">)</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">load</span> <span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// 装载需要显示的数据</span>
 books<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">bookData<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token comment">// 先生产享元对象</span>
   <span class="token keyword">const</span> flyweightBook <span class="token operator">=</span> flyweightBookFactory<span class="token punctuation">.</span><span class="token function">produce</span><span class="token punctuation">(</span>bookData<span class="token punctuation">.</span>category<span class="token punctuation">)</span>
   <span class="token keyword">const</span> div <span class="token operator">=</span> divFactory<span class="token punctuation">.</span><span class="token function">inner</span><span class="token punctuation">(</span>innerContainer<span class="token punctuation">)</span>

   <span class="token comment">// DOM 的高度需要由它的序号计算出来</span>
   div<span class="token punctuation">.</span><span class="token function">getExternalState</span><span class="token punctuation">(</span>
     <span class="token punctuation">{</span> <span class="token literal-property property">innerText</span><span class="token operator">:</span> bookData<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token literal-property property">seq</span><span class="token operator">:</span> <span class="token punctuation">(</span>start <span class="token operator">+</span> index<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
       flyweightBook<span class="token punctuation">.</span><span class="token function">getExternalState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> bookData<span class="token punctuation">.</span>name <span class="token punctuation">}</span><span class="token punctuation">)</span>
       flyweightBook<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">load</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 记录当前加载的首个数据</span>
container<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> start <span class="token operator">=</span> <span class="token punctuation">(</span>container<span class="token punctuation">.</span>scrollTop <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">!==</span> current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">load</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> start <span class="token operator">+</span> <span class="token number">20</span><span class="token punctuation">)</span>
   current <span class="token operator">=</span> start
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="行为型模式" tabindex="-1"><a class="header-anchor" href="#行为型模式"><span>行为型模式</span></a></h2><h3 id="策略模式-strategy" tabindex="-1"><a class="header-anchor" href="#策略模式-strategy"><span>策略模式 Strategy</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 策略（Strategy）：理解决策</span>
- 策略模式是指完成一件事情会定义一系列的算法，并把它们一个个封装起来，并且使它们可以相互替换。
- 本模式使得算法可因使用它的客户而自由变化切换（将算法的使用与算法的实现分离，当使用时可以选择某算法的模式调用）


<span class="token comment">## 策略模式的通用实现</span>
一个基于策略模式的程序至少由两部分组成。
	<span class="token number">1</span>. 一组策略类（可变），策略类封装了具体的算法，并负责具体的计算过程。
	<span class="token number">2</span>. 环境类Context（不变），Context接受客户的请求，随后将请求委托给某一个策略类。要做到这一点，说明Context中要维持对某个策略对象的引用。


<span class="token comment">### 类说明</span>
- Strategy: 策略，含有具体的算法，其方法的外观相同，因此可以互相代替。
- StrategyMap: 所有策略的合集，供封装上下文调用。
- Context：封装上下文，根据需要调用需要的策略，屏蔽外界对策略的直接调用，只对外提供一个接口，根据需要调用对应的策略。


<span class="token comment">## 适用场景</span>
- 如果一个系统里面有许多类，它们之间的区别仅在于它们的行为，那么使用策略模式可以动态地让一个对象在许多行为中选择一种行为。
- 一个系统需要动态地在几种算法中自由选择的场景。
- 有时需要多重条件判断，那么可以使用策略模式来规避多重条件判断的情况。
- 表单验证。


<span class="token comment">## 优点</span>
- 利用组合、委托、多台等技术和思想，可以有效地避免多重条件选择语句（若不采用策略模式，在选择策略时一般会采用多重的条件判断），提高了可维护性。（即能减少大量 if/else 语句、switch 语句）
- 提供了对 <span class="token string">&quot;开放封闭原则&quot;</span> 的完美支持，将算法封装在独立的 strategy 中，使得各个策略之间相互独立，且可自由切换，这个特点给策略模式带来很多灵活性，也提高了策略的复用率。
- 利用组合和委托来让 Context 拥有执行算法的能力，这也是继承的一种更轻便的代替方案。

<span class="token comment">## 缺点</span>
- 策略相互独立，因此一些复杂的算法逻辑无法共享，造成一些资源浪费。
- 会在程序中增加许多策略类或者策略对象。
- 如果用户想采用什么策略，必须了解所有策略（strategy）的实现，必须了解各个 strategy 之间的不同点，这样才能选择一个合适的 strategy 。因此让所有策略都需要向外暴露，这违背了 <span class="token string">&quot;最少知识原则&quot;</span>，也增加了用户对策略对象的使用成本。


<span class="token comment">## 策略模式和模板方法模式的区别</span>
- 策略模式：让我们在程序运行时动态地指定要使用的算法。
- 模板方法模式：在子类定义时就已经确定要使用的算法。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+g+`" alt="策略模式"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/*策略类*/</span>
<span class="token keyword">const</span> strategies <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token string-property property">&quot;A&quot;</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">money</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> money <span class="token operator">*</span> <span class="token number">4</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;B&quot;</span> <span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">money</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> money <span class="token operator">*</span> <span class="token number">3</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;C&quot;</span> <span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">money</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> money <span class="token operator">*</span> <span class="token number">2</span>
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>

<span class="token comment">/*环境类*/</span>
<span class="token keyword">const</span> <span class="token function-variable function">calculateBouns</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">level<span class="token punctuation">,</span> money</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> strategies<span class="token punctuation">[</span>level<span class="token punctuation">]</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">calculateBouns</span><span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 40000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="【典例一】策略模式-校验表单" tabindex="-1"><a class="header-anchor" href="#【典例一】策略模式-校验表单"><span>【典例一】策略模式-校验表单</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>策略模式<span class="token operator">-</span>校验表单<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta content<span class="token operator">=</span><span class="token string">&quot;text/html; charset=utf-8&quot;</span> http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">&quot;Content-Type&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>form id <span class="token operator">=</span> <span class="token string">&quot;registerForm&quot;</span> method<span class="token operator">=</span><span class="token string">&quot;post&quot;</span> action<span class="token operator">=</span><span class="token string">&quot;http://xxxx.com/api/register&quot;</span><span class="token operator">&gt;</span>
    用户名：<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> name<span class="token operator">=</span><span class="token string">&quot;userName&quot;</span><span class="token operator">&gt;</span>
    密码：<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> name<span class="token operator">=</span><span class="token string">&quot;password&quot;</span><span class="token operator">&gt;</span>
    手机号码：<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> name<span class="token operator">=</span><span class="token string">&quot;phoneNumber&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&quot;submit&quot;</span><span class="token operator">&gt;</span>提交<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span><span class="token operator">&gt;</span>
  <span class="token doc-comment comment">/** 策略对象 */</span>
  <span class="token keyword">const</span> strategies <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">isNoEmpty</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> errorMsg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> errorMsg
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">isNoSpace</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> errorMsg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> errorMsg
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">minLength</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> length<span class="token punctuation">,</span> errorMsg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> length<span class="token punctuation">)</span> <span class="token keyword">return</span> errorMsg
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">isMobile</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> errorMsg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[7]|18[0|1|2|3|5|6|7|8|9])\\d{8}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> errorMsg
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>


  <span class="token doc-comment comment">/** 验证类 */</span>
  <span class="token keyword">class</span> <span class="token class-name">Validator</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>cache <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">dom<span class="token punctuation">,</span> rules</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> rule<span class="token punctuation">;</span> rule <span class="token operator">=</span> rules<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> strategyArray <span class="token operator">=</span> rule<span class="token punctuation">.</span>strategy<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;:&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> errorMsg <span class="token operator">=</span> rule<span class="token punctuation">.</span>errorMsg

        <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> strategy <span class="token operator">=</span> strategyArray<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          strategyArray<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dom<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
          strategyArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>errorMsg<span class="token punctuation">)</span>
          <span class="token keyword">return</span> strategies<span class="token punctuation">[</span>strategy<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>dom<span class="token punctuation">,</span> strategyArray<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> resultErrorArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> validatorFn<span class="token punctuation">;</span> validatorFn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> errorMsg <span class="token operator">=</span> <span class="token function">validatorFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>errorMsg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          resultErrorArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>errorMsg<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> resultErrorArr
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> registerForm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;registerForm&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">validatorFn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> validator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Validator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    validator<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>registerForm<span class="token punctuation">.</span>userName<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token literal-property property">strategy</span><span class="token operator">:</span> <span class="token string">&#39;isNoEmpty&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">errorMsg</span><span class="token operator">:</span> <span class="token string">&#39;用户名不可为空&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">strategy</span><span class="token operator">:</span> <span class="token string">&#39;isNoSpace&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">errorMsg</span><span class="token operator">:</span> <span class="token string">&#39;不允许以空白字符命名&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">strategy</span><span class="token operator">:</span> <span class="token string">&#39;minLength:2&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">errorMsg</span><span class="token operator">:</span> <span class="token string">&#39;用户名长度不能小于2位&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    validator<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>registerForm<span class="token punctuation">.</span>password<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token literal-property property">strategy</span><span class="token operator">:</span> <span class="token string">&#39;minLength:6&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">errorMsg</span><span class="token operator">:</span> <span class="token string">&#39;密码长度不能小于6位&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    validator<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>registerForm<span class="token punctuation">.</span>phoneNumber<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token literal-property property">strategy</span><span class="token operator">:</span> <span class="token string">&#39;isMobile&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">errorMsg</span><span class="token operator">:</span> <span class="token string">&#39;请输入正确的手机号码格式&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> validator<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  registerForm<span class="token punctuation">.</span><span class="token function-variable function">onsubmit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> errorMsg <span class="token operator">=</span> <span class="token function">validatorFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>errorMsg<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="【命令模式】加强合作" tabindex="-1"><a class="header-anchor" href="#【命令模式】加强合作"><span>【命令模式】加强合作</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 命令（Command）：加强合作</span>
命令模型是将请求包装为命令，使得在执行时可以与具体的执行逻辑解耦。
在工作中，我们有时候不应该太关心一个事情是怎么完成的，当交给别人完成时，信任他们即可。比如项目负责人将前端的项目模块1分发给同事A，将项目模块2分发给同事B，并命令他们在指定时间内实现所负责的模块功能。就是在项目负责人的角度来看，不用事事亲为，但是这并不妨碍我们主动养成全局视角，了解每个细节。合作才能影响更多的事情。


<span class="token comment">## 描述</span>
- 将一个请求封装成对象，从而让你使用不同的请求把客户端参数化，对请求排队或者记录请求日志，以及可提供命令的撤销和恢复功能。
- 命令<span class="token punctuation">(</span>事务<span class="token punctuation">)</span>模式的原理：将请求以命令的形式包裹在对象中，并传给调用对象。调用对象寻找可以处理该命令的合适对象，并把该命令传给相应的对象，让改对象执行命令。
- 命令模式用于：将请求封装成对象，将命令的发送者和接收者解耦。即将调用对象（用户界面、API和代理等）与实现操作的对象隔离开。
- 命令模式的使用场景：将行为进行 “记录、撤销/重做、事务” 等处理，需要行为请求者与行为实现者解耦的时候（凡是两个对象间互动方式需要更高的模块化程度时都可以用到这种模式）


<span class="token comment">## 命令模式与代理模式的区别</span>
- 在代理<span class="token punctuation">(</span>委托<span class="token punctuation">)</span>模式中，调用者是委托者，执行者是被委托者，委托者和被委托者接口定义时相同的；在命令模式中，调用者不关注执行者的接口定义是否和它一致。
- 在调用时机上，代理模式的具体执行是只能在特定的调用者内部执行（接口相同）；命令模式的具体执行可以再任何调用者内部执行（接口不相同也可以）。


<span class="token comment">## 优点</span>
- 对命令进行封装，使命令易于扩展和修改
- 命令发出者和接受者解耦，是发出者不需要知道命令的具体执行过程即可执行
- 降低对象之间的耦合度。
- 新的命令可以很容易地加入到系统中。
- 可以比较容易地设计一个组合命令。
- 调用同一方法实现不同功能。

<span class="token comment">## 缺点</span>
- 使用命令模式可能会导致某些系统有过多的具体命令类。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+w+`" alt="命令模式"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 接收者类 */</span>
<span class="token keyword">class</span> <span class="token class-name">Receiver1</span> <span class="token punctuation">{</span>
 <span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;接收者: 接收者1号执行请求&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Receiver2</span> <span class="token punctuation">{</span>
 <span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;接收者2: 接收者2号执行请求&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/** 命令者
 * 执行命令（execute ）时 ，便会执行各自命令接收者的action方法
*/</span>
<span class="token keyword">class</span> <span class="token class-name">CreateCommand</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>receiver <span class="token operator">=</span> receiver
 <span class="token punctuation">}</span>

 <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;命令者：发布命令任务&#39;</span><span class="token punctuation">)</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>receiver<span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/** 调用者 */</span>
<span class="token keyword">class</span> <span class="token class-name">Invoker</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">command1<span class="token punctuation">,</span> command2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>command1 <span class="token operator">=</span> command1
   <span class="token keyword">this</span><span class="token punctuation">.</span>command2 <span class="token operator">=</span> command2
 <span class="token punctuation">}</span>

 <span class="token function">invokerOrder1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;调用者：触发任务1&#39;</span><span class="token punctuation">)</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>command1<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token function">invokerOrder2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;调用者：触发任务2&#39;</span><span class="token punctuation">)</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>command2<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试: 执行命令 */</span>
<span class="token comment">// 仓库</span>
<span class="token keyword">const</span> warehouse1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Receiver1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> warehouse2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Receiver2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 订单</span>
<span class="token keyword">const</span> order1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CreateCommand</span><span class="token punctuation">(</span>warehouse1<span class="token punctuation">)</span>
<span class="token keyword">const</span> order2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CreateCommand</span><span class="token punctuation">(</span>warehouse2<span class="token punctuation">)</span>
<span class="token comment">// 客户</span>
<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Invoker</span><span class="token punctuation">(</span>order1<span class="token punctuation">,</span> order2<span class="token punctuation">)</span>
client<span class="token punctuation">.</span><span class="token function">invokerOrder1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
client<span class="token punctuation">.</span><span class="token function">invokerOrder2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">/* 
 调用者：触发任务1
 命令者：发布命令任务
 接收者: 接收者1号执行请求
 调用者：触发任务2
 命令者：发布命令任务
 接收者2: 接收者2号执行请求
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="【状态模式】管理自己" tabindex="-1"><a class="header-anchor" href="#【状态模式】管理自己"><span>【状态模式】管理自己</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 状态（State）：管理自己</span>
状态模式是说在不同的状态下，有不同的处理行为。
对工作中来说，我们可能有状态好的时候，有状态不好的时候，主观的处理的手段是调整状态。但是如果调整不过来，我们应该进行不同的操作。比如，脑子好的时候，想一些复杂问题；脑子嗡嗡的时候，做一些简单整理。


<span class="token comment">## 描述</span>
- 允许一个对象在其内部状态改变时改变它的行为。当一个对象的内部状态发生改变时，会导致其行为的改变，对象看起来似乎修改了它的类。
- 每个状态建立一个类，状态改变会产生不同行为。


<span class="token comment">## 适用场景</span>
- 一个操作中含有大量的分支语句，而且这些分支语句依赖于该对象的状态，那么可以使用状态模式来将分支的处理分散到单独的状态类中。
- 对象的行为随着状态的改变而改变，则可以考虑使用状态模式来把状态和行为分离，虽然分离了，但是状态和行为是对应的，再通过改变状态调用状态对应的行为。


<span class="token comment">## 优点</span>
- 定义了状态与行为之间的关系，封装在一个类中，更直观清晰，增改方便。
- 状态与状态间、行为与行为间彼此独立互不干扰。
- 用对象代替字符串来记录当前状态，使得状态的切换更加一目了然
- 结构相比之下清晰，避免了过多的 switch-case 或 if-else 语句的使用，避免了程序的复杂性，提高系统的可维护性。
- 符合开闭原则，每个状态都是一个子类，增加了状态只需修改对应状态类即可。
- 封装性良好，状态的切换在类的内部实现，外部的调用无需知道类内部如何实现状态和行为的变换。

<span class="token comment">## 缺点</span>
- 引入多余的类，每个状态都有对应的类，导致系统中类的个数增加。
- 逻辑分散
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+f+`" alt="状态模式"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 状态（弱光、强光、关灯） */</span>
<span class="token keyword">class</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state
 <span class="token punctuation">}</span>
 <span class="token function">handle</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">State: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
   context<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">Context</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token keyword">null</span>
 <span class="token punctuation">}</span>
 <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Context: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
   <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
 <span class="token punctuation">}</span>
 <span class="token function">setState</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试 */</span>
<span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> weak <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">State</span><span class="token punctuation">(</span><span class="token string">&#39;弱光&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> strong <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">State</span><span class="token punctuation">(</span><span class="token string">&#39;强光&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> off <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">State</span><span class="token punctuation">(</span><span class="token string">&#39;关闭灯光&#39;</span><span class="token punctuation">)</span>

weak<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
context<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
strong<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
context<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
off<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
context<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="【观察者模式】发布订阅" tabindex="-1"><a class="header-anchor" href="#【观察者模式】发布订阅"><span>【观察者模式】发布订阅</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 观察者（Observer）：主观能动性</span>
- 观察者模式类似通过注册、回调这样的协作设计，完成变化通知的协作机制。
- 当观察对象发生变化时自动调用相关函数。


<span class="token comment">## 描述</span>
- 它定义了对象间的一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时会通知所有的观察者对象，使它们能够自动更新自己。
- 观察者又称发布订阅模式。定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时（发布），所有依赖于它的对象（订阅方）都得到通知并被自动更新。


<span class="token comment">## 适用场景</span>
- 当一个对象的改变需要同时改变其他对象，并且它不知道具体有多少对象需要改变时，就应该考虑使用观察者模式。
- 触发 DOM 事件。
- vue的响应式，在get时会进行依赖更新，当改变了对象的属性时，就会触发派发更新。


<span class="token comment">## 优点：解耦</span>
- 时间上的解耦：注册的订阅行为由消息的发布方来决定何时调用，订阅者不用持续关注，当消息发生时发布者会负责通知。
- 对象上的解耦：发布方不用提前知道消息的接收方是谁，发布者只需要遍历处理所有订阅该消息类型的订阅者发送消息即可（迭代器模式），由此解耦了发布者和订阅者之间的联系，互不持有，都依赖于抽象，不再依赖于具体。

- 支持简单的广播通信，自动通知所有已经订阅过的对象
- 目标对象与观察者之间的抽象耦合关系能单独扩展以及重用

<span class="token comment">## 缺点</span>
- 增加消耗：创建结构和缓存订阅者两个过程需要消耗计算和内存资源，即使订阅后始终没有触发，订阅者也会始终存在于内存。
- 增加复杂度：订阅者被缓存在一起，如果多个订阅者和发布者层层嵌套，那么程序将变得难以追踪和调试（如 Vue 调试时点开原型链时会看到 deps/subs/watchers）。
- 过渡使用会导致对象与对象之间的联系弱化，会导致程序难以跟踪维护和理解。
- 缺点主要在于理解成本、运行效率、资源消耗，特别是在多级 <span class="token string">&quot;发布-订阅&quot;</span> 时，情况会变得更复杂。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+`" alt="观察者模式"></p><h4 id="内部关联-在观察者内部添加主题对象的绑定-外部调用无需关心变量的变化关系-只需要更改内容即可察觉变化" tabindex="-1"><a class="header-anchor" href="#内部关联-在观察者内部添加主题对象的绑定-外部调用无需关心变量的变化关系-只需要更改内容即可察觉变化"><span>内部关联 - 在观察者内部添加主题对象的绑定，外部调用无需关心变量的变化关系，只需要更改内容即可察觉变化</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 主题 保存状态，状态变化之后触发所有观察者对象 */</span>
<span class="token keyword">class</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>observerList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 获取状态</span>
  <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
  <span class="token punctuation">}</span>

  <span class="token comment">// 设置状态</span>
  <span class="token function">setState</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">notifyAllObservers</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 发布：通知所有观察者需要更新 */</span>
  <span class="token function">notifyAllObservers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">observer</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      observer<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 订阅 */</span>
  <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> findIdx <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>findIdx <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observerList
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 取消订阅 */</span>
  <span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token parameter">observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> findIdx <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>findIdx <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>findIdx<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>observer<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 退订</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observerList
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/** 观察者 */</span>
<span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> subject<span class="token punctuation">,</span> state <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>subject <span class="token operator">=</span> subject
    <span class="token keyword">this</span><span class="token punctuation">.</span>subject<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state
  <span class="token punctuation">}</span>

  <span class="token comment">// 更新状态</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> updateState <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>subject<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> updateState
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 获取状态</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/** 测试 */</span>
<span class="token keyword">const</span> subject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Subject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> observer1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span><span class="token string">&#39;observer1&#39;</span><span class="token punctuation">,</span> subject<span class="token punctuation">)</span>
<span class="token keyword">const</span> observer2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span><span class="token string">&#39;observer2&#39;</span><span class="token punctuation">,</span> subject<span class="token punctuation">)</span>
<span class="token keyword">const</span> observer3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span><span class="token string">&#39;observer3&#39;</span><span class="token punctuation">,</span> subject<span class="token punctuation">,</span> <span class="token string">&#39;cilly&#39;</span><span class="token punctuation">)</span>
subject<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token string">&#39;willy&#39;</span><span class="token punctuation">)</span>
subject<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span>observer3<span class="token punctuation">)</span>  <span class="token comment">// observer3退订</span>
observer3<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">/* observer1: willy
observer2: willy
observer3: willy
observer3 退订
observer3: willy */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dom-事件触发" tabindex="-1"><a class="header-anchor" href="#dom-事件触发"><span>DOM 事件触发</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World !&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="【发布订阅模式-vs-观察者模式】" tabindex="-1"><a class="header-anchor" href="#【发布订阅模式-vs-观察者模式】"><span>【发布订阅模式 VS 观察者模式】</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 观察者模式 与 发布订阅模式的区别</span>
出版者Publishers + 订阅者Subscribers <span class="token operator">=</span> 观察者模式<span class="token punctuation">(</span>Observer Pattern<span class="token punctuation">)</span>

<span class="token number">1</span>. 观察者模式
观察者模式，其实就是为了实现松耦合。

<span class="token number">2</span>. 发布订阅模式
在发布订阅模式中，发布者并不会直接通知订阅者。即发布者和订阅者彼此互不相关，而是通过在消息队列中的 Broker 中转。
发布订阅模式里，发布者和订阅者，不是松耦合，而是完全解耦的。

从表面上看：
    - 观察者模式中只有两个角色：观察者 + 被观察者
    - 发布订阅模式中有三个角色：发布者 + 经纪人Broker + 订阅者

从使用原理上看：
    - 观察者和被观察者是松耦合的关系。
    - 发布者和订阅者是完全解耦的。

从使用层面上看：
		- 观察者模式，多用于单个应用内部。
		- 发布订阅模式，更多是一种跨应用的模式<span class="token punctuation">(</span>cross-application pattern<span class="token punctuation">)</span>，如常用的消息中间件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+x+`" alt="image-20230309180118425"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 发布者</span>
<span class="token keyword">function</span> <span class="token function">Publisher</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>listeners <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token class-name">Publisher</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">addListener</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">listener</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>listeners<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token class-name">Publisher</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">removeListener</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">listener</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">delete</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listeners<span class="token punctuation">[</span>listener<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token class-name">Publisher</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">notify</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listeners<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> listener <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listeners<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> listener <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      listener<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 订阅者</span>
<span class="token keyword">function</span> <span class="token function">Subscriber</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token punctuation">}</span>
<span class="token class-name">Subscriber</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">process</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> publisher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Publisher</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
publisher<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Subscriber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
publisher<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Subscriber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
publisher<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;willy&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 发布一个对象到所有订阅者</span>
publisher<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token string">&#39;this is string value&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 发布一个字符串到所有订阅者</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="【访问者模式】学会放手" tabindex="-1"><a class="header-anchor" href="#【访问者模式】学会放手"><span>【访问者模式】学会放手</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 访问者（Visitor）：学会放手</span>
访问者模式是说把对元素的访问操作交给访问者来操作，因为对访问者来说常常有不同的访问行为。
在工作中，往往我们只能陈述事实，这个内容消化后，每个人都有自己的理解。代码协作也是一样，比如：页面到底长什么样，其实还是要交还给业务本身，我们应该专注于提供基础的能力。


<span class="token comment">## 描述</span>
- 表示一个作用于某对象结构中的各元素的操作，它使你可以在不改变各元素的类的前提下定义作用于这些元素的新操作。
- 访问者模式针对于对象结构中的元素，定义在不改变该对象的前提下访问其结构中元素的新方法。
- 访问者模式由3部分组成：对象集合、集合元素、访问者。


<span class="token comment">## 应用场景</span>
- 对象结构相对稳定，但其操作算法经常变化的程序。
- 一个对象结构中的对象需要提供多种不同且不相关的操作，而且要避免让这些操作变化“污染”这些对象结构的类，也不希望在增加新操作时修改这些类。
- 对象结构中对象的类很少改变，但经常需要在此对象结构上定义新的操作。


<span class="token comment">## 优点</span>
- 符合<span class="token string">&quot;单一职责原则&quot;</span>。
- 扩展性好：在不修改对象结构中元素的情况下，为对象结构中的元素添加新的功能。
- 复用性好：通过访问者来定义整个对象结构通用的功能，从而提高复用程度。
- 分离无关行为：通过访问者分离无关行为，把相关行为封装在一起，构成一个访问者。这样每一个访问者的功能都比较单一。

<span class="token comment">## 缺点</span>
- 被访问的类的结构是固定的，如果被访问的类的结构会发生变化，则不适合访问者模式。
- 对象结构变化很困难：在访问者模式中，每增加一个新的元素类，都要在每一个具体的访问类中增加响应的具体操作，这违背了 <span class="token string">&quot;开闭原则&quot;</span>。
- 访问者模式依赖具体类，而没有抽象类，违反了 <span class="token string">&quot;依赖倒置原则&quot;</span>。
- 具体元素对访问者公布细节，违反了<span class="token string">&quot;迪米特原则&quot;</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+j+`" alt="访问者模式"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 访问者 */</span>
<span class="token keyword">class</span> <span class="token class-name">Visitor</span> <span class="token punctuation">{</span>
 <span class="token function">visitConcreteElement</span><span class="token punctuation">(</span><span class="token parameter">ConcreteElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   ConcreteElement<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 元素类 */</span>
<span class="token keyword">class</span> <span class="token class-name">ConcreteElement</span> <span class="token punctuation">{</span>
 <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ConcreteElement.operation invoked&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token function">accept</span><span class="token punctuation">(</span><span class="token parameter">visitor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   visitor<span class="token punctuation">.</span><span class="token function">visitConcreteElement</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** client */</span>
<span class="token keyword">const</span> visitor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Visitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
visitor<span class="token punctuation">.</span><span class="token function">visitConcreteElement</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token comment">// ConcreteElement.operation invoked</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="【典例一】学生购买电脑" tabindex="-1"><a class="header-anchor" href="#【典例一】学生购买电脑"><span>【典例一】学生购买电脑</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 电脑部件 - CPU */</span>
<span class="token keyword">class</span> <span class="token class-name">CPU</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> <span class="token number">10</span>
 <span class="token punctuation">}</span>
 <span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token punctuation">}</span>
 <span class="token function">accept</span><span class="token punctuation">(</span><span class="token parameter">visitor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> visitor<span class="token punctuation">.</span><span class="token function">visitCpu</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 电脑部件 - 存储器 */</span>
<span class="token keyword">class</span> <span class="token class-name">Memery</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> <span class="token number">15</span>
 <span class="token punctuation">}</span>
 <span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token punctuation">}</span>
 <span class="token function">accept</span><span class="token punctuation">(</span><span class="token parameter">visitor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> visitor<span class="token punctuation">.</span><span class="token function">visitMemery</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 电脑部件 - 主板 */</span>
<span class="token keyword">class</span> <span class="token class-name">Board</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> <span class="token number">20</span>
 <span class="token punctuation">}</span>
 <span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token punctuation">}</span>
 <span class="token function">accept</span><span class="token punctuation">(</span><span class="token parameter">visitor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> visitor<span class="token punctuation">.</span><span class="token function">visitBoard</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 电脑（元素类）：将CPU、存储器、主板组装成电脑 */</span>
<span class="token keyword">class</span> <span class="token class-name">Computer</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>cpu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CPU</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>memery <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Memery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>board <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Board</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token function">accept</span><span class="token punctuation">(</span><span class="token parameter">visitor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>cpu<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>visitor<span class="token punctuation">)</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>memery<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>visitor<span class="token punctuation">)</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>board<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>visitor<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 访问者 */</span>
<span class="token keyword">class</span> <span class="token class-name">StudentVisitor</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>totalPrice <span class="token operator">=</span> <span class="token number">0</span>
 <span class="token punctuation">}</span>
 <span class="token function">visitCpu</span><span class="token punctuation">(</span><span class="token parameter">cpu</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>totalPrice <span class="token operator">+=</span> cpu<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.9</span>
 <span class="token punctuation">}</span>
 <span class="token function">visitBoard</span><span class="token punctuation">(</span><span class="token parameter">board</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>totalPrice <span class="token operator">+=</span> board<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.8</span>
 <span class="token punctuation">}</span>
 <span class="token function">visitMemery</span><span class="token punctuation">(</span><span class="token parameter">memery</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>totalPrice <span class="token operator">+=</span> memery<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">.7</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/** 测试代码：学生购买自己的电脑 */</span>
<span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StudentVisitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> computer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
computer<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span>totalPrice<span class="token punctuation">)</span>	<span class="token comment">// 35.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="【中介者模式】协调能力" tabindex="-1"><a class="header-anchor" href="#【中介者模式】协调能力"><span>【中介者模式】协调能力</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 中介者（Mediator）：协调能力</span>
中介模式是当多个类之间要协调时，往往引入中介者进行协调，减少大家的知识成本。
这个我们常常需要一些PM、PMO这样的角色去管理项目，系统中也需要一些协调层去协调各个域。因此我们也注重培养协调事务、具备全局观的能力。


<span class="token comment">## 描述</span>
- 对象和对象之间借助第三方中介者进行通信。
- 用一个中介对象（中介类）来封装多个对象之间的复杂交互（对象与对象之间存在大量的关联关系）。中介者将对象与对象之间的紧密的耦合关系变得松散，从而可以独立地改变它们之间的交互。
- 通过增加一个中介者对象，其他所有的相关对象都通过该中介者对象来通信，而不是相互引用，当其中的一个对象发生改变时，只需要通知中介者对象即可。通过中介者模式可以解除对象与对象之间的紧耦合关系。
- 中介者模式使网状的多对多关系变成相对简单的一对多关系（类似观察者模式，但是单向的，由中介者统一管理）

<span class="token comment">## 中介者模式的通用实现</span>
- Colleague：同事对象，只知道中介者而不知道其他同事对象，通过中介者来与其他对象通信。
- Mediator：中介者，负责与各同事对象的通信。


<span class="token comment">## 适用场景</span>
- 系统中对象之间存在比较复杂的引用关系，导致它们之间的依赖关系结构混乱而且难以复用该对象。
- 想通过一个中间类来封装多个类中的行为，而又不想生成太多的子类。
- 如果对象之间的复杂耦合确实导致调用和维护出现困难，而且这些耦合度随着项目的变化呈现指数增长曲线，那么可以考虑用中介者模式来重构代码。

<span class="token comment">## 实例</span>
- 例如现实生活中，航线上的飞机只需要和机场的塔台通信就能确定航线和飞行状态，而不需要和所有飞机通信。同时塔台作为中介者，知道每架飞机的飞行状态，所以可以安排所有飞机的起降和航线安排。
- 例如购物车需求，存在商品选择表单、颜色选择表单、购买数量表单等等，都会触发change事件，那么可以通过中介者来转发处理这些事件，实现各个事件间的解耦，仅仅维护中介者对象即可。


<span class="token comment">## 优点</span>
- 使各对象之间耦合松散，降低了同事对象之间的相互依赖和耦合，可以独立地改变它们之间的交互。
- 中介者和对象一对多的关系取代了对象之间的网状多对多的关系，符合<span class="token string">&quot;最少知识原则&quot;</span>，提高系统的灵活性，使得系统易于维护和扩展。
- 中介者在同事对象间起到了控制和协调的作用，因此可以结合代理模式那样，进行同事对象间的访问控制、功能扩展。
- 因为同事对象间不需要相互引用，因此也可以简化同事对象的设计和实现。

<span class="token comment">## 缺点</span>
- 系统中会新增一个中介者对象，因为对象之间交互的复杂性，转移了中介者对象的复杂性，使得中介者对象经常是巨大的（中介者的逻辑过度集中化）。中介者对象自身往往就是一个难以维护的对象（特别是当同事对象过多时更为凸显这个问题）。
- 当出现中介者可维护性变差的情况时，考虑是否在系统设计上不合理，从而简化系统设计，优化并重构，避免中介者出现职责过重的情况。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+M+`" alt="中介者模式"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 中介者类 */</span>
<span class="token keyword">class</span> <span class="token class-name">Mediator</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> a
   <span class="token keyword">this</span><span class="token punctuation">.</span>b <span class="token operator">=</span> b
 <span class="token punctuation">}</span>
 <span class="token function">setA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> number <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>b<span class="token punctuation">.</span>number
   <span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">.</span><span class="token function">setNumber</span><span class="token punctuation">(</span>number <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token function">setB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> number <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">.</span>number
   <span class="token keyword">this</span><span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token function">setNumber</span><span class="token punctuation">(</span>number <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>number <span class="token operator">=</span> <span class="token number">0</span>
 <span class="token punctuation">}</span>
 <span class="token function">setNumber</span><span class="token punctuation">(</span><span class="token parameter">num<span class="token punctuation">,</span> mediator</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>number <span class="token operator">=</span> num
   <span class="token keyword">if</span> <span class="token punctuation">(</span>mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     mediator<span class="token punctuation">.</span><span class="token function">setB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>number <span class="token operator">=</span> <span class="token number">0</span>
 <span class="token punctuation">}</span>
 <span class="token function">setNumber</span><span class="token punctuation">(</span><span class="token parameter">num<span class="token punctuation">,</span> mediator</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>number <span class="token operator">=</span> num
   <span class="token keyword">if</span> <span class="token punctuation">(</span>mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     mediator<span class="token punctuation">.</span><span class="token function">setA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> mediator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Mediator</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
a<span class="token punctuation">.</span><span class="token function">setNumber</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> mediator<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>number<span class="token punctuation">,</span> b<span class="token punctuation">.</span>number<span class="token punctuation">)</span>	<span class="token comment">// 10 1</span>
b<span class="token punctuation">.</span><span class="token function">setNumber</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> mediator<span class="token punctuation">)</span>	<span class="token comment">// 100 10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>number<span class="token punctuation">,</span> b<span class="token punctuation">.</span>number<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="【典例】相亲" tabindex="-1"><a class="header-anchor" href="#【典例】相亲"><span>【典例】相亲</span></a></h4><ul><li>首先我们考虑一个场景，男方和女方都有一定的条件，双方之间有要求，双方家长对对方孩子也有要求，如果达不到要求则不同意这门婚事。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
 <span class="token comment">// 个人信息</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> info<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
   <span class="token keyword">this</span><span class="token punctuation">.</span>info <span class="token operator">=</span> info <span class="token comment">// object，每一项为数字，比如身高，工资等</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> target <span class="token comment">// object，每一项为两个数字的数组，表示可接受的最低和最高值</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>enemyList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 考虑列表</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// 注册相亲对象及家长</span>
 <span class="token function">registerEnemy</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>enemy</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>enemyList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>enemy<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// 检查所有相亲对象及其家长的条件</span>
 <span class="token function">checkAllPurpose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>enemyList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">enemy</span> <span class="token operator">=&gt;</span> enemy<span class="token punctuation">.</span>info <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">checkPurpose</span><span class="token punctuation">(</span>enemy<span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// 检查对象是否满足自己的要求，并发信息</span>
 <span class="token function">checkPurpose</span><span class="token punctuation">(</span><span class="token parameter">enemy</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 对可枚举属性进行遍历操作，确认是否全部符合条件</span>
   <span class="token keyword">const</span> result <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     <span class="token keyword">const</span> <span class="token punctuation">[</span>low<span class="token punctuation">,</span> high<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>target<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
     <span class="token keyword">return</span> low <span class="token operator">&lt;=</span> enemy<span class="token punctuation">.</span>info<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> enemy<span class="token punctuation">.</span>info<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> high
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token comment">// 通知对方</span>
   enemy<span class="token punctuation">.</span><span class="token function">receiveResult</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">,</span> enemy<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// 接收到对方的信息</span>
 <span class="token function">receiveResult</span><span class="token punctuation">(</span><span class="token parameter">result<span class="token punctuation">,</span> they<span class="token punctuation">,</span> self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   result
     <span class="token operator">?</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>they<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: 我觉得合适~ \\t (我的要求 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>self<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 已经满足~)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
     <span class="token operator">:</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>they<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: 你是个好人! \\t (我的要求 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>self<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 不能满足！)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// 男方</span>
<span class="token keyword">const</span> LiangXiaoShuai <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>
 <span class="token string">&#39;梁小帅&#39;</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">174</span><span class="token punctuation">,</span> <span class="token literal-property property">salary</span><span class="token operator">:</span> <span class="token number">6000</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
<span class="token comment">// 男方家长</span>
<span class="token keyword">const</span> LiangXiaoShuaiParent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>
 <span class="token string">&#39;梁小帅家长&#39;</span><span class="token punctuation">,</span>
 <span class="token keyword">null</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">175</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
<span class="token comment">// 女方</span>
<span class="token keyword">const</span> ZhouMeiLi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>
 <span class="token string">&#39;周美丽&#39;</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">160</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
<span class="token comment">// 女方家长</span>
<span class="token keyword">const</span> ZhouMeiLiParent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>
 <span class="token string">&#39;周美丽家长&#39;</span><span class="token punctuation">,</span>
 <span class="token keyword">null</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span> <span class="token literal-property property">salary</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10000</span><span class="token punctuation">,</span> <span class="token number">20000</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token comment">// 注册：每一个 person 实例都需要注册对方家庭成员的信息</span>
LiangXiaoShuai<span class="token punctuation">.</span><span class="token function">registerEnemy</span><span class="token punctuation">(</span>ZhouMeiLi<span class="token punctuation">,</span> ZhouMeiLiParent<span class="token punctuation">)</span>
LiangXiaoShuaiParent<span class="token punctuation">.</span><span class="token function">registerEnemy</span><span class="token punctuation">(</span>ZhouMeiLi<span class="token punctuation">,</span> ZhouMeiLiParent<span class="token punctuation">)</span>
ZhouMeiLi<span class="token punctuation">.</span><span class="token function">registerEnemy</span><span class="token punctuation">(</span>LiangXiaoShuai<span class="token punctuation">,</span> LiangXiaoShuaiParent<span class="token punctuation">)</span>
ZhouMeiLiParent<span class="token punctuation">.</span><span class="token function">registerEnemy</span><span class="token punctuation">(</span>LiangXiaoShuai<span class="token punctuation">,</span> LiangXiaoShuaiParent<span class="token punctuation">)</span>

<span class="token comment">// 检查对方是否符合要求，同样，每一个 person 实例都需要执行检查</span>
LiangXiaoShuai<span class="token punctuation">.</span><span class="token function">checkAllPurpose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 梁小帅: 我觉得合适~      (我的要求 周美丽 已经满足~)</span>
LiangXiaoShuaiParent<span class="token punctuation">.</span><span class="token function">checkAllPurpose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 梁小帅家长: 我觉得合适~          (我的要求 周美丽 已经满足~)</span>
ZhouMeiLi<span class="token punctuation">.</span><span class="token function">checkAllPurpose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 周美丽: 我觉得合适~      (我的要求 梁小帅 已经满足~)</span>
ZhouMeiLiParent<span class="token punctuation">.</span><span class="token function">checkAllPurpose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 周美丽家长: 你是个好人!          (我的要求 梁小帅 不能满足！)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>引入媒人(中介者)，专门处理对象之间的耦合关系，所有对象之间相互不了解，只与媒人交互，如果引入新的相关方，也只需要通知媒人即可。</li><li>除了媒人类(中介者)外，其他各个角色都是独立的，相互不知道对方的存在，对象间关系被解耦。我们甚至可以方便地添加新的对象，比如周美丽家同时还在考虑着willy。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 男方</span>
<span class="token keyword">const</span> LiangXiaoShuai <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;梁小帅&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">family</span><span class="token operator">:</span> <span class="token string">&#39;梁小帅家&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">174</span><span class="token punctuation">,</span> <span class="token literal-property property">salary</span><span class="token operator">:</span> <span class="token number">20000</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// 男方家长</span>
<span class="token keyword">const</span> LiangXiaoShuaiParent <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;梁小帅家长&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">family</span><span class="token operator">:</span> <span class="token string">&#39;梁小帅家&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
 <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">175</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// 女方</span>
<span class="token keyword">const</span> ZhouMeiLi <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;周美丽&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">family</span><span class="token operator">:</span> <span class="token string">&#39;周美丽家&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&#39;female&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">160</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// 女方家长</span>
<span class="token keyword">const</span> ZhouMeiLiParent <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;周美丽家长&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">family</span><span class="token operator">:</span> <span class="token string">&#39;周美丽家&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&#39;female&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
 <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">salary</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10000</span><span class="token punctuation">,</span> <span class="token number">20000</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 媒人（中介者类） */</span>
<span class="token keyword">const</span> MatchMaker <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token comment">// 媒人的花名册</span>
 <span class="token literal-property property">matchBook</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

 <span class="token comment">// 注册各方</span>
 <span class="token function">registPersons</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>personList</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   personList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">person</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     <span class="token comment">// 将家长和孩子放到一起存入花名册</span>
     <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>matchBook<span class="token punctuation">[</span>person<span class="token punctuation">.</span>family<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>matchBook<span class="token punctuation">[</span>person<span class="token punctuation">.</span>family<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>

 <span class="token comment">// 检查对方家庭的孩子对象是否满足要求</span>
 <span class="token function">checkAllPurpose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>matchBook<span class="token punctuation">)</span>
     <span class="token comment">// 遍历名册中所有家庭</span>
     <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">familyName<span class="token punctuation">,</span> idx<span class="token punctuation">,</span> matchList</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> matchList
       <span class="token comment">// 对于其中的一个家庭，过滤名册中其他的家庭</span>
       <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">match</span> <span class="token operator">=&gt;</span> match <span class="token operator">!==</span> familyName<span class="token punctuation">)</span>
       <span class="token comment">// 遍历该家庭中注册到名册上的所有成员</span>
       <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">enemyFamily</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>matchBook<span class="token punctuation">[</span>enemyFamily<span class="token punctuation">]</span>
         <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">enemy</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>matchBook<span class="token punctuation">[</span>familyName<span class="token punctuation">]</span>
           <span class="token comment">// 逐项比较自己的条件和他们的要求（同性别的排除）</span>
           <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">person</span> <span class="token operator">=&gt;</span>
             enemy<span class="token punctuation">.</span>info
             <span class="token operator">&amp;&amp;</span> person<span class="token punctuation">.</span>gender <span class="token operator">!==</span> enemy<span class="token punctuation">.</span>gender
             <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">checkPurpose</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> enemy<span class="token punctuation">)</span>
           <span class="token punctuation">)</span>
         <span class="token punctuation">)</span>
       <span class="token punctuation">)</span>
     <span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>

 <span class="token comment">// 检查对方是否满足自己的要求，并发信息</span>
 <span class="token function">checkPurpose</span><span class="token punctuation">(</span><span class="token parameter">person<span class="token punctuation">,</span> enemy</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 对可枚举属性进行遍历操作，确认是否全部符合条件</span>
   <span class="token keyword">const</span> result <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     <span class="token keyword">const</span> <span class="token punctuation">[</span>low<span class="token punctuation">,</span> high<span class="token punctuation">]</span> <span class="token operator">=</span> person<span class="token punctuation">.</span>target<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
     <span class="token keyword">return</span> low <span class="token operator">&lt;=</span> enemy<span class="token punctuation">.</span>info<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> enemy<span class="token punctuation">.</span>info<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> high
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token comment">// 通知对方</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">receiveResult</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> person<span class="token punctuation">,</span> enemy<span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>

 <span class="token comment">// 接收到对方的信息</span>
 <span class="token function">receiveResult</span><span class="token punctuation">(</span><span class="token parameter">result<span class="token punctuation">,</span> they<span class="token punctuation">,</span> self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   result
     <span class="token operator">?</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>they<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: 我觉得合适~ \\t (我的要求 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>self<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 已经满足~)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
     <span class="token operator">:</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>they<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: 你是个好人! \\t (我的要求 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>self<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 不能满足！)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 新增对象 */</span>
<span class="token comment">// 男方</span>
<span class="token keyword">const</span> Willy <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;willy&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">family</span><span class="token operator">:</span> <span class="token string">&#39;男方&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">172</span><span class="token punctuation">,</span> <span class="token literal-property property">salary</span><span class="token operator">:</span> <span class="token number">6000</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// 男方家长</span>
<span class="token keyword">const</span> WillyParent <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;willy parent&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">family</span><span class="token operator">:</span> <span class="token string">&#39;男方&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
 <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">155</span><span class="token punctuation">,</span> <span class="token number">175</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 注册：只需注册一次 */</span>
MatchMaker<span class="token punctuation">.</span><span class="token function">registPersons</span><span class="token punctuation">(</span>
 LiangXiaoShuai<span class="token punctuation">,</span>
 LiangXiaoShuaiParent<span class="token punctuation">,</span>
 ZhouMeiLi<span class="token punctuation">,</span>
 ZhouMeiLiParent<span class="token punctuation">,</span>
 Willy<span class="token punctuation">,</span>
 WillyParent
<span class="token punctuation">)</span>
<span class="token doc-comment comment">/** 检查对方是否符合要求，也只需要检查一次 */</span>
MatchMaker<span class="token punctuation">.</span><span class="token function">checkAllPurpose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">/* 梁小帅: 我觉得合适~      (我的要求 周美丽 已经满足~)
梁小帅家长: 我觉得合适~          (我的要求 周美丽 已经满足~)
周美丽: 我觉得合适~      (我的要求 梁小帅 已经满足~)
周美丽家长: 我觉得合适~          (我的要求 梁小帅 已经满足~)
周美丽: 我觉得合适~      (我的要求 willy 已经满足~)
周美丽家长: 你是个好人!          (我的要求 willy 不能满足！)
willy: 我觉得合适~       (我的要求 周美丽 已经满足~)
willy parent: 我觉得合适~        (我的要求 周美丽 已经满足~) */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="【解释器模式】加强理解" tabindex="-1"><a class="header-anchor" href="#【解释器模式】加强理解"><span>【解释器模式】加强理解</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 解释器（Interpreter）：加强理解</span>
解释器模式是针对一套上下文，形成一套语言，可以通过解释表达式含义的方式完成对应的任务。
这里来说，我们可以形成某个团体的领域语言，内部交流通过相关领域语言交流，可以增加交流效率。此外，其实不同层次都有不同层次的专业术语，有时候一个术语的解释是一个方面的顿悟，还是要多了解工作内容本身。


<span class="token comment">## 描述</span>
给定一个语言，定义它的文法的一种表示，并定义一个解释器，这个解释器使用该标识来解释语言中的句子。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+C+`" alt="解释器模式"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Context</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 存放 终结符表达式</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>_sum <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 存放 非终结符表达式(运算结果)</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">get</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_sum
 <span class="token punctuation">}</span>
 <span class="token keyword">set</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>_sum <span class="token operator">=</span> newValue
 <span class="token punctuation">}</span>

 <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">expression</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>_list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>expression<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">get</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>_list<span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">PlusExpression</span> <span class="token punctuation">{</span>
 <span class="token function">interpret</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>context <span class="token keyword">instanceof</span> <span class="token class-name">Context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;TypeError&#39;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   context<span class="token punctuation">.</span>sum <span class="token operator">=</span> <span class="token operator">++</span>context<span class="token punctuation">.</span>sum
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">MinusExpression</span> <span class="token punctuation">{</span>
 <span class="token function">interpret</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>context <span class="token keyword">instanceof</span> <span class="token class-name">Context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;TypeError&#39;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   context<span class="token punctuation">.</span>sum <span class="token operator">=</span> <span class="token operator">--</span>context<span class="token punctuation">.</span>sum
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/** 测试代码 */</span>
<span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 依次添加：加法 | 加法 | 减法 表达式</span>
context<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PlusExpression</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
context<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PlusExpression</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
context<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MinusExpression</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 依次执行：加法 | 加法 | 减法 表达式</span>
context<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">expression</span> <span class="token operator">=&gt;</span> expression<span class="token punctuation">.</span><span class="token function">interpret</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>sum<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="【迭代器模式】横向职责" tabindex="-1"><a class="header-anchor" href="#【迭代器模式】横向职责"><span>【迭代器模式】横向职责</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 迭代器（Iterator）：横向职责</span>
迭代器模式是将集合的访问功能独立出来，通过迭代的模式去访问。
在工作中，我们一般给每个人独立职责，如一般会将需求管理、缺陷管理、资金安全的一些事情独立出来，一方面是这些功能块从主体来说是比较内聚的；另一方面是对工作职责的细分，发挥团队协作的效能。


<span class="token comment">## 描述</span>
- 提供一种方法顺序地访问聚合对象内部的各个元素，而又无需暴露该对象内部的表示（对象内部结构未知）。
- 使用者无需关心对象的内部构造，就可以按顺序访问其中的每个元素。


<span class="token comment">## 应用场景</span>
- Array.prototype.forEach
- ES6的 Iterator
- 对于集合内部结果常常变化各异，不想暴露其内部结构，但又想让用户透明的访问其中的元素，可以使用迭代器模式


<span class="token comment">## 特点</span>
- 访问一个聚合对象的内容而无需暴露它的内部表示
- 为遍历不同的集合结构提供一个统一的接口，从而支持同样的算法在不同的集合结构上进行操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+S+`" alt="迭代器模式"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 迭代器 */</span>
<span class="token keyword">class</span> <span class="token class-name">Iterator</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> list
   <span class="token keyword">this</span><span class="token punctuation">.</span>currentIndex <span class="token operator">=</span> <span class="token number">0</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/** 是否还有下一个元素 */</span>
 <span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentIndex <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token boolean">false</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/** 下一个元素 */</span>
 <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentIndex<span class="token operator">++</span><span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> <span class="token keyword">null</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/** 测试 */</span>
<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> iterator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Iterator</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="【案例一】实现内部迭代器-自实现foreach" tabindex="-1"><a class="header-anchor" href="#【案例一】实现内部迭代器-自实现foreach"><span>【案例一】实现内部迭代器（自实现forEach）</span></a></h4><ul><li>内部迭代器在调用时简单，使用者不用关心迭代器内部实现的细节，但这也是内部迭代器的缺点。比如要比较两数组是否相等，只能在其回调函数中做文章。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 内部迭代器 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">myForEach</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 把索引下标和元素内容当做传递给 callback</span>
   <span class="token function">callback</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* myForEach([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;], (item, index) =&gt; {
 console.log(\`索引下标: \${index}, 元素内容: \${item}\`)
}) */</span>

<span class="token doc-comment comment">/** 两数组比较 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">compare</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">iterator1<span class="token punctuation">,</span> iterator2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token function">myForEach</span><span class="token punctuation">(</span>iterator1<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>iterator2<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">!==</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;两数组不等&#39;</span><span class="token punctuation">)</span>
     <span class="token keyword">return</span> <span class="token boolean">false</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>

 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;两数组相等&#39;</span><span class="token punctuation">)</span>
 <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
<span class="token function">compare</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="【案例二】实现外部迭代器" tabindex="-1"><a class="header-anchor" href="#【案例二】实现外部迭代器"><span>【案例二】实现外部迭代器</span></a></h4><ul><li>相较于内部迭代器，外部迭代器将遍历的权利转移到外部，因此在调用时有更多的自由性，但缺点是调用方式较复杂。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 外部迭代器 */</span>
<span class="token keyword">class</span> <span class="token class-name">ExternalIterator</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> list
   <span class="token keyword">this</span><span class="token punctuation">.</span>currentIndex <span class="token operator">=</span> <span class="token number">0</span>
 <span class="token punctuation">}</span>

 <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>currentIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>currentIndex <span class="token operator">+</span> <span class="token number">1</span>
 <span class="token punctuation">}</span>

 <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>currentIndex <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span>length
 <span class="token punctuation">}</span>

 <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentIndex<span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> iterator1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ExternalIterator</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> iterator2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ExternalIterator</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 两数组比较 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">compare</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">iterator1<span class="token punctuation">,</span> iterator2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>iterator1<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>iterator2<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>iterator1<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!==</span> iterator2<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;两数组不等&#39;</span><span class="token punctuation">)</span>
     <span class="token keyword">return</span> <span class="token boolean">false</span>
   <span class="token punctuation">}</span>

   <span class="token comment">// 外部迭代器将遍历的权利转移到外部</span>
   iterator1<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   iterator2<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;两数组相等&#39;</span><span class="token punctuation">)</span>
 <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
<span class="token function">compare</span><span class="token punctuation">(</span>iterator1<span class="token punctuation">,</span> iterator2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="【备忘录模式】时间旅行" tabindex="-1"><a class="header-anchor" href="#【备忘录模式】时间旅行"><span>【备忘录模式】时间旅行</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 备忘录（Memento）：时间回溯</span>
备忘录模式是对操作的一些记录，已被可以恢复到之前的版本。
在日常工作中，我们常常需要及时备份、及时保存、及时提交等操作，这样在程序崩溃的时候可以快速恢复到之前版本。但从抽象来说，一些比较长时费力的事情，我们应该分解来做，及时锁住部分收益。


<span class="token comment">## 描述</span>
在不破坏对象的封装性的前提下，在对象之外捕获并保存该对象内部的状态，以便日后对象使用或者对象恢复到以前的某个状态。


<span class="token comment">## 应用场景</span>
- 分页控件
- 撤销控件（时间旅行）


<span class="token comment">## 优点</span>
- 给用户提供一种可以恢复状态的机制，可以使用户能够比较方便地回到某个历史的状态

<span class="token comment">## 缺点</span>
- 消耗资源。如果类的成员变量过多，势必会占用比较大的资源，而且每一次保存都会消耗一定的内存。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+q+`" alt="备忘录模式"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 备忘类 */</span>
<span class="token keyword">class</span> <span class="token class-name">Memento</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>content <span class="token operator">=</span> content
 <span class="token punctuation">}</span>

 <span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>content
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/** 备忘列表 */</span>
<span class="token keyword">class</span> <span class="token class-name">CareTaker</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>mementoList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
 <span class="token punctuation">}</span>

 <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">memento</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>mementoList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>memento<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token function">get</span><span class="token punctuation">(</span>curIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mementoList<span class="token punctuation">[</span>curIndex<span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/** 编辑器 */</span>
<span class="token keyword">class</span> <span class="token class-name">Editor</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>content <span class="token operator">=</span> <span class="token keyword">null</span>
 <span class="token punctuation">}</span>

 <span class="token function">setContent</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>content <span class="token operator">=</span> content
 <span class="token punctuation">}</span>

 <span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>content
 <span class="token punctuation">}</span>

 <span class="token function">saveContentToMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Memento</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>content<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token function">getContentFromMemento</span><span class="token punctuation">(</span><span class="token parameter">memento</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>content <span class="token operator">=</span> memento<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/** 测试代码 */</span>
<span class="token keyword">const</span> editor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Editor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> careTaker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CareTaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
editor<span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span><span class="token string">&#39;1111&#39;</span><span class="token punctuation">)</span>
editor<span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span><span class="token string">&#39;2222&#39;</span><span class="token punctuation">)</span>
careTaker<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>editor<span class="token punctuation">.</span><span class="token function">saveContentToMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
editor<span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span><span class="token string">&#39;3333&#39;</span><span class="token punctuation">)</span>
careTaker<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>editor<span class="token punctuation">.</span><span class="token function">saveContentToMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
editor<span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span><span class="token string">&#39;4444&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>editor<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// 4444</span>
editor<span class="token punctuation">.</span><span class="token function">getContentFromMemento</span><span class="token punctuation">(</span>careTaker<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>editor<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// 3333</span>

editor<span class="token punctuation">.</span><span class="token function">getContentFromMemento</span><span class="token punctuation">(</span>careTaker<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>editor<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// 2222</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="【职责链模式】能力与责任" tabindex="-1"><a class="header-anchor" href="#【职责链模式】能力与责任"><span>【职责链模式】能力与责任</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 职责链（Chain of Responsibility）：能力与责任</span>
职责链是说将请求让队列内的处理器一个个执行，直到找到可以执行的。
这里对我们工作的启示是，我们常常抱怨我们得到的机会少，不能成为队列内优先可以处理的处理器，总是处理人家不想做的。但是换个角度看，首先责任链里面的处理器应该是正交的，大家应该各司其职。退一步来说，如果真的有重叠，那么你应该努力提升自己，成为能力强的，从而提高队列内的优先级。


<span class="token comment">## 描述</span>
- 使多个对象都有机会处理请求，从而避免请求的发送者和接受者之间的耦合关系，将这些对象连成一条链，并沿着这条链传递该请求，知道有一个对象处理它为止。
- 类似多米诺骨牌，通过请求第一个条件，会持续执行后续的条件，直到返回结果为止。
- 项目中职责链模式能解耦 <span class="token number">1</span> 个请求对象和 n 个目标对象的关系（如对 if-else 语句的优化）。


<span class="token comment">## JS 中的职责链模式痕迹</span>
- 作用域链：查找变量时，先从当前上下文的变量对象中查找，如果没有找到，就会从父级执行上下文的变量对象中查找，一直找到全局上下文的变量对象。
- 原型链：当读取实例的属性时，如果找不到，就会查找当前对象关联的原型中的属性，如果还查不到，就去查找原型的原型，一致到最顶层 null 为止。
- 事件冒泡：事件在 DOM 元素上触发后，会从最内层的元素开始发生，一直向外层传播，直到全局 document 对象。


<span class="token comment">## 职责链模式的适用场景</span>
- 需要多个对象处理同一个请求，具体请求由哪个对象处理在运行时才确定。
- 在不明确指定接收者的情况下，向多个对象中的其中一个提交请求的话，可以使用责任链模式。
- 如果想要动态指定处理一个请求的对象集合，可以使用职责链模式。


<span class="token comment">## 优点</span>
- 和命令模式类似，由于处理请求的职责节点可能是职责链上的任一节点，所以请求的发送者和接受者是解耦的。
- 通过改变链内的节点或调整节点次序，允许动态地新增或修改责任链，增强了给对象指派职责的灵活性，符合 <span class="token string">&quot;开闭原则&quot;</span>。
- 简化了对象，使得对象无需知道链的结构。
- 增加新的请求处理类很方便。

<span class="token comment">## 缺点</span>
- 不能保证某个请求一定会被链中的节点处理（有可能到最后一个节点还不能处理请求），这种情况可以在链尾增加一个保底的接受者节点来处理这种即将离开链尾的请求。
- 使程序中增加了很多节点对象，可能再一次请求的过程中，大部分节点并没有起到实质性的作用。它们的作用仅仅是让请求传递下去，从性能方面考虑，要避免过长的职责链带来的性能损耗。
- 调试不便，调用层次比较深，有可能会导致循环引用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+P+`" alt="责任链模式"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 请假审批：需要组长审批、经理审批、总监审批 */</span>
<span class="token keyword">class</span> <span class="token class-name">Action</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
   <span class="token keyword">this</span><span class="token punctuation">.</span>nextAction <span class="token operator">=</span> <span class="token keyword">null</span>
 <span class="token punctuation">}</span>

 <span class="token function">setNextAction</span><span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>nextAction <span class="token operator">=</span> action
 <span class="token punctuation">}</span>

 <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">审批</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nextAction <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>nextAction<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试 */</span>
<span class="token keyword">const</span> leader1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Action</span><span class="token punctuation">(</span><span class="token string">&#39;组长&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> leader2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Action</span><span class="token punctuation">(</span><span class="token string">&#39;经理&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> leader3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Action</span><span class="token punctuation">(</span><span class="token string">&#39;总监&#39;</span><span class="token punctuation">)</span>
leader1<span class="token punctuation">.</span><span class="token function">setNextAction</span><span class="token punctuation">(</span>leader2<span class="token punctuation">)</span>
leader2<span class="token punctuation">.</span><span class="token function">setNextAction</span><span class="token punctuation">(</span>leader3<span class="token punctuation">)</span>
leader1<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="【典例一】优惠券" tabindex="-1"><a class="header-anchor" href="#【典例一】优惠券"><span>【典例一】优惠券</span></a></h4><ul><li>场景: 某电商针对已付过定金的用户有优惠政策, 在正式购买后, 已经支付过 500 元定金的用户会收到 100 元的优惠券, 200 元定金的用户可以收到 50 元优惠券, 没有支付过定金的用户只能正常购买。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
* orderType: 表示订单类型, 1: 500 元定金用户；2: 200 元定金用户；3: 普通购买用户
* pay: 表示用户是否已经支付定金, true: 已支付；false: 未支付
* stock: 表示当前用于普通购买的手机库存数量, 已支付过定金的用户不受此限制
*/</span>
<span class="token keyword">const</span> <span class="token function-variable function">order</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">orderType<span class="token punctuation">,</span> pay<span class="token punctuation">,</span> stock</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>orderType <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>pay <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;500 元定金预购, 得到 100 元优惠券&#39;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>stock <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;普通购买, 无优惠券&#39;</span><span class="token punctuation">)</span>
     <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;库存不够, 无法购买&#39;</span><span class="token punctuation">)</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>orderType <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>pay <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;200 元定金预购, 得到 50 元优惠券&#39;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>stock <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;普通购买, 无优惠券&#39;</span><span class="token punctuation">)</span>
     <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;库存不够, 无法购买&#39;</span><span class="token punctuation">)</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>orderType <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>stock <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;普通购买, 无优惠券&#39;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;库存不够, 无法购买&#39;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">order</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span> <span class="token comment">// 普通购买, 无优惠券</span>


<span class="token doc-comment comment">/** 使用责任链模式改造 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">order500</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">orderType<span class="token punctuation">,</span> pay<span class="token punctuation">,</span> stock</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>orderType <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> pay <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;500 元定金预购, 得到 100 元优惠券&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token function">order200</span><span class="token punctuation">(</span>orderType<span class="token punctuation">,</span> pay<span class="token punctuation">,</span> stock<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">order200</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">orderType<span class="token punctuation">,</span> pay<span class="token punctuation">,</span> stock</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>orderType <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> pay <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;200 元定金预购, 得到 50 元优惠券&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token function">orderCommon</span><span class="token punctuation">(</span>orderType<span class="token punctuation">,</span> pay<span class="token punctuation">,</span> stock<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">orderCommon</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">orderType<span class="token punctuation">,</span> pay<span class="token punctuation">,</span> stock</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>orderType <span class="token operator">===</span> <span class="token number">3</span> <span class="token operator">||</span> <span class="token operator">!</span>pay<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> stock <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;普通购买, 无优惠券&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;库存不够, 无法购买&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">order500</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span> <span class="token comment">// 普通购买, 无优惠券</span>


<span class="token doc-comment comment">/** 结合 AOP 对链路进行优化 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">orders500</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">orderType<span class="token punctuation">,</span> pay<span class="token punctuation">,</span> stock</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>orderType <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> pay <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;500 元定金预购, 得到 100 元优惠券&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token string">&#39;nextSuccess&#39;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">orders200</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">orderType<span class="token punctuation">,</span> pay<span class="token punctuation">,</span> stock</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>orderType <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> pay <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;200 元定金预购, 得到 50 元优惠券&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token string">&#39;nextSuccess&#39;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">ordersCommon</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">orderType<span class="token punctuation">,</span> pay<span class="token punctuation">,</span> stock</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>orderType <span class="token operator">===</span> <span class="token number">3</span> <span class="token operator">||</span> <span class="token operator">!</span>pay<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> stock <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;普通购买, 无优惠券&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;库存不够, 无法购买&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 链路代码</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">after</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span>
 <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">self</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">===</span> <span class="token string">&#39;nextSuccess&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span> <span class="token comment">// 这里 return 别忘记了~</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> orders <span class="token operator">=</span> orders500<span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span>orders200<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span>ordersCommon<span class="token punctuation">)</span>
<span class="token function">orders</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span> <span class="token comment">// 普通购买, 无优惠券</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="【模板方法模式】标准化能力" tabindex="-1"><a class="header-anchor" href="#【模板方法模式】标准化能力"><span>【模板方法模式】标准化能力</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 模板（Template）：标准化能力</span>
模板方法模式是对一个执行过程进行抽象分解，通过骨架和扩展方法完成一个标准的主体逻辑和扩展。
在做一个系统平台时，一般是对过程进行标准化，对变化进行定义，形成一个平台逻辑和业务扩展，完成一个产品模板。只是这个模板是站点，还是扩展点，亦或者是其他的展示形式，这样标准化的能力也是需要长期训练的。


<span class="token comment">## 描述</span>
在父类中定义一组操作算法骨架，而将一些实现步骤延迟到子类中，使得子类可以不改变父类的算法结构的同时，重新定义算法中的某些实现步骤。
- 本质是抽象通用部分（骨架）和个性部分（在子类实现），即是将定义算法步骤骨架和具体实现分离。
- 在继承的基础上，在父类中定义好执行的算法。

<span class="token comment">## 模板方法模式的通用实现</span>
模板方法模式是由两部分结构组成，第一部分是抽象父类，第二部分是具体实现的子类。
通常在抽象父类中封装了子类的算法框架，包括实现一些公共方法和封装子类中所有方法的执行顺序。
子类通过继承这个抽象类，也继承了整个算法结构，并且可以选择重写父类的方法。

- AbstractClass: 抽象父类，把一些共用方法提取出来，把可变的方法作为抽象类，最重要的是把算法骨架抽象出来为模板方法
- TemplateMethod: 模板方法，固定了希望执行的算法骨架
- ConcreteClass: 子类，实现抽象父类中定义的抽象方法，调用继承的模板方法时，将执行模板方法中定义的算法流程。


<span class="token comment">## 适用场景</span>
- 如果知道一个算法所需要的关键步骤，而且很明确这些步骤的执行顺序，但是具体的实现是位置的、灵活的，此时可以使用模板方法模式来将算法步骤的框架抽象出来。
- 重要而复杂的算法，可以把核心算法逻辑设计为模板方法，周边相关细节功能由各个子类实现。
- 模板方法模式可以被用来将子类组件将自己的方法挂钩到高层组件中，也就是钩子，子类组件中的方法交出控制权，高层组件在模板方法中决定何时回调子类组件中的方法，类似的用法场景还有 发布-订阅模式、回调函数。


<span class="token comment">## 优点</span>
- 封装了不变部分，扩展了可变部分，把算法中不变的部分封装到父类中直接实现，而可变的部分由子类继承后再具体实现。
- 提取了公共代码部分，易于维护，因为公共的方法被提取到了父类，只需在父类中一次性修改这些公共方法即可。
- 行为被父类的模板方法固定，子类实现只负责执行模板方法，具备可扩展性，符合开闭原则。

<span class="token comment">## 缺点</span>
- 增加了系统复杂度，主要是增加了抽象类和类间的联系，需要做好文档工作。


<span class="token comment">## 模板方法模式与工厂模式的区别</span>
- 抽象工厂模式：提取的是实例的功能结构
- 模板方法模式：提取的是算法的骨架结构

<span class="token comment">## 模板方法模式与策略模式的区别</span>
- 模板方法模式：在子类定义时就已经确定了使用的算法
- 策略模式：让我们在程序运行时动态地指定要使用的算法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+_+`" alt="模板方法"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 
 * 抽象父类 - 饮品制作类
 * 咖啡制作过程为：烧开水 -&gt; 冲泡咖啡 -&gt; 倒入饮料杯 -&gt; 加糖
 * 泡茶制作过程为：烧开水 -&gt; 浸泡茶叶 -&gt; 倒入饮料杯 -&gt; 加柠檬
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Beverage</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> brewDrink<span class="token punctuation">,</span> addCondiment <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name <span class="token comment">// 制作的饮品名称</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>brewDrink <span class="token operator">=</span> brewDrink <span class="token comment">// 酝酿的饮品</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>addCondiment <span class="token operator">=</span> addCondiment <span class="token comment">// 添加的调味品</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 共用方法: 烧开水 */</span>
  <span class="token function">boilWater</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;共用：水已经煮沸&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 共用方法: 倒入饮料杯中 */</span>
  <span class="token function">pourCup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;共用：倒进饮料杯中&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 模板方法: 制作饮品的过程（核心是在父类上定义好执行算法） */</span>
  <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;制作的饮品名称：&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">boilWater</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">brewDrink</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">pourCup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addCondiment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/** 咖啡 */</span>
<span class="token keyword">const</span> coffee <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Beverage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;咖啡&#39;</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** 冲泡咖啡，覆盖抽象方法 */</span>
  <span class="token function-variable function">brewDrink</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;冲泡咖啡&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** 加调味品，覆盖抽象方法 */</span>
  <span class="token function-variable function">addCondiment</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;加糖&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
coffee<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 泡茶 */</span>
<span class="token keyword">const</span> tea <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Beverage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;泡茶&#39;</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** 浸泡茶叶，覆盖抽象方法 */</span>
  <span class="token function-variable function">brewDrink</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;浸泡茶叶&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** 加调味品，覆盖抽象方法 */</span>
  <span class="token function-variable function">addCondiment</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;加柠檬&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
tea<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,60),E=[B];function A(L,T){return s(),a("div",null,E)}const O=n(F,[["render",A],["__file","设计模式.html.vue"]]),I=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E7%AE%97%E6%B3%95/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.html","title":"","lang":"zh-CN","frontmatter":{"Author":"willysliang","CreateTime":"2022-08-21T16:16:15.000Z","Modifier":"willysliang","ModifiedTime":"2023-01-03T15:37:45.000Z","Description":"设计模式"},"headers":[{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"设计模式的六大原则","slug":"设计模式的六大原则","link":"#设计模式的六大原则","children":[]},{"level":3,"title":"设计模式分类","slug":"设计模式分类","link":"#设计模式分类","children":[]}]},{"level":2,"title":"创建型模式","slug":"创建型模式","link":"#创建型模式","children":[{"level":3,"title":"【工厂模式】","slug":"【工厂模式】","link":"#【工厂模式】","children":[]},{"level":3,"title":"【简单工厂模式】","slug":"【简单工厂模式】","link":"#【简单工厂模式】","children":[]},{"level":3,"title":"【工厂方法模式】抽象思考","slug":"【工厂方法模式】抽象思考","link":"#【工厂方法模式】抽象思考","children":[]},{"level":3,"title":"【抽象工厂模式】多套方案","slug":"【抽象工厂模式】多套方案","link":"#【抽象工厂模式】多套方案","children":[]},{"level":3,"title":"单例模式 Singleton","slug":"单例模式-singleton","link":"#单例模式-singleton","children":[]},{"level":3,"title":"建造者模式 Builder","slug":"建造者模式-builder","link":"#建造者模式-builder","children":[]},{"level":3,"title":"【原型模式】传承知识","slug":"【原型模式】传承知识","link":"#【原型模式】传承知识","children":[]}]},{"level":2,"title":"结构型模式","slug":"结构型模式","link":"#结构型模式","children":[{"level":3,"title":"适配器模式 Adapter","slug":"适配器模式-adapter","link":"#适配器模式-adapter","children":[]},{"level":3,"title":"装饰器模式 Decorator","slug":"装饰器模式-decorator","link":"#装饰器模式-decorator","children":[]},{"level":3,"title":"代理模式 Proxy","slug":"代理模式-proxy","link":"#代理模式-proxy","children":[]},{"level":3,"title":"外观模式 Facade","slug":"外观模式-facade","link":"#外观模式-facade","children":[]},{"level":3,"title":"【桥接模式】合理关系","slug":"【桥接模式】合理关系","link":"#【桥接模式】合理关系","children":[]},{"level":3,"title":"【组合模式】递归思考","slug":"【组合模式】递归思考","link":"#【组合模式】递归思考","children":[]},{"level":3,"title":"【享元模式】分离共享","slug":"【享元模式】分离共享","link":"#【享元模式】分离共享","children":[]}]},{"level":2,"title":"行为型模式","slug":"行为型模式","link":"#行为型模式","children":[{"level":3,"title":"策略模式 Strategy","slug":"策略模式-strategy","link":"#策略模式-strategy","children":[]},{"level":3,"title":"【命令模式】加强合作","slug":"【命令模式】加强合作","link":"#【命令模式】加强合作","children":[]},{"level":3,"title":"【状态模式】管理自己","slug":"【状态模式】管理自己","link":"#【状态模式】管理自己","children":[]},{"level":3,"title":"【观察者模式】发布订阅","slug":"【观察者模式】发布订阅","link":"#【观察者模式】发布订阅","children":[]},{"level":3,"title":"【发布订阅模式 VS 观察者模式】","slug":"【发布订阅模式-vs-观察者模式】","link":"#【发布订阅模式-vs-观察者模式】","children":[]},{"level":3,"title":"【访问者模式】学会放手","slug":"【访问者模式】学会放手","link":"#【访问者模式】学会放手","children":[]},{"level":3,"title":"【中介者模式】协调能力","slug":"【中介者模式】协调能力","link":"#【中介者模式】协调能力","children":[]},{"level":3,"title":"【解释器模式】加强理解","slug":"【解释器模式】加强理解","link":"#【解释器模式】加强理解","children":[]},{"level":3,"title":"【迭代器模式】横向职责","slug":"【迭代器模式】横向职责","link":"#【迭代器模式】横向职责","children":[]},{"level":3,"title":"【备忘录模式】时间旅行","slug":"【备忘录模式】时间旅行","link":"#【备忘录模式】时间旅行","children":[]},{"level":3,"title":"【职责链模式】能力与责任","slug":"【职责链模式】能力与责任","link":"#【职责链模式】能力与责任","children":[]},{"level":3,"title":"【模板方法模式】标准化能力","slug":"【模板方法模式】标准化能力","link":"#【模板方法模式】标准化能力","children":[]}]}],"git":{"updatedTime":1701161860000,"contributors":[{"name":"willy","email":"willysliang","commits":3}]},"filePathRelative":"前端算法/设计模式.md"}');export{O as comp,I as data};
