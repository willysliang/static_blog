import{_ as n,o as s,c as a,b as p}from"./app-Bvx-HY_0.js";const e="/static_blog/assets/TimeComplexity-BD-oVvtY.webp",t="/static_blog/assets/LogicalStructure-CSuRWxKc.webp",o="/static_blog/assets/breadth-first-search-D-QlHddC.gif",c="/static_blog/assets/Depth-First_Search-BKtCaJxo.gif",l="/static_blog/assets/image-20211018114908765-0_CjSO28.png",i="/static_blog/assets/image-20210922154737326-eK8iwn8h.png",u="/static_blog/assets/image-20210922154852540-B-pdg7cV.png",r="/static_blog/assets/Recursion-CbuBHrkg.webp",k="/static_blog/assets/Recursion_Fibonacci_Sequence-Dx0-qKm6.webp",d="/static_blog/assets/Backtracking_algorithm-DZE-7cGo.webp",v="/static_blog/assets/BinarySearch-H-z5vd3B.webp",m="/static_blog/assets/image-20230313103936274-C8cQRAO5.png",b="/static_blog/assets/1089184-20170118180823468-388996114-DkL_H1hp.png",h="/static_blog/assets/bubbleSort-CP2In9xA.gif",g="/static_blog/assets/1342059-20190514171046967-1633143483-B8GwndZy.gif",y="/static_blog/assets/quickSort-ycnSUw4B.gif",w="/static_blog/assets/image-20230327145750504-V7jBF-Q8.png",f="/static_blog/assets/1342059-20190514171140724-291814375-9rKS8xnT.gif",x="/static_blog/assets/1342059-20190514171753267-9059541-Bguw-KQu.gif",N="/static_blog/assets/image-20210922185514310-DjilQia_.png",L="/static_blog/assets/heapSort-B9gdqM8d.gif",S="/static_blog/assets/countingSort-BI5PSDWy.gif",j="/static_blog/assets/Bucket_sort_2.svg_-8D19zefV.png",I="/static_blog/assets/radixSort-C3wr_GcS.gif",q="/static_blog/assets/1626927345-DZmfxB-PascalTriangleAnimated2-wBXJRxxE.gif",T="/static_blog/assets/multiplyArray-DSnT61B6.png",C="/static_blog/assets/image-20230215183533947-BUC3zrwP.png",_="/static_blog/assets/MergeTowLists-CPgBVEWn.png",A="/static_blog/assets/FindFirstCommonNode-BWUDX3ZS.png",O="/static_blog/assets/image-20230215183448698-D_POwdIJ.png",B="/static_blog/assets/image-20230216183655897-CQzfznvv.png",M="/static_blog/assets/DetectCycle-CQs3SEQu.png",E="/static_blog/assets/Heap-BpIjkuei.webp",D="/static_blog/assets/HashTable-BjMYJOPv.webp",V="/static_blog/assets/BinaryTree-BrDfTvHI.webp",F="/static_blog/assets/image-20230327165455597-ByHqNXVu.png",H="/static_blog/assets/BST-CT7fQUhh.png",R="/static_blog/assets/BST_add-KJPWYDiR.png",z="/static_blog/assets/BST_search-U-89Q0hF.png",P="/static_blog/assets/BST_delete-CZ-iiMsp.png",J={},Q=p(`<h2 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构"><span>数据结构</span></a></h2><h2 id="术语说明" tabindex="-1"><a class="header-anchor" href="#术语说明"><span>术语说明</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 术语说明</span>
- 稳定：如果 a 原本在 b 前面，并且 <span class="token assign-left variable">a</span><span class="token operator">=</span>b，排序之后 a 仍然在 b 前面
- 不稳定：如果 a 原本在 b 前面，并且 <span class="token assign-left variable">a</span><span class="token operator">=</span>b，而排序之后 a 可能在 b 后面
- 内排序：所有排序操作都在内存中完成
- 外排序：由于数据太大，因此把数据都放在磁盘中，而排序通过磁盘和内存的数据传输才能进行
- 时间复杂度：一个算法执行所耗费的时间
- 空间复杂度：运行完一个程序所需内存大小
- In-place：占用常数内存，不占用额外内存
- Out-place：占用额外内存


<span class="token comment">## 空间复杂度</span>
一个程序的空间复杂度是指运行完一个程序所需内存的大小。利用程序的空间复杂度，可以对程序的运行所需要的内存多少有个预先估计。
一个程序执行时除了需要存储空间和存储本身所使用的指令、常数、变量和输入数据外，还需要一些对数据进行操作的工作单元和存储一些为现实计算所需信息的辅助空间。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="时间复杂度-timecomplexity" tabindex="-1"><a class="header-anchor" href="#时间复杂度-timecomplexity"><span>时间复杂度 TimeComplexity</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 时间复杂度</span>
一个算法的时间复杂度反映了程序运行从开始到结束所需要的时间。把算法中基本操作重复执行的次数<span class="token punctuation">(</span>频度<span class="token punctuation">)</span>作为算法的时间复杂度。
没有循环语句，记作<span class="token variable"><span class="token variable">\`</span>O<span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token variable">\`</span></span>，也成为常数阶。只有一重循环，则算法的基本操作的执行频率与问题规模 n 呈线性增大关系，记作<span class="token variable"><span class="token variable">\`</span>O<span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token variable">\`</span></span>，也叫线性阶。


<span class="token comment">### 常见的时间复杂度：大O符号（Big O notation）</span>
- O<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>: Constant Complexity: Constant 常数复杂度
		常数级别，无论输入多大，它执行的步数都是恒定的，不会因为输入变大而变大，哈希表的查找就是这个级别。
- O<span class="token punctuation">(</span>logN<span class="token punctuation">)</span>: Logarithmic Complexity: 对数复杂度
		对数级别，它的底数是2，默认省略了；输入每大一倍，耗费步骤则增加1，二分查找属于这个级别。
- O<span class="token punctuation">(</span>N<span class="token punctuation">)</span>: Linear Complexity: 线性时间复杂度
		线性级别，随着输入变大耗费的步数也正向相关，遍历算法就是这个级别。
- O<span class="token punctuation">(</span>N²<span class="token punctuation">)</span>: N square Complexity 平⽅方
		平方级别，随着输入的变大所耗费的步数也会成倍增加，一般当你的算法使用双层for循环就是这个级别，比如冒泡排序。
- O<span class="token punctuation">(</span>n^3<span class="token punctuation">)</span>: N square Complexity ⽴立⽅方
- O<span class="token punctuation">(</span><span class="token number">2</span>^n<span class="token punctuation">)</span>: Exponential Growth 指数
- O<span class="token punctuation">(</span>n<span class="token operator">!</span><span class="token punctuation">)</span>: Factorial 阶乘



<span class="token comment">### 时间复杂度优化：从低一级的复杂度寻找灵感</span>
- O<span class="token punctuation">(</span>N<span class="token punctuation">)</span> -<span class="token operator">&gt;</span> O<span class="token punctuation">(</span>log N<span class="token punctuation">)</span>：使用 <span class="token string">&#39;二分搜索&#39;</span>。
- O<span class="token punctuation">(</span>N log N<span class="token punctuation">)</span> -<span class="token operator">&gt;</span> O<span class="token punctuation">(</span>N<span class="token punctuation">)</span>：遇到需要排序的题，想想能否通过 <span class="token string">&#39;数组、Set、Map、Heap&#39;</span> 来解决。
- O<span class="token punctuation">(</span>N²<span class="token punctuation">)</span> -<span class="token operator">&gt;</span> O<span class="token punctuation">(</span>N log N<span class="token punctuation">)</span>：遇到嵌套循环，想想能否通过 <span class="token string">&#39;排序 + 一个 for 循环&#39;</span> 来解决。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+e+`" alt="时间复杂度对比"></p></blockquote><h3 id="逻辑结构-logicalstructure" tabindex="-1"><a class="header-anchor" href="#逻辑结构-logicalstructure"><span>逻辑结构 LogicalStructure</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 逻辑结构</span>
逻辑结构就是数据之间的关系，逻辑结构大概分为两种：线性结构、非线性结构。
<span class="token number">1</span>. 线性结构
是一个有序数据元素的集合。其中数据元素之间是一对一的关系，即除了第一个和最后一个数据元素之外，其它数据元素都是首尾相连的。
常用的线性结构有：栈、队列、链表、线性表。

<span class="token number">2</span>. 非线性结构
各个数据元素不再保持在一个线性序列中，每个数据元素可能与零个或多个其它数据元素发生联系。
常见的非线性结构有：二维数组、树等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+t+`" alt="逻辑结构类别"></p><h3 id="存储结构" tabindex="-1"><a class="header-anchor" href="#存储结构"><span>存储结构</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 存储结构</span>
逻辑结构指的是数据间的关系，而存储结构是逻辑结构用计算机语言的实现。
常见的存储结构有顺序存储、链式存储、索引存储以及散列存储。

如：
- 数组在内存中的位置是连续的，它就属于顺序存储；
- 链表是主动建立数据间的关联关系的，在内存中却不一定是连续的，它属于链式存储；
- 顺序和逻辑上都不存在顺序关系，但是你可以通过一定的方式去访问它的哈希表，它属于数据三列存储。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="算法思想" tabindex="-1"><a class="header-anchor" href="#算法思想"><span>算法思想</span></a></h2><h3 id="广度优先遍历bfs" tabindex="-1"><a class="header-anchor" href="#广度优先遍历bfs"><span>广度优先遍历<code>BFS</code></span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 广度优先遍历 BFS</span>
广度优先搜索（BFS）是一种遍历或搜索数据结构（如树或图）的算法，也可以在更抽象的场景中使用。
它的特点是越是接近根结点的结点将越早地遍历。
例如，我们可以使用 BFS 找到从起始结点到目标结点的路径，特别是最短路径。
在BFS中，结点的处理顺序与它们添加到队列的顺序是完全相同的顺序，即先进先出，所以广度优先搜索一般使用队列实现。


- 广度优先遍历，指的是从图的一个未遍历的节点出发，先遍历这个节点的相邻节点，再依次遍历每个相邻节点的相邻节点。
- 广度优先遍历<span class="token variable"><span class="token variable">\`</span>BFS<span class="token variable">\`</span></span>，会从起点开始“一层一层”扩展的方法来遍历，扩展时每发现一个点就将这个点加入到队列中，知道整张图都被遍历过位置

<span class="token comment">### 应用</span>
<span class="token number">1</span>. 从上到下打印二叉树
<span class="token number">2</span>. 单词接龙
<span class="token number">3</span>. 员工的重要性
<span class="token number">4</span>. 岛屿数量

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+`" alt="breadth-first-search"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">widthTraversal2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> nodes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> item <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">let</span> children <span class="token operator">=</span> item<span class="token punctuation">.</span>children
      nodes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
      <span class="token comment">// 队列，先进先出</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>children <span class="token operator">==</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> children<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> nodes
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="深度优先遍历dfs" tabindex="-1"><a class="header-anchor" href="#深度优先遍历dfs"><span>深度优先遍历<code>DFS</code></span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 深度优先遍历 DFS</span>
- DFS 一般是解决连通性问题， 而 BFS 一般是解决最短路径问题
深度优先遍历DFS：从图中一个未访问的未访问的顶点 V 开始，沿着一条路一直走到底，然后从这条路尽头的结点回退到上一个节点，再从另一条路开始走到底，不断递归重复此过程，直到所有的顶点都遍历完成。
- DFS 的特点是先走完一条路，再换一条路继续走（不撞南墙不回头）。


<span class="token comment">## 深度优先搜索</span>
和广度优先搜索一样，深度优先搜索（DFS）是用于在树/图中遍历/搜索的一种重要算法。
与 BFS 不同，更早访问的结点可能不是更靠近根结点的结点。因此，你在DFS 中找到的第一条路径可能不是最短路径。
在DFS中，结点的处理顺序是完全相反的顺序，就像它们被添加到栈中一样，它是后进先出。所以深度优先搜索一般使用栈实现。

<span class="token comment">### 应用</span>
<span class="token number">1</span>、二叉树的中序遍历
<span class="token number">2</span>. 二叉树的最大深度
<span class="token number">3</span>. 路径总和
<span class="token number">4</span>. 课程表
<span class="token number">5</span>. 岛屿数量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+'" alt="Depth-First Search"></p><p><img src="'+l+`" alt="image-20211018114908765"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/*深度优先遍历三种方式*/</span>
<span class="token keyword">let</span> <span class="token function-variable function">deepTraversal1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> nodeList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nodeList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
    <span class="token keyword">let</span> children <span class="token operator">=</span> node<span class="token punctuation">.</span>children
    <span class="token keyword">if</span> <span class="token punctuation">(</span>children <span class="token operator">==</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> children<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">deepTraversal1</span><span class="token punctuation">(</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nodeList<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> nodeList
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token function-variable function">deepTraversal2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> nodes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nodes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
    <span class="token keyword">let</span> children <span class="token operator">=</span> node<span class="token punctuation">.</span>children
    <span class="token keyword">if</span> <span class="token punctuation">(</span>children <span class="token operator">==</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> children<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        nodes <span class="token operator">=</span> nodes<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">deepTraversal2</span><span class="token punctuation">(</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> nodes
<span class="token punctuation">}</span>
<span class="token comment">// 非递归</span>
<span class="token keyword">let</span> <span class="token function-variable function">deepTraversal3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nodes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 推入当前处理的node</span>
    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> item <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">let</span> children <span class="token operator">=</span> item<span class="token punctuation">.</span>children
      nodes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>children <span class="token operator">==</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> children<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> children<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> nodes
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="例-根据子节点寻找父节点" tabindex="-1"><a class="header-anchor" href="#例-根据子节点寻找父节点"><span>例：根据子节点寻找父节点</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/* 利用遍历来寻找父节点的位置 */</span>
<span class="token function">treeFindPath</span><span class="token punctuation">(</span><span class="token parameter">tree<span class="token punctuation">,</span> func<span class="token punctuation">,</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>tree<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> data <span class="token keyword">of</span> tree<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>code<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> path
    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> findChildren <span class="token operator">=</span> <span class="token function">treeFindPath</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>children<span class="token punctuation">,</span> func<span class="token punctuation">,</span> path<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>findChildren<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> findChildren
    <span class="token punctuation">}</span>
    path<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> ssfj <span class="token operator">=</span> <span class="token function">treeFindPath</span><span class="token punctuation">(</span>treeData<span class="token punctuation">,</span><span class="token parameter">data</span><span class="token operator">=&gt;</span> data<span class="token punctuation">.</span>code<span class="token operator">==</span>rows<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>werks <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>type <span class="token operator">==</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="波兰式-逆波兰式" tabindex="-1"><a class="header-anchor" href="#波兰式-逆波兰式"><span>波兰式/逆波兰式</span></a></h3><blockquote><ul><li>波兰式是在通常的表达式中，二元运算符总是置于与之相关的两个运算对象之前，所以，这种表示法也称为前缀表达式。</li><li><img src="`+i+'" alt="image-20210922154737326"></li><li>在后缀表示中，运算符按实际计算顺序从左到右排列，且每一运算符总是跟在其运算对象之后。 <ul><li><img src="'+u+`" alt="image-20210922154852540"></li><li>中缀表达式：<code>A+B*(C-D)-E*F</code></li><li>前缀表达式(波兰式)：<code>- + A * B - C D * E F</code></li><li>后缀表达式(逆波兰式)：<code>A B C D - * + E F * -</code></li></ul></li></ul></blockquote><h3 id="递归-recursion" tabindex="-1"><a class="header-anchor" href="#递归-recursion"><span>递归 Recursion</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 递归</span>
递归是一种解决问题的有效方法，在递归过程中，函数将自身作为子例程调用。
调用自身的函数诀窍在于，每当递归函数调用自身时，它都会将给定的问题拆解为子问题。递归调用继续进行，直到到子问题无需进一步递归就可以解决的地步。
为了确保递归函数不会导致无限循环，它应具有以下属性：
	- 一个简单的基本案例 —— 能够不使用递归来产生答案的终止方案。
	- 一组规则，也称作递推关系，可将所有其他情况拆分到基本案例。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="递归"></p></blockquote><h4 id="重复计算" tabindex="-1"><a class="header-anchor" href="#重复计算"><span>重复计算</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 重复计算</span>
一些问题使用递归考虑，思路是非常清晰的，但是却不推荐使用递归，例如下面的几个问题：
<span class="token number">1</span>. 斐波拉契数列
<span class="token number">2</span>. 跳台阶
<span class="token number">3</span>. 矩形覆盖

这几个问题使用递归都有一个共同的缺点，那就是包含大量的重复计算，如果递归层次比较深的话，直接会导致JS进程崩溃。
你可以使用记忆化的方法来避免重复计算，即开辟一个额外空间来存储已经计算过的值，但是这样又会浪费一定的内存空间。因此上面的问题一般会使用动态规划求解。
所以，在使用递归之前，一定要判断代码是否含有重复计算，如果有的话，不推荐使用递归。
递归是一种思想，而非一个类型，很多经典算法都是以递归为基础，因此这里就不再给出更多问题。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+k+`" alt="递归实现斐波那契数列"></p></blockquote><h3 id="回溯算法-backtracking-algorithm" tabindex="-1"><a class="header-anchor" href="#回溯算法-backtracking-algorithm"><span>回溯算法 Backtracking algorithm</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 回溯算法</span>
从解决问题每一步的所有可能选项里系统选择出一个可行的解决方案。
在某一步选择一个选项后，进入下一步，然后面临新的选项。重复选择，直至达到最终状态。
回溯法解决的问题的所有选项可以用树状结构表示。

在某一步有n个可能的选项，该步骤可看作树中一个节点。
节点每个选项看成节点连线，到达它的n个子节点。
叶节点对应终结状态。
叶节点满足约束条件，则为一个可行的解决方案。
叶节点不满足约束条件，回溯到上一个节点，并尝试其他叶子节点。
节点所有子节点均不满足条件，再回溯到上一个节点。
所有状态均不能满足条件，问题无解。



<span class="token comment">### 应用</span>
回溯算法适合由多个步骤组成的问题，并且每个步骤都有多个选项。
<span class="token number">1</span>. 二叉树中和为某一值的路径
<span class="token number">2</span>. 字符串的排列
<span class="token number">3</span>. 和为sum的n个数
<span class="token number">4</span>. 矩阵中的路径
<span class="token number">5</span>. 机器人的运动范围
<span class="token number">6</span>. N皇后问题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt="回溯算法"></p></blockquote><h3 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划"><span>动态规划</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 动态规划</span>
动态规划往往是最能有效考察算法和设计能力的题目类型，面对这类题目最重要的是抓住问题的阶段，了解每个阶段的状态，从而分析阶段之间的关系转化。

适用于动态规划的问题，需要满足最优子结构和无后效性，动态规划的求解过程，在于找到状态转移方程，进行自底向上的求解。

自底向上的求解，可以帮你省略大量的复杂计算，例如上面的斐波拉契数列，使用递归的话时间复杂度会呈指数型增长，而动态规划则让此算法的时间复杂度保持在O<span class="token punctuation">(</span>n<span class="token punctuation">)</span>。


<span class="token comment">### 路径问题</span>
最小路径和
不同路径
不同路径 II
形成字符串的最短路径

<span class="token comment">### 买卖股票类问题</span>
买卖股票的最佳时机
买卖股票的最佳时机 III
打家劫舍
打家劫舍 II

<span class="token comment">### 子序列问题</span>
不同的子序列
乘积最大子序列
最长上升子序列
最长回文子序列
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="贪心算法" tabindex="-1"><a class="header-anchor" href="#贪心算法"><span>贪心算法</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 贪心算法</span>
贪心算法：对问题求解的时候，总是做出在当前看来是最好的做法。

适用贪心算法的场景：问题能够分解成子问题来解决，子问题的最优解能递推到最终问题的最优解。这种子问题最优解成为最优子结构

<span class="token comment">### 买卖股票类问题</span>
买卖股票的最佳时机 II
买卖股票的最佳时机含手续费

<span class="token comment">### 货币选择问题</span>
零钱兑换
零钱兑换 II
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="贪心算法、动态规划、回溯的区别" tabindex="-1"><a class="header-anchor" href="#贪心算法、动态规划、回溯的区别"><span>贪心算法、动态规划、回溯的区别</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 贪心算法、动态规划、回溯的区别</span>
贪心算法与动态规划的不同在于它对每个子问题的解决方案都作出选择，不能回退，动态规划则会保存以前的运算结果，并根据以前的结果对当前进行选择，有回退功能，而回溯算法就是大量的重复计算来获得最优解。

回溯算法：重复计算
贪心算法：永远局部最优
动态规划：记录局部最优子结构、多种记录值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="分治法" tabindex="-1"><a class="header-anchor" href="#分治法"><span>分治法</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 分治法</span>
分治法（Divide and Conquer，DAC）是基于多项分治递归的一种重要算法泛型。
字面上的解释是“分而治之”，就是把一个复杂的问题分成两个或更多的相同或相似的子问题，直到最后子问题可以简单的直接求解，原问题的解即子问题的解的合并。

它分为三个阶段：
	<span class="token number">1</span>. 分解：将问题分解为子问题。
	<span class="token number">2</span>. 解决：使用递归解决子问题。
	<span class="token number">3</span>. 合并：将子问题的结果合并到最终解决方案中。

常用场景：
	DAC 是许多高效算法的基础，例如：如排序算法（归并排序、快速排序）、傅立叶变换（快速傅立叶变换）、二进制搜索等。

特性：
  - 每个 DAC 问题都可以写成递归关系。因此，找到停止递归的基本情况至关重要。
  - 它的复杂度为 <span class="token string">&#39;T(n)= D(n) + C(n) + M(n)&#39;</span>，这意味着每个阶段的复杂度取决于问题。
  
  
leetcode
<span class="token punctuation">[</span>分治算法<span class="token punctuation">]</span><span class="token punctuation">(</span>https://leetcode-cn.com/tag/divide-and-conquer/problemset/<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="搜素查找-search" tabindex="-1"><a class="header-anchor" href="#搜素查找-search"><span>搜素查找 Search</span></a></h2><h3 id="二分查找-binarysearch" tabindex="-1"><a class="header-anchor" href="#二分查找-binarysearch"><span>二分查找 BinarySearch</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 二分查找 BinarySearch</span>
二分搜索算法是一种经典算法，它允许我们在时间复杂度为 <span class="token variable"><span class="token variable">\`</span>O<span class="token punctuation">(</span>log n<span class="token punctuation">)</span><span class="token variable">\`</span></span> 的 <span class="token string">&#39;有序集合&#39;</span> 中查找给定元素的索引。
二分查找维护查找空间的左、右和中间指示符，并比较查找目标或将查找条件应用于集合的中间值；如果条件不满足或值不相等，则清除目标不可能存在的那一半，并在剩下的一半上继续查找，直到成功为止。如果查以空的一半结束，则无法满足条件，并且无法找到目标。

二分查找的条件是必须是有序的线性表。
和线性表的中点值进行比较，如果小就继续在小的序列中查找，如此递归直到找到相同的值。


<span class="token comment">### 二分查找的实现</span>
<span class="token number">1</span>. 数据初始化定义
		left <span class="token operator">=</span> <span class="token number">0</span>
		right <span class="token operator">=</span> length - <span class="token number">1</span>
		middle <span class="token operator">=</span> left + <span class="token punctuation">(</span>right - left<span class="token punctuation">)</span> / <span class="token number">2</span>
<span class="token number">2</span>. 当 left <span class="token operator">&lt;=</span> right，
		如果 middle 上的值等于 target，返回middle；
		如果小于 target，left <span class="token operator">=</span> middle + <span class="token number">1</span> （砍掉左半边）；
		如果大于 target，right <span class="token operator">=</span> middle - <span class="token number">1</span> （砍掉右半边）。
<span class="token number">3</span>. 如果 <span class="token keyword">while</span> 循环结束后都没有找到 target，返回 -1。


<span class="token comment">## 应用</span>
<span class="token number">1</span>. 二维数组查找
<span class="token number">2</span>. 旋转数组的最小数字
<span class="token number">3</span>. 在排序数组中查找数字
<span class="token number">4</span>. x 的平凡根
<span class="token number">5</span>. 猜数字大小
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+`" alt="二分查找"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span>  <span class="token function-variable function">BinarySearch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> middle <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> middle
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>middle<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      right <span class="token operator">=</span> middle <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      left <span class="token operator">=</span> middle <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="递归式二分查找" tabindex="-1"><a class="header-anchor" href="#递归式二分查找"><span>递归式二分查找</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">binarySearch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> target<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&gt;</span> end<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token keyword">const</span> middle <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>end <span class="token operator">+</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token keyword">return</span> middle
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> target<span class="token punctuation">,</span> start<span class="token punctuation">,</span> middle<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> target<span class="token punctuation">,</span> middle <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">binarySearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="跳跃搜索-jumpsearch" tabindex="-1"><a class="header-anchor" href="#跳跃搜索-jumpsearch"><span>跳跃搜索 JumpSearch</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 跳跃搜索 JumpSearch</span>
与二分查找类似，跳跃搜索（或块搜索）是一种有序数组的搜索算法。基本思想是通过跳过固定步骤或跳过某些元素来代替搜索所有元素，从而实现检索更少的元素（如线性搜索）。

如假设有一个大小为 n 的数组 arr<span class="token punctuation">[</span><span class="token punctuation">]</span> 和大小为 m 的块<span class="token punctuation">(</span>要跳转的大小块<span class="token punctuation">)</span>。然后搜索索引 arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>、arr<span class="token punctuation">[</span>m<span class="token punctuation">]</span>、arr<span class="token punctuation">[</span><span class="token number">2</span>*m<span class="token punctuation">]</span><span class="token punctuation">..</span>.。
一旦我们找到区间 arr<span class="token punctuation">[</span>k*m<span class="token punctuation">]</span> <span class="token operator">&lt;</span> x <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span><span class="token punctuation">(</span>k+1<span class="token punctuation">)</span>*m<span class="token punctuation">]</span>，我们就从索引 k*m 执行线性搜索操作以找到元素 x。

要跳过的最佳块大小是多少？
在最坏的情况下，我们必须执行 n/m 个跳转，如果最后检查的值大于要搜索的元素，我们将对线性搜索执行 m-1 个比较。因此，最坏情况下的比较总数为  <span class="token punctuation">((</span>n/m<span class="token punctuation">)</span> + m - <span class="token number">1</span><span class="token punctuation">)</span>。
当 m <span class="token operator">=</span> √n 时，函数值 <span class="token punctuation">((</span>n/m<span class="token punctuation">)</span> + m - <span class="token number">1</span><span class="token punctuation">)</span> 将最小。因此最佳步长为 m <span class="token operator">=</span> √n。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">jumpSearch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">sortedArray<span class="token punctuation">,</span> seekElement</span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arraySize <span class="token operator">=</span> sortedArray<span class="token punctuation">.</span>length
  <span class="token comment">// 在空数组中找不到任何内容</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>sortedArray<span class="token punctuation">)</span> <span class="token operator">||</span> arraySize <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>

  <span class="token keyword">const</span> blockSize <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>arraySize<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token comment">// 查找seekElement所属的块</span>
  <span class="token keyword">let</span> blockStart <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> blockEnd <span class="token operator">=</span> blockSize
  <span class="token keyword">while</span> <span class="token punctuation">(</span>sortedArray<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>blockEnd<span class="token punctuation">,</span> arraySize<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> seekElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 跳到下一个块</span>
    blockStart <span class="token operator">=</span> blockEnd
    blockEnd <span class="token operator">+=</span> blockSize

    <span class="token comment">// 如果我们的下一个块超出了数组，那么我们找不到元素</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>blockStart <span class="token operator">&gt;</span> arraySize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 从blockStart开始在子数组中线性搜索seekElement</span>
  <span class="token keyword">let</span> currentIndex <span class="token operator">=</span> blockStart
  <span class="token keyword">while</span> <span class="token punctuation">(</span>currentIndex <span class="token operator">&lt;</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>blockEnd<span class="token punctuation">,</span> arraySize<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>sortedArray<span class="token punctuation">[</span>currentIndex<span class="token punctuation">]</span> <span class="token operator">===</span> seekElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> currentIndex
    <span class="token punctuation">}</span>

    currentIndex<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="插值查找-interpolation-search" tabindex="-1"><a class="header-anchor" href="#插值查找-interpolation-search"><span>插值查找 Interpolation Search</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 插值查找 Interpolation Search</span>
插值搜索是一种用于搜索数组中的关键字的算法，该关键字由分配给关键字的数值<span class="token punctuation">(</span>关键字值<span class="token punctuation">)</span>排序。
时间复杂度：O<span class="token punctuation">(</span>log<span class="token punctuation">(</span>log<span class="token punctuation">(</span>n<span class="token punctuation">))</span>
对于数据量大且分布均匀的有序序列来说，插值查找的速度较快。对于分布不均匀的有序序列来说，该算法不一定比二分查找要好。

例如，有一个由 n 个均匀分布值组成的排序数组，我们需要编写一个函数来搜索数组中特定元素 x。
线性搜索在 O<span class="token punctuation">(</span>n<span class="token punctuation">)</span> 时间内找到元素，跳跃搜搜需要 O<span class="token punctuation">(</span>√n<span class="token punctuation">)</span> 时间，二分搜索需要 O<span class="token punctuation">(</span>log n<span class="token punctuation">)</span> 时间。

插值搜索是对二进制搜索实例的改进，其中数组中的值是 <span class="token string">&#39;均匀分布且有序&#39;</span> 的。二进制搜索总是转到中间元素进行检查。另一方面，内插搜索可以根据被搜索的关键字的值到达不同的位置。例如，如果关键字的值更接近最后一个元素，则插值搜索可能会开始末端搜索。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">interpolationSearch</span> <span class="token punctuation">(</span><span class="token parameter">sortedArray<span class="token punctuation">,</span> seekElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> leftIndex <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> rightIndex <span class="token operator">=</span> sortedArray<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>leftIndex <span class="token operator">&lt;=</span> rightIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> rangeDelta <span class="token operator">=</span> sortedArray<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span> <span class="token operator">-</span> sortedArray<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span>
    <span class="token keyword">const</span> indexDelta <span class="token operator">=</span> rightIndex <span class="token operator">-</span> leftIndex
    <span class="token keyword">const</span> valueDelta <span class="token operator">=</span> seekElement <span class="token operator">-</span> sortedArray<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span>

    <span class="token comment">// 如果 valueDelta &lt; 0，表示没有查找元素</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>valueDelta <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>

    <span class="token comment">// 如果范围增量为 0，则子数组包含所有相同的数字</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>rangeDelta<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 此操作是避免 middleIndex 计算</span>
      <span class="token keyword">return</span> sortedArray<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span> <span class="token operator">===</span> seekElement <span class="token operator">?</span> leftIndex <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 对中间索引进行插值</span>
    <span class="token keyword">const</span> middleIndex <span class="token operator">=</span>
      leftIndex <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>valueDelta <span class="token operator">*</span> indexDelta<span class="token punctuation">)</span> <span class="token operator">/</span> rangeDelta<span class="token punctuation">)</span>

    <span class="token comment">// 如果我们找到了元素，就返回它的位置</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>sortedArray<span class="token punctuation">[</span>middleIndex<span class="token punctuation">]</span> <span class="token operator">===</span> seekElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> middleIndex
    <span class="token punctuation">}</span>

    <span class="token comment">// 决定下一步要选择哪一半：左一半还是右一半</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>sortedArray<span class="token punctuation">[</span>middleIndex<span class="token punctuation">]</span> <span class="token operator">&lt;</span> seekElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      leftIndex <span class="token operator">=</span> middleIndex <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      rightIndex <span class="token operator">=</span> middleIndex <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+`" alt="image-20230313103936274"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">interpolationSearch</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">arr</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> lo <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> hi <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>lo <span class="token operator">&lt;=</span> hi <span class="token operator">&amp;&amp;</span> x <span class="token operator">&gt;=</span> arr<span class="token punctuation">[</span>lo<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> x <span class="token operator">&lt;=</span> arr<span class="token punctuation">[</span>hi<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在考虑均匀分布的情况下探索位置</span>
    <span class="token keyword">const</span> pos <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>lo <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>hi <span class="token operator">-</span> lo<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>hi<span class="token punctuation">]</span> <span class="token operator">-</span> arr<span class="token punctuation">[</span>lo<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>x <span class="token operator">-</span> arr<span class="token punctuation">[</span>lo<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// 如果x与之相等</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>pos<span class="token punctuation">]</span> <span class="token operator">===</span> x<span class="token punctuation">)</span> <span class="token keyword">return</span> pos

    <span class="token comment">// 如果x较大，则x在右侧子数组中</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>pos<span class="token punctuation">]</span> <span class="token operator">&lt;</span> x<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">interpolationSearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> x<span class="token punctuation">,</span> pos <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> hi<span class="token punctuation">)</span>

    <span class="token comment">// 如果x较小，则x在左侧子数组中</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>pos<span class="token punctuation">]</span> <span class="token operator">&gt;</span> x<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">interpolationSearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> x<span class="token punctuation">,</span> lo<span class="token punctuation">,</span> pos <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">interpolationSearch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token number">47</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="指数查找-exponential-search" tabindex="-1"><a class="header-anchor" href="#指数查找-exponential-search"><span>指数查找 Exponential Search</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 指数查找 Exponential Search</span>
原理：
基本思路是从子数组的大小为1开始，将其最后一个元素与x进行比较，然后尝试大小为2，然后是4，以此类推（即2的N次方,N的取值为0，1，2，3…<span class="token punctuation">)</span>，直到子数组的最后一个元素不大于x为止。
一旦找到索引i<span class="token punctuation">(</span>在i重复翻倍之后<span class="token punctuation">)</span>，就知道元素必须存在于i/2和i之间<span class="token punctuation">(</span>为什么是i/2?因为我们在之前的迭代中找不到更大的值<span class="token punctuation">)</span>


适用场景
<span class="token number">1</span>. 指数查找对于无界查找特别有用，因为数组的大小是无限的。请参考下面无界二分查找。
<span class="token number">2</span>. 对于有边界的数组，它比Binary Search（二分查找）工作得更好，而且当要搜索的元素更靠近第一个元素时也是如此。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h2 id="十大排序-sort" tabindex="-1"><a class="header-anchor" href="#十大排序-sort"><span>十大排序 Sort</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 十大排序</span>
- 快速排序
选择一个目标值，比目标值小的放左边，比目标值大的放右边，目标值的位置已排好，将左右两侧再进行快排。

- 归并排序
将大序列二分成小序列，将小序列排序后再将排序后的小序列归并成大序列。

- 选择排序
每次排序取一个最大或最小的数字放到前面的有序序列中。

- 插入排序
将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位。

- 冒泡排序
循环数组，比较当前元素和下一个元素，如果当前元素比下一个元素大，向上冒泡。下一次循环继续上面的操作，不循环已经排序好的数。

- 堆排序
创建一个大顶堆，大顶堆的堆顶一定是最大的元素。交换第一个元素和最后一个元素，让剩余的元素继续调整为大顶堆。从后往前以此和第一个元素交换并重新构建，排序完成。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+`" alt="img"></p></blockquote><h3 id="冒泡排序-bubblesort" tabindex="-1"><a class="header-anchor" href="#冒泡排序-bubblesort"><span>冒泡排序 BubbleSort</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 冒泡排序 BubbleSort</span>
原理：从第一个元素开始，把当前元素和下一个索引元素进行比较。如果当前元素大，那么就交换位置，重复操作直到比较到最后一个元素。
  - 冒泡排序是从低到高（或从高到低）的单向排序。
  - 注意：一般来说，排好序的元素都是放在数组最后面（因为大的会放后面），所以第二个循环要 -i。



<span class="token comment">## 双向冒泡排序（鸡尾酒排序）</span>
原理：双向冒泡排序是从 <span class="token number">2</span> 个方向进行排序，较大的气泡从左到右移动，较小的气泡从右到左移动，两边遍历指针相遇时完成排序。
	- 双向冒泡排序是从2个方向进行排序，奇数趟从低到高，偶数趟从高到底，2边遍历指针相遇时，排序结束。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+`" alt="åæ³¡æåº"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 冒泡排序 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">bubbleSort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// -i 是因为最后面的元素都已经排好序，不需要再比较</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
<span class="token function">bubbleSort</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="双向冒泡排序-鸡尾酒排序" tabindex="-1"><a class="header-anchor" href="#双向冒泡排序-鸡尾酒排序"><span>双向冒泡排序（鸡尾酒排序）</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 鸡尾酒排序 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">bothwayBubbleSort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 较大气泡从左到右移动</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    left<span class="token operator">++</span>

    <span class="token comment">// 较小气泡从右向左移动</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> left<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    right<span class="token operator">--</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token function">bothwayBubbleSort</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="选择排序-selectionsort" tabindex="-1"><a class="header-anchor" href="#选择排序-selectionsort"><span>选择排序 SelectionSort</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 选择排序 SelectionSort</span>
<span class="token comment">### 原理</span>
    <span class="token number">1</span>. 遍历数组，设置最小值的索引为 <span class="token number">0</span>，如果取出的值比当前最小值小，就替换最小值索引。
    <span class="token number">2</span>. 遍历完成后，将第一个元素和最小值索引上的值替换。
    <span class="token number">3</span>. 如上操作后，第一个元素就是数组中的最小值，下次遍历就可以才能够所以 <span class="token number">1</span> 开始重复上述操作。

即是不断选择最小的排列好。
但该算法时间复杂度较高，它不仅迭代数组的每一项，还会对于在每进入新的一项中，都会再次迭代数组。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+g+`" alt="img"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">selectionSort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> minIndex <span class="token operator">=</span> i
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      minIndex <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span> <span class="token operator">?</span> j <span class="token operator">:</span> minIndex
    <span class="token punctuation">}</span>
    <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
<span class="token keyword">let</span> resut <span class="token operator">=</span> <span class="token function">selectionSort</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="快速排序-quicksort" tabindex="-1"><a class="header-anchor" href="#快速排序-quicksort"><span>快速排序 QuickSort</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 快速排序 QuickSort</span>
快速排序的特点就是快，而且效率高。它是处理大数据最快的排序算法之一。
特点：快速，常用。
缺点：需要另外声明两个数组，浪费了内存空间资源。
在数据集中，找一个基点，建立两个数组，分别存储左边和右边的数组，利用递归进行下次比较，直到数组不可拆分时完成排序。
    <span class="token number">1</span>. 在数列中挑选一个元素称为 <span class="token string">&#39;基准 pivot&#39;</span>（一般选择数组的中位数）。
    <span class="token number">2</span>. 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数为了排序稳定，要放在左边）。
    在这个分区退出后，该基准就处于数列的中间位置。这个称为分区<span class="token punctuation">(</span>partition<span class="token punctuation">)</span>操作。
    <span class="token number">3</span>. 递归地<span class="token punctuation">(</span>recursive<span class="token punctuation">)</span>把小于基准值元素的子数列和大于基准元素的子数列排序。


<span class="token comment">### 原理（可理解为分治法）</span>
    <span class="token number">1</span>. 在数列中挑选一个元素称为 <span class="token string">&#39;基准 pivot&#39;</span>（一般选择数组的中部）
    <span class="token number">2</span>. 然后数组被该基准点分为两部分，依次与该基准点数据比较，如果比它小，放左边；反之放右边。
    <span class="token number">3</span>. 左右分别用一个空数组去存储比较后的数据。
    <span class="token number">4</span>. 最后递归执行上述操作，知道数组长度 <span class="token operator">&lt;=</span> <span class="token number">1</span>。


<span class="token comment">### 分析</span>
<span class="token number">1</span>. 快速排序是原地排序算法
	快速排序进行分区时，不需要很多额外的内存空间。
	
<span class="token number">2</span>. 快速排序不稳定
	快速排序每次交换的元素都有可能不是相邻的，因此它有可能打破原来值为相同的元素之间的排序。
	
<span class="token number">3</span>. 快速排序的事件复杂度
	极端例子：如果数组中的数据原来已经有序，如果我们每次选择最后一个元素作为 pivot，那每次分区得到的两个区间都是不均等的。此时需要进行大约 n 次分区操作才能完成快排的整个过程。
	在每次我们平均要扫描大约 n/2 个元素，这种情况下，快速排序的时间复杂度就从 O<span class="token punctuation">(</span>n log n<span class="token punctuation">)</span> 退化成 O<span class="token punctuation">(</span>n^2<span class="token punctuation">)</span>。
	最佳情况：T<span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=</span> O<span class="token punctuation">(</span>n log n<span class="token punctuation">)</span>
	最差情况：T<span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=</span> O<span class="token punctuation">(</span>N^2<span class="token punctuation">)</span>
	平均情况：T<span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=</span> O<span class="token punctuation">(</span>n log n<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+y+`" alt="å¿«éæåº"></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">quickSort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> arr
  <span class="token keyword">const</span> left<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> right<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token comment">// 基准点（一般去中间值）</span>
  <span class="token keyword">const</span> pivotIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> pivot <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>pivotIndex<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> pivot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      right<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      left<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 递归</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token function">quickSort</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> pivot<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token function">quickSort</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="快速排序-归并排序-的分治思想区别" tabindex="-1"><a class="header-anchor" href="#快速排序-归并排序-的分治思想区别"><span>快速排序 &amp; 归并排序 的分治思想区别</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 快速排序 &amp; 归并排序 的分治思想区别</span>
<span class="token number">1</span>. 处理过程
	- 归并排序的处理过程是 <span class="token string">&#39;由下而上&#39;</span> 的，先处理子问题，然后再合并。
	- 快速排序的处理过程是 <span class="token string">&#39;由上而下&#39;</span> 的，先分区，然后再处理子问题。
<span class="token number">2</span>. 是否为原地排序算法
	- 归并排序虽然是稳定的、事件复杂度为 O<span class="token punctuation">(</span>nlogn<span class="token punctuation">)</span> 的排序算法，但它是非原地排序算法<span class="token punctuation">(</span>合并函数无法在原地执行<span class="token punctuation">)</span>。
	- 快速排序通过原地分区函数，可以实现原地排序，解决了归并排序占用太多内存的问题。
<span class="token number">3</span>. 排序稳定性
	- 归并排序虽然是稳定的、事件复杂度为 O<span class="token punctuation">(</span>nlogn<span class="token punctuation">)</span> 的排序算法
	- 快速排序每次交换的元素都有可能不是相邻的，因此它有可能打破原来值为相同的元素之间的排序。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+w+`" alt="image-20230327145750504"></p></blockquote><h3 id="插入排序-insertsort" tabindex="-1"><a class="header-anchor" href="#插入排序-insertsort"><span>插入排序 InsertSort</span></a></h3><h4 id="直接插入排序" tabindex="-1"><a class="header-anchor" href="#直接插入排序"><span>直接插入排序</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 直接插入排序</span>
原理：第一个元素默认是已排序元素，取出下一个元素和当前元素比较，如果当前元素大就交换位置。那么此时第一个元素就是当前的最小数，所以下一次取出操作从第三个元素开始，向前对比，重复之前的操作。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+f+`" alt="img"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 插入排序 */</span>
<span class="token comment">/* 取后面的数跟前面的数比较，如果比前面的数小，则放到前面去；直到前面没有数比他小为止
如果比前面的数大，则跳出此次，开始下一次循环 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">InsertSort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token keyword">break</span>
         <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
           <span class="token punctuation">;</span><span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
         <span class="token punctuation">}</span>
       <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
     <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
<span class="token function">insertSort</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="折半-二分-插入排序" tabindex="-1"><a class="header-anchor" href="#折半-二分-插入排序"><span>折半(二分)插入排序</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 折半(二分)插入排序</span>
直接插入排序的升级版，插入时与已排序好的序列的中间值<span class="token punctuation">(</span>除以2向下取整<span class="token punctuation">)</span>对比，可缩小一般的对比范围。

<span class="token variable"><span class="token variable">\`</span>x<span class="token operator">&gt;&gt;</span><span class="token number">1</span><span class="token variable">\`</span></span> 是位运算中的右移运算, 表示右移一位, 等同于x除以2再取整, 即 <span class="token variable"><span class="token variable">\`</span>x<span class="token operator">&gt;&gt;</span><span class="token number">1</span> <span class="token operator">==</span> Math.floor<span class="token punctuation">(</span>x/2<span class="token punctuation">)</span><span class="token variable">\`</span></span>。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 折半(二分)插入排序 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">binaryInsertionSort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> current<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">,</span> middle
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       low <span class="token operator">=</span> <span class="token number">0</span>
       high <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span>
       current <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>

       <span class="token comment">// 步骤 1&amp;2：折半查找</span>
       <span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;=</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         middle <span class="token operator">=</span> <span class="token punctuation">(</span>low <span class="token operator">+</span> high<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span>

         <span class="token comment">// 值相同时，切换到高半区，保证稳定性</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> arr<span class="token punctuation">[</span>middle<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token comment">// 插入点在高半区</span>
           low <span class="token operator">=</span> middle <span class="token operator">+</span> <span class="token number">1</span>
         <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
           <span class="token comment">// 插入点在低半区</span>
           high <span class="token operator">=</span> middle <span class="token operator">-</span> <span class="token number">1</span>
         <span class="token punctuation">}</span>
       <span class="token punctuation">}</span>

       <span class="token comment">// 步骤3：插入位置之后的元素全部后移一位</span>
       <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&gt;</span> low<span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
       <span class="token punctuation">}</span>

       <span class="token comment">// 步骤4：插入当前元素</span>
       arr<span class="token punctuation">[</span>low<span class="token punctuation">]</span> <span class="token operator">=</span> current
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token function">binaryInsertionSort</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="归并排序-mergesort" tabindex="-1"><a class="header-anchor" href="#归并排序-mergesort"><span>归并排序 MergeSort</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 归并排序 MergeSort</span>
归并排序是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。
归并排序可通过两种方式实现：
  <span class="token number">1</span>. 自上而下的递归（把它的输入分成几个小节，直到每个小节只剩下一个元素）
  <span class="token number">2</span>. 自下而上的迭代（将其所有子部分合并（并排序）为一个现在已排序的大部分）


<span class="token comment">### 原理</span>
  <span class="token number">1</span>. 把长度为 n 的数组拆分为两个长度为 n/2 的子数组
    （拆分的两个子数组, 再继续递归拆分为更小的子数组, 进而分别排序, 直到数组长度为1, 直接返回该数组为止）
  <span class="token number">2</span>. 对这两个子数组分别排序；
  <span class="token number">3</span>. 将两个排序好的子数组合并。


<span class="token comment">### 分析</span>
<span class="token number">1</span>. 归并排序不是原地排序算法
		归并排序的合并函数，在合并两个有序数组为一个有序数组时，需要借助额外的存储空间。虽然每次合并操作都需要申请额外的内存空间，但在合并完成后，临时开辟的内存空间就被释放掉。所以在任意时刻，CPU 只会有一个函数在执行，也就只有一个临时的内存空间在使用。临时空间最大也不会超过 N 个数据的大小。所以空间复杂度为 O<span class="token punctuation">(</span>n<span class="token punctuation">)</span>。

<span class="token number">2</span>. 归并排序是稳定的排序算法
	merge 的方法里面的 left<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> right<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> 保证了值相同的元素在合并前后的先后顺序不变。归并排序是一种稳定的排序算法。

<span class="token number">3</span>. 归并排序的时间复杂度
	假设数组长度为 n，那么拆分数组共需 log n 步，又每步都是一个普通的合并子数组的过程，时间复杂度为 O<span class="token punctuation">(</span>n<span class="token punctuation">)</span>。
	故其综合时间复杂度为 O<span class="token punctuation">(</span>n log n<span class="token punctuation">)</span>。
	最佳情况：T<span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=</span> O<span class="token punctuation">(</span>n log n<span class="token punctuation">)</span>
	最差情况：T<span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=</span> O<span class="token punctuation">(</span>n log n<span class="token punctuation">)</span>
	平均情况：T<span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=</span> O<span class="token punctuation">(</span>n log n<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+x+`" alt="img"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 归并排序 */</span>
<span class="token comment">// 采用自上而下的递归方法</span>
<span class="token keyword">const</span> <span class="token function-variable function">mergeSort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> arr
  <span class="token keyword">const</span> middle <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> left <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> middle<span class="token punctuation">)</span>
  <span class="token keyword">const</span> right <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>middle<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token function">mergeSort</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">left</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token literal-property property">right</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">result</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>left<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> right<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 不断比较 left 和 right 数组的第一项，小的取出存入 res</span>
    <span class="token comment">// 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.</span>
    left<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> right<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">?</span> result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">:</span> result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>right<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">mergeSort</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 归并排序 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">mergeSort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> arr
  <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> l <span class="token operator">=</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> r <span class="token operator">=</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>mid<span class="token punctuation">,</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> l<span class="token punctuation">.</span>length <span class="token operator">+</span> r<span class="token punctuation">.</span>length <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>l<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> r<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>r<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> l<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span> <span class="token keyword">return</span> l<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> r<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">?</span> r<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> l<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">mergeSort</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="希尔排序-shellsort" tabindex="-1"><a class="header-anchor" href="#希尔排序-shellsort"><span>希尔排序 ShellSort</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 希尔排序 ShellSort</span>
