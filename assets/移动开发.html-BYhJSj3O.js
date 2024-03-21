import{_ as p,r as e,o,c,d as n,e as s,a as i,b as a}from"./app-Bvx-HY_0.js";const l="/static_blog/assets/image-20230702113802672-CE9ZX9Nt.png",u="/static_blog/assets/image-20230702132329524-Da0IpvHZ.png",r="/static_blog/assets/1532162-20191022142954535-1744005561-CeW03Nej.png",k="/static_blog/assets/1532162-20191022150205070-230863286-BhyuQLgG.png",d="/static_blog/assets/1532162-20191022150305460-797774925-AhVfgQ-X.png",v="/static_blog/assets/1532162-20191022153125407-826716782-CFY-0wlA.png",m="/static_blog/assets/1532162-20191022153902048-1360301103-BCHQbG0U.png",b="/static_blog/assets/1532162-20191022160019075-1592736359-CgCJdEUz.png",g="/static_blog/assets/1532162-20191022160458977-1154104765-DMrF64wO.png",h="/static_blog/assets/image-20221129114224176-B4fpAatg.png",y={},f=a(`<h2 id="移动端开发-html5" tabindex="-1"><a class="header-anchor" href="#移动端开发-html5"><span>移动端开发/HTML5</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 移动端开发 / HTML5</span>
DTD对比
fullScreen
FileReader文件流
Blob对象
网络状态
页面生命周期
网页状态监听
Notifications桌面通知
播放器开发 canvas交互特效开发
移动端适配/事件
移动端适配概念
尺寸与分辨率原理
PPI与DPI计算
DIP与DPR设备像素概念
视口viewport概念
布局视口
视觉视口
理想视口
视口适配方案（Meta viewport）缩放设置
screen窗口大小API
移动端适配方案
flexible rem方案
复合方案
高清适配方案
移动端字体缩放解决
半像素线
图片高清适配
image-set
Srcset
js拼接URL技巧
IPhonex刘海屏适配
安全区域
fit与env
Meta权限管理
兼容优化
IOS头部底部闪屏回退输入框问题
输入法空格问题
默认首字母大写问题
滑动卡顿问题等
终端样式美化与访问判断
Touch事件组封装
click延迟处理
FastClick使用
禁用缩放设置理想视口

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="物理像素、逻辑像素、css-像素、ppi、设备像素比" tabindex="-1"><a class="header-anchor" href="#物理像素、逻辑像素、css-像素、ppi、设备像素比"><span>物理像素、逻辑像素、CSS 像素、PPI、设备像素比</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 物理像素、逻辑像素、CSS 像素、PPI、设备像素比</span>
- 物理像素代表屏幕上有多少个点，比如 <span class="token number">1080</span>*2340 表示屏幕水平方向一排有 <span class="token number">1080</span> 个物理像素点。
- 逻辑像素表示屏幕展示物体的视觉尺寸是多少。逻辑像素相同表示物体看起来或者打印出来大小一样，物理像素点越小，一个逻辑像素包含点物理像素点越多，看起来就越清晰。
- 一般情况下 CSS 像素等同于逻辑像素，但浏览器和手机具备放大模式，此时就不再相等。
- PPI 是屏幕对角线的物理像素的个数除以对角线英寸数。
- 设备像素比是在水平或者垂直方向，在同一排一个逻辑像素能放几个物理像素。



<span class="token comment">### 物理像素</span>
物理像素又称设备像素，屏幕的最小物理单位。如手机参数中的 <span class="token string">&#39;2340 * 1080&#39;</span> 像素分辨率指的是设备像素，表示屏幕水平有 <span class="token number">10801</span> 个点，垂直有 <span class="token number">2340</span> 个点。



<span class="token comment">### 逻辑像素</span>
逻辑像素又称设备独立像素，如电脑屏幕中 <span class="token number">2560</span>*1600 分辨率的字太小了，把它调为 <span class="token number">1400</span>*900。这里的分辨率指设备独立像素，可通过 window.screen.width/window.screen.height 查看。



<span class="token comment">### PPI (pix per inch)</span>
每英寸的物理像素数。以尺寸为5.4英寸（屏幕对角线长度）、分辨率为1080 x <span class="token number">2340</span>的iPhone12 mini为例， ppi <span class="token operator">=</span> Math.sqrt<span class="token punctuation">(</span><span class="token number">1080</span>*1080 + <span class="token number">2340</span>*2340<span class="token punctuation">)</span> / <span class="token number">5.4</span> ，值为 476PPI。



<span class="token comment">### CSS像素</span>
CSS像素（CSS pixels）是指在CSS中使用的抽象单位，不同于物理像素（physical pixels），它是浏览器使用的一个相对单位，用来精确度量网页上的内容。
CSS像素的大小与设备的分辨率无关，而是根据浏览器的缩放级别和用户屏幕的像素密度（DPI）而定。
在标准屏幕上（页面缩放比为1），1个CSS像素等于 <span class="token number">1</span>个设备独立像素，1个CSS像素通常等于 <span class="token number">1</span>个物理像素；但在高分辨率屏幕（如Retina显示屏）上，1 CSS像素可能会对应多个物理像素。
CSS像素常用于定义网页元素的尺寸、边距、字体大小等，它的值可以是整数或小数。在不同的设备上，同样的CSS像素大小可能会呈现不同的物理尺寸，因此使用CSS像素可以保证在不同设备上元素的显示效果更加一致。
当页面缩放比不为1时，CSS像素和设备独立像素不再对应。比如当页面放大200%，则1个CSS像素等于4个设备独立像素。
比如假设把屏幕独立像素分辨率设置为 1440x900，给页面元素设置为宽度 720px，则视觉上元素的宽度是屏幕宽度的一半。这也解释了为什么当我们把独立像素分辨率调高后网页的文字感觉变小了。




<span class="token comment">### 设备像素比</span>
window.devicePixelRatio指的是设备物理像素和逻辑像素（device-independent pixels, dips）的比例。
window.devicePixelRatio <span class="token operator">=</span> 物理像素 / 设备独立像素（dips） 。
iPhone12mini 的 DPR 是 <span class="token number">1080</span> / <span class="token number">375</span> <span class="token operator">=</span> <span class="token number">3</span>。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hybrid-app-开发" tabindex="-1"><a class="header-anchor" href="#hybrid-app-开发"><span>Hybrid App 开发</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Hybrid App开发</span>
混合式开发（Hybrid App开发）是指在开发一款 App 产品由原生与 H5 的开发技术（“HTML5云网站 + APP应用客户端”）两部分组成的的混合应用，原生代码利用 <span class="token string">&quot;Web View&quot;</span> 插件或者其他框架为 H5 提供容器，程序主要的业务实现、页面展示都是利用与 H5 相关的 Web 技术进行实现。


<span class="token comment">### WebView</span>
webView 是移动端提供的运行 JavaScript 的环境，是系统渲染 Web 网页的一个控件，可与页面 JavaScript 交互，实现混合开发，其中 Android 和 iOS 又有些不同：
	- Android 的 WebView 的低版本和高版本使用了不同的webkit内核，4.4后使用 Chrome。
	- iOS 中 UIWebView 是自IOS2就有，但性能、特性支持较差，WKWebView 是 iOS8 后的升级版。
WebView 控件除了能加载指定的 url 外，还可以对 URL 请求、JavaScript 的对话框、加载进度、页面交互进行处理，如拦截请求、执行JS脚本等。



<span class="token comment">### JS桥技术（JsBridge）</span>
JSBridge 主要提供 JS 调用 Native 代码的能力来实现原生功能，核心是构建 Native 和 H5 之前的通信通道（双向通信）。如查看本地相册、打开摄像头、指纹支付等。
		<span class="token number">1</span>. JS 向 Native 发送信息：调用相关功能、通知 Native 当前 JS 的相关状态等。
		<span class="token number">2</span>. Native 向 JS 发送信息：回溯调用结果、消息推送、通知 JS 当前 Native 的状态等。



<span class="token comment">### JSBridge 的实现原理</span>
JavaScript 是运行在一个单独的 JS Context 中（如 WebView 的 Webkit 引擎、JSCore）。由于这些 Context 与原生运行环境的天然隔离，我们可以将这种情况与 RPC（远程过程调用 Remote Procedure Call）通信进行类比，将 Native 与 JavaScript 的每次互相调用看做一次 RPC 调用，Web 端调用原生接口就如同 Client 向 Server 端发送一个请求，JSBridge 在此充当类似于 HTTP 协议的角色，实现 JSBridge 主要是两点：
		- （通信调用（Native 与 JS 通信）和句柄解析调用）
		<span class="token number">1</span>. 将 Native 端原生接口封装成 JavaScript 接口
		<span class="token number">2</span>. 将 Web 端 JavaScript 接口封装成原生接口


<span class="token comment">### JSBridge 的通信流程</span>
JavaScript 调用 Native：
		<span class="token number">1</span>. 接收到 JavaScript 消息；
		<span class="token number">2</span>. 解析参数，拿到 bridgeName、data 和 callbackId；
		<span class="token number">3</span>. 根据 bridgeName 找到相应功能方法，以 data 为参数执行；
		<span class="token number">4</span>. 执行返回值和 callbackId 一起回传到前端。
Native 调用 JavaScript：
		<span class="token number">1</span>. 直接自动生成一个唯一的 ResponseId，并存储句柄，然后和 data 一起发送给前端。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+'" alt="image-20230702113802672"></p><h3 id="jsbridge-的通信原理" tabindex="-1"><a class="header-anchor" href="#jsbridge-的通信原理"><span>JSBridge 的通信原理</span></a></h3><p><img src="'+u+`" alt="image-20230702132329524"></p><h3 id="js-调用-native" tabindex="-1"><a class="header-anchor" href="#js-调用-native"><span>JS 调用 Native</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## JS 调用 Native</span>

<span class="token comment">### 拦截 Webview 请求的 URL Schema</span>
URL SCHEME 是类似于 url 链接，是为了方便 App 直接互相调用设计的，形式和普通 url 主要区别是 protocol 和 <span class="token function">host</span> 是自定义的，格式如 <span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>protocol<span class="token operator">&gt;</span>://<span class="token operator">&lt;</span>host<span class="token operator">&gt;</span>/<span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>?<span class="token operator">&lt;</span>qeury<span class="token operator">&gt;</span><span class="token comment">#fragment</span><span class="token variable">\`</span></span>。
例如: qunarhy://hy/url?url<span class="token operator">=</span>ymfe.tech，protocol 是 qunarhy，host 则是 hy。

拦截 URL SCHEME 的主要流程是：Web 端通过某种方式（例如 iframe.src）发送 URL Scheme 请求，之后 Native 拦截到请求并根据 URL SCHEME（包括所带的参数）进行相关操作。
在时间过程中，这种方式有一定的缺陷：
  <span class="token number">1</span>. 使用 iframe.src 发送 URL SCHEME 会有 url 长度的隐患。
  <span class="token number">2</span>. 创建请求需要一定的耗时，比注入 API 的方式调用同样的功能耗时会较长。
因此 JavaScript 调用 Native 推荐使用注入 API 的方式。



<span class="token comment">### 注入 API</span>
注入API 主要原理是通过 WebView 提供的接口，向 JS 的 Context（window）中注入对象或者方法，让 JS 调用时直接执行相应的 Native 代码逻辑，达到 JS 调用 Native 的目的。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsbridge-引用" tabindex="-1"><a class="header-anchor" href="#jsbridge-引用"><span>JSBridge 引用</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## JSBridge 如何引用</span>
<span class="token comment">### 1. 由 Native 端进行注入</span>
注入方式和 Native 调用 JavaScript 类似，直接执行桥的全部代码。
优点：桥的版本很容易与 Native 保持一致，Native 端不用对不同版本的 JSBridge 进行兼容。
缺点：注入时机不确定，需要实现注入失败后重试的机制，保证注入的成功率，同时 JavaScript 端在调用接口时，需要优先判断 JSBridge 是否已经注入成功。


<span class="token comment">## 2. 由 JavaScript 端引用</span>
直接与 JavaScript 一起执行，与由 Native 端注入正好相反。
优点：JavaScript 端可以确定 JSBridge 的存在，直接调用即可。
缺点：如果桥的实现方式有更改，JSBridge 需要兼容多版本的 Native Bridge 或者 Native Bridge 兼容多版本的 JSBridge。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h3 id="注入api" tabindex="-1"><a class="header-anchor" href="#注入api"><span>注入API</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
	* Native 调用 JavaScript
	*/</span>
<span class="token doc-comment comment">/** IOS 的 UIWebView */</span>
JSContext <span class="token operator">*</span>context <span class="token operator">=</span> <span class="token punctuation">[</span>uiWebView valueForKeyPath<span class="token operator">:</span>@<span class="token string">&quot;documentView.webView.mainFrame.javaScriptContext&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
context<span class="token punctuation">[</span>@<span class="token string">&quot;postBridgeMessage&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">^</span><span class="token punctuation">(</span>NSArray<span class="token operator">&lt;</span>NSArray <span class="token operator">*</span><span class="token operator">&gt;</span> <span class="token operator">*</span>calls<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
	<span class="token comment">// Native 逻辑 </span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

   
   <span class="token doc-comment comment">/** iOS 的 WKWebView */</span>
<span class="token punctuation">[</span>wkWebView evaluateJavaScript<span class="token operator">:</span> javaScriptString completionHandler<span class="token operator">:</span> completionHandler<span class="token punctuation">]</span>


<span class="token doc-comment comment">/**
	* 前端调用 Native
	*/</span>
<span class="token comment">// 前端调用方式： </span>
window<span class="token punctuation">.</span><span class="token function">postBridgeMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="jsbridge接口实现" tabindex="-1"><a class="header-anchor" href="#jsbridge接口实现"><span>JSBridge接口实现</span></a></h3><blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
	* 
	*/</span>
window<span class="token punctuation">.</span>JSBridge <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 调用 Native</span>
  <span class="token function-variable function">invoke</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">bridgeName<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断环境，获取不同的 nativeBridge</span>
    nativeBridge<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">bridgeName</span><span class="token operator">:</span> bridgeName<span class="token punctuation">,</span> 
      <span class="token literal-property property">data</span><span class="token operator">:</span> data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 接收/处理消息</span>
  <span class="token function-variable function">receiveMessage</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> bridgeName <span class="token operator">=</span> msg<span class="token punctuation">.</span>bridgeName
    <span class="token keyword">const</span> data <span class="token operator">=</span> msg<span class="token punctuation">.</span>data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token comment">// 具体逻辑    </span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="android-webview" tabindex="-1"><a class="header-anchor" href="#android-webview"><span>Android（WebView）</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Android（WebView）</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>调用 JS 代码：在 Android 中利用 <code>WebView.evaluateJavascript()</code> 函数调用 JS 代码</strong></p><div class="language-kotlin line-numbers-mode" data-ext="kt" data-title="kt"><pre class="language-kotlin"><code>webView<span class="token punctuation">.</span><span class="token function">evaluateJavascript</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;javascriptFunction();&quot;</span></span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>JS 调用原生代码：在 JavaScript 代码中调用原生功能，需要在 Android 代码中定义一个接口类供 JavaScript 调用。</strong></p><div class="language-kotlin line-numbers-mode" data-ext="kt" data-title="kt"><pre class="language-kotlin"><code><span class="token comment">// 定义接口</span>
<span class="token keyword">class</span> <span class="token function">JavaScriptInterface</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">val</span> context<span class="token operator">:</span> Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token annotation builtin">@JavascriptInterface</span>
     <span class="token keyword">fun</span> <span class="token function">nativeFunction</span><span class="token punctuation">(</span>param<span class="token operator">:</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token comment">// 原生功能实现</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 注入接口</span>
webView<span class="token punctuation">.</span><span class="token function">addJavascriptInterface</span><span class="token punctuation">(</span><span class="token function">JavaScriptInterface</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;AndroidInterface&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 在 JavaScript 中相应调用</span>
AndroidInterface<span class="token punctuation">.</span><span class="token function">nativeFunction</span><span class="token punctuation">(</span><span class="token string">&quot;param&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="ios-wkwebview" tabindex="-1"><a class="header-anchor" href="#ios-wkwebview"><span>iOS（WKWebView）</span></a></h3><blockquote><p><strong>调用 JS 代码：在 Swift/Objective-C 代码中，利用 <code>WKWebView.evaluateJavaScript()</code> 函数来调用 JavaScript 代码</strong></p><div class="language-kotlin line-numbers-mode" data-ext="kt" data-title="kt"><pre class="language-kotlin"><code>webView<span class="token punctuation">.</span><span class="token function">evaluateJavaScript</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;javascriptFunction();&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>JS 调用原生代码：采用 <code>WKScriptMessageHandler</code> 协议实现通信。</strong></p><p>首先实现 <code>WKScriptMessageHandler</code> 协议</p><div class="language-swift line-numbers-mode" data-ext="swift" data-title="swift"><pre class="language-swift"><code><span class="token keyword">extension</span> <span class="token class-name">YourViewController</span><span class="token punctuation">:</span> <span class="token class-name">WKScriptMessageHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">userContentController</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> userContentController<span class="token punctuation">:</span> <span class="token class-name">WKUserContentController</span><span class="token punctuation">,</span> didReceive message<span class="token punctuation">:</span> <span class="token class-name">WKScriptMessage</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 捕获到从 JS 发送的消息</span>
        <span class="token keyword">if</span> message<span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string-literal"><span class="token string">&quot;yourMessageHandler&quot;</span></span> <span class="token punctuation">{</span>
            <span class="token comment">// 处理原生代码逻辑</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后将消息处理器添加到 <code>WKUserContentController</code></p><div class="language-swift line-numbers-mode" data-ext="swift" data-title="swift"><pre class="language-swift"><code><span class="token keyword">let</span> contentController <span class="token operator">=</span> <span class="token class-name">WKUserContentController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
contentController<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;yourMessageHandler&quot;</span></span><span class="token punctuation">)</span>

<span class="token keyword">let</span> config <span class="token operator">=</span> <span class="token class-name">WKWebViewConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
config<span class="token punctuation">.</span>userContentController <span class="token operator">=</span> contentController

webView <span class="token operator">=</span> <span class="token class-name">WKWebView</span><span class="token punctuation">(</span>frame<span class="token punctuation">:</span> <span class="token punctuation">.</span>zero<span class="token punctuation">,</span> configuration<span class="token punctuation">:</span> config<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 JavaScript 中调用:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>webkit<span class="token punctuation">.</span>messageHandlers<span class="token punctuation">.</span>yourMessageHandler<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">&quot;param&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h3 id="window-webviewjavascriptbridge" tabindex="-1"><a class="header-anchor" href="#window-webviewjavascriptbridge"><span>window.WebViewJavascriptBridge</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## window.webViewJavaScriptBridge</span>
<span class="token variable"><span class="token variable">\`</span>window.WebViewJavascriptBridge<span class="token variable">\`</span></span> 是一个 JavaScript 库，用于实现 WebView（例如 Android WebView 或 iOS WKWebView 等）与前端 JavaScript 之间的双向通信。它给 JavaScript 和原生代码提供了一套统一的接口，隐藏了平台之间的差异，从而简化了双向通信的实现。


<span class="token comment">### webViewJavaScriptBridge 的解析过程</span>
<span class="token number">1</span>. 初始化
在 WebView 中加载 WebViewJavascriptBridge 库。
注意：要确保页面上的其他 JavaScript 代码在 WebViewJavascriptBridge 加载完成之后再执行。
可以利用 <span class="token variable"><span class="token variable">\`</span>document.addEventListener<span class="token punctuation">(</span><span class="token string">&#39;WebViewJavascriptBridgeReady&#39;</span>, callback<span class="token punctuation">)</span><span class="token variable">\`</span></span> 来监听 WebViewJavascriptBridge 的加载事件。
document.addEventListener<span class="token punctuation">(</span><span class="token string">&#39;WebViewJavascriptBridgeReady&#39;</span>, <span class="token function-name function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	// WebViewJavascriptBridge 加载完成
<span class="token punctuation">}</span>, <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    

<span class="token number">2</span>. 原生调用 JavaScript
使用 <span class="token variable"><span class="token variable">\`</span>window.WebViewJavascriptBridge.callHandler<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 函数调用 JavaScript 函数。
window.WebViewJavascriptBridge.callHandler<span class="token punctuation">(</span><span class="token string">&#39;javascriptFunction&#39;</span>, data, function<span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	// 处理 JavaScript 函数返回的响应
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    
<span class="token number">3</span>. JavaScript 调用原生代码
使用 <span class="token variable"><span class="token variable">\`</span>window.WebViewJavascriptBridge.registerHandler<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 函数注册一个本地处理器，供原生代码调用。
window.WebViewJavascriptBridge.registerHandler<span class="token punctuation">(</span><span class="token string">&#39;nativeFunction&#39;</span>, function<span class="token punctuation">(</span>data, responseCallback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  // 处理原生代码传入的数据
  responseCallback<span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token number">4</span>. 原生端实现
- Android：使用 WebViewJavascriptBridge 提供的库实现 JS 与 Java/Kotlin 代码之间的交互。
- iOS：可以使用 WebViewJavascriptBridge-iOS 库或自行实现 WKScriptMessageHandler 协议。

注意：虽然 WebViewJavascriptBridge 可以简化双向通信的实现，但很多现代环境中已有原生解决方案（例如，Android 的 <span class="token variable"><span class="token variable">\`</span>addJavascriptInterface<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 和 iOS 的 <span class="token variable"><span class="token variable">\`</span>WKScriptMessageHandler<span class="token variable">\`</span></span>），因此直接使用原生方法可能更加高效和安全。不过，WebViewJavascriptBridge 仍然适用于需要跨平台一致性的场景。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jssdk封装" tabindex="-1"><a class="header-anchor" href="#jssdk封装"><span>JSSDK封装</span></a></h3><h4 id="web端" tabindex="-1"><a class="header-anchor" href="#web端"><span>Web端</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showBtn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>获取Native输入，以Web弹窗展现<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 根据id保存callback</span>
  <span class="token keyword">const</span> callbackMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 使用JSSDK封装调用与Native通信的事件，避免过多的污染全局环境</span>
  window<span class="token punctuation">.</span><span class="token constant">JSSDK</span> <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token comment">// 获取Native端输入框value，带有回调</span>
    <span class="token function">getNativeEditTextValue</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> callbackId <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
      callbackMap<span class="token punctuation">[</span>callbackId<span class="token punctuation">]</span> <span class="token operator">=</span> callback<span class="token punctuation">;</span>
      <span class="token comment">// 调用JSB方法，并将callbackId传入</span>
      window<span class="token punctuation">.</span>NativeBridge<span class="token punctuation">.</span><span class="token function">getNativeEditTextValue</span><span class="token punctuation">(</span>callbackId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 接收Native端传来的callbackId</span>
    <span class="token function">receiveMessage</span><span class="token punctuation">(</span><span class="token parameter">callbackId<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>callbackMap<span class="token punctuation">[</span>callbackId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 根据ID匹配callback，并执行</span>
        callbackMap<span class="token punctuation">[</span>callbackId<span class="token punctuation">]</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> showBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#showBtn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 绑定按钮事件</span>
  showBtn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 通过JSSDK调用，将回调函数传入</span>
    window<span class="token punctuation">.</span><span class="token constant">JSSDK</span><span class="token punctuation">.</span><span class="token function">getNativeEditTextValue</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> window<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Natvie输入值：&#39;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="android端" tabindex="-1"><a class="header-anchor" href="#android端"><span>Android端</span></a></h4><div class="language-kotlin line-numbers-mode" data-ext="kt" data-title="kt"><pre class="language-kotlin"><code>webView<span class="token punctuation">.</span><span class="token function">addJavascriptInterface</span><span class="token punctuation">(</span>new <span class="token function">NativeBridge</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;NativeBridge&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> NativeBridge <span class="token punctuation">{</span>
  <span class="token keyword">private</span> Context ctx<span class="token punctuation">;</span>
  <span class="token function">NativeBridge</span><span class="token punctuation">(</span>Context ctx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ctx <span class="token operator">=</span> ctx<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 获取Native端输入值</span>
  <span class="token annotation builtin">@JavascriptInterface</span>
  <span class="token keyword">public</span> void <span class="token function">getNativeEditTextValue</span><span class="token punctuation">(</span>int callbackId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    MainActivity mainActivity <span class="token operator">=</span> <span class="token punctuation">(</span>MainActivity<span class="token punctuation">)</span>ctx<span class="token punctuation">;</span>

    <span class="token comment">// 获取Native端输入框的value</span>
    String value <span class="token operator">=</span> mainActivity<span class="token punctuation">.</span>editText<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 需要注入在Web执行的JS代码</span>
    String jsCode <span class="token operator">=</span> String<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;window.JSSDK.receiveMessage(%s, &#39;%s&#39;)&quot;</span></span><span class="token punctuation">,</span> callbackId<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 在UI线程中执行</span>
    mainActivity<span class="token punctuation">.</span><span class="token function">runOnUiThread</span><span class="token punctuation">(</span>new <span class="token function">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token annotation builtin">@Override</span>
      <span class="token keyword">public</span> void <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mainActivity<span class="token punctuation">.</span>webView<span class="token punctuation">.</span><span class="token function">evaluateJavascript</span><span class="token punctuation">(</span>jsCode<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uni-app" tabindex="-1"><a class="header-anchor" href="#uni-app"><span>uni-app</span></a></h2><blockquote><h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由"><span>路由</span></a></h3><p>uni-app有两种页面路由跳转的方式：使用<code>navigator</code>组件跳转、调用<code>API</code>跳转。</p><h4 id="页面栈" tabindex="-1"><a class="header-anchor" href="#页面栈"><span>页面栈</span></a></h4><p>框架以栈的形式管理当前页面，当发生路由跳转时，页面栈表现：</p><ol><li>初始化：新页面入栈，uni-app打开的一个页面</li><li>打开新页面：新页面入栈，调用API<code>uni.navigateTo</code>、使用组件<code>&lt;navigator open-type=&quot;navigate&quot;/&gt;</code></li><li>页面重定向：当前页面出栈，新页面入栈</li><li>页面返回：页面不断出栈，知道目标返回页</li><li>Tab切换：页面全部出栈，只留下新的Tab页面</li><li>重加载：页面全部出栈，只留下新的页面</li></ol><h4 id="平台判断" tabindex="-1"><a class="header-anchor" href="#平台判断"><span>平台判断</span></a></h4><p>因为不同平台编译出包后是不同的代码，所以需要判断某些方法</p><p>运行期判断 运行期判断是指代码已经打入包中，仍然需要在运行期判断平台，此时可使用 <code>uni.getSystemInfoSync().platform</code> 判断客户端环境是 Android、iOS 还是小程序开发工具</p><blockquote><p>注意：<code>uni.getSystemInfoSync().platform</code> 返回值均为 devtools）</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">switch</span><span class="token punctuation">(</span>uni<span class="token punctuation">.</span><span class="token function">getSystemInfoSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>platform<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token string">&#39;android&#39;</span><span class="token operator">:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;运行Android上&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">&#39;ios&#39;</span><span class="token operator">:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;运行iOS上&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;运行在开发者工具上&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="iconfont封装成svg" tabindex="-1"><a class="header-anchor" href="#iconfont封装成svg"><span>iconfont封装成svg</span></a></h3><blockquote><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- SvgIcon.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>classList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">:xlink:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>iconName<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
<span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">iconClass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
<span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
<span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;#409eff&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
<span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;20px&#39;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> classList <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>className <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> iconName <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>iconClass<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.icon</span> <span class="token punctuation">{</span>
<span class="token comment">/* v-bind是Vue3才支持的功能，可以将CSS的值与js的值绑定 */</span>
<span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">v-bind</span><span class="token punctuation">(</span><span class="token string">&#39;props.size&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">v-bind</span><span class="token punctuation">(</span><span class="token string">&#39;props.size&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token property">vertical-align</span><span class="token punctuation">:</span> -2px<span class="token punctuation">;</span>
<span class="token property">fill</span><span class="token punctuation">:</span> currentColor<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SvgIcon</span> <span class="token attr-name">:icon-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-pointer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SvgIcon</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SvgIcon</span> <span class="token attr-name">:icon-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-pointer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SvgIcon</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span>
import SvgIcon from &#39;./SvgIcon.vue&#39;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sript</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置hover样式" tabindex="-1"><a class="header-anchor" href="#设置hover样式"><span>设置hover样式</span></a></h4><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@mouseenter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>($event) =&gt; handleMouseenter($event, index)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@mouseleave</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>($event) =&gt; handleMouseleave($event, index)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SvgIcon</span> <span class="token attr-name">:icon-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-pointer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hoverIconIndex == index ? &#39;blue&#39; : &#39;red&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SvgIcon</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span>
import {ref} from &#39;vue&#39;
const list = ref([
{name: &#39;张三&#39;}
])
const color = ref(&#39;red&#39;)
const hoverIconIndex = ref(-1)
const handleMouseenter = (event, index) =&gt; {
hoverIconIndex.value = index;
}
const handleMouseleave = (event, index) =&gt; {
hoverIconIndex.value = -1;
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sript</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="根据touch事件实现左右移动切换模块" tabindex="-1"><a class="header-anchor" href="#根据touch事件实现左右移动切换模块"><span>根据touch事件实现左右移动切换模块</span></a></h3><blockquote><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">@touchstart</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>touchStart<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@touchmove</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>touchMove<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@touchend</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>touchEnd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BaseForm</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuFlag === 0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PersonForm</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuFlag === 1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VehicleForm</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuFlag === 2<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LogisticsForm</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuFlag === 3<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ThingForm</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuFlag === 4<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CostForm</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuFlag === 5<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DocumentForm</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuFlag === 6<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> menuFlag <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 来标记当前所在模块</span>
<span class="token keyword">const</span> touch <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">startX</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//滑动开始x轴位置</span>
	<span class="token literal-property property">startY</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//滑动开始y轴位置</span>
	<span class="token literal-property property">moveX</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//滑动的x轴距离</span>
	<span class="token literal-property property">moveY</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//滑动的y轴距离</span>
	<span class="token literal-property property">like_state</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//-1：左滑，0：没滑动，1：右滑</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">touchStart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	touch<span class="token punctuation">.</span>startX <span class="token operator">=</span> event<span class="token punctuation">.</span>touches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>pageX<span class="token punctuation">;</span>
	touch<span class="token punctuation">.</span>startY <span class="token operator">=</span> event<span class="token punctuation">.</span>touches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>pageY<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">touchMove</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> currentX <span class="token operator">=</span> event<span class="token punctuation">.</span>touches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>pageX<span class="token punctuation">;</span>
	<span class="token keyword">const</span> currentY <span class="token operator">=</span> event<span class="token punctuation">.</span>touches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>pageY<span class="token punctuation">;</span>
	<span class="token keyword">const</span> moveX <span class="token operator">=</span> currentX <span class="token operator">-</span> touch<span class="token punctuation">.</span>startX<span class="token punctuation">;</span>
	<span class="token keyword">const</span> moveY <span class="token operator">=</span> currentY <span class="token operator">-</span> touch<span class="token punctuation">.</span>startY<span class="token punctuation">;</span>
	<span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> state <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//-1：左滑，0：没滑动，1：右滑</span>
	<span class="token comment">// //左右方向滑动</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>moveX<span class="token punctuation">)</span> <span class="token operator">&gt;</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>moveY<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>moveX <span class="token operator">&lt;</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			text <span class="token operator">=</span> <span class="token string">&#39;左滑&#39;</span><span class="token punctuation">;</span>
			state <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>moveX <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			text <span class="token operator">=</span> <span class="token string">&#39;右滑&#39;</span><span class="token punctuation">;</span>
			state <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> 
		<span class="token comment">//上下方向滑动</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>moveY <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
			text <span class="token operator">=</span> <span class="token string">&#39;上滑&#39;</span><span class="token punctuation">;</span>
		<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>moveY <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> 
			text <span class="token operator">=</span> <span class="token string">&#39;下滑&#39;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	touch<span class="token punctuation">.</span>like_state <span class="token operator">=</span> state<span class="token punctuation">;</span>
	touch<span class="token punctuation">.</span>moveX <span class="token operator">=</span> moveX<span class="token punctuation">;</span>
	touch<span class="token punctuation">.</span>moveY <span class="token operator">=</span> moveY<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">touchEnd</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token comment">// console.log(\`移动距离:\${Math.abs(touch.moveX)}\`)</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>touch<span class="token punctuation">.</span>moveX<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">60</span> <span class="token operator">&amp;&amp;</span> touch<span class="token punctuation">.</span>like_state <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> state <span class="token operator">=</span> touch<span class="token punctuation">.</span>like_state
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>touch<span class="token punctuation">.</span>like_state<span class="token punctuation">,</span> state<span class="token punctuation">)</span><span class="token punctuation">;</span>
		touch<span class="token punctuation">.</span>like_state <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">100</span><span class="token comment">//设置这个数是为了避免滑动之后点击不走touchMove而产生的不正常滑动</span>
		<span class="token comment">//这里放需要进行的业务逻辑</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>state <span class="token operator">&gt;=</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> menuFlag<span class="token punctuation">.</span>value <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
			menuFlag<span class="token punctuation">.</span>value <span class="token operator">=</span> menuFlag<span class="token punctuation">.</span>value <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>state <span class="token operator">&lt;=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> menuFlag<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			menuFlag<span class="token punctuation">.</span>value <span class="token operator">=</span> menuFlag<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="uniapp打包" tabindex="-1"><a class="header-anchor" href="#uniapp打包"><span>uniapp打包</span></a></h3><blockquote><p>Android平台打包发布apk应用，需要使用数字证书（.keystore文件）进行签名，用于表明开发者身份。Android证书的生成是自助和免费的，不需要审批或付费。可以使用JRE环境中的keytool命令生成。</p><p><strong>windows平台生成证书的方法</strong></p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>1. 安装JRE环境，推荐使用JRE8环境
	<span class="token property">可从Oracle官方下载jre安装包：https</span><span class="token punctuation">:</span>//www.oracle.com/technetwork/java/javase/downloads/index.html
	<span class="token property">下面以Windows平台，jre安装目录为“C</span><span class="token punctuation">:</span>\\Program Files\\Java\\jre1.8.0_201”为例，实际操作时请修改为自己安装目录
	建议将JRE安装路径添加到系统环境变量，已配置可跳过此章节
	打开命令行（cmd），输入以下命令：
<span class="token property">d</span><span class="token punctuation">:</span>  
set PATH=%PATH%<span class="token punctuation">;</span><span class="token string">&quot;C:\\Program Files\\Java\\jre1.8.0_201\\bin&quot;</span>


2. 生成签名证书
使用keytool -genkey命令生成证书，在cmd输入一下命令：
keytool -genkey -alias testalias -keyalg RSA -keysize 2048 -validity 36500 -keystore test.keystore

2.1 输入的命令说明：
    testalias是证书别名，可修改为自己想设置的字符，建议使用英文字母和数字
    test.keystore是证书文件名称，可修改为自己想设置的文件名称，也可以指定完整文件路径
    36500是证书的有效期，表示100年有效期，单位天，建议时间设置长一点，避免证书过期

2.2 回车后会提示：
Enter keystore <span class="token property">password</span><span class="token punctuation">:</span>  //输入证书文件密码，输入完成回车  
Re-enter new <span class="token property">password</span><span class="token punctuation">:</span>   //再次输入证书文件密码，输入完成回车  
What is your first and last name?  
  [Unknown]<span class="token punctuation">:</span>  //输入名字和姓氏，输入完成回车  
What is the name of your organizational unit?  
  [Unknown]<span class="token punctuation">:</span>  //输入组织单位名称，输入完成回车  
What is the name of your organization?  
  [Unknown]<span class="token punctuation">:</span>  //输入组织名称，输入完成回车  
What is the name of your City or Locality?  
  [Unknown]<span class="token punctuation">:</span>  //输入城市或区域名称，输入完成回车  
What is the name of your State or Province?  
  [Unknown]<span class="token punctuation">:</span>  //输入省/市/自治区名称，输入完成回车  
What is the two-letter country code for this unit?  
  [Unknown]<span class="token punctuation">:</span>  //输入国家/地区代号（两个字母），中国为CN，输入完成回车  
Is CN=XX<span class="token punctuation">,</span> OU=XX<span class="token punctuation">,</span> O=XX<span class="token punctuation">,</span> L=XX<span class="token punctuation">,</span> ST=XX<span class="token punctuation">,</span> C=XX correct?  
  [no]<span class="token punctuation">:</span>  //确认上面输入的内容是否正确，输入y，回车  

Enter key password for &lt;testalias&gt;  
        <span class="token punctuation">(</span>RETURN if same as keystore password<span class="token punctuation">)</span><span class="token punctuation">:</span>  //确认证书密码与证书文件密码一样（HBuilder|HBuilderX要求这两个密码一致），直接回车就可以


2.3 <span class="token property">以上命令运行完成后就会生成证书，路径为“D</span><span class="token punctuation">:</span>\\test.keystore”。


3. 查看证书
使用如下命令查看：
keytool -list -v -keystore test.keystore  
Enter keystore <span class="token property">password</span><span class="token punctuation">:</span> //输入密码，回车


会输出如下格式信息：
Keystore <span class="token property">type</span><span class="token punctuation">:</span> PKCS12    
Keystore <span class="token property">provider</span><span class="token punctuation">:</span> SUN    

Your keystore contains 1 entry    

Alias <span class="token property">name</span><span class="token punctuation">:</span> test    
Creation <span class="token property">date</span><span class="token punctuation">:</span> 2019-10-28    
Entry <span class="token property">type</span><span class="token punctuation">:</span> PrivateKeyEntry    
Certificate chain <span class="token property">length</span><span class="token punctuation">:</span> 1    
Certificate[1]<span class="token punctuation">:</span>    
<span class="token property">Owner</span><span class="token punctuation">:</span> CN=Tester<span class="token punctuation">,</span> OU=Test<span class="token punctuation">,</span> O=Test<span class="token punctuation">,</span> L=HD<span class="token punctuation">,</span> ST=BJ<span class="token punctuation">,</span> C=CN    
<span class="token property">Issuer</span><span class="token punctuation">:</span> CN=Tester<span class="token punctuation">,</span> OU=Test<span class="token punctuation">,</span> O=Test<span class="token punctuation">,</span> L=HD<span class="token punctuation">,</span> ST=BJ<span class="token punctuation">,</span> C=CN    
Serial <span class="token property">number</span><span class="token punctuation">:</span> 7dd12840    
Valid <span class="token property">from</span><span class="token punctuation">:</span> Fri Jul 26 20<span class="token punctuation">:</span>52<span class="token punctuation">:</span>56 CST 2019 <span class="token property">until</span><span class="token punctuation">:</span> Sun Jul 02 20<span class="token punctuation">:</span>52<span class="token punctuation">:</span>56 CST 2119    
Certificate <span class="token property">fingerprints</span><span class="token punctuation">:</span>    
         <span class="token property">MD5</span><span class="token punctuation">:</span>  <span class="token property">F9</span><span class="token punctuation">:</span><span class="token property">F6</span><span class="token punctuation">:</span><span class="token property">C8</span><span class="token punctuation">:</span>1F<span class="token punctuation">:</span><span class="token property">DB</span><span class="token punctuation">:</span><span class="token property">AB</span><span class="token punctuation">:</span>50<span class="token punctuation">:</span>14<span class="token punctuation">:</span>7D<span class="token punctuation">:</span>6F<span class="token punctuation">:</span>2C<span class="token punctuation">:</span>4F<span class="token punctuation">:</span><span class="token property">CE</span><span class="token punctuation">:</span><span class="token property">E6</span><span class="token punctuation">:</span>0A<span class="token punctuation">:</span>A5    
         <span class="token property">SHA1</span><span class="token punctuation">:</span> <span class="token property">BB</span><span class="token punctuation">:</span><span class="token property">AC</span><span class="token punctuation">:</span><span class="token property">E2</span><span class="token punctuation">:</span>2F<span class="token punctuation">:</span>97<span class="token punctuation">:</span>3B<span class="token punctuation">:</span>18<span class="token punctuation">:</span>02<span class="token punctuation">:</span><span class="token property">E7</span><span class="token punctuation">:</span><span class="token property">D6</span><span class="token punctuation">:</span>69<span class="token punctuation">:</span><span class="token property">A3</span><span class="token punctuation">:</span>7A<span class="token punctuation">:</span>28<span class="token punctuation">:</span><span class="token property">EF</span><span class="token punctuation">:</span><span class="token property">D2</span><span class="token punctuation">:</span>3F<span class="token punctuation">:</span><span class="token property">A3</span><span class="token punctuation">:</span>68<span class="token punctuation">:</span>E7    
         <span class="token property">SHA256</span><span class="token punctuation">:</span> 24<span class="token punctuation">:</span>11<span class="token punctuation">:</span>7D<span class="token punctuation">:</span><span class="token property">E7</span><span class="token punctuation">:</span>36<span class="token punctuation">:</span>12<span class="token punctuation">:</span><span class="token property">BC</span><span class="token punctuation">:</span><span class="token property">FE</span><span class="token punctuation">:</span><span class="token property">AF</span><span class="token punctuation">:</span>2A<span class="token punctuation">:</span>6A<span class="token punctuation">:</span>24<span class="token punctuation">:</span><span class="token property">BD</span><span class="token punctuation">:</span>04<span class="token punctuation">:</span>4F<span class="token punctuation">:</span>2E<span class="token punctuation">:</span>33<span class="token punctuation">:</span><span class="token property">E5</span><span class="token punctuation">:</span>2D<span class="token punctuation">:</span>41<span class="token punctuation">:</span>96<span class="token punctuation">:</span>5F<span class="token punctuation">:</span>50<span class="token punctuation">:</span>4D<span class="token punctuation">:</span>74<span class="token punctuation">:</span>17<span class="token punctuation">:</span>7F<span class="token punctuation">:</span>4F<span class="token punctuation">:</span><span class="token property">E2</span><span class="token punctuation">:</span>55<span class="token punctuation">:</span><span class="token property">EB</span><span class="token punctuation">:</span>26    
Signature algorithm <span class="token property">name</span><span class="token punctuation">:</span> SHA256withRSA    
Subject Public Key <span class="token property">Algorithm</span><span class="token punctuation">:</span> 2048-bit RSA key    
<span class="token property">Version</span><span class="token punctuation">:</span> 3

其中证书指纹信息（Certificate fingerprints）：

MD5
证书的MD5指纹信息（安全码MD5）
SHA1
证书的SHA1指纹信息（安全码SHA1）
SHA256
证书的SHA256指纹信息（安全码SHA245）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="uniapp安卓app打包后获取位置信息失败解决方法-含高德地图key详细申请流程" tabindex="-1"><a class="header-anchor" href="#uniapp安卓app打包后获取位置信息失败解决方法-含高德地图key详细申请流程"><span>uniapp安卓app打包后获取位置信息失败解决方法（含高德地图key详细申请流程）</span></a></h3>`,37),w=a('<p>这个也是我在做uniapp混合app时遇到的问题，也是困惑了几天，网上也有很大相关文章，但是有些地方有些不清晰，让新手很困惑。</p><h3 id="问题原因" tabindex="-1"><a class="header-anchor" href="#问题原因"><span>问题原因</span></a></h3><p>我在项目中碰到两个问题</p><ol><li>如果只需要用定位功能获取到<strong>经纬度坐标</strong>的，可以不用在manifest.json --&gt; App SDK配置中勾选定位和地图服务（注意：部分国产Android手机可能必须勾选才能获取位置，看下图），但是项目中的地图功能却没法用</li><li>我在高德地图申请了key，也在manifest.json --&gt; App SDK中填写了，但是却并<strong>没有生效</strong>，打包完连基本的经纬度都获取不到了，但是地图貌似能用，哈，这应该是大多数人遇到的问题</li></ol><p><img src="'+r+'" alt="img"></p><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h3><p>解决方法就是，申请高德或者百度的key，在manifest.json --&gt; App SDK中勾选地图和定位服务，在App模块权限配置中勾选Maps，这样我们可以获取更多的位置服务权限。</p><p><img src="'+k+'" alt="img"></p><p><img src="'+d+'" alt="img"></p><h3 id="怎么在高德地图申请key" tabindex="-1"><a class="header-anchor" href="#怎么在高德地图申请key"><span>怎么在高德地图申请key</span></a></h3><p>其实主要的问题是出在这里，<strong>大多数人配置完这个在app上还不生效，就是因为申请key时填的包名和云打包时填写的不一致造成的</strong>。</p><p>下面写一下申请流程</p><ul><li>注册高德开放平台会员</li><li>创建新应用</li></ul><p><img src="'+v+'" alt="img"></p><ul><li>在应用下创建key</li></ul><p><img src="'+m+`" alt="img"></p><p>这里安全码SHA1，我们可以用官方给的 <code>BA:AD:09:3A:82:82:9F:B4:32:A7:B2:8C:B4:CC:F0:E9:F3:7D:AE:58</code></p><p>在DCloud公用证书主要信息中有，如下</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Alias name: hbuilder  
Creation date: 2014-9-29  
Entry type: PrivateKeyEntry  
Certificate chain length: 1  
Certificate[1]:  
Owner: CN=DH, OU=数字天堂（北京）网络技术有限公司, O=数字天堂（北京）网络技术有限公司, L=海淀, ST=北京, C=86  
Issuer: CN=DH, OU=数字天堂（北京）网络技术有限公司, O=数字天堂（北京）网络技术有限公司, L=海淀, ST=北京, C=86  
Serial number: 5174dc8b  
Valid from: Mon Apr 22 14:45:31 CST 2013 until: Sun Aug 23 14:45:31 CST 3012  
Certificate fingerprints:  
        MD5:  59:20:1C:F6:58:92:02:CB:2C:DA:B2:67:52:47:21:12  
         SHA1: BA:AD:09:3A:82:82:9F:B4:32:A7:B2:8C:B4:CC:F0:E9:F3:7D:AE:58  
        SHA256: D7:5C:1F:A2:B9:AE:86:7C:E6:88:A8:AD:C6:DE:AC:7C:D6:BA:96:F4:3A:75:1F:D1:0A:20:0F:A5:97:4A:C6:36  
Signature algorithm name: SHA1withRSA  
Subject Public Key Algorithm: 1024-bit RSA key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),S={href:"https://ask.dcloud.net.cn/article/35985",target:"_blank",rel:"noopener noreferrer"},q=n("p",null,[s("说一下包名PackageName，大部分人会在这里出错，因为有格式限制，我们一般写这种格式**：**io.dcloud.hbuilder这种格式，但是不管写成什么，"),n("strong",null,"一定要和App云端打包时的安卓包名一致，注意，一定不要写成uniapp的appID（__UNI_FDXXXXX）")],-1),x=n("p",null,[n("strong",null,[n("img",{src:b,alt:"img"})])],-1),C=n("p",null,[n("img",{src:g,alt:"img"})],-1),J=n("ul",null,[n("li",null,"将生成的key填写到manifest.json --> App SDK配置中")],-1),A=a(`<h3 id="uniapp强制退出系统-app" tabindex="-1"><a class="header-anchor" href="#uniapp强制退出系统-app"><span>uniapp强制退出系统/app</span></a></h3><blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 退出APP</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">quitApp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
uni<span class="token punctuation">.</span><span class="token function">getSystemInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">device</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   
<span class="token comment">// #ifdef H5</span>
window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;about:blank&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;_self&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// #endif</span>

<span class="token comment">// #ifdef APP-PLUS</span>
<span class="token comment">// 判断为安卓的手机</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>device<span class="token punctuation">.</span>platform <span class="token operator">==</span> <span class="token string">&quot;android&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 安卓退出app</span>
  plus<span class="token punctuation">.</span>runtime<span class="token punctuation">.</span><span class="token function">quit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// 判断为ios的手机，退出App</span>
  plus<span class="token punctuation">.</span>ios
    <span class="token punctuation">.</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string">&quot;UIApplication&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">sharedApplication</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">performSelector</span><span class="token punctuation">(</span><span class="token string">&quot;exit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// #endif</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="获取摄像头权限" tabindex="-1"><a class="header-anchor" href="#获取摄像头权限"><span>获取摄像头权限</span></a></h3><blockquote><p><img src="`+h+`" alt="image-20221129114224176"></p></blockquote><h3 id="uniapp应用更新" tabindex="-1"><a class="header-anchor" href="#uniapp应用更新"><span>uniapp应用更新</span></a></h3><blockquote><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;status&quot;</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token property">&quot;msg&quot;</span><span class="token operator">:</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;info&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token property">&quot;file_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;app&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;file_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;http:\\/\\/www.sunhotin.com:8011\\/uploads\\/store\\/comment\\/20221208\\/fb766aaf77209c53884950e3926107b3.apk&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;version&quot;</span><span class="token operator">:</span><span class="token string">&quot;2.2.2&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;md5&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;file_time&quot;</span><span class="token operator">:</span><span class="token string">&quot;0000-00-00 00:00:00&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;target_file_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;2212.apk&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;memo&quot;</span><span class="token operator">:</span><span class="token string">&quot;21212&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;status&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一"><span>方法一</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">downWgt</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
uni<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;更新中...&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

uni<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token comment">// 更新提醒</span>
<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;更新中...&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">,</span>
<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">.</span>confirm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 取消下载任务。</span>
downloadTask<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
uni<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> downloadTask <span class="token operator">=</span> uni<span class="token punctuation">.</span><span class="token function">downloadFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token comment">//执行下载</span>
<span class="token literal-property property">url</span><span class="token operator">:</span> path<span class="token punctuation">,</span> <span class="token comment">//下载地址</span>
<span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">//10分钟超时时间</span>
<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">downloadResult</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token comment">//下载成功</span>
uni<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>downloadResult<span class="token punctuation">.</span>statusCode <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
uni<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;更新成功，确定现在重启吗？&quot;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">confirmText</span><span class="token operator">:</span> <span class="token string">&quot;重启&quot;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">confirmColor</span><span class="token operator">:</span> <span class="token string">&quot;#EE8F57&quot;</span><span class="token punctuation">,</span>
 <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>confirm <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     plus<span class="token punctuation">.</span>runtime<span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span>
       downloadResult<span class="token punctuation">.</span>tempFilePath<span class="token punctuation">,</span>
       <span class="token punctuation">{</span>
         <span class="token literal-property property">force</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
         uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
           <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;更新成功，重启中&quot;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
         <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         plus<span class="token punctuation">.</span>runtime<span class="token punctuation">.</span><span class="token function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
     <span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
uni<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function-variable function">complete</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">com</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>com<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 下载进度</span>
downloadTask<span class="token punctuation">.</span><span class="token function">onProgressUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">下载进度：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>res<span class="token punctuation">.</span>progress<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> \\n 已下载/预期需要下载数据长度：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>res<span class="token punctuation">.</span>totalBytesWritten<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>res<span class="token punctuation">.</span>totalBytesExpectedToWrite<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">checkVersion</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">$http</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/tr/version/info/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>file_type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>versionId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
<span class="token literal-property property">id</span><span class="token operator">:</span> versionId<span class="token punctuation">,</span>
file_type<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token operator">?.</span>info<span class="token punctuation">;</span>

<span class="token comment">//#ifdef APP-PLUS</span>
<span class="token keyword">const</span> version <span class="token operator">=</span> <span class="token string">&quot;1.0.1&quot;</span><span class="token punctuation">;</span>
uni<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token comment">// 更新提醒</span>
<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;发现新版本，是否更新&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">content</span><span class="token operator">:</span>
<span class="token string">&quot;此版本号：&quot;</span> <span class="token operator">+</span> version <span class="token operator">+</span> <span class="token string">&quot;\\xa0\\xa0\\xa0&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;待更新版本号：&quot;</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>version<span class="token punctuation">,</span>
<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>confirm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token function">downWgt</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>file_name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//下载文件</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//#endif</span>

<span class="token comment">// #ifdef H5</span>
<span class="token keyword">const</span> elink <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
elink<span class="token punctuation">.</span>download <span class="token operator">=</span> data<span class="token punctuation">.</span>target_file_name<span class="token punctuation">;</span>
elink<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token string">&quot;_blank&quot;</span><span class="token punctuation">;</span>
elink<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token punctuation">.</span>file_name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
elink<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>elink<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// #endif</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二"><span>方法二</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">up</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token comment">//开启下载任务</span>
<span class="token keyword">const</span> dtask <span class="token operator">=</span> plus<span class="token punctuation">.</span>downloader<span class="token punctuation">.</span><span class="token function">createDownload</span><span class="token punctuation">(</span>
path<span class="token punctuation">,</span>
<span class="token punctuation">{</span>
<span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token parameter">d<span class="token punctuation">,</span> status</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;下载成功安装: &quot;</span> <span class="token operator">+</span> d<span class="token punctuation">.</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
plus<span class="token punctuation">.</span>runtime<span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
plus<span class="token punctuation">.</span>nativeUI<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;安装失败，请稍候重试: &quot;</span> <span class="token operator">+</span> status<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 下载任务状态变化事件,计算进度条数值</span>
dtask<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;statechanged&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">task</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>task<span class="token punctuation">.</span>state <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">let</span> progress <span class="token operator">=</span> <span class="token punctuation">(</span>dtask<span class="token punctuation">.</span>downloadedSize <span class="token operator">/</span> dtask<span class="token punctuation">.</span>totalSize<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">;</span>
progress <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span>progress<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dtask<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>暂存三</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>onst <span class="token function-variable function">downWgt</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
uni<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token comment">// 更新提醒</span>
<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;更新中...&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">是否取消更新</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>confirm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// 取消下载任务。</span>
  downloadTask<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> downloadTask <span class="token operator">=</span> uni<span class="token punctuation">.</span><span class="token function">downloadFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token comment">//执行下载</span>
<span class="token literal-property property">url</span><span class="token operator">:</span> path<span class="token punctuation">,</span> <span class="token comment">//下载地址</span>
<span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">//10分钟超时时间</span>
<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">downloadResult</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token comment">//下载成功</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>downloadResult<span class="token punctuation">.</span>statusCode <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  uni<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;更新成功，确定现在重启吗？&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">confirmText</span><span class="token operator">:</span> <span class="token string">&quot;重启&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">confirmColor</span><span class="token operator">:</span> <span class="token string">&quot;#EE8F57&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>confirm <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        plus<span class="token punctuation">.</span>runtime<span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span>
          downloadResult<span class="token punctuation">.</span>tempFilePath<span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">force</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            plus<span class="token punctuation">.</span>runtime<span class="token punctuation">.</span><span class="token function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function-variable function">complete</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">com</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>com<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 下载进度</span>
downloadTask<span class="token punctuation">.</span><span class="token function">onProgressUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">checkVersion</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">$http</span><span class="token punctuation">(</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/tr/version/info/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>file_type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>versionId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> versionId<span class="token punctuation">,</span>
  file_type<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> result<span class="token punctuation">.</span>data<span class="token operator">?.</span>info<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>id <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">//#ifdef APP-PLUS</span>
uni<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token comment">// 更新提醒</span>
<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;发现新版本，是否更新&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;此版本号：&quot;</span> <span class="token operator">+</span> versionName <span class="token operator">+</span> <span class="token string">&quot;,待更新版本号：&quot;</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>version<span class="token punctuation">,</span>
<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>confirm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">downWgt</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>file_name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//下载文件</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//#endif</span>

<span class="token comment">// #ifdef H5</span>
<span class="token keyword">const</span> elink <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
elink<span class="token punctuation">.</span>download <span class="token operator">=</span> data<span class="token punctuation">.</span>target_file_name<span class="token punctuation">;</span>
elink<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token string">&quot;_blank&quot;</span><span class="token punctuation">;</span>
elink<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token punctuation">.</span>file_name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
elink<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>elink<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// #endif</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,6);function _(B,j){const t=e("ExternalLinkIcon");return o(),c("div",null,[f,n("blockquote",null,[w,n("p",null,[s("详细请看 "),n("a",S,[s("Android平台云端打包证书使用说明"),i(t)])]),q,x,C,J]),A])}const W=p(y,[["render",_],["__file","移动开发.html.vue"]]),N=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"移动端开发/HTML5","slug":"移动端开发-html5","link":"#移动端开发-html5","children":[{"level":3,"title":"物理像素、逻辑像素、CSS 像素、PPI、设备像素比","slug":"物理像素、逻辑像素、css-像素、ppi、设备像素比","link":"#物理像素、逻辑像素、css-像素、ppi、设备像素比","children":[]}]},{"level":2,"title":"Hybrid App 开发","slug":"hybrid-app-开发","link":"#hybrid-app-开发","children":[{"level":3,"title":"JSBridge 的通信原理","slug":"jsbridge-的通信原理","link":"#jsbridge-的通信原理","children":[]},{"level":3,"title":"JS 调用 Native","slug":"js-调用-native","link":"#js-调用-native","children":[]},{"level":3,"title":"JSBridge 引用","slug":"jsbridge-引用","link":"#jsbridge-引用","children":[]},{"level":3,"title":"JSBridge接口实现","slug":"jsbridge接口实现","link":"#jsbridge接口实现","children":[]},{"level":3,"title":"Android（WebView）","slug":"android-webview","link":"#android-webview","children":[]},{"level":3,"title":"iOS（WKWebView）","slug":"ios-wkwebview","link":"#ios-wkwebview","children":[]},{"level":3,"title":"window.WebViewJavascriptBridge","slug":"window-webviewjavascriptbridge","link":"#window-webviewjavascriptbridge","children":[]},{"level":3,"title":"JSSDK封装","slug":"jssdk封装","link":"#jssdk封装","children":[]}]},{"level":2,"title":"uni-app","slug":"uni-app","link":"#uni-app","children":[{"level":3,"title":"iconfont封装成svg","slug":"iconfont封装成svg","link":"#iconfont封装成svg","children":[]},{"level":3,"title":"根据touch事件实现左右移动切换模块","slug":"根据touch事件实现左右移动切换模块","link":"#根据touch事件实现左右移动切换模块","children":[]},{"level":3,"title":"uniapp打包","slug":"uniapp打包","link":"#uniapp打包","children":[]},{"level":3,"title":"uniapp安卓app打包后获取位置信息失败解决方法（含高德地图key详细申请流程）","slug":"uniapp安卓app打包后获取位置信息失败解决方法-含高德地图key详细申请流程","link":"#uniapp安卓app打包后获取位置信息失败解决方法-含高德地图key详细申请流程","children":[]},{"level":3,"title":"uniapp强制退出系统/app","slug":"uniapp强制退出系统-app","link":"#uniapp强制退出系统-app","children":[]},{"level":3,"title":"获取摄像头权限","slug":"获取摄像头权限","link":"#获取摄像头权限","children":[]},{"level":3,"title":"uniapp应用更新","slug":"uniapp应用更新","link":"#uniapp应用更新","children":[]}]}],"git":{"updatedTime":1705851176000,"contributors":[{"name":"willy","email":"willysliang","commits":3}]},"filePathRelative":"前端框架/移动开发.md"}');export{W as comp,N as data};
