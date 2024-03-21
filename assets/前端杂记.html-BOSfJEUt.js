import{_ as n,o as s,c as a,b as e}from"./app-Bvx-HY_0.js";const p={},t=e(`<h2 id="前端杂记" tabindex="-1"><a class="header-anchor" href="#前端杂记"><span>前端杂记</span></a></h2><h2 id="jsdoc-注释规范" tabindex="-1"><a class="header-anchor" href="#jsdoc-注释规范"><span>JSDoc 注释规范</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 	JSDoc 注释规范</span>
<span class="token number">1</span>. 安装
$ <span class="token function">npm</span> i <span class="token parameter variable">-g</span> jsdoc 


<span class="token number">2</span>. 生成 jsdoc 文档
$ jsdoc test.js		<span class="token comment"># 使用该命令会在当前目录下生成一个名为 \`out\` 的目录（也可以另外指定）</span>


<span class="token number">3</span>. <span class="token punctuation">[</span>详见地址<span class="token punctuation">]</span><span class="token punctuation">(</span>https://jsdoc.app/index.html<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注释符" tabindex="-1"><a class="header-anchor" href="#注释符"><span>注释符</span></a></h4><p>JSDoc 使用以下格式的注释符来对要添加的标签进行块级包裹：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 
 * 
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即星号列垂直对其，第一行使用两个星号，每个星号后要添加一个空格再写内容，比如：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 前面留一个空格，再写描述
 * 或者多行描述
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">关于该参数的描述</span>
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>行内包裹：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@function</span> */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>@description</span></a></h4><p>也可写作 <code>@desc</code>，描述当前注释对象的详细信息；</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@function</span>
 * <span class="token keyword">@description</span> 关于该函数的介绍内容
 */</span>
<span class="token keyword">function</span> <span class="token function">myFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 也能在这里直接写介绍内容
 * <span class="token keyword">@function</span>
 * <span class="token keyword">@description</span> 如果这里又继续使用标签添加内容，则会覆盖第一行的介绍内容
 */</span>
<span class="token keyword">function</span> <span class="token function">myFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="file" tabindex="-1"><a class="header-anchor" href="#file"><span>@file</span></a></h4><p>注释写在文件开头，用于描述当前文件的相关信息；例如：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@file</span> 这是一个用于...的文件，包含了...功能
 */</span>
 
<span class="token comment">// 然后是代码正文...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="author" tabindex="-1"><a class="header-anchor" href="#author"><span>@author</span></a></h4><p>描述当前文件或者代码的作者的相关信息；</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Jack &lt;jack@example.com&gt;
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="copyright" tabindex="-1"><a class="header-anchor" href="#copyright"><span>@copyright</span></a></h4><p>描述当前文件的版权相关信息</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@copyright</span> Willy 2024
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="license" tabindex="-1"><a class="header-anchor" href="#license"><span>@license</span></a></h4><p>描述当前文件许可证相关信息；</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@license</span> MIT
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者是：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@license</span>
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the &quot;Software&quot;), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * ...
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="version" tabindex="-1"><a class="header-anchor" href="#version"><span>@version</span></a></h4><p>描述当前项目的版本号；</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 这个版本修复了...问题
 * <span class="token keyword">@version</span> 1.2.3
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="since" tabindex="-1"><a class="header-anchor" href="#since"><span>@since</span></a></h4><p>描述某个功能是从哪个版本开始引入的；</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 提供了...功能
 * <span class="token keyword">@since</span> 1.2.1
 */</span>
<span class="token keyword">function</span> <span class="token function">newFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="see" tabindex="-1"><a class="header-anchor" href="#see"><span>@see</span></a></h4><p>类似于“另见”、“详见”的意思，引导至其他位置，也可以使用 <code>@link</code> 引导至某一网络地址；</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@see</span> fn2
 */</span>
<span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@see</span> <span class="token class-name"><span class="token punctuation">{</span>@link http<span class="token operator">:</span>//example<span class="token punctuation">.</span>com<span class="token operator">|</span>some text<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="todo" tabindex="-1"><a class="header-anchor" href="#todo"><span>@todo</span></a></h4><p>描述接下来准备做的事情；</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@todo</span> 添加...功能
 * <span class="token keyword">@todo</span> 修复...bug
 */</span>
<span class="token keyword">function</span> <span class="token function">myFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="function" tabindex="-1"><a class="header-anchor" href="#function"><span>@function</span></a></h4><p>与 <code>@func</code>, <code>@method</code> 含义相同，描述一个函数；</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@function</span> */</span>
<span class="token keyword">var</span> <span class="token function-variable function">myFn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>@type</span></a></h4><p>描述一个变量的类型；</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 一个对象类型的变量
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> val1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 一个字符或者数字类型的变量
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">(</span>string<span class="token operator">|</span>number<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> val2<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 类型为数字或为空
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">?</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> val3<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 类型为数字或且不能为空
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>!number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> val4<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 一个 MyClass 类的实例数组
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">.</span><span class="token punctuation">&lt;</span>MyClass<span class="token punctuation">&gt;</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 一个字符串的数组
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 一个包含一个字符串和一个数字类型的对象
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">.</span><span class="token punctuation">&lt;</span>string<span class="token punctuation">,</span> number<span class="token punctuation">&gt;</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 指定具体键和类型的对象
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">{</span>a<span class="token operator">:</span> string<span class="token punctuation">,</span> b<span class="token operator">:</span> number<span class="token punctuation">}</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 指定具体键和类型的命名对象
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> obj3
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> obj3.a
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> obj3.b
 */</span>
<span class="token keyword">var</span> obj3 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="param" tabindex="-1"><a class="header-anchor" href="#param"><span>@param</span></a></h4><p>与 <code>@arg</code>, <code>@argument</code> 含义相同，描述一个函数的参数信息；</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 标签后跟参数类型，然后是参数名，最后是参数描述
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">a</span> 这里写变量的描述
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">b</span> - 或者加上连字符便于阅读
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">c</span> - 又或者这个参数有一个很长很长很长
 * 很长很长很长很长很长非常长的描述，可以这样占用多行
 */</span>
<span class="token keyword">function</span> <span class="token function">myFn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 传入的参数是个对象
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> <span class="token parameter">option</span> - 传入的对象参数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">option<span class="token punctuation">.</span>name</span> - 对象的 name 属性
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">option<span class="token punctuation">.</span>age</span> - 对象的 age 属性
 */</span>
<span class="token keyword">function</span> <span class="token function">myFn</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> option<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token keyword">var</span> age <span class="token operator">=</span> option<span class="token punctuation">.</span>age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 传入的参数是个字符串组成的数组
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span> - 传入的对象参数
 */</span>
<span class="token keyword">function</span> <span class="token function">myFn</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> option<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token keyword">var</span> age <span class="token operator">=</span> option<span class="token punctuation">.</span>age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 表示某个参数是可选的
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">a</span> - 这是必填参数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">b</span><span class="token punctuation">]</span></span> - 这是可选参数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">=</span><span class="token punctuation">}</span></span> <span class="token parameter">c</span> - 可选参数的另一种表示
 */</span>
<span class="token keyword">function</span> <span class="token function">myFn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 表示可选参数的默认值
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">a</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">b</span><span class="token punctuation">=</span><span class="token code language-javascript"><span class="token number">3</span></span><span class="token punctuation">]</span></span> - 默认值为 3
 */</span>
<span class="token keyword">function</span> <span class="token function">myFn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 参数类型的各种表示
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">a</span> - 类型为数字
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token operator">|</span>string<span class="token punctuation">}</span></span> <span class="token parameter">b</span> - 类型为数字或字符串
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">?</span>number<span class="token punctuation">}</span></span> <span class="token parameter">c</span> - 类型为数字或者为空（null）
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>!number<span class="token punctuation">}</span></span> <span class="token parameter">d</span> - 类型为数字且不为空
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">e</span> - 类型不做限制，即可以为任意类型
 */</span>
<span class="token keyword">function</span> <span class="token function">myFn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 表示具有任意多个参数的函数
 * 下面的函数返回所有传入参数的和
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">...</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num</span> - 参数个数任意，但是都是数字类型
 */</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> len <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">+=</span> arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="typedef" tabindex="-1"><a class="header-anchor" href="#typedef"><span>@typedef</span></a></h4><p>用于描述自定义的变量类型；</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 关于自定义类型的描述
 * <span class="token keyword">@typedef</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">(</span>string<span class="token operator">|</span>number<span class="token punctuation">)</span><span class="token punctuation">}</span></span> myType
 */</span>

<span class="token doc-comment comment">/**
 * 关于自定义类型的描述
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>myType<span class="token punctuation">}</span></span> val - 使用自定义的类型
 */</span>
<span class="token keyword">function</span> <span class="token function">myFn</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="callback" tabindex="-1"><a class="header-anchor" href="#callback"><span>@callback</span></a></h4><p>描述指定函数中作为回调函数的参数信息；</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 这是关于回调函数的描述
 * <span class="token keyword">@callback</span> myCallback
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">aa</span> - 回调函数接受的参数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">bb</span><span class="token punctuation">]</span></span> - 回调函数接受的另一个可选参数
 */</span>
 
<span class="token doc-comment comment">/**
 * 这是关于函数本身的描述
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">a</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>myCallback<span class="token punctuation">}</span></span> <span class="token parameter">callback</span> - 回调函数
 */</span>
<span class="token keyword">function</span> <span class="token function">myFn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>@returns</span></a></h4><p>或者写作 <code>@return</code>，描述函数的返回值的信息；</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">a</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> 关于返回值的描述
 */</span>
<span class="token keyword">function</span> <span class="token function">myFn</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">a</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">(</span>number<span class="token operator">|</span>string<span class="token punctuation">)</span><span class="token punctuation">}</span></span> 返回值可能是数字或字符类型
 */</span>
<span class="token keyword">function</span> <span class="token function">myFn2</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;no.&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>@example</span></a></h4><p>描述指定代码的使用示例；</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 添加示例代码（格式会被高亮展示）
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">a</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">b</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> return a concat b.
 *
 * <span class="token keyword">@example</span>
 <span class="token example">* <span class="token code language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">myFn</span><span class="token punctuation">(</span><span class="token string">&#39;hello &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
 * <span class="token code language-javascript"><span class="token comment">// &quot;hello world!&quot;</span></span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">myFn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="class" tabindex="-1"><a class="header-anchor" href="#class"><span>@class</span></a></h4><p>描述一个 <code>class</code> 类；</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 关于该类的描述
 * <span class="token keyword">@class</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 或者是一个构造函数
 * <span class="token keyword">@class</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> ins <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="namespace" tabindex="-1"><a class="header-anchor" href="#namespace"><span>@namespace</span></a></h4><p>描述一个命名空间；</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 指定一个对象对命名空间
 * <span class="token keyword">@namespace</span>
 */</span>
<span class="token keyword">var</span> MyNamespace <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 表示为 MyNamespace.fn
     * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
     */</span>
    <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 表示为 MyNamespace.a
     * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
     */</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 手动指定命名空间
 * <span class="token keyword">@namespace</span> MyNamespace
 */</span>
<span class="token doc-comment comment">/**
 * 一个成员函数，MyNamespace.myFn
 * <span class="token keyword">@function</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 * <span class="token keyword">@memberof</span> <span class="token class-name">MyNamespace</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">myFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="member" tabindex="-1"><a class="header-anchor" href="#member"><span>@member</span></a></h4><p>描述当前类的一个成员；</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@class</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** <span class="token keyword">@member</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> */</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;knightyun&#39;</span><span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
     * 或者一个虚拟的成员
     * <span class="token keyword">@member</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> age
     */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="memberof" tabindex="-1"><a class="header-anchor" href="#memberof"><span>@memberof</span></a></h4><p>描述成员所属的类；</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@class</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@constructor</span>
     * <span class="token keyword">@memberof</span> <span class="token class-name">MyClass</span>
     */</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">/*
     * @param {string} val
     * @returns {*}
     * @memberof MyClass
     */</span>
    <span class="token function">myFn</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="错误解义" tabindex="-1"><a class="header-anchor" href="#错误解义"><span>错误解义</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>error <span class="token number">1</span><span class="token operator">:</span> Out <span class="token keyword">of</span> memory 内存溢出
error <span class="token number">2</span><span class="token operator">:</span> Identifier expected 缺标识符
error <span class="token number">3</span><span class="token operator">:</span> Unknown identifier 未定义的标识符
error <span class="token number">4</span><span class="token operator">:</span> Duplicate identifier 重复定义的标识符
error <span class="token number">5</span><span class="token operator">:</span> Syntax error 语法错误
error <span class="token number">6</span><span class="token operator">:</span> Error <span class="token keyword">in</span> real constant 实型常量错误
error <span class="token number">7</span><span class="token operator">:</span> Error <span class="token keyword">in</span> integer constant 整型常量错误
error <span class="token number">8</span><span class="token operator">:</span> String constant exceeds line 字符串常量超过一行
error <span class="token number">10</span><span class="token operator">:</span> Unexpected end <span class="token keyword">of</span> file 文件非正常结束
error <span class="token number">11</span><span class="token operator">:</span> Line too long 行太长
error <span class="token number">12</span><span class="token operator">:</span> Type identifier expected 未定义的类型标识符
error <span class="token number">13</span><span class="token operator">:</span> Too many open files 打开文件太多
error <span class="token number">14</span><span class="token operator">:</span> Invalid file name 无效的文件名
error <span class="token number">15</span><span class="token operator">:</span> File not found 文件未找到
error <span class="token number">16</span><span class="token operator">:</span> Disk full 磁盘满
error <span class="token number">17</span><span class="token operator">:</span> Invalid compiler directive 无效的编译命令
error <span class="token number">18</span><span class="token operator">:</span> Too many files 文件太多
error <span class="token number">19</span><span class="token operator">:</span> Undefined type <span class="token keyword">in</span> pointer def 指针定义中未定义类型
error <span class="token number">20</span><span class="token operator">:</span> Variable identifier expected 缺变量标识符

error <span class="token number">21</span><span class="token operator">:</span> Error <span class="token keyword">in</span> type 类型错误
error <span class="token number">22</span><span class="token operator">:</span> Structure too large 结构类型太长
error <span class="token number">23</span><span class="token operator">:</span> Set base type out <span class="token keyword">of</span> range 集合基类型越界
error <span class="token number">24</span><span class="token operator">:</span> File components may not be files or objectsfile 分量不能是文件或对象
error <span class="token number">25</span><span class="token operator">:</span> Invalid string length 无效的字符串长度
error <span class="token number">26</span><span class="token operator">:</span> Type mismatch 类型不匹配
error <span class="token number">27</span>：error <span class="token number">27</span>：Invalid subrange base type 无效的子界基类型
error <span class="token number">28</span>：Lower bound greater than upper bound 下界超过上界
error <span class="token number">29</span>：Ordinal type expected 缺有序类型
error <span class="token number">30</span>：Integer constant expected 缺整型常量
error <span class="token number">31</span>：Constant expected 缺常量
error <span class="token number">32</span>：Integer or real constant expected 缺整型或实型常量
error <span class="token number">33</span>：Pointer Type identifier expected 缺指针类型标识符
error <span class="token number">34</span>：Invalid <span class="token keyword">function</span> result type 无效的函数结果类型
error <span class="token number">35</span>：Label identifier expected 缺标号标识符
error <span class="token number">36</span>：<span class="token constant">BEGIN</span> expected 缺 <span class="token constant">BEGIN</span>
error <span class="token number">37</span>：<span class="token constant">END</span> expected 缺 <span class="token constant">END</span>
error <span class="token number">38</span>：Integer expression expected 缺整型表达式
error <span class="token number">39</span>：Ordinal expression expected 缺有序类型表达式
error <span class="token number">40</span>：Boolean expression expected 缺布尔表达式
error <span class="token number">41</span>：Operand types <span class="token keyword">do</span> not match 操作数类型不匹配

error <span class="token number">42</span>：Error <span class="token keyword">in</span> expression 表达式错误
error <span class="token number">43</span>：Illegal assignment 非法赋值
error <span class="token number">44</span>：Field identifier expected 缺域标识符
error <span class="token number">45</span>：Object file too large 目标文件太大
error <span class="token number">46</span>：Undefined external 未定义的外部过程与函数
error <span class="token number">47</span>：Invalid object file record 无效的 <span class="token constant">OBJ</span> 文件格式
error <span class="token number">48</span>：Code segment too large 代码段太长
error <span class="token number">49</span>：Data segment too large 数据段太长
error <span class="token number">50</span>：<span class="token constant">DO</span> expected 缺 <span class="token constant">DO</span>
error <span class="token number">51</span>：Invalid <span class="token constant">PUBLIC</span> definition 无效的 <span class="token constant">PUBLIC</span> 定义
error <span class="token number">52</span>：Invalid <span class="token constant">EXTRN</span> definition 无效的 <span class="token constant">EXTRN</span> 定义
error <span class="token number">53</span><span class="token operator">:</span> Too many <span class="token constant">EXTRN</span> definitions 太多的 <span class="token constant">EXTRN</span> 定义
error <span class="token number">54</span>：<span class="token constant">OF</span> expected 缺 <span class="token constant">OF</span>
error <span class="token number">55</span>：<span class="token constant">INTERFACE</span> expected 缺 <span class="token constant">INTERFACE</span>
error <span class="token number">56</span>：Invalid relocatable reference 无效的可重定位引用
error <span class="token number">57</span>：<span class="token constant">THEN</span> expected 缺 <span class="token constant">THEN</span>
error <span class="token number">58</span>：<span class="token constant">TO</span> or <span class="token constant">DOWNTO</span> expected 缺 <span class="token constant">TO</span> 或 <span class="token constant">DOWNTO</span>
error <span class="token number">59</span>：Undefined forward 提前引用未经定义的说明
error <span class="token number">61</span>：Invalid typecast 无效的类型转换
error <span class="token number">62</span>：Division by zero 被零除
error <span class="token number">63</span>：Invalid file type 无效的文件类型

error <span class="token number">64</span>：Cannot read or write variables <span class="token keyword">of</span> <span class="token keyword">this</span> type 不能读写此类型变量
error <span class="token number">65</span>：Pointer variable expected 缺指针类型变量
error <span class="token number">66</span>：String variable expected 缺字符串变量
error <span class="token number">67</span>：String expression expected 缺字符串表达式
error <span class="token number">68</span>：Circular unit reference 单元 <span class="token constant">UNIT</span> 部件循环引用
error <span class="token number">69</span>：Unit name mismatch 单元名不匹配
error <span class="token number">70</span>：Unit version mismatch 单元版本不匹配
error <span class="token number">71</span>：Internal stack overflow 内部堆栈溢出
error <span class="token number">72</span>：Unit file format error 单元文件格式错误
error <span class="token number">73</span>：<span class="token constant">IMPLEMENTATION</span> expected 缺 <span class="token constant">IMPLEMENTATION</span>
error <span class="token number">74</span>：Constant and <span class="token keyword">case</span> types <span class="token keyword">do</span> not match 常量和 <span class="token constant">CASE</span> 类型不匹配
error <span class="token number">75</span>：Record or object variable expected 缺记录或对象变量
error <span class="token number">76</span>：Constant out <span class="token keyword">of</span> range 常量越界
error <span class="token number">77</span>：File variable expected 缺文件变量
error <span class="token number">78</span>：Pointer expression expected 缺指针表达式
error <span class="token number">79</span>：Integer or real expression expected 缺整型或实型表达式
error <span class="token number">80</span>：Label not within current block 标号不在当前块内
error <span class="token number">81</span>：Label already defined 标号已定义
error <span class="token number">82</span>：Undefined label <span class="token keyword">in</span> preceding statement part 在前面未定义标号
error <span class="token number">83</span>：Invalid @ argument 无效的@参数
error <span class="token number">84</span>：<span class="token constant">UNIT</span> expected 缺 <span class="token constant">UNIT</span>
博学谷——让 <span class="token constant">IT</span> 教学更简单，让 <span class="token constant">IT</span> 学习更有效
<span class="token number">5</span>
error <span class="token number">85</span><span class="token operator">:</span> <span class="token string">&quot;;&quot;</span> expected 缺“；”
error <span class="token number">86</span>： <span class="token string">&quot;:&quot;</span> expected 缺“：”
error <span class="token number">87</span>： <span class="token string">&quot;,&quot;</span> expected 缺“，”
error <span class="token number">88</span>： <span class="token string">&quot;(&quot;</span> expected 缺“（”
error <span class="token number">89</span>： <span class="token string">&quot;)&quot;</span> expected 缺“）”
error <span class="token number">90</span>： <span class="token string">&quot;=&quot;</span> expected 缺“<span class="token operator">=</span>”
error <span class="token number">91</span>： <span class="token string">&quot;:=&quot;</span> expected 缺“<span class="token operator">:</span><span class="token operator">=</span>”
error <span class="token number">92</span>： <span class="token string">&quot;[&quot;</span> or <span class="token string">&quot;(.&quot;</span> Expected 缺“<span class="token punctuation">[</span>”或“（<span class="token punctuation">.</span>”
error <span class="token number">93</span><span class="token operator">:</span> <span class="token string">&quot;]&quot;</span> or <span class="token string">&quot;.)&quot;</span> expected 缺“］”或“<span class="token punctuation">.</span>）”
error <span class="token number">94</span>： <span class="token string">&quot;.&quot;</span> expected 缺“<span class="token punctuation">.</span>”
error <span class="token number">95</span><span class="token operator">:</span> <span class="token string">&quot;..&quot;</span> expected 缺“<span class="token punctuation">.</span><span class="token punctuation">.</span>”
error <span class="token number">96</span>：Too many variables 变量太多
error <span class="token number">97</span>：Invalid <span class="token constant">FOR</span> control variable 无效的 <span class="token constant">FOR</span> 循环控制变量
error <span class="token number">98</span>：Integer variable expected 缺整型变量
error <span class="token number">99</span>：Files and procedure types are not allowed here 该处不允许文件和过程类型
error <span class="token number">100</span>：String length mismatch 字符串长度不匹配
error <span class="token number">101</span>：Invalid ordering <span class="token keyword">of</span> fields 无效域顺序
error <span class="token number">102</span>：String constant expected 缺字符串常量
error <span class="token number">103</span>：Integer or real variable expected 缺整型或实型变量
error <span class="token number">104</span>：Ordinal variable expected 缺有序类型变量
error <span class="token number">105</span>：<span class="token constant">INLINE</span> error <span class="token constant">INLINE</span> 错误
                                  
error <span class="token number">106</span>：Character expression expected 缺字符表达式
error <span class="token number">107</span>：Too many relocation items 重定位项太多
error <span class="token number">108</span>：Overflow <span class="token keyword">in</span> arithmetic operation 算术运算溢出
error <span class="token number">112</span>：<span class="token constant">CASE</span> constant out <span class="token keyword">of</span> range <span class="token constant">CASE</span> 常量越界
error <span class="token number">113</span>：Error <span class="token keyword">in</span> statement 表达式错误
error <span class="token number">114</span>：Cannot call an interrupt procedure 不能调用中断过程
error <span class="token number">116</span>：Must be <span class="token keyword">in</span> <span class="token number">8087</span> mode to compile <span class="token keyword">this</span> 必须在 <span class="token number">8087</span> 模式编译
error <span class="token number">117</span>：Target address not found 找不到目标地址
error <span class="token number">118</span>：Include files are not allowed here 该处不允许 <span class="token constant">INCLUDE</span> 文件
error <span class="token number">119</span>：No inherited methods are accessible here 该处继承方法不可访问
error <span class="token number">121</span>：Invalid qualifier 无效的限定符
error <span class="token number">122</span>：Invalid variable reference 无效的变量引用
error <span class="token number">123</span>：Too many symbols 符号太多
error <span class="token number">124</span>：Statement part too large 语句体太长
error <span class="token number">126</span>：Files must be <span class="token keyword">var</span> parameters 文件必须是变量形参
error <span class="token number">127</span>：Too many conditional symbols 条件符号太多
error <span class="token number">128</span>：Misplaced conditional directive 条件指令错位
error <span class="token number">129</span>：<span class="token constant">ENDIF</span> directive missing 缺 <span class="token constant">ENDIF</span> 指令
error <span class="token number">130</span>：Error <span class="token keyword">in</span> initial conditional defines 初始条件定义错误
error <span class="token number">131</span>：Header does not match previous definition 和前面定义的过程或函数不匹配
error <span class="token number">133</span>：Cannot evaluate <span class="token keyword">this</span> expression 不能计算该表达式

error <span class="token number">134</span>：Expression incorrectly terminated 表达式错误结束
error <span class="token number">135</span>：Invalid format specifier 无效格式说明符
error <span class="token number">136</span>：Invalid indirect reference 无效的间接引用
error <span class="token number">137</span>：Structured variables are not allowed here 该处不允许结构变量
error <span class="token number">138</span>：Cannot evaluate without System unit 没有 System 单元不能计算
error <span class="token number">139</span>：Cannot access <span class="token keyword">this</span> symbol 不能存取符号
error <span class="token number">140</span>：Invalid floating point operation 无效的符号运算
error <span class="token number">141</span>：Cannot compile overlays to memory 不能编译覆盖模块至内存
error <span class="token number">142</span>：Pointer or procedural variable expected 缺指针或过程变量
error <span class="token number">143</span>：Invalid procedure or <span class="token keyword">function</span> reference 无效的过程或函数调用
error <span class="token number">144</span>：Cannot overlay <span class="token keyword">this</span> unit 不能覆盖该单元
error <span class="token number">146</span>：File access denied 不允许文件访问
error <span class="token number">147</span>：Object type expected 缺对象类型
error <span class="token number">148</span>：Local object types are not allowed 不允许局部对象类型
error <span class="token number">149</span>：<span class="token constant">VIRTUAL</span> expected 缺 <span class="token constant">VIRTUAL</span>
error <span class="token number">150</span><span class="token operator">:</span> Method identifier expected 缺方法标识符
error <span class="token number">151</span>：Virtual constructors are not allowed 不允许虚构造函数
error <span class="token number">152</span>：Constructor identifier expected 缺构造函数标识符
error <span class="token number">153</span>：Destructor identifier expected 缺析构函数标识符
error <span class="token number">154</span>：Fail only allowed within constructors 只能在构造函数内使用 Fail 标准过程
error <span class="token number">155</span>：Invalid combination <span class="token keyword">of</span> opcode and operands 操作数与操作符无效组合
error <span class="token number">156</span>：Memory reference expected 缺内存引用指针
error <span class="token number">157</span>：Cannot add or subtract relocatable symbols 不能加减可重定位符号
error <span class="token number">158</span>：Invalid register combination 无效寄存器组合
error <span class="token number">159</span>：<span class="token number">286</span><span class="token operator">/</span><span class="token number">287</span> instructions are not enabled 未激活 <span class="token number">286</span><span class="token operator">/</span><span class="token number">287</span> 指令
error <span class="token number">160</span>：Invalid symbol reference 无效符号指针
error <span class="token number">161</span>：Code generation error 代码生成错误
error <span class="token number">162</span>：<span class="token constant">ASM</span> expected 缺 <span class="token constant">ASM</span>
error <span class="token number">166</span>：Procedure or <span class="token keyword">function</span> identifier expected 缺过程或函数标识符
error <span class="token number">167</span>：Cannot <span class="token keyword">export</span> <span class="token keyword">this</span> symbol 不能输出该符号
error <span class="token number">168</span>：Duplicate <span class="token keyword">export</span> name 外部文件名重复
error <span class="token number">169</span>：Executable file header too large 可执行文件头太长
error <span class="token number">170</span>：Too many
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,74),c=[t];function o(i,l){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","前端杂记.html.vue"]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/%E5%89%8D%E7%AB%AF%E6%9D%82%E8%AE%B0.html","title":"","lang":"zh-CN","frontmatter":{"Author":"willysliang","CreateTime":"2023-11-29T10:27:23.000Z","Modifier":"willysliang","ModifiedTime":"2024-01-05T21:47:43.000Z","Description":"前端杂记"},"headers":[{"level":2,"title":"前端杂记","slug":"前端杂记","link":"#前端杂记","children":[]},{"level":2,"title":"JSDoc 注释规范","slug":"jsdoc-注释规范","link":"#jsdoc-注释规范","children":[]},{"level":2,"title":"错误解义","slug":"错误解义","link":"#错误解义","children":[]}],"git":{"updatedTime":1704605752000,"contributors":[{"name":"willy","email":"willysliang","commits":2}]},"filePathRelative":"前端基础/前端杂记.md"}');export{d as comp,u as data};