希尔排序，也称递减增量排序算法， 是插入排序的一种更高效的改进版本。
	- 插入排序在对几乎已经排好序的数据操作时，效率高（可以达到线性排序的效率）。
	- 但因为插入排序每次只能将数据移动一位，所以插入排序一般是低效的。
希尔排序的基本思想是：先将整个待排序的记录序列分割称为若干子序列，并分别进行 <span class="token string">&#39;直接插入排序&#39;</span>，直到整个序列表的记录 <span class="token string">&#39;基本有序&#39;</span> 时，再对全体记录进行依次 <span class="token string">&#39;直接插入排序&#39;</span>。


<span class="token comment">### 原理</span>
    <span class="token number">1</span>. 将数组拆分为若干个子分组，每个分组由相距一定 <span class="token string">&#39;增量&#39;</span> 的元素组成。
    <span class="token number">2</span>. 然后对每个子分组应用 <span class="token string">&#39;直接插入排序&#39;</span>。
    <span class="token number">3</span>. 逐步减少 <span class="token string">&#39;增量&#39;</span>，重复步骤 <span class="token number">1</span>、2。
    <span class="token number">4</span>. 直到 <span class="token string">&#39;增量为 1&#39;</span>，这是最后一个排序，此时对全数组进行直接插入排序。
    注意：一般情况下，<span class="token string">&#39;增量 = 待分组序列长度 / 2&#39;</span>，并向下取整。


