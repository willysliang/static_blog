import{_ as e,r as o,o as c,c as l,d as n,e as p,a as t,b as s}from"./app-Bvx-HY_0.js";const i="/static_blog/assets/image-20230316202909144-D-ct-s7S.png",u="/static_blog/assets/image-20230320181727033-xwDI_taA.png",r="/static_blog/assets/image-20230321095756966-BFzAa88_.png",k="/static_blog/assets/image-20230328091552836-wmrlQ34z.png",d="/static_blog/assets/image-20230328092215988-DsAYi2ce.png",m="/static_blog/assets/2020081414460619-wfnQ3vHM.png",v="/static_blog/assets/1599102658-ubFHgg-image-C60qXyB0.png",b="/static_blog/assets/image-20230331090413645-BmMoOljG.png",h="/static_blog/assets/image-20230517204939065-BH908Kmw.png",g="/static_blog/assets/image-20230518115921356-DUXw9jXK.png",w="/static_blog/assets/image-20230518120013406-D2GyCxAr.png",y="/static_blog/assets/image-20230714131613070-wcU_ZC7Q.png",f="/static_blog/assets/119_2-KBaxD3yK.jpg",x="/static_blog/assets/image-20220926094537648-D9actoDL.png",_="/static_blog/assets/image-20220926094558061-bUPj1yKN.png",j="/static_blog/assets/image-20230814212528742-D7Cz4Lzy.png",q={},I=s(`<h3 id="leetcode" tabindex="-1"><a class="header-anchor" href="#leetcode"><span>LeetCode</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. 刷题的理解
   刷题需要考虑的是算法，而不是语言，所以使用语言只需使用自己熟悉的就行。
   刷题提升的是算法能力，良好的算法能降低我们的时间复杂度和空间复杂度。
   在初始刷题时，必须掌握的是递归的思想，利用递归这个思想可以解大部分的题，然后在理解题后，再通过其他方式来优化算法。
    计算机擅长的是记忆以及速度，而递归可以把这两个优势发挥到极致。
    递归是把大问题分解成小问题，而把这些小问题解决，代码解题思路自然而然就出来了。
   此外，一些递归可以使用动态规划的思想改写，从而优化递归压栈所消耗的时间。
    递归是顶部到底部再回到底部。
    动态规划是通过存储，直接从底部到顶部解决问题。

   如：斐波那契数列，指的是这样一个数列：1、1、2、3、5、8、13、21、34 …… 在数学上，斐波纳契数列定义如下：F <span class="token punctuation">(</span> <span class="token number">0</span> <span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span>，F <span class="token punctuation">(</span> <span class="token number">1</span> <span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1</span> , F <span class="token punctuation">(</span> n <span class="token punctuation">)</span> <span class="token operator">=</span> F <span class="token punctuation">(</span> n - <span class="token number">1</span> <span class="token punctuation">)</span> + F <span class="token punctuation">(</span> n - <span class="token number">2</span> <span class="token punctuation">)</span>（n <span class="token operator">&gt;=</span> <span class="token number">2</span>，n ∈ N*）；
    Fibonacci<span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token builtin class-name">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token builtin class-name">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">else</span> <span class="token builtin class-name">return</span> Fibonacci<span class="token punctuation">(</span>n-1<span class="token punctuation">)</span> + Fibonacci<span class="token punctuation">(</span>n-2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token number">2</span>. 刷题的收获
   因为在总结的过程中，会力求他人能理解代码思路，所以在理清思路的动机过程中，会发现之前的想法可能是错误的，会总结总结着产生新的思路 or 新的解法，或者明白各个解法相互之间的联系。
   从理清他人的代码，再到自己写代码，再到把各个解法用自己的理解串联起来，会有一种 「纸上得来终觉浅，绝知此事要躬行」的感觉。有时候虽然大体的解题框架想到了，但是小的细节方面还是需要自己亲自下手才能体会到。如为什么加这个if？为什么是小于等于？这段代码能带来什么作用？我能不能简化一下这个写法？每一句代码的产生都是有原因的，我们必须要亲身体会。
   所以虽然一道题从看题、理解、自己思考、看别人解法、到重新实现、再到总结出来，可能需要 <span class="token number">3</span>/4 小时，甚至大半天，但我觉得是值得的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="leetcode-1-50" tabindex="-1"><a class="header-anchor" href="#leetcode-1-50"><span>LeetCode 1~50</span></a></h3><h3 id="_1-两数之和" tabindex="-1"><a class="header-anchor" href="#_1-两数之和"><span>1. 两数之和</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 1. 两数之和</span>
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。


<span class="token comment">### 示例</span>
示例1：
       输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2,7</span>,11,15<span class="token punctuation">]</span>, target <span class="token operator">=</span> <span class="token number">9</span>
       输出：<span class="token punctuation">[</span><span class="token number">0,1</span><span class="token punctuation">]</span>
       解释：因为 nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> + nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">9</span> ，返回 <span class="token punctuation">[</span><span class="token number">0</span>, <span class="token number">1</span><span class="token punctuation">]</span> 。
示例2：
       输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3,2</span>,4<span class="token punctuation">]</span>, target <span class="token operator">=</span> <span class="token number">6</span>
       输出：<span class="token punctuation">[</span><span class="token number">1,2</span><span class="token punctuation">]</span>
示例3：
       输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3,3</span><span class="token punctuation">]</span>, target <span class="token operator">=</span> <span class="token number">6</span>
       输出：<span class="token punctuation">[</span><span class="token number">0,1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 双循环暴力解法 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span>
           <span class="token keyword">return</span> <span class="token punctuation">[</span>i<span class="token punctuation">,</span> j<span class="token punctuation">]</span>
       <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 使用 Map */</span>
<span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
     <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">const</span> complement <span class="token operator">=</span> target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>	<span class="token comment">// 计算当前所属数的值 与 target 的差值</span>
       <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>complement<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>complement<span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token punctuation">]</span>
       <span class="token keyword">else</span> map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
     <span class="token punctuation">}</span>
     <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_2-两数相加" tabindex="-1"><a class="header-anchor" href="#_2-两数相加"><span>2. 两数相加</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 2. 两数相加</span>
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 <span class="token number">0</span> 之外，这两个数都不会以 <span class="token number">0</span> 开头。

<span class="token comment">### 示例</span>
示例1：
       输入：l1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2,4</span>,3<span class="token punctuation">]</span>, l2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5,6</span>,4<span class="token punctuation">]</span>
       输出：<span class="token punctuation">[</span><span class="token number">7,0</span>,8<span class="token punctuation">]</span>
       解释：342 + <span class="token number">465</span> <span class="token operator">=</span> <span class="token number">807</span>.
示例2：
       输入：l1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>, l2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
       输出：<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
示例3：
       输入：l1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">9,9</span>,9,9,9,9,9<span class="token punctuation">]</span>, l2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">9,9</span>,9,9<span class="token punctuation">]</span>
       输出：<span class="token punctuation">[</span><span class="token number">8,9</span>,9,9,0,0,0,1<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+`" alt="image-20230316202909144"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">addTwoNumbers</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> curr <span class="token operator">=</span> dummy
  <span class="token keyword">let</span> carry <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>l1 <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">||</span> l2 <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l1 <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sum <span class="token operator">+=</span> l1<span class="token punctuation">.</span>val
      l1 <span class="token operator">=</span> l1<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l2 <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sum <span class="token operator">+=</span> l2<span class="token punctuation">.</span>val
      l2 <span class="token operator">=</span> l2<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    sum <span class="token operator">+=</span> carry
    curr<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>sum <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span>
    carry <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>sum <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span>
    curr <span class="token operator">=</span> curr<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>carry <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    curr<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>carry<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 错误版：未使用链表 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">addTwoNumbers</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> len <span class="token operator">=</span> l1<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> l2<span class="token punctuation">.</span>length <span class="token operator">?</span> l1<span class="token punctuation">.</span>length <span class="token operator">:</span> l2<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
      storage <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
      arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> arri <span class="token operator">=</span> <span class="token punctuation">(</span>l1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>l2<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> storage
    storage <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>arri <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span>
    arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arri <span class="token operator">%</span> <span class="token number">10</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> len <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> storage <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_3-无重复字符的最长子符" tabindex="-1"><a class="header-anchor" href="#_3-无重复字符的最长子符"><span>3. 无重复字符的最长子符</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 3. 无重复字符的最长子符</span>
- 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
- 示例 <span class="token number">1</span>: 输入: s <span class="token operator">=</span> <span class="token string">&quot;pwwkew&quot;</span><span class="token punctuation">;</span>	 输出: <span class="token number">3</span>


<span class="token comment">### 实现思路</span>
  - 先将没有重复的值按顺序放入新数组temp中，
  - 当出现重复数字时，则表示第一个元素的子串出现重复字符，重新以第二个元素为开头继续往下寻找，
  - 在删除第一个元素时，需要i--来重新判断该子串中是否还存在重复现象
  - 若没有重复，则将该值压入temp数组中，并重新计算子串最大值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lengthOfLongestSubstring</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//数组中无被遍历的值</span>
      temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 将不重复的值压入数组栈中</span>
      res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> temp<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 重新计算最长不重复子字符的值</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      temp<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 存在值重复，删除第一个元素(默认为第一个重复)</span>
      i<span class="token operator">--</span><span class="token punctuation">;</span>  <span class="token comment">// 重新计算该轮循环，校检是否存在值重复</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lengthOfLongestSubstring</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> maxLength <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      maxLength <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxLength<span class="token punctuation">,</span> set<span class="token punctuation">.</span>size<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        set<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
        j<span class="token operator">++</span>
      <span class="token punctuation">}</span>
      set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> maxLength
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_4-寻找两个正序数组的中位数" tabindex="-1"><a class="header-anchor" href="#_4-寻找两个正序数组的中位数"><span>4. 寻找两个正序数组的中位数</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 4. 寻找两个正序数组的中位数</span>
给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。
算法的时间复杂度应该为 O<span class="token punctuation">(</span>log <span class="token punctuation">(</span>m+n<span class="token punctuation">))</span> 。


<span class="token comment">### 示例</span>
示例 <span class="token number">1</span>：
       输入：nums1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1,3</span><span class="token punctuation">]</span>, nums2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
       输出：2.00000
       解释：合并数组 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1,2</span>,3<span class="token punctuation">]</span> ，中位数 <span class="token number">2</span>
