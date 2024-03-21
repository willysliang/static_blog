import{_ as n,o as s,c as a,b as t}from"./app-Bvx-HY_0.js";const e={},p=t(`<h2 id="nodejs-进阶" tabindex="-1"><a class="header-anchor" href="#nodejs-进阶"><span>NodeJS 进阶</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## NodeJS 进阶</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原生路由" tabindex="-1"><a class="header-anchor" href="#原生路由"><span>原生路由</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * @ Author: willy
 * @ Create Time: 2023-08-15 14:31:38
 * @ Modifier by: willy
 * @ Modifier time: 2023-08-24 17:39:53
 * @ Description: main.ts 入口文件
 */</span>

<span class="token comment">// 启动服务</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;./router/server&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 路由模块</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;./router/route&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// api</span>
<span class="token keyword">const</span> apiRouter <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;./router/api&quot;</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span>
server<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>apiRouter<span class="token punctuation">)</span>
server<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * @ Author: willy
 * @ Create Time: 2023-08-24 16:45:14
 * @ Modifier by: willy
 * @ Modifier time: 2023-08-24 16:53:27
 * @ Description: server.ts 服务开关
 */</span>

<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 服务基础地址 */</span>
<span class="token keyword">const</span> <span class="token constant">BASE_URL</span> <span class="token operator">=</span> <span class="token string">&quot;http://127.0.0.1&quot;</span>
<span class="token doc-comment comment">/** 开启的服务端口号 */</span>
<span class="token keyword">const</span> <span class="token constant">LISTEN_PORT</span> <span class="token operator">=</span> <span class="token number">3000</span>

<span class="token doc-comment comment">/** 创建一个大对象存储所有的路由和 api */</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 暴露出去的函数：用于合并路由和 api */</span>
<span class="token keyword">const</span> <span class="token function-variable function">use</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">routeObj</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>route<span class="token punctuation">,</span> routeObj<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 开启服务 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">start</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token constant">BASE_URL</span><span class="token punctuation">)</span>
        <span class="token comment">// 使所有匹配不到的路径走404网页</span>
        routeMap<span class="token punctuation">[</span>url<span class="token punctuation">.</span>pathname <span class="token operator">||</span> <span class="token string">&quot;/404&quot;</span><span class="token punctuation">]</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">LISTEN_PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">BASE_URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">LISTEN_PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">启动成功~</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    use<span class="token punctuation">,</span>
    start<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * @ Author: willy
 * @ Create Time: 2023-08-24 17:09:05
 * @ Modifier by: willy
 * @ Modifier time: 2023-08-24 17:09:56
 * @ Description: utils.ts 工具类
 */</span>

<span class="token doc-comment comment">/** 接口调用中转处理 */</span>
<span class="token keyword">const</span> render <span class="token operator">=</span> <span class="token punctuation">(</span>res<span class="token punctuation">,</span> path<span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> code <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>type <span class="token operator">||</span> <span class="token string">&quot;text/html&quot;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;charset=utf8</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    render<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * @ Author: willy
 * @ Create Time: 2023-08-24 16:52:37
 * @ Modifier by: willy
 * @ Modifier time: 2023-08-24 17:58:55
 * @ Description: route.ts 路由表
 */</span>

<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span>
<span class="token comment">//根据文件后缀名自动获取响应头中content-type</span>
<span class="token class-name"><span class="token keyword">const</span></span> mime <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;mime&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> render<span class="token operator">:</span> routeRender <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;./utils&quot;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 路由表 */</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;/login&quot;</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">routeRender</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">&quot;./static/login.html&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&quot;/home&quot;</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">routeRender</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">&quot;./static/home.html&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&quot;/404&quot;</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token string">&quot;http://127.0.0.1&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">/*
         &lt;link href=&#39;/css/index.css&#39;&gt;&lt;/link&gt;根路径访问，就等于127.0.0.1:3000/css/index.css。
         这里将项目文件夹F://项目+static+/css/index.css合并成文件路径，如果存在就读取该文件返回
         */</span>
        <span class="token keyword">let</span> pathname <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;static&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">readStaticFile</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> pathname<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token function">routeRender</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">&quot;./static/404.html&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> routes

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * @ Author: willy
 * @ Create Time: 2023-08-24 17:03:51
 * @ Modifier by: willy
 * @ Modifier time: 2023-08-24 17:49:56
 * @ Description: api.ts 接口
 */</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> render<span class="token operator">:</span> apiRender <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;./utils&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> api <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//get请求</span>
    <span class="token string">&quot;/api/login&quot;</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token string">&quot;http://127.0.0.1&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token keyword">let</span> username <span class="token operator">=</span> url<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> password <span class="token operator">=</span> url<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>username <span class="token operator">===</span> <span class="token string">&quot;ds&quot;</span> <span class="token operator">&amp;&amp;</span> password <span class="token operator">===</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span> ok<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span> ok<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">apiRender</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//post请求</span>
    <span class="token string">&quot;/api/loginpost&quot;</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> data<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
        <span class="token comment">//这里使用最原始的方法获取post请求参数, 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中</span>
        req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>chunk<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            data <span class="token operator">+=</span> chunk
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。</span>
        req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>username <span class="token operator">===</span> <span class="token string">&quot;ds&quot;</span> <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>password <span class="token operator">===</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">apiRender</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> ok<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">apiRender</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> ok<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> api

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * @ Author: willy
 * @ Create Time: 2023-08-15 14:31:38
 * @ Modifier by: willy
 * @ Modifier time: 2023-08-24 17:52:57
 * @ Description: demo.ts 客户端发起请求
 */</span>

<span class="token keyword">const</span> username <span class="token operator">=</span> <span class="token string">&#39;willys&#39;</span>
<span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token number">123456</span>

<span class="token comment">//get请求</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/login?username=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>username<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;password=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>password<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//post请求</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/loginpost</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    method<span class="token operator">:</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span>
    body<span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        username<span class="token operator">:</span> username<span class="token punctuation">,</span>
        password<span class="token operator">:</span> password<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    headers<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件"><span>中间件</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 中间件</span>
中间件（Middleware）是一种软件模式，用于将不同的软件系统或组件连接起来，使其能够相互通信和交互。它最大的特点是一个中间件处理完可以再传递给下一个中间件。

App 实例再运行过程中，会调用一系列的中间件。每个中间件可以从 APP 实例中接收三个参数，依次为request对象（访问请求对象）、response对象（响应对象），next回调函数（代表 web 应用处于请求-响应循环流程中的下一个中间件）。每个中间件都可以对访问请求对象（request对象）进行加工，并且决定是否调用 next 方法将 request 对象再传给下一个中间件。



<span class="token comment">### 中间件的功能</span>
<span class="token number">1</span>. 控制请求流程：可以通过调用 next 函数来将控制权传递给下一个中间件或路由处理程序，从而控制请求流程。
		注意：如果当前中间件没有终结 请求-响应 循环，则必须调用 next<span class="token punctuation">(</span><span class="token punctuation">)</span> 方法将控制权交给下一个中间件，否则请求就会挂起。
<span class="token number">2</span>. 处理请求：中间件可以拦截请求，在请求到达应用之前对其进行处理。例如，中间件可以验证请求参数、加装请求信息等。
<span class="token number">3</span>. 处理响应：可以在应用程序处理请求之后对请求响应 response 进行处理。例如，中间件可以设置响应信息、压缩响应体、处理错误等。
<span class="token number">4</span>. 执行共享逻辑：可以执行一些通用逻辑，这些逻辑可以在多个路由处理程序中共享。例如身份验证、请求日志记录、性能监控等。
<span class="token number">5</span>. 处理错误：可以捕获和处理应用程序中的错误。例如未处理的异常、HTTP 错误响应等。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 不做任何操作，只传递 request 对象的中间件 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">uselessMiddleware</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 抛出异常的中间件（后面的中间件将不再执行，直到发现一个错误处理函数为止） */</span>
<span class="token keyword">const</span> <span class="token function-variable function">uselessMiddlewareError</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&quot;出错啦~&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="洋葱模型" tabindex="-1"><a class="header-anchor" href="#洋葱模型"><span>洋葱模型</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 洋葱模型</span>
洋葱模型是 Koa 框架中常用的一种中间件处理方式，它的核心思想是将请求和响应的处理过程看作是一层层的中间件函数，每个中间件函数都可以对请求和响应进行处理，并将处理结果传递给下一个中间件，最终得到最终的响应结果。

洋葱模型执行示意图：
请求 -<span class="token operator">&gt;</span> 中间件1<span class="token punctuation">(</span>前置处理<span class="token punctuation">)</span> -<span class="token operator">&gt;</span> 中间件2<span class="token punctuation">(</span>前置处理<span class="token punctuation">)</span> -<span class="token operator">&gt;</span> 中间件3<span class="token punctuation">(</span>前置处理<span class="token punctuation">)</span> -<span class="token operator">&gt;</span> 业务处理 -<span class="token operator">&gt;</span> 中间件3<span class="token punctuation">(</span>后置处理<span class="token punctuation">)</span> -<span class="token operator">&gt;</span> 中间件2<span class="token punctuation">(</span>后置处理<span class="token punctuation">)</span> -<span class="token operator">&gt;</span> 中间件1<span class="token punctuation">(</span>后置处理<span class="token punctuation">)</span> -<span class="token operator">&gt;</span> 最终结果的响应。
	

在洋葱模型中，请求从外层开始，依次经过每个中间件函数的前置处理，然后进入业务处理结果，最后依次经过每个中间件函数的后置处理，最终得到响应结果。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Koa.ts
 * 实现 Koa 的洋葱模型
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Koa</span> <span class="token punctuation">{</span>
  middlewares<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token doc-comment comment">/** 执行动作 */</span>
  <span class="token keyword">private</span> <span class="token function-variable function">action</span> <span class="token operator">=</span> <span class="token punctuation">(</span>instance<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 记录索引</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token keyword">const</span> <span class="token function-variable function">next</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 记录执行的中间件函数</span>
      <span class="token keyword">const</span> nextMiddleware <span class="token operator">=</span> instance<span class="token punctuation">.</span>middlewares<span class="token punctuation">[</span>index<span class="token punctuation">]</span>

      <span class="token comment">// 递归执行</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nextMiddleware<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        index<span class="token operator">++</span>
        <span class="token function">nextMiddleware</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> next<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 从第一个开始执行</span>
    instance<span class="token punctuation">.</span>middlewares<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> next<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 添加中间件函数 */</span>
  <span class="token function">use</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>middlewares<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 监听接口并启动服务 */</span>
  <span class="token keyword">public</span> <span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> ctx<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// const Koa = require(&quot;koa&quot;)</span>
<span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./Koa&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> koa <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

koa<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token comment">// {}</span>
    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token comment">// { name: &#39;willy&#39;, age: 25 }</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

koa<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;willy&quot;</span>
    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

koa<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">25</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

koa<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 执行结果为：
    1
    <span class="token punctuation">{</span><span class="token punctuation">}</span>
    3
    5
    4
    <span class="token punctuation">{</span> name: &#39;willy&#39;, age: 25 <span class="token punctuation">}</span>
    2
 */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="express" tabindex="-1"><a class="header-anchor" href="#express"><span>Express</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Express 中间件</span>
可以为请求处理提供多个回调函数，其行为类似中间件。唯一的区别是这些回调函数有可能调用 next<span class="token punctuation">(</span><span class="token string">&#39;route&#39;</span><span class="token punctuation">)</span> 方法而略过其他路由回调函数。可以利用该机制为路由定义前提条件，如果在现有路径上继续执行没有意义，则可将控制权交给剩下的路径。


<span class="token comment">### lowdb</span>
Lowdb是一种轻量级的本地JSON数据库，可以用于存储和操作JSON数据。它的作用是在Node.js和浏览器中提供一种简单的方法来创建和管理本地数据库，这些数据库通常用于小型应用程序和原型开发。Lowdb提供了一组简单易用的API，可以用于读取、写入、更新和删除JSON数据。它还支持链式操作，使得数据操作更加简单和直观。

安装：$ <span class="token function">npm</span> i lowdb

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="all方法和http动词方法" tabindex="-1"><a class="header-anchor" href="#all方法和http动词方法"><span>all方法和http动词方法</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 使用中间件来加装请求内容、以及对响应进行拦截 */</span>
app<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text/plain&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;Welcome to the homepage!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/about&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;Welcome to the about page!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 携带参数的请求</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/hello/:who&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>who <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 进行兜底处理 */</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;404!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路径匹配" tabindex="-1"><a class="header-anchor" href="#路径匹配"><span>路径匹配</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 字符串模式路径
 */</span>
<span class="token comment">// 匹配 acd 和 abcd</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/ab?cd&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;ab?cd&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 匹配 abcd、abbcd、abbbcd等</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/ab+cd&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;ab+cd&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 匹配 abcd、abxcd、abRABDOMcd、ab123cd等</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/ab*cd&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;ab*cd&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 匹配 /abe 和 /abcde</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/ab(cd)?e&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;ab(cd)?e&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 正则表达式路径
 */</span>
<span class="token comment">// 匹配任何路径中含有 a 的路径：</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;/a/&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 匹配以 fly 结尾的路径，如匹配 butterfly、dragonfly，不匹配 butterflyman、dragonfly man等</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.*fly$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;/.*fly$/&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多回调处理" tabindex="-1"><a class="header-anchor" href="#多回调处理"><span>多回调处理</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 多回调函数 */</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>
    <span class="token string">&quot;/example/b&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;response will be sent by the next function ...&quot;</span><span class="token punctuation">)</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;Hello from B!&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 回调函数数组 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">cb0</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;CB0&quot;</span><span class="token punctuation">)</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">cb1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;CB1&quot;</span><span class="token punctuation">)</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">cb2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;Hello from C!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/example/c&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>cb0<span class="token punctuation">,</span> cb1<span class="token punctuation">,</span> cb2<span class="token punctuation">]</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="request对象" tabindex="-1"><a class="header-anchor" href="#request对象"><span>request对象</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### request 对象</span>
<span class="token number">1</span>. 原生操作
	- request.method
	- request.url
	- request.httpVersion
	- request.headers
	
<span class="token number">2</span>. express 内置
	- request.path
	- request.query
	- request.ip		获取 IP 地址
	
	- request.get<span class="token punctuation">(</span><span class="token string">&#39;请求头中某个属性名&#39;</span><span class="token punctuation">)</span> 	获取请求头

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-对象" tabindex="-1"><a class="header-anchor" href="#response-对象"><span>response 对象</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### response 对象</span>
res.end<span class="token punctuation">(</span><span class="token punctuation">)</span>	结束响应过程。
res.json<span class="token punctuation">(</span><span class="token punctuation">)</span>	发送JSON响应。
res.jsonp<span class="token punctuation">(</span><span class="token punctuation">)</span>	发送带有JSONP支持的JSON响应。
res.set<span class="token punctuation">(</span><span class="token string">&#39;属性名&#39;</span>, <span class="token string">&#39;属性值&#39;</span><span class="token punctuation">)</span> 设置的响应头。
res.send<span class="token punctuation">(</span><span class="token punctuation">)</span>	发送各种类型的响应。
res.sendStatus<span class="token punctuation">(</span><span class="token punctuation">)</span>	设置响应状态代码，并将其字符串表示形式发送为响应正文。

res.download<span class="token punctuation">(</span><span class="token string">&#39;需要被下载文件的所在路径&#39;</span><span class="token punctuation">)</span>	提示要下载的文件。
res.redirect<span class="token punctuation">(</span><span class="token punctuation">)</span>	重定向请求（允许网址的重定向）。
res.sendFile<span class="token punctuation">(</span><span class="token punctuation">)</span>	将文件作为八位字节流发送（用于发送文件）。
res.render<span class="token punctuation">(</span><span class="token punctuation">)</span>	渲染视图模板（用于渲染网页模板）。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** response.redirect */</span>
response<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">&quot;/hello/anime&quot;</span><span class="token punctuation">)</span>
response<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">&quot;http://wwww.willy.com&quot;</span><span class="token punctuation">)</span>
response<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token number">301</span><span class="token punctuation">,</span> <span class="token string">&quot;http://www.example.com&quot;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** response.sendFile */</span>
response<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span><span class="token string">&quot;/path/to/willy.mp4&quot;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** response.render */</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    response<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;Hello World!&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="express-中间件" tabindex="-1"><a class="header-anchor" href="#express-中间件"><span>Express 中间件</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### Express 中间件</span>
Express 应用可使用如下几种中间件：
	- 应用级中间件
	- 路由级中间件
	- 错误处理中间件

使用可选则挂载路径，可在应用级别或路由级别装载中间件。此外还可以同时装在一系列中间件函数，从而在一个挂载点上创建一个子中间件栈。



<span class="token comment">### 应用级中间件</span>
应用级中间件绑定到 app 对象 使用 app.use<span class="token punctuation">(</span><span class="token punctuation">)</span> 和 app.method<span class="token punctuation">(</span><span class="token punctuation">)</span>。
其中， method 是需要处理的 HTTP 请求的方法，例如 GET, PUT, POST 等等，全部小写。


<span class="token comment">### 静态资源中间件</span>
express.static 是 Express 唯一内置的中间件。它基于 serve-static，负责在 Express 应用中提托管静态资源。每个应用可有多个静态目录。
将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了。
如果希望所有通过 express.static 访问的文件都存放在一个“虚拟（virtual）”目录（即目录根本不存在）下面，可以通过为静态资源目录指定一个挂载路径的方式来实现。
    <span class="token number">1</span>. index.html 文件为默认打开的资源。
    <span class="token number">2</span>. 如果静态资源与路由规则同时匹配，谁先匹配成功就响应。
    <span class="token number">3</span>. 路由一般响应动态资源，静态资源中间件响应静态资源。



<span class="token comment">### 路由级中间件</span>
路由级中间件和应用级中间件一样，只是它绑定的对象为 express.Router<span class="token punctuation">(</span><span class="token punctuation">)</span>。
使用 express.Router 该类创建模块化的，可安装的路由处理程序。一个 Router 实例是一个完整的中间件和路由系统。
可将路由器创建为模块，在其中加载中间件功能，定义一些路由，并将路由器模块安装在主应用程序的路径上。


<span class="token comment">### 错误处理中间件</span>
错误处理中间件和其他中间件定义类似，只是要使用 <span class="token number">4</span> 个参数，而不是 <span class="token number">3</span> 个，其签名如下： <span class="token punctuation">(</span>err, req, res, next<span class="token punctuation">)</span>。
    //上面的中间件都没有匹配就会走这里
    app.use<span class="token punctuation">(</span>function<span class="token punctuation">(</span>err, req, res, next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console.error<span class="token punctuation">(</span>err.stack<span class="token punctuation">)</span>
         //send的状态码默认是200
      res.status<span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span>.send<span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> indexRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./route/indexRouter&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> LoginRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./route/LoginRouter&quot;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** token 信息验证 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">tokenMiddleware</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 验证用户 token 和 cookie 是否过期</span>
    <span class="token keyword">const</span> authHeader <span class="token operator">=</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&quot;authorization&quot;</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> isValid <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>authHeader
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isValid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;token error&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 防盗链监控（非自己所控制的域名进行请求则不响应请求） */</span>
<span class="token keyword">const</span> <span class="token function-variable function">refererMiddleware</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取 referer（第一次请求可能不存在 referer）</span>
    <span class="token keyword">const</span> referer <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;referer&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>referer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 实例化</span>
        <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>referer<span class="token punctuation">)</span>
        <span class="token keyword">const</span> hostname <span class="token operator">=</span> url<span class="token punctuation">.</span>hostname

        <span class="token comment">// 检测请求头中的 referer 是否为 127.0.0.1</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>hostname <span class="token operator">!==</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;h1&gt;404 Not Found&lt;/h1&gt;&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 验证码信息验证（路由级中间件） */</span>
<span class="token keyword">const</span> <span class="token function-variable function">checkCodeMiddleware</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token string">&quot;521&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;验证码错误&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//应用级别(后面的路由都会执行此中间件)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>tokenMiddleware<span class="token punctuation">,</span> refererMiddleware<span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 静态资源中间件设置 */</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&quot;/public&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;/static&quot;</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&quot;/public&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//应用级别(这里不写路径默认/)</span>
<span class="token comment">//这些use方法是每次访问都是从上往下执行</span>
<span class="token comment">//如果是/login/a,会先找到/login开头的这个应用级中间件</span>
<span class="token comment">//然后再进入这个中间件找/a</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>indexRouter<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span> checkCodeMiddleware<span class="token punctuation">,</span> LoginRouter<span class="token punctuation">)</span>

http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="express-服务端渲染" tabindex="-1"><a class="header-anchor" href="#express-服务端渲染"><span>Express 服务端渲染</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Express 服务端渲染</span>
<span class="token number">1</span>. 安装 Express 脚手架：
$ cnpm i <span class="token parameter variable">-g</span> express-generator

<span class="token number">2</span>. 使用 ejs 模板引擎创建应用：
$ express <span class="token parameter variable">--view</span><span class="token operator">=</span>ejs myapp

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ejs-标签含义" tabindex="-1"><a class="header-anchor" href="#ejs-标签含义"><span>ejs 标签含义</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### ejs 标签含义</span>
<span class="token operator">&lt;</span>% <span class="token string">&#39;脚本&#39;</span> 标签，用于流程控制，无输出。
<span class="token operator">&lt;</span>%_ 删除其前面的空格符
<span class="token operator">&lt;</span>%<span class="token operator">=</span> 输出数据到模板（输出是转义 HTML 标签）
<span class="token operator">&lt;</span>%- 输出非转义的数据到模板
<span class="token operator">&lt;</span>%<span class="token comment"># 注释标签，不执行、不输出内容</span>
<span class="token operator">&lt;</span>%% 输出字符串 <span class="token string">&#39;&lt;%&#39;</span>
%<span class="token operator">&gt;</span> 一般结束标签
-%<span class="token operator">&gt;</span> 删除紧随其后的换行符
_%<span class="token operator">&gt;</span> 将结束标签后面的空格符删除

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ejs line-numbers-mode" data-ext="ejs" data-title="ejs"><pre class="language-ejs"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>
  我是公共样式
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%</span><span class="token language-javascript"> <span class="token keyword">if</span><span class="token punctuation">(</span>isShowSchool<span class="token punctuation">)</span> <span class="token punctuation">{</span></span><span class="token delimiter punctuation">%&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>校园招聘<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%</span><span class="token language-javascript"> <span class="token punctuation">}</span> </span><span class="token delimiter punctuation">%&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>


<span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%-</span><span class="token language-javascript"> <span class="token function">include</span><span class="token punctuation">(</span><span class="token string">&quot;./header.ejs&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span> <span class="token literal-property property">isShowSchool</span><span class="token operator">:</span><span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> </span><span class="token delimiter punctuation">%&gt;</span></span> index <span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%</span><span class="token comment"># 我的注释 </span><span class="token delimiter punctuation">%&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ejs-列表渲染" tabindex="-1"><a class="header-anchor" href="#ejs-列表渲染"><span>ejs 列表渲染</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> ejs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;ejs&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> ejs<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;ul&gt;
    &lt;% arr.forEach(item =&gt; { %&gt;
    &lt;li&gt;&lt;%= item %&gt;&lt;/li&gt;
    &lt;% }) %&gt;
&lt;/ul&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> arr <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment">/* 
&lt;!-- 输出 result 转化为以下内容 --&gt;
&lt;ul&gt;
    &lt;li&gt;a&lt;/li&gt;
    &lt;li&gt;b&lt;/li&gt;
    &lt;li&gt;c&lt;/li&gt;
    &lt;li&gt;d&lt;/li&gt;
&lt;/ul&gt; */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ejs-条件渲染" tabindex="-1"><a class="header-anchor" href="#ejs-条件渲染"><span>ejs 条件渲染</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> ejs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;ejs&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> isLogin <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> ejs<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;% if (isLogin) { %&gt;
        &lt;span&gt;欢迎回来&lt;/span&gt;
    &lt;% } else { %&gt;
        &lt;button&gt;登录&lt;/button&gt;
    &lt;% } %&gt;
    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> isLogin <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment">/* 
&lt;!-- 输出 result 转化为以下内容 --&gt;
&lt;button&gt;登录&lt;/button&gt; 
*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="express-中使用-ejs" tabindex="-1"><a class="header-anchor" href="#express-中使用-ejs"><span>express 中使用 ejs</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 创建应用对象</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 设置模板引擎</span>
app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;view engine&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ejs&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 设置模板文件存放位置（模板文件：指具有模板语法内容的文件）</span>
app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;views&quot;</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;./views&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 创建路由</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/home&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token string">&quot;Hi, willy~&quot;</span>
    <span class="token comment">// 会识别 /views/home.ejs 的内容</span>
    res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&quot;home&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> title <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;server is running at port 5000&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ejs line-numbers-mode" data-ext="ejs" data-title="ejs"><pre class="language-ejs"><code><span class="token comment">&lt;!-- 文件路径 views/home.ejs --&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%=</span><span class="token language-javascript"> title </span><span class="token delimiter punctuation">%&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%=</span><span class="token language-javascript"> title </span><span class="token delimiter punctuation">%&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb"><span>mongoDB</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## MongoDB 数据库</span>
Mongoose 是一个对象文档模型（ODM）库，它对 Node 原生 的 MongoDB 模块做了进一步封装，并提供了更多功能。在大多数情况下，它被用来把结构化的模式应用到一个MongoDB集合，并提供了验证和类型转换等好处。

mongoose 中的对象：
	- Schema 模式对象（Schema 对象定义约束了数据库中的文档结构）
	- Model 模型对象（Model 对象作为集合中的所有文档的表示，相当于 MongoDB 数据库中的集合 collection）
	- Document 文档对象（Document 表示集合中的具体文档，相当于集合中的一个具体的文档）


<span class="token punctuation">[</span>下载地址<span class="token punctuation">]</span><span class="token punctuation">(</span>https://www.mongodb.com/try/download/community<span class="token punctuation">)</span>
<span class="token punctuation">[</span>官方文档<span class="token punctuation">]</span><span class="token punctuation">(</span>https://docs.mongoing.com/install-mongodb<span class="token punctuation">)</span>

mongoose 的好处
	<span class="token number">1</span>. 可以为文档创建一个模式结构（Schema）
	<span class="token number">2</span>. 可以对模型中的对象/文档进行验证
	<span class="token number">3</span>. 数据可以通过类型转换来转换成对象模型
	<span class="token number">4</span>. 可使用中间件来与应用业务逻辑挂钩

安装：
$ <span class="token function">npm</span> i <span class="token parameter variable">-S</span> mongoose


<span class="token comment">### 字段类型</span>
- 字符串：String
- 数字：Number
- 布尔值：Boolean
- 数组：Array
- 日期：Date
- Buffer对象：Buffer
- Mixed：任意类型，需使用 mongoose.Schema.Types.Mixed 指定
- ObjectId：对象ID，需使用 mongoose.Schema.Types.ObjectId 指定
- Decimal128：高精度数字，需使用 mongoose.Schema.Types.Decimal128 指定


<span class="token comment">### 方法</span>
mongoose.model<span class="token punctuation">(</span>modelName, schemaObj, collection, skipInit, connection<span class="token punctuation">)</span>
  - modelName（字符串）：模型的名称。
  - schemaObj（Schema对象）：用于定义模型结构的Mongoose Schema对象。
  - collection（字符串，可选）：可选的集合名称，如果未提供，则Mongoose将使用模型名称的小写版本。
  - skipInit（布尔值，可选）：如果为true，则不会自动初始化模型，否则会自动初始化。默认为false。
  - connection（Mongoose连接对象，可选）：可选的连接对象，用于指定用于模型的数据库连接。如果未提供，则将使用默认连接。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * db.connect.js
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span> success 数据库连接成功回调
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span> error 数据连接失败回调
 */</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>success <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> error <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;mongoose&quot;</span><span class="token punctuation">)</span>

    <span class="token doc-comment comment">/** 连接 mongoose 数据库 */</span>
    mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&quot;mongodb://127.0.0.1:27017/test&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        useNewUrlParser<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        useUnifiedTopology<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token doc-comment comment">/** 监听 mongoose 数据库连接的状态 */</span>
    mongoose<span class="token punctuation">.</span>connection<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;open&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;数据库连接成功~&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    mongoose<span class="token punctuation">.</span>connection<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;close&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;数据库连接已经断开~&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    mongoose<span class="token punctuation">.</span>connection<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;连接错误&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 断开数据库连接</span>
    <span class="token comment">// mongoose.disconnect()</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字段定义及约束-schema" tabindex="-1"><a class="header-anchor" href="#字段定义及约束-schema"><span>字段定义及约束 Schema</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 模型的配置对象 Schema 和 SchemaType</span>
在 mongoose 中，Schema 是模型的配置对象。Schema 不允许您从 MongoDB 读写，这就是模型的用途。

Schema 的作用
	- 定义保存在 MongoDB 中的文档可以具有哪些属性
	- 定义自定义验证<span class="token punctuation">(</span>validation<span class="token punctuation">)</span>
  - 声明<span class="token punctuation">(</span>virtuals<span class="token punctuation">)</span>
  - 声明 getter 和 setter
  - 定义静态<span class="token punctuation">(</span>statics<span class="token punctuation">)</span>和方法<span class="token punctuation">(</span>methods<span class="token punctuation">)</span>


<span class="token variable"><span class="token variable">\`</span>SchemaType<span class="token variable">\`</span></span> 类只是一个基类。有几个类继承自 <span class="token variable"><span class="token variable">\`</span>SchemaType<span class="token variable">\`</span></span>，代表不同的核心 Mongoose 类型：
    - <span class="token variable"><span class="token variable">\`</span>mongoose.Schema.Types.String<span class="token variable">\`</span></span>
    - <span class="token variable"><span class="token variable">\`</span>mongoose.Schema.Types.Number<span class="token variable">\`</span></span>
    - <span class="token variable"><span class="token variable">\`</span>mongoose.Schema.Types.Date<span class="token variable">\`</span></span>
    - <span class="token variable"><span class="token variable">\`</span>mongoose.Schema.Types.Buffer<span class="token variable">\`</span></span>
    - <span class="token variable"><span class="token variable">\`</span>mongoose.Schema.Types.Boolean<span class="token variable">\`</span></span>
    - <span class="token variable"><span class="token variable">\`</span>mongoose.Schema.Types.Mixed<span class="token variable">\`</span></span>
    - <span class="token variable"><span class="token variable">\`</span>mongoose.Schema.Types.ObjectId<span class="token variable">\`</span></span>（或等效的 <span class="token variable"><span class="token variable">\`</span>mongoose.ObjectId<span class="token variable">\`</span></span>）
    - <span class="token variable"><span class="token variable">\`</span>mongoose.Schema.Types.Array<span class="token variable">\`</span></span>
    - <span class="token variable"><span class="token variable">\`</span>mongoose.Schema.Types.Decimal128<span class="token variable">\`</span></span>
    - <span class="token variable"><span class="token variable">\`</span>mongoose.Schema.Types.Map<span class="token variable">\`</span></span>


<span class="token comment">### 文档字段约束</span>
- require：Boolean，数据是否必填。
- default: any，设置默认值，如果给字段设置值时则取该设定的默认值。
- min/max：最小/大值（仅适用于数字）
- match：正则匹配（仅适用于字符串）
- enum: 枚举匹配（只适用于字符串）
- validate：自定义匹配。validate 是一个函数，函数的参数代表当前字段，返回 <span class="token boolean">true</span> 表示通过验证，返回 <span class="token boolean">false</span> 表示未通过验证。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mongoose&quot;</span><span class="token punctuation">)</span>
mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&quot;mongodb://localhost:27017/student&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">match</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">01</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">//将name的match设置为必须存在&#39;01&#39;字符。如果name不存在&#39;01&#39;，文档将不被保存</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
        <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
        <span class="token keyword">enum</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;female&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
        <span class="token function-variable function">validate</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arg<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  	<span class="token literal-property property">money</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 判断原始类型</span>
schema<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>SchemaType</span> <span class="token comment">// true</span>
schema<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema<span class="token punctuation">.</span>Types<span class="token punctuation">.</span>String</span> <span class="token comment">// true</span>
schema<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>SchemaType</span> <span class="token comment">// true</span>
schema<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema<span class="token punctuation">.</span>Types<span class="token punctuation">.</span>Number</span> <span class="token comment">// true</span>

<span class="token comment">// 设置值</span>
schema<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token string">&#39;money&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span>
schema<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token string">&#39;money&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> v <span class="token operator">&gt;=</span> <span class="token number">21</span><span class="token punctuation">)</span>

<span class="token comment">// 创建实例</span>
<span class="token keyword">const</span> stuModel <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&quot;students&quot;</span><span class="token punctuation">,</span> schema<span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">stuModel</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;01willy&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> doc</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doc<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="objectids" tabindex="-1"><a class="header-anchor" href="#objectids"><span>ObjectIds</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### ObjectIds</span>
默认情况下，MongoDB 在 ObjectID 类型的每个文档上创建一个 _id 属性作为唯一的自增值。
MongoDB <span class="token variable"><span class="token variable">\`</span>ObjectIds<span class="token variable">\`</span></span> 通常使用 <span class="token number">24</span> 个十六进制字符串表示，如 <span class="token variable"><span class="token variable">\`</span>5d6ede6a0ba62570afcedd3a<span class="token variable">\`</span></span>。Mongoose 根据模式路径将 <span class="token variable"><span class="token variable">\`</span>ObjectIds<span class="token variable">\`</span></span> 强制转换 <span class="token number">24</span> 个字符字符串。
Mongoose 还可以将其他的值转换为 <span class="token variable"><span class="token variable">\`</span>ObjectId<span class="token variable">\`</span></span>。因为 <span class="token variable"><span class="token variable">\`</span>ObjectId<span class="token variable">\`</span></span> 是 <span class="token number">12</span> 个任意字节。所以任何 <span class="token number">12</span> 字节的缓冲区或 <span class="token number">12</span> 个字符的字符串都是有效的 <span class="token variable"><span class="token variable">\`</span>ObjectId<span class="token variable">\`</span></span>。

<span class="token variable"><span class="token variable">\`</span>ObjectId<span class="token variable">\`</span></span> 对创建它们的本地时间进行编码。这意味着可以从文档的 <span class="token variable"><span class="token variable">\`</span>_id<span class="token variable">\`</span></span> 中提取文档创建的时间。


<span class="token comment">#### ObjectIds 作为自增值的原因</span>
mongooseDB 使用 ObjectIds 设置自增值的原因
虽然在单个进程中递增计数器很简单实现，但是如果存在多个进程<span class="token punctuation">(</span>如分片/集群<span class="token punctuation">)</span>，当每个进程都需要能够递增计数器，此时无论何时插入文档，都需要递增分布式计数器。此时如果两个进程之间存在显著的网络延迟，则可能导致性能不可靠；如果一个进程停机，则可能导致不可预测的结果。
因为 ObjectId 冲突的可能性很小，因此 MongoDB 可以分配 ID，这些 ID 在没有进程间通信的分布式系统中可能是唯一的。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> schema <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">testId</span><span class="token operator">:</span> mongoose<span class="token punctuation">.</span>ObjectId <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Model <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&#39;Test&#39;</span><span class="token punctuation">,</span> schema<span class="token punctuation">)</span>


<span class="token comment">// testId 是一个 ObjectId，Mongoose 根据您的模式自动将 24 个十六进制字符字符串转换为 ObjectId。</span>
<span class="token keyword">let</span> doc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Model</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">testId</span><span class="token operator">:</span> <span class="token string">&#39;313263686172313263686172&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
doc<span class="token punctuation">.</span>testId <span class="token keyword">instanceof</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Types<span class="token punctuation">.</span>ObjectId</span> <span class="token comment">// true</span>

<span class="token comment">// 获取时间</span>
doc<span class="token punctuation">.</span>testId<span class="token punctuation">.</span><span class="token function">getTimestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1996-02-27T01:50:32.000Z</span>
doc<span class="token punctuation">.</span>testId<span class="token punctuation">.</span><span class="token function">getTimestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">Date</span> <span class="token comment">// true</span>


<span class="token comment">// 任何 12 个字符的字符串都是有效的 ObjectId，因为 ObjectId 的唯一定义特性是它们有 12 个字节。</span>
doc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Model</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">testId</span><span class="token operator">:</span> <span class="token string">&#39;12char12char&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
doc<span class="token punctuation">.</span>testId <span class="token keyword">instanceof</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Types<span class="token punctuation">.</span>ObjectId</span> <span class="token comment">// true</span>
doc<span class="token punctuation">.</span>testId <span class="token comment">// &#39;313263686172313263686172&#39;</span>


<span class="token comment">// 类似地，Mongoose 将自动将长度为 12 的缓冲区转换为 ObjectID。</span>
doc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Model</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">testId</span><span class="token operator">:</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&#39;12char12char&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
doc<span class="token punctuation">.</span>testId <span class="token keyword">instanceof</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Types<span class="token punctuation">.</span>ObjectId</span> <span class="token comment">// true</span>
doc<span class="token punctuation">.</span>testId <span class="token comment">// 313263686172313263686172</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文档新增" tabindex="-1"><a class="header-anchor" href="#文档新增"><span>文档新增</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 文档新增</span>
- save<span class="token punctuation">(</span><span class="token punctuation">)</span>：操作的是文档

- create<span class="token punctuation">(</span><span class="token punctuation">)</span>：操作的是模型
- createOne<span class="token punctuation">(</span><span class="token punctuation">)</span>：创建一个对象
- createMany<span class="token punctuation">(</span><span class="token punctuation">)</span>：创建多个对象

- insertMany<span class="token punctuation">(</span><span class="token punctuation">)</span>：插入一个对象

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文档查询" tabindex="-1"><a class="header-anchor" href="#文档查询"><span>文档查询</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 文档查询</span>
- find<span class="token punctuation">(</span><span class="token punctuation">)</span>：根据条件返回多条数据
- findById<span class="token punctuation">(</span><span class="token punctuation">)</span>：根据id来进行查询
- findOne<span class="token punctuation">(</span><span class="token punctuation">)</span>：返回查询到的第一条数据

<span class="token comment">#### 复杂查询</span>
- <span class="token variable">$where</span>：复杂查询 <span class="token variable">$where</span> 可以使用任意的 js 作为查询的一部分，包含 JavaScript 表达式的字符串或者函数。

常用的查询条件
  <span class="token variable">$or</span>　　　　 或关系
  <span class="token variable">$nor</span>　　　 或关系取反
  <span class="token variable">$gt</span>　　　　 大于
  <span class="token variable">$gte</span>　　　 大于等于
  <span class="token variable">$lt</span>　　　　 小于
  <span class="token variable">$lte</span>　　　 小于等于
  <span class="token variable">$ne</span>　　　　 不等于
  <span class="token variable">$in</span>　　　　 在多个值范围内
  <span class="token variable">$nin</span>　　　 不在多个值范围内
  <span class="token variable">$all</span>　　　 匹配数组中多个值
  <span class="token variable">$regex</span>　　 正则，用于模糊查询
  <span class="token variable">$size</span>　　　 匹配数组大小
  <span class="token variable">$maxDistance</span>　 范围查询，距离（基于LBS）
  <span class="token variable">$mod</span>　　　　 取模运算
  <span class="token variable">$near</span>　　　 邻域查询，查询附近的位置（基于LBS）
  <span class="token variable">$exists</span>　　 字段是否存在
  <span class="token variable">$elemMatch</span>　 匹配内数组内的元素
  <span class="token variable">$within</span>　　　 范围查询（基于LBS）
  <span class="token variable">$box</span>　　　　 范围查询，矩形范围（基于LBS）
  <span class="token variable">$center</span>　　　 范围醒询，圆形范围（基于LBS）
  <span class="token variable">$centerSphere</span>　范围查询，球形范围（基于LBS）
  <span class="token variable">$slice</span>　　　　 查询字段集合中的元素（比如从第几个之后，第N到第M个元素


<span class="token comment">### 特定类型查询</span>
- <span class="token function">sort</span>	排序
- skip	跳过
- limit	限制
- <span class="token keyword">select</span>	显示字段
- exect	执行<span class="token punctuation">(</span>与 Promise.then<span class="token punctuation">(</span><span class="token punctuation">)</span> 类似<span class="token punctuation">)</span>
- count	计数
- distinct	去重
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 字符串的 es5 中的 this 与 obj 指向一样，es6 中只能用 obj</span>
stuModel<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">$where</span><span class="token operator">:</span> <span class="token string">&#39;this.grades == this.test&#39;</span> <span class="token operator">||</span> <span class="token string">&#39;obj.grages == obj.test&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 函数</span>
stuModel<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
  <span class="token function-variable function">$where</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>grades <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>test <span class="token operator">||</span> obj<span class="token punctuation">.</span>grades <span class="token operator">===</span> obj<span class="token punctuation">.</span>test <span class="token punctuation">}</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文档更新" tabindex="-1"><a class="header-anchor" href="#文档更新"><span>文档更新</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 文档更新</span>
- update<span class="token punctuation">(</span><span class="token punctuation">)</span>
		- <span class="token variable"><span class="token variable">\`</span>Model.update<span class="token punctuation">(</span>conditions, doc, <span class="token punctuation">[</span>options<span class="token punctuation">]</span>, <span class="token punctuation">[</span>callback<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>
			- conditions：查询条件
			- doc：需要修改的数据（插入的数据）
			- <span class="token punctuation">[</span>options<span class="token punctuation">]</span>：控制选项
					- safe <span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>： 默认为true。安全模式。 
					- upsert <span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>： 默认为false。如果不存在则创建新记录。 
					- multi <span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>： 默认为false。是否更新多个查询记录。 
					- runValidators： 如果值为true，执行Validation验证。 
					- setDefaultsOnInsert： 如果upsert选项为true，在新建时插入文档定义的默认值。 
					- strict <span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>： 以strict模式进行更新。 
					- overwrite <span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>： 默认为false。禁用update-only模式，允许覆盖记录。


- updateOne<span class="token punctuation">(</span><span class="token punctuation">)</span>：与 update<span class="token punctuation">(</span><span class="token punctuation">)</span> 的区别是默认更新一个文档，即使设置 <span class="token punctuation">{</span>multi:true<span class="token punctuation">}</span> 也无法只更新一个文档
- updateMany<span class="token punctuation">(</span><span class="token punctuation">)</span>：与 update<span class="token punctuation">(</span><span class="token punctuation">)</span> 的区别是默认更新多个文档，即使设置<span class="token punctuation">{</span>multi:false<span class="token punctuation">}</span>也无法只更新一个文档



<span class="token comment">#### 复杂更新</span>
- find<span class="token punctuation">(</span><span class="token punctuation">)</span> + save<span class="token punctuation">(</span><span class="token punctuation">)</span>
- findOne<span class="token punctuation">(</span><span class="token punctuation">)</span> + save<span class="token punctuation">(</span><span class="token punctuation">)</span>

- fingOneAndUpdate<span class="token punctuation">(</span><span class="token punctuation">)</span>
- findByIdAndUpdate<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文档删除" tabindex="-1"><a class="header-anchor" href="#文档删除"><span>文档删除</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 文档删除</span>
- deleteOne<span class="token punctuation">(</span><span class="token punctuation">)</span>：只删除一个文档，即使有多个文档符合条件
- deleteMany<span class="token punctuation">(</span><span class="token punctuation">)</span>：删除所有符合条件的文档

- findOneAndRemove<span class="token punctuation">(</span><span class="token punctuation">)</span>：删除符合条件的一条数据
- findByIdAndRemove<span class="token punctuation">(</span><span class="token punctuation">)</span>：通过 <span class="token function">id</span> 删除数据（id是唯一的）

- remove<span class="token punctuation">(</span><span class="token punctuation">)</span>：删除单个文档或符合指定条件的所有文档

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="db-collection-deleteone-方法" tabindex="-1"><a class="header-anchor" href="#db-collection-deleteone-方法"><span><code>db.collection.deleteOne()</code> 方法</span></a></h4><p><code>db.collection.deleteOne()</code> 只删除一个文档，即使有多个文档符合条件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ db.articles.find<span class="token punctuation">(</span><span class="token punctuation">{</span> artistname: <span class="token punctuation">{</span> <span class="token variable">$in</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;The Kooks&quot;</span>, <span class="token string">&quot;Gang of Four&quot;</span>, <span class="token string">&quot;Bastille&quot;</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># { &quot;_id&quot; : ObjectId(&quot;5781d7f248ef8c6b3ffb014d&quot;), &quot;artistname&quot; : &quot;The Kooks&quot; }</span>
<span class="token comment"># { &quot;_id&quot; : ObjectId(&quot;5781d7f248ef8c6b3ffb014e&quot;), &quot;artistname&quot; : &quot;Bastille&quot; }</span>
<span class="token comment"># { &quot;_id&quot; : ObjectId(&quot;5781d7f248ef8c6b3ffb014f&quot;), &quot;artistname&quot; : &quot;Gang of Four&quot; }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 对 \`db.collection.deleteOne()\` 方法使用完全相同的筛选条件</span>
$ db.articles.deleteOne<span class="token punctuation">(</span><span class="token punctuation">{</span> artistname: <span class="token punctuation">{</span> <span class="token variable">$in</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;The Kooks&quot;</span>, <span class="token string">&quot;Gang of Four&quot;</span>, <span class="token string">&quot;Bastille&quot;</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment"># { &quot;acknowledged&quot; : true, &quot;deletedCount&quot; : 1 }</span>


<span class="token comment"># 再次查看符合条件的文档数量</span>
$ db.articles.find<span class="token punctuation">(</span><span class="token punctuation">{</span> artistname: <span class="token punctuation">{</span> <span class="token variable">$in</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;The Kooks&quot;</span>, <span class="token string">&quot;Gang of Four&quot;</span>, <span class="token string">&quot;Bastille&quot;</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment"># { &quot;_id&quot; : ObjectId(&quot;5781d7f248ef8c6b3ffb014e&quot;), &quot;artistname&quot; : &quot;Bastille&quot; }</span>
<span class="token comment"># { &quot;_id&quot; : ObjectId(&quot;5781d7f248ef8c6b3ffb014f&quot;), &quot;artistname&quot; : &quot;Gang of Four&quot; }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="db-collection-deletemany-方法" tabindex="-1"><a class="header-anchor" href="#db-collection-deletemany-方法"><span><code>db.collection.deleteMany()</code> 方法</span></a></h4><p><code>db.collection.deleteMany()</code> 方法删除所有符合条件的文档。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ db.articles.deleteMany<span class="token punctuation">(</span><span class="token punctuation">{</span> artistname: <span class="token punctuation">{</span> <span class="token variable">$in</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;The Kooks&quot;</span>, <span class="token string">&quot;Gang of Four&quot;</span>, <span class="token string">&quot;Bastille&quot;</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># { &quot;acknowledged&quot; : true, &quot;deletedCount&quot; : 2 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="db-collection-remove-方法" tabindex="-1"><a class="header-anchor" href="#db-collection-remove-方法"><span><code>db.collection.remove()</code> 方法</span></a></h4><p><code>db.collection.remove()</code> 方法删除单个文档或符合指定条件的所有文档。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 删除 \`article\` 名为 \`AC/DC\` 的所有文档</span>
$ db.articles.remove<span class="token punctuation">(</span><span class="token punctuation">{</span> artistname: <span class="token string">&quot;AC/DC&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># WriteResult({ &quot;nRemoved&quot; : 1 })</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="justone-选项" tabindex="-1"><a class="header-anchor" href="#justone-选项"><span><code>justOne</code> 选项</span></a></h4><p>可以使用 <code>justOne</code> 参数将删除操作限制为仅一个文档（就像使用 <code>db.collection.deleteOne()</code>）。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 运行一个返回多个文档的查询</span>
$ db.users.find<span class="token punctuation">(</span><span class="token punctuation">{</span> born: <span class="token punctuation">{</span> <span class="token variable">$lt</span><span class="token builtin class-name">:</span> <span class="token number">1950</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># { &quot;_id&quot; : 2, &quot;name&quot; : &quot;Ian Paice&quot;, &quot;instrument&quot;: &quot;Drums&quot;, &quot;born&quot;: 1948 }</span>
<span class="token comment"># { &quot;_id&quot; : 3, &quot;name&quot; : &quot;Roger Glover&quot;, &quot;instrument&quot;: &quot;Bass&quot;, &quot;born&quot;: 1945 }</span>
<span class="token comment"># { &quot;_id&quot; : 5, &quot;name&quot; : &quot;Don Airey&quot;, &quot;instrument&quot;: &quot;Keyboards&quot;, &quot;born&quot;: 1948 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 使用 \`justOne\` 选项删除其中一条记录</span>
$ db.users.remove<span class="token punctuation">(</span><span class="token punctuation">{</span> born: <span class="token punctuation">{</span> <span class="token variable">$lt</span><span class="token builtin class-name">:</span> <span class="token number">1950</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>, <span class="token punctuation">{</span> justOne: <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># WriteResult({ &quot;nRemoved&quot; : 1 })</span>


<span class="token comment"># 运行相同的查询以查看剩余的文档</span>
$ db.users.find<span class="token punctuation">(</span><span class="token punctuation">{</span> born: <span class="token punctuation">{</span> <span class="token variable">$lt</span><span class="token builtin class-name">:</span> <span class="token number">1950</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># { &quot;_id&quot; : 3, &quot;name&quot; : &quot;Roger Glover&quot;, &quot;instrument&quot;: &quot;Bass&quot;, &quot;born&quot;: 1945 }</span>
<span class="token comment"># { &quot;_id&quot; : 5, &quot;name&quot; : &quot;Don Airey&quot;, &quot;instrument&quot;: &quot;Keyboards&quot;, &quot;born&quot;: 1948 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除集合中的所有文档" tabindex="-1"><a class="header-anchor" href="#删除集合中的所有文档"><span>删除集合中的所有文档</span></a></h4><p>只需省略任何筛选条件，即可删除集合中的所有文档。</p><blockquote><p><strong>注意</strong>：如果您收到一个错误：<code>remove needs a query</code>，请检查您是否忘记包含花括号</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 删除 \`article\` 集合中的所有文档</span>
$ db.articles.remove<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># WriteResult({ &quot;nRemoved&quot; : 8 })</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前后钩子" tabindex="-1"><a class="header-anchor" href="#前后钩子"><span>前后钩子</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 前后钩子</span>
前后钩子即 pre<span class="token punctuation">(</span><span class="token punctuation">)</span> 和 post<span class="token punctuation">(</span><span class="token punctuation">)</span> 方法（中间件）
中间件在 schema 上指定，类似静态方法或实例方法等。
- pre<span class="token punctuation">(</span><span class="token punctuation">)</span>：在执行某些操作前执行。
- post<span class="token punctuation">(</span><span class="token punctuation">)</span>：在执行某些操作前后执行，不可以使用 next<span class="token punctuation">(</span><span class="token punctuation">)</span>。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mongoose&quot;</span><span class="token punctuation">)</span>
mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&quot;mongodb://localhost:27017/student&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Schema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">grades</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
Schema<span class="token punctuation">.</span><span class="token function">pre</span><span class="token punctuation">(</span><span class="token string">&quot;find&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我是pre方法1&quot;</span><span class="token punctuation">)</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
Schema<span class="token punctuation">.</span><span class="token function">pre</span><span class="token punctuation">(</span><span class="token string">&quot;find&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我是pre方法2&quot;</span><span class="token punctuation">)</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
Schema<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;find&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">docs</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我是post方法1&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
Schema<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;find&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">docs</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我是post方法2&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> stuModel <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&quot;grades&quot;</span><span class="token punctuation">,</span> Schema<span class="token punctuation">)</span>
stuModel<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> docs</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>docs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/*
    我是pre方法1
    我是pre方法2
    我是post方法1
    我是post方法2
    {test: 34, _id: 6017befb5c36d64d08b72576,name: &#39;小明&#39;,grades: 78,__v: 0}
*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql关系数据库" tabindex="-1"><a class="header-anchor" href="#mysql关系数据库"><span>MySQL关系数据库</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## MySQL 关系数据库</span>

<span class="token comment">### 关系型数据库与非关系型数据库的区别</span>
关系型数据库最典型的数据结构是表，由二维表及其之间的联系所组成的一个数据组织。
  优点：
    <span class="token number">1</span>. 易于维护：都是使用表结构，格式一致。 
    <span class="token number">2</span>. 使用方便：SQL语言通用，可用于复杂查询。
    <span class="token number">3</span>. 复杂操作：支持SQL，可用于一个表以及多个表之间非常复杂的查询。 
  缺点： 
    <span class="token number">1</span>. 读写性能比较差，尤其是海量数据的高效率读写。 
    <span class="token number">2</span>. 固定的表结构，灵活度稍欠。
    <span class="token number">3</span>. 高并发读写需求，传统关系型数据库来说，硬盘I/O是一个很大的瓶颈。

非关系型数据库严格上不是一种数据库，应该是一种数据结构化存储方法的集合，可以是文档或者键值对等。
  优点：
    <span class="token number">1</span>. 格式灵活：存储数据的格式可以是key,value形式、文档形式、图片形式等，使而关系型数据库只支持基础类型。
    <span class="token number">2</span>. 速度快：nosql 可以使用硬盘或者随机存储器作为载体，而关系型数据库只能使用硬盘。
    <span class="token number">3</span>. 高扩展性。 
    <span class="token number">4</span>. 成本低：nosql数据库部署简单，基本都是开源软件。
  缺点：
    <span class="token number">1</span>. 不提供sql支持。
    <span class="token number">2</span>. 无事务处理。
    <span class="token number">3</span>. 数据结构相对复杂，复杂查询方面稍欠。


<span class="token comment">### 安装 MySQL 2</span>
$ <span class="token function">npm</span> i <span class="token parameter variable">--save</span> mysql2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="连接数据库" tabindex="-1"><a class="header-anchor" href="#连接数据库"><span>连接数据库</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** config/db.config.js */</span>
<span class="token keyword">const</span> mysql <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mysql2/promise&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 通过 createPool 方法连接服务器</span>
<span class="token keyword">const</span> db <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">createPool</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 表示连接某个服务器上的mysql数据库</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 数据库的用户名 （默认为root）</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 数据库的密码 (默认为root)</span>
    <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">&quot;dbtest11&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 创建的本地数据库名称</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 测试数据库是否连接成功</span>
db<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> conn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    conn<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;连接失败~&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;连接成功~&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> db

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="增删改查操作" tabindex="-1"><a class="header-anchor" href="#增删改查操作"><span>增删改查操作</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;../config/db.config&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 查询操作
 */</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 通过db.query方法来执行mysql  测试是否连接成功</span>
    <span class="token comment">// 查询语句 data 得到的是一个数组，  增删改得到的是受影响的行数</span>
    <span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&quot;select * from users&quot;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>users<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">ok</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> users<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 插入操作
 */</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/addUser&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 给user中添加用户名和密码</span>
    <span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token string">&quot;insert into users (userid,department_id) values (?,?)&quot;</span> <span class="token comment">// 构建sql语句</span>
    <span class="token comment">// 执行sql语句</span>
    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;Mary&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">ok</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 修改操作
 */</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/updateUser&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token string">&quot;update users set userid=?,department_id=? where id=?&quot;</span> <span class="token comment">// 构建sql语句</span>
    <span class="token comment">// 执行sql语句</span>
    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;Jerry&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">ok</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 删除操作
 */</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/deleteUser&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token string">&quot;delete from users where id=?&quot;</span> <span class="token comment">// 构建sql语句</span>
    <span class="token comment">// 执行sql语句</span>
    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">ok</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="restful-接口规范" tabindex="-1"><a class="header-anchor" href="#restful-接口规范"><span>RESTful 接口规范</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** config/db.config.js */</span>
<span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mongoose&#39;</span><span class="token punctuation">)</span>

mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&#39;mongodb://127.0.0.1:27017/ds&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//插入集合和数据,数据库ds2会自动创建</span>

<span class="token comment">// 监听mongodb数据库的连接状态</span>
<span class="token comment">// 绑定数据库连接成功事件</span>
mongoose<span class="token punctuation">.</span>connection<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&#39;open&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;连接成功&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 绑定数据库连接失败事件</span>
mongoose<span class="token punctuation">.</span>connection<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;数据库连接已经断开&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// model/UserModel.js</span>

<span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mongoose&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> userType <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> UserModel <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&#39;UserModel&#39;</span><span class="token punctuation">,</span> userType<span class="token punctuation">,</span> <span class="token string">&#39;users&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> UserModel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// app.js</span>
<span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> indexRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./routes/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> usersRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./routes/users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> indexRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span> usersRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> app<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// router/user.js</span>
<span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> userController <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../controllers/userController&#39;</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> userController<span class="token punctuation">.</span>getUser<span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> userController<span class="token punctuation">.</span>addUser<span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&#39;/:id&#39;</span><span class="token punctuation">,</span> userController<span class="token punctuation">.</span>updateUser<span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;/:id&#39;</span><span class="token punctuation">,</span> userController<span class="token punctuation">.</span>deleteUser<span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// controllers/userController.js</span>
<span class="token keyword">const</span> userService <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../services/userService&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> userController <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> page<span class="token punctuation">,</span> limit <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>query
    <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">await</span> userService<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> limit<span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body
    <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">await</span> userService<span class="token punctuation">.</span><span class="token function">addUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span> username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> age <span class="token punctuation">}</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">await</span> userService<span class="token punctuation">.</span><span class="token function">updateUser</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">deleteUser</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">await</span> userService<span class="token punctuation">.</span><span class="token function">deleteUser</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> userController
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// services/userService.js</span>
<span class="token keyword">const</span> userModel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../model/userModel&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> userService <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token parameter">page<span class="token punctuation">,</span> limit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> userModel
      <span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">skip</span><span class="token punctuation">(</span><span class="token punctuation">(</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> limit<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span>limit<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> age <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> userModel<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      username<span class="token punctuation">,</span>
      password<span class="token punctuation">,</span>
      age<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token parameter">_id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> userModel<span class="token punctuation">.</span><span class="token function">updateOne</span><span class="token punctuation">(</span>
      <span class="token punctuation">{</span>
        _id<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;更新&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">deleteUser</span><span class="token punctuation">(</span><span class="token parameter">_id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> userModel<span class="token punctuation">.</span><span class="token function">deleteOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      _id<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> userService
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,96),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","NodeJS.html.vue"]]),d=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/NodeJS.html","title":"","lang":"zh-CN","frontmatter":{"Author":"willy","CreateTime":"2023-08-24T16:42:38.000Z","Modifier":"willysliang","ModifiedTime":"2023-11-27T20:09:45.000Z","Description":"NodeJS 进阶"},"headers":[{"level":2,"title":"NodeJS 进阶","slug":"nodejs-进阶","link":"#nodejs-进阶","children":[]},{"level":2,"title":"原生路由","slug":"原生路由","link":"#原生路由","children":[]},{"level":2,"title":"中间件","slug":"中间件","link":"#中间件","children":[]},{"level":2,"title":"洋葱模型","slug":"洋葱模型","link":"#洋葱模型","children":[]},{"level":2,"title":"Express","slug":"express","link":"#express","children":[{"level":3,"title":"all方法和http动词方法","slug":"all方法和http动词方法","link":"#all方法和http动词方法","children":[]},{"level":3,"title":"路径匹配","slug":"路径匹配","link":"#路径匹配","children":[]},{"level":3,"title":"多回调处理","slug":"多回调处理","link":"#多回调处理","children":[]},{"level":3,"title":"request对象","slug":"request对象","link":"#request对象","children":[]},{"level":3,"title":"response 对象","slug":"response-对象","link":"#response-对象","children":[]},{"level":3,"title":"Express 中间件","slug":"express-中间件","link":"#express-中间件","children":[]}]},{"level":2,"title":"Express 服务端渲染","slug":"express-服务端渲染","link":"#express-服务端渲染","children":[{"level":3,"title":"ejs 标签含义","slug":"ejs-标签含义","link":"#ejs-标签含义","children":[]},{"level":3,"title":"ejs 列表渲染","slug":"ejs-列表渲染","link":"#ejs-列表渲染","children":[]},{"level":3,"title":"ejs 条件渲染","slug":"ejs-条件渲染","link":"#ejs-条件渲染","children":[]},{"level":3,"title":"express 中使用 ejs","slug":"express-中使用-ejs","link":"#express-中使用-ejs","children":[]}]},{"level":2,"title":"mongoDB","slug":"mongodb","link":"#mongodb","children":[{"level":3,"title":"字段定义及约束 Schema","slug":"字段定义及约束-schema","link":"#字段定义及约束-schema","children":[]},{"level":3,"title":"文档新增","slug":"文档新增","link":"#文档新增","children":[]},{"level":3,"title":"文档查询","slug":"文档查询","link":"#文档查询","children":[]},{"level":3,"title":"文档更新","slug":"文档更新","link":"#文档更新","children":[]},{"level":3,"title":"文档删除","slug":"文档删除","link":"#文档删除","children":[]},{"level":3,"title":"前后钩子","slug":"前后钩子","link":"#前后钩子","children":[]}]},{"level":2,"title":"MySQL关系数据库","slug":"mysql关系数据库","link":"#mysql关系数据库","children":[{"level":3,"title":"连接数据库","slug":"连接数据库","link":"#连接数据库","children":[]},{"level":3,"title":"增删改查操作","slug":"增删改查操作","link":"#增删改查操作","children":[]}]},{"level":2,"title":"RESTful 接口规范","slug":"restful-接口规范","link":"#restful-接口规范","children":[]}],"git":{"updatedTime":1709475878000,"contributors":[{"name":"willy","email":"willysliang","commits":2},{"name":"willy","email":"willysliang@qq.com","commits":2}]},"filePathRelative":"前端框架/NodeJS.md"}');export{r as comp,d as data};