<span class="token comment">### 分析</span>
<span class="token number">1</span>. 希尔排序是原地算法
	希尔排序过程中，只设计相邻数据的交换操作，只需要常量级的临时空间，空间复杂度为 O<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>。
<span class="token number">2</span>. 希尔排序不稳定
	单次直接插入排序是稳定的，它不会改变相同元素之间的相对顺序，但在多次不同的插入排序过程中，相同的元素可能在各自的插入排序中移动，可能导致相同元素的相对顺序发生变化。
<span class="token number">3</span>. 希尔排序的时间复杂度
	最佳情况：T<span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=</span> O<span class="token punctuation">(</span>n logn<span class="token punctuation">)</span>
	最差情况：T<span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=</span> O<span class="token punctuation">(</span>n <span class="token punctuation">(</span>log<span class="token punctuation">(</span>n<span class="token punctuation">))</span><span class="token number">2</span><span class="token punctuation">)</span>
	平均情况：T<span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=</span> 取决于间隙序列
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+N+`" alt="image-20210922185514310"></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 希尔排序 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">ShellSort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 动态定义间隔序列</span>
  <span class="token keyword">let</span> gap <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token comment">// 每次递减增量，直到为1</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> gap<span class="token punctuation">;</span> gap <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> gap <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>gap <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 按组进行排序</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> gap<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 获取当前元素</span>
      <span class="token keyword">const</span> currentVal <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token keyword">let</span> j <span class="token operator">=</span> i
      <span class="token comment">// 将相邻元素比较，满足条件就后移</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>j<span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> currentVal<span class="token punctuation">;</span> j <span class="token operator">-=</span> gap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> gap<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 将当前元素插入合适的位置</span>
      arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> currentVal
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token function">ShellSort</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="堆排序-heapsort" tabindex="-1"><a class="header-anchor" href="#堆排序-heapsort"><span>堆排序 HeapSort</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 堆排序 HeapSort</span>
堆排序是指利用 <span class="token string">&#39;堆&#39;</span> 这种数据结构所设计的一种排序算法。
堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引值总是小于（或大于）它的父节点。
		<span class="token number">1</span>. 大顶堆：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于升序排列。
    <span class="token number">2</span>. 小顶堆：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于降序排列。
堆排序简单描述：
    <span class="token number">1</span>. 比较父节点是否大于叶子节点（把最大的放在父子节点），直到一趟建堆完成，最大的一定在堆顶。
    <span class="token number">2</span>. 把堆顶和最右下的叶子节点对换，再把右下叶子节点（最大值）抽出。


<span class="token comment">### 原理</span>
<span class="token number">1</span>. 将初始待排序关键字序列（R1, R2, <span class="token punctuation">..</span>., Rn）构建成大顶堆，此堆为初始的无序区。
<span class="token number">2</span>. 将堆顶元素 R<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> 与最后一个元素 R<span class="token punctuation">[</span>n<span class="token punctuation">]</span> 交换，此时得到新的无序区（R1, R2, <span class="token punctuation">..</span>., Rn-1）和新的有序区（Rn），且满足 R<span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token punctuation">..</span>., n-1<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> R<span class="token punctuation">[</span>n<span class="token punctuation">]</span>。
<span class="token number">3</span>. 由于交换后的新堆顶 R<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> 可能违反堆的性质，因此需要对当前无序区（R1, R2, <span class="token punctuation">..</span>., Rn-1）调整为新堆，然后再次将 R<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> 与无序区最后一个元素交换，得到新的无序区（R1, R2, <span class="token punctuation">..</span>., Rn-2）和新的有序区（Rn-1, Rn）。不断重复此过程，直到有序区的元素个数为 n-1，则整个排序过程完成。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+L+`" alt="å æåº"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 堆排序 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">HeapSort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">arr</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 建立大顶堆：初始化大顶堆，从第一个非叶子节点开始</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">heapify</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 排序：每一次遍历找出一个当前最大值，数组长度减一</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token comment">// 从根节点开始调整，并且最后一个节点已经为当前最大值，不需要再参与比较，所以第三个参数为 i，即比较到最后一个结点前一个即可</span>
    <span class="token function">heapify</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token comment">// 堆调整</span>
<span class="token comment">// 2 * i  非叶子节点</span>
<span class="token keyword">const</span> <span class="token function-variable function">heapify</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// 左叶子节点</span>
  <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">2</span> <span class="token comment">// 右叶子节点</span>
  <span class="token keyword">let</span> largest <span class="token operator">=</span> i

  <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>largest<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    largest <span class="token operator">=</span> left
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>largest<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    largest <span class="token operator">=</span> right
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>largest <span class="token operator">!==</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>largest<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>largest<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token function">heapify</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> largest<span class="token punctuation">,</span> len<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">HeapSort</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="计数排序-countingsort" tabindex="-1"><a class="header-anchor" href="#计数排序-countingsort"><span>计数排序 CountingSort</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 计数排序 CountingSort</span>
- 计数排序是唯一不基于比较的排序算法，其排序速度快于任何比较排序算法。
- 适用场景：适合处理一定范围内的整数排序。
- 计数排序利用了一个特征：对于数组的某个元素，一旦知道了有多少个其它元素比它小（假设为m个），那么就可以确定出该元素的正确位置（第 m+1 位）。
- 缺陷：值不能使其为负数，否则会导致其下标为负数。