示例 <span class="token number">2</span>：
       输入：nums1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1,2</span><span class="token punctuation">]</span>, nums2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3,4</span><span class="token punctuation">]</span>
       输出：2.50000
       解释：合并数组 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1,2</span>,3,4<span class="token punctuation">]</span> ，中位数 <span class="token punctuation">(</span><span class="token number">2</span> + <span class="token number">3</span><span class="token punctuation">)</span> / <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">2.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findMedianSortedArrays</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>nums1<span class="token punctuation">,</span> <span class="token operator">...</span>nums2<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length
  <span class="token keyword">return</span> <span class="token operator">!</span><span class="token punctuation">(</span>len <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>len <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">:</span> nums<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_5-最长回文字符串" tabindex="-1"><a class="header-anchor" href="#_5-最长回文字符串"><span>5. 最长回文字符串</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 5. 最长回文字符串</span>
给你一个字符串 s，找到 s 中最长的回文子串。


<span class="token comment">### 题目示例</span>
示例 <span class="token number">1</span>：
       输入：s <span class="token operator">=</span> <span class="token string">&quot;babad&quot;</span>
       输出：<span class="token string">&quot;bab&quot;</span>
       解释：<span class="token string">&quot;aba&quot;</span> 同样是符合题意的答案。
示例 <span class="token number">2</span>：
       输入：s <span class="token operator">=</span> <span class="token string">&quot;cbbd&quot;</span>
       输出：<span class="token string">&quot;bb&quot;</span>


<span class="token comment">### 题目解决方案</span>
<span class="token number">1</span>. 方案一：双指针中心扩展法
	对字符串进行循环，根据循环索引 i 来进行两边扩展对比，如果左边的字符等于右边的字符，则为回文，否则断开循环，并记录在下标为 i 处的最长回文子串，然后与当前所记录的最大回文子串对比，如果比其大则替换

<span class="token number">2</span>. 方案二：动态规划
思路：定义dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>表示子串i～j是否是回文子串，循环s的子串，看是否满足s<span class="token punctuation">[</span>i<span class="token punctuation">]</span>，s<span class="token punctuation">[</span>j<span class="token punctuation">]</span>相等，如果相等，则dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>是否为回文串取决于dp<span class="token punctuation">[</span>i+1<span class="token punctuation">]</span><span class="token punctuation">[</span>j-1<span class="token punctuation">]</span>是否也是回文子串，在循环的过程中不断更新最大回文子串的长度，注意子串的长度是0或1也算回文子串
复杂度：时间复杂度O<span class="token punctuation">(</span>n^2<span class="token punctuation">)</span>，两层循环。空间复杂度O<span class="token punctuation">(</span>n^2<span class="token punctuation">)</span>，即动态规划dp数组的空间。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="双指针中心扩展法-对循环i两边进行扩展对比字符是否相等" tabindex="-1"><a class="header-anchor" href="#双指针中心扩展法-对循环i两边进行扩展对比字符是否相等"><span>双指针中心扩展法（对循环i两边进行扩展对比字符是否相等）</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>s <span class="token operator">=</span> <span class="token string">&#39;badadjda&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 边界条件</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> s<span class="token punctuation">;</span>

  <span class="token keyword">let</span> maxLength <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 最大子回文字符长度</span>
  <span class="token keyword">let</span> startIndex <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment">// 最长回文子串的起始索引</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 分奇偶， 一次遍历，每个字符位置都可能存在奇数或偶数回文</span>
    <span class="token function">helper</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">helper</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">helper</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义左右双指针：当 s[left] 和 s[right] 相等时，不断向外扩展回文字符串的长度</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;</span> maxLength<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        maxLength <span class="token operator">=</span> right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span>
        startIndex <span class="token operator">=</span> left
      <span class="token punctuation">}</span>

      left<span class="token operator">--</span>
      right<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">,</span> startIndex <span class="token operator">+</span> maxLength<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划"><span>动态规划</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">longestPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>s <span class="token operator">=</span> <span class="token string">&quot;ajkldajdjlk&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> dp <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始化数组</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 循环字符串</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// dp[i][j]表示子串i～j是否是回文子串</span>
      <span class="token comment">// 回文子串必须满足s[i]，s[j]相等。并且向外扩展一个字符也相等，即dp[i+1][j-1]也是回文子串</span>
      <span class="token comment">// j - i &lt; 2表示子串小于等于1也是回文串</span>
      dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>j <span class="token operator">-</span> i <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token operator">||</span> dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">//当前回文子串比之前的大，更新最大长度</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;</span> res<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_6-z字形变换" tabindex="-1"><a class="header-anchor" href="#_6-z字形变换"><span>6. Z字形变换</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 6. Z字形变换</span>
    将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
    比如输入字符串为 <span class="token string">&quot;PAYPALISHIRING&quot;</span> 行数为 <span class="token number">3</span> 时，排列如下：
      P   A   H   N
      A P L S I I G
      Y   I   R
    之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如：<span class="token string">&quot;PAHNAPLSIIGYIR&quot;</span>

<span class="token comment">### 题目示例</span>
  示例 <span class="token number">1</span>：
      输入：s <span class="token operator">=</span> <span class="token string">&quot;PAYPALISHIRING&quot;</span>, numRows <span class="token operator">=</span> <span class="token number">3</span>
      输出：<span class="token string">&quot;PAHNAPLSIIGYIR&quot;</span>
  示例 <span class="token number">2</span>：
      输入：s <span class="token operator">=</span> <span class="token string">&quot;PAYPALISHIRING&quot;</span>, numRows <span class="token operator">=</span> <span class="token number">4</span>
      输出：<span class="token string">&quot;PINALSIGYAHRPI&quot;</span>
      解释：
        P     I    N
        A   L S  I G
        Y A   H R
        P     I
  示例 <span class="token number">3</span>：
      输入：s <span class="token operator">=</span> <span class="token string">&quot;A&quot;</span>, numRows <span class="token operator">=</span> <span class="token number">1</span>
      输出：<span class="token string">&quot;A&quot;</span>


<span class="token comment">### 题目理解：</span>
  - 字符串 S 是以 Z 字形为顺序存储的字符串，目标是按行打印。
  - 设 numRows 行字符串分别为 S1，S2,<span class="token punctuation">..</span>.,Sn，
  - 则容易发现：按顺序遍历字符串 S 时，每个字符 c 在 Z 字形中对应的 行索引 先从 S1 增大至 Sn，再从 Sn减少至 S1<span class="token punctuation">..</span>.如此反复 
  - 因此，解决方案为：模拟这个行索引的变化，在遍历 S中把每个字符填到正确的行 res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> 。

<span class="token comment">### 算法流程： 按顺序遍历字符串 s</span>
	<span class="token number">1</span>. res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> c：把每个字符 c 填入对应的 Si
	<span class="token number">2</span>. currentIndex <span class="token operator">+=</span> flag：更新当前字符 c 对应的行索引
	<span class="token number">3</span>. flag <span class="token operator">=</span> -flag：在达到 Z 字形转折点时，执行反向
	
<span class="token comment">### 复杂度分析</span>
	- 时间复杂度 O<span class="token punctuation">(</span>N<span class="token punctuation">)</span>：遍历一遍字符串 S
	- 空间复杂度 O<span class="token punctuation">(</span>N<span class="token punctuation">)</span>：各行字符串共占用 O<span class="token punctuation">(</span>N<span class="token punctuation">)</span>额外空间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">numRows</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">convert</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>s <span class="token operator">=</span> <span class="token string">&quot;PAYPALISHIRING&quot;</span><span class="token punctuation">,</span> numRows <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>numRows <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> 
    <span class="token keyword">return</span> s<span class="token punctuation">;</span>

  <span class="token keyword">const</span> len <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>length<span class="token punctuation">,</span> numRows<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> rows <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> currentIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 记录所在的行索引</span>
  <span class="token keyword">let</span> down <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 记录是否反向遍历</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> c <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rows<span class="token punctuation">[</span>currentIndex<span class="token punctuation">]</span> <span class="token operator">+=</span> c<span class="token punctuation">;</span>

    <span class="token comment">// 如果为第一行 或 最后一行，则反向</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentIndex <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> currentIndex <span class="token operator">==</span> numRows <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> 
      down <span class="token operator">=</span> <span class="token operator">!</span>down<span class="token punctuation">;</span>
    
    <span class="token comment">// 若是为反向，则当前所在行索引往上一行（即索引行 - 1）</span>
    <span class="token comment">// 若是为正向，则当前所在行索引往下一行（即索引行 + 1）</span>
    currentIndex <span class="token operator">+=</span> down <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span>

  <span class="token comment">// 合并 rows 数组为字符串后返回</span>
  <span class="token keyword">return</span> rows<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// PAHNAPLSIIGYIR</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">convert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_7-整数翻转" tabindex="-1"><a class="header-anchor" href="#_7-整数翻转"><span>7. 整数翻转</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 7. 整数翻转</span>
给你一个 <span class="token number">32</span> 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
如果反转后整数超过 <span class="token number">32</span> 位的有符号整数的范围 <span class="token punctuation">[</span>−231,  <span class="token number">231</span> − <span class="token number">1</span><span class="token punctuation">]</span> ，就返回 <span class="token number">0</span>。
假设环境不允许存储 <span class="token number">64</span> 位整数（有符号或无符号）。


<span class="token comment">### 题目示例</span>
示例 <span class="token number">1</span>：输入：x <span class="token operator">=</span> <span class="token number">123</span>		输出：321
示例 <span class="token number">2</span>：输入：x <span class="token operator">=</span> <span class="token parameter variable">-123</span>	输出：-321
示例 <span class="token number">3</span>：输入：x <span class="token operator">=</span> <span class="token number">120</span>		输出：21
示例 <span class="token number">4</span>：输入：x <span class="token operator">=</span> <span class="token number">0</span>			输出：0
提示：-231 <span class="token operator">&lt;=</span> x <span class="token operator">&lt;=</span> <span class="token number">231</span> - <span class="token number">1</span>


<span class="token comment">### 题解</span>
	- 可以通过 try<span class="token punctuation">..</span>.catch 跳出异常 + 反转数字用字符串
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverse</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res <span class="token operator">=</span> res <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> x <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>res <span class="token operator">&gt;</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">||</span> res <span class="token operator">&lt;</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    x <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>x <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 或 x = ~~(x / 10)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_8-字符串转换整数-atoi" tabindex="-1"><a class="header-anchor" href="#_8-字符串转换整数-atoi"><span>8. 字符串转换整数（atoi）</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 8. 字符串转换整数（atoi）</span>
- 请你来实现一个 myAtoi<span class="token punctuation">(</span>string s<span class="token punctuation">)</span> 函数，使其能将字符串转换成一个 <span class="token number">32</span> 位有符号整数（类似 C/C++ 中的 atoi 函数）。

- 函数 myAtoi<span class="token punctuation">(</span>string s<span class="token punctuation">)</span> 的算法如下：
    <span class="token number">1</span>. 读入字符串并丢弃无用的前导空格
    <span class="token number">2</span>. 检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
    <span class="token number">3</span>. 读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
    <span class="token number">4</span>. 将前面步骤读入的这些数字转换为整数（即，<span class="token string">&quot;123&quot;</span> -<span class="token operator">&gt;</span> <span class="token number">123</span>， <span class="token string">&quot;0032&quot;</span> -<span class="token operator">&gt;</span> <span class="token number">32</span>）。如果没有读入数字，则整数为 <span class="token number">0</span> 。必要时更改符号（从步骤 <span class="token number">2</span> 开始）。
    <span class="token number">5</span>. 如果整数数超过 <span class="token number">32</span> 位有符号整数范围 <span class="token punctuation">[</span>−231,  <span class="token number">231</span> − <span class="token number">1</span><span class="token punctuation">]</span> ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 <span class="token number">231</span> − <span class="token number">1</span> 的整数应该被固定为 <span class="token number">231</span> − <span class="token number">1</span> 。
    <span class="token number">6</span>. 返回整数作为最终结果。

注意：
    - 本题中的空白字符只包括空格字符 <span class="token string">&#39; &#39;</span> 。
    - 除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。


<span class="token comment">### 题目示例</span>
示例 <span class="token number">1</span>：
    输入：s <span class="token operator">=</span> <span class="token string">&quot;42&quot;</span>
    输出：42
    解释：加粗的字符串为已经读入的字符，插入符号是当前读取的字符。
    第 <span class="token number">1</span> 步：<span class="token string">&quot;42&quot;</span>（当前没有读入字符，因为没有前导空格）
             ^
    第 <span class="token number">2</span> 步：<span class="token string">&quot;42&quot;</span>（当前没有读入字符，因为这里不存在 <span class="token string">&#39;-&#39;</span> 或者 <span class="token string">&#39;+&#39;</span>）
             ^
    第 <span class="token number">3</span> 步：<span class="token string">&quot;42&quot;</span>（读入 <span class="token string">&quot;42&quot;</span>）
               ^
    解析得到整数 <span class="token number">42</span> 。
    由于 <span class="token string">&quot;42&quot;</span> 在范围 <span class="token punctuation">[</span>-231, <span class="token number">231</span> - <span class="token number">1</span><span class="token punctuation">]</span> 内，最终结果为 <span class="token number">42</span> 。

示例 <span class="token number">2</span>：
    输入：s <span class="token operator">=</span> <span class="token string">&quot;   -42&quot;</span>
    输出：-42
    解释：
    第 <span class="token number">1</span> 步：<span class="token string">&quot;   -42&quot;</span>（读入前导空格，但忽视掉）
                ^
    第 <span class="token number">2</span> 步：<span class="token string">&quot;   -42&quot;</span>（读入 <span class="token string">&#39;-&#39;</span> 字符，所以结果应该是负数）
                 ^
    第 <span class="token number">3</span> 步：<span class="token string">&quot;   -42&quot;</span>（读入 <span class="token string">&quot;42&quot;</span>）
                   ^
    解析得到整数 <span class="token parameter variable">-42</span> 。
    由于 <span class="token string">&quot;-42&quot;</span> 在范围 <span class="token punctuation">[</span>-231, <span class="token number">231</span> - <span class="token number">1</span><span class="token punctuation">]</span> 内，最终结果为 <span class="token parameter variable">-42</span> 。

示例 <span class="token number">3</span>：
    输入：s <span class="token operator">=</span> <span class="token string">&quot;4193 with words&quot;</span>
    输出：4193
    解释：
    第 <span class="token number">1</span> 步：<span class="token string">&quot;4193 with words&quot;</span>（当前没有读入字符，因为没有前导空格）
             ^
    第 <span class="token number">2</span> 步：<span class="token string">&quot;4193 with words&quot;</span>（当前没有读入字符，因为这里不存在 <span class="token string">&#39;-&#39;</span> 或者 <span class="token string">&#39;+&#39;</span>）
             ^
    第 <span class="token number">3</span> 步：<span class="token string">&quot;4193 with words&quot;</span>（读入 <span class="token string">&quot;4193&quot;</span>；由于下一个字符不是一个数字，所以读入停止）
                 ^
    解析得到整数 <span class="token number">4193</span> 。
    由于 <span class="token string">&quot;4193&quot;</span> 在范围 <span class="token punctuation">[</span>-231, <span class="token number">231</span> - <span class="token number">1</span><span class="token punctuation">]</span> 内，最终结果为 <span class="token number">4193</span> 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">myAtoi</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> str <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[-+]?\\d+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>str <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_9-回文数字" tabindex="-1"><a class="header-anchor" href="#_9-回文数字"><span>9. 回文数字</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 题目描述</span>
