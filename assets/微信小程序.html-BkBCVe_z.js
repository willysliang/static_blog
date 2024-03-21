import{_ as e,o as i,c as t,d as s,e as n,t as l,b as a}from"./app-Bvx-HY_0.js";const o="/static_blog/assets/image-20210603001456032-4_Q6Q726.png",p="/static_blog/assets/image-20210728105609750-L0qQCeTm.png",c={},d=a(`<h2 id="小程序" tabindex="-1"><a class="header-anchor" href="#小程序"><span>小程序</span></a></h2><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 小程序特点</span>
	- 简单、用完即走、低频、性能要求不高的应用
	- 不需要下载安装即可使用的应用，实现“触手可及”的梦想，使用方便快捷
	
	
<span class="token comment"># 小程序文件注意事项</span>
  - 标签的书写严格，区分大小写
  - 不支持通配符选择器
  - JSON  文件中无法使用注释，样式文件多行注释才有效
  - 没有跨域的，服务器必须用Https
  - 页面.js文件中 存放事件回调函数的时候，存放在data同层级下
  - 组件.js文件中存放事件回调函数的时候，必须要存放在methods中
  - iPhone的部分手机不识别webp图片格式
  
  
<span class="token comment"># 小程序中引入less</span>
	- 安装插件<span class="token variable"><span class="token variable">\`</span>easy-less<span class="token variable">\`</span></span>
	- 在设置里面的<span class="token variable"><span class="token variable">\`</span>easy-less<span class="token variable">\`</span></span>配置加入自动生成<span class="token variable"><span class="token variable">\`</span>wxss<span class="token variable">\`</span></span>文件配置
			<span class="token string">&quot;less.compile&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;outExt&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;.wxss&quot;</span>
        <span class="token punctuation">}</span>
        
  
  
<span class="token comment"># vscode 开发微信小程序安装的插件</span>
    - minapp：微信小程序标签、属性的智能补全
       - （同时支持原生小程序、mpvue 和 wepy 框架，并提供 snippets）
       - 需要输入才会触发标签补全；输入空格会触发对应标签的属性补全
    - wxapp-helper：选择创建wx组件，自动生成配套的文件
    - WXML-Language Service
    - 小程序开发助手
    - wechat-snippet：微信小程序代码辅助,代码片段自动完成

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="小程序代码构成" tabindex="-1"><a class="header-anchor" href="#小程序代码构成"><span>小程序代码构成</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 微信小程序的页面分别由四个文件组成：</span>
  - .js<span class="token punctuation">(</span>脚本逻辑文件<span class="token punctuation">)</span>：负责页面逻辑内容的处理，遵循js语言框架。
  - .json<span class="token punctuation">(</span>配置文件<span class="token punctuation">)</span>：用来设置页面的窗口内容，遵循<span class="token variable"><span class="token variable">\`</span>JSON<span class="token variable">\`</span></span>语法规范。
  - .wxss<span class="token punctuation">(</span>样式文件<span class="token punctuation">)</span>：兼容CSS语法规范。类似CSS源文件
  - .wxml（页面结构文件或视图文件）：用于页面可视化组件的组织和描述，语法结构类似于xml，与html格式差别较大。
      是编写小程序骨架的文件（类似HTML+CSS）


<span class="token comment"># 开发目录如下：</span>
    <span class="token operator">|</span>—— app.js
    <span class="token operator">|</span>—— app.json
    <span class="token operator">|</span>—— app.wxss
    <span class="token operator">|</span>—— pages
    <span class="token operator">|</span>   <span class="token operator">|</span>—— index
    <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>—— index.wxml
    <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>—— index.js
    <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>—— index.json
    <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>—— index.wxss
    <span class="token operator">|</span>   <span class="token operator">|</span>—— logs
    <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>—— logs.wxml
    <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span>—— logs.js
    <span class="token operator">|</span>__ utils


<span class="token comment"># 页面路由配置</span>
	- 需要在app.json文件下配置 page与logs 路径
      <span class="token punctuation">{</span>
        <span class="token string">&quot;pages&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pages/index/index&quot;</span>, <span class="token string">&quot;pages/logs/logs&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="json配置" tabindex="-1"><a class="header-anchor" href="#json配置"><span>.json配置</span></a></h4><h5 id="小程序配置app-json" tabindex="-1"><a class="header-anchor" href="#小程序配置app-json"><span>小程序配置app.json</span></a></h5><ul><li>用于指定小程序由哪些页面组成，每一项都对应一个页面的路径（含文件名）信息。文件名不需要写文件后缀，框架会自动去寻找对应位置的 <code>.json</code>, <code>.js</code>, <code>.wxml</code>, <code>.wxss</code> 四个文件进行处理</li><li>app.json文件对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多tab等。</li><li><code>pages</code>字段 —— 用于描述当前小程序所有页面路径，这是为了让微信客户端知道当前你的小程序页面定义在哪个目录下。</li><li><code>window</code>字段 —— 定义小程序所有页面的顶部背景颜色，文字颜色定义等。</li></ul><h5 id="页面配置page-json" tabindex="-1"><a class="header-anchor" href="#页面配置page-json"><span>页面配置page.json</span></a></h5><p>在页面下的<code>.json</code>文件不能写搭配的路径，如上面的<code>&quot;pages&quot;:[&quot;xxx&quot;]</code>等；只能写配置窗口表现<code>window</code>的属性</p><div class="language-app.json line-numbers-mode" data-ext="app.json" data-title="app.json"><pre class="language-app.json"><code>{
  &quot;window&quot;: {
    &quot;navigationBarBackgroundColor&quot;:&quot;#ffffff&quot;,
    &quot;navigationBarTextStyle&quot;: &quot;black&quot;,
    &quot;navigationBarTitleText&quot;:&quot;文与字&quot;, //设置标题字
    &quot;backgroundColor&quot;: &quot;#eeeeee&quot;,
    &quot;backgroundTextStyle&quot;: &quot;light&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="微信索引sitemap-json" tabindex="-1"><a class="header-anchor" href="#微信索引sitemap-json"><span>微信索引sitemap.json</span></a></h5><ul><li>当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索词条触发该索引时，小程序的页面将可能展示在搜索结果中。</li><li>在小程序根目录下的<code>sitemap.json</code>文件来配置小程序及其页面是否允许被微信索引。</li><li>注：<code>没有 sitemap.json</code> 则默认所有页面都能被索引 注：<code>{&quot;action&quot;: &quot;allow&quot;, &quot;page&quot;: &quot;\\*&quot;}</code> 是优先级最低的默认规则，未显式指明 &quot;disallow&quot; 的都默认被索引</li><li>注：<code>sitemap</code> 的索引提示是默认开启的，如需要关闭 <code>sitemap</code> 的索引提示，可在小程序项目配置文件 <code>project.config.json</code> 的 <code>setting</code> 中配置字段 <code>checkSiteMap</code> 为 <code>false</code> 注: <code>sitemap</code> 文件内容最大为 5120 个 UTF8 字符</li></ul><div class="language-sitemap.json line-numbers-mode" data-ext="sitemap.json" data-title="sitemap.json"><pre class="language-sitemap.json"><code>{
  &quot;rules&quot;:[{	
  	// 所有页面都会被微信索引（默认情况）
    &quot;action&quot;: &quot;allow&quot;,
    &quot;page&quot;: &quot;*&quot;
  },{	
  	//配置 path/to/page 页面不被索引，其余页面允许被索引
    &quot;action&quot;: &quot;disallow&quot;,
    &quot;page&quot;: &quot;path/to/page&quot;
  },{	
  	// 包含 a 和 b 参数的 path/to/pages 页面会被微信优先索引，其他页面都会被索引
    &quot;action&quot;: &quot;allow&quot;,
    &quot;page&quot;: &quot;path/to/pages&quot;,
    &quot;params&quot;: [&quot;a&quot;, &quot;b&quot;],
    &quot;matching&quot;: &quot;inclusive&quot;
  }]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="wxml-模板" tabindex="-1"><a class="header-anchor" href="#wxml-模板"><span>.wxml 模板</span></a></h4><ul><li>网页编程采用的是 HTML + CSS + JS 这样的组合，其中 <code>HTML</code> 是用来描述当前这个页面的结构，<code>CSS</code> 用来描述页面的样子，<code>JS</code> 通常是用来处理这个页面和用户的交互。</li><li><code>wxml</code>和<code>html</code>相似，由标签、属性等构成。</li></ul><p>1、view主键：等价于HTML中的div标签</p><p>2、滑动轮播图</p><div class="language-.wxml line-numbers-mode" data-ext=".wxml" data-title=".wxml"><pre class="language-.wxml"><code>//可以滑动切换内容,相对于JS，内部已经通过标签部署好切换的JS代码
//swiper-item标签只是起到容器的作用，里面可以放不同的内容
//vertical为滚动的方向，默认false，true为纵向滚动
&lt;view&gt;
	&lt;swiper vertical=&quot;true&quot;&gt;
		&lt;swiper-item&gt;Content1&lt;/swiper-item&gt;
		&lt;swiper-item&gt;Content2&lt;/swiper-item&gt;
		&lt;swiper-item&gt;Content3&lt;/swiper-item&gt;
	&lt;/swiper&gt;
&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、数据绑定</p>`,20),r=s("code",null,"if",-1),u=s("code",null,"else",-1),v=s("code",null,"for",-1),m=s("code",null,"wx:",-1),b=a(`<div class="language-wxml line-numbers-mode" data-ext="wxml" data-title="wxml"><pre class="language-wxml"><code>this.setData({ msg: &quot;Hello World&quot; })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="wxss-样式" tabindex="-1"><a class="header-anchor" href="#wxss-样式"><span>wxss 样式</span></a></h4><ul><li><code>WXSS</code> 具有 <code>CSS</code> 大部分的特性； 新增尺寸单位，<code>WXSS</code> 在底层支持新的尺寸单位 <code>rpx</code>； 提供了全局的样式和局部样式； <code>WXSS</code> 仅支持部分 <code>CSS</code> 选择器。</li></ul><p>1、移动设备的分辨率与rpx</p><ul><li><p>分辨率PT：逻辑分辨率，长度和视觉单位，pt大小和屏幕尺寸有关</p></li><li><p>分辨率PX：物理分辨率，像素比，和屏幕尺寸无关</p></li><li><p>PPI（DPI）：用分辨率的平方开根号再除以屏幕英寸所得</p></li><li><p>建议：在控制两个元素之间的距离时，用px，因为在不同设备下，rpx会转变为不同的宽度，而不是固定的宽度，可能会造成换行的情况。</p></li></ul><p>2、通过弹性布局使得页面具有流动性</p><div class="language-wxss line-numbers-mode" data-ext="wxss" data-title="wxss"><pre class="language-wxss"><code>.container{
	display:flex;
	flex-dicection:colum;//设置方向为列方向
	align-item:conter; //设置内容居中
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="js逻辑交互" tabindex="-1"><a class="header-anchor" href="#js逻辑交互"><span>.js逻辑交互</span></a></h4><ul><li>通过<code>.js</code>脚本文件来处理用户的操作和用户交互。如响应用户的点击、获取用户的位置等。</li></ul><h3 id="渲染层与逻辑层" tabindex="-1"><a class="header-anchor" href="#渲染层与逻辑层"><span>渲染层与逻辑层</span></a></h3><ul><li>小程序运行环境分为渲染层和逻辑层，其中<code>WXML</code>模板和<code>WXSS</code>样式工作在渲染层，<code>JS</code>脚本工作在逻辑层。</li><li>渲染层的界面使用<code>WebView</code>进行渲染；逻辑层采用<code>JsCore</code>线程运行<code>JS</code>脚本。因小程序有多个页面，所以渲染层存在多个<code>WebView</code>线程，这两个线程的通信会经常由微信客户端做中转，逻辑层发送网络请求也经由<code>Native</code>(微信客户端)转发。</li></ul><p><img src="`+o+`" alt="image-20210603001456032"></p><h3 id="小程序架构-mvvm模式" tabindex="-1"><a class="header-anchor" href="#小程序架构-mvvm模式"><span>小程序架构-&gt;<code>MVVM</code>模式</span></a></h3><ul><li>架构分为视图层(<code>wxml、wxss</code>)，逻辑层(<code>js</code>)，组件，API四部分。视图层负责页面结构，样式和数据展示。逻辑层负责业务逻辑，调用API等。</li><li>视图层和逻辑层类似<code>vue的MVVM</code>模式，逻辑层只需对数据对象更新，就可改变视图层的数据显示，类似vue。组件是视图层封装好的基础组件，如按钮，输入框等。API提供了访问手机设备，网络，服务器，微信平台接口等能力。</li></ul><h3 id="分包" tabindex="-1"><a class="header-anchor" href="#分包"><span>分包</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="标签" tabindex="-1"><a class="header-anchor" href="#标签"><span>标签</span></a></h2><h3 id="单选框radio" tabindex="-1"><a class="header-anchor" href="#单选框radio"><span>单选框<code>radio</code></span></a></h3><ul><li><blockquote><p>需要与父元素<code>radio-group</code>一起使用</p></blockquote></li><li><p>绑定事件<code>bindchange=&quot;函数&quot;</code></p></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;radio-group bindchange=&quot;handleChange&quot;&gt;
    &lt;radio value=&quot;male&quot; color=&quot;red&quot; checked=&quot;{{true}}&quot;&gt;男&lt;/radio&gt;
    &lt;radio value=&quot;female&quot; color=&quot;red&quot;&gt;女&lt;/radio&gt;    
&lt;/radio-group&gt;
&lt;view&gt;选中的是{{gender}}&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">gender</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> gender <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span> gender <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="icon标签" tabindex="-1"><a class="header-anchor" href="#icon标签"><span><code>icon</code>标签</span></a></h3><ul><li>type属性，样式 <ul><li>success勾选</li></ul></li><li>size属性，图标大小</li><li>color属性，图标颜色</li></ul><h3 id="view标签" tabindex="-1"><a class="header-anchor" href="#view标签"><span><code>view</code>标签</span></a></h3><ul><li><code>view</code>标签相当于<code>html的div</code>，默认为块级元素。</li></ul><h3 id="text标签" tabindex="-1"><a class="header-anchor" href="#text标签"><span>text标签</span></a></h3><ul><li>text 相当于span，默认行内元素，html中怎么打怎么显示</li><li>只能嵌套text</li><li>selectable属性，长按文字可以复制，只有这个标签有这个功能</li><li>decode属性，可以对空格，大于号进行编码</li></ul><h3 id="block标签" tabindex="-1"><a class="header-anchor" href="#block标签"><span>block标签</span></a></h3><p>一个占位符标签，当页面渲染的时候会自动去掉该标签和属性，效果依然显示</p><h3 id="image标签" tabindex="-1"><a class="header-anchor" href="#image标签"><span>image标签</span></a></h3><ul><li>默认大小为宽320px，高240px</li><li>小程序的图片支持懒加载<code>mode=&quot;lazy-load&quot;</code>(图片出现在视口上下三屏高度之内时，自动加载图片)</li></ul><h4 id="图片显示大小" tabindex="-1"><a class="header-anchor" href="#图片显示大小"><span>图片显示大小</span></a></h4><ul><li><strong><code>高度 = 750rpx * 图片高度/图片宽度;</code></strong></li></ul><div class="language-wxss line-numbers-mode" data-ext="wxss" data-title="wxss"><pre class="language-wxss"><code>// 如轮播图图片 750rpx默认高度，图片宽520px,高280px
swiper {	
	width: 100%;	
	height: calc(750rpx * 280px / 520px);
}
image { width: 100%; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="图片高度自适应" tabindex="-1"><a class="header-anchor" href="#图片高度自适应"><span><strong>图片高度自适应</strong></span></a></h4><p>小程序图片高度自适应：给image标签定义属性<code>mode=&quot;widthFix&quot;</code></p><div class="language-wxml line-numbers-mode" data-ext="wxml" data-title="wxml"><pre class="language-wxml"><code>&lt;image src=&quot;{{item.cover}}&quot; mode=&quot;widthFix&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="swiper标签-轮播图" tabindex="-1"><a class="header-anchor" href="#swiper标签-轮播图"><span>swiper标签（轮播图）</span></a></h3><ul><li><p>轮播图外层容器swiper</p></li><li><p>每一个轮播项swiper-item</p></li><li><p>默认宽度100%，高度150px（swiper的宽度=100%或者100vw或者750rpx）</p></li><li><p><code>swiper的高度 = calc(原图的高度 * swiper的宽度 / 原图的宽度)</code></p></li></ul><h4 id="轮播图滚动时圆角变直角" tabindex="-1"><a class="header-anchor" href="#轮播图滚动时圆角变直角"><span>轮播图滚动时圆角变直角</span></a></h4><ul><li>原因：轮播切换时子元素溢出。</li><li>解决方案：设置父级元素的样式，自己元素溢出的话隐藏</li></ul><div class="language-wxss line-numbers-mode" data-ext="wxss" data-title="wxss"><pre class="language-wxss"><code>swiper {
  width: 80%;
  height: cal(750rpx * 720px / 1280px);
  border-radius:20rpx;
  overflow:hidden; 
  swiper-item {
    border-radius: 5%;
    image {
      width: 100%;
      border-radius: 5%;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="navigator标签-超链接" tabindex="-1"><a class="header-anchor" href="#navigator标签-超链接"><span>navigator标签(超链接)</span></a></h3><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h2><h3 id="tabbar配置-底部导航栏" tabindex="-1"><a class="header-anchor" href="#tabbar配置-底部导航栏"><span>tabBar配置（底部导航栏）</span></a></h3><ul><li><p>底部的导航栏可以放2~5个导航链接，定义这个需要在全局<code>app.json</code>文件中配置<code>tabBar</code>字段。</p><ul><li><p><code>position</code>-&gt;top顶部显示，但是看不到图标，默认是底部显示</p></li><li><p><code>color</code>未选中时的颜色</p></li><li><p><code>selectedColor</code>选中时的颜色</p></li><li><p><code>backgroundColor</code>背景颜色</p></li><li><p><code>borderStyle</code>边框颜色，仅支持black/white。默认为black,选填</p></li><li><blockquote><p>list数组里至少有两个对象；颜色仅支持十六进制的输入</p></blockquote></li></ul></li></ul><div class="language-app.json line-numbers-mode" data-ext="app.json" data-title="app.json"><pre class="language-app.json"><code>{
	&quot;tabBar&quot;: {
		&quot;color&quot;: &quot;#ddd&quot;,
		&quot;selectedColor&quot;: &quot;#3cc51f&quot;,
		&quot;backgroundColor&quot;: &quot;#fff&quot;,
		&quot;borderStyle&quot;: &quot;black&quot;,	
		&quot;list&quot;:[{	// iconPath图标是非必填，只是tab栏会变矮，selectedIconPath也非必填
                &quot;pagePath&quot;:&quot;pages/index/index&quot;,
                &quot;iconPath&quot;:&quot;./image/icon_API.png&quot;,
                &quot;selectedIconPath&quot;:&quot;./image/icon_API_HL.png&quot;,
                &quot;text&quot;:&quot;index&quot;
            },{
                &quot;pagePath&quot;:&quot;pages/detail/detail&quot;,
                &quot;iconPath&quot;:&quot;./image/icon_component.png&quot;,
                &quot;selectedIconPath&quot;:&quot;./image/icon_component_HL.png&quot;,
                &quot;text&quot;:&quot;detail&quot;
            }]
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt="image-20210728105609750"></p><h3 id="navigator导航栏组件" tabindex="-1"><a class="header-anchor" href="#navigator导航栏组件"><span>navigator导航栏组件</span></a></h3><ul><li><p>url可加绝对路径，也可加相对路径，/根目录，./当前目录，小程序跳转最多只有5级</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code>url=&quot;/pages/demo01/demo01&quot;
url=&quot;../detail/detail?={{item.id}}&quot; //点击跳转不同页面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>块级元素，导航栏对navigatior导航栏进行渲染</p></li><li><p>target跳到当前的小程序还是跳到其他的小程序</p></li><li><p>open-type属性</p><ul><li>navigate默认属性，保留了当前页面，不能跳到tabar页面</li><li>redirect没返回跳转功能，关闭当前页面，也不能跳转到taber页面</li><li>switchTab跳转到tabar页面，关闭其他所有页面，底部的tabar可轮流切换</li><li>reLaunch随便跳</li><li>navigateBack跳转过去，可在跳回来</li><li>exit退出其他小程序</li></ul></li></ul><h3 id="父子组件通信" tabindex="-1"><a class="header-anchor" href="#父子组件通信"><span>父子组件通信</span></a></h3><ul><li><p>父组件</p><div class="language-wxml line-numbers-mode" data-ext="wxml" data-title="wxml"><pre class="language-wxml"><code>&lt;Tabs aaa=&quot;a123a&quot;&gt;&lt;/Tabs&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>子组件 <code>tabs.js</code></p><div class="language-index.js line-numbers-mode" data-ext="index.js" data-title="index.js"><pre class="language-index.js"><code>properties: {
  aaa:{
  	type:String,
  	value:&quot;&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-wxml line-numbers-mode" data-ext="wxml" data-title="wxml"><pre class="language-wxml"><code>&lt;view&gt;{{ aaa }}&lt;view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="动态" tabindex="-1"><a class="header-anchor" href="#动态"><span>动态</span></a></h2><h3 id="冒泡事件" tabindex="-1"><a class="header-anchor" href="#冒泡事件"><span>冒泡事件</span></a></h3><ul><li>冒泡事件：子向父元素传递事件</li><li>三个阶段：捕获-&gt;处理-&gt;冒泡</li><li>事件委托：防止重复定义事件</li><li><code>bind</code>绑定冒泡事件，<code>catch</code>绑定非冒泡事件</li></ul><h3 id="数据绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定"><span>数据绑定</span></a></h3><div class="language-.wxml line-numbers-mode" data-ext=".wxml" data-title=".wxml"><pre class="language-.wxml"><code>&lt;view&gt;
	//6、内壳嵌套使用
	&lt;image src=&quot;{{img.post_img}}&quot;&gt;
	&lt;button class=&#39;{{item}}&#39; bindtap=&#39;clickme&#39;&gt;按钮&lt;/button&gt;
&lt;/view&gt;

//3、运算绑定
&lt;view hidden=&#39;{{type?true:false}}&#39;&gt;Hidden&lt;/view&gt;

//4、控制属性绑定
&lt;view wx:if=&quot;{{myKey}}&quot;&gt;你的名字&lt;/view&gt;

//5、wx:for列表渲染语句
&lt;view wx:for=&quot;{{array}}&quot;&gt;{{index}}:{{item.info}}&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义下拉刷新" tabindex="-1"><a class="header-anchor" href="#自定义下拉刷新"><span>自定义下拉刷新</span></a></h3><ul><li><p>在<code>app.json</code>和<code>xx.json</code>中的<code>window</code>里配置,</p><div class="language-wxml line-numbers-mode" data-ext="wxml" data-title="wxml"><pre class="language-wxml"><code>{	&quot;window&quot;: {		&quot;enablePullDownRefresh&quot;: true,	}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>在下拉触发的<code>onPullDownRefresh</code>函数里清除<code>loadin</code>状态 （如果不清除loadin状态，下拉后，动态图片一直在loadin状态，即二次刷新不出来）</p><div class="language-index.js line-numbers-mode" data-ext="index.js" data-title="index.js"><pre class="language-index.js"><code>onPullDownRefresh: function() {	wx.stopPullDownRefresh();},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="input事件绑定" tabindex="-1"><a class="header-anchor" href="#input事件绑定"><span><code>input</code>事件绑定</span></a></h3><ul><li><p>input事件的双向绑定，<code>bindinput=&quot;函数&quot;</code>,函数与data同级</p><ul><li>获取事件源对象<code>e.detail.value</code></li><li>把输入框的值赋值给data中，用<code>this.setData({})</code>，不能直接<code>this.data.name=e.detail.value</code>或\`\`this.name=e.detail.value\`</li></ul></li><li><p>button点击事件，<code>bindtap=“函数”</code></p><ul><li>无法在小程序中直接传参的</li><li>通过自定义属性的方式传递参数<code>data-operation=“{{1}}”</code></li><li>事件源（函数）中获取自定义属性<code>consolo.log(e)</code></li><li><code>const operation=e.currentTarget.dataset.operation</code></li><li>获取值用<code>this.data</code>，设置值用<code>this.setData({})</code></li></ul></li></ul><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">bindinput</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handle<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handletap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-operation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{1}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>+<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handletap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-operation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{-1}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>-<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>    
    <span class="token literal-property property">num</span><span class="token operator">:</span><span class="token number">0</span>  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>    
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>      
      <span class="token literal-property property">num</span><span class="token operator">:</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>value    
    <span class="token punctuation">}</span><span class="token punctuation">)</span>  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
  <span class="token function">handletap</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>    
    <span class="token keyword">const</span> operation <span class="token operator">=</span> e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>operation<span class="token punctuation">;</span>    
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>      
      <span class="token literal-property property">num</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>num <span class="token operator">+</span> operation    
    <span class="token punctuation">}</span><span class="token punctuation">)</span>  
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="本地存储" tabindex="-1"><a class="header-anchor" href="#本地存储"><span>本地存储</span></a></h3><p><strong>web与小程序本地存储的区别</strong></p><ul><li>书写方式不同 <ul><li>web：<code>localStorage.setItem(&quot;key&quot;,&quot;value&quot;) localStorage.getItem(&quot;key&quot;)</code></li><li>小程序：<code>wx.setStorageSync(&quot;key&quot;,&quot;value&quot;); wx.getStorageSync(&quot;key&quot;);</code></li></ul></li><li>存储时有无做类型转换 <ul><li>web：不管存入什么类型的数据，最终都会通过<code>toString()</code>把数据转换成字符串再存入；</li><li>小程序：不做类型转换操作，存什么类型数据，就会获取什么类型。</li></ul></li></ul><blockquote><p><strong>注意：本地缓存是永久存储的，但不建议将关键信息存放在localStorage，以防用户换设备的情况</strong></p></blockquote><h4 id="异步" tabindex="-1"><a class="header-anchor" href="#异步"><span>异步</span></a></h4><p><strong><code>wx.setStorage(Object object)</code>：将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>wx.setStorage({
  key:&quot;key&quot;,
  data:&quot;value&quot;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>wx.getStorage(Object object)</code>：从本地缓存中异步获取指定 key 的内容</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>wx.getStorage({
  key: &#39;key&#39;,
  success: function(res) {
      console.log(res.data)
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>wx.getStorageInfo(Object object)</code>：异步获取当前storage的相关信息</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>wx.getStorageInfo({
  success: function(res) {
    console.log(res.keys)
    console.log(res.currentSize)
    console.log(res.limitSize)
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>wx.removeStorage(Object object)</code>：从本地缓存中移除指定的key</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>wx.removeStorage({
  key: &#39;key&#39;,
  success (res) {
    console.log(res)
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="同步" tabindex="-1"><a class="header-anchor" href="#同步"><span>同步</span></a></h4><ol><li><code>wx.setStorageSync(string key, any data)</code>：将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容。</li><li><code>wx.getStorageSync(string key)</code>：从本地缓存中同步获取指定 key 对应的内容。</li><li><code>wx.getStorageInfoSync()</code>：同步获取当前storage的相关信息</li><li><code>wx.removeStorageSync(string key)</code>：从本地缓存中同步移除指定 key 。</li></ol><h4 id="清理缓存" tabindex="-1"><a class="header-anchor" href="#清理缓存"><span>清理缓存</span></a></h4><ol><li>清理本地数据缓存：<code>wx.clearStorage()</code></li><li>同步清理本地数据缓存：<code>wx.clearStorageSync()</code></li></ol><h4 id="判断本地缓存中某key是否存值" tabindex="-1"><a class="header-anchor" href="#判断本地缓存中某key是否存值"><span>判断本地缓存中某key是否存值</span></a></h4><ul><li>常用于判断用户是否已经登录</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function-variable function">onLoad</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> value <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">&quot;key11&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;key值为key11的本地缓存为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;key值为key11的本地缓存不为空&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="消息提示框" tabindex="-1"><a class="header-anchor" href="#消息提示框"><span>消息提示框</span></a></h3><ul><li>显示消息提示框：<strong>wx.showToast(OBJECT)</strong></li><li>隐藏消息提示框：<strong>wx.hideToast()</strong></li><li>显示模态弹窗：<strong>wx.showModal(OBJECT)</strong></li><li>显示操作菜单：<strong>wx.showActionSheet(OBJECT)</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;成功&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

wx<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;加载中&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;loading&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">10000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 wx<span class="token punctuation">.</span><span class="token function">hideToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span>

wx<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;提示&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;这是一个模态弹窗&#39;</span><span class="token punctuation">,</span>
 <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>confirm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;用户点击确定&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

wx<span class="token punctuation">.</span><span class="token function">showActionSheet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 <span class="token literal-property property">itemList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">.</span>cancel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>tapIndex<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h3><h4 id="数组无法使用push" tabindex="-1"><a class="header-anchor" href="#数组无法使用push"><span>数组无法使用push()</span></a></h4><ul><li>在小程序中的类库中没有包含数组的push()方法来给数组添加元素，以为为替代方法</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;willy&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">}</span>
list<span class="token punctuation">[</span>list<span class="token punctuation">.</span>length<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>
<span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">list</span><span class="token operator">:</span> list <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h2><h3 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染"><span>条件渲染</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 条件渲染 wx:if、wx:elif、wx:else</span>
		- 在组件上使用<span class="token variable"><span class="token variable">\`</span>wx:if<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> 表达式的真假性 <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token variable">\`</span></span>来判断是否需要渲染该代码块
        <span class="token operator">&lt;</span>view wx:if<span class="token operator">=</span><span class="token string">&quot;{{ length &gt;5 }}&quot;</span><span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">&lt;</span>/view<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>view wx:elif<span class="token operator">=</span><span class="token string">&quot;{{ length &gt;2 }}&quot;</span><span class="token operator">&gt;</span> <span class="token number">2</span> <span class="token operator">&lt;</span>/view<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>view wx:else<span class="token operator">=</span><span class="token string">&quot;{{ length }}&quot;</span><span class="token operator">&gt;</span> <span class="token number">3</span> <span class="token operator">&lt;</span>/view<span class="token operator">&gt;</span>



<span class="token comment"># wx:if 与 hidden 属性的区别</span>
    <span class="token number">1</span>. wx-if<span class="token operator">=</span><span class="token string">&quot;{{对象.key}}&quot;</span> 条件渲染
        - 初始渲染开销小，用于非频繁切换
        - 当条件为false时，直接把标签从页面结构移除掉
    <span class="token number">2</span>. hidden属性直接加入hidden<span class="token operator">=</span><span class="token string">&quot;{{true}}&quot;</span> 就隐藏组件
        - 初始渲染开销大，用于用户频繁切换
        - 通过添加样式的方式来切换显示
        - 相当于添加了个样式<span class="token variable"><span class="token variable">\`</span>display:none<span class="token variable">\`</span></span>，不要和display标签一起使用
    <span class="token number">3</span>. wx:if懒渲染，hidden渲染
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="列表渲染wx-for" tabindex="-1"><a class="header-anchor" href="#列表渲染wx-for"><span>列表渲染<code>wx:for</code></span></a></h3><blockquote><ul><li>在组件上使用<code>wx:for=&quot;数组名&quot;</code>控制属性绑定一个数组，即可使用数组中各项数据重复渲染该组件。 <ul><li>默认数组当前项的下标变量名默认为<code>index</code>，当前项的变量名默认为<code>item</code></li><li><code>wx:for-item</code>可指定数组当前元素的变量名；</li><li><code>wx:for-index</code>可以指定数组当前下标的变量名；</li></ul></li></ul><div class="language-wxml line-numbers-mode" data-ext="wxml" data-title="wxml"><pre class="language-wxml"><code>&lt;view wx:for=&quot;{{ arr }}&quot; wx:for-item=&quot;itemName&quot; wx:for-index=&quot;idx&quot;&gt;
  {{ idx }}：{{ itemName.message }}
&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-index.js line-numbers-mode" data-ext="index.js" data-title="index.js"><pre class="language-index.js"><code>Page({	
	data: {
		arr: [			
			{ message: &#39;foo&#39;, },			
			{ message: &#39;bar&#39;, },		
		]	
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="属性说明" tabindex="-1"><a class="header-anchor" href="#属性说明"><span>属性说明</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># overflow属性</span>
		- overflow：auto<span class="token punctuation">;</span>手指滚动
		
		
<span class="token comment"># box-sizing属性</span>
  - box-sizing: border-box<span class="token punctuation">;</span>屏幕自适应尺寸，就不会再考虑边框和内边距会改变整体所占宽度
  		- 原：width<span class="token operator">=</span>content
  		- <span class="token variable"><span class="token variable">\`</span><span class="token assign-left variable">width</span><span class="token operator">=</span>content+padding+border<span class="token variable">\`</span></span>，\`<span class="token variable"><span class="token variable">\`</span><span class="token assign-left variable">height</span><span class="token operator">=</span>content+padding+border<span class="token variable">\`</span></span>
  		- 采用的是flex布局的方式，为了自适应，宽度 width采用的是 % 的形式，border，padding，margin采用的是 px尺寸，所有外层的盒子运用了 box-sizing:border-box<span class="token punctuation">;</span> 属性来改变盒子的结构，从而实现需求。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式"><span>样式</span></a></h2><h3 id="tap-highlight-color点击高亮透明" tabindex="-1"><a class="header-anchor" href="#tap-highlight-color点击高亮透明"><span><code>tap-highlight-color</code>点击高亮透明</span></a></h3><ul><li><p><code>tap-highlight-color：transparent；</code></p></li><li><p>点击内容的时候是高亮的改为透明的；</p><p>这个属性只用于iOS (iPhone、iPad)。当点击链接或通过Javascript定义的可点击元素时，就会出现一个半透明的灰色背景。要重设这个表现，可设置\`\`-webkit-tap-highlight-color\`为任何颜色。</p></li></ul><h3 id="文本行数" tabindex="-1"><a class="header-anchor" href="#文本行数"><span>文本行数</span></a></h3><div class="language-wxss line-numbers-mode" data-ext="wxss" data-title="wxss"><pre class="language-wxss"><code>display: -webkit-box;
overflow: hidden;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;	

white-space: normal;
word-wrap: break-word;
text-overflow: ellipsis;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>-webkit-line-clamp</code> 是一个 不规范的属性（unsupported WebKit property），它没有出现在 CSS 规范草案中。为了实现该效果，它需要组合其他外来的WebKit属性。常见结合属性： <ul><li><code>display: -webkit-box;</code> 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。</li><li><code>-webkit-box-orient</code> 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。</li><li><code>text-overflow</code>：可以用来多行文本的情况下，用省略号“...”隐藏超出范围的文本 。</li></ul></li></ul><h3 id="文本显示空格、换行" tabindex="-1"><a class="header-anchor" href="#文本显示空格、换行"><span>文本显示空格、换行</span></a></h3><ul><li>使用 css 属性 ：<strong>white-space:pre-wrap</strong></li></ul><blockquote><p>注意：设置space和decode属性必须在<code>&lt;text&gt;</code>标签中使用</p></blockquote><div class="language-wxml line-numbers-mode" data-ext="wxml" data-title="wxml"><pre class="language-wxml"><code>&lt;view style=&quot;white-space:pre-wrap&quot;&gt;
	文本保留空格和回车
&lt;/view&gt;

2.连续空格  注意：必须在&lt;text&gt;标签中使用
&lt;text space=&quot;ensp&quot;&gt;你好 啊      哈哈哈（空格是中文字符一半大小）&lt;/text&gt;
&lt;text space=&quot;emsp&quot;&gt;你好 啊      哈哈哈（空格是中文字符大小）&lt;/text&gt;
&lt;text space=&quot;nbsp&quot;&gt;你好 啊      哈哈哈（空格根据字体设置）&lt;/text&gt;
&lt;text decode=&quot;{{true}}&quot;&gt;&amp;ensp;（空格是中文字符一半大小）\\n&amp;emsp;（空格是中文字符大小）\\n&amp;nbsp;（空格根据字体设置）&lt;/text&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="尺寸单位rpx" tabindex="-1"><a class="header-anchor" href="#尺寸单位rpx"><span>尺寸单位<code>rpx</code></span></a></h3><ul><li></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 尺寸计算</span>
  - 自适应屏幕大小，小程序的屏幕默认为<span class="token variable"><span class="token variable">\`</span>750rpx<span class="token variable">\`</span></span>
  - <span class="token variable"><span class="token variable">\`</span>设计稿 1px / 设计稿基准宽度 <span class="token operator">=</span> 框架样式 1rpx / 750rpx<span class="token variable">\`</span></span>
  - 页面的宽度：<span class="token variable"><span class="token variable">\`</span>calc（750rpx * 元素在设计稿中的宽度 / 设计稿基准宽度）<span class="token variable">\`</span></span>，750和rpx之间不能有空格


<span class="token comment"># 尺寸计算案例</span>
    <span class="token number">1</span>. 若设计稿宽度为 750px，元素 A 在设计稿上的宽度为 100px，
        那么元素 A 在 <span class="token variable"><span class="token variable">\`</span>uni-app<span class="token variable">\`</span></span> 里面的宽度应该设为：<span class="token variable"><span class="token variable">\`</span><span class="token number">750</span> * <span class="token number">100</span> / <span class="token number">750</span><span class="token variable">\`</span></span>，结果为：100rpx。
    <span class="token number">2</span>. 若设计稿宽度为 640px，元素 A 在设计稿上的宽度为 100px，
        那么元素 A 在 <span class="token variable"><span class="token variable">\`</span>uni-app<span class="token variable">\`</span></span> 里面的宽度应该设为：<span class="token variable"><span class="token variable">\`</span><span class="token number">750</span> * <span class="token number">100</span> / <span class="token number">640</span><span class="token variable">\`</span></span>，结果为：117rpx。
    <span class="token number">3</span>. 若设计稿宽度为 375px，元素 B 在设计稿上的宽度为 200px，
        那么元素 B 在 <span class="token variable"><span class="token variable">\`</span>uni-app<span class="token variable">\`</span></span> 里面的宽度应该设为：<span class="token variable"><span class="token variable">\`</span><span class="token number">750</span> * <span class="token number">200</span> / <span class="token number">375</span><span class="token variable">\`</span></span>，结果为：400rpx。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><h3 id="小程序没有npm" tabindex="-1"><a class="header-anchor" href="#小程序没有npm"><span>小程序没有npm</span></a></h3><ol><li>进入小程序根目录，打开终端(cmd)，输入：<code>npm init</code></li><li>输入命令：<code>npm i miniprogram-sm-crypto --production</code></li><li>执行命令完之后，然后再去微信开发者中点工具-构建npm，然后就成功了</li></ol><h3 id="vant组件的样式无法覆盖" tabindex="-1"><a class="header-anchor" href="#vant组件的样式无法覆盖"><span><code>vant</code>组件的样式无法覆盖</span></a></h3><blockquote><p>普通样式类和外部样式类的优先级是未定义的，因此使用时请添加<code>!important</code>以保证外部样式类的优先级。</p></blockquote><div class="language-wxml line-numbers-mode" data-ext="wxml" data-title="wxml"><pre class="language-wxml"><code>&lt;van-button type=&quot;primary&quot;&gt;主要按钮&lt;/van-button&gt;
&lt;van-cell
  title=&quot;单元格&quot;
  value=&quot;内容&quot;
  title-class=&quot;cell-title&quot;
  value-class=&quot;cell-value&quot;
/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-wxss line-numbers-mode" data-ext="wxss" data-title="wxss"><pre class="language-wxss"><code>/* page.wxss */
.van-button--primary {
  font-size: 20px;
  background-color: pink;
}

.cell-title {
  color: pink !important;
  font-size: 20px !important;
}
.cell-value {
  color: green !important;
  font-size: 12px !important;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在自定义组件中使用 Vant Weapp 组件时，需开启<code>styleIsolation: &#39;shared&#39;</code>选项。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">styleIsolation</span><span class="token operator">:</span> <span class="token string">&#39;shared&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="控制台报错" tabindex="-1"><a class="header-anchor" href="#控制台报错"><span>控制台报错</span></a></h3><h4 id="unhandled-promise-rejection-typeerror-webassembly-instantiate-argument-0-must-be-a-buffer-source-or-a-webassembly" tabindex="-1"><a class="header-anchor" href="#unhandled-promise-rejection-typeerror-webassembly-instantiate-argument-0-must-be-a-buffer-source-or-a-webassembly"><span><code>Unhandled promise rejection TypeError: WebAssembly.instantiate(): Argument 0 must be a buffer source or a WebAssembly. </code></span></a></h4><p>原因：基础库版本过高</p><p>打开 顶部工具栏-------设置-------项目设置：把测试基础库改为2.14.4</p>`,123);function k(g,h){return i(),t("div",null,[d,s("p",null,[n("通过 "+l()+" 的语法把一个变量绑定到界面上，我们称为数据绑定。仅仅通过数据绑定还不够完整的描述状态和界面的关系，还需要 ",1),r,n("/"),u,n(", "),v,n("等控制能力，在小程序里边，这些控制能力都用 "),m,n(" 开头的属性来表达。")]),b])}const q=e(c,[["render",k],["__file","微信小程序.html.vue"]]),w=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"小程序","slug":"小程序","link":"#小程序","children":[]},{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[{"level":3,"title":"小程序代码构成","slug":"小程序代码构成","link":"#小程序代码构成","children":[]},{"level":3,"title":"渲染层与逻辑层","slug":"渲染层与逻辑层","link":"#渲染层与逻辑层","children":[]},{"level":3,"title":"小程序架构->MVVM模式","slug":"小程序架构-mvvm模式","link":"#小程序架构-mvvm模式","children":[]},{"level":3,"title":"分包","slug":"分包","link":"#分包","children":[]}]},{"level":2,"title":"标签","slug":"标签","link":"#标签","children":[{"level":3,"title":"单选框radio","slug":"单选框radio","link":"#单选框radio","children":[]},{"level":3,"title":"icon标签","slug":"icon标签","link":"#icon标签","children":[]},{"level":3,"title":"view标签","slug":"view标签","link":"#view标签","children":[]},{"level":3,"title":"text标签","slug":"text标签","link":"#text标签","children":[]},{"level":3,"title":"block标签","slug":"block标签","link":"#block标签","children":[]},{"level":3,"title":"image标签","slug":"image标签","link":"#image标签","children":[]},{"level":3,"title":"swiper标签（轮播图）","slug":"swiper标签-轮播图","link":"#swiper标签-轮播图","children":[]},{"level":3,"title":"navigator标签(超链接)","slug":"navigator标签-超链接","link":"#navigator标签-超链接","children":[]}]},{"level":2,"title":"组件","slug":"组件","link":"#组件","children":[{"level":3,"title":"tabBar配置（底部导航栏）","slug":"tabbar配置-底部导航栏","link":"#tabbar配置-底部导航栏","children":[]},{"level":3,"title":"navigator导航栏组件","slug":"navigator导航栏组件","link":"#navigator导航栏组件","children":[]},{"level":3,"title":"父子组件通信","slug":"父子组件通信","link":"#父子组件通信","children":[]}]},{"level":2,"title":"动态","slug":"动态","link":"#动态","children":[{"level":3,"title":"冒泡事件","slug":"冒泡事件","link":"#冒泡事件","children":[]},{"level":3,"title":"数据绑定","slug":"数据绑定","link":"#数据绑定","children":[]},{"level":3,"title":"自定义下拉刷新","slug":"自定义下拉刷新","link":"#自定义下拉刷新","children":[]},{"level":3,"title":"input事件绑定","slug":"input事件绑定","link":"#input事件绑定","children":[]},{"level":3,"title":"本地存储","slug":"本地存储","link":"#本地存储","children":[]},{"level":3,"title":"消息提示框","slug":"消息提示框","link":"#消息提示框","children":[]},{"level":3,"title":"数组","slug":"数组","link":"#数组","children":[]}]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[{"level":3,"title":"条件渲染","slug":"条件渲染","link":"#条件渲染","children":[]},{"level":3,"title":"列表渲染wx:for","slug":"列表渲染wx-for","link":"#列表渲染wx-for","children":[]},{"level":3,"title":"属性说明","slug":"属性说明","link":"#属性说明","children":[]}]},{"level":2,"title":"样式","slug":"样式","link":"#样式","children":[{"level":3,"title":"tap-highlight-color点击高亮透明","slug":"tap-highlight-color点击高亮透明","link":"#tap-highlight-color点击高亮透明","children":[]},{"level":3,"title":"文本行数","slug":"文本行数","link":"#文本行数","children":[]},{"level":3,"title":"文本显示空格、换行","slug":"文本显示空格、换行","link":"#文本显示空格、换行","children":[]},{"level":3,"title":"尺寸单位rpx","slug":"尺寸单位rpx","link":"#尺寸单位rpx","children":[]}]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[{"level":3,"title":"小程序没有npm","slug":"小程序没有npm","link":"#小程序没有npm","children":[]},{"level":3,"title":"vant组件的样式无法覆盖","slug":"vant组件的样式无法覆盖","link":"#vant组件的样式无法覆盖","children":[]},{"level":3,"title":"控制台报错","slug":"控制台报错","link":"#控制台报错","children":[]}]}],"git":{"updatedTime":1699357323000,"contributors":[{"name":"willy","email":"willysliang","commits":1}]},"filePathRelative":"前端框架/微信小程序.md"}');export{q as comp,w as data};