<span class="token comment">### 原理</span>
<span class="token number">1</span>. 花O<span class="token punctuation">(</span>n<span class="token punctuation">)</span>时间找出待排序的数组A的最小值min，最大值max
<span class="token number">2</span>. 开辟新的空间创建新数组B，长度为<span class="token punctuation">(</span><span class="token variable"><span class="token variable">\`</span>max - min + <span class="token number">1</span><span class="token variable">\`</span></span><span class="token punctuation">)</span>
		B中<span class="token variable"><span class="token variable">\`</span>index<span class="token variable">\`</span></span>元素记录的是A中某元素值出现的次数（<span class="token variable"><span class="token variable">\`</span>index <span class="token operator">=</span> A的元素值 - min + <span class="token number">1</span><span class="token variable">\`</span></span>）
<span class="token number">3</span>. 遍历数组A，对数组A的所有值进行计数累加（若A中出现相同值，则B中相应的下标中的值加一）	
<span class="token number">4</span>. 遍历数组B，根据其记录的值次数来计算值重新赋值给数组A（<span class="token variable"><span class="token variable">\`</span>A<span class="token punctuation">[</span>sortedIndex++<span class="token punctuation">]</span> <span class="token operator">=</span> j + min - <span class="token number">1</span><span class="token variable">\`</span></span>）


<span class="token comment">### 计数 &amp; 桶 &amp; 基数 的区别</span>
<span class="token number">1</span>. 计数排序：每个桶只存储单一键值。
<span class="token number">2</span>. 桶排序：每个桶存储一定范围的数值。
<span class="token number">3</span>. 基数排序：根据键值的每位数字来分配桶。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+S+`" alt="è®¡æ°æåº"></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 计数排序 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">countingSort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 查找出数组的最大值和最小值 */</span>
  <span class="token keyword">let</span> max <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> min <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 新开辟的空间计算数值出现的次数 */</span>
  <span class="token keyword">const</span> bucket<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> length<span class="token operator">:</span> max <span class="token operator">-</span> min <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token doc-comment comment">/** 计算次数并安入数组中 */</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    bucket<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> min <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>bucket<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> min <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 重新覆盖 arr 的值 */</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> sortedIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> bucket<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>bucket<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">[</span>sortedIndex<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> j <span class="token operator">+</span> min <span class="token operator">-</span> <span class="token number">1</span>
      bucket<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">--</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token function">countingSort</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="桶排序-bucketsort" tabindex="-1"><a class="header-anchor" href="#桶排序-bucketsort"><span>桶排序 BucketSort</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 桶排序 BucketSort</span>
- 桶排序<span class="token punctuation">(</span>箱排序<span class="token punctuation">)</span>是计数排序的升级版。
- 桶排序是将数组分配给有限数量的桶子里，每个桶里在各自排序（因此有可能使用别的排序算法或递归方式继续桶排序）。当每个桶里的元素个数趋于一致时，桶排序只需花费 O<span class="token punctuation">(</span>n<span class="token punctuation">)</span> 的时间。
- 桶排序的核心在于怎么把元素分配给每个桶里，合理地分配将大大提高排序的效率。
- 当输入的数据可以均匀地分配到每一个桶中的时候是最快的。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+j+`" alt="æ¡¶æåº2"></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 插入  */</span>
<span class="token keyword">const</span> <span class="token function-variable function">InsertSort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 桶排序
 * <span class="token keyword">@params</span> bucketSize：设置桶的默认数量为5
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">BucketSort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> bucketSize <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> arr

  <span class="token doc-comment comment">/** 计算数组的最大值和最小值 */</span>
  <span class="token keyword">const</span> min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span>
  <span class="token keyword">const</span> max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span>

  <span class="token doc-comment comment">/** 桶的初始化 */</span>
  <span class="token keyword">const</span> bucketCount <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>max <span class="token operator">-</span> min<span class="token punctuation">)</span> <span class="token operator">/</span> bucketSize<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token keyword">const</span> buckets<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;&gt;</span> <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> length<span class="token operator">:</span> bucketCount <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>_<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>

  <span class="token comment">// 利用映射函数将数据分配到各个桶中</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    buckets<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> min<span class="token punctuation">)</span> <span class="token operator">/</span> bucketSize<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 对桶排序后，循环给 arr 重新赋值</span>
  arr<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 清空数组</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> buckets<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">InsertSort</span><span class="token punctuation">(</span>buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 使用插入排序，对桶进行排序</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token function">BucketSort</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">42</span><span class="token punctuation">,</span> <span class="token number">62</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">,</span> <span class="token number">52</span><span class="token punctuation">,</span> <span class="token number">92</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="基数排序-radixsort" tabindex="-1"><a class="header-anchor" href="#基数排序-radixsort"><span>基数排序 RadixSort</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 基数排序 RadixSort</span>
基数排序是一种非比较型整数排序算法，其原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。
由于整数也可以表达字符串<span class="token punctuation">(</span>比如名字或日期<span class="token punctuation">)</span>和特定格式的浮点数，所以基数排序也不是只能使用于整数。

按照优先从高位或低位来排序有两种实现方案：
- MSD: 由高位为基底, 先按k1排序分组, 同一组中记录, 关键码k1相等, 再对各组按k2排序分成子组, 之后, 对后面的关键码继续这样的排序分组, 直到按最次位关键码kd对各子组排序后. 再将各组连接起来, 便得到一个有序序列. MSD方式适用于位数多的序列.
- LSD: 由低位为基底, 先从kd开始排序，再对kd-1进行排序，依次重复，直到对k1排序后便得到一个有序序列. LSD方式适用于位数少的序列.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+I+`" alt="åºæ°æåº"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * name: 基数排序
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> 待排序数组
 * <span class="token keyword">@param</span> <span class="token parameter">max</span> 最大位数
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">RadixSort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">arr</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">,</span> maxDigit <span class="token operator">=</span> <span class="token number">2</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">counter</span><span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> unit <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> base <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    i <span class="token operator">&lt;</span> maxDigit<span class="token punctuation">;</span>
    i<span class="token operator">++</span><span class="token punctuation">,</span> base <span class="token operator">*=</span> <span class="token number">10</span><span class="token punctuation">,</span> unit <span class="token operator">*=</span> <span class="token number">10</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 依次过滤出个位,十位等等数字</span>
      <span class="token keyword">const</span> bucket <span class="token operator">=</span> <span class="token operator">~</span><span class="token operator">~</span><span class="token punctuation">(</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">%</span> unit<span class="token punctuation">)</span> <span class="token operator">/</span> base<span class="token punctuation">)</span>
      <span class="token comment">// 初始化桶</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>counter<span class="token punctuation">[</span>bucket<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        counter<span class="token punctuation">[</span>bucket<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 往不同桶里添加数据</span>
      counter<span class="token punctuation">[</span>bucket<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> pos <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> counter<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>counter<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>value <span class="token operator">=</span> counter<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 将不同桶里数据挨个捞出来,为下一轮高位排序做准备,由于靠近桶底的元素排名靠前,因此从桶底先捞</span>
          arr<span class="token punctuation">[</span>pos<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> value
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token function">RadixSort</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">42</span><span class="token punctuation">,</span> <span class="token number">62</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">,</span> <span class="token number">52</span><span class="token punctuation">,</span> <span class="token number">92</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="经典算法" tabindex="-1"><a class="header-anchor" href="#经典算法"><span>经典算法</span></a></h2><h3 id="素数-质数" tabindex="-1"><a class="header-anchor" href="#素数-质数"><span>素数(质数)</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 素数(质数)</span>
质数<span class="token punctuation">(</span>Prime number<span class="token punctuation">)</span> 又称素数，指在大于 <span class="token number">1</span> 的自然数中，除了 <span class="token number">1</span> 和自身外，无法被其他自然数整除的数（也可定义为只有 <span class="token number">1</span> 与该数本身两个正因数的数）。

埃拉托斯特尼筛法：简称埃氏筛，也称素数筛。是一种由希腊数学家埃拉托斯特尼所提出的一种简单鉴定素数的算法。
要得到自然数 n 以内的全部素数，必须把不大于根号 n 的所有素数倍数剔除，省下的就是素数。


<span class="token comment">### LeetCode</span>
- <span class="token punctuation">[</span>回文素数<span class="token punctuation">]</span><span class="token punctuation">(</span>https://leetcode-cn.com/problems/prime-palindrome/<span class="token punctuation">)</span>
- <span class="token punctuation">[</span>第 K 个最小的素数分数<span class="token punctuation">]</span><span class="token punctuation">(</span>https://leetcode-cn.com/problems/k-th-smallest-prime-fraction/<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 埃拉托斯特尼筛法 查找所有数字
 * <span class="token keyword">@param</span> <span class="token parameter">num</span> 给定的数字
 *    1. 从 2 到给定数字生成一个数组
 *    2. 使用 filter() 筛选出可被 2 到所提供数字的平凡根的任何数字整除的值
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">primes</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> num <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> sqroot <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> numsTillSqroot <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> sqroot <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span>
  numsTillSqroot<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>arr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> y <span class="token operator">%</span> x <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">||</span> y <span class="token operator">===</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
<span class="token function">primes</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// [2, 3, 5, 7]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="杨辉三角形" tabindex="-1"><a class="header-anchor" href="#杨辉三角形"><span>杨辉三角形</span></a></h3><blockquote><ul><li>杨辉三角形（pascal triangle）又称帕斯卡三角形，是二项系数的三角形数组。</li><li>表达式为：<code>C(lineNumber, i) = C(lineNumber, i - 1) * (lineNumber - i + 1) / i</code></li><li>当前行的第i位的数值为 = 当前行的第i-1位的数值 * (当前行 - 所在位置i + 1) / 所在位置i</li></ul><p><img src="`+q+`" alt="img"></p><h3 id="获取杨辉三角形的设定行数据" tabindex="-1"><a class="header-anchor" href="#获取杨辉三角形的设定行数据"><span>获取杨辉三角形的设定行数据</span></a></h3><ul><li>第一行默认为 1，第 n 行的个数需要在 n 的基础上加 1</li><li>进行循环，每一行的每个条目都是通过将左上方的数字与右上方的数字相加来构建的，如果没有将视为为 0</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">pascalTriangle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">lineNumber</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> currentLine <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> currentLineSize <span class="token operator">=</span> lineNumber <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> currentLineSize<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    currentLine<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>currentLine<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token punctuation">(</span>lineNumber <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> i
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> currentLine
<span class="token punctuation">}</span>

<span class="token function">pascalTriangle</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// [1]</span>
<span class="token function">pascalTriangle</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// [1, 1]</span>
<span class="token function">pascalTriangle</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// [1, 2, 1]</span>
<span class="token function">pascalTriangle</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// [1, 3, 3, 1]</span>
<span class="token function">pascalTriangle</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// [1, 4, 6, 4, 1]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取杨辉三角形设定行所有数据" tabindex="-1"><a class="header-anchor" href="#获取杨辉三角形设定行所有数据"><span>获取杨辉三角形设定行所有数据</span></a></h3><ul><li>使用动态规划，获取上一层的j-1列与j列的和</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">numRows</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">generate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">numRows <span class="token operator">=</span> <span class="token number">5</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>numRows <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numRows<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> preArr <span class="token operator">=</span> result<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    row<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> preArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      row<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>preArr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> preArr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    row<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="k均值" tabindex="-1"><a class="header-anchor" href="#k均值"><span>K均值</span></a></h3><blockquote><ul><li>k-均值算法（k-means clustering）源于信号处理中的一种向量量化方法，现在则更多地作为一种聚类分析方法流行于数据挖掘和机器学习领域。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h3 id="数组乱序-洗牌算法" tabindex="-1"><a class="header-anchor" href="#数组乱序-洗牌算法"><span>数组乱序 - 洗牌算法</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 数组乱序 - 洗牌算法</span>
从最后一个元素开始，从数组中随机选出一个位置来交换，直到第一个元素为止。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">disorder</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
  <span class="token keyword">let</span> current <span class="token operator">=</span> length <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>current <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> random <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> length<span class="token punctuation">)</span>
    <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>current<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>random<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>random<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>current<span class="token punctuation">]</span><span class="token punctuation">]</span>
    current<span class="token operator">--</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="字符串-string" tabindex="-1"><a class="header-anchor" href="#字符串-string"><span>字符串 String</span></a></h2><h3 id="判断字符串是否表示为数值" tabindex="-1"><a class="header-anchor" href="#判断字符串是否表示为数值"><span>判断字符串是否表示为数值</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 判断字符串是否表示为数值</span>
请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。 
例如，字符串 <span class="token string">&quot;+100&quot;</span>, <span class="token string">&quot;5e2&quot;</span>, <span class="token string">&quot;-123&quot;</span>, <span class="token string">&quot;3.1416&quot;</span> 和 <span class="token string">&quot;-1E-16&quot;</span> 都表示数值。 
但是 <span class="token string">&quot;12e&quot;</span>, <span class="token string">&quot;1a3.14&quot;</span>, <span class="token string">&quot;1.2.3&quot;</span>, <span class="token string">&quot;+-5&quot;</span> 和 <span class="token string">&quot;12e+4.3&quot;</span> 都不是。


<span class="token comment">### 思路</span>
<span class="token number">1</span>. 只能出现数字、符号位、小数点、指数位
<span class="token number">2</span>. 小数点、指数符号只能出现一次，且不能出现在开头和结尾
<span class="token number">3</span>. 指数位出现后，小数点不允许再出现
<span class="token number">4</span>. 符号位只能出现在开头和指数位后面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isNumeric</span> <span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

  <span class="token keyword">let</span> hasPoint <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">let</span> hasExp <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> target <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> target <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 数字</span>
      <span class="token keyword">continue</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">===</span> <span class="token string">&#39;e&#39;</span> <span class="token operator">||</span> target <span class="token operator">===</span> <span class="token string">&#39;E&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 指数位</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>hasExp <span class="token operator">||</span> i <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> i <span class="token operator">===</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
      hasExp <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token keyword">continue</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">===</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 小数点</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>hasPoint <span class="token operator">||</span> hasExp <span class="token operator">||</span> i <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> i <span class="token operator">===</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
      hasPoint <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token keyword">continue</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">===</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">||</span> target <span class="token operator">===</span> <span class="token string">&#39;+&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 符号位</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> s<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;e&#39;</span> <span class="token operator">||</span> s<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;E&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">continue</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 循环后仍然不返回 false，则可判定该字符串可表示为数值</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> truelist <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;+100&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;5e2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-123&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3.1416&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-1E-16&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> falselist <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;12e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1a3.14&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1.2.3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;+-5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;12e+4.3&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> result<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
truelist<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">isNumeric</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
falselist<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">isNumeric</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="替换空格" tabindex="-1"><a class="header-anchor" href="#替换空格"><span>替换空格</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 替换空格</span>
请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy。则经过替换之后的字符串为We%20Are%20Happy。

<span class="token comment">### 1. 直接使用空格将字符串切割成数组，再用 \`%20\` 进行连接</span>
const replaceSpace <span class="token operator">=</span> <span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> str.split<span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>.join<span class="token punctuation">(</span><span class="token string">&#39;%20&#39;</span><span class="token punctuation">)</span>

<span class="token comment">### 2. 使用正则表达式找到所有空格依次替换</span>
const replaceSpace <span class="token operator">=</span> <span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> str.replace<span class="token punctuation">(</span><span class="token string">&#39;/s/g&#39;</span>, <span class="token string">&#39;%20&#39;</span><span class="token punctuation">)</span>


<span class="token comment">### 扩展：多个空格用一个 \`%20\` 替换</span>
const replaceSpace <span class="token operator">=</span> <span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> str.replace<span class="token punctuation">(</span><span class="token string">&#39;/s+/g&#39;</span>, <span class="token string">&#39;%20&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="正则表达式匹配" tabindex="-1"><a class="header-anchor" href="#正则表达式匹配"><span>正则表达式匹配</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 正则表达式匹配</span>
请实现一个函数用来匹配包括 <span class="token string">&#39;.&#39;</span> 和 <span class="token string">&#39;*&#39;</span> 的正则表达式。
模式中的字符 <span class="token string">&#39;.&#39;</span> 表示任意一个字符，而 <span class="token string">&#39;*&#39;</span> 表示它前面的字符可以出现任意次（包含0次）。 
在本题中，匹配是指字符串的所有字符匹配整个模式。
例如，字符串 <span class="token string">&quot;aaa&quot;</span> 与模式 <span class="token string">&quot;a.a&quot;</span> 和 <span class="token string">&quot;ab*ac*a&quot;</span> 匹配，但是与 <span class="token string">&quot;aa.a&quot;</span> 和 <span class="token string">&quot;ab*a&quot;</span> 均不匹配。


<span class="token comment">### 思路</span>
<span class="token number">1</span>. 当模式中的第二个字符不是 <span class="token string">&#39;*&#39;</span> 时：
	- 如果字符串第一个字符和模式中的第一个字符相匹配，那么字符串和模式都后移一个字符，然后匹配剩余的。
	- 如果字符串第一个字符和模式中的第一个字符不匹配，直接返回 false。

<span class="token number">2</span>. 当模式中的第二个字符是 <span class="token string">&#39;*&#39;</span> 时：
	- 不匹配：如果字符串第一个字符跟模式第一个字符不匹配，则模式后移两个字符，继续匹配。
	- 产生匹配：如果字符串第一个字符跟模式第一个字符匹配，可以有 <span class="token number">3</span> 种匹配方式：
      - 匹配了零次：模式后移 <span class="token number">2</span> 个字符，相当于 <span class="token string">&#39;x*&#39;</span> 被忽略；
      - 匹配了1次：字符串后移 <span class="token number">1</span> 个字符，模式后移 <span class="token number">2</span> 个字符；
      - 匹配了n次：字符串后移 <span class="token number">1</span> 个字符，模式不变，即继续匹配字符下一位，因为 <span class="token string">&#39;*&#39;</span> 可以匹配多位。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">matchStr</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> sIndex<span class="token punctuation">,</span> patternIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="数组-array" tabindex="-1"><a class="header-anchor" href="#数组-array"><span>数组 Array</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 数组</span>
- <span class="token string">&#39;存储&#39;</span>：在现今往往使用数组作为一个容器，用于按顺序存储元素的集合，它可以方便的存储成千上万个元素，并且数组中的每个元素都可以通过数组索引来识别；如果没有数组，存储这么多的元素则需要成千上万个引用。

- <span class="token string">&#39;查找&#39;</span>：在数组中中，每一个数组都有一个地址，同时可以通过数组的下标方便的算出每个元素的内存地址，从而实现快速访问和赋值，所以它通过下标查找的效率是 O<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 级别的。

- <span class="token string">&#39;插入/删除&#39;</span>：在数组的插入和删除中，如果是在数组尾部插入或删除一个元素则可以直接进行；但如果在其他位置插入或者删除元素，则需要要移动后续元素的位置，比如你删除数组的第一个元素之后，则需要把后面的元素都往前移动一位。

- <span class="token string">&#39;数组容量&#39;</span>：数组的巨大弱点是当这个数组已经装满时，就无法再继续装入元素，此时需要考虑扩容问题。

- <span class="token string">&#39;动态数组&#39;</span>：在高级编程语言中，往往使用动态数组来解决这个问题，所谓动态数组是自动会进行数组扩容，当数组容量达到某个临界点时，动态数组会开辟一个更大的数组，然后将原来的元素复制过去。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="把数组排成最小的数" tabindex="-1"><a class="header-anchor" href="#把数组排成最小的数"><span>把数组排成最小的数</span></a></h4><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@function</span> minNumber 把数组组成最小的数
 * <span class="token keyword">@description</span> 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> 数组
 * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> 最小数
 * <span class="token keyword">@example</span> minNumber([3, 32, 321]) // 321323
 */</span>
<span class="token keyword">function</span> <span class="token function">minNumber</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span> <span class="token operator">+</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span> <span class="token operator">+</span> b <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> nums<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试用例 */</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">minNumber</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">321</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 321323</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">minNumber</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 3033459</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针"><span>双指针</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 双指针</span>
主要是利用两个或多个不同位置的指针，通过速度和方向的变换解决问题。
注意这种技巧经常在排序数组中使用。


<span class="token comment">### 应用</span>
<span class="token number">1</span>. 调整数组顺序使奇数位于偶数前面
<span class="token number">2</span>. 和为 S 的两个数字
<span class="token number">3</span>. 和为 S 的连续正整数序列

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="调整数组顺序使奇数位于偶数前面" tabindex="-1"><a class="header-anchor" href="#调整数组顺序使奇数位于偶数前面"><span>调整数组顺序使奇数位于偶数前面</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 调整数组顺序使奇数位于偶数前面</span>
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分。


<span class="token comment">#### 思路</span>
设定两个指针：
	<span class="token number">1</span>. 第一个指针 start 从数组第一个元素出发，向尾部前进。
	<span class="token number">2</span>. 第二个指针 end 从数组最后一个元素出发，向头部前进。
	- start 遍历到偶数 或 end 遍历到奇数时，交换两个数的位置。
当 start <span class="token operator">&gt;</span> end 时，完成交换。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@function</span> reorderArray 重新排序
 * <span class="token keyword">@description</span> 调整数组顺序使奇数位于偶数前面
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> arr 需要排序的数组
 * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> 返回排序后的数组
 */</span>
<span class="token keyword">function</span> <span class="token function">reorderArray</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 前进</span>
  <span class="token keyword">let</span> end <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// 倒进</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 如果遇到同样都是奇数，则继续往前进 */</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      start<span class="token operator">++</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/** 如果遇到同样都是偶数，则继续往前进 */</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      end<span class="token operator">--</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/** 在前面的情况对比后，存在奇数和偶数顺序问题，此时交换两者位置 */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">;</span><span class="token punctuation">[</span>arr<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token keyword">const</span> disorder <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> length<span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
<span class="token keyword">const</span> sortArr <span class="token operator">=</span> <span class="token function">reorderArray</span><span class="token punctuation">(</span>disorder<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>disorder<span class="token punctuation">,</span> sortArr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="和为-s-的两个数字" tabindex="-1"><a class="header-anchor" href="#和为-s-的两个数字"><span>和为 S 的两个数字</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 和为 S 的两个数字</span>
输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。


<span class="token comment">#### 解题</span>
数组中可能有多对符合条件的结果，而且要求输出乘积最小的，说明要分布在两侧。
比如 <span class="token punctuation">[</span><span class="token number">3,8</span> <span class="token number">5,7</span><span class="token punctuation">]</span> 要取3,8。

注意：类似【两数之和】的解法来求解，使用map存储另已经遍历过的key，这种解法在有多个结果的情况下是有问题的，因为这样优先取得的结果是乘积较大的。例如 <span class="token punctuation">[</span><span class="token number">3,8</span> <span class="token number">5,7</span><span class="token punctuation">]</span> ，会优先取到5,7。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@function</span> findNumberWithSum 和为 S 的两个数字
 * <span class="token keyword">@description</span> 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> nums 数组
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> sum 和
 * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>[number, number] | []<span class="token punctuation">}</span> 最小数
 * <span class="token keyword">@example</span> findNumberWithSum([1, 2, 3, 4, 5], 9) // [4, 5]
 */</span>
<span class="token keyword">function</span> <span class="token function">findNumberWithSum</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> sum<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">||</span> nums<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> s <span class="token operator">=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">&lt;</span> sum<span class="token punctuation">)</span> left<span class="token operator">++</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">&gt;</span> sum<span class="token punctuation">)</span> right<span class="token operator">--</span>
    <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试用例 */</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">findNumberWithSum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Output: [4, 5]</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">findNumberWithSum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Output: []</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="和为-s-的连续正整数序列" tabindex="-1"><a class="header-anchor" href="#和为-s-的连续正整数序列"><span>和为 S 的连续正整数序列</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 和为 S 的连续正整数序列</span>
输入一个正数S，打印出所有和为S的连续正数序列。
例如：输入15，有序 <span class="token number">1</span>+2+3+4+5 <span class="token operator">=</span> <span class="token number">4</span>+5+6 <span class="token operator">=</span> <span class="token number">7</span>+8 <span class="token operator">=</span> <span class="token number">15</span> 所以打印出3个连续序列 <span class="token number">1</span>-5，5-6 和 <span class="token number">7</span>-8。

<span class="token comment">#### 思路</span>
<span class="token number">1</span>. 使用双指针 low 和 high 分别指向当前考虑的连续序列的起始和结束位置，因为最小的连续序列至少包含两个数字。
<span class="token number">3</span>. 在起始位置小于结束位置<span class="token punctuation">(</span>保证为连续序列<span class="token punctuation">)</span>，且结束位置小于目标值（保证序列至少拥有两个数）时，不断进行循环计算。
	- 子序列的和小于目标值，扩大考虑的序列范围（向右移动）。
	- 当子序列的和大于目标值，缩小考虑的序列范围（抛弃最左位的一个值，然后向右移动）。
	- 当子序列的和等于目标值，则找到了一个连续序列。在暂存这个连续序列后，抛弃最左位的一个值，然后向右移动，为找下一个可能的序列做准备。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@function</span> findNumberWithSum 和为 S 的连续正整数序列
 * <span class="token keyword">@description</span> 输入一个正数S，打印出所有和为S的连续正数序列
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> target 正整数
 * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>number[][]<span class="token punctuation">}</span> 连续正整数序列
 * <span class="token keyword">@example</span> FindContinuousSequence(15) // 预期结果：[[1, 2, 3, 4, 5], [4, 5, 6], [7, 8]]
 */</span>
<span class="token keyword">function</span> <span class="token function">FindContinuousSequence</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> low<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">let</span> high<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">2</span>
  <span class="token keyword">let</span> sum<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> low <span class="token operator">+</span> high

  <span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;</span> high <span class="token operator">&amp;&amp;</span> high <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 扩大范围：向右移动</span>
      high<span class="token operator">++</span>
      sum <span class="token operator">+=</span> high
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 收缩范围（抛弃最左位的一个值，然后向右移动）</span>
      sum <span class="token operator">-=</span> low
      low<span class="token operator">++</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// sum === target：找到连续序列，将其插入结果中</span>
      <span class="token keyword">const</span> sequence<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> low<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> high<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sequence<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sequence<span class="token punctuation">)</span>

      <span class="token comment">// 抛弃最左位的一个值，然后向右移动，重新计算</span>
      sum <span class="token operator">-=</span> low
      low<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试用例 */</span>
<span class="token keyword">const</span> case1 <span class="token operator">=</span> <span class="token function">FindContinuousSequence</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span> <span class="token comment">// 预期结果：[[1, 2, 3, 4, 5], [4, 5, 6], [7, 8]]</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>case1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="n数之和" tabindex="-1"><a class="header-anchor" href="#n数之和"><span>N数之和</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## N数之和</span>
主要考虑如果比暴力法降低时间复杂度，而且也会用到上面的双指针技巧。


<span class="token comment">### 应用</span>
<span class="token number">1</span>. 两数之和
<span class="token number">2</span>. 三数之和
<span class="token number">3</span>. 四数之和

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="两数之和" tabindex="-1"><a class="header-anchor" href="#两数之和"><span>两数之和</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 两数之和</span>
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。


<span class="token comment">#### 示例</span>
给定 nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span>, <span class="token number">7</span>, <span class="token number">11</span>, <span class="token number">15</span><span class="token punctuation">]</span>, target <span class="token operator">=</span> <span class="token number">9</span>
因为 nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> + nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span> + <span class="token number">7</span> <span class="token operator">=</span> <span class="token number">9</span>
所以返回 <span class="token punctuation">[</span><span class="token number">0</span>, <span class="token number">1</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> complement <span class="token operator">=</span> target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>	<span class="token comment">// 计算当前所属数的值 与 target 的差值</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>complement<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>complement<span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token punctuation">]</span>
    <span class="token keyword">else</span> map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="三数之和" tabindex="-1"><a class="header-anchor" href="#三数之和"><span>三数之和</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 三数之和</span>
给定一个包含 n 个整数的数组nums，判断 nums 中是否存在三个元素a，b，c ，使得 a + b + c <span class="token operator">=</span> <span class="token number">0</span> ？找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组。


<span class="token comment">#### 示例</span>
例如, 给定数组 nums <span class="token operator">=</span> <span class="token punctuation">[</span>-1, <span class="token number">0</span>, <span class="token number">1</span>, <span class="token number">2</span>, -1, -4<span class="token punctuation">]</span>，
满足要求的三元组集合为：
<span class="token punctuation">[</span>
  <span class="token punctuation">[</span>-1, <span class="token number">0</span>, <span class="token number">1</span><span class="token punctuation">]</span>,
  <span class="token punctuation">[</span>-1, -1, <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>


<span class="token comment">### 解题思路</span>
<span class="token number">1</span>. 先对数组从小到大排序
<span class="token number">2</span>. 对数组进行遍历，把 i 作为基准数、左指针 left <span class="token operator">=</span> i + <span class="token number">1</span>、右指针 right <span class="token operator">=</span> nums.length - <span class="token number">1</span>
<span class="token number">3</span>. 判断 nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> + nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> + nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> 是否等于0
    - 如果等于 <span class="token number">0</span>，则是满足条件的三元组，加入结果数组，并分别将 left 和 right 向中间靠拢
    - 如果小于 <span class="token number">0</span>，则 left 向右移动一位
    - 如果大于 <span class="token number">0</span>，则 right 向左移动一位
提示：nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> + nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> -nums<span class="token punctuation">[</span>base<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@function</span> threeSum 三数之和
 * <span class="token keyword">@param</span> <span class="token parameter">nums</span> 数组
 * <span class="token keyword">@returns</span> 满足条件的三元组
 * <span class="token keyword">@description</span> 双指针法
    1. 先对数组从小到大排序
    2. 对数组进行遍历，把 i 作为基准数、左指针 left = i + 1、右指针 right = nums.length - 1
    3. 判断 nums[i] + nums[left] + nums[right] 是否等于0
        - 如果等于 0，则是满足条件的三元组，加入结果数组，并分别将 left 和 right 向中间靠拢
        - 如果小于 0，则 left 向右移动一位
        - 如果大于 0，则 right 向左移动一位
    提示：nums[left] + nums[right] = -nums[base]
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">threeSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token comment">// 排序</span>
  nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span>

  <span class="token keyword">const</span> result<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token doc-comment comment">/** 循环：使用双指针 */</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 跳过重复数字（防止重复的三元组），注意：因为 i=0 时 nums[i-1] 不存在，所以需要忽略</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span>

    <span class="token keyword">const</span> base <span class="token operator">=</span> i
    <span class="token keyword">let</span> left <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> sum <span class="token operator">=</span> nums<span class="token punctuation">[</span>base<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> right<span class="token operator">--</span>
      <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> left<span class="token operator">++</span>
      <span class="token keyword">else</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>base<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        left<span class="token operator">++</span>
        right<span class="token operator">--</span>

        <span class="token comment">// 跳过重复数字（防止重复的三元组）</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> left<span class="token operator">++</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> right<span class="token operator">--</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试用例 */</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">threeSum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment">// [[-1, 0, 1], [-1, -1, 2]]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="四数之和" tabindex="-1"><a class="header-anchor" href="#四数之和"><span>四数之和</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 四数之和</span>
给定一个包含 n 个整数的数组nums，判断 nums 中是否存在四个元素a，b，c，d ，使得 a + b + c + d <span class="token operator">=</span> <span class="token number">0</span> ？找出所有满足条件且不重复的四元组。
注意：答案中不可以包含重复的四元组。


<span class="token comment">#### 示例</span>
给定数组 nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">0</span>, -1, <span class="token number">0</span>, -2, <span class="token number">2</span><span class="token punctuation">]</span>，和 target <span class="token operator">=</span> <span class="token number">0</span>。
满足要求的四元组集合为：
<span class="token punctuation">[</span>
  <span class="token punctuation">[</span>-1,  <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">1</span><span class="token punctuation">]</span>,
  <span class="token punctuation">[</span>-2, -1, <span class="token number">1</span>, <span class="token number">2</span><span class="token punctuation">]</span>,
  <span class="token punctuation">[</span>-2,  <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>


<span class="token comment">#### 思路</span>
在三数之和的基础上，再多加一层循环来固定另一个 base 的值。
即 四数之和 是固定两个基准数，然后再加两个指针来移动计算出相应的四元组。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@function</span> fourSum 四数之和
 * <span class="token keyword">@param</span> <span class="token parameter">nums</span> 数组
 * <span class="token keyword">@returns</span> 满足条件的四元组
 * <span class="token keyword">@description</span> 双指针法
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">fourSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token comment">// 排序</span>
  nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span>

  <span class="token keyword">const</span> result<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token doc-comment comment">/** 循环：使用双指针 */</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 跳过重复数字（防止重复的四元组），注意：因为 i=0 时 nums[i-1] 不存在，所以需要忽略</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span>

    <span class="token comment">// 如果超过目标值，则可判定后续再也没有满足条件的四元组（因为从小到大排序）</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token keyword">break</span>

    <span class="token keyword">const</span> baseI <span class="token operator">=</span> i

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 跳过重复数字（防止重复的四元组）</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span>

      <span class="token keyword">const</span> baseJ <span class="token operator">=</span> j
      <span class="token keyword">let</span> left <span class="token operator">=</span> j <span class="token operator">+</span> <span class="token number">1</span>
      <span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

      <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> sum <span class="token operator">=</span> nums<span class="token punctuation">[</span>baseI<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>baseJ<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> right<span class="token operator">--</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> left<span class="token operator">++</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
          result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>baseI<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>baseJ<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

          left<span class="token operator">++</span>
          right<span class="token operator">--</span>

          <span class="token comment">// 跳过重复数字（防止重复的四元组）</span>
          <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> left<span class="token operator">++</span>
          <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> right<span class="token operator">--</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试用例 */</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">fourSum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment">// [[-1, 0, 0, 1], [-2, -1, 1, 2], [-2, 0, 0, 2]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二维数组" tabindex="-1"><a class="header-anchor" href="#二维数组"><span>二维数组</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 二维数组</span>
建立一定的抽象建模能力，将实际中的很多问题进行抽象。


<span class="token comment">### 应用</span>
<span class="token number">1</span>. 构建乘积数组
<span class="token number">2</span>. 顺时针打印矩阵
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="构建乘积数组" tabindex="-1"><a class="header-anchor" href="#构建乘积数组"><span>构建乘积数组</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 构建乘积数组</span>
给定一个数组A<span class="token punctuation">[</span><span class="token number">0,1</span>,<span class="token punctuation">..</span>.,n-1<span class="token punctuation">]</span>,请构建一个数组B<span class="token punctuation">[</span><span class="token number">0,1</span>,<span class="token punctuation">..</span>.,n-1<span class="token punctuation">]</span>,其中B中的元素B<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>*A<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>*<span class="token punctuation">..</span>.*A<span class="token punctuation">[</span>i-1<span class="token punctuation">]</span>*A<span class="token punctuation">[</span>i+1<span class="token punctuation">]</span>*<span class="token punctuation">..</span>.*A<span class="token punctuation">[</span>n-1<span class="token punctuation">]</span>。不能使用除法。


<span class="token comment">#### 思路</span>
<span class="token number">1</span>. 正常实现是 B<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> * A<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> *  <span class="token punctuation">..</span>. * A<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span> / A<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
<span class="token number">2</span>. 但因为不能使用除法，所以可通过保存为 n 行 n 列的数组，并初始化数据为 temp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> A，然后通过循环把 temp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>，最后 B<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> 的所有乘积。
<span class="token number">3</span>. 因为步骤 <span class="token number">2</span> 中是通过双循环的方式来实现的，所有时间复杂度为 O<span class="token punctuation">(</span>n^2<span class="token punctuation">)</span>。可通过分为上三角形和下三角形来实现优化：
	- 用一个循环计算左下三角形每个 B<span class="token punctuation">[</span>i<span class="token punctuation">]</span> 的乘积值。
	- 用一个循环计算右上三角形每个 B<span class="token punctuation">[</span>i<span class="token punctuation">]</span> 的乘积值。
	- 两个三角形中的 B<span class="token punctuation">[</span>i<span class="token punctuation">]</span> 值相乘就得到最终的 B<span class="token punctuation">[</span>i<span class="token punctuation">]</span> 值。
	- 最终实现的时间复杂度为 O<span class="token punctuation">(</span>n<span class="token punctuation">)</span>。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+T+`" alt="multiplyArray"></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@function</span> multiplyArray 构建乘积数组
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> A 需要构建乘积的数组
 * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">multiplyArray</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token constant">A</span><span class="token punctuation">.</span>length
  <span class="token keyword">const</span> <span class="token constant">B</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

  <span class="token comment">// 计算下三角</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token constant">B</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">B</span><span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token constant">A</span><span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 乘上三角</span>
  <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token constant">B</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*=</span> temp
    temp <span class="token operator">*=</span> <span class="token constant">A</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token comment">// 暂存乘积结果留着 B[i - 1] 使用</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token constant">B</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试用例 */</span>
<span class="token keyword">const</span> <span class="token constant">A1</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> <span class="token constant">B1</span> <span class="token operator">=</span> <span class="token function">multiplyArray</span><span class="token punctuation">(</span><span class="token constant">A1</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">B1</span><span class="token punctuation">)</span> <span class="token comment">// Output: [24, 12, 8, 6]</span>

<span class="token keyword">const</span> <span class="token constant">A2</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> <span class="token constant">B2</span> <span class="token operator">=</span> <span class="token function">multiplyArray</span><span class="token punctuation">(</span><span class="token constant">A2</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">B2</span><span class="token punctuation">)</span> <span class="token comment">// [120, 60, 40, 30, 24]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="顺时针打印矩阵" tabindex="-1"><a class="header-anchor" href="#顺时针打印矩阵"><span>顺时针打印矩阵</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 顺时针打印矩阵</span>
输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
例如，如果输入如下 4x4 矩阵：
    <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> 
    <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span>
    <span class="token number">9</span> <span class="token number">10</span> <span class="token number">11</span> <span class="token number">12</span> 
    <span class="token number">13</span> <span class="token number">14</span> <span class="token number">15</span> <span class="token number">16</span> 
则依次打印出数字 <span class="token number">1,2</span>,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@function</span> spiralOrderPrintMatrix 顺时针打印矩阵
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[][]<span class="token punctuation">}</span> matrix 矩阵
 * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> 顺时针打印矩阵的值
 */</span>
<span class="token keyword">function</span> <span class="token function">spiralOrderPrintMatrix</span><span class="token punctuation">(</span>matrix<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>matrix<span class="token punctuation">.</span>length <span class="token operator">||</span> <span class="token operator">!</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">const</span> rows <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length
  <span class="token keyword">const</span> coloums <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length
  <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 每一层的起始坐标</span>
  <span class="token keyword">let</span> result<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token doc-comment comment">/** 打印一圈 */</span>
  <span class="token keyword">function</span> <span class="token function">printCircle</span><span class="token punctuation">(</span>matrix<span class="token punctuation">,</span> start<span class="token punctuation">,</span> coloums<span class="token punctuation">,</span> rows<span class="token punctuation">,</span> result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> endX <span class="token operator">=</span> coloums <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> start <span class="token comment">// 当前层结束的列号</span>
    <span class="token keyword">const</span> endY <span class="token operator">=</span> rows <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> start <span class="token comment">// 当前层结束的行号</span>

    <span class="token comment">// 从左到右打印一行</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> endX<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 从上到下打印一列（需注意在最后一圈时存在仅有一行的情况）</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> endY<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> endY<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>endX<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 从右到左打印一行（仅在 从上到下打印一列时 &amp; 此时需要打印的行&gt;=1个）</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> endY <span class="token operator">&amp;&amp;</span> start <span class="token operator">&lt;</span> endX<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> endX <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> start<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>endY<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 从下到上打印一列（仅在 从上到下打印一列 &amp; 从右到左打印一行 &amp; 此时需要打印的列&gt;=1个）</span>
    <span class="token comment">// endY - 1 是为了相对于从上到下打印一列时，最顶部的行不需要打印（是为了进入下一圈）</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> endY <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> start <span class="token operator">&lt;</span> endX<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> endY <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>coloums <span class="token operator">&gt;</span> start <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> rows <span class="token operator">&gt;</span> start <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> <span class="token function">printCircle</span><span class="token punctuation">(</span>matrix<span class="token punctuation">,</span> start<span class="token punctuation">,</span> coloums<span class="token punctuation">,</span> rows<span class="token punctuation">,</span> result<span class="token punctuation">)</span>

    <span class="token comment">// 进入下一层</span>
    start<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试代码 */</span>
<span class="token keyword">const</span> len <span class="token operator">=</span> <span class="token number">4</span>
<span class="token keyword">const</span> matrix <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> length<span class="token operator">:</span> len <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> length<span class="token operator">:</span> len <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>__<span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i <span class="token operator">*</span> <span class="token number">4</span> <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
<span class="token keyword">const</span> case1 <span class="token operator">=</span> <span class="token function">spiralOrderPrintMatrix</span><span class="token punctuation">(</span>matrix<span class="token punctuation">)</span> <span class="token comment">// [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 6, 7, 11, 10]</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>case1<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据统计" tabindex="-1"><a class="header-anchor" href="#数据统计"><span>数据统计</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 数据统计</span>
数组少不了的就是统计和计算，此类问题考察如何用更有效的方法对数组进行统计计算。

<span class="token comment">### 应用</span>
<span class="token number">1</span>. 数组中出现次数超过数组长度一半的数字
<span class="token number">2</span>. 连续子数组的最大和
<span class="token number">3</span>. 扑克牌顺子
<span class="token number">4</span>. 第一个只出现一次的字符
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数组中出现次数超过数组长度一半的数字" tabindex="-1"><a class="header-anchor" href="#数组中出现次数超过数组长度一半的数字"><span>数组中出现次数超过数组长度一半的数字</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 数组中出现次数超过数组长度一半的数字</span>
数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

例如输入一个长度为 <span class="token number">9</span> 的数组 <span class="token punctuation">{</span><span class="token number">1,2</span>,3,2,2,2,5,4,2<span class="token punctuation">}</span>。
由于数字 <span class="token number">2</span> 在数组中出现了 <span class="token number">5</span> 次，超过数组长度的一半，因此输出2。
如果不存在则输出 <span class="token number">0</span>。



<span class="token comment">#### 摩尔投票算法</span>
摩尔投票算法的旨在找到一个数组中的多数元素，多数元素定义为出现次数超过数组大小一般的元素。
摩尔投票算法的基本思想是，维护一个候选数字和它出现的次数，遍历数组时，如果遇到和候选数字相同的数，就增加次数，如果遇到一个和候选数字不同的数，则减少次数。如果次数变为 <span class="token number">0</span>，就更换候选数字。由于超过一半的数字比其他所有数字出现次数的总和还要多，所以最后剩下的候选数字就是超过数组长度一半的数字。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解法1：创建Map存储每个值的次数，获取最高次数的值</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@function</span> moreThanHalfNum 数组中出现次数超过数组长度一半的数字
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> numbers 数组
 * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">moreThanHalfNum</span><span class="token punctuation">(</span>numbers<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token comment">// 边界条件，防止数组长度为 0 时下面的错误计算</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span>numbers<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>

  <span class="token keyword">const</span> len <span class="token operator">=</span> numbers<span class="token punctuation">.</span>length
  <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 计算每个数字的出现次数</span>

  <span class="token keyword">let</span> largestNumber <span class="token operator">=</span> numbers<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// 记录出现最多的值（默认取第一个）</span>
  <span class="token keyword">let</span> largestNumberCount <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 记录出现最多的值的次数（因为默认取第一个值，所以必然存在次数为1）</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 查看 map 中是否记录过该数字，如果没有，则初始化该 number 的次数为 1</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> targetNumber <span class="token operator">=</span> numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token keyword">const</span> targetNumberCount <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>targetNumber<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>

      map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>targetNumber<span class="token punctuation">,</span> targetNumberCount<span class="token punctuation">)</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>targetNumberCount <span class="token operator">&gt;</span> largestNumberCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        largestNumberCount <span class="token operator">=</span> targetNumberCount
        largestNumber <span class="token operator">=</span> targetNumber
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 因为在初始化时已经取了第一个值，所以这里必然不用赋值，largestNumberCount 的次数必然 &gt;= 该 number</span>
      <span class="token keyword">const</span> targetNumber <span class="token operator">=</span> numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>targetNumber<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 如果数组长度为 0 或者 数组中没有超过该数组的长度的一半(务必向上取整，防止奇数时出现小数)时，此时返回 0，否则返回出现最多次数的值</span>
  <span class="token keyword">return</span> len <span class="token operator">&amp;&amp;</span> largestNumberCount <span class="token operator">&gt;=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">?</span> largestNumber <span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> case1 <span class="token operator">=</span> <span class="token function">moreThanHalfNum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>case1<span class="token punctuation">)</span> <span class="token comment">// 2</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解法2：摩尔投票算法</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@function</span> findMajorityElement 摩尔投票法（数组中出现次数超过数组长度一半的数字）
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> numbers 数组
 * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 * <span class="token keyword">@description</span> 摩尔投票法核心：目标值的个数比其他所有值加起来的数多（必为众数）
 */</span>
<span class="token keyword">function</span> <span class="token function">findMajorityElement</span><span class="token punctuation">(</span>numbers<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token comment">// 边界条件，防止数组长度为 0 时下面的错误计算</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span>numbers<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>

  <span class="token keyword">let</span> candiate<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> numbers<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// 候选人：数组中的某个值</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// candiate 的出现次数</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> num <span class="token keyword">of</span> numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count <span class="token operator">+=</span> num <span class="token operator">===</span> candiate <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span>

    <span class="token comment">// 次数为 0 后保存新值</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      candiate <span class="token operator">=</span> num
      count <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  count <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 判断 candiate 这个数值的出现个数</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> num <span class="token keyword">of</span> numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> candiate<span class="token punctuation">)</span> count<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> count <span class="token operator">&gt;</span> numbers<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">?</span> candiate <span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> case1 <span class="token operator">=</span> <span class="token function">findMajorityElement</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>case1<span class="token punctuation">)</span> <span class="token comment">// 2</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="连续子数组的最大和" tabindex="-1"><a class="header-anchor" href="#连续子数组的最大和"><span>连续子数组的最大和</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 连续子数组的最大和</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="扑克牌顺子" tabindex="-1"><a class="header-anchor" href="#扑克牌顺子"><span>扑克牌顺子</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 连续子数组的最大和</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="第一个只出现一次的字符" tabindex="-1"><a class="header-anchor" href="#第一个只出现一次的字符"><span>第一个只出现一次的字符</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 第一个只出现一次的字符</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="链表-linkedlist" tabindex="-1"><a class="header-anchor" href="#链表-linkedlist"><span>链表 LinkedList</span></a></h2><h3 id="单向链表" tabindex="-1"><a class="header-anchor" href="#单向链表"><span>单向链表</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 单向链表</span>
用一组任意存储的单元来存储线性表的数据元素。每个节点有一个 next 指针指向后一个节点（下一个元素的地址），还有一个成员变量用于存储该节点本身的数值。
链表的效率：
  - 链表的结构注定它无法快速访问某个元素，只能依靠遍历的方式慢慢查找，所以链表查询数据的效率为 O<span class="token punctuation">(</span>N<span class="token punctuation">)</span> 级别；
  - 但它在头节点进行插入和删除，只需改变第一个元素的引用，此时的插入效率为 O<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> ；
  - 如果在尾节点进行插入和删除，必须要遍历整个链表，找到最后这个链表节点再进行插入，遍历链表的花费为 O<span class="token punctuation">(</span>N<span class="token punctuation">)</span>。
  
单向链表的两个特殊节点：
  - 头节点用来记录链表的基地址，知道头节点我们可以遍历得到整条链表。
  - 尾节点的指针指向一个空指针 NULL。
  
单向链表的特征：
	- 优点：动态扩容，不需要占用过多的内存；插入元素快，只需断开连接重新赋值。
	- 缺点：查询元素慢：不能随机访问，不能根据索引访问，需要从头节点开始遍历才能查询到元素。
	- 遍历：要遍历链表就是不断找到当前节点的 next 节点，当 next 节点为 null 时说明是最后一个节点，停止遍历。



<span class="token comment">### 链表与数组的区别</span>
链表与数组都是存储有序的元素集合，但与数组的区别是链表中的元素在内存中并不是连续的，每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（指针）组成。
相较于传统的数组，链表的一个好处是添加或移除元素时不需要移动其它元素；但在数组中可以直接访问任何位置的元素，而链表无法实现，因为链表中每个节点只有对下一个节点的引用，所以想访问链表中间的一个元素，必须从起点（链表头部节点）开始迭代链表知道找到所需的元素。



<span class="token comment">### 应用场景</span>
React16 的 Fiber Node 连接起来形成的 Fiber Tree 就是个单链表结构。



<span class="token comment">### 链表的案例</span>
<span class="token number">1</span>. 基础应用
    - 从尾到头打印链表
    - 删除链表中的节点
    - 反转链表
    - 复杂链表的复制
 
<span class="token number">2</span>. 环形链表
    - 环形链表
    - 链表中环的入口节点
    - 约瑟夫环
    - 圈圈中最后剩下的数字
 
 <span class="token number">3</span>. 双指针
    - 两个链表的第一个公共节点
    - 两个链表的公共节点
    - 链表倒数第 k 个节点
    - 相交链表
    - 删除链表中的节点 / 重复节点
 
 <span class="token number">4</span>. 双向链表
    - 合并两个排序的链表
    - 扁平化多级双向链表

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+C+`" alt="image-20230215183533947"></p><h4 id="链表实现" tabindex="-1"><a class="header-anchor" href="#链表实现"><span>链表实现</span></a></h4><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 链表单个节点数据字段约束 */</span>
<span class="token keyword">interface</span> <span class="token class-name">ILinkedNode</span> <span class="token punctuation">{</span>
  next<span class="token operator">:</span> ILinkedNode <span class="token operator">|</span> <span class="token keyword">null</span>
  value<span class="token operator">:</span> <span class="token builtin">unknown</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/** 当前节点数据字段约束 */</span>
<span class="token keyword">type</span> <span class="token class-name">ICurListNode</span> <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">|</span> ILinkedNode

<span class="token doc-comment comment">/** 链表节点类 */</span>
<span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
  next<span class="token operator">:</span> ILinkedNode <span class="token operator">|</span> <span class="token keyword">null</span>
  value<span class="token operator">:</span> <span class="token builtin">unknown</span>

  <span class="token function">constructor</span> <span class="token punctuation">(</span>nodeValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> nodeValue
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 链表类 */</span>
<span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 链表长度 */</span>
  length<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token doc-comment comment">/** 链表头部节点 */</span>
  head<span class="token operator">:</span> ICurListNode

  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 获取链表中索引所对应的元素，返回所查找节点 | null */</span>
  <span class="token function">getElementAt</span> <span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ICurListNode <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

    <span class="token keyword">let</span> currentNode<span class="token operator">:</span> ICurListNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">while</span> <span class="token punctuation">(</span>index<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token operator">?.</span>next <span class="token operator">||</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> currentNode
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 获取链表中某个节点 */</span>
  <span class="token function">find</span> <span class="token punctuation">(</span>nodeValue<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> ICurListNode <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode<span class="token operator">:</span> ICurListNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>value <span class="token operator">===</span> nodeValue<span class="token punctuation">)</span> <span class="token keyword">return</span> currentNode
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 追加节点 */</span>
  <span class="token function">append</span> <span class="token punctuation">(</span>nodeValue<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>nodeValue<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
      cur<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> node
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 指定位置插入节点: 返回是否插入成功 */</span>
  <span class="token function">insert</span> <span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> nodeValue<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token comment">// 边界判定是否超出界限</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>nodeValue<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
      node<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token operator">?.</span>next <span class="token operator">||</span> <span class="token keyword">null</span>
      prev<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> node
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 删除指定位置的元素，并返回这个元素的值 */</span>
  <span class="token function">removeAt</span> <span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ILinkedNode<span class="token punctuation">[</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

    <span class="token keyword">let</span> currentNode<span class="token operator">:</span> ICurListNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head

    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> currentNode<span class="token operator">?.</span>next <span class="token operator">||</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
      currentNode <span class="token operator">=</span> prev<span class="token operator">?.</span>next <span class="token operator">||</span> <span class="token keyword">null</span>
      prev<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token operator">?.</span>next <span class="token operator">||</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">--</span>
    <span class="token keyword">return</span> currentNode<span class="token operator">?.</span>value <span class="token operator">||</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 获取链表中给定元素的索引 */</span>
  <span class="token function">indexOf</span> <span class="token punctuation">(</span>nodeValue<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode<span class="token operator">:</span> ICurListNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 边界判定</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNode <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
      <span class="token comment">// 查找到</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNode<span class="token operator">?.</span>value <span class="token operator">===</span> nodeValue<span class="token punctuation">)</span> <span class="token keyword">return</span> i
      <span class="token comment">// 未找到，往下一个节点查找</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next <span class="token operator">??</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 始终为查找到该节点值</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 删除链表中对应元素 */</span>
  <span class="token function">remove</span> <span class="token punctuation">(</span>nodeValue<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>nodeValue<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 判断链表是否为空 */</span>
  <span class="token function">isEmpty</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 获取链表的长度 */</span>
  <span class="token function">size</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 获取链表的头元素 */</span>
  <span class="token function">getHead</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 清空链表 */</span>
  <span class="token function">clear</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 链表转数组 */</span>
  <span class="token function">toArray</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> ILinkedNode<span class="token punctuation">[</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode<span class="token operator">:</span> ICurListNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">const</span> tempArr<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      tempArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next <span class="token operator">??</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> tempArr
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 序列化链表 */</span>
  <span class="token function">join</span> <span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

   <span class="token doc-comment comment">/**
   * <span class="token keyword">@reverse</span> 反转链表
   * <span class="token keyword">@param</span> <span class="token parameter">head</span> 所需要反转的链表
   * 说明：
   *    1. 以链表的头部节点为基准节点
   *    2. 将基准节点的下一个节点挪到头部作为头结点
   *    3. 当基准节点的 next 为 null，则其已经成为最后一个节点，链表已经完成反转
   *  注意：传递的 head 需要深拷贝，否则会改变原链表
   */</span>
  <span class="token function">reverse</span> <span class="token punctuation">(</span>head<span class="token operator">:</span> ICurListNode <span class="token operator">=</span> <span class="token function">cloneDeep</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">:</span> ICurListNode <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode<span class="token operator">:</span> ICurListNode <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">let</span> reverseNode<span class="token operator">:</span> ICurListNode <span class="token operator">=</span> head
    <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentNode <span class="token operator">=</span> head<span class="token punctuation">.</span>next
      head<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token operator">?.</span>next <span class="token operator">||</span> <span class="token keyword">null</span>
      currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> reverseNode
      reverseNode <span class="token operator">=</span> currentNode
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> reverseNode
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试内容 */</span>
<span class="token keyword">const</span> linkedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
linkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
linkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
linkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;--&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span>
linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;--&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">getHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> linkedList<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;--&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

linkedList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;--&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

linkedList<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">/* 输出结果：
10--20--30
191 5--10--15--20--25--30
193 5
194 15
195 25
196 10--20--30
198 1
202 10--30
204 ListNode {next: ListNode, value: 10} 
0 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- 
- 删除链表中的节点
- 反转链表
- 复杂链表的复制
</code></pre><h4 id="从尾到头打印链表" tabindex="-1"><a class="header-anchor" href="#从尾到头打印链表"><span>从尾到头打印链表</span></a></h4><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 链表结构 */</span>
<span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token builtin">unknown</span>
  <span class="token comment">// eslint-disable-next-line no-use-before-define</span>
  next<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> ListNode
  <span class="token function">constructor</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 从尾到头打印链表 */</span>
<span class="token keyword">const</span> printListFromTailToHead <span class="token operator">=</span> <span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">unknown</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">unknown</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    head <span class="token operator">=</span> head<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试代码 */</span>
<span class="token keyword">const</span> listNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
listNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">printListFromTailToHead</span><span class="token punctuation">(</span>listNode<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="反转链表" tabindex="-1"><a class="header-anchor" href="#反转链表"><span>反转链表</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 反转链表</span>
<span class="token number">1</span>. 以链表的头部节点为基准节点
<span class="token number">2</span>. 将基准节点的下一个节点挪到头部作为头结点
<span class="token number">3</span>. 当基准节点的 next 为 null，则其已经成为最后一个节点，链表已经完成反转
    reverse <span class="token punctuation">(</span>head <span class="token operator">=</span> cloneDeep<span class="token punctuation">(</span>this.head<span class="token punctuation">))</span> <span class="token punctuation">{</span>
      <span class="token builtin class-name">let</span> currentNode <span class="token operator">=</span> null, reverseNode <span class="token operator">=</span> <span class="token function">head</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">&amp;&amp;</span> head.next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        currentNode <span class="token operator">=</span> head.next
        head.next <span class="token operator">=</span> currentNode?.next <span class="token operator">||</span> null
        currentNode.next <span class="token operator">=</span> reverseNode
        reverseNode <span class="token operator">=</span> currentNode
      <span class="token punctuation">}</span>
      <span class="token builtin class-name">return</span> reverseNode
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂链表的复制" tabindex="-1"><a class="header-anchor" href="#复杂链表的复制"><span>复杂链表的复制</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 复杂链表的复制</span>
输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。

<span class="token comment">#### 解题思路</span>
<span class="token number">1</span>. 复制一份链表放在前一个节点后面，即根据原始链表的每个节点 N 创建 N，把 N 直接放在 N 的 next 位置，让复制后的链表和原始链表组成新的链表。
<span class="token number">2</span>. 给复制的链表 random 赋值，即 N.random <span class="token operator">=</span> N.random.next。
<span class="token number">3</span>. 拆分链表，将 N 和 N 进行拆分，保证原始链表不受影响。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="合并两个排序的链表" tabindex="-1"><a class="header-anchor" href="#合并两个排序的链表"><span>合并两个排序的链表</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 合并两个排序的链表</span>
输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
前提条件：两个链表都做好大小排序。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+_+`" alt="合并两个排序的链表"></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 链表结构 */</span>
<span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token comment">// eslint-disable-next-line no-use-before-define</span>
  next<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> ListNode
  <span class="token function">constructor</span><span class="token punctuation">(</span>value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> next<span class="token operator">?</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> value
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> next
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@function</span> MergeTowLists 合并两个排序的链表
 * <span class="token keyword">@description</span>
 *  1. 链表头部节点作比较，小节点的 next 等于 小节点的 next 和节点中对比的较小值
 *  2. 依次递归，直到两个链表中都为 null 为止
 */</span>
<span class="token keyword">function</span> <span class="token function">MergeTowLists</span><span class="token punctuation">(</span>list1<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> list2<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 边界条件判定（递归的终止条件） */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>list1 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> list2
  <span class="token keyword">if</span> <span class="token punctuation">(</span>list2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> list1

  <span class="token keyword">let</span> head<span class="token operator">:</span> ListNode
  <span class="token keyword">if</span> <span class="token punctuation">(</span>list1<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> list2<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    head <span class="token operator">=</span> list1
    head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">MergeTowLists</span><span class="token punctuation">(</span>list1<span class="token punctuation">.</span>next<span class="token punctuation">,</span> list2<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    head <span class="token operator">=</span> list2
    head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">MergeTowLists</span><span class="token punctuation">(</span>list1<span class="token punctuation">,</span> list2<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> head
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试代码 */</span>
<span class="token function">MergeTowLists</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双指针-1" tabindex="-1"><a class="header-anchor" href="#双指针-1"><span>双指针</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 双指针</span>
双指针主要利用两个或多个不同位置的指针，通过速度和方向的变换解决问题。
  <span class="token number">1</span>. 两个指针从不同位置出发：一个从始端开始，另一个从末端开始；
  <span class="token number">2</span>. 两个指针以不同速度移动：一个指针快一些，另一个指针慢一些。
因为在单链表中只能在一个方向上遍历链表，所以第一种情况可能无法工作。
然而第二种情景，也被称为慢指针和快指针，是非常有用的。


<span class="token comment">### 应用</span>
- 两个链表的第一个公共节点
- 两个链表的公共节点
- 链表倒数第 k 个节点
- 相交链表
- 删除链表中的节点 / 重复节点

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 链表单个节点数据字段约束 */</span>
<span class="token keyword">interface</span> <span class="token class-name">ILinkedNode</span> <span class="token punctuation">{</span>
  next<span class="token operator">:</span> ILinkedNode <span class="token operator">|</span> <span class="token keyword">null</span>
  random<span class="token operator">:</span> ILinkedNode <span class="token operator">|</span> <span class="token keyword">null</span>
  value<span class="token operator">:</span> <span class="token builtin">unknown</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 当前节点数据字段约束 */</span>
<span class="token keyword">type</span> <span class="token class-name">ICurListNode</span> <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">|</span> ILinkedNode

<span class="token doc-comment comment">/** 链表节点类 */</span>
<span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token keyword">implements</span> <span class="token class-name">ILinkedNode</span> <span class="token punctuation">{</span>
  next<span class="token operator">:</span> ICurListNode
  random<span class="token operator">:</span> ICurListNode
  value<span class="token operator">:</span> <span class="token builtin">unknown</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>nodeValue<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span> next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> random <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next
    <span class="token keyword">this</span><span class="token punctuation">.</span>random <span class="token operator">=</span> random
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> nodeValue
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 复制复杂链表 */</span>
<span class="token keyword">function</span> <span class="token function">CopyRandomList</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ICurListNode<span class="token punctuation">)</span><span class="token operator">:</span> ICurListNode <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

  <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> node<span class="token operator">:</span> ICurListNode <span class="token operator">=</span> head

  <span class="token doc-comment comment">/** 创建新的节点并将其保存在 Map 中 */</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>node <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
    node <span class="token operator">=</span> node<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>

  node <span class="token operator">=</span> head

  <span class="token doc-comment comment">/** 为新节点设置正确的 next 和 random */</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>node <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">null</span>
    map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">.</span>random <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>random<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">null</span>
    node <span class="token operator">=</span> node<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试代码 */</span>
<span class="token function">CopyRandomList</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="链表倒数第-k-个节点" tabindex="-1"><a class="header-anchor" href="#链表倒数第-k-个节点"><span>链表倒数第 k 个节点</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 链表倒数第 k 个节点</span>
输入一个链表，输出该链表中倒数第k个结点。

简单思路： 循环到链表末尾找到 length 在找到length-k节点 需要循环两次。

优化：
	- 设定两个节点，间距相差k个节点，当前面的节点到达终点，取后面的节点。
	- 前面的节点到达k后，后面的节点才出发。
	- 需要考虑head为null，k为0，k大于链表长度的情况。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 链表单个节点数据字段约束 */</span>
<span class="token keyword">interface</span> <span class="token class-name">ILinkedNode</span> <span class="token punctuation">{</span>
  next<span class="token operator">:</span> ILinkedNode <span class="token operator">|</span> <span class="token keyword">null</span>
  random<span class="token operator">:</span> ILinkedNode <span class="token operator">|</span> <span class="token keyword">null</span>
  value<span class="token operator">:</span> <span class="token builtin">unknown</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 当前节点数据字段约束 */</span>
<span class="token keyword">type</span> <span class="token class-name">ICurListNode</span> <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">|</span> ILinkedNode

<span class="token doc-comment comment">/** 链表节点类 */</span>
<span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token keyword">implements</span> <span class="token class-name">ILinkedNode</span> <span class="token punctuation">{</span>
  next<span class="token operator">:</span> ICurListNode
  random<span class="token operator">:</span> ICurListNode
  value<span class="token operator">:</span> <span class="token builtin">unknown</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>nodeValue<span class="token punctuation">,</span> next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> random <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next
    <span class="token keyword">this</span><span class="token punctuation">.</span>random <span class="token operator">=</span> random
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> nodeValue <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> nodeValue
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 链表倒数第 K 个节点 */</span>
<span class="token keyword">function</span> <span class="token function">FindKthFromEnd</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ICurListNode<span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ICurListNode <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> k <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

  <span class="token doc-comment comment">/** 快指针 */</span>
  <span class="token keyword">let</span> fast<span class="token operator">:</span> ICurListNode <span class="token operator">=</span> head
  <span class="token doc-comment comment">/** 慢指针 */</span>
  <span class="token keyword">let</span> slow<span class="token operator">:</span> ICurListNode <span class="token operator">=</span> head

  <span class="token doc-comment comment">/** 快指针先移动 k 步 */</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果快指针为空，则说明 k 大于链表的长度，则返回 null</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fast <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 快慢指针同时移动，直到快指针到达链表最后一个节点 */</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next <span class="token keyword">as</span> ListNode
  <span class="token punctuation">}</span>

  <span class="token comment">// 慢指针所指向的节点，则为倒数第 k 个节点</span>
  <span class="token keyword">return</span> slow
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试代码 */</span>
<span class="token function">FindKthFromEnd</span><span class="token punctuation">(</span><span class="token punctuation">{</span> next<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> random<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="两个链表中的第一个公共节点" tabindex="-1"><a class="header-anchor" href="#两个链表中的第一个公共节点"><span>两个链表中的第一个公共节点</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 两个链表中的第一个公共节点</span>
- 输入两个链表，找出它们的第一个公共结点。

<span class="token comment">#### 思路</span>
<span class="token number">1</span>. 先找到两个链表的长度length1、length2
<span class="token number">2</span>. 让长一点的链表先走 length2-length1 步，让长链表和短链表起点相同
<span class="token number">3</span>. 两个链表一起前进，比较获得第一个相等的节点
- 时间复杂度O<span class="token punctuation">(</span>length1+length2<span class="token punctuation">)</span> 空间复杂度O<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+A+`" alt="FindFirstCommonNode"></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 链表单个节点数据字段约束 */</span>
<span class="token keyword">interface</span> <span class="token class-name">ILinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  next<span class="token operator">:</span> ILinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  value<span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 当前节点数据字段约束 */</span>
<span class="token keyword">type</span> <span class="token class-name">ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">|</span> ILinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>

<span class="token doc-comment comment">/** 链表节点类 */</span>
<span class="token keyword">class</span> <span class="token class-name">ListNode<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">ILinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  next<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
  value<span class="token operator">:</span> <span class="token constant">T</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>nodeValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> next<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> nodeValue
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">List</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 获取链表的长度 */</span>
  <span class="token keyword">public</span> <span class="token generic-function"><span class="token function">getListLength</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>head<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> head
    <span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      len<span class="token operator">++</span>
      current <span class="token operator">=</span> current<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> len
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 找出它们的第一个公共结点 */</span>
  <span class="token keyword">public</span> <span class="token generic-function"><span class="token function">FindFirstCommonNode</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
    listHead1<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    listHead2<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 获取链表的长度 */</span>
    <span class="token keyword">const</span> len1 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getListLength</span><span class="token punctuation">(</span>listHead1<span class="token punctuation">)</span>
    <span class="token keyword">const</span> len2 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getListLength</span><span class="token punctuation">(</span>listHead2<span class="token punctuation">)</span>

    <span class="token doc-comment comment">/** 长短链表以及长短链表的差值 */</span>
    <span class="token keyword">let</span> lang<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> len1 <span class="token operator">&gt;</span> len2 <span class="token operator">?</span> listHead1 <span class="token operator">:</span> listHead2
    <span class="token keyword">let</span> short<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> len1 <span class="token operator">&gt;</span> len2 <span class="token operator">?</span> listHead2 <span class="token operator">:</span> listHead1
    <span class="token keyword">let</span> interval<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>len1 <span class="token operator">-</span> len2<span class="token punctuation">)</span>

    <span class="token doc-comment comment">/** 长链表先走 差值 的步数（为了让两个链表后面的长度相同） */</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>interval<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      lang <span class="token operator">=</span> lang<span class="token operator">!</span><span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/** 查找是相同的节点 */</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>lang<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>lang <span class="token operator">===</span> short<span class="token punctuation">)</span> <span class="token keyword">return</span> lang
      lang <span class="token operator">=</span> lang<span class="token punctuation">.</span>next
      short <span class="token operator">=</span> short<span class="token operator">!</span><span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/** 直到最后都没找到相同的节点（兜底） */</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试代码 */</span>
<span class="token comment">// 创建公共链表节点</span>
<span class="token keyword">const</span> commonNode1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&#39;Common Node 1&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> commonNode2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&#39;Common Node 2&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 创建链表节点</span>
<span class="token keyword">const</span> list1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span>
  <span class="token string">&#39;Node 1&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">new</span> <span class="token class-name">ListNode<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&#39;Node 2&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token operator">...</span>commonNode2<span class="token punctuation">,</span> next<span class="token operator">:</span> commonNode1 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
<span class="token keyword">const</span> list2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span>
  <span class="token string">&#39;Node A&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">new</span> <span class="token class-name">ListNode<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&#39;Node B&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token string">&#39;Node C&#39;</span><span class="token punctuation">,</span> commonNode1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token comment">// 创建链表类实例 并 找出它们的第一个公共结点并打印</span>
<span class="token keyword">new</span> <span class="token class-name">List</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">FindFirstCommonNode</span><span class="token punctuation">(</span>list1<span class="token punctuation">,</span> list2<span class="token punctuation">)</span> <span class="token comment">// 预期结果: ListNode {next: null, value: &#39;Common Node 1&#39;}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除链表中的选定节点" tabindex="-1"><a class="header-anchor" href="#删除链表中的选定节点"><span>删除链表中的选定节点</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 删除链表中的选定节点</span>
给定单链表的头指针和要删除的指针节点，在O<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>时间内删除该节点。
  <span class="token number">1</span>. 删除的节点不是尾部节点：将 next 节点覆盖当前节点
  <span class="token number">2</span>. 链表仅有一个节点：将头节点设置为 null
  <span class="token number">3</span>. 删除的节点是尾节点且前面还有节点：遍历到末尾的前一个节点进行删除

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 链表单个节点数据字段约束 */</span>
<span class="token keyword">interface</span> <span class="token class-name">ILinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  next<span class="token operator">:</span> ILinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  value<span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 当前节点数据字段约束 */</span>
<span class="token keyword">type</span> <span class="token class-name">ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">|</span> ILinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>

<span class="token doc-comment comment">/** 链表节点类 */</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ListNode<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">ILinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  next<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
  value<span class="token operator">:</span> <span class="token constant">T</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>nodeValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> next<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> nodeValue
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 用来删除选定的链表节点
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ICurListNode&lt;T&gt;<span class="token punctuation">}</span> head - 链表的头节点
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ICurListNode&lt;T&gt;<span class="token punctuation">}</span> node - 要删除的链表节点
 * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>ICurListNode&lt;T&gt;<span class="token punctuation">}</span> 删除选定节点后的链表头节点
 */</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">deleteNode</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  head<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  node<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Cannot delete the last node or a null node&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 1. 删除的节点不是尾部节点：将 next 节点覆盖当前节点 */</span>
    <span class="token keyword">const</span> nextNode <span class="token operator">=</span> node<span class="token punctuation">.</span>next
    node<span class="token punctuation">.</span>value <span class="token operator">=</span> nextNode<span class="token punctuation">.</span>value
    node<span class="token punctuation">.</span>next <span class="token operator">=</span> nextNode<span class="token punctuation">.</span>next
    <span class="token keyword">return</span> head
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 2. 链表仅有一个节点：将头节点设置为 null  */</span>
    node <span class="token operator">=</span> <span class="token keyword">null</span>
    head <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 3. 删除的节点是尾节点且前面还有节点：遍历到末尾的前一个节点进行删除 */</span>
    node <span class="token operator">=</span> head
    <span class="token keyword">while</span> <span class="token punctuation">(</span>node<span class="token operator">?.</span>next<span class="token operator">?.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node <span class="token operator">=</span> node<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    node<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">return</span> head
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试用例 */</span>
<span class="token comment">// 用例1：删除中间的节点</span>
<span class="token keyword">const</span> case1Node1<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> case1Node2<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> case1Node3<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
case1Node1<span class="token punctuation">.</span>next <span class="token operator">=</span> case1Node2
case1Node2<span class="token punctuation">.</span>next <span class="token operator">=</span> case1Node3
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">deleteNode</span><span class="token punctuation">(</span>case1Node1<span class="token punctuation">,</span> case1Node2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 预期结果： {value: 1, next: { value: 3, next: null }}</span>

<span class="token comment">// 用例2：只有一个节点，并删除这个唯一节点</span>
<span class="token keyword">const</span> case2Node1<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">deleteNode</span><span class="token punctuation">(</span>case2Node1<span class="token punctuation">,</span> case2Node1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 预期结果：null</span>

<span class="token comment">// 用例3：删除尾部节点</span>
<span class="token keyword">const</span> case3Node1<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> case3Node2<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> case3Node3<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
case3Node1<span class="token punctuation">.</span>next <span class="token operator">=</span> case3Node2
case3Node2<span class="token punctuation">.</span>next <span class="token operator">=</span> case3Node3
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">deleteNode</span><span class="token punctuation">(</span>case3Node1<span class="token punctuation">,</span> case3Node3<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 预期结果：{value: 1, next: { value: 2, next: null }}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除链表中重复的节点" tabindex="-1"><a class="header-anchor" href="#删除链表中重复的节点"><span>删除链表中重复的节点</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 删除链表中重复节点</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 链表单个节点数据字段约束 */</span>
<span class="token keyword">interface</span> <span class="token class-name">ILinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  next<span class="token operator">:</span> ILinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  value<span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 当前节点数据字段约束 */</span>
<span class="token keyword">type</span> <span class="token class-name">ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">|</span> ILinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>

<span class="token doc-comment comment">/** 链表节点类 */</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ListNode<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">ILinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  next<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
  value<span class="token operator">:</span> <span class="token constant">T</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>nodeValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> next<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> nodeValue
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 用来删除重复链表节点
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ICurListNode&lt;T&gt;<span class="token punctuation">}</span> head - 链表的头节点
 * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>ICurListNode&lt;T&gt;<span class="token punctuation">}</span> 删除重复节点后的链表头节点
 */</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">deleteDuplicatesNode</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  head<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 如果是链表为空 或 链表只有一个节点，则直接返回 */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head

  <span class="token keyword">const</span> listNodeMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token builtin">boolean</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> currentNode<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> head
  <span class="token keyword">let</span> prev<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>listNodeMap<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 删除重复节点</span>
      prev<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      listNodeMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
      prev <span class="token operator">=</span> currentNode
    <span class="token punctuation">}</span>

    currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> head
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试用例 */</span>
<span class="token comment">// 创建链表</span>
<span class="token keyword">const</span> node1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> node2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> node3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> node4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
node1<span class="token punctuation">.</span>next <span class="token operator">=</span> node2
node2<span class="token punctuation">.</span>next <span class="token operator">=</span> node3
node3<span class="token punctuation">.</span>next <span class="token operator">=</span> node4

<span class="token comment">// 调用函数删除重复节点</span>
<span class="token keyword">const</span> newHead <span class="token operator">=</span> <span class="token function">deleteDuplicatesNode</span><span class="token punctuation">(</span>node1<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newHead<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双向链表" tabindex="-1"><a class="header-anchor" href="#双向链表"><span>双向链表</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 双向链表</span>
- 双向链表支持两个方向，每个节点不仅有一个后驱节点指针 next 指向后面的节点，还有一个前驱指针 prev 指向前面的节点。
- 双链表中，除了可以像单向链表一样从头部开始遍历之外，还可以从尾部进行遍历。

<span class="token comment">### 应用</span>
<span class="token number">1</span>. 扁平化多级双向链表
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+O+`" alt="image-20230215183448698"></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 链表单个节点数据字段约束 */</span>
<span class="token keyword">interface</span> <span class="token class-name">ILinkedNode</span> <span class="token punctuation">{</span>
  next<span class="token operator">:</span> ILinkedNode <span class="token operator">|</span> <span class="token keyword">null</span>
  prev<span class="token operator">:</span> ILinkedNode <span class="token operator">|</span> <span class="token keyword">null</span>
  value<span class="token operator">:</span> <span class="token builtin">unknown</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/** 当前节点数据字段约束 */</span>
<span class="token keyword">type</span> <span class="token class-name">ICurListNode</span> <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">|</span> ILinkedNode

<span class="token doc-comment comment">/** 链表节点类 */</span>
<span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token keyword">implements</span> <span class="token class-name">ILinkedNode</span> <span class="token punctuation">{</span>
  next<span class="token operator">:</span> ILinkedNode <span class="token operator">|</span> <span class="token keyword">null</span>
  prev<span class="token operator">:</span> ILinkedNode <span class="token operator">|</span> <span class="token keyword">null</span>
  value<span class="token operator">:</span> <span class="token builtin">unknown</span>

  <span class="token function">constructor</span> <span class="token punctuation">(</span>nodeValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> nodeValue
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 双向链表类 */</span>
<span class="token keyword">class</span> <span class="token class-name">DoubleLinkedList</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 链表长度 */</span>
  length<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token doc-comment comment">/** 链表头部节点：仅在插入首个节点or头部插入新节点时才修改，主要通过节点next属性查找下一个节点  */</span>
  head<span class="token operator">:</span> ICurListNode
  <span class="token doc-comment comment">/** 链表尾部的节点：仅在插入首个节点or尾部插入新节点时才更改，主要通过节点prev属性查找上一个节点 */</span>
  tail<span class="token operator">:</span> ICurListNode

  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 获取双向链表中索引所对应的元素，返回所查找节点 | null */</span>
  <span class="token function">getElementAt</span> <span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ICurListNode <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token keyword">let</span> currentNode<span class="token operator">:</span> ICurListNode <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token comment">// 当索引大于链表长度的一半时，从后往前找</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
      <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token operator">?.</span>prev <span class="token operator">||</span> <span class="token keyword">null</span>
        i<span class="token operator">--</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
      <span class="token keyword">while</span> <span class="token punctuation">(</span>index<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token operator">?.</span>next <span class="token operator">||</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> currentNode
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 获取双向链表中某个节点 */</span>
  <span class="token generic-function"><span class="token function">find</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span> <span class="token punctuation">(</span>nodeValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> ICurListNode <span class="token punctuation">{</span>
    <span class="token keyword">let</span> curHead<span class="token operator">:</span> ICurListNode <span class="token operator">=</span> <span class="token function">cloneDeep</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span>
    <span class="token keyword">let</span> curTail<span class="token operator">:</span> ICurListNode <span class="token operator">=</span> <span class="token function">cloneDeep</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">)</span>
    <span class="token comment">// 双向迭代，理想状态下相对单向链表更快速</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curHead<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>curHead<span class="token punctuation">.</span>value <span class="token operator">===</span> nodeValue<span class="token punctuation">)</span> <span class="token keyword">return</span> curHead
      curHead <span class="token operator">=</span> curHead<span class="token punctuation">.</span>next

      <span class="token keyword">if</span> <span class="token punctuation">(</span>curTail<span class="token operator">?.</span>value <span class="token operator">===</span> nodeValue<span class="token punctuation">)</span> <span class="token keyword">return</span> curTail
      curTail <span class="token operator">=</span> curTail<span class="token operator">?.</span>prev <span class="token operator">||</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 向双向链表中追加节点 */</span>
  <span class="token generic-function"><span class="token function">append</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span> <span class="token punctuation">(</span>nodeValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>nodeValue<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 链表为空，head 和 tail 都指向当前追加的节点</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> node
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 链表不为空，将当前节点添加到链表的尾部</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> node
      node<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> node
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 在双向链表的指定位置插入节点 */</span>
  <span class="token generic-function"><span class="token function">insert</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span> <span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> nodeValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

    <span class="token comment">// 插入到尾部</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token generic-function"><span class="token function">append</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>nodeValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>nodeValue<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 插入到头部</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
          <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> node
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          node<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
          <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>prev <span class="token operator">=</span> node
          <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 插入到中间位置</span>
        <span class="token keyword">const</span> curNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
        <span class="token keyword">const</span> prevNode <span class="token operator">=</span> curNode<span class="token operator">!</span><span class="token punctuation">.</span>prev
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> curNode
        node<span class="token punctuation">.</span>prev <span class="token operator">=</span> prevNode
        prevNode<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> node
        curNode<span class="token operator">!</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> node
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 删除双向链表中指定位置的元素，并返回这个元素的值 */</span>
  <span class="token function">removeAt</span> <span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ILinkedNode<span class="token punctuation">[</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

    <span class="token keyword">let</span> curNode<span class="token operator">:</span> ICurListNode
    <span class="token keyword">let</span> prevNode<span class="token operator">:</span> ICurListNode

    <span class="token comment">// 移除头部元素</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      curNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> curNode<span class="token operator">!</span><span class="token punctuation">.</span>next
      <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token operator">!</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 移除尾部元素</span>
      curNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> curNode<span class="token operator">!</span><span class="token punctuation">.</span>prev
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 移除中间元素</span>
      curNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
      prevNode <span class="token operator">=</span> curNode<span class="token operator">!</span><span class="token punctuation">.</span>prev
      prevNode<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> curNode<span class="token operator">!</span><span class="token punctuation">.</span>next
      prevNode<span class="token operator">!</span><span class="token punctuation">.</span>next<span class="token operator">!</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> prevNode
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">--</span>
    <span class="token keyword">return</span> curNode<span class="token operator">!</span><span class="token punctuation">.</span>value
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 获取双向链表中给定元素的索引 */</span>
  <span class="token generic-function"><span class="token function">indexOf</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span> <span class="token punctuation">(</span>nodeValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> curHead <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">let</span> curTail <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
    <span class="token keyword">let</span> idx <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>curHead <span class="token operator">!==</span> curTail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>curHead<span class="token operator">?.</span>value <span class="token operator">===</span> nodeValue<span class="token punctuation">)</span> <span class="token keyword">return</span> idx
      curHead <span class="token operator">=</span> curHead<span class="token operator">!</span><span class="token punctuation">.</span>next

      <span class="token keyword">if</span> <span class="token punctuation">(</span>curTail<span class="token operator">?.</span>value <span class="token operator">===</span> nodeValue<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> idx
      curTail <span class="token operator">=</span> curTail<span class="token operator">!</span><span class="token punctuation">.</span>prev

      idx<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 删除链表中对应的元素 */</span>
  <span class="token generic-function"><span class="token function">remove</span> <span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span> <span class="token punctuation">(</span>nodeValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>nodeValue<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 序列化双向链表 */</span>
  <span class="token function">join</span> <span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> curNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">let</span> tempStr <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      tempStr <span class="token operator">+=</span> curNode<span class="token punctuation">.</span>value
      <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>next<span class="token punctuation">)</span> tempStr <span class="token operator">+=</span> str
      curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> tempStr
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试内容 */</span>
<span class="token keyword">const</span> doubleLinkedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoubleLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
doubleLinkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
doubleLinkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>
doubleLinkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
doubleLinkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubleLinkedList<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;-&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubleLinkedList<span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">?.</span>value<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubleLinkedList<span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">?.</span>value<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubleLinkedList<span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubleLinkedList<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;-&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubleLinkedList<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubleLinkedList<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubleLinkedList<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

doubleLinkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
doubleLinkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
doubleLinkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubleLinkedList<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;-&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubleLinkedList<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token operator">?.</span>value<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubleLinkedList<span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubleLinkedList<span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubleLinkedList<span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubleLinkedList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubleLinkedList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubleLinkedList<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;-&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubleLinkedList<span class="token punctuation">.</span>tail<span class="token punctuation">,</span> doubleLinkedList<span class="token punctuation">.</span>head<span class="token punctuation">)</span>
    
<span class="token comment">/* 测试结果：
10&lt;-&gt;15&lt;-&gt;20&lt;-&gt;25
10
15
null
10&lt;-&gt;15&lt;-&gt;20&lt;-&gt;25
0
3
-1
5&lt;-&gt;10&lt;-&gt;15&lt;-&gt;18&lt;-&gt;20&lt;-&gt;25&lt;-&gt;30
10
5
15
null
10
null
18&lt;-&gt;20&lt;-&gt;25&lt;-&gt;30 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="循环列表-环类" tabindex="-1"><a class="header-anchor" href="#循环列表-环类"><span>循环列表(环类)</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 循环列表（环类）</span>
循环列表是一种特殊的单链表，与单链表不同的是尾节点不指向空地址，指向链表的头结点。
优点是从链尾到链头比较方便，当要处理的数据具有环形结构特点时，非常适合用循环列表来处理。


<span class="token comment">## 环类：从判定一个单链表是否存在循环而扩展衍生的问题</span>
<span class="token number">1</span>. 环形链表
<span class="token number">2</span>. 链表环的入口节点
<span class="token number">3</span>. 约瑟夫环
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+B+`" alt="image-20230216183655897"></p></blockquote><h4 id="链表中环的入口节点" tabindex="-1"><a class="header-anchor" href="#链表中环的入口节点"><span>链表中环的入口节点</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 链表中环的入口节点</span>
给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。


<span class="token comment">### 思路</span>
声明两个指针 P1 P2。
	<span class="token number">1</span>. 判断链表是否有环： P1 P2 从头部出发，P1走两步，P2走一步，如果可以相遇，则环存在。
	<span class="token number">2</span>. 从环内某个节点开始计数，再回到此节点时得到链表环的长度 length。
	<span class="token number">3</span>. P1、P2 回到head节点，让 P1 先走 length 步 ，当P2和P1相遇时即为链表环的起点。
	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+M+`" alt="链表中环的入口节点"></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 链表单个节点数据字段约束 */</span>
<span class="token keyword">interface</span> <span class="token class-name">ILinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  next<span class="token operator">:</span> ILinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  value<span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 当前节点数据字段约束 */</span>
<span class="token keyword">type</span> <span class="token class-name">ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">|</span> ILinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>

<span class="token doc-comment comment">/** 链表节点类 */</span>
<span class="token keyword">class</span> <span class="token class-name">ListNode<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">ILinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  next<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
  value<span class="token operator">:</span> <span class="token constant">T</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>nodeValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> next<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> nodeValue
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@function</span> detectCycle 链表中环的入口节点
 * <span class="token keyword">@description</span> 龟兔赛跑算法（Floyd&#39;s Cycle Detection Algorithm）能够找到链表中的环入口
 *  1. 定义两个指针，一个慢指针（slow）每次移动一个节点，一个快指针（fast）每次移动两个节点。
 *  2. 如果链表中存在环，快指针和慢指针最终会在环内相遇（这是由于快指针每次比慢指针多走一步）。
 *  3. 让快指针从相遇点开始，另外再定义一个新的指针从链表头开始，两个指针每次都只移动一个节点，它们相遇的节点就是环的入口节点。
 */</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">detectCycle</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>head<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

  <span class="token doc-comment comment">/** 快指针 */</span>
  <span class="token keyword">let</span> fast<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> head
  <span class="token doc-comment comment">/** 慢指针 */</span>
  <span class="token keyword">let</span> slow<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> head

  <span class="token doc-comment comment">/**
   * 1. 如果指针不断走动，存在指针指向的下一个节点为空，则说明为不是环状链表
   * 2. 如果为环状，快指针和慢指针终会相遇。
   *    - 在相遇时快指针和慢指针的差值等于环的长度的整数倍（此时可确定相遇的值为环的入口节点）
   *    - k=nr，（n为正整数，r是环的长度）
   */</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    slow <span class="token operator">=</span> slow<span class="token operator">!</span><span class="token punctuation">.</span>next
    fast <span class="token operator">=</span> fast<span class="token operator">!</span><span class="token punctuation">.</span>next<span class="token punctuation">.</span>next

    <span class="token keyword">if</span> <span class="token punctuation">(</span>slow <span class="token operator">===</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> slow2<span class="token operator">:</span> ListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> head

      <span class="token keyword">while</span> <span class="token punctuation">(</span>slow2 <span class="token operator">!==</span> slow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        slow <span class="token operator">=</span> slow<span class="token operator">!</span><span class="token punctuation">.</span>next
        slow2 <span class="token operator">=</span> slow2<span class="token operator">!</span><span class="token punctuation">.</span>next
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> slow
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试代码 */</span>
<span class="token keyword">const</span> node1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> node2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> node3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> node4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span>

node1<span class="token punctuation">.</span>next <span class="token operator">=</span> node2
node2<span class="token punctuation">.</span>next <span class="token operator">=</span> node3
node3<span class="token punctuation">.</span>next <span class="token operator">=</span> node4
node4<span class="token punctuation">.</span>next <span class="token operator">=</span> node3 <span class="token comment">// 形成环</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">detectCycle</span><span class="token punctuation">(</span>node1<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token operator">?.</span>value<span class="token punctuation">)</span> <span class="token comment">// 输出 2</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="圈圈中最后剩下的数字-约瑟夫环问题" tabindex="-1"><a class="header-anchor" href="#圈圈中最后剩下的数字-约瑟夫环问题"><span>圈圈中最后剩下的数字（约瑟夫环问题）</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 圈圈中最后剩下的数字</span>
<span class="token number">0,1</span>,<span class="token punctuation">..</span>.,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字。求出这个圆圈里剩下的最后一个数字。


<span class="token comment">#### 约瑟夫环问题</span>
据说著名犹太历史学家 Josephus有过以下的故事：在罗马人占领乔塔帕特后，39 个犹太人与Josephus及他的朋友躲到一个洞中，39个犹太人决定宁愿死也不要被敌人抓到，于是决定了一个自杀方式，41个人排成一个圆圈，由第1个人开始报数，每报数到第3人该人就必须自杀，然后再由下一个重新报数，直到所有人都自杀身亡为止。然而Josephus 和他的朋友并不想遵从。首先从一个人开始，越过k-2个人（因为第一个人已经被越过），并杀掉第k个人。接着，再越过k-1个人，并杀掉第k个人。这个过程沿着圆圈一直进行，直到最终只剩下一个人留下，这个人就可以继续活着。问题是，给定了和，一开始要站在什么地方才能避免被处决？Josephus要他的朋友先假装遵从，他将朋友与自己安排在第16个与第31个位置，于是逃过了这场死亡游戏。




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 链表单个节点数据字段约束 */</span>
<span class="token keyword">interface</span> <span class="token class-name">ILinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  next<span class="token operator">:</span> ILinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  value<span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 当前节点数据字段约束 */</span>
<span class="token keyword">type</span> <span class="token class-name">ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">|</span> ILinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>

<span class="token doc-comment comment">/** 链表节点类 */</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ListNode<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">ILinkedNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  next<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
  value<span class="token operator">:</span> <span class="token constant">T</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>nodeValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> next<span class="token operator">:</span> ICurListNode<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> nodeValue
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 约瑟夫环问题
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> n 参与游戏的总人数
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> m 每报数到 m 的人出列
 * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> 存活的人的编号（仅能剩下一个人）
 */</span>
<span class="token keyword">function</span> <span class="token function">josephus</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> m<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 边界条件 */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">||</span> m <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>

  <span class="token keyword">const</span> head<span class="token operator">:</span> ICurListNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> current<span class="token operator">:</span> ICurListNode <span class="token operator">=</span> head

  <span class="token comment">// 循环生成长度为 n 的链表</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    current<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    current <span class="token operator">=</span> current<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>

  <span class="token comment">// 构成环状链表</span>
  current<span class="token punctuation">.</span>next <span class="token operator">=</span> head

  <span class="token doc-comment comment">/** 指针的前一个节点 */</span>
  <span class="token keyword">let</span> prev<span class="token operator">:</span> ICurListNode <span class="token operator">=</span> current
  <span class="token doc-comment comment">/** 计数值 */</span>
  <span class="token keyword">let</span> count<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token doc-comment comment">/** 当前指针 */</span>
  <span class="token keyword">let</span> cur<span class="token operator">:</span> ICurListNode <span class="token operator">=</span> head

  <span class="token doc-comment comment">/** 直到只有一个节点为止 */</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!==</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>count <span class="token operator">===</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 每当报数到达 m 时，就将当前节点从链表中移除（通过修改前一个节点的指针），并将计数器重置为 0</span>
      prev<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
      count <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果报数未达到 m，就简单地将当前节点指针移动到下一个节点。</span>
      prev <span class="token operator">=</span> cur
    <span class="token punctuation">}</span>

    <span class="token comment">// 指针后移</span>
    cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next <span class="token keyword">as</span> ListNode<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> cur<span class="token punctuation">.</span>value
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试代码 */</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">josephus</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 输出：4</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数组解</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 约瑟夫环问题 - 数组解法
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> n 参与游戏的总人数
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> m 每报数到 m 的人出列
 * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> 存活的人的编号（可剩下多个人）
 */</span>
<span class="token keyword">function</span> <span class="token function">josephusAsArr</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> persons <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> length<span class="token operator">:</span> n <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> idx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> idx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>

  <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token comment">//   while (persons.length &gt; 1) {</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>persons<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    index <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>index <span class="token operator">+</span> m<span class="token punctuation">)</span> <span class="token operator">%</span> persons<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      persons<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      persons<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>persons<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
      index <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> persons
<span class="token punctuation">}</span>

<span class="token function">josephusAsArr</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 预期结果：[2, 7]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js-链表" tabindex="-1"><a class="header-anchor" href="#js-链表"><span>JS &amp; 链表</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### JavaScript 不内置链表的原因</span>
链表效率高于数组效率这种话，事实上在 JavaScript 中是不存在的，即使创建一个长度为 <span class="token number">1</span>亿 的数组，在创建一个长度为 <span class="token number">10</span> 的数组，并且向这两个数组的中间添加元素，会发现两者所用时间与数组长度无关，这说明 JavaScript 数组达到了链表的效率要求。

而且数组中可用 <span class="token variable"><span class="token variable">\`</span>splice<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 方法向数组的指定位置去添加和删除元素，所需时间同样与数组长度无关，也能达到链表的要求，而数组的下标完全可以取代链表的 <span class="token variable"><span class="token variable">\`</span>head、tail、next、prev<span class="token variable">\`</span></span> 等方法，并且大多数使用链表的情况不多。

当然这只局限于 JavaScript 这门语言中，这和 JS 内部的数组实现机制有关，其实 JS 的数组只是叫数组而已，它和常规语言中的数组概念不同。



<span class="token comment">### JavaScript 链表的作用：React 16 引入的 Fiber 架构的更新算法</span>
Fiber 翻译为纤维化，将任务进行细化。它把一个耗时长的任务分成很多小片，每一个小片的运行时间很短，虽然总时间依然很长，但是在每个小片执行完之后，都给其他任务一个执行的机会，这样唯一的线程就不会被独占，其他任务依然有运行的机会，React 中的 Fiber 就把整个 VDOM 的更新过程碎片化。

在之前 React 的 render<span class="token punctuation">(</span><span class="token punctuation">)</span> 方法会接收一个 虚拟DOM 对象和一个真实的 容器DOM 作为 虚拟DOM 渲染完成后的挂载节点，其主要作用是将 虚拟DOM 渲染为 真实DOM 并挂载到容器下，这个方法在更新时是进行递归操作的，如果在更新的过程中有大量的节点需要更新，就会出现长时间占用 JS 主线程的情况，并且整个递归过程是无法被打断的，由于 JS 线程和 GUI 线程是互斥的，所以大量更新的情况下会看到界面有些卡顿。

Fiber 架构主要是解决两个问题：一是保证任务在浏览器空闲时执行，二是将任务进行碎片化。

JS 中有一个实验性质的方法 <span class="token variable"><span class="token variable">\`</span>requestIdleCallback<span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token variable">\`</span></span>，它可以传入一个回调函数，回调函数能够收到一个 deadline 对象，通过该对象的 timeRemaining<span class="token punctuation">(</span><span class="token punctuation">)</span> 方法可以获取到当前浏览器的空闲时间，如果有空闲时间，那么就可以执行一小段任务，如果时间不足，则继续 requestIdleCallback，等到浏览器有空闲时间时再接着执行，这样就实现了浏览器空闲时执行。

但虚拟 DOM 是树结构，当任务被打断后，树结构无法恢复之前的任务继续执行。
Fiber 架构为了使整个更新过程可随时暂停恢复，节点与树分别采用了 FiberNode 与 FiberTree 进行重构。FiberNode 使用了双链表结构，链表中就包含三个指针，parent 指向其父 Fiber 节点，child 指向其子 Fiber 节点，sibling 指向其兄弟 Fiber 节点，一个 Fiber 节点对应一个任务节点，这样就可以直接找到兄弟节点与子节点，继而可以恢复任务的执行。
整个过程由 current 与 workInProgress 两株树双缓冲完成。workInProgress 更新完成后，再通过修改 current 相关指针指向新节点。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="队列-queue" tabindex="-1"><a class="header-anchor" href="#队列-queue"><span>队列 Queue</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 队列</span>
- 队列是线性结构，遵循先进先出原则，特点是在尾部插入元素，在头部取出元素。
- 队列分为两种：
		<span class="token number">1</span>. 有界队列：能装入的元素有限。
		<span class="token number">2</span>. 无界队列：能装入的元素无线，只要内存还有，就能一直装下去。

- 队列的应用场景
面对无法同时处理多个问题的场景，通常使用队列先进先出的特性一个一个地解决问题，还可以保证有序性。
    <span class="token number">1</span>. 食堂排队打饭
    <span class="token number">2</span>. JS异步中的任务队列：JS使用队列先后处理异步任务，因为JS是单线程的，无法同时处理异步中的并发任务。
    <span class="token number">3</span>. 计算最近请求次数


<span class="token comment">### 循环队列</span>
因为单链队列出队操作的时间复杂度为 O<span class="token punctuation">(</span>n<span class="token punctuation">)</span>，而循环队列的出队操作的时间复杂度为 O<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="单链队列" tabindex="-1"><a class="header-anchor" href="#单链队列"><span>单链队列</span></a></h3><blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> queue<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

	<span class="token doc-comment comment">/** 入队 */</span>
  <span class="token keyword">public</span> <span class="token function">enter</span> <span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 出队 */</span>
  <span class="token keyword">public</span> <span class="token keyword">delete</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">clear</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
  <span class="token keyword">get</span> <span class="token function">length</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="【典例】933-最近的请求次数" tabindex="-1"><a class="header-anchor" href="#【典例】933-最近的请求次数"><span>【典例】933. 最近的请求次数</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 【典例】933. 最近的请求次数</span>
题目：
请你实现 RecentCounter 类来计算特定时间范围内最近的请求：
RecentCounter<span class="token punctuation">(</span><span class="token punctuation">)</span> 初始化计数器，请求数为 <span class="token number">0</span> 。
int ping<span class="token punctuation">(</span>int t<span class="token punctuation">)</span> 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 <span class="token number">3000</span> 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 <span class="token punctuation">[</span>t-3000, t<span class="token punctuation">]</span> 内发生的请求数。
保证 每次对 <span class="token function">ping</span> 的调用都使用比之前更大的 t 值。


输入：
<span class="token punctuation">[</span><span class="token string">&quot;RecentCounter&quot;</span>, <span class="token string">&quot;ping&quot;</span>, <span class="token string">&quot;ping&quot;</span>, <span class="token string">&quot;ping&quot;</span>, <span class="token string">&quot;ping&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span>, <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>, <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span>, <span class="token punctuation">[</span><span class="token number">3001</span><span class="token punctuation">]</span>, <span class="token punctuation">[</span><span class="token number">3002</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
输出：
<span class="token punctuation">[</span>null, <span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span>, <span class="token number">3</span><span class="token punctuation">]</span>

解释：
RecentCounter recentCounter <span class="token operator">=</span> new RecentCounter<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
recentCounter.ping<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     // requests <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>，范围是 <span class="token punctuation">[</span>-2999,1<span class="token punctuation">]</span>，返回 <span class="token number">1</span>
recentCounter.ping<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   // requests <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">100</span><span class="token punctuation">]</span>，范围是 <span class="token punctuation">[</span>-2900,100<span class="token punctuation">]</span>，返回 <span class="token number">2</span>
recentCounter.ping<span class="token punctuation">(</span><span class="token number">3001</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  // requests <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">100</span>, <span class="token number">3001</span><span class="token punctuation">]</span>，范围是 <span class="token punctuation">[</span><span class="token number">1,3001</span><span class="token punctuation">]</span>，返回 <span class="token number">3</span>
recentCounter.ping<span class="token punctuation">(</span><span class="token number">3002</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  // requests <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">100</span>, <span class="token number">3001</span>, <span class="token number">3002</span><span class="token punctuation">]</span>，范围是 <span class="token punctuation">[</span><span class="token number">2,3002</span><span class="token punctuation">]</span>，返回 <span class="token number">3</span>


复杂度分析:
时间：O<span class="token punctuation">(</span>n<span class="token punctuation">)</span>n为while中踢出的个数
空间：O<span class="token punctuation">(</span>n<span class="token punctuation">)</span>n为队列长度 即 最近请求次数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">RecentCounter</span> <span class="token punctuation">{</span>
  queue<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token function">ping</span><span class="token punctuation">(</span>t<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> t <span class="token operator">-</span> <span class="token number">3000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="链表实现队列" tabindex="-1"><a class="header-anchor" href="#链表实现队列"><span>链表实现队列</span></a></h3><blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IListNode</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token builtin">number</span>
  next<span class="token operator">:</span> IListNode <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> head<span class="token operator">:</span> IListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">private</span> tail<span class="token operator">:</span> IListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">private</span> len <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token doc-comment comment">/**
   * 入队，在 tail 位置
   * <span class="token keyword">@param</span> <span class="token parameter">n</span> number
   */</span>
  <span class="token function">add</span> <span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newNode<span class="token operator">:</span> IListNode <span class="token operator">=</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> n<span class="token punctuation">,</span>
      next<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 处理 head</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode
    <span class="token punctuation">}</span>

    <span class="token comment">// 处理 tail</span>
    <span class="token keyword">const</span> tailNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
    <span class="token keyword">if</span> <span class="token punctuation">(</span>tailNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      tailNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode
    <span class="token punctuation">}</span>
    <span class="token comment">// 记录尾结点</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode

    <span class="token comment">// 记录长度</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>len<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 出队，在 head 位置
   */</span>
  <span class="token keyword">delete</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> headNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token keyword">if</span> <span class="token punctuation">(</span>headNode <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>len <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

    <span class="token comment">// 取值</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> headNode<span class="token punctuation">.</span>value

    <span class="token comment">// 处理 head</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> headNode<span class="token punctuation">.</span>next

    <span class="token comment">// 记录长度</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>len<span class="token operator">--</span>

    <span class="token keyword">return</span> value
  <span class="token punctuation">}</span>

  <span class="token keyword">get</span> <span class="token function">length</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token comment">// length 要单独存储，不能遍历链表来获取（否则时间复杂度太高 O(n)）</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>len
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="循环队列" tabindex="-1"><a class="header-anchor" href="#循环队列"><span>循环队列</span></a></h3><blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 循环队列 */</span>
<span class="token keyword">class</span> <span class="token class-name">SqQueue</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 队列 */</span>
    <span class="token keyword">private</span> queue<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token doc-comment comment">/** 队头 */</span>
    <span class="token keyword">private</span> head <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token doc-comment comment">/** 队尾 */</span>
    <span class="token keyword">private</span> tail <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token doc-comment comment">/** 队列大小 */</span>
    <span class="token keyword">private</span> size <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token function">constructor</span> <span class="token punctuation">(</span>length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
     <span class="token punctuation">}</span>
   
     <span class="token keyword">private</span> <span class="token function">resize</span> <span class="token punctuation">(</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> q <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>length<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token generic-function"><span class="token function">i</span> <span class="token generic class-name"><span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        q<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">]</span>
       <span class="token punctuation">}</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> q
       <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token number">0</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size
     <span class="token punctuation">}</span>
   
     <span class="token keyword">public</span> <span class="token function">pushQueue</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//  % this.queue.length 是为了防止数组越界</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">===</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
       <span class="token punctuation">}</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">]</span> <span class="token operator">=</span> item
       <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">++</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length
     <span class="token punctuation">}</span>
   
     <span class="token doc-comment comment">/** 出队 */</span>
    <span class="token keyword">public</span> <span class="token function">popQueue</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Queue is empty&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
       <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">]</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length
       <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">--</span>
       <span class="token comment">// 为了保证不浪费空间，在队列空间等于总⻓度四分之⼀且不为2时,缩⼩总⻓度为当前的⼀半</span>
       <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">!==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
       <span class="token punctuation">}</span>
       <span class="token keyword">return</span> result
     <span class="token punctuation">}</span>
   
     <span class="token doc-comment comment">/** 获取队列 */</span>
    <span class="token keyword">public</span> <span class="token function">getQueue</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Queue is empty&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
       <span class="token keyword">try</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">)</span>
       <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;error----&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span>
       <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
   
     <span class="token doc-comment comment">/** 获取队头、队尾 */</span>
    <span class="token keyword">public</span> <span class="token function-variable function">getQueueHeadAndTail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> tail<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">,</span> head<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token doc-comment comment">/** 获取长度 */</span>
    <span class="token keyword">public</span> <span class="token function-variable function">getLength</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token doc-comment comment">/** 判断是否为空 */</span>
    <span class="token keyword">public</span> <span class="token function-variable function">isEmpty</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> quese <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqQueue</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
  quese<span class="token punctuation">.</span><span class="token function">pushQueue</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
quese<span class="token punctuation">.</span><span class="token function">pushQueue</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>
quese<span class="token punctuation">.</span><span class="token function">pushQueue</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span>
quese<span class="token punctuation">.</span><span class="token function">pushQueue</span><span class="token punctuation">(</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span>
quese<span class="token punctuation">.</span><span class="token function">pushQueue</span><span class="token punctuation">(</span><span class="token string">&#39;e&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>quese<span class="token punctuation">)</span> <span class="token comment">// SqQueue { queue: [ &#39;a&#39;, &lt;10 empty items&gt; ], head: 0, tail: 1, size: 1 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="栈-stack" tabindex="-1"><a class="header-anchor" href="#栈-stack"><span>栈 Stack</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 栈</span>
- 栈是一个线性结构，所以栈元素具有线性关系，即前驱后继关系，只不过它是一种的特殊的线性表。
- 栈的插入操作叫进栈，栈的删除操作叫出栈，遵循<span class="token string">&#39;先进后出&#39;</span>的原则。
- 栈的特殊在于限制了这个线性表的插入和删除位置，它始终只在栈顶进行。即栈底是固定的，最先进栈的只能在栈底。
- 对于一个栈，需要实现添加、删除元素、获取栈顶元素、已经是否为空，栈的长度、清除元素等几个基本操作。
- 在计算机中，栈长被用于程序的调用帧栈，在程序中出现的 StackOverFlow 异常就是由于程序调用栈用尽，所以栈一般都是有相对固定的深度（栈深往往被设定的内存影响）。


<span class="token comment">### 匹配括号</span>
通过栈先进后出的特点来判断是否形成闭环
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
Stack<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  constructor<span class="token operator">:</span> Stack<span class="token punctuation">,</span>
  <span class="token function-variable function">push</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token punctuation">{</span>	<span class="token comment">// 在栈顶添加数据</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">pop</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>	<span class="token comment">// 移除栈顶数据</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">peek</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>	<span class="token comment">// 获取栈顶数据</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">isEmpty</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>	<span class="token comment">// 判断栈是否为空</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">clear</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>	<span class="token comment">// 清空栈</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">size</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>	<span class="token comment">// 查看栈的大小</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">print</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>	<span class="token comment">// 输出栈数据</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="【典例】匹配括号" tabindex="-1"><a class="header-anchor" href="#【典例】匹配括号"><span>【典例】匹配括号</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  strArr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 字符串转数组</span>
  <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;(&#39;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;)&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;[&#39;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;]&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;{&#39;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;}&#39;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> strArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">[</span>strArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>strArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// 左括号入栈</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>	
      <span class="token comment">// 判断是否为右括号 且 是否形成闭环</span>
      <span class="token comment">// (注意：需要数据是右括号才行，否则会破坏数据结构)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">[</span>strArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> map<span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">+</span> map<span class="token punctuation">[</span>strArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValid</span><span class="token punctuation">(</span><span class="token string">&#39;{9()8}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// true</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValid</span><span class="token punctuation">(</span><span class="token string">&#39;{9(])8}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// false</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValid</span><span class="token punctuation">(</span><span class="token string">&#39;{222)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// false</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isValid</span><span class="token punctuation">(</span><span class="token string">&#39;{&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="栈和队列" tabindex="-1"><a class="header-anchor" href="#栈和队列"><span>栈和队列</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 栈和队列</span>
在数组中，我们可通过索引随机访问元素，但在某些情况下，我们可能要限制数据的访问顺序，于是有了两种限制访问顺序的数据结构：
<span class="token number">1</span>. 栈：先进后出
<span class="token number">2</span>. 队列：先进先出


<span class="token comment">## 应用</span>
<span class="token number">1</span>. 队列和栈的互相实现
<span class="token number">2</span>. 包含 min 函数的栈
<span class="token number">3</span>. 栈的压入弹出序列
<span class="token number">4</span>. 滑动窗口最大值
<span class="token number">5</span>. 接雨水
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="堆-heap" tabindex="-1"><a class="header-anchor" href="#堆-heap"><span>堆 Heap</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 堆</span>
堆的底层实际上是一颗完全二叉树，可以用数组实现。
- 每个的节点元素值不小于其子节点 - 最大堆
- 每个的节点元素值不大于其子节点 - 最小堆


<span class="token comment">### 应用</span>
堆在处理某些特殊场景时可以大大降低代码的事件复杂度，例如在庞大的数据中找到最大的几个数或者最小的几个数，可以借助堆来完成这个过程。
<span class="token number">1</span>. 堆的基本操作
<span class="token number">2</span>. 数据流中的中位数
<span class="token number">3</span>. 最小的K个数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+E+`" alt="堆"></p></blockquote><h3 id="堆的构建-createheap" tabindex="-1"><a class="header-anchor" href="#堆的构建-createheap"><span>堆的构建 CreateHeap</span></a></h3><h4 id="大顶堆-createmaxheap" tabindex="-1"><a class="header-anchor" href="#大顶堆-createmaxheap"><span>大顶堆 createMaxHeap</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 大顶堆 createMaxHeap</span>
从第一个非叶子节点开始依次对数组中的元素进行下沉操作。
<span class="token number">1</span>. 和孩子节点的最大值 max 比较。
    - 大于 max：不需要再下沉。
    - 小于 max：和 max 交换位置，然后继续和下一层孩子节点比较，直到队列末尾。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">ajustMaxHeap</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> index<span class="token punctuation">,</span> len</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      i<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">break</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">]</span>
      index <span class="token operator">=</span> i
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 创建大顶堆 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">createMaxHeap</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> len</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">ajustMaxHeap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> len<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token function">createMaxHeap</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="哈希表-hashtable" tabindex="-1"><a class="header-anchor" href="#哈希表-hashtable"><span>哈希表 HashTable</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 哈希表</span>
哈希的基本原理是将给定的键值转换为偏移地址来检索记录。
键转换为地址是通过一种关系（公式）来完成的，这就是哈希（散列）函数。
虽然哈希表是一种有效的搜索技术，但它还是有些缺点。两个不同的关键字，由于哈希函数值相同，因而被映射到同一表位置上。该现象称为冲突。发生冲突的两个关键字称为该哈希函数的同义词。

<span class="token comment">### 哈希函数设计问题</span>
如何设计哈希函数以及避免冲突就是哈希表的常见问题，好的哈希函数的选择有两条标准：
<span class="token number">1</span>. 简单并且能够快速计算
<span class="token number">2</span>. 能够在地址空间中获得键的均匀人分布


<span class="token comment">## 应用</span>
<span class="token number">1</span>. 常数事件插入、删除和获取随机元素
（当用到哈希表时我们通常要开辟一个额外空间来记录一些计算过的值，同时我们又要在下一次计算的过程中快速检索到它们，例如两数之和、三数之和等都利用了这种思想）
<span class="token number">2</span>. 两数之和、三数之和
<span class="token number">3</span>. 字符流中第一个不重复的字符
<span class="token number">4</span>. 宝石与石头
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+D+`" alt="哈希表"></p></blockquote><h2 id="二叉树-binarytree" tabindex="-1"><a class="header-anchor" href="#二叉树-binarytree"><span>二叉树 BinaryTree</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 完全二叉树的公式</span>
- 第 n 层的节点数最对为 <span class="token number">2</span>^n 个节点
- n 层二叉树最多有 <span class="token number">2</span>^0 + <span class="token punctuation">..</span>. + <span class="token number">2</span>^n <span class="token operator">=</span> <span class="token number">2</span>^<span class="token punctuation">(</span>n+1<span class="token punctuation">)</span> <span class="token parameter variable">-1</span> 个节点
- 第一个非野子节点：length/2
- 一个节点的孩子节点：2n 或 2n+1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+V+'" alt="二叉树的基本形态"></p><p><img src="'+F+`" alt="image-20230327165455597"></p></blockquote><h3 id="二叉树基本操作" tabindex="-1"><a class="header-anchor" href="#二叉树基本操作"><span>二叉树基本操作</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 二叉树的基本操作</span>
<span class="token number">1</span>. 插入树节点
<span class="token number">2</span>. 前序遍历
<span class="token number">3</span>. 中序遍历
<span class="token number">4</span>. 后序遍历
<span class="token number">5</span>. 获取最大值的节点
<span class="token number">6</span>. 获取最小值的节点
<span class="token number">7</span>. 获取树的深度
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 树节点约束 */</span>
<span class="token keyword">interface</span> <span class="token class-name">ITreeNode</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 值 */</span>
  value<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token doc-comment comment">/** 左孩子 */</span>
  left<span class="token operator">:</span> ITreeNode <span class="token operator">|</span> <span class="token keyword">null</span>
  <span class="token doc-comment comment">/** 右孩子 */</span>
  right<span class="token operator">:</span> ITreeNode <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/** 树的 root 存储的可能值 */</span>
<span class="token keyword">type</span> <span class="token class-name">ITree</span> <span class="token operator">=</span> ITreeNode <span class="token operator">|</span> <span class="token keyword">null</span>

<span class="token doc-comment comment">/** 节点类（记录每个节点上下关联） */</span>
<span class="token keyword">class</span> <span class="token class-name">TreeNode</span> <span class="token keyword">implements</span> <span class="token class-name">ITreeNode</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> value <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">public</span> left <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">public</span> right <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token function">constructor</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
  <span class="token punctuation">}</span>

  <span class="token function">show</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 树类 */</span>
<span class="token keyword">class</span> <span class="token class-name">Tree</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 根节点 */</span>
  <span class="token keyword">private</span> root<span class="token operator">:</span> ITree

  <span class="token function">constructor</span> <span class="token punctuation">(</span>treeNode<span class="token operator">:</span> ITree <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> treeNode
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 插入节点 */</span>
  <span class="token function">insertNode</span> <span class="token punctuation">(</span>nodeValue<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ITree <span class="token punctuation">{</span>
    <span class="token keyword">const</span> treeNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>nodeValue<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> treeNode
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> curNode<span class="token operator">:</span> ITree <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root
    <span class="token keyword">let</span> parent<span class="token operator">:</span> ITree <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      parent <span class="token operator">=</span> curNode

      <span class="token keyword">if</span> <span class="token punctuation">(</span>nodeValue <span class="token operator">&lt;</span> parent<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>left
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>curNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          parent<span class="token punctuation">.</span>left <span class="token operator">=</span> treeNode
          <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>right
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>curNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          parent<span class="token punctuation">.</span>right <span class="token operator">=</span> treeNode
          <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 插入多个节点 */</span>
  <span class="token function">inserNodes</span> <span class="token punctuation">(</span>nodeValues<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> ITree <span class="token punctuation">{</span>
    nodeValues<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>nodeValue <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">insertNode</span><span class="token punctuation">(</span>nodeValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 前序遍历 */</span>
  <span class="token function">preOrder</span> <span class="token punctuation">(</span>treeNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>treeNode <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      treeNode<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">preOrder</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">preOrder</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 中序遍历 */</span>
  <span class="token function">middleOrder</span> <span class="token punctuation">(</span>treeNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>treeNode <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">middleOrder</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span>
      treeNode<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">middleOrder</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 后序遍历 */</span>
  <span class="token function">laterOrder</span> <span class="token punctuation">(</span>treeNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>treeNode <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">laterOrder</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">laterOrder</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">,</span>
      treeNode<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 获取树的最小值的节点 */</span>
  <span class="token function">getMin</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> ITree <span class="token punctuation">{</span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root
    <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>current<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> current
      <span class="token punctuation">}</span>
      current <span class="token operator">=</span> current<span class="token punctuation">.</span>left
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 获取树的最大值的节点 */</span>
  <span class="token function">getMax</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> ITree <span class="token punctuation">{</span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root
    <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>current<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> current
      <span class="token punctuation">}</span>
      current <span class="token operator">=</span> current<span class="token punctuation">.</span>right
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 获取树的深度 */</span>
  <span class="token function">getDeep</span> <span class="token punctuation">(</span>treeNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">,</span> deep <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>treeNode <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> deep
    deep<span class="token operator">++</span>
    <span class="token keyword">const</span> dleft <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDeep</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">.</span>left<span class="token punctuation">,</span> deep<span class="token punctuation">)</span>
    <span class="token keyword">const</span> dright <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDeep</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">.</span>right<span class="token punctuation">,</span> deep<span class="token punctuation">)</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dleft<span class="token punctuation">,</span> dright<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 测试代码 */</span>
<span class="token keyword">const</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tree</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
t<span class="token punctuation">.</span><span class="token function">insertNode</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
t<span class="token punctuation">.</span><span class="token function">inserNodes</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;节点遍历&#39;</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">preOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">middleOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">laterOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;节点最值：&#39;</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">getMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">getMax</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;节点深度：&#39;</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">getDeep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="二叉树的遍历" tabindex="-1"><a class="header-anchor" href="#二叉树的遍历"><span>二叉树的遍历</span></a></h3><h4 id="二叉树的前序遍历" tabindex="-1"><a class="header-anchor" href="#二叉树的前序遍历"><span>二叉树的前序遍历</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 二叉树的前序遍历</span>
取根节点为目标节点，开始遍历：
	<span class="token number">1</span>. 访问目标节点。
  <span class="token number">2</span>. 左孩子入栈 -<span class="token operator">&gt;</span> 直至左孩子为空的节点。
  <span class="token number">3</span>. 节点出栈，以右孩子为目标节点，再依次执行步骤 <span class="token number">1</span>、2、3。


<span class="token comment">### 示例</span>
输入: <span class="token punctuation">[</span><span class="token number">1</span>,null,2,3<span class="token punctuation">]</span>  
   <span class="token number">1</span>
    <span class="token punctuation">\\</span>
     <span class="token number">2</span>
    /
   <span class="token number">3</span> 
输出: <span class="token punctuation">[</span><span class="token number">1,2</span>,3<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="【非递归实现前序遍历】" tabindex="-1"><a class="header-anchor" href="#【非递归实现前序遍历】"><span>【非递归实现前序遍历】</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 二叉树的前序遍历
 * <span class="token keyword">@param</span> <span class="token parameter">root</span> 树的根节点
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">preorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> curNode <span class="token operator">=</span> root

  <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode <span class="token operator">||</span> stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span>
      curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>left
    <span class="token punctuation">}</span>

    curNode <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>right
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="【递归实现前序遍历】" tabindex="-1"><a class="header-anchor" href="#【递归实现前序遍历】"><span>【递归实现前序遍历】</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 二叉树的前序遍历
 * <span class="token keyword">@param</span> <span class="token parameter">root</span> 树的根节点
 * <span class="token keyword">@param</span> <span class="token parameter">result</span> 导出的遍历结果：数组
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">preorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token function">preorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
    <span class="token function">preorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="二叉树的中序遍历" tabindex="-1"><a class="header-anchor" href="#二叉树的中序遍历"><span>二叉树的中序遍历</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 二叉树的中序遍历</span>
取根节点为目标节点，开始遍历：
  <span class="token number">1</span>. 左孩子入栈 -<span class="token operator">&gt;</span> 直至左孩子为空的节点。
  <span class="token number">2</span>. 节点出栈 -<span class="token operator">&gt;</span> 访问该节点。
  <span class="token number">3</span>. 以右孩子为目标节点，再依次执行步骤 <span class="token number">1</span>、2、3。


<span class="token comment">### 示例</span>
输入: <span class="token punctuation">[</span><span class="token number">1</span>,null,2,3<span class="token punctuation">]</span>
   <span class="token number">1</span>
    <span class="token punctuation">\\</span>
     <span class="token number">2</span>
    /
   <span class="token number">3</span>
输出: <span class="token punctuation">[</span><span class="token number">1,3</span>,2<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="【非递归实现中序遍历】" tabindex="-1"><a class="header-anchor" href="#【非递归实现中序遍历】"><span>【非递归实现中序遍历】</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 二叉树的中序遍历
 * <span class="token keyword">@param</span> <span class="token parameter">root</span> 树的根节点
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">inorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> curNode <span class="token operator">=</span> root

  <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode <span class="token operator">||</span> stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span>
      curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>left
    <span class="token punctuation">}</span>

    curNode <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>right
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="【递归实现中序遍历】" tabindex="-1"><a class="header-anchor" href="#【递归实现中序遍历】"><span>【递归实现中序遍历】</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 二叉树的中序遍历
 * <span class="token keyword">@param</span> <span class="token parameter">root</span> 树的根节点
 * <span class="token keyword">@param</span> <span class="token parameter">result</span> 导出的遍历结果：数组
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">inorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="二叉树的后序遍历" tabindex="-1"><a class="header-anchor" href="#二叉树的后序遍历"><span>二叉树的后序遍历</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 二叉树的后序遍历</span>
取根节点为目标节点，开始遍历：
  <span class="token number">1</span>. 左孩子入栈 -<span class="token operator">&gt;</span> 直至左孩子为空的节点。
  <span class="token number">2</span>. 栈顶节点的右节点为空或右节点被访问过 -<span class="token operator">&gt;</span> 节点出栈并访问它，将节点标记为已访问。
  <span class="token number">3</span>. 栈顶节点的右节点不为空且未被访问，以右孩子为目标节点，再依次执行步骤 <span class="token number">1</span>、2、3。


<span class="token comment">### 示例</span>
输入: <span class="token punctuation">[</span><span class="token number">1</span>,null,2,3<span class="token punctuation">]</span>  
   <span class="token number">1</span>
    <span class="token punctuation">\\</span>
     <span class="token number">2</span>
    /
   <span class="token number">3</span> 
输出: <span class="token punctuation">[</span><span class="token number">3,2</span>,1<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="【非递归实现后序遍历】" tabindex="-1"><a class="header-anchor" href="#【非递归实现后序遍历】"><span>【非递归实现后序遍历】</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 二叉树的后序遍历
 * <span class="token keyword">@param</span> <span class="token parameter">root</span> 树的根节点
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">postorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> last <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// 标记上一个访问的节点</span>
  <span class="token keyword">let</span> curNode <span class="token operator">=</span> root

  <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode <span class="token operator">||</span> stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span>
      curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>left
    <span class="token punctuation">}</span>

    curNode <span class="token operator">=</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>curNode<span class="token punctuation">.</span>right <span class="token operator">||</span> curNode<span class="token punctuation">.</span>right <span class="token operator">===</span> last<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      curNode <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curNode<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      last <span class="token operator">=</span> curNode
      curNode <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// 继续弹栈</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>right
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="【递归实现后序遍历】" tabindex="-1"><a class="header-anchor" href="#【递归实现后序遍历】"><span>【递归实现后序遍历】</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 二叉树的后序遍历
 * <span class="token keyword">@param</span> <span class="token parameter">root</span> 树的根节点
 * <span class="token keyword">@param</span> <span class="token parameter">result</span> 导出的遍历结果：数组
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">postorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> <span class="token literal-property property">result</span><span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">postorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
    <span class="token function">postorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="二叉树的重建" tabindex="-1"><a class="header-anchor" href="#二叉树的重建"><span>二叉树的重建</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 二叉树的重建</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="二叉树的对称性" tabindex="-1"><a class="header-anchor" href="#二叉树的对称性"><span>二叉树的对称性</span></a></h3><h4 id="对称的二叉树" tabindex="-1"><a class="header-anchor" href="#对称的二叉树"><span>对称的二叉树</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h4 id="对称的二叉树-1" tabindex="-1"><a class="header-anchor" href="#对称的二叉树-1"><span>对称的二叉树</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1</p></blockquote><h3 id="二叉树的深度" tabindex="-1"><a class="header-anchor" href="#二叉树的深度"><span>二叉树的深度</span></a></h3><h4 id="二叉树的最大深度" tabindex="-1"><a class="header-anchor" href="#二叉树的最大深度"><span>二叉树的最大深度</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h4 id="二叉树的最小深度" tabindex="-1"><a class="header-anchor" href="#二叉树的最小深度"><span>二叉树的最小深度</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h4 id="平衡二叉树" tabindex="-1"><a class="header-anchor" href="#平衡二叉树"><span>平衡二叉树</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h3 id="二叉搜索树-bst" tabindex="-1"><a class="header-anchor" href="#二叉搜索树-bst"><span>二叉搜索树 BST</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 二叉搜索树 BST(Binary Search Tree)</span>
<span class="token comment">### 描述</span>
是二叉树的一种，专注于检索，特点是让节点按照一定的规律摆放，从而让搜索某个节点特别的高效。
如果以根节点划分二叉搜索树，左子树里的节点全部小于根节点，右子树全部大于根节点；而且无论以哪个节点作为根节点来划分，规律亦是如此。
注意：二叉搜索树每个节点的值必须具备可比较性。

<span class="token comment">## 作用</span>
当我们需要检索一个值时，如果大于该节点就去右子树查找，如果小于就去该节点的左子树查找，每次都可以过滤一半查找返回。例如图中一共有15个数字，找到数字33根据比对只需要查找4次即可。


<span class="token comment">## 插入</span>
根据二叉搜索树的定义，所以需要保证无论往这棵树上增加多少个节点，都需要保证其定义不被破坏。
当遇到一个新的节点需要插入时，我们可以与根节点进行比较：
  - 如果比根节点值大就放入右子树内；
  - 如果比根节点值小，就放入左子树内；
使用这样的插入规则，逐层往下，当遇到一个节点的孩子为空，将新节点设置为其新的孩子节点即可。


<span class="token comment">## 查找</span>
关于二叉搜素树的搜索，根据二叉搜索树的特性从根节点开始逐层递归进行比较，对于每个节点：
  - 如果目标值等于节点的值，则返回节点；
  - 如果目标值小于节点的值，则继续在左子树中搜索；
  - 如果目标值大于节点的值，则继续在右子树中搜索；
  - 如果根据规则最后遇到了空节点，则说明这棵树里没有这个节点。


<span class="token comment">## 删除</span>
二叉搜索树最繁琐的就是删除，因为删除一个节点后，原来位置的节点并不会空着，必须找到替代的节点续上才行。续上后续节点而又保持二叉搜索树的定义分为几种情况：
  <span class="token number">1</span>. 只有一边有孩子节点：将另一边孩子节点续上即可。
  <span class="token number">2</span>. 两边都有孩子节点：有两种处理方式，
    - 一种是在待删除节点的左子树里找到最大的值替代，然后切断其链接；
      指定树的最大值一定是在其左子树沿着右边一直找到最后那个非空节点的值。
    - 另一种是在待删除的右子树里找到最小值替代，然后切断其链接。
      根据二叉搜索树的特性，指定树的最小值一定是沿着左边一直找，最后找到的那个非空节点；而删除指定树的最小值节点，也只需用被删除节点的右子树续上即可。
需要注意点如下：
    - 如果目标节点 <span class="token string">&#39;没有子节点&#39;</span>，我们可以 <span class="token string">&#39;直接移除&#39;</span> 该目标节点。
    - 如果目标节点 <span class="token string">&#39;只有一个子节点&#39;</span>，我们可以用其子节点作为 <span class="token string">&#39;替换&#39;</span>。
    - 如果目标节点 <span class="token string">&#39;有两个子节点&#39;</span>，我们需要用其中序 <span class="token string">&#39;后继节点或前驱结点&#39;</span> 来替换，再删除该节点。
		
		
<span class="token comment">## 性能对比</span>
存储需要占用额外空间去保存节点的指针，但这一些是为了在搜索时使得性能优化。比如从 <span class="token number">100</span> 万条数据里查找对应数据，数组需要 O<span class="token punctuation">(</span>n<span class="token punctuation">)</span> 的复杂度，而二叉搜索树平均只需要 O<span class="token punctuation">(</span>logn<span class="token punctuation">)</span> 即可，也就是查找 <span class="token number">20</span> 次即可找到，当树的节点数量每次 ×2 的倍增时，查找的次数只是 +1 而已。而从 <span class="token number">100</span> 万条数据里移除某条数据时，数组需要 O<span class="token punctuation">(</span>n<span class="token punctuation">)</span> 的搬家操作，而二叉树每次也只需要 O<span class="token punctuation">(</span>logn<span class="token punctuation">)</span> 即可完成操作。
- 增加数据：数组 O<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>		二叉搜索树<span class="token punctuation">(</span>平均<span class="token punctuation">)</span>	O<span class="token punctuation">(</span>logn<span class="token punctuation">)</span>
- 查找数据：数组 O<span class="token punctuation">(</span>n<span class="token punctuation">)</span>		二叉搜索树<span class="token punctuation">(</span>平均<span class="token punctuation">)</span>	O<span class="token punctuation">(</span>logn<span class="token punctuation">)</span>
- 删除数据：数组 O<span class="token punctuation">(</span>n<span class="token punctuation">)</span>		二叉搜索树<span class="token punctuation">(</span>平均<span class="token punctuation">)</span>	O<span class="token punctuation">(</span>logn<span class="token punctuation">)</span>

在二叉搜索树的性能对比中需要加上平均时，是因为会出现极端的情况，如整一颗二叉树只有右节点，会使得查找的次数急剧增加。
所以二叉搜索树的缺点也很明显，极端情况下回退化成链表，这时它的任何操作会变成 O<span class="token punctuation">(</span>n<span class="token punctuation">)</span>。
为了避免这种情况出现，就需要使用自平衡二叉搜索树（AVL树、红黑树）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+H+'" alt="二叉查找树"></p><p><img src="'+R+'" alt="二叉搜索树添加节点"></p><p><img src="'+z+'" alt="二叉搜索树查找节点"></p><p><img src="'+P+`" alt="二叉搜索树删除节点"></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** 节点类（记录每个节点上下关联） */</span>
<span class="token keyword">class</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
    <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// 左孩子</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// 右孩子</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/** 树类 */</span>
<span class="token keyword">class</span> <span class="token class-name">BST</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// 根节点</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 插入新节点 */</span>
  <span class="token function">insertNode</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>insertArr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">_helper</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果某个节点的子节点为空，创建新节点返回</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 如果当前节点比 val 大，新节点需要放在其左子树里</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>value <span class="token operator">&gt;</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 以当前节点左孩子为起点，返回新的左孩子节点</span>
        node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">_helper</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
        <span class="token keyword">return</span> node <span class="token comment">// 返回新的结点</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">_helper</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
        <span class="token keyword">return</span> node
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 从根节点开始插入value，返回新节点</span>
    insertArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> <span class="token function">_helper</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>


  <span class="token doc-comment comment">/** 查找子节点 */</span>
  <span class="token function">searchNode</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">_helper</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果找到最底层节点也没找到</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
      <span class="token comment">// 正好找到</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>value <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token keyword">return</span> node
      <span class="token comment">// 如果比当前节点小，则去左子树查找，否则往右子树查找</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>value <span class="token operator">&gt;</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">_helper</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">_helper</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 从跟节点开始查找</span>
    <span class="token keyword">return</span> <span class="token function">_helper</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>


  <span class="token doc-comment comment">/** 删除子节点 */</span>
  <span class="token function">deleteNode</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 找到要删除的节点</span>
    <span class="token keyword">const</span> <span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> node<span class="token punctuation">.</span>left<span class="token punctuation">.</span>value <span class="token operator">||</span> val <span class="token operator">===</span> node<span class="token punctuation">.</span>right<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> parent <span class="token operator">=</span> node<span class="token punctuation">.</span>left<span class="token punctuation">.</span>value <span class="token operator">===</span> val <span class="token operator">?</span> node<span class="token punctuation">.</span>left <span class="token operator">:</span> node<span class="token punctuation">.</span>right
        <span class="token keyword">const</span> where <span class="token operator">=</span> node<span class="token punctuation">.</span>left<span class="token punctuation">.</span>value <span class="token operator">===</span> val <span class="token operator">?</span> <span class="token string">&#39;left&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;right&#39;</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>node<span class="token punctuation">,</span> parent<span class="token punctuation">,</span> where<span class="token punctuation">]</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> where <span class="token operator">=</span> node<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> val <span class="token operator">?</span> <span class="token string">&#39;right&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;left&#39;</span>
        <span class="token keyword">return</span> <span class="token function">search</span><span class="token punctuation">(</span>node<span class="token punctuation">[</span>where<span class="token punctuation">]</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 保存要删除的节点，要删除节点的父节点，已经删除的左右方向</span>
    <span class="token keyword">let</span> <span class="token punctuation">[</span>node<span class="token punctuation">,</span> parent<span class="token punctuation">,</span> where<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> parent<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">[</span>where<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">[</span>where<span class="token punctuation">]</span> <span class="token operator">=</span> parent<span class="token punctuation">.</span>right
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">[</span>where<span class="token punctuation">]</span> <span class="token operator">=</span> parent<span class="token punctuation">.</span>left
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> empty <span class="token operator">=</span> parent
        <span class="token comment">// 找到左子树中最小的节点</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>empty<span class="token punctuation">.</span>left<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          empty <span class="token operator">=</span> empty<span class="token punctuation">.</span>left
        <span class="token punctuation">}</span>
        <span class="token comment">// 把最左侧的底层节点移动到被删除的节点位置上</span>
        parent<span class="token punctuation">.</span>value <span class="token operator">=</span> empty<span class="token punctuation">.</span>left<span class="token punctuation">.</span>value
        empty<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  
  <span class="token doc-comment comment">/** 修改节点（注意：该实现在修改后并没有重排树，可能会造成使得树不再是二叉搜索树结构） */</span>
  <span class="token function">replaceNode</span><span class="token punctuation">(</span><span class="token parameter">oldVal<span class="token punctuation">,</span> newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">replaceHelper</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>value <span class="token operator">===</span> oldVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> node<span class="token punctuation">.</span>value <span class="token operator">=</span> newVal
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>value <span class="token operator">===</span> oldVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">replaceHelper</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> oldVal<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">replaceHelper</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> oldVal<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">replaceHelper</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> bst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BST</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
bst<span class="token punctuation">.</span><span class="token function">insertNode</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">37</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">)</span>
bst<span class="token punctuation">.</span><span class="token function">insertNode</span><span class="token punctuation">(</span><span class="token number">28</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bst<span class="token punctuation">.</span>root<span class="token punctuation">)</span> <span class="token comment">// 插入节点</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bst<span class="token punctuation">.</span><span class="token function">searchNode</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 查找节点</span>
bst<span class="token punctuation">.</span><span class="token function">deleteNode</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bst<span class="token punctuation">.</span>root<span class="token punctuation">)</span> <span class="token comment">// 删除节点</span>
bst<span class="token punctuation">.</span><span class="token function">replaceNode</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bst<span class="token punctuation">.</span>root<span class="token punctuation">)</span> <span class="token comment">// 修改节点</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,226),K=[Q];function W(Y,X){return s(),a("div",null,K)}const Z=n(J,[["render",W],["__file","数据结构.html.vue"]]),G=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E7%AE%97%E6%B3%95/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html","title":"","lang":"zh-CN","frontmatter":{"Author":"willysliang","CreateTime":"2022-08-21T16:15:38.000Z","Modifier":"willysliang","ModifiedTime":"2023-02-23T15:48:56.000Z","Description":"数据结构"},"headers":[{"level":2,"title":"数据结构","slug":"数据结构","link":"#数据结构","children":[]},{"level":2,"title":"术语说明","slug":"术语说明","link":"#术语说明","children":[{"level":3,"title":"时间复杂度 TimeComplexity","slug":"时间复杂度-timecomplexity","link":"#时间复杂度-timecomplexity","children":[]},{"level":3,"title":"逻辑结构 LogicalStructure","slug":"逻辑结构-logicalstructure","link":"#逻辑结构-logicalstructure","children":[]}]},{"level":2,"title":"算法思想","slug":"算法思想","link":"#算法思想","children":[{"level":3,"title":"广度优先遍历BFS","slug":"广度优先遍历bfs","link":"#广度优先遍历bfs","children":[]},{"level":3,"title":"深度优先遍历DFS","slug":"深度优先遍历dfs","link":"#深度优先遍历dfs","children":[]},{"level":3,"title":"波兰式/逆波兰式","slug":"波兰式-逆波兰式","link":"#波兰式-逆波兰式","children":[]},{"level":3,"title":"递归 Recursion","slug":"递归-recursion","link":"#递归-recursion","children":[]},{"level":3,"title":"回溯算法 Backtracking algorithm","slug":"回溯算法-backtracking-algorithm","link":"#回溯算法-backtracking-algorithm","children":[]},{"level":3,"title":"动态规划","slug":"动态规划","link":"#动态规划","children":[]},{"level":3,"title":"贪心算法","slug":"贪心算法","link":"#贪心算法","children":[]},{"level":3,"title":"贪心算法、动态规划、回溯的区别","slug":"贪心算法、动态规划、回溯的区别","link":"#贪心算法、动态规划、回溯的区别","children":[]},{"level":3,"title":"分治法","slug":"分治法","link":"#分治法","children":[]}]},{"level":2,"title":"搜素查找 Search","slug":"搜素查找-search","link":"#搜素查找-search","children":[{"level":3,"title":"二分查找  BinarySearch","slug":"二分查找-binarysearch","link":"#二分查找-binarysearch","children":[]},{"level":3,"title":"跳跃搜索 JumpSearch","slug":"跳跃搜索-jumpsearch","link":"#跳跃搜索-jumpsearch","children":[]},{"level":3,"title":"插值查找 Interpolation Search","slug":"插值查找-interpolation-search","link":"#插值查找-interpolation-search","children":[]},{"level":3,"title":"指数查找 Exponential Search","slug":"指数查找-exponential-search","link":"#指数查找-exponential-search","children":[]}]},{"level":2,"title":"十大排序 Sort","slug":"十大排序-sort","link":"#十大排序-sort","children":[{"level":3,"title":"冒泡排序 BubbleSort","slug":"冒泡排序-bubblesort","link":"#冒泡排序-bubblesort","children":[]},{"level":3,"title":"选择排序 SelectionSort","slug":"选择排序-selectionsort","link":"#选择排序-selectionsort","children":[]},{"level":3,"title":"快速排序 QuickSort","slug":"快速排序-quicksort","link":"#快速排序-quicksort","children":[]},{"level":3,"title":"插入排序 InsertSort","slug":"插入排序-insertsort","link":"#插入排序-insertsort","children":[]},{"level":3,"title":"归并排序 MergeSort","slug":"归并排序-mergesort","link":"#归并排序-mergesort","children":[]},{"level":3,"title":"希尔排序 ShellSort","slug":"希尔排序-shellsort","link":"#希尔排序-shellsort","children":[]},{"level":3,"title":"堆排序 HeapSort","slug":"堆排序-heapsort","link":"#堆排序-heapsort","children":[]},{"level":3,"title":"计数排序 CountingSort","slug":"计数排序-countingsort","link":"#计数排序-countingsort","children":[]},{"level":3,"title":"桶排序 BucketSort","slug":"桶排序-bucketsort","link":"#桶排序-bucketsort","children":[]},{"level":3,"title":"基数排序 RadixSort","slug":"基数排序-radixsort","link":"#基数排序-radixsort","children":[]}]},{"level":2,"title":"经典算法","slug":"经典算法","link":"#经典算法","children":[{"level":3,"title":"素数(质数)","slug":"素数-质数","link":"#素数-质数","children":[]},{"level":3,"title":"杨辉三角形","slug":"杨辉三角形","link":"#杨辉三角形","children":[]},{"level":3,"title":"K均值","slug":"k均值","link":"#k均值","children":[]},{"level":3,"title":"数组乱序 - 洗牌算法","slug":"数组乱序-洗牌算法","link":"#数组乱序-洗牌算法","children":[]}]},{"level":2,"title":"字符串 String","slug":"字符串-string","link":"#字符串-string","children":[{"level":3,"title":"判断字符串是否表示为数值","slug":"判断字符串是否表示为数值","link":"#判断字符串是否表示为数值","children":[]},{"level":3,"title":"替换空格","slug":"替换空格","link":"#替换空格","children":[]},{"level":3,"title":"正则表达式匹配","slug":"正则表达式匹配","link":"#正则表达式匹配","children":[]}]},{"level":2,"title":"数组 Array","slug":"数组-array","link":"#数组-array","children":[{"level":3,"title":"双指针","slug":"双指针","link":"#双指针","children":[]},{"level":3,"title":"N数之和","slug":"n数之和","link":"#n数之和","children":[]},{"level":3,"title":"二维数组","slug":"二维数组","link":"#二维数组","children":[]},{"level":3,"title":"数据统计","slug":"数据统计","link":"#数据统计","children":[]}]},{"level":2,"title":"链表 LinkedList","slug":"链表-linkedlist","link":"#链表-linkedlist","children":[{"level":3,"title":"单向链表","slug":"单向链表","link":"#单向链表","children":[]},{"level":3,"title":"双指针","slug":"双指针-1","link":"#双指针-1","children":[]},{"level":3,"title":"双向链表","slug":"双向链表","link":"#双向链表","children":[]},{"level":3,"title":"循环列表(环类)","slug":"循环列表-环类","link":"#循环列表-环类","children":[]},{"level":3,"title":"JS & 链表","slug":"js-链表","link":"#js-链表","children":[]}]},{"level":2,"title":"队列 Queue","slug":"队列-queue","link":"#队列-queue","children":[{"level":3,"title":"单链队列","slug":"单链队列","link":"#单链队列","children":[]},{"level":3,"title":"链表实现队列","slug":"链表实现队列","link":"#链表实现队列","children":[]},{"level":3,"title":"循环队列","slug":"循环队列","link":"#循环队列","children":[]}]},{"level":2,"title":"栈 Stack","slug":"栈-stack","link":"#栈-stack","children":[]},{"level":2,"title":"栈和队列","slug":"栈和队列","link":"#栈和队列","children":[]},{"level":2,"title":"堆 Heap","slug":"堆-heap","link":"#堆-heap","children":[{"level":3,"title":"堆的构建 CreateHeap","slug":"堆的构建-createheap","link":"#堆的构建-createheap","children":[]}]},{"level":2,"title":"哈希表 HashTable","slug":"哈希表-hashtable","link":"#哈希表-hashtable","children":[]},{"level":2,"title":"二叉树 BinaryTree","slug":"二叉树-binarytree","link":"#二叉树-binarytree","children":[{"level":3,"title":"二叉树基本操作","slug":"二叉树基本操作","link":"#二叉树基本操作","children":[]},{"level":3,"title":"二叉树的遍历","slug":"二叉树的遍历","link":"#二叉树的遍历","children":[]},{"level":3,"title":"二叉树的重建","slug":"二叉树的重建","link":"#二叉树的重建","children":[]},{"level":3,"title":"二叉树的对称性","slug":"二叉树的对称性","link":"#二叉树的对称性","children":[]},{"level":3,"title":"二叉树的深度","slug":"二叉树的深度","link":"#二叉树的深度","children":[]},{"level":3,"title":"二叉搜索树 BST","slug":"二叉搜索树-bst","link":"#二叉搜索树-bst","children":[]}]}],"git":{"updatedTime":1706333659000,"contributors":[{"name":"willy","email":"willysliang","commits":10}]},"filePathRelative":"前端算法/数据结构.md"}');export{Z as comp,G as data};