给你一个整数 x ，如果 x 是一个回文整数，返回 <span class="token boolean">true</span> ；否则，返回 <span class="token boolean">false</span> 。
回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
例如，121 是回文，而 <span class="token number">123</span> 不是。

<span class="token comment">## 题目示例</span>
示例 <span class="token number">1</span>：输入：x <span class="token operator">=</span> <span class="token number">121</span>		输出：true
示例 <span class="token number">2</span>：输入：x <span class="token operator">=</span> <span class="token parameter variable">-121</span>	输出：false
示例 <span class="token number">3</span>：输入：x <span class="token operator">=</span> <span class="token number">10</span>		输出：false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

  <span class="token comment">// 如果 小于零（因为携带负号） 或 个位数为零（最高位不为零） 则不是回文数</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> x <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token comment">// 反转数值</span>
  <span class="token keyword">let</span> temp <span class="token operator">=</span> x<span class="token punctuation">,</span> reverse <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>temp <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> rem <span class="token operator">=</span> temp <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 获取个位数</span>
    temp <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>temp <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// 获取十位数打上的数值</span>
    reverse <span class="token operator">=</span> reverse <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 判断反转后的数字是否相等</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">==</span> reverse<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_10-正则表达式匹配" tabindex="-1"><a class="header-anchor" href="#_10-正则表达式匹配"><span>10. 正则表达式匹配</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 题目描述</span>
给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 <span class="token string">&#39;.&#39;</span> 和 <span class="token string">&#39;*&#39;</span> 的正则表达式匹配。
  - <span class="token string">&#39;.&#39;</span> 匹配任意单个字符
  - <span class="token string">&#39;*&#39;</span> 匹配零个或多个前面的那一个元素
  - 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。


<span class="token comment">## 题目示例</span>
示例 <span class="token number">1</span>：输入：s <span class="token operator">=</span> <span class="token string">&quot;aa&quot;</span>, p <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span>		 输出：false
解释：<span class="token string">&quot;a&quot;</span> 无法匹配 <span class="token string">&quot;aa&quot;</span> 整个字符串。

示例 <span class="token number">2</span>:输入：s <span class="token operator">=</span> <span class="token string">&quot;aa&quot;</span>, p <span class="token operator">=</span> <span class="token string">&quot;a*&quot;</span>		输出：true
解释：因为 <span class="token string">&#39;*&#39;</span> 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 <span class="token string">&#39;a&#39;</span>。因此，字符串 <span class="token string">&quot;aa&quot;</span> 可被视为 <span class="token string">&#39;a&#39;</span> 重复了一次。

示例 <span class="token number">3</span>：输入：s <span class="token operator">=</span> <span class="token string">&quot;ab&quot;</span>, p <span class="token operator">=</span> <span class="token string">&quot;.*&quot;</span>		输出：true
解释：<span class="token string">&quot;.*&quot;</span> 表示可匹配零个或多个（<span class="token string">&#39;*&#39;</span>）任意字符（<span class="token string">&#39;.&#39;</span>）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态规划实现" tabindex="-1"><a class="header-anchor" href="#动态规划实现"><span>动态规划实现</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">p</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">isMatch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> p</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 极端情况：s 和 p 都是空，返回 false</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> p <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

  <span class="token comment">// 初始化数组</span>
  <span class="token keyword">const</span> sLen <span class="token operator">=</span> s<span class="token punctuation">.</span>length
  <span class="token keyword">const</span> pLen <span class="token operator">=</span> p<span class="token punctuation">.</span>length
  <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>sLen <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>pLen <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">// s 和 p 第0个位置是匹配的</span>

  <span class="token comment">// 迭代</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> sLen<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> pLen<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 情况2：如果 s 和 p 当前字符相等，或 p 当前位置为任意字符, 则当前的 dp[i+1][j+1] 可由 dp[i][j] 转移过来</span>
      <span class="token comment">// 当前位置相匹配，则 s 和 p 都向前看一位，如果前面所有字符相匹配，则当前位置前面所有字符也匹配</span>
      <span class="token comment">// 例如：s=&#39;xxxa&#39; p=&#39;xxx.&#39; 或 s=&#39;xxxa&#39; p=&#39;xxxa&#39;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> p<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">||</span> p<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 情况3：进入当前字符不匹配的分支，如果当前 p 是 * ，则有可能匹配</span>
      <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 初始化 dp 第一列, 此时 s 的位置是 0</span>
        <span class="token comment">// 情况1：如果 p 的第 j-1 个位置是 * ,则 j 的状态等于 j-2 的状态</span>
        <span class="token comment">// 例如：s=&#39;&#39; p=&#39;a*&#39; 相当于 p 向前看 2 个位置，如果匹配则 * 相当于重复 0 个字符</span>
        i <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 只执行一遍</span>

        <span class="token comment">// s 当前位置和 p 前一个位置相同，或者 p 前一个位置等于 &#39;.&#39;，则有三种可能</span>
        <span class="token comment">// 其中一种情况能匹配，则当前位置的状态也能匹配</span>
        <span class="token comment">// 1. dp[i+1][j-1]: p向前看2个位置，相当于&#39;*&#39;重复了0次</span>
        <span class="token comment">// 2. dp[i+1][j]: p向前看1个位置，相当于&#39;*&#39;重复了1次</span>
        <span class="token comment">// 3. dp[i][j+1]: s向前看一个位置，相当于&#39;*&#39;重复了n次</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> p<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> p<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">||</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 情况4：s当前位置和 p 前2个位置不匹配，则相当于&#39;*&#39;重复了0次</span>
        <span class="token comment">// 例如 s=&#39;xxxb&#39; p=&#39;xxxa*&#39; 当前位置的状态和 p 向前看2个位置的状态相同</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
          dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> dp<span class="token punctuation">[</span>sLen<span class="token punctuation">]</span><span class="token punctuation">[</span>pLen<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="递归实现" tabindex="-1"><a class="header-anchor" href="#递归实现"><span>递归实现</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">matchStr</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> sIndex<span class="token punctuation">,</span> patternIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 字符串和模式都匹配完成</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>sIndex <span class="token operator">===</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> patternIndex <span class="token operator">===</span> pattern<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token comment">// 字符串还未匹配完，但模式已经匹配完成</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>sIndex <span class="token operator">!==</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> patternIndex <span class="token operator">===</span> pattern<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

  <span class="token comment">// 如果下一位为 &#39;*&#39;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>patternIndex <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> pattern<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> pattern<span class="token punctuation">[</span>patternIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当前字符等于当前匹配的字符 或 当前字符可为任意字符，则产生匹配次数</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      sIndex <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span>
      <span class="token punctuation">(</span>s<span class="token punctuation">[</span>sIndex<span class="token punctuation">]</span> <span class="token operator">===</span> pattern<span class="token punctuation">[</span>patternIndex<span class="token punctuation">]</span> <span class="token operator">||</span> pattern<span class="token punctuation">[</span>patternIndex<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token function">matchStr</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> sIndex<span class="token punctuation">,</span> patternIndex <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">||</span>
        <span class="token function">matchStr</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> sIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> patternIndex <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">||</span>
        <span class="token function">matchStr</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> sIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> patternIndex<span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 不产生匹配，只有模式右移两位</span>
      <span class="token keyword">return</span> <span class="token function">matchStr</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> sIndex<span class="token punctuation">,</span> patternIndex <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 如果下一位不为&#39;*&#39; 且（当前字符等于当前匹配的字符 或 当前字符为任意字符），则模式与字符都后移一位</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    sIndex <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span>
    <span class="token punctuation">(</span>s<span class="token punctuation">[</span>sIndex<span class="token punctuation">]</span> <span class="token operator">===</span> pattern<span class="token punctuation">[</span>patternIndex<span class="token punctuation">]</span> <span class="token operator">||</span> pattern<span class="token punctuation">[</span>patternIndex<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">matchStr</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> sIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> patternIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 上述所有情况都不满足，则为不匹配</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">match</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> pattern</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">||</span> pattern <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token keyword">return</span> <span class="token function">matchStr</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">match</span><span class="token punctuation">(</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">match</span><span class="token punctuation">(</span><span class="token string">&#39;ab&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false true true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_15-三数之和" tabindex="-1"><a class="header-anchor" href="#_15-三数之和"><span>15. 三数之和</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 三数之和</span>
<span class="token comment">### 题目描述</span>
给你一个整数数组 nums ，判断是否存在三元组 <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>, nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span>, nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">]</span> 满足 i <span class="token operator">!=</span> j、i <span class="token operator">!=</span> k 且 j <span class="token operator">!=</span> k ，同时还满足 nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> + nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> + nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> 。请你返回所有和为 <span class="token number">0</span> 且不重复的三元组。
注意：答案中不可以包含重复的三元组。


<span class="token comment">### 示例</span>
示例1
    输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span>-1,0,1,2,-1,-4<span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token punctuation">[</span>-1,-1,2<span class="token punctuation">]</span>,<span class="token punctuation">[</span>-1,0,1<span class="token punctuation">]</span><span class="token punctuation">]</span>
    解释：
      nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> + nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> + nums<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>-1<span class="token punctuation">)</span> + <span class="token number">0</span> + <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">0</span> 。
      nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> + nums<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> + nums<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span> + <span class="token number">1</span> + <span class="token punctuation">(</span>-1<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span> 。
      nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> + nums<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> + nums<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>-1<span class="token punctuation">)</span> + <span class="token number">2</span> + <span class="token punctuation">(</span>-1<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span> 。
      不同的三元组是 <span class="token punctuation">[</span>-1,0,1<span class="token punctuation">]</span> 和 <span class="token punctuation">[</span>-1,-1,2<span class="token punctuation">]</span> 。
    注意，输出的顺序和三元组的顺序并不重要。

示例 <span class="token number">2</span>：
    输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,1<span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token punctuation">]</span>
    解释：唯一可能的三元组和不为 <span class="token number">0</span> 。
    
示例 <span class="token number">3</span>：
    输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0,0</span>,0<span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0,0</span>,0<span class="token punctuation">]</span><span class="token punctuation">]</span>
    解释：唯一可能的三元组和为 <span class="token number">0</span> 。


<span class="token comment">### 解题思路</span>
<span class="token number">1</span>. 给数组排序
<span class="token number">2</span>. 遍历数组，从 <span class="token number">0</span> 遍历到 length - <span class="token number">2</span>
<span class="token number">3</span>. 如果当前的数字等于前一个数字，则跳过这个数
<span class="token number">4</span>. 如果数字不同，则设置 <span class="token assign-left variable">start</span><span class="token operator">=</span>i+1, <span class="token assign-left variable">end</span><span class="token operator">=</span>length-1。
			查看 i+start+end 三个数的和比零大还是小，
				如果比 <span class="token number">0</span> 小，则 stat++
				如果比 <span class="token number">0</span> 大，则 end--
				如果等于 <span class="token number">0</span>，则把这三个数加入到结果中。
<span class="token number">5</span>. 遍历完成后，返回结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
   */</span>
<span class="token keyword">var</span> <span class="token function-variable function">threeSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> nums<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> start <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
      <span class="token keyword">let</span> end <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
          start<span class="token operator">++</span>
          end<span class="token operator">--</span>

          <span class="token comment">// 值去重(防止在 start递增 或 end 递减后出现值重复，导致结果一致)</span>
          <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>start <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            start<span class="token operator">++</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            end<span class="token operator">--</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          start<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          end<span class="token operator">--</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,25),L={id:"_19-删除链表的倒数第-n-个结点",tabindex:"-1"},N={class:"header-anchor",href:"#_19-删除链表的倒数第-n-个结点"},A={href:"https://leetcode.cn/problems/remove-nth-node-from-end-of-list/",target:"_blank",rel:"noopener noreferrer"},S=s(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 19. 删除链表的倒数第 N 个结点</span>
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。


<span class="token comment">### 示例</span>
示例1：
    输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1,2</span>,3,4,5<span class="token punctuation">]</span>, n <span class="token operator">=</span> <span class="token number">2</span>
    输出：<span class="token punctuation">[</span><span class="token number">1,2</span>,3,5<span class="token punctuation">]</span>
示例 <span class="token number">2</span>：
    输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>, n <span class="token operator">=</span> <span class="token number">1</span>
    输出：<span class="token punctuation">[</span><span class="token punctuation">]</span>
    
示例 <span class="token number">3</span>：
    输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1,2</span><span class="token punctuation">]</span>, n <span class="token operator">=</span> <span class="token number">1</span>
    输出：<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>


<span class="token comment">### 题解：快慢双指针解题</span>
双指针的经典应用，如果要删除倒数第n个节点，让 fast 先移动 n 步，然后让 fast 和 slow 同时移动，直到 fast 指向链表末尾。删掉slow所指向的节点就可以了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt="image-20230320181727033"></p><h4 id="快慢双指针实现" tabindex="-1"><a class="header-anchor" href="#快慢双指针实现"><span>快慢双指针实现</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeNthFromEnd</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span>
  <span class="token keyword">let</span> slow <span class="token operator">=</span> fast <span class="token operator">=</span> dummy
  
  <span class="token comment">// 让快指针先走 n 步</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token operator">--</span><span class="token punctuation">)</span> fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next
  <span class="token comment">// 防止下面遍历的错误</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>fast <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next
  
  <span class="token comment">// 让双指针同时走，当快指针指向 null 时说明快指针抵达链尾，此时慢指针抵达倒数第 N 个结点处</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 删除倒数第 N 个结点</span>
  slow<span class="token punctuation">.</span>next <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
  
  <span class="token comment">// 返回头部节点</span>
  <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,1),M={id:"_20-有效的括号",tabindex:"-1"},P={class:"header-anchor",href:"#_20-有效的括号"},R={href:"https://leetcode.cn/problems/valid-parentheses/",target:"_blank",rel:"noopener noreferrer"},C=s(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 20. 有效的括号</span>
给定一个只包括 <span class="token string">&#39;(&#39;</span>，<span class="token string">&#39;)&#39;</span>，<span class="token string">&#39;{&#39;</span>，<span class="token string">&#39;}&#39;</span>，<span class="token string">&#39;[&#39;</span>，<span class="token string">&#39;]&#39;</span> 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    每个右括号都有一个对应的相同类型的左括号。


<span class="token comment">### 示例</span>
示例 <span class="token number">1</span>：
    输入：s <span class="token operator">=</span> <span class="token string">&quot;()&quot;</span>
    输出：true
示例 <span class="token number">2</span>：
    输入：s <span class="token operator">=</span> <span class="token string">&quot;()[]{}&quot;</span>
    输出：true
示例 <span class="token number">3</span>：
    输入：s <span class="token operator">=</span> <span class="token string">&quot;(]&quot;</span>
    输出：false


<span class="token comment">### 题解思路（使用 stack 先进后出的特性来解决）</span>
<span class="token number">1</span>. 创建一个 HashMap，把括号配对放进去。
<span class="token number">2</span>. 创建一个 stack（object），for 循环遍历字符串：对于每一个字符，如果 map 里有这个 key，那说明它是一个左括号，从 map 里取得相应的有括号，把它 push 进 stack 里。否则，它就是有括号，需要 pop 出 stack 里的第一个字符，然后看它是否等于当前的字符。如果不相符，则返回 false。
<span class="token number">3</span>. 循环结束后，如果 stack 不为空，说明还剩一些左括号没有被闭合，返回 false。否则返回 true。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用栈先进后出特性实现" tabindex="-1"><a class="header-anchor" href="#使用栈先进后出特性实现"><span>使用栈先进后出特性实现</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> hashMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  hashMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;(&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span>
  hashMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;{&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;}&#39;</span><span class="token punctuation">)</span>
  hashMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;[&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;]&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断是左括号还是右括号，若是左括号添加一个右括号进栈，若是右括号则出栈并判断是否跟当前值一致</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>hashMap<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>hashMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!==</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 如果最终栈还存在值，说明不是有效的括号</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,1),H={id:"_21-合并两个有序链表",tabindex:"-1"},Z={class:"header-anchor",href:"#_21-合并两个有序链表"},B={href:"https://leetcode.cn/problems/merge-two-sorted-lists/",target:"_blank",rel:"noopener noreferrer"},D=s(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 21. 合并两个有序链表</span>
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 


<span class="token comment">### 示例 </span>
示例 <span class="token number">1</span>：
    输入：l1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1,2</span>,4<span class="token punctuation">]</span>, l2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1,3</span>,4<span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token number">1,1</span>,2,3,4,4<span class="token punctuation">]</span>
示例 <span class="token number">2</span>：
    输入：l1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>, l2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token punctuation">]</span>
示例 <span class="token number">3</span>：
    输入：l1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>, l2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="image-20230321095756966"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">list1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">list2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">list1<span class="token punctuation">,</span> list2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> dummy <span class="token operator">=</span> cur

  <span class="token comment">// 当 list1 和 list2 都不为空节点时，进行对比</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>list1 <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> list2 <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>list1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> list2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cur<span class="token punctuation">.</span>next <span class="token operator">=</span> list1
      list1 <span class="token operator">=</span> list1<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      cur<span class="token punctuation">.</span>next <span class="token operator">=</span> list2
      list2 <span class="token operator">=</span> list2<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token comment">// cur 指向下一个节点</span>
    cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>

  <span class="token comment">// 获取剩余的节点</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>list1 <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> list1
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>list2 <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> list2
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,1),O={id:"_24-两两交换链表中的节点",tabindex:"-1"},Q={class:"header-anchor",href:"#_24-两两交换链表中的节点"},F={href:"https://leetcode.cn/problems/swap-nodes-in-pairs/",target:"_blank",rel:"noopener noreferrer"},G=s(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 24. 两两交换链表中的节点</span>
给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。


<span class="token comment">### 示例</span>
示例 <span class="token number">1</span>：
    输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1,2</span>,3,4<span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token number">2,1</span>,4,3<span class="token punctuation">]</span>
示例 <span class="token number">2</span>：
    输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token punctuation">]</span>
示例 <span class="token number">3</span>：
    输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+k+`" alt="image-20230328091552836"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">swapPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 0号节点 */</span>
  <span class="token keyword">const</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  dummy<span class="token punctuation">.</span>next <span class="token operator">=</span> head
  <span class="token doc-comment comment">/** 当前节点为0号节点 */</span>
  <span class="token keyword">let</span> current <span class="token operator">=</span> dummy

  <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> current<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 两个节点指向交换 */</span>
    <span class="token keyword">const</span> n1 <span class="token operator">=</span> current<span class="token punctuation">.</span>next
    <span class="token keyword">const</span> n2 <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
    current<span class="token punctuation">.</span>next <span class="token operator">=</span> n2
    n1<span class="token punctuation">.</span>next <span class="token operator">=</span> n2<span class="token punctuation">.</span>next
    n2<span class="token punctuation">.</span>next <span class="token operator">=</span> n1
    <span class="token comment">// 把下下个节点作为当前节点</span>
    current <span class="token operator">=</span> n1
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+'" alt="image-20230328092215988"></p></blockquote>',1),J={id:"_49-字母异位词分组",tabindex:"-1"},T={class:"header-anchor",href:"#_49-字母异位词分组"},z={href:"https://leetcode.cn/problems/group-anagrams/",target:"_blank",rel:"noopener noreferrer"},Y=s(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 49. 字母异位词分组</span>
给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。


<span class="token comment">### 示例</span>
示例 <span class="token number">1</span>:
 输入: strs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;eat&quot;</span>, <span class="token string">&quot;tea&quot;</span>, <span class="token string">&quot;tan&quot;</span>, <span class="token string">&quot;ate&quot;</span>, <span class="token string">&quot;nat&quot;</span>, <span class="token string">&quot;bat&quot;</span><span class="token punctuation">]</span>
 输出: <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;bat&quot;</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token string">&quot;nat&quot;</span>,<span class="token string">&quot;tan&quot;</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token string">&quot;ate&quot;</span>,<span class="token string">&quot;eat&quot;</span>,<span class="token string">&quot;tea&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
示例 <span class="token number">2</span>:
 输入: strs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
 输出: <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
示例 <span class="token number">3</span>:
 输入: strs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">]</span>
 输出: <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>


<span class="token comment">### 解决方案</span>
- 通过把字符串排序，然后判断是否一致再放入同一个数组
- 使用 hashMap
		<span class="token number">1</span>. 检查是否为空数组
		<span class="token number">2</span>. 建立一个长度为 <span class="token number">26</span> 的数组，起始值为 <span class="token number">0</span>
		<span class="token number">3</span>. 遍历所有字符串，将字母的出现频率放到数组的对应位置里（利用 ASCII 码）
		<span class="token number">4</span>. 遍历数组，按照相同字母出现频率进行分组归类（使用 hashMap）
		<span class="token number">5</span>. 遍历 map，将结果返回
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">strs</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">groupAnagrams</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">strs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 边界条件 */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>strs<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">const</span> hashMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> str <span class="token keyword">of</span> strs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> characters <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">26</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 把字符根据 ASCII 码值来让数组相应索引下的值 + 1</span>
      <span class="token keyword">const</span> ascii <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">97</span>
      characters<span class="token punctuation">[</span>ascii<span class="token punctuation">]</span><span class="token operator">++</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 要使用一个符号分隔开，否则会产生缺陷</span>
    <span class="token comment">// （如前一个值为26后一个值为2 与 前一个值为2后一个值为62，此时会产生问题）</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> characters<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>hashMap<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      hashMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>hashMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">,</span> str<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      hashMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">[</span>str<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 把 hashMap 值取出作为返回值 */</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>_<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> hashMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="leetcode-51-100" tabindex="-1"><a class="header-anchor" href="#leetcode-51-100"><span>LeetCode 51~100</span></a></h3><h3 id="_51-n皇后" tabindex="-1"><a class="header-anchor" href="#_51-n皇后"><span>51. N皇后</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 51. N皇后</span>
按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。
n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 <span class="token string">&#39;Q&#39;</span> 和 <span class="token string">&#39;.&#39;</span> 分别代表了皇后和空位。

示例1：
    输入：n <span class="token operator">=</span> <span class="token number">4</span>
    输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;.Q..&quot;</span>,<span class="token string">&quot;...Q&quot;</span>,<span class="token string">&quot;Q...&quot;</span>,<span class="token string">&quot;..Q.&quot;</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token string">&quot;..Q.&quot;</span>,<span class="token string">&quot;Q...&quot;</span>,<span class="token string">&quot;...Q&quot;</span>,<span class="token string">&quot;.Q..&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    解释：如上图所示，4 皇后问题存在两个不同的解法。
示例2：
    输入：n <span class="token operator">=</span> <span class="token number">1</span>
    输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;Q&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+'" alt="N皇后"></p><p><img src="'+v+`" alt="image.png"></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 错误解法</span>
  - 每一行，选一个格子置为<span class="token string">&quot;Q&quot;</span>，一行行往下选，第一行有四种选择。
  - 在选下一行的皇后时，为了避免列的冲突，有三种选择。
  - 继续选下去，可能会遇到对角线冲突，继续选下去没有意义，得不出合法的解。需要回溯。


<span class="token comment">## 回溯套路</span>
<span class="token number">1</span>. 遍历枚举出所有可能的选择。
<span class="token number">2</span>. 依次尝试这些选择：作出一种选择，并往下递归。
<span class="token number">3</span>. 如果这个选择产生不出正确的解，要撤销这个选择（将当前的 <span class="token string">&quot;Q&quot;</span> 恢复为 <span class="token string">&quot;.&quot;</span>），回到之前的状态，并作出下一个可用的选择。
<span class="token number">4</span>. 选择、探索、撤销选择。识别出死胡同，就回溯，尝试下一个点，不做无效的搜索。


<span class="token comment">## 思路修正</span>
在枚举选择时，应规避行、列的冲突和对角线冲突作为约束，进行充分剪枝。
即遍历之前的行，如果当前的格子和之前的皇后们同列或同对角线，则跳过该点
当所有可选的选择迭代完，当前递归分支就结束，撤销最后的选择，回到上一层，切入另一个分支。
当可填完所有行，则可生成一个解并加入解集，并返回，开始回溯，继续寻找完整解。


<span class="token comment">## 回溯三要点</span>
<span class="token number">1</span>. 选择，决定了搜索空间，决定了搜索空间有哪些节点。
<span class="token number">2</span>. 约束，用来剪枝，避免进入无效的分支。
<span class="token number">3</span>. 目标，决定了什么时候捕获有效的解，提前结束递归，开始回溯。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">solveNQueens</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> board <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>     <span class="token comment">// 棋盘的初始化</span>
    board<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">row<span class="token punctuation">,</span> col</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> row<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 之前的行</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 所有的列</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;Q&#39;</span> <span class="token operator">&amp;&amp;</span>   <span class="token comment">// 发现了皇后，并且和自己同列/对角线</span>
          <span class="token punctuation">(</span>j <span class="token operator">==</span> col <span class="token operator">||</span> i <span class="token operator">+</span> j <span class="token operator">===</span> row <span class="token operator">+</span> col <span class="token operator">||</span> i <span class="token operator">-</span> j <span class="token operator">===</span> row <span class="token operator">-</span> col<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>             <span class="token comment">// 不是合法的选择</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">helper</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>   <span class="token comment">// 放置当前行的皇后</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>           <span class="token comment">// 递归的出口，超出了最后一行</span>
      <span class="token keyword">const</span> stringsBoard <span class="token operator">=</span> board<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 拷贝一份board</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stringsBoard<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> stringsBoard<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将每一行拼成字符串</span>
      <span class="token punctuation">}</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stringsBoard<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 推入res数组</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 枚举出所有选择</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isValid</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> col<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>          <span class="token comment">// 剪掉无效的选择</span>
        board<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Q&quot;</span><span class="token punctuation">;</span>          <span class="token comment">// 作出选择，放置皇后</span>
        <span class="token function">helper</span><span class="token punctuation">(</span>row <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment">// 继续选择，往下递归</span>
        board<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">;</span>          <span class="token comment">// 撤销当前选择</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">helper</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 从第0行开始放置</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
	* 优化解法：本题必须记录之前放置皇后的位置，才能结合约束条件去做剪枝。
	*	每次都调用 isValid 遍历一遍前面的格子，效率是不优的。
	* 最好是用三个数组或 Set 去记录出现过皇后的列们、正对角线们、反对角线们，用空间换取时间。
*/</span>
<span class="token keyword">const</span> <span class="token function-variable function">solveNQueens</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> board <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    board<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> cols <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 列集，记录出现过皇后的列</span>
  <span class="token keyword">const</span> diag1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正对角线集</span>
  <span class="token keyword">const</span> diag2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 反对角线集</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">helper</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> stringsBoard <span class="token operator">=</span> board<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stringsBoard<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> stringsBoard<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stringsBoard<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果当前点的所在的列，所在的对角线都没有皇后，即可选择，否则，跳过</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cols<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>col<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>diag1<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>row <span class="token operator">+</span> col<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>diag2<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>row <span class="token operator">-</span> col<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        board<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Q&#39;</span><span class="token punctuation">;</span>  <span class="token comment">// 放置皇后</span>
        cols<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>col<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// 记录放了皇后的列</span>
        diag2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>row <span class="token operator">-</span> col<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 记录放了皇后的正对角线</span>
        diag1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>row <span class="token operator">+</span> col<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 记录放了皇后的负对角线</span>
        <span class="token function">helper</span><span class="token punctuation">(</span>row <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        board<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">;</span>  <span class="token comment">// 撤销该点的皇后</span>
        cols<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>col<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// 对应的记录也删一下</span>
        diag2<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>row <span class="token operator">-</span> col<span class="token punctuation">)</span><span class="token punctuation">;</span>
        diag1<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>row <span class="token operator">+</span> col<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">helper</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,4),E={id:"_53-最大子数组和",tabindex:"-1"},V={class:"header-anchor",href:"#_53-最大子数组和"},K={href:"https://leetcode.cn/problems/maximum-subarray/",target:"_blank",rel:"noopener noreferrer"},U=s(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 53. 最大子数组和</span>
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
子数组 是数组中的一个连续部分。

 
<span class="token comment">### 示例</span>
示例 <span class="token number">1</span>：
    输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span>-2,1,-3,4,-1,2,1,-5,4<span class="token punctuation">]</span>
    输出：6
    解释：连续子数组 <span class="token punctuation">[</span><span class="token number">4</span>,-1,2,1<span class="token punctuation">]</span> 的和最大，为 <span class="token number">6</span> 。
示例 <span class="token number">2</span>：
    输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    输出：1
示例 <span class="token number">3</span>：
    输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5,4</span>,-1,7,8<span class="token punctuation">]</span>
    输出：23

提示：
    <span class="token number">1</span> <span class="token operator">&lt;=</span> nums.length <span class="token operator">&lt;=</span> <span class="token number">105</span>
    <span class="token parameter variable">-104</span> <span class="token operator">&lt;=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> <span class="token number">104</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxSubArray</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> memos <span class="token operator">=</span> <span class="token punctuation">[</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>

  <span class="token doc-comment comment">/** 动态规划：计算在连续的情况下最大的值 */</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    memos<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> memos<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 循环获取最大的值 */</span>
  <span class="token keyword">let</span> max <span class="token operator">=</span> memos<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> memos<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> memos<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> max
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,1),X={id:"_54-螺旋矩阵",tabindex:"-1"},W={class:"header-anchor",href:"#_54-螺旋矩阵"},$={href:"https://leetcode.cn/problems/spiral-matrix/",target:"_blank",rel:"noopener noreferrer"},nn=s(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 54. 螺旋矩阵</span>
给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。


<span class="token comment">### 示例</span>
示例 <span class="token number">1</span>：
    输入：matrix <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1,2</span>,3<span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">4,5</span>,6<span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">7,8</span>,9<span class="token punctuation">]</span><span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token number">1,2</span>,3,6,9,8,7,4,5<span class="token punctuation">]</span>
示例 <span class="token number">2</span>：
    输入：matrix <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1,2</span>,3,4<span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">5,6</span>,7,8<span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">9,10</span>,11,12<span class="token punctuation">]</span><span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token number">1,2</span>,3,4,8,12,11,10,9,5,6,7<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+`" alt="image-20230331090413645"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">spiralOrder</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 上、下、左、右边角的坐标（边界）</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token keyword">let</span> top <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> bottom <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

  <span class="token comment">// 控制方向</span>
  <span class="token keyword">let</span> direction <span class="token operator">=</span> <span class="token string">&#39;right&#39;</span>
	<span class="token comment">// 导出的结果</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
	
  <span class="token comment">// 在满足条件时，循环执行</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right <span class="token operator">&amp;&amp;</span> top <span class="token operator">&lt;=</span> bottom<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>direction <span class="token operator">===</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> left<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>top<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 向右增加后，下沉一行，并且方向转为向下</span>
      top<span class="token operator">++</span>
      direction <span class="token operator">=</span> <span class="token string">&#39;down&#39;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>direction <span class="token operator">===</span> <span class="token string">&#39;down&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> top<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> bottom<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 向下增加后，左移一列，并且方向向左</span>
      right<span class="token operator">--</span>
      direction <span class="token operator">=</span> <span class="token string">&#39;left&#39;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>direction <span class="token operator">===</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> right<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> left<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>bottom<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 向左增加后，上升一行，并且方向向上</span>
      bottom<span class="token operator">--</span>
      direction <span class="token operator">=</span> <span class="token string">&#39;up&#39;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>direction <span class="token operator">===</span> <span class="token string">&#39;up&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> bottom<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> top<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 向上增加后，右移一列，并且方向向右</span>
      left<span class="token operator">++</span>
      direction <span class="token operator">=</span> <span class="token string">&#39;right&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,1),sn={id:"_55-跳跃游戏",tabindex:"-1"},an={class:"header-anchor",href:"#_55-跳跃游戏"},pn={href:"https://leetcode.cn/problems/jump-game/",target:"_blank",rel:"noopener noreferrer"},tn=s(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 55. 跳跃游戏</span>
给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
数组中的每个元素代表你在该位置可以跳跃的最大长度。
判断你是否能够到达最后一个下标。


<span class="token comment">### 示例</span>
示例 <span class="token number">1</span>：
    输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2,3</span>,1,1,4<span class="token punctuation">]</span>
    输出：true
    解释：可以先跳 <span class="token number">1</span> 步，从下标 <span class="token number">0</span> 到达下标 <span class="token number">1</span>, 然后再从下标 <span class="token number">1</span> 跳 <span class="token number">3</span> 步到达最后一个下标。
示例 <span class="token number">2</span>：
    输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3,2</span>,1,0,4<span class="token punctuation">]</span>
    输出：false
    解释：无论怎样，总会到达下标为 <span class="token number">3</span> 的位置。但该下标的最大跳跃长度是 <span class="token number">0</span> ， 所以永远不可能到达最后一个下标。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="递归-动态规划实现跳跃游戏" tabindex="-1"><a class="header-anchor" href="#递归-动态规划实现跳跃游戏"><span>递归+动态规划实现跳跃游戏</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">canJump</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> totalLen <span class="token operator">=</span> nums<span class="token punctuation">.</span>length
 	<span class="token comment">// 使用 memo 缓存路径是否可行来实现动态规划</span>
  <span class="token keyword">const</span> memo <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>totalLen<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment">// memo值：0未知、1通、-1不通</span>
  memo<span class="token punctuation">[</span>totalLen <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 走到最后一步为 true</span>

  <span class="token doc-comment comment">/** 跳跃的递归算法 */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">jump</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果为1，则说明该路径是可以到达最后一个下标的</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>memo<span class="token punctuation">[</span>position<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token comment">// 如果为-1，则说明该路径肯定是不可以到达最后一个下标的</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>memo<span class="token punctuation">[</span>position<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

    <span class="token comment">// 循环递归</span>
    <span class="token keyword">const</span> maxJump <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>position <span class="token operator">+</span> nums<span class="token punctuation">[</span>position<span class="token punctuation">]</span><span class="token punctuation">,</span> totalLen <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> position <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> maxJump<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> jumpResult <span class="token operator">=</span> <span class="token function">jump</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>

      <span class="token comment">// 如果为 true，则说明该路径是可以到达最后一个下标的；否则可能是未知情况，需要继续遍历</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>jumpResult <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        memo<span class="token punctuation">[</span>position<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 若都没有返回 true，则为无效路径</span>
    memo<span class="token punctuation">[</span>position<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">jump</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="双层遍历-动态规划实现跳跃游戏" tabindex="-1"><a class="header-anchor" href="#双层遍历-动态规划实现跳跃游戏"><span>双层遍历+动态规划实现跳跃游戏</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">canJump</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> totalLen <span class="token operator">=</span> nums<span class="token punctuation">.</span>length
 	<span class="token comment">// 使用 memo 缓存路径是否可行来实现动态规划</span>
  <span class="token keyword">const</span> memo <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>totalLen<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment">// memo值：0未知、1通、-1不通</span>
  memo<span class="token punctuation">[</span>totalLen <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 走到最后一步为 true</span>

  <span class="token comment">// 逆序遍历</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> totalLen <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 遍历是否能到达最后一步</span>
    <span class="token keyword">const</span> maxJump <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>i <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> totalLen <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> maxJump<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>memo<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        memo<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 遍历后查看首位是否能到达最后一步</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>memo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="贪心算法实现跳跃游戏" tabindex="-1"><a class="header-anchor" href="#贪心算法实现跳跃游戏"><span>贪心算法实现跳跃游戏</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">canJump</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> maxJump <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

  <span class="token comment">// 逆序遍历</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果 当前下标 + 当前下标的值 &gt;= 最大跳跃的步，则说明可以到达终点</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> maxJump<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      maxJump <span class="token operator">=</span> i
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 如果当可跳跃步所定位的下标到索引0处，则说明可以达到终点</span>
  <span class="token keyword">return</span> maxJump <span class="token operator">===</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,1),en={id:"_56-合并区间",tabindex:"-1"},on={class:"header-anchor",href:"#_56-合并区间"},cn={href:"https://leetcode.cn/problems/merge-intervals/",target:"_blank",rel:"noopener noreferrer"},ln=s(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 56. 合并区间</span>
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>starti, endi<span class="token punctuation">]</span> 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。


<span class="token comment">### 示例</span>
示例 <span class="token number">1</span>：
    输入：intervals <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1,3</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">2,6</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">8,10</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">15,18</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1,6</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">8,10</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">15,18</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    解释：区间 <span class="token punctuation">[</span><span class="token number">1,3</span><span class="token punctuation">]</span> 和 <span class="token punctuation">[</span><span class="token number">2,6</span><span class="token punctuation">]</span> 重叠, 将它们合并为 <span class="token punctuation">[</span><span class="token number">1,6</span><span class="token punctuation">]</span>.
示例 <span class="token number">2</span>：
    输入：intervals <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1,4</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">4,5</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1,5</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    解释：区间 <span class="token punctuation">[</span><span class="token number">1,4</span><span class="token punctuation">]</span> 和 <span class="token punctuation">[</span><span class="token number">4,5</span><span class="token punctuation">]</span> 可被视为重叠区间。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">intervals</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">intervals</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 边界判定</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>intervals<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> intervals

    <span class="token comment">// 对数组进行排序，防止乱序无法正确对比</span>
    intervals<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> curr <span class="token operator">=</span> intervals<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// 当前缓存的数组项</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 导出的结果</span>

    <span class="token comment">// 遍历</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> interval <span class="token keyword">of</span> intervals<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果当前缓存的右区间 ≥ 当前区间的左区间，则把当前区间的左区间记录</span>
        <span class="token comment">// 否则把缓存区间放入结果中，并把当前区间作为新缓存存储</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> interval<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            curr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>interval<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> curr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curr<span class="token punctuation">)</span>
            curr <span class="token operator">=</span> interval
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 防止 curr 中仍然有值未放入 result 中</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>curr<span class="token punctuation">.</span>length <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curr<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,1),un={id:"_57-插入区间",tabindex:"-1"},rn={class:"header-anchor",href:"#_57-插入区间"},kn={href:"https://leetcode.cn/problems/insert-interval/",target:"_blank",rel:"noopener noreferrer"},dn=s(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 57. 插入区间</span>
给你一个 无重叠的 ，按照区间起始端点排序的区间列表。
在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

 
<span class="token comment">### 示例</span>
示例 <span class="token number">1</span>：
    输入：intervals <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1,3</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">6,9</span><span class="token punctuation">]</span><span class="token punctuation">]</span>, newInterval <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2,5</span><span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1,5</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">6,9</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
示例 <span class="token number">2</span>：
    输入：intervals <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1,2</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">3,5</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">6,7</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">8,10</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">12,16</span><span class="token punctuation">]</span><span class="token punctuation">]</span>, newInterval <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4,8</span><span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1,2</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">3,10</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">12,16</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    解释：这是因为新的区间 <span class="token punctuation">[</span><span class="token number">4,8</span><span class="token punctuation">]</span> 与 <span class="token punctuation">[</span><span class="token number">3,5</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">6,7</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">8,10</span><span class="token punctuation">]</span> 重叠。
示例 <span class="token number">3</span>：
    输入：intervals <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>, newInterval <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5,7</span><span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">5,7</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
示例 <span class="token number">4</span>：
    输入：intervals <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1,5</span><span class="token punctuation">]</span><span class="token punctuation">]</span>, newInterval <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2,3</span><span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1,5</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
示例 <span class="token number">5</span>：
    输入：intervals <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1,5</span><span class="token punctuation">]</span><span class="token punctuation">]</span>, newInterval <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2,7</span><span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1,7</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">intervals</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">newInterval</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">insert</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">intervals<span class="token punctuation">,</span> newInterval</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    intervals <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>intervals<span class="token punctuation">,</span> newInterval<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token comment">// 边界判定</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>intervals<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> intervals

    <span class="token comment">// 对数组进行排序，防止乱序无法正确对比</span>
    intervals<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> curr <span class="token operator">=</span> intervals<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// 当前缓存的数组项</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 导出的结果</span>

    <span class="token comment">// 遍历</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> interval <span class="token keyword">of</span> intervals<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果当前缓存的右区间 ≥ 当前区间的左区间，则把当前区间的左区间记录</span>
        <span class="token comment">// 否则把缓存区间放入结果中，并把当前区间作为新缓存存储</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> interval<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            curr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>interval<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> curr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curr<span class="token punctuation">)</span>
            curr <span class="token operator">=</span> interval
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 防止 curr 中仍然有值未放入 result 中</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>curr<span class="token punctuation">.</span>length <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curr<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,1),mn={id:"_62-不同路径",tabindex:"-1"},vn={class:"header-anchor",href:"#_62-不同路径"},bn={href:"https://leetcode.cn/problems/unique-paths/",target:"_blank",rel:"noopener noreferrer"},hn=s(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 62. 不同路径</span>
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
问总共有多少条不同的路径？

 
<span class="token comment">### 示例</span>
示例 <span class="token number">1</span>：
    输入：m <span class="token operator">=</span> <span class="token number">3</span>, n <span class="token operator">=</span> <span class="token number">7</span>
    输出：28
示例 <span class="token number">2</span>：
    输入：m <span class="token operator">=</span> <span class="token number">3</span>, n <span class="token operator">=</span> <span class="token number">2</span>
    输出：3
    解释：
        从左上角开始，总共有 <span class="token number">3</span> 条路径可以到达右下角。
        <span class="token number">1</span>. 向右 -<span class="token operator">&gt;</span> 向下 -<span class="token operator">&gt;</span> 向下
        <span class="token number">2</span>. 向下 -<span class="token operator">&gt;</span> 向下 -<span class="token operator">&gt;</span> 向右
        <span class="token number">3</span>. 向下 -<span class="token operator">&gt;</span> 向右 -<span class="token operator">&gt;</span> 向下
示例 <span class="token number">3</span>：
    输入：m <span class="token operator">=</span> <span class="token number">7</span>, n <span class="token operator">=</span> <span class="token number">3</span>
    输出：28
示例 <span class="token number">4</span>：
    输入：m <span class="token operator">=</span> <span class="token number">3</span>, n <span class="token operator">=</span> <span class="token number">3</span>
    输出：6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+`" alt="image-20230517204939065"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">m</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">uniquePaths</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 初始化 */</span>
    <span class="token keyword">const</span> memo <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        memo<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> row <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        memo<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        memo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/** 动态规划计算 */</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> row <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> col <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            memo<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> memo<span class="token punctuation">[</span>row <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">+</span> memo<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 获取最后的值</span>
    <span class="token keyword">return</span> memo<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,1),gn={id:"_66-加一",tabindex:"-1"},wn={class:"header-anchor",href:"#_66-加一"},yn={href:"https://leetcode.cn/problems/plus-one/",target:"_blank",rel:"noopener noreferrer"},fn=s(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 66. 加一</span>
给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
你可以假设除了整数 <span class="token number">0</span> 之外，这个整数不会以零开头。

 
<span class="token comment">### 示例</span>
示例 <span class="token number">1</span>：
    输入：digits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1,2</span>,3<span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token number">1,2</span>,4<span class="token punctuation">]</span>
    解释：输入数组表示数字 <span class="token number">123</span>。
示例 <span class="token number">2</span>：
    输入：digits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4,3</span>,2,1<span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token number">4,3</span>,2,2<span class="token punctuation">]</span>
    解释：输入数组表示数字 <span class="token number">4321</span>。
示例 <span class="token number">3</span>：
    输入：digits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">digits</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">plusOne</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">digits</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> digits<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 当原值为9，+1则会使得数组前一个值也+1</span>
        <span class="token comment">// 否则，数组的+1到此为止</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">++</span>
            <span class="token keyword">return</span> digits
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">...</span>digits<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">digits</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">plusOne</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">digits</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">BigInt</span><span class="token punctuation">(</span>digits<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1n</span><span class="token punctuation">)</span> <span class="token operator">+</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,1),xn={id:"_70-爬楼梯",tabindex:"-1"},_n={class:"header-anchor",href:"#_70-爬楼梯"},jn={href:"https://leetcode.cn/problems/climbing-stairs/",target:"_blank",rel:"noopener noreferrer"},qn=s(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 70. 爬楼梯</span>
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 <span class="token number">1</span> 或 <span class="token number">2</span> 个台阶。你有多少种不同的方法可以爬到楼顶呢？

 
<span class="token comment">### 示例</span>
示例 <span class="token number">1</span>：
    输入：n <span class="token operator">=</span> <span class="token number">2</span>
    输出：2
    解释：有两种方法可以爬到楼顶。
      <span class="token number">1</span>. <span class="token number">1</span> 阶 + <span class="token number">1</span> 阶
      <span class="token number">2</span>. <span class="token number">2</span> 阶
示例 <span class="token number">2</span>：
    输入：n <span class="token operator">=</span> <span class="token number">3</span>
    输出：3
    解释：有三种方法可以爬到楼顶。
      <span class="token number">1</span>. <span class="token number">1</span> 阶 + <span class="token number">1</span> 阶 + <span class="token number">1</span> 阶
      <span class="token number">2</span>. <span class="token number">1</span> 阶 + <span class="token number">2</span> 阶
      <span class="token number">3</span>. <span class="token number">2</span> 阶 + <span class="token number">1</span> 阶
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">climbStairs</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> memo <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    memo<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    memo<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        memo<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> memo<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> memo<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> memo<span class="token punctuation">[</span>n<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,1),In={id:"_73-矩阵置零",tabindex:"-1"},Ln={class:"header-anchor",href:"#_73-矩阵置零"},Nn={href:"https://leetcode.cn/problems/set-matrix-zeroes/",target:"_blank",rel:"noopener noreferrer"},An=s(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 73. 矩阵置零</span>
给定一个 m x n 的矩阵，如果一个元素为 <span class="token number">0</span> ，则将其所在行和列的所有元素都设为 <span class="token number">0</span> 。请使用 原地 算法。

 
<span class="token comment">### 示例</span>
示例 <span class="token number">1</span>：
    输入：matrix <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1,1</span>,1<span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">1,0</span>,1<span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">1,1</span>,1<span class="token punctuation">]</span><span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1,0</span>,1<span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">0,0</span>,0<span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">1,0</span>,1<span class="token punctuation">]</span><span class="token punctuation">]</span>
示例 <span class="token number">2</span>：
    输入：matrix <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0,1</span>,2,0<span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">3,4</span>,5,2<span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">1,3</span>,1,5<span class="token punctuation">]</span><span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0,0</span>,0,0<span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">0,4</span>,5,0<span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">0,3</span>,1,0<span class="token punctuation">]</span><span class="token punctuation">]</span>
    


<span class="token comment">### 实现</span>
<span class="token number">1</span>. 检查并标记第一行和第一列是否有 <span class="token number">0</span>（firstColHasZero、firstRowHasZero）
<span class="token number">2</span>. 使用第一行和第一列来标记其余行列是否含有0
<span class="token number">3</span>. 接下来利用第一行和第一列的标0情况将 matrix 中的数字标 <span class="token number">0</span>
<span class="token number">4</span>. 最后处理第一行和第一列
		- 如果 firstColHasZero 等于 true，将第一列全设为 <span class="token number">0</span>
		- 如果 firstRowHasZero 等于 true，将第一行全设为 <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+g+'" alt="image-20230518115921356"></p><p><img src="'+w+`" alt="image-20230518120013406"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify matrix in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">setZeroes</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 第一行和第一列是否有0 */</span>
  <span class="token keyword">let</span> firstColHasZero <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">let</span> firstRowHasZero <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token comment">// 检查第一列是否有0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      firstColHasZero <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 检查第一行是否有0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      firstRowHasZero <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 校验其他行是否有0，来更新相应第一行或第一列的0值</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> row <span class="token operator">&lt;</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> col <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
        matrix<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 根据第一行和第一列的标0情况，将 matrix 相应行和列标0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> row <span class="token operator">&lt;</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> col <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> matrix<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        matrix<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 处理第一行和第一列</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>firstColHasZero<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>firstRowHasZero<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

	<span class="token comment">// 原地算法 - 返回原数组</span>
  <span class="token keyword">return</span> matrix
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,1),Sn={id:"_78-子集",tabindex:"-1"},Mn={class:"header-anchor",href:"#_78-子集"},Pn={href:"https://leetcode.cn/problems/subsets/",target:"_blank",rel:"noopener noreferrer"},Rn=s(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 78. 子集</span>
给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

 
<span class="token comment">### 示例</span>
示例 <span class="token number">1</span>：
    输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1,2</span>,3<span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">1,2</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">1,3</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">2,3</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">1,2</span>,3<span class="token punctuation">]</span><span class="token punctuation">]</span>
示例 <span class="token number">2</span>：
    输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">subsets</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">const</span> <span class="token function-variable function">backTrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> curr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// 把 curr 添加到 result 数组</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>curr<span class="token punctuation">]</span><span class="token punctuation">)</span>

        <span class="token comment">// 遍历递归</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 把 nums[i] 加入到 curr 数组中</span>
            curr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>

            <span class="token comment">// 递归操作，如 nums=[1,2,3] start=0，递归会给 result 添加 [1,2],[1,2,3]</span>
            <span class="token function">backTrack</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> curr<span class="token punctuation">)</span>

            <span class="token comment">// 将 curr 中的当前元素移除，以便尝试其他元素</span>
            curr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 初始触发递归</span>
    <span class="token function">backTrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,1),Cn={id:"_83-删除排序链表中的重复元素",tabindex:"-1"},Hn={class:"header-anchor",href:"#_83-删除排序链表中的重复元素"},Zn={href:"https://leetcode.cn/problems/remove-duplicates-from-sorted-list/",target:"_blank",rel:"noopener noreferrer"},Bn=s(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 83. 删除排序链表中的重复元素</span>
给定一个已排序的链表的头 <span class="token function">head</span> ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。


<span class="token comment">## 示例</span>
示例 <span class="token number">1</span>：
    输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1,1</span>,2<span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token number">1,2</span><span class="token punctuation">]</span>
示例 <span class="token number">2</span>：
    输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1,1</span>,2,3,3<span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token number">1,2</span>,3<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
  * Definition for singly-linked list.
  * function ListNode(val, next) <span class="token punctuation">{</span>
  *     this.val = (val===undefined ? 0 : val)
  *     this.next = (next===undefined ? null : next)
  * <span class="token punctuation">}</span>
  */</span>
<span class="token doc-comment comment">/**
* <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
* <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
*/</span>
<span class="token keyword">var</span> <span class="token function-variable function">deleteDuplicates</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> current <span class="token operator">=</span> head
  <span class="token keyword">while</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> current<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>val <span class="token operator">===</span> current<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      current<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      current <span class="token operator">=</span> current<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> head
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,1),Dn={id:"_90-子集-ii",tabindex:"-1"},On={class:"header-anchor",href:"#_90-子集-ii"},Qn={href:"https://leetcode.cn/problems/subsets-ii/",target:"_blank",rel:"noopener noreferrer"},Fn=s(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 90. 子集 II</span>
给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

 
<span class="token comment">## 示例</span>
示例 <span class="token number">1</span>：
    输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1,2</span>,2<span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">1,2</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">1,2</span>,2<span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">2,2</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
示例 <span class="token number">2</span>：
    输入：nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    输出：<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">subsetsWithDup</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> curr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>curr<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 将元素加入到当前的子集中</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 避免选择重复的元素</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> start <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">continue</span>
      <span class="token punctuation">}</span>
      curr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 将当前的子集加入到结果数组中</span>
      <span class="token function">backtrack</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> curr<span class="token punctuation">)</span> <span class="token comment">// 递归</span>
      curr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 回溯</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 从空数组开始生成子集</span>

  <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,1),Gn={id:"_92-反转链表-ii",tabindex:"-1"},Jn={class:"header-anchor",href:"#_92-反转链表-ii"},Tn={href:"https://leetcode.cn/problems/reverse-linked-list-ii/",target:"_blank",rel:"noopener noreferrer"},zn=s(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 92. 反转链表 II</span>
给你单链表的头指针 <span class="token function">head</span> 和两个整数 left 和 right ，其中 left <span class="token operator">&lt;=</span> right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 
<span class="token comment">### 示例</span>
示例 <span class="token number">1</span>：
 输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1,2</span>,3,4,5<span class="token punctuation">]</span>, left <span class="token operator">=</span> <span class="token number">2</span>, right <span class="token operator">=</span> <span class="token number">4</span>
 输出：<span class="token punctuation">[</span><span class="token number">1,4</span>,3,2,5<span class="token punctuation">]</span>
示例 <span class="token number">2</span>：
 输入：head <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span>, left <span class="token operator">=</span> <span class="token number">1</span>, right <span class="token operator">=</span> <span class="token number">1</span>
 输出：<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+y+`" alt="image-20230714131613070"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">left</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">right</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseBetween</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">let</span> curr <span class="token operator">=</span> head
    <span class="token keyword">let</span> next <span class="token operator">=</span> head

    <span class="token comment">// 取左边作为起点</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> left<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        prev <span class="token operator">=</span> curr
        curr <span class="token operator">=</span> curr<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token comment">// 暂存左边起点的内容</span>
    <span class="token keyword">let</span> prev2 <span class="token operator">=</span> prev
    <span class="token keyword">let</span> curr2 <span class="token operator">=</span> curr

    <span class="token comment">// 做左边起点开始反转</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> left<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        next <span class="token operator">=</span> curr<span class="token punctuation">.</span>next
        curr<span class="token punctuation">.</span>next <span class="token operator">=</span> prev
        prev <span class="token operator">=</span> curr
        curr <span class="token operator">=</span> next
    <span class="token punctuation">}</span>

    <span class="token comment">// 拼接内容（分为左边未反转部分、中间反转部分、右边未反转部分）</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        prev2<span class="token punctuation">.</span>next <span class="token operator">=</span> prev
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        head <span class="token operator">=</span> prev
    <span class="token punctuation">}</span>
    
  curr2<span class="token punctuation">.</span>next <span class="token operator">=</span> curr
  
    <span class="token keyword">return</span> head

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="leetcode-100-150" tabindex="-1"><a class="header-anchor" href="#leetcode-100-150"><span>LeetCode 100~150</span></a></h3><h3 id="_118-杨辉三角" tabindex="-1"><a class="header-anchor" href="#_118-杨辉三角"><span>118. 杨辉三角</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 118. 杨辉三角</span>
给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
在「杨辉三角」中，每个数是它左上方和右上方的数的和。

<span class="token comment">## 题目示例</span>
示例 <span class="token number">1</span>:输入: numRows <span class="token operator">=</span> <span class="token number">5</span>		输出: <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">1,1</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">1,2</span>,1<span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">1,3</span>,3,1<span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">1,4</span>,6,4,1<span class="token punctuation">]</span><span class="token punctuation">]</span>
示例 <span class="token number">2</span>:输入: numRows <span class="token operator">=</span> <span class="token number">1</span>		输出: <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">numRows</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
 <span class="token keyword">var</span> <span class="token function-variable function">generate</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">numRows</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>numRows <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numRows<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> preArr <span class="token operator">=</span> result<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> preArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      row<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>preArr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> preArr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>row<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_119-杨辉三角ii" tabindex="-1"><a class="header-anchor" href="#_119-杨辉三角ii"><span>119. 杨辉三角II</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 119. 杨辉三角II</span>
给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。
在「杨辉三角」中，每个数是它左上方和右上方的数的和

<span class="token comment">## 题目示例</span>
示例 <span class="token number">1</span>:输入: rowIndex <span class="token operator">=</span> <span class="token number">3</span>		输出: <span class="token punctuation">[</span><span class="token number">1,3</span>,3,1<span class="token punctuation">]</span>
示例 <span class="token number">2</span>:输入: rowIndex <span class="token operator">=</span> <span class="token number">0</span>		输出: <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
示例 <span class="token number">3</span>:输入: rowIndex <span class="token operator">=</span> <span class="token number">1</span>		输出: <span class="token punctuation">[</span><span class="token number">1,1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+f+'" alt="img"></p><p><img src="'+x+'" alt="image-20220926094537648"></p><p><img src="'+_+`" alt="./image-20220926094558061"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">rowIndex</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">getRow</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">rowIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token constant">N</span> <span class="token operator">=</span> rowIndex<span class="token punctuation">;</span>
  <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>pre<span class="token punctuation">)</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> k <span class="token operator">&lt;=</span> <span class="token constant">N</span><span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pre <span class="token operator">=</span> Number<span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>pre <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token constant">N</span> <span class="token operator">-</span> <span class="token punctuation">(</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> k<span class="token punctuation">)</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>pre<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>简洁版</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">rowIndex</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">getRow</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">rowIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> currentLine <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> k <span class="token operator">&lt;=</span> rowIndex<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> pre <span class="token operator">=</span> currentLine<span class="token punctuation">[</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
    currentLine<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>pre <span class="token operator">*</span> <span class="token punctuation">(</span>rowIndex <span class="token operator">-</span> <span class="token punctuation">(</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> k<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> currentLine<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,6),Yn={id:"_121-买卖股票的最佳时机",tabindex:"-1"},En={class:"header-anchor",href:"#_121-买卖股票的最佳时机"},Vn={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/",target:"_blank",rel:"noopener noreferrer"},Kn=s(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 121. 买卖股票的最佳时机</span>
给定一个数组 prices ，它的第 i 个元素 prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> 表示一支给定股票第 i 天的价格。
你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 <span class="token number">0</span> 。


<span class="token comment">### 示例</span>
示例 <span class="token number">1</span>：
    输入：<span class="token punctuation">[</span><span class="token number">7,1</span>,5,3,6,4<span class="token punctuation">]</span>
    输出：5
    解释：在第 <span class="token number">2</span> 天（股票价格 <span class="token operator">=</span> <span class="token number">1</span>）的时候买入，在第 <span class="token number">5</span> 天（股票价格 <span class="token operator">=</span> <span class="token number">6</span>）的时候卖出，最大利润 <span class="token operator">=</span> <span class="token number">6</span>-1 <span class="token operator">=</span> <span class="token number">5</span> 。
         注意利润不能是 <span class="token number">7</span>-1 <span class="token operator">=</span> <span class="token number">6</span>, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

示例 <span class="token number">2</span>：
    输入：prices <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">7,6</span>,4,3,1<span class="token punctuation">]</span>
    输出：0
    解释：在这种情况下, 没有交易完成, 所以最大利润为 <span class="token number">0</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">prices</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxProfit</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">prices</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>prices<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
    
    <span class="token keyword">let</span> minPrice <span class="token operator">=</span> prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> maxProfit <span class="token operator">=</span> <span class="token number">0</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> minPrice<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            minPrice <span class="token operator">=</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> minPrice <span class="token operator">&gt;</span> maxProfit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            maxProfit <span class="token operator">=</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> minPrice
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> maxProfit
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,1),Un={id:"_122-买卖股票的最佳时机-ii",tabindex:"-1"},Xn={class:"header-anchor",href:"#_122-买卖股票的最佳时机-ii"},Wn={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/",target:"_blank",rel:"noopener noreferrer"},$n=s(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 122. 买卖股票的最佳时机 II</span>
给你一个整数数组 prices ，其中 prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> 表示某支股票第 i 天的价格。
在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
返回 你能获得的 最大 利润 。

 
<span class="token comment">### 示例</span>
示例 <span class="token number">1</span>：
    输入：prices <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">7,1</span>,5,3,6,4<span class="token punctuation">]</span>
    输出：7
    解释：
    在第 <span class="token number">2</span> 天（股票价格 <span class="token operator">=</span> <span class="token number">1</span>）的时候买入，在第 <span class="token number">3</span> 天（股票价格 <span class="token operator">=</span> <span class="token number">5</span>）的时候卖出, 这笔交易所能获得利润 <span class="token operator">=</span> <span class="token number">5</span> - <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">4</span> 。
    随后，在第 <span class="token number">4</span> 天（股票价格 <span class="token operator">=</span> <span class="token number">3</span>）的时候买入，在第 <span class="token number">5</span> 天（股票价格 <span class="token operator">=</span> <span class="token number">6</span>）的时候卖出, 这笔交易所能获得利润 <span class="token operator">=</span> <span class="token number">6</span>-3<span class="token operator">=</span><span class="token number">3</span>。
    总利润为 <span class="token number">4</span> + <span class="token number">3</span> <span class="token operator">=</span> <span class="token number">7</span> 。

示例 <span class="token number">2</span>：
    输入：prices <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1,2</span>,3,4,5<span class="token punctuation">]</span>
    输出：4
    解释：
    在第 <span class="token number">1</span> 天（股票价格 <span class="token operator">=</span> <span class="token number">1</span>）的时候买入，在第 <span class="token number">5</span> 天 （股票价格 <span class="token operator">=</span> <span class="token number">5</span>）的时候卖出, 这笔交易所能获得利润 <span class="token operator">=</span> <span class="token number">5</span> - <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">4</span> 。
    总利润为 <span class="token number">4</span> 。
    
示例 <span class="token number">3</span>：
    输入：prices <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">7,6</span>,4,3,1<span class="token punctuation">]</span>
    输出：0
    解释：在这种情况下, 交易无法获得正利润，所以不参与交易可以获得最大利润，最大利润为 <span class="token number">0</span> 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常规写法</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">prices</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 * <span class="token keyword">@desc</span> 常规写法
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxProfit</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">prices</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>prices<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
    
    <span class="token comment">// 利润、波谷、波峰</span>
    <span class="token keyword">let</span> profit <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> valley <span class="token operator">=</span> prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> peak <span class="token operator">=</span> prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 波谷计算</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> prices<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        valley <span class="token operator">=</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        
        <span class="token comment">// 波峰计算</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> prices<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        peak <span class="token operator">=</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        
        <span class="token comment">// 总利润计算</span>
        profit <span class="token operator">+=</span> peak <span class="token operator">-</span> valley
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> profit
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>贪心算法</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">prices</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 * <span class="token keyword">@desc</span> 贪心算法
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxProfit</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">prices</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>prices<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
   
    <span class="token keyword">let</span> profit <span class="token operator">=</span> <span class="token number">0</span>	<span class="token comment">// 利润</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> prices<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            profit <span class="token operator">+=</span> prices<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> profit
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,1),ns={id:"_123-买卖股票的最佳时机-iii",tabindex:"-1"},ss={class:"header-anchor",href:"#_123-买卖股票的最佳时机-iii"},as={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/",target:"_blank",rel:"noopener noreferrer"},ps=s(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 123. 买卖股票的最佳时机 III</span>
给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

 
<span class="token comment">### 示例</span>
示例 <span class="token number">1</span>:
    输入：prices <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3,3</span>,5,0,0,3,1,4<span class="token punctuation">]</span>
    输出：6
    解释：在第 <span class="token number">4</span> 天（股票价格 <span class="token operator">=</span> <span class="token number">0</span>）的时候买入，在第 <span class="token number">6</span> 天（股票价格 <span class="token operator">=</span> <span class="token number">3</span>）的时候卖出，这笔交易所能获得利润 <span class="token operator">=</span> <span class="token number">3</span>-0 <span class="token operator">=</span> <span class="token number">3</span> 。
         随后，在第 <span class="token number">7</span> 天（股票价格 <span class="token operator">=</span> <span class="token number">1</span>）的时候买入，在第 <span class="token number">8</span> 天 （股票价格 <span class="token operator">=</span> <span class="token number">4</span>）的时候卖出，这笔交易所能获得利润 <span class="token operator">=</span> <span class="token number">4</span>-1 <span class="token operator">=</span> <span class="token number">3</span> 。
     
示例 <span class="token number">2</span>：
    输入：prices <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1,2</span>,3,4,5<span class="token punctuation">]</span>
    输出：4
         注意你不能在第 <span class="token number">1</span> 天和第 <span class="token number">2</span> 天接连购买股票，之后再将它们卖出。   
         因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。

示例 <span class="token number">3</span>：
    输入：prices <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">7,6</span>,4,3,1<span class="token punctuation">]</span> 
    输出：0 
    解释：在这个情况下, 没有交易完成, 所以最大利润为 <span class="token number">0</span>。

示例 <span class="token number">4</span>：
    输入：prices <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    输出：0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">prices</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 * <span class="token keyword">@desc</span> 动态规划
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxProfit</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">prices</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> len <span class="token operator">=</span> prices<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
    
    <span class="token keyword">const</span> dp <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 初始化 dp</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 动态计算</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> maxProfit <span class="token operator">=</span> <span class="token operator">-</span>prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> prices<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> maxProfit<span class="token punctuation">)</span>
            maxProfit <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxProfit<span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> prices<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+j+`" alt="image-20230814212528742"></p></blockquote><h3 id="剑指offer" tabindex="-1"><a class="header-anchor" href="#剑指offer"><span>剑指Offer</span></a></h3><h3 id="_50-第一个只出现一次的字符" tabindex="-1"><a class="header-anchor" href="#_50-第一个只出现一次的字符"><span>50. 第一个只出现一次的字符</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 50. 第一个只出现一次的字符</span>
在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
示例 <span class="token number">1</span>：输入：s <span class="token operator">=</span> <span class="token string">&quot;abaccdeff&quot;</span>，输出：<span class="token string">&#39;b&#39;</span>
示例 <span class="token number">2</span>：输入：s <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> ，输出：<span class="token string">&#39; &#39;</span>

解题：indexOf<span class="token punctuation">(</span>searchvalue, startIndex?<span class="token punctuation">)</span>，使用indexOf进行查找
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">firstUniqChar</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    first <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    e <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> first <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,4);function ts(es,os){const a=o("ExternalLinkIcon");return c(),l("div",null,[I,n("h3",L,[n("a",N,[n("span",null,[n("a",A,[p("19. 删除链表的倒数第 N 个结点"),t(a)])])])]),S,n("h3",M,[n("a",P,[n("span",null,[n("a",R,[p("20. 有效的括号"),t(a)])])])]),C,n("h3",H,[n("a",Z,[n("span",null,[n("a",B,[p("21. 合并两个有序链表"),t(a)])])])]),D,n("h3",O,[n("a",Q,[n("span",null,[n("a",F,[p("24. 两两交换链表中的节点"),t(a)])])])]),G,n("h3",J,[n("a",T,[n("span",null,[n("a",z,[p("49. 字母异位词分组"),t(a)])])])]),Y,n("h3",E,[n("a",V,[n("span",null,[n("a",K,[p("53. 最大子数组和"),t(a)])])])]),U,n("h3",X,[n("a",W,[n("span",null,[n("a",$,[p("54. 螺旋矩阵"),t(a)])])])]),nn,n("h3",sn,[n("a",an,[n("span",null,[n("a",pn,[p("55. 跳跃游戏"),t(a)])])])]),tn,n("h3",en,[n("a",on,[n("span",null,[n("a",cn,[p("56. 合并区间"),t(a)])])])]),ln,n("h3",un,[n("a",rn,[n("span",null,[n("a",kn,[p("57. 插入区间"),t(a)])])])]),dn,n("h3",mn,[n("a",vn,[n("span",null,[n("a",bn,[p("62. 不同路径"),t(a)])])])]),hn,n("h3",gn,[n("a",wn,[n("span",null,[n("a",yn,[p("66. 加一"),t(a)])])])]),fn,n("h3",xn,[n("a",_n,[n("span",null,[n("a",jn,[p("70. 爬楼梯"),t(a)])])])]),qn,n("h3",In,[n("a",Ln,[n("span",null,[n("a",Nn,[p("73. 矩阵置零"),t(a)])])])]),An,n("h3",Sn,[n("a",Mn,[n("span",null,[n("a",Pn,[p("78. 子集"),t(a)])])])]),Rn,n("h3",Cn,[n("a",Hn,[n("span",null,[n("a",Zn,[p("83. 删除排序链表中的重复元素"),t(a)])])])]),Bn,n("h3",Dn,[n("a",On,[n("span",null,[n("a",Qn,[p("90. 子集 II"),t(a)])])])]),Fn,n("h3",Gn,[n("a",Jn,[n("span",null,[n("a",Tn,[p("92. 反转链表 II"),t(a)])])])]),zn,n("h3",Yn,[n("a",En,[n("span",null,[n("a",Vn,[p("121. 买卖股票的最佳时机"),t(a)])])])]),Kn,n("h3",Un,[n("a",Xn,[n("span",null,[n("a",Wn,[p("122. 买卖股票的最佳时机 II"),t(a)])])])]),$n,n("h3",ns,[n("a",ss,[n("span",null,[n("a",as,[p("123. 买卖股票的最佳时机 III"),t(a)])])])]),ps])}const ls=e(q,[["render",ts],["__file","leetCode.html.vue"]]),is=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E7%AE%97%E6%B3%95/leetCode.html","title":"","lang":"zh-CN","frontmatter":{"Author":"willysliang","CreateTime":"2022-08-21T16:23:42.000Z","Modifier":"willysliang","ModifiedTime":"2022-12-28T11:45:24.000Z","Description":"LeetCode"},"headers":[{"level":3,"title":"LeetCode","slug":"leetcode","link":"#leetcode","children":[]},{"level":3,"title":"LeetCode 1~50","slug":"leetcode-1-50","link":"#leetcode-1-50","children":[]},{"level":3,"title":"1. 两数之和","slug":"_1-两数之和","link":"#_1-两数之和","children":[]},{"level":3,"title":"2. 两数相加","slug":"_2-两数相加","link":"#_2-两数相加","children":[]},{"level":3,"title":"3. 无重复字符的最长子符","slug":"_3-无重复字符的最长子符","link":"#_3-无重复字符的最长子符","children":[]},{"level":3,"title":"4. 寻找两个正序数组的中位数","slug":"_4-寻找两个正序数组的中位数","link":"#_4-寻找两个正序数组的中位数","children":[]},{"level":3,"title":"5. 最长回文字符串","slug":"_5-最长回文字符串","link":"#_5-最长回文字符串","children":[]},{"level":3,"title":"6. Z字形变换","slug":"_6-z字形变换","link":"#_6-z字形变换","children":[]},{"level":3,"title":"7. 整数翻转","slug":"_7-整数翻转","link":"#_7-整数翻转","children":[]},{"level":3,"title":"8. 字符串转换整数（atoi）","slug":"_8-字符串转换整数-atoi","link":"#_8-字符串转换整数-atoi","children":[]},{"level":3,"title":"9. 回文数字","slug":"_9-回文数字","link":"#_9-回文数字","children":[]},{"level":3,"title":"10. 正则表达式匹配","slug":"_10-正则表达式匹配","link":"#_10-正则表达式匹配","children":[]},{"level":3,"title":"15. 三数之和","slug":"_15-三数之和","link":"#_15-三数之和","children":[]},{"level":3,"title":"19. 删除链表的倒数第 N 个结点","slug":"_19-删除链表的倒数第-n-个结点","link":"#_19-删除链表的倒数第-n-个结点","children":[]},{"level":3,"title":"20. 有效的括号","slug":"_20-有效的括号","link":"#_20-有效的括号","children":[]},{"level":3,"title":"21. 合并两个有序链表","slug":"_21-合并两个有序链表","link":"#_21-合并两个有序链表","children":[]},{"level":3,"title":"24. 两两交换链表中的节点","slug":"_24-两两交换链表中的节点","link":"#_24-两两交换链表中的节点","children":[]},{"level":3,"title":"49. 字母异位词分组","slug":"_49-字母异位词分组","link":"#_49-字母异位词分组","children":[]},{"level":3,"title":"LeetCode 51~100","slug":"leetcode-51-100","link":"#leetcode-51-100","children":[]},{"level":3,"title":"51. N皇后","slug":"_51-n皇后","link":"#_51-n皇后","children":[]},{"level":3,"title":"53. 最大子数组和","slug":"_53-最大子数组和","link":"#_53-最大子数组和","children":[]},{"level":3,"title":"54. 螺旋矩阵","slug":"_54-螺旋矩阵","link":"#_54-螺旋矩阵","children":[]},{"level":3,"title":"55. 跳跃游戏","slug":"_55-跳跃游戏","link":"#_55-跳跃游戏","children":[]},{"level":3,"title":"56. 合并区间","slug":"_56-合并区间","link":"#_56-合并区间","children":[]},{"level":3,"title":"57. 插入区间","slug":"_57-插入区间","link":"#_57-插入区间","children":[]},{"level":3,"title":"62. 不同路径","slug":"_62-不同路径","link":"#_62-不同路径","children":[]},{"level":3,"title":"66. 加一","slug":"_66-加一","link":"#_66-加一","children":[]},{"level":3,"title":"70. 爬楼梯","slug":"_70-爬楼梯","link":"#_70-爬楼梯","children":[]},{"level":3,"title":"73. 矩阵置零","slug":"_73-矩阵置零","link":"#_73-矩阵置零","children":[]},{"level":3,"title":"78. 子集","slug":"_78-子集","link":"#_78-子集","children":[]},{"level":3,"title":"83. 删除排序链表中的重复元素","slug":"_83-删除排序链表中的重复元素","link":"#_83-删除排序链表中的重复元素","children":[]},{"level":3,"title":"90. 子集 II","slug":"_90-子集-ii","link":"#_90-子集-ii","children":[]},{"level":3,"title":"92. 反转链表 II","slug":"_92-反转链表-ii","link":"#_92-反转链表-ii","children":[]},{"level":3,"title":"LeetCode 100~150","slug":"leetcode-100-150","link":"#leetcode-100-150","children":[]},{"level":3,"title":"118. 杨辉三角","slug":"_118-杨辉三角","link":"#_118-杨辉三角","children":[]},{"level":3,"title":"119. 杨辉三角II","slug":"_119-杨辉三角ii","link":"#_119-杨辉三角ii","children":[]},{"level":3,"title":"121. 买卖股票的最佳时机","slug":"_121-买卖股票的最佳时机","link":"#_121-买卖股票的最佳时机","children":[]},{"level":3,"title":"122. 买卖股票的最佳时机 II","slug":"_122-买卖股票的最佳时机-ii","link":"#_122-买卖股票的最佳时机-ii","children":[]},{"level":3,"title":"123. 买卖股票的最佳时机 III","slug":"_123-买卖股票的最佳时机-iii","link":"#_123-买卖股票的最佳时机-iii","children":[]},{"level":3,"title":"剑指Offer","slug":"剑指offer","link":"#剑指offer","children":[]},{"level":3,"title":"50. 第一个只出现一次的字符","slug":"_50-第一个只出现一次的字符","link":"#_50-第一个只出现一次的字符","children":[]}],"git":{"updatedTime":1705930109000,"contributors":[{"name":"willy","email":"willysliang","commits":4}]},"filePathRelative":"前端算法/leetCode.md"}');export{ls as comp,is as data};
